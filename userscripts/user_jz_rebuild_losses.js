/********************************************
 * JZ Rebuild Losses v0.9.10
 * Update targets variable to fit your needs.
 * setRefresTimeout at #319 is optional, comment out if you dont need it.
 * target colours are:
 * 	red: below target
 * 	orange: below target but in production
 * 	green: on or over target
 *  *SUGGESIONS WELCOME*
 ********************************************/

var populationNow;
var populationMax;
var populationToMax;
var assignedUnits;
var targets = {
	"Recruit": 3000,
	"Militia": 1000,
	"Soldier": 1000,
	"EliteSoldier": 2000,
	"Cavalry": 1000,
	"Bowman": 1000,
	"Longbowman": 1000,
	"Crossbowman": 1500,
	"Cannoneer": 1000,
	"Swordsman": 3000,
	"MountedSwordsman": 2000,
	"Knight": 2000,
	"Marksman": 50,
	"ArmoredMarksman": 600,
	"MountedMarksman": 1000,
	"Besieger": 600
  };
var breadPeople = 0;
var breadPeopleBuffId;
var inProduction = {};
var productionDetails = {};
var totalRequiredProduction = 0;
var newRequiredProduction = 0;
var freeSettlers = 0;
var allDisabled = false;
var dBuffListVO = swmmo.getDefinitionByName("Communication.VO::dBuffListVO");
var dBuffVO = swmmo.getDefinitionByName("Communication.VO::dBuffVO");
var dTimedProductionVO = swmmo.getDefinitionByName("Communication.VO::dTimedProductionVO");
var cTimedProductionUtl = swmmo.getDefinitionByName("TimedProduction::cTimedProductionUtl");

addToolsMenuItem("JZ Rebuild Losses", RebuildLosses);

function RebuildLosses(event)
{
	if(game.gi.isOnHomzone() == false) {
		game.showAlert(getText('not_home'));
		return;
	}
	inProduction = {};
	totalRequiredProduction = 0;
	newRequiredProduction = 0;
	breadPeople = 0;
	freeSettlers = 0;
	productionDetails = {};
	populationNow = 0;
	populationMax = 0;
	populationToMax = 0;
	assignedUnits = {};

	// close all other modals
	$( "div[role='dialog']:not(#rebuildLossesModal):visible").modal("hide");
	// create modal
	createModalWindow('rebuildLossesModal', 'Queue troops production');
	$("#rebuildLossesModal, .modal-body").css({
		"margin-top": -10,
		"padding-top": 0,
	});
	$("modal-header").css({
		"padding-bottom": 0
	});
	$('#rebuildLossesModalData').html(RebuildLossesModal());
	$('#rebuildLossesModalData .showlevelbtn').click(ex_get_level);
	$('#rebuildLossesModal:not(:visible)').modal({backdrop: "static"});
	$('button.topupPopBtn').click(function(event) {topUpPopulation();});
	$('#rebuildLossesModal .queueBuild').click(jz_QueueBarracks);
	$('#rebuildLossesModal .plus500').click(jz_QueueBarracks);
    // $("#rebuildLossesModal").css("opacity", 0.8);
	if($('#rebuildLossesModal .modal-footer .refreshunitsprodbtn').length == 0)
	{
		$("#rebuildLossesModal .modal-footer").prepend([
			$('<button>').attr({ "id": "refreshunitsprodbtn", "class": "btn btn-sm d-block refreshunitsprodbtn" })
				.text('Refresh')
				.click(function(event) {jz_QUP_refresh();}),
		]);
	};
}

function jz_QUP_refresh(){
	RebuildLosses();
}

function RebuildLossesModal()
{
	try{
		freeSettlers = swmmo.application.mGameInterface.mCurrentPlayerZone.GetResources(game.gi.mCurrentPlayer).GetFree();
		assignedUnits = GetAsignedUnits();
		getBarracksProductionQueue();
		getElitteBarracksProductionQueue();
		GetPopUlation();
		var freeArmy = GetMilitaryUnits();

		// leaving room for settlers production buildings (50)
		var isTopUpDisabled = breadPeople <= 50 || populationToMax <= 50 ? ' disabled' : '';
		var out = '<div class="container-fluid">';
		out += '<div>Population: '+populationNow+' / '+populationMax+' to max: '+populationToMax+' bread people available: '+breadPeople+' <button type="button" style="margin-left=1rem;" class="btn btn-sm topupPopBtn'+isTopUpDisabled+'">Topup max-50</button></div>';
		out += freeArmy;
		out += '<div>In production: '+totalRequiredProduction+' all to target: '+newRequiredProduction+' free settlers:'+freeSettlers+'</div>';
		return out + '</div>';
	}
	catch(e){
		return '<div class="container-fluid"><H3>Error in script</H3><div>'+e+'</div></div>';
	}
}

function GetPopUlation(){
	var population_res_name = "Population";
	var population = swmmo.application.mGameInterface.mCurrentPlayerZone.GetResourcesForPlayerID(game.player.GetPlayerId()).GetPlayerResource(population_res_name);
	populationNow = population.amount;
	populationMax = population.maxLimit;

	populationToMax = populationMax - populationNow;

	buffVector = game.getBuffs();
	breadPeople = 0;
	buffVector.forEach(function(item){
		// air.Introspector.Console.log(item.GetResourceName_string() + " " + item.sortKey + " " + item.GetUniqueId() + " " + item.amount);
		if(item.GetResourceName_string() == population_res_name && item.sortKey == "2|addresource|population"){
			breadPeopleBuffId = item.GetUniqueId().uniqueID1;
			breadPeople = item.amount;
		}
	});
}

function GetMilitaryUnits(){
    var freeArmy = TA_getFreeArmyInfo();
    var out = utils.createTableRow([
        [2, "Unit"],
        [1, "un assigned"],
        [1, "assigned"],
        [1, "all"],
        [1, "target"],
        [2, "to target"],
        [1, "in production"],
        [3, "buttons"]], true);

    Object.keys(targets).forEach(function (name) {
        var assigned = assignedUnits[name] || 0;
        var targetAmount = targets[name] || 0;
        var inProductionAmount = inProduction[name] || 0;
        var unassigned = (freeArmy.filter(function (i) { return i.name_string === name })[0] || {}).amount || 0;
        var displayToTarget_str = displayToTarget(targetAmount, unassigned, assigned, name);
        var isDisabled = displayToTarget_str.indexOf('<span style="color: red;') != 0 || allDisabled ? ' disabled ' : '';
        var allDisabledAttr = allDisabled ? ' disabled ' : '';
        var queueBuildbtn = '<button type="button" class="btn btn-sm queueBuild" '+isDisabled+'data-unit='+name+'>Queue production</button>';
        var plus500btn = ' <button type="button" class="btn btn-sm plus500"' + 'plus500=true data-unit=' + name +allDisabledAttr+'>+500</button>';
        out += utils.createTableRow([
            [2, name],
            [1, unassigned],
            [1, assigned],
            [1, unassigned + assigned],
            [1, targets[name] || 0],
            [2, displayToTarget_str],
            [1, inProductionAmount],
            [3, queueBuildbtn + plus500btn]]);

        productionDetails[name] = { "toTarget": targetAmount - unassigned - assigned - inProductionAmount };
    });
    return out;
}

function displayToTarget(targetAmount, unAssigned, assigned, name){
	var toTarget = targetAmount - unAssigned - assigned;
	if(toTarget <= 0){
		return '<span style="color: green;font-weight:900;">Over target</span>';
	} else if(toTarget <= inProduction[name]){
		totalRequiredProduction += toTarget;
		return '<span style="color: orange;font-weight:900;">'+toTarget+'</span>';
	}
	else{
		newRequiredProduction += toTarget;
		return '<span style="color: red; font-weight:900;">'+toTarget+'</span>';
	}
}

function TA_getFreeArmyInfo()
{
	// this returns only free army, not all units
	var freeSquads = [];
	armyFreeInfo = {};
	game.zone.GetArmy(game.player.GetPlayerId()).GetSquadsCollection_vector().sort(game.def("MilitarySystem::cSquad").SortByCombatPriority).forEach(function(item){
		freeSquads.push(item);
	});

	return freeSquads;
}

function topUpPopulation(){
	if($('.topupPopBtn').hasClass('disabled')){
		return;
	}
	var populationId2 = 0;
	var APPLY_BUFF_LIST = 63; // server command id
	var targetGrid = game.zone.mStreetDataMap.getBuildingByName("Mayorhouse").GetGrid();

	var buffList = new dBuffListVO();
	buffList.buffList = new(game.def("mx.collections::ArrayCollection"));
	(buff = new dBuffVO()).uniqueId1 = breadPeopleBuffId; //dUniqueID
	buff.uniqueId2 = populationId2;
	if(breadPeople - (populationToMax - 50)>0){
		buff.amount = populationToMax - 50;
	}
	else{
		buff.amount = breadPeople;
	}
	// buff.amount = totalRequiredProduction;
	buffList.buffList.addItem(buff);
	buffList.target_string = "Mayorhouse";

	game.gi.SendServerAction(APPLY_BUFF_LIST, 0, targetGrid, 0, buffList);
}

function TriggerProduction(unitName, amount, stacks, isElite){
	var MILITARY_UNIT = 0;
	var ELITE_UNITS = 8;
	if(!unitName || !amount || !stacks){
		return;
	}
	var barracks_name = "Barracks";
	var elitteBarracks_name = "EliteBarracks";
	var timedProductionVO = new dTimedProductionVO();

	var buildingGrid = game.zone.mStreetDataMap.getBuildingByName(barracks_name).GetGrid();
	game.zone.mStreetDataMap.getBuildingByName(barracks_name).GetGrid();
	timedProductionVO.productionType = MILITARY_UNIT;
	if(isElite){
		buildingGrid = game.zone.mStreetDataMap.getBuildingByName(elitteBarracks_name).GetGrid();
		timedProductionVO.productionType = ELITE_UNITS;
	}

	timedProductionVO.type_string = unitName;
	timedProductionVO.amount = amount; // how many units to produce
	timedProductionVO.stacks = stacks; // how many times to repeat
	timedProductionVO.buildingGrid = buildingGrid;
	var START_TIMED_PRODUCTION = 91;
	game.gi.mClientMessages.SendMessagetoServer(START_TIMED_PRODUCTION, game.gi.mCurrentViewedZoneID, timedProductionVO);
}

function getBarracksProductionQueue(){
	var prodQueue0 = swmmo.application.mGameInterface.mCurrentPlayerZone.GetProductionQueue(0);

	if(!prodQueue0){
		return;
	}

	for(var i = 0; i < prodQueue0.mTimedProductions_vector.length; i++){
		var item = prodQueue0.mTimedProductions_vector[i];
		var productionVO = item.GetProductionOrder().GetProductionVO();
		if(!inProduction[productionVO.type_string]){
			inProduction[productionVO.type_string] = 0;
		}
		inProduction[productionVO.type_string] += productionVO.amount;
	};
	return inProduction;
}
function getElitteBarracksProductionQueue(){
	var prodQueue8 = swmmo.application.mGameInterface.mCurrentPlayerZone.GetProductionQueue(8);

	if(!prodQueue8){
		return;
	}

	for(var i = 0; i < prodQueue8.mTimedProductions_vector.length; i++){
		var item = prodQueue8.mTimedProductions_vector[i];
		var productionVO = item.GetProductionOrder().GetProductionVO();
		if(!inProduction[productionVO.type_string]){
			inProduction[productionVO.type_string] = 0;
		}
		inProduction[productionVO.type_string] += productionVO.amount;
	};
	return inProduction;
}

function jz_QueueBarracks(){
	var unitName = this.getAttribute("data-unit");
	var isplus500 = this.getAttribute('plus500');

	var amount = 1;
	var stacks = 1;
	var lessThan25 = 0;
	if(isplus500){
		amount = 25;
		stacks = 20;
	} else {
		var totalProduction = productionDetails[unitName].toTarget;
		if(isNaN(totalProduction) || totalProduction <= 0){return;}
		allDisabled = true;

		if(totalProduction > 25){
			amount = 25;
		} else {
			amount = totalProduction;
		}
		if(totalProduction > 25){
			stacks = Math.floor(totalProduction / 25);
		}
		lessThan25 = totalProduction - (stacks * 25);
	}
	var isElite = false;
	var eliteUnits = ["MountedMarksman", "MountedSwordsman", "Knight", "Besieger", "ArmoredMarksman", "Swordsman", "Marksman"];
	if(eliteUnits.indexOf(unitName) > -1){
		isElite = true;
	}
	if(enoughResources(unitName, amount*stacks)){
		TriggerProduction(unitName, amount, stacks, isElite);
		if(lessThan25 > 0){
			TriggerProduction(unitName, lessThan25, 1, isElite);
		}
		allDisabled = true;
		RebuildLosses();
	} else {
		allDisabled = false;
		RebuildLosses();
		return;
	}

	setRefreshTimeout(4000); // default 3s
}

function setRefreshTimeout(timeoutMS){
	setTimeout(function(){
		allDisabled = false;
		RebuildLosses();
	}, timeoutMS);
}

function enoughResources(unitName, amount){
	var resources = swmmo.application.mGameInterface.mCurrentPlayerZone.GetResourcesForPlayerID(game.player.GetPlayerId());
	var resourceNames = ["Population", "Beer", "BronzeSword", "Bow", "IronSword", "Horse", "Longbow", "SteelSword",
						 "Crossbow", "TitaniumSword", "Cannon", "PlatinumSword", "BattleHorse", "Archebuse"];
	var resourceAmounts = {};
	resourceNames.forEach(function(item){
		resourceAmounts[item] = resources.GetPlayerResource(item).amount;
	});
	var unitCost = getUnitCost(unitName);
	var totalCost = {};
	for(var key in unitCost){
		totalCost[key] = unitCost[key] * amount;
	}
	for(var i in totalCost){
		if(totalCost[i] > resourceAmounts[i]){
			alert("Not enough "+resourceNames[i]+": "+resourceAmounts[i]+" / "+totalCost[i]+" required");
			return false;
		}
	}
	return true;
}

function getUnitCost(unitName){
	var unitCosts = {
		"Recruit": 			{"Population": 1, "Beer": 5, "BronzeSword": 10},
		"Bowman": 			{"Population": 1, "Beer": 10, "Bow": 10},
		"Militia": 			{"Population": 1, "Beer": 10, "IronSword": 10},
		"Cavalry": 			{"Population": 1, "Beer": 30, "Horse": 40},
		"Longbowman":		{"Population": 1, "Beer": 20, "Longbow": 10},
		"Soldier": 			{"Population": 1, "Beer": 15, "SteelSword": 10},
		"Crossbowman": 		{"Population": 1, "Beer": 50, "Crossbow": 10},
		"EliteSoldier": 	{"Population": 1, "Beer": 50, "TitaniumSword": 10},
		"Cannoneer": 		{"Population": 1, "Beer": 50, "Cannon": 10},

		"Swordsman": 		{"Population": 1, "Beer": 50, "PlatinumSword": 1},
		"MountedSwordsman": {"Population": 1, "Beer": 50, "PlatinumSword": 2, "BattleHorse": 2},
		"Knight":			{"Population": 1, "Beer": 50, "BattleHorse": 1},
		"Marksman": 		{"Population": 1, "Beer": 50, "Archebuse": 1},
		"ArmoredMarksman": 	{"Population": 1, "Beer": 50, "PlatinumSword": 1, "Archebuse": 1},
		"MountedMarksman": 	{"Population": 1, "Beer": 50, "Archebuse": 2, "BattleHorse": 2},
		"Besieger": 		{"Population": 1, "Beer": 50, "Mortar": 1}
	};
	return unitCosts[unitName];
}

function GetAsignedUnits(){
	var assignedUnits = {};
	game.zone.GetSpecialists_vector().forEach(function(item){
		try {
			if(!(armySPECIALIST_TYPE.IsGeneral(item.GetType()) || item.GetType() == 12 || item.GetType() == 6) || item.getPlayerID() != game.player.GetPlayerId()) { return; }
			if(item == null || typeof item == 'undefined') { return; }
			item.GetArmy().GetSquadsCollection_vector().sort(game.def("MilitarySystem::cSquad").SortByCombatPriority).forEach(function(squad){
				if(!assignedUnits[squad.GetType()]){
					assignedUnits[squad.GetType()] = squad.GetAmount() || 0;
				} else {
					assignedUnits[squad.GetType()] += squad.GetAmount() || 0;
				}
			});
		} catch(e) {}
	});
	return assignedUnits;
}
