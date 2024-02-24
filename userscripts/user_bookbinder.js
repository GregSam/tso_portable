/////////////////////////////////////
////####Bookbinder production####////
/////////////////////////////////////

var BookbinderGridInt;

var codexResources = {
    'AdvancedPaper': 375,
    'BookFitting': 300,
    'Tome': 2
};
var tomeResources = {
	'IntermediatePaper': 605,
	'Letter': 415,
	'Manuscript': 5
};
var manuscriptResources = {
	'SimplePaper': 590,
	'Nib': 470,
	'Coin': 24
};

function BookbinderGrid()
{
	try{
		game.zone.mStreetDataMap.GetBuildings_vector().forEach(function(item){
			if (item === null) { return; }
			if(item.GetBuildingName_string() == "Bookbinder")
			{
				BookbinderGridInt = item.GetGrid();
			}
		});
	}
	catch(e)
	{
		game.showAlert("Couldn't read Bookbinder Grid!");
	}
}

function BookbinderHandle()
{
	BookbinderGrid();
	try{
		if(game.gi.isOnHomzone() == true && BookbinderGridInt)
		{
			var prodQueue2 = swmmo.application.mGameInterface.mCurrentPlayerZone.GetProductionQueue(2);

			var item = prodQueue2.mTimedProductions_vector[0];

			if(item == null)
			{
				game.showAlert("Bookbinder production vector - error!");
				return;
			}

			var productionVO = item.GetProductionOrder().GetProductionVO();
			// air.Introspector.Console.log(productionVO);
			if(productionVO == null)
			{
				startBookbinderProduction();
				return;
			}

			if(productionVO.producedItems == 0)
			{
				game.showAlert("Bookbinder book production - not finished yet!");
				return;
			}

			if(productionVO.producedItems == 1)
			{
				var cPlayerData = swmmo.application.mGameInterface.mHomePlayer;
				var IncCollectedTime = true;
				prodQueue2.finishProduction(cPlayerData, IncCollectedTime);
				game.gi.mClientMessages.SendMessagetoServer(141, game.gi.mCurrentViewedZoneID, 2);
				game.showAlert("Bookbinder book production picked up!");
				setTimeout(function(){startBookbinderProduction();}, 5000);
			}
		}
	}
	catch(e)
	{
		game.showAlert("Bookbinder book production - error!");
		air.Introspector.Console.log(e);
	}
}

function startBookbinderProduction(){
	var bookForProduction = getBookForProduction();
	game.showAlert("Adding to queue: "+bookForProduction);
	var EnoughRessBool = false;
	if(bookForProduction == "Manuscript")
	{
		EnoughRessBool = checkResourceRequirements(manuscriptResources);
	}
	if(bookForProduction == "Tome")
	{
		EnoughRessBool = checkResourceRequirements(tomeResources);
	}
	if(bookForProduction == "Codex")
	{
		EnoughRessBool = checkResourceRequirements(codexResources);
	}

	if(EnoughRessBool)
	{
		game.showAlert('No bookbinder book production active - start new book production');
		var dTimedProductionVO = swmmo.getDefinitionByName("Communication.VO::dTimedProductionVO");
		var timedProductionVO = new dTimedProductionVO();
		timedProductionVO.productionType = 2;
		timedProductionVO.type_string = bookForProduction;
		timedProductionVO.amount = 1;
		timedProductionVO.stacks = 1;
		timedProductionVO.buildingGrid = BookbinderGridInt;
		game.gi.mClientMessages.SendMessagetoServer(91, game.gi.mCurrentViewedZoneID, timedProductionVO);
	}
}

function getBookForProduction(){
	var baseManuscripts = 6
	var baseTomes = 9;
	var baseCodexs = 6;

	var currentResources = swmmo.application.mGameInterface.mCurrentPlayerZone.getResourcesFromCurrentZone();
	var manuscriptAmount = currentResources.GetResource("Manuscript").amount;
	var tomeAmount = currentResources.GetResource("Tome").amount;
	var codexResources = currentResources.GetResource("Codex").amount;

	var manuscriptsSets = Math.floor(manuscriptAmount / baseManuscripts);
	var tomesSets = Math.floor(tomeAmount / baseTomes);
	var codexSets = Math.floor(codexResources / baseCodexs);

	if (manuscriptsSets <= tomesSets && manuscriptsSets <= codexSets) {
		return 'Manuscript';
	} else if (tomesSets < manuscriptsSets && tomesSets < codexSets) {
		return 'Tome';
	} else {
		return 'Codex';
	}
}

function checkResourceRequirements(resourceReqs) {
    var EnoughRessBool = true;
	var currentResources = swmmo.application.mGameInterface.mCurrentPlayerZone.getResourcesFromCurrentZone();

	$.each(resourceReqs, function(resourceName, requiredAmount) {
		var resource = currentResources.GetResource(resourceName);
		if (resource === undefined || resource.amount < requiredAmount) {
			EnoughRessBool = false;
			game.showAlert('Not enough '+resourceName+' for book production!');
			return false; // Break the loop
		}
	});

    return EnoughRessBool;
}
