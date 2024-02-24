addToolsMenuItem("Hide Shop Items", hideShopItemsHandler);

const cShopItemGroup = swmmo.getDefinitionByName("ShopSystem::cShopItemGroup");
var cantBuySwitch = false;
var costsGemsSwitch = false;
var skinsSwitch = false;
var decorationsSwitch = false;
var resourcesSwitch = false;

var disabledItems = [];

function hideShopItemsHandler(event)
{
	$( "div[role='dialog']:not(#hideShopItemsModal):visible").modal("hide");
	createModalWindow('hideShopItemsModal', 'Hide shop items');
	$('#hideShopItemsModalData').html(hideShopItemsModal());
	$('#hideShopItemsModal:not(:visible)').modal({backdrop: "static"});

    if($('#hideShopItemsModal .modal-footer .resetshopitemsbtn').length == 0)
	{
		$("#hideShopItemsModal .modal-footer").prepend([
			$('<button>').attr({ "id": "applybtn", "class": "btn btn-sm d-block applybtn" }).text('Apply filters'),
			$('<button>').attr({ "id": "resetshopitemsbtn", "class": "btn btn-sm d-block resetshopitemsbtn" }).text('Reset'),
		]);

		$('button.applybtn').click(function(event) {hideShopItems(event);});
		$('button.resetshopitemsbtn').click(function(event) {hsi_reset(true);});
	}
    $('#cantBuySwitch').change(function(e) {cantBuySwitch = $(e.target).is(':checked');});
    $('#costsGemsSwitch').change(function(e) {costsGemsSwitch = $(e.target).is(':checked');});
    $('#skinsSwitch').change(function(e) {skinsSwitch = $(e.target).is(':checked');});
    $('#decorationsSwitch').change(function(e) {decorationsSwitch = $(e.target).is(':checked');});
    $('#resourcesSwitch').change(function(e) {resourcesSwitch = $(e.target).is(':checked');});
}

function hideShopItemsModal()
{
	var out = '<div class="container-fluid">';
    out += utils.createTableRow([[3, "Cannot buy anymore:"],[1, utils.createSwitch("cantBuySwitch", cantBuySwitch)]]);
    out += utils.createTableRow([[3, "Costs gems:"],[1, utils.createSwitch("costsGemsSwitch", costsGemsSwitch)]]);
    out += utils.createTableRow([[3, "Skins:"],[1, utils.createSwitch("skinsSwitch", skinsSwitch)]]);
    out += utils.createTableRow([[3, "Decorations:"],[1, utils.createSwitch("decorationsSwitch", decorationsSwitch)]]);
    out += utils.createTableRow([[3, "Resources:"],[1, utils.createSwitch("resourcesSwitch", resourcesSwitch)]]);
	return out + '</div>';
}

function hsi_reset(resetSwitches){
    for (var i = 0; i < disabledItems.length; i++) {
        const shopItem = disabledItems[i];
        shopItem.SethideInShop(false);
    }

    if(resetSwitches){
        cantBuySwitch = costsGemsSwitch = skinsSwitch = decorationsSwitch = resourcesSwitch = false;
        hideShopItemsHandler();
    }
}

function hideShopItems(exportShopItems) {
    const shopGroups = cShopItemGroup.GetAllShopItemGroups(false, game.gi);
    hsi_reset();
    for (var i = 0; i < shopGroups.length; i++) {
        const shopGroup = shopGroups[i];
        const shopItems = shopGroup.shopItems_vector;

        for (var j = 0; j < shopItems.length; j++) {
            const shopItem = shopItems[j];

            if (shopItem.hideInShop(game.gi) || shopItem.isItemHiddenInGroup(game.gi) || shopItem.GetCooldownPerPlayer() > 0) {
                continue;
            }

            var itemName = shopItem.GetName_string();
            // air.Introspector.Console.log("itemName: " + itemName, shopItem);
            var remainingCount;
            remainingCount = game.gi.shopManager.GetRemainingShopItemCount(shopItem);

            if (cantBuySwitch && remainingCount == 0) {
                // air.Introspector.Console.log("Hiding: " + itemName);
                shopItem.SethideInShop(true);
                disabledItems.push(shopItem);

                continue;
            }

            // Hide items that cost gems
            if(costsGemsSwitch && shopItem.GetCosts_vector()[0].name_string == "HardCurrency"){
                // air.Introspector.Console.log("Hiding: ", shopItem);
                shopItem.SethideInShop(true);
                disabledItems.push(shopItem);

                continue;
            }

            const contents = shopItem.GetShopItemContent_vector();

            if (contents.length != 1) {
                continue;
            }

            const content = contents[0];

            if (skinsSwitch && content.GetName_string().indexOf("Skin") != -1) {
                // air.Introspector.Console.log("Hiding: " + itemName);
                shopItem.SethideInShop(true);
                disabledItems.push(shopItem);

                continue;
            }

            // Hide decorations
            var SHOP_ITEM_DESCRIPTIONS_3 = "SD3";
            if(decorationsSwitch && loca.GetText(SHOP_ITEM_DESCRIPTIONS_3,itemName).indexOf("Decoration") != -1){
                // air.Introspector.Console.log("Hiding: " + itemName);
                shopItem.SethideInShop(true);
                disabledItems.push(shopItem);

                continue;
            }

            // Hide buffs and resources
            var ITEM_CONTENT_TYPE_BUFF = 0;
            var ITEM_CONTENT_TYPE_RESOURCE = 1;
            var contentType = content.GetType();
            if(resourcesSwitch && content.GetName_string() != "BuildBuilding" && (contentType == ITEM_CONTENT_TYPE_RESOURCE || contentType == ITEM_CONTENT_TYPE_BUFF)){
                // air.Introspector.Console.log("Hiding: " + itemName, shopItem);
                shopItem.SethideInShop(true);
                disabledItems.push(shopItem);

                continue;
            }
        }
    }
    $('#hideShopItemsModal').modal("hide");
    globalFlash.gui.mShopWindow.Show();
}