// use addMenuItem from main script
addToolsMenuItem("JZ Functions", FunctionsMenuHandler);

var GingerBreadGeo ={
	"uniqueId": "639822_0",
	"name": "Gingerbread Geologist",
	// "searchTime": 645*1000 // for copper search normal 10:30
	"searchTime": 530*1000 // for copper search with PFB
}

// ginger 2 1949612_0
var GingerBreadGeo2 = {
	"uniqueId": "1949612_0",
	"name": "Gingerbread Geologist 2",
	// "searchTime": 645*1000 // for copper search normal 10:30
	"searchTime": 530*1000 // for copper search with PFB
}

var GeoOnVacation = {
	"uniqueId": "237984_0",
	"name": "Geologist on Vacation",
	// "searchTime": 615*1000 // for copper search normal 10min
	"searchTime": 490*1000 // for copper search with PFB
}
var GeoOnVacation2 = {
	"uniqueId": "1027402_0",
	"name": "Geologist on Vacation 2",
	// "searchTime": 615*1000 // for copper search normal 10min
	"searchTime": 350*1000 // for copper search with PFB
}

var GeoOnVacation3 = {
	"uniqueId": "2991306_0",
	"name": "Geologist on Vacation 3",
	// "searchTime": 615*1000 // for copper search normal 10min
	"searchTime": 350*1000 // for copper search with PFB
}

function FunctionsMenuHandler(event)
{
	// close all modals
	$( "div[role='dialog']:not(#jzFunctionsModal):visible").modal("hide");
	$('#jzFunctionsModal').remove();
	// $( "div[role='dialog']").each(
	// 	function(){
	// 		var id = $(this).attr('id');
	// 		if(id == 'dummyModal') return;
	// 		$(this).modal().hide();
	// 		$('#'+id).remove();
	// 	}
	// );
	// $('#jzFunctionsModal').remove();
	// create modal
	createModalWindow('jzFunctionsModal', 'JZ functions modal window');
	// fill modal data
	$('#jzFunctionsModalData').html(JzFunctionsModalMake());
	// bind buttons
	$('#jzFunctionsModalData .function1').click(function1);
	$('#jzFunctionsModalData .function2').click(function2);
	$('#jzFunctionsModalData .function3').click(function3);
	$('#jzFunctionsModalData .function4').click(function4);
	$('#jzFunctionsModalData .function5').click(function5);
	$('#jzFunctionsModalData .function6').click(function6);
	$('#jzFunctionsModalData .function13').click(function13);
	$('#jzFunctionsModalData .function7').click(function7);
	$('#jzFunctionsModalData .function8').click(function8);
	$('#jzFunctionsModalData .function9').click(function9);
	$('#jzFunctionsModalData .function10').click(function10);
	$('#jzFunctionsModalData .function11').click(function11);
	$('#jzFunctionsModalData .function14').click(function14);
	$('#jzFunctionsModalData .function12').click(FootballResToMayor);
	$('#jzFunctionsModalData .ginger1FK').click(ginger1FK);
	$('#jzFunctionsModalData .ginger2FK').click(ginger2FK);
	$('#jzFunctionsModalData .geoOnVac1FK').click(geoOnVac1FK);
	$('#jzFunctionsModalData .geoOnVac2FK').click(geoOnVac2FK);
	// show modal
	$('#jzFunctionsModal:not(:visible)').modal({backdrop: "static"});
}

function function1()
{
	CheckAndSendExplorersOnOff();
}

function function2()
{
	BookbinderHandleJZ();
}

function function3(){
	AttackWhenReady();
}

function function4(){
	jz_loadRemainingArmy();
}

function function5(){
	getRequiredGenerals();
}

function function6(){
	// getGingerBreadGeo();
	farmWithGeologist(GingerBreadGeo);
}
function function13(){
	// getGingerBreadGeo();
	farmWithGeologist(GingerBreadGeo2);
}

function ginger1FK(){
	if(game.gi.isOnHomzone() == false) {
		game.showAlert(getText('not_home'));
		return;
	}
	var ginger1 = {
		"uniqueId": "30700_0",
		"name": "Gingerbread Geologist",
		"searchTime": 915*1000
	}
	farmWithGeologist(ginger1);
}

function ginger2FK(){
	if(game.gi.isOnHomzone() == false) {
		game.showAlert(getText('not_home'));
		return;
	}
	var ginger1 = {
		// '328855:0
		"uniqueId": "328855_0",
		"name": "Gingerbread Geologist",
		"searchTime": 915*1000
	}
	farmWithGeologist(ginger1);
}

function geoOnVac1FK(){
	if(game.gi.isOnHomzone() == false) {
		game.showAlert(getText('not_home'));
		return;
	}
	var geoOnVac1 = {
		"uniqueId": "93751_0",
		"name": "Geologist on Vacation",
		"searchTime": 615*1000
	}
	farmWithGeologist(geoOnVac1);
}

function geoOnVac2FK(){
	if(game.gi.isOnHomzone() == false) {
		game.showAlert(getText('not_home'));
		return;
	}
	var geoOnVac2 = {
		"uniqueId": "685209_0",
		"name": "Geologist on Vacation",
		"searchTime": 615*1000
	}
	farmWithGeologist(geoOnVac2);
}

function function7(){
	farmWithGeologist(GeoOnVacation);
}

function function8(){
	biggerMailWindow();
}

function function9(){
	biggerSpecialistWindow();
}

function function10(){
	var specsByPlayer = {};
	game.zone.GetSpecialists_vector().forEach(function(item){
		if(item.GetTask() == null) { return; }
		if(item.GetTask().GetType() == 7) // travel to zone
		{
			var playerid = item.getPlayerID();
			if(specsByPlayer.hasOwnProperty(playerid)){
				specsByPlayer[playerid].push({
					"playerName": getPlayerNameFromVector(playerid),
					"color": game.zone.GetPlayerColorIdx(playerid),
					// "spec": item,
					// "task": item.GetTask(),
					"remainingTime": Math.floor(item.GetTask().GetRemainingTime() / 1000 / 60) + ":" + Math.floor((item.GetTask().GetRemainingTime() / 1000) % 60)
				});
			} else {
				specsByPlayer[playerid] = [{
					"playerName": getPlayerNameFromVector(playerid),
					"color": game.zone.GetPlayerColorIdx(playerid),
					// "spec": item,
					// "task": item.GetTask(),
					"remainingTime": Math.floor(item.GetTask().GetRemainingTime() / 1000 / 60) + ":" + Math.floor((item.GetTask().GetRemainingTime() / 1000) % 60)

				}];
			}
		}
	});
	// air.Introspector.Console.log(specsByPlayer);
}

function function11(){
	farmWithGeologist(GeoOnVacation2);
}

function function14(){
	farmWithGeologist(GeoOnVacation3);
}

function FootballResToMayor(){
	var dBuffListVO = swmmo.getDefinitionByName("Communication.VO::dBuffListVO");
	var buffList = new dBuffListVO();
	buffList.buffList = new(game.def("mx.collections::ArrayCollection"));
	var dBuffVO = swmmo.getDefinitionByName("Communication.VO::dBuffVO");
	var footbalResources = ["WMShoulderPad","WMShoe","WMBanana","WMShoulderPad","WMStuds","WMHelmet",
		"WMRedColor","WMTelescope","WMWetGrass","WMFist","WMGrease","WMElasticSpring","WMDummy"];
	game.gi.mCurrentPlayer.getAvailableBuffs_vector()
		.forEach(function(item){
			if(footbalResources.indexOf(item.GetResourceName_string()) > -1) {
				var buff = new dBuffVO();
				buff.uniqueId1 = item.GetUniqueId().uniqueID1;
				buff.uniqueId2 = item.GetUniqueId().uniqueID2;
				buff.amount = item.GetAmount();
				buffList.buffList.addItem(buff);
			}
		}
	);
	buffList.target_string = "Mayorhouse";
	var APPLY_BUFF_LIST = 63; // server command id
	var targetGrid = game.zone.mStreetDataMap.getBuildingByName("Mayorhouse").GetGrid();
	game.gi.SendServerAction(APPLY_BUFF_LIST, 0, targetGrid, 0, buffList);
}

function getPlayerNameFromVector(playerid){
	var playersVector = swmmo.application.mGameInterface.GetPlayerList_vector();
	var playerName = "";
	playersVector.forEach(function(item){
		if(item.GetPlayerId() == playerid){
			playerName = item.GetPlayerName_string();
		}
	});
	return playerName;
}

function JzFunctionsModalMake()
{
	var out = '<div class="container-fluid"><H3>Hello from functions</H3>';
	out += utils.createTableRow([[3, '<button type="button" class="btn btn-primary function1">Send Explorers</button>'],[9, "Check And Send Explorers to short treasure hunt every 60s"]]);
	out += utils.createTableRow([[3, '<button type="button" class="btn btn-primary function2">BookBinder</button>'],[9, "Collect from bookbinder and queue new production"]]);
	out += utils.createTableRow([[3, '<button type="button" class="btn btn-primary function6">Farm with Ginger Geo</button>'],[9, "Sending, resetting copper mine, sending again"]]);
	out += utils.createTableRow([[3, '<button type="button" class="btn btn-primary function13">Farm with Ginger Geo 2</button>'],[9, "Sending, resetting copper mine, sending again"]]);
	out += utils.createTableRow([[3, '<button type="button" class="btn btn-primary function7">Farm with Geo on vacation</button>'],[9, "Sending, resetting copper mine, sending again"]]);
	out += utils.createTableRow([[3, '<button type="button" class="btn btn-primary function11">Farm with Geo on vacation 2</button>'],[9, "Sending, resetting copper mine, sending again"]]);
	out += utils.createTableRow([[3, '<button type="button" class="btn btn-primary function14">Farm with Geo on vacation 3</button>'],[9, "Sending, resetting copper mine, sending again"]]);
	out += utils.createTableRow([[3, '<button type="button" class="btn btn-primary ginger1FK">FK Farm with Ginger 1</button>'],[9, "Sending, resetting copper mine, sending again"]]);
	out += utils.createTableRow([[3, '<button type="button" class="btn btn-primary ginger2FK">FK Farm with Ginger 2</button>'],[9, "Sending, resetting copper mine, sending again"]]);
	out += utils.createTableRow([[3, '<button type="button" class="btn btn-primary geoOnVac1FK">FK Farm with Geo on vacation</button>'],[9, "Sending, resetting copper mine, sending again"]]);
	out += utils.createTableRow([[3, '<button type="button" class="btn btn-primary geoOnVac2FK">FK Farm with Geo on vacation 2</button>'],[9, "Sending, resetting copper mine, sending again"]]);
	out += utils.createTableRow([[3, '<button type="button" class="btn btn-primary function8">Bigger mail window</button>'],[9, "Bigger mail window"]]);
	out += utils.createTableRow([[3, ''],[9, ""]]);
	out += utils.createTableRow([[3, '<button type="button" class="btn btn-primary function3">Attack when ready</button>'],[9, "Send attack when ghost arrives"]]);
	out += utils.createTableRow([[3, '<button type="button" class="btn btn-primary function4">Load units</button>'],[9, "Load to Quartermaster"]]);
	out += utils.createTableRow([[3, '<button type="button" class="btn btn-primary function5">Get generals</button>'],[9, "Get generals"]]);
	out += utils.createTableRow([[3, '<button type="button" class="btn btn-primary function9">Bigger specialist window</button>'],[9, "Bigger specialist window"]]);
	out += utils.createTableRow([[3, '<button type="button" class="btn btn-primary function10">Get generals state</button>'],[9, "Get generals state"]]);
	out += utils.createTableRow([[3, '<button type="button" class="btn btn-primary function12">FootballResToMayor</button>'],[9, "FootballResToMayor"]]);

	// testingStuff();
	// out += getImageTag('SummerBundle_Small',50,50);
	// out += getImageTag('SummerBundle_Medium',50,50);
	// out += getImageTag('SummerBundle_Large',50,50);
	return out + '</div>';
}



// TombRaidersAutoHandler();
// function TombRaidersAutoHandler(){
// 	// if adv name == tombraider
// 	var adventureName = swmmo.application.mGameInterface.getAdventureName();
// 	if(adventureName != 'TombRaiders') { return; }

// 	showGameAlert("TombRaiders adventure detected!");
// 	// start attack when ready / function3
// 	AttackWhenReady();


// 	// start complete quests
// 	jz_handleQuestBook()

// }

function testingStuff(){
	// Quesues Ids
	// 0: Barracks
	// 1: ProvisionHouse
	// 2: Bookbinder
	// 4: Mayorhouse
	// 5: ProvisionHouse2
	// 6: ExpeditionWeaponSmith
	// 7: Barracks3
	// 8: EliteBarracks
	// 12: SoccerField
	// 15: Smokehouse
	// 16: Laboratory
	// 17: SpringPark
	// 18: SnackStand
	// 19: EspionageBuilding
	// 20: ChristmasMarket_Player
	// 24: AdventureBookbinder
	// 25: Harbour
	// 26: Oilmill
	// 27: ChristmasBakery
	// 28: LoveTree
	// 31: S4Lazaret
	// 36: BlackTree_Red
	// 37: ConcertHall
	// 38: LoversStatue
	// 41: ToyFactory
	// 42: Snowglobe
	// 43: Ostereierbaum
	// 45: SiegeWorkshop
	// 48: UnityEvent_Trophy
	// 50: CarnivalGrounds
	// 53: GiantTreeOfHope
	// 54: StarfallAirship
	// 55: RomanticRestaurant
	// air.Introspector.Console.log(globalFlash.gui.ShowBuilding("Bookbinder"));
	// air.Introspector.Console.log(globalFlash.gui.mSkillProductionPanel);
	// this.mPanel.pickUp.visible = false;

	// var DELIVER_PRODUCTION = 141;
	// var mProductionType = 2; // SKILL:int = 2
	// game.gi.mClientMessages.SendMessagetoServer(DELIVER_PRODUCTION, game.gi.mCurrentViewedZoneID, mProductionType);

	// for (var i = 0; i < 100; i++) {
	// 	var prodQueue = swmmo.application.mGameInterface.mCurrentPlayerZone.GetProductionQueue(i);
	// 	if (prodQueue == null) {
	// 		continue;
	// 	}
	// 	air.Introspector.Console.log(prodQueue);
	// 	air.Introspector.Console.log(i+": "+prodQueue.productionBuilding.GetBuildingName_string());
	// }

//  for (var i = 17; i < 20; i++) {var prodQueue = swmmo.application.mGameInterface.mCurrentPlayerZone.GetProductionQueue(i);if (prodQueue == null) {continue;}if(prodQueue.mTimedProductions_vector.length > 0 ){air.Introspector.Console.log(prodQueue.mTimedProductions_vector)};air.Introspector.Console.log(i+": "+prodQueue.productionBuilding.GetBuildingName_string());}

	// ORDER_TYPE"EffectTimedProduction"
	// name_string"ProductivityBuffZoneScienceLvl2"
	// EffectTimedProductionDefinition


	// working collection from mayor house
	// var MayorhouseProductionQueueId = 4;
	// var prodQueue4 = swmmo.application.mGameInterface.mCurrentPlayerZone.GetProductionQueue(MayorhouseProductionQueueId); // mayorhouse
	// // air.Introspector.Console.log(prodQueue4);
	// var mProductionType = prodQueue4.mProductionType;
	// var cPlayerData = swmmo.application.mGameInterface.mHomePlayer;
	// var IncCollectedTime = true;
	// prodQueue4.finishProduction(cPlayerData, IncCollectedTime);

	// var DELIVER_PRODUCTION = 141;
	// var mProductionType = prodQueue4.mProductionType;
	// game.gi.mClientMessages.SendMessagetoServer(DELIVER_PRODUCTION, game.gi.mCurrentViewedZoneID, mProductionType);


	// air.Introspector.Console.log(globalFlash.gui.mSkillProductionPanel); // mMayorhouseInfoPanel
	// globalFlash.gui.mMayorhouseInfoPanel.Show();
	// globalFlash.gui.mMayorhouseInfoPanel.showCollectiblesTab()
	// air.Introspector.Console.log(globalFlash.gui.mMayorhouseInfoPanel);
	// update(param1:Notifier, param2:String, param3:Object)
	// var PRODUCTION_FINISH = "ProductionFinish";
	// globalFlash.gui.mTimedProductionInfoPanel.update(null, PRODUCTION_FINISH, null);
	// global.ui.inputNotifier.notifyPropertyObserver(EVENT_HIDE,mUiElement.id);
	// dispatchEvent(new Event(CollectionEvent.PICK_UP_COLLECTION,true,false));
	// var PICK_UP_COLLECTION = "pickUpCollection";
	// var completeEvent = new window.runtime.flash.events.Event(PICK_UP_COLLECTION, true, false);
	// air.Introspector.Console.log(completeEvent);
	// globalFlash.gui.mMayorhouseInfoPanel.dispatchEvent(completeEvent);
	// globalFlash.gui.mTimedProductionInfoPanel.dispatchEvent(completeEvent);
	// air.Introspector.Console.log(globalFlash.gui.mMayorhouseInfoPanel);



	// buy collection at mayorhouse
	//   var _loc2_:dTimedProductionVO = new dTimedProductionVO();
	//   _loc2_.productionType = mBuilding.productionQueue.mProductionType;
	//   _loc2_.type_string = this.currentSelectedCollection.getName();
	//   _loc2_.amount = 1;
	//   _loc2_.buildingGrid = mBuilding.GetGrid();
	//   mGI.mClientMessages.SendMessagetoServer(COMMAND.START_TIMED_PRODUCTION,mGI.mCurrentViewedZoneID,_loc2_);
}


function channelObserver(){
	air.Introspector.Console.log(game.gi.channels);
	// swmmo.getDefinitionByName("global").buildingGroup.mGOList_vector.forEach(function(item){
	// 	if (item === null) { return; }
	// 	air.Introspector.Console.log(item.mId+" "+item.mGfxResourceListName_string);
	// bookbinder - 87
	// });



	// globalFlash.gui.mAvatarMessageList.AddMessage(this.productionReadyAvatarType);
	// globalFlash.gui.mChatPanel.PutMessageToChannelWithoutServer("news",new Date(),"System",message.messageBody.text,false,false);
	// listen to avatar messages
	var avMessObserver = game.getTracker('avMessObserver', allTrackersHandler);
	globalFlash.gui.mAvatarMessageList.addPropertyObserver("Bookbinder", avMessObserver);



	// var tBuffTracker = game.getTracker('buffTracker', prodTrackerHandler);
	// var BUFF_PRODUCED_string = "buffProduced";
	// game.gi.channels.BUFF.addPropertyObserver(BUFF_PRODUCED_string, tBuffTracker);

	// var buildingSelectedTracker = game.getTracker('bui2', prodTrackerHandler);
	// game.gi.channels.BUILDING.addPropertyObserver("buildingSelected", buildingSelectedTracker);

	// var timedProductionTracker = game.getTracker('timedProductionTracker', prodTrackerHandler);
	// var TIMED_PRODUCED_ITEMS_PROPERTY_NAME = "timedProducedItems";
	// game.gi.channels.TIMED_PRODUCTION.addPropertyObserver(TIMED_PRODUCED_ITEMS_PROPERTY_NAME, timedProductionTracker);


	// var specialistTracker = game.getTracker('specialistTracker', specialistTrackerHandler);
	// var SPECIALIST_TASK_FINISHED_string = "specialistownedlist";
	// game.gi.channels.SPECIALIST.addPropertyObserver(SPECIALIST_TASK_FINISHED_string, specialistTracker);

	// var specialistTracker2 = game.getTracker('specialistTracker2', specialistTrackerHandler);
	// var SPECIALIST_TASK_FINISHED_string2 = "specialisttaskresulttype";
	// game.gi.channels.SPECIALIST.addPropertyObserver(SPECIALIST_TASK_FINISHED_string2, specialistTracker2);


	// var taskTracker = game.getTracker('taskTracker', taskTrackerHandler);
	// var TASK_FINISHED = "taskFinished";
	// game.gi.channels.TASK_MANAGER.addPropertyObserver(TASK_FINISHED, taskTracker);

	// game.gi.channels.BUFF.addPropertyObserver(BUFF_PRODUCED_string, game.getTracker('taskTracker1', taskTrackerHandler));
	// BUFF.addPropertyObserver(cBuff.BUFF_APPLIED_string,this);
	// BUFF.addPropertyObserver(cBuff.BUFF_EXPIRED_string,this);
	// BUFF.addPropertyObserver(TriggerUtils.BUFF_RECEIVED_FROM_FRIEND_PROPERTY_NAME,this);
	// BUFF.addPropertyObserver(TriggerUtils.BUFF_APPLIED_ON_FRIEND_PROPERTY_NAME,this);
	// BUFF.addPropertyObserver(cBuff.COLLECTION_PRODUCED_string,this);
	// BUFF.addPropertyObserver(TRIGGER_ACTION.ACTION_BUFF_APPLIED_ON_ADVENTURE_string,this);


	// _loc1_ = global.ui.mCurrentPlayerZone.mStreetDataMap.mBuildingContainer.get(this.mBuilding.GetGrid());
	// var bookbinderTracker = game.getTracker('bookbinderTracker', allTrackersHandler);
	// var prodQueue2 = swmmo.application.mGameInterface.mCurrentPlayerZone.GetProductionQueue(2);
	// var PRODUCTION_FINISHED = "ProductionFinish";
	// prodQueue2.addPropertyObserver(PRODUCTION_FINISHED, bookbinderTracker);

	// var ellitebarrackstracker = game.getTracker('ellitebarrackstracker', allTrackersHandler);
	// var prodQueue8 = swmmo.application.mGameInterface.mCurrentPlayerZone.GetProductionQueue(8);
	// // air.Introspector.Console.log(prodQueue8);
	// prodQueue8.removePropertyObserver("ProductionFinish", ellitebarrackstracker);
	// prodQueue8.addPropertyObserver("ProductionFinish", ellitebarrackstracker);

	// var specialistTracker = game.getTracker('specialistTracker', specialistTrackerHandler);
	// var GENERAL_WON_string = "generalwon"; // works returns battelVO
	// game.gi.channels.SPECIALIST.removePropertyObserver(GENERAL_WON_string, specialistTracker);
	// game.gi.channels.SPECIALIST.addPropertyObserver(GENERAL_WON_string, specialistTracker);

	// var specialistTracker2 = game.getTracker('specialistTracker2', specialistTrackerHandler);
	// var GENERAL_RETURNED_TO_STAR = "GeneralReturnedToStar";
	// game.gi.channels.SPECIALIST.removePropertyObserver(GENERAL_RETURNED_TO_STAR, specialistTracker2);
	// game.gi.channels.SPECIALIST.addPropertyObserver(GENERAL_RETURNED_TO_STAR, specialistTracker2);

	// var specialistTracker3 = game.getTracker('specialistTracker3', specialistTrackerHandler);
	// var GENERAL_WON_AND_RETURNS = "GeneralWonAndReturns";
	// game.gi.channels.SPECIALIST.removePropertyObserver(GENERAL_WON_AND_RETURNS, specialistTracker3);
	// game.gi.channels.SPECIALIST.addPropertyObserver(GENERAL_WON_AND_RETURNS, specialistTracker3);

	// var specialistTracker4 = game.getTracker('specialistTracker4', specialistTrackerHandler);
	// var GENERAL_BATTLE_FOUGHT_string = "generalbattlefought";
	// game.gi.channels.SPECIALIST.removePropertyObserver(GENERAL_BATTLE_FOUGHT_string, specialistTracker4);
	// game.gi.channels.SPECIALIST.addPropertyObserver(GENERAL_BATTLE_FOUGHT_string, specialistTracker4);



	// var taskmanagertracker = game.getTracker('taskmanagertracker', specialistTrackerHandler);
	// var UPDATED = "updated";
	// game.gi.channels.SPECIALIST.removePropertyObserver(UPDATED, taskmanagertracker);
	// game.gi.channels.SPECIALIST.addPropertyObserver(UPDATED, taskmanagertracker);

	// var taskmanagertracker2 = game.getTracker('taskmanagertracker2', specialistTrackerHandler);
	// var TASK_FINISHED = "taskFinished";
	// game.gi.channels.SPECIALIST.removePropertyObserver(TASK_FINISHED, taskmanagertracker2);
	// game.gi.channels.SPECIALIST.addPropertyObserver(TASK_FINISHED, taskmanagertracker2);


	// // mGeneralInterface.mCurrentPlayerZone.notifyPropertyObserver(TriggerUtils.UNITS_OWNED_NOTIFICATION_PROPERTY_NAME,mOwner.GetSpecialistDescription().GetMilitaryUnitType_string());
	// var taskmanagertracker3 = game.getTracker('taskmanagertracker3', specialistTrackerHandler);
	// var UNITS_OWNED_NOTIFICATION_PROPERTY_NAME = "unitsOwned";
	// game.gi.channels.ZONE.removePropertyObserver(UNITS_OWNED_NOTIFICATION_PROPERTY_NAME, taskmanagertracker3);
	// game.gi.channels.ZONE.addPropertyObserver(UNITS_OWNED_NOTIFICATION_PROPERTY_NAME, taskmanagertracker3);


	game.gi.mCurrentPlayer.getAvailableBuffs_vector().forEach(function(item){air.Introspector.Console.log(item.GetType(), item);});







	air.Introspector.Console.log("channelObserver done");
}

var prodTrackerHandlerTimeout = null;
function prodTrackerHandler(event){
	air.Introspector.Console.log(event);
	var type = event.data.GetType();
	air.Introspector.Console.log("GetType "+ type, event);
	var bookBinderItems = ["Manuscript", "Tome", "Codex"];
	if(bookBinderItems.indexOf(type) > -1){
		air.Introspector.Console.log("type "+ type + " found");
		prodTrackerHandlerTimeout = setTimeout(function(){BookbinderHandleJZ();}, 5000);
	}
}

function specialistTrackerHandler(event){
	air.Introspector.Console.log(event);
	air.Introspector.Console.log(event.target);
	air.Introspector.Console.log(event.data.getTargetName());
	// var bookBinderItems = ["Manuscript", "Tome", "Codex"];
	// if(bookBinderItems.indexOf(event.data.GetType()) > -1){
	// 	setTimeout(() => {
	// 		game.showAlert("Bookbinder production finished!");
	// 		BookbinderHandleJZ();
	// 	}, 5000);
	// }
}

function taskTrackerHandler(event){
	air.Introspector.Console.log(event);
	// var bookBinderItems = ["Manuscript", "Tome", "Codex"];
	// if(bookBinderItems.indexOf(event.data.GetType()) > -1){
	// 	setTimeout(() => {
	// 		game.showAlert("Bookbinder production finished!");
	// 		BookbinderHandleJZ();
	// 	}, 5000);
	// }
}

function allTrackersHandler(event){
	air.Introspector.Console.log(event);
}

function prodTrackerHandler(event){
	air.Introspector.Console.log(event);
	air.Introspector.Console.log(event.data.GetType());
}

function farmWithGeologist(geo){
	if(game.gi.isOnHomzone() == false) {
		game.showAlert(getText('not_home'));
		setTimeout(function(){farmWithGeologist(geo);}, 60*1000);
		return;
	}

	// is geo available
	if(!isSpecResting(geo.uniqueId.split("_")[0])){
		showGameAlert(geo.name + " is busy!");
		setTimeout(function(){farmWithGeologist(geo);}, 60*1000);
		return;
	}
	showGameAlert("Farm with Geo started!");

	var QueueTotal = swmmo.application.mGameInterface.mHomePlayer.mBuildQueue.GetTotalAvailableSlots();
	if(QueueTotal < 1){
		game.showAlert("Not enough slots in queue!");
		setTimeout(function(){farmWithGeologist(geo);}, 60*1000);
		return;
	}

	if(isStoneDepleted()){
		var task = "0,0"; // send for stone
		sendSpecPacket(geo.uniqueId, task);
		setTimeout(function(){farmWithGeologist(geo);}, 60*1000);
		return;
	}

	var task = "0,1"; // send for copper
	sendSpecPacket(geo.uniqueId, task);
	setTimeout(function(){farmWithGeologist(geo);}, 60*1000);
}

function isStoneDepleted(){
	var depletedDeposits = specGeoGetDepleted();
	if(depletedDeposits["Stone"] > 1){
		return true;
	}
	return false;
}
addToolsMenuItem("JZ destroy copper mines", buildAndDemolish_CopperMine);
function buildAndDemolish_CopperMine(){
	if(game.gi.isOnHomzone() == false) {
		game.showAlert(getText('not_home'));
		setTimeout(function(){buildAndDemolish_CopperMine();}, 60*1000);
		return;
	}

	var xValuesDeposit = [];
	var copperMines = [10005, 9735, 10089];

	swmmo.application.mGameInterface.mCurrentPlayerZone.mStreetDataMap.GetDeposits_vector().forEach(function(item) {
		try {
			if (item.GetAmount() > 0) {
				xValuesDeposit.push(item.GetGrid());
			}
		} catch (edep) {}
	});

	for (var i = 0; i < copperMines.length; i++) {
		var copperMineid = copperMines[i];
		try
		{
			var GetBuildingNrFromName = game.zone.GetBuildingFromGridPosition(copperMineid).GetBuildingNrFromName();
			var IsBuildingAtGridPositionInQueue = swmmo.application.mGameInterface.mCurrentPlayer.mBuildQueue.IsBuildingAtGridPositionInQueue(copperMineid);
			_MyIID_DestroyBuildingAtGridIdx(copperMineid);
		}
		catch(e)
		{
			if (xValuesDeposit.indexOf(copperMineid) !== -1) {
				game.gi.SendServerAction(50, 36, copperMineid, 0, null); // 50 - build, 36 - copper mine 9735, 10005
				game.showAlert('Building: Copper at grid: '+copperMineid);
				// setTimeout(function(){_MyIID_DestroyBuildingAtGridIdx(copperMineid);}, 10000);
				(function(id) {
					setTimeout(function(){_MyIID_DestroyBuildingAtGridIdx(id);}, 10000);
				})(copperMineid);
			}
		}
	}
	setTimeout(function(){buildAndDemolish_CopperMine();}, 60*1000);
}

function _MyIID_DestroyBuildingAtGridIdx(copperMineid)
{
	if (copperMineid == null) { return; }
	if (game.gi.isOnHomzone()){
		try
		{
			var loc2 = game.gi.mCurrentPlayerZone.mStreetDataMap.GetBuildingByGridPos(copperMineid);
			// air.Introspector.Console.log("building: ", loc2);
			if (loc2 != null)
				{
				game.showAlert('Destroying copper at grid: '+copperMineid);
				// air.Introspector.Console.log("Destroying building at grid "+copperMineid);
				var PlayerID = game.gi.mCurrentPlayer.GetPlayerId();
				game.gi.mCurrentPlayerZone.SendDestructBuildingCommand(loc2, "cSetBuilding-" + copperMineid + "-" + copperMineid +
					" # Cursor: Street_DeleteBuildingCursor # Alert Title: " + loca.GetText("ALT", "ConfirmTeardown") +
					" # Owner: " + PlayerID + " # Current Player: " + PlayerID);
				// air.Introspector.Console.log("Building destroyed at copperMineid: " + copperMineid);
			}
		}
		catch (e)
		{
			// air.Introspector.Console.log("Error: " + e);
		}
	}
}

function isSpecResting(uniqueID1){
	var isSpecResting = false;
    game.gi.mCurrentPlayerZone.GetSpecialists_vector().sort(0).forEach(function(item){
		if(uniqueID1 == item.GetUniqueID().uniqueID1) {
			// if(uniqueID1 == "639822"){
			// 	air.Introspector.Console.log(item.GetTask());
			// }
            if(item.GetTask() == null) {
				isSpecResting = true;
            }
        }
    });
    return isSpecResting;
}

function explorers() {
	var count = 0;
	game.getSpecialists().sort(specNameSorter).forEach(function(item){
		if(item.GetBaseType() == 1){
			count++;
		}
	});
	air.Introspector.Console.log(count);
}
biggerMailWindow()
function biggerMailWindow(){
	// v1
	// globalFlash.gui.mMailWindow.getMPanel().height = 700;
	// globalFlash.gui.mMailWindow.getMPanel().width = 900;
	// globalFlash.gui.mMailWindow.getMPanel().mailListContainer.height = 250;
	// // globalFlash.gui.mMailWindow.getMPanel().mailDetailContainer
	// globalFlash.gui.mMailWindow.getMPanel().mailContent.parent.setActualSize(870,300);
	// showGameAlert("Mail window resized!");
	
	// from Fulger
    var mMailWindow = globalFlash.gui.mMailWindow.getMPanel();
    mMailWindow.height = 700;
    mMailWindow.width = 900;
    mMailWindow.mailListContainer.height = 250;
    mMailWindow.advLootAcceptInfoText.width = 820;
    mMailWindow.advItemsHolder.width = 820;
    mMailWindow.advItemsList.width = 700;
	mMailWindow.premiumItemsHolder.width = 820;
	mMailWindow.premiumItemsList.width = 700;
	mMailWindow.itemsHolder.width = 820;
	mMailWindow.itemsList.width = 700;
    mMailWindow.mailContent.parent.setActualSize(870,300);
}

function biggerSpecialistWindow(){
	globalFlash.gui.mSpecialistWindow.getMPanel().height = 800;
	globalFlash.gui.mSpecialistWindow.getMPanel().width = 1200;
	globalFlash.gui.mSpecialistWindow.getMPanel().mSpecialistContent.parent.setActualSize(1170,400);
	showGameAlert("Specialist window resized!");
}

var sendExplorersTimeout;
function CheckAndSendExplorersOnOff(){

    if(sendExplorersTimeout != null) {
        clearInterval(sendExplorersTimeout);
        sendExplorersTimeout = null;
        game.showAlert("Send Explorers is OFF");
        game.chatMessage("Send Explorers is OFF");
        return;
    }
    sendExplorersTimeout = setInterval(CheckAndSendExplorers, 2*60*1000);
    CheckAndSendExplorers();
    game.showAlert("Send Explorers is ON");
    game.chatMessage("Send Explorers is ON");
}

function CheckAndSendExplorers(){
	if(game.gi.isOnHomzone() == false) {
		game.showAlert(getText('not_home'));
		// setTimeout(function(){CheckAndSendExplorers();}, 60*1000);
		return;
	}

	var explorerType = 1; // explorer
	var isThereAnySpec = false;
	var RomanticExplorerType = 66;
	var BlackTreeExp = 87;
	game.getSpecialists().sort(specNameSorter).forEach(function(item){
		// air.Introspector.Console.log(item);
		// air.Introspector.Console.log(item.GetType());
		// game.zone.GetSpecialists_vector().forEach(function(item){air.Introspector.Console.log(item.GetType(), item.getName(true))});
		if (item.GetTask() != null || item.GetBaseType() != explorerType || item.getPlayerID() == -1) { return; }
		isThereAnySpec = true;

		var uniqueId = item.GetUniqueID().toKeyString();
		var specId = uniqueId.split(".")[0];
		var shortTreasureTask = "1,0";
		var longTreasureTask = "1,2";
		var veryLongTreasureTask = "1,3";
		var task = shortTreasureTask;
		// var task = veryLongTreasureTask; // temp for quest
		// debug("item.GetType(): "+ item.GetType())
		if(item.GetType() == RomanticExplorerType || item.GetType() == BlackTreeExp){
			task = longTreasureTask;
		}
		sendSpecPacket(specId, task);
	});
	if(!isThereAnySpec) {
		game.showAlert(getText('no_free_expl'));
	}
	// setTimeout(function(){CheckAndSendExplorers();}, 60*1000);
}

addToolsMenuItem("JZ TombRaiders Attack", AttackWhenReady);
var AttackWhenReadysetTimeOut = null;
function AttackWhenReady(){
	var GhostType = 63;
	var myGhost = null;
	var SPECIALIST_TYPE = swmmo.getDefinitionByName("Enums::SPECIALIST_TYPE");
	game.zone.GetSpecialists_vector().forEach(function(item){
		if (SPECIALIST_TYPE.IsGeneral(item.GetType())
			&& item.getPlayerID() == game.gi.mCurrentPlayer.GetPlayerId()
			&& item.GetType() == GhostType) {
				myGhost = item;
				return;
		}
	});
	if(myGhost == null){
		game.showAlert("No Ghost yet");
		AttackWhenReadysetTimeOut = setTimeout(function(){AttackWhenReady();}, 5*1000);
	} else {
		CheckAndAttack(myGhost);
	}
}

var CheckAndAttacksetTimeOut = null;
function CheckAndAttack(spec){
	if(spec.GetGeneralState() != 0){ // 0 - ready
		game.showAlert("Ghost not ready to attack! state: "+spec.GetGeneralState());
		CheckAndAttacksetTimeOut = setTimeout(function(){AttackWhenReady(spec);}, 5*1000);
	} else {
		SendGhostAttack(spec);
	}
}

function SendGhostAttack(myGhost){
	game.showAlert("Ghost ready to attack!");
	var tombRaidersLiders = [2621, 2897, 2218, 2010]
	tombRaidersLiders.forEach(function(item){
		if(battlecheckCanAttack(myGhost.GetUniqueID().toKeyString(), item)){
			game.showAlert("Attack sent to: "+item);
			jzv2_battleSendGeneral(myGhost, 5, item);
		}
	});
}

function testingStuff(){
	// air.Introspector.Console.log(swmmo.application.mGameInterface.mCurrentPlayerZone.GetResources(game.gi.mCurrentPlayer));
	// air.Introspector.Console.log(swmmo.application.mGameInterface.mCurrentPlayerZone.GetResources(game.gi.mCurrentPlayer).GetFree());
	// air.Introspector.Console.log(swmmo.application.mGameInterface.mCurrentPlayerZone.mStreetDataMap.mBuildingContainer);
	// air.Introspector.Console.log(getBarracksProductionQueue());
	// air.Introspector.Console.log(getElitteBarracksProductionQueue());
	// EliteBarrack
	// swmmo.application.mGameInterface.mCurrentPlayerZone.mStreetDataMap.mBuildingContainer.forEach(function(item) {
	// 	try {
	// 		if (item.GetResourceCreation().GetDepositBuildingGridPos() > 0)
	// 			if (item.GetResourceCreation().GetDepositBuildingGridPos() == gidPos)
	// 			{
	// 				BuildingsDep.push(item);
	// 			}
	// 	}
	// 	catch (eee) {}
	// });
	// game.zone.mStreetDataMap.GetBuildings_vector().forEach(function(item){
	// 	try {
	// 		if(item.GetBuildingName_string() == "ConcertHall"){
	// 			air.Introspector.Console.log(item);
	// 			air.Introspector.Console.log(item.getRemainingCooldown());

	// 		}
	// 	} catch (e) {}
	// 	// item.GetSubType();
	// 	// air.Introspector.Console.log(item);
	// });

	var prodQueue = swmmo.application.mGameInterface.mCurrentPlayerZone.GetProductionQueue(37);
	air.Introspector.Console.log(prodQueue.productionBuilding.GetBuildingName_string());
	air.Introspector.Console.log(prodQueue);
	air.Introspector.Console.log(prodQueue.productionBuilding.GetInfoPanelShortcutItem());
	// var item = prodQueue.mTimedProductions_vector[0];
	// var productionVO = item.GetProductionOrder().GetProductionVO();
	// air.Introspector.Console.log(productionVO);


	// var dTimedProductionVO = swmmo.getDefinitionByName("Communication.VO::dTimedProductionVO");
	// var timedProductionVO = new dTimedProductionVO();
	// timedProductionVO.productionType = 37;
	// timedProductionVO.type_string = bookForProduction;
	// timedProductionVO.amount = 1;
	// timedProductionVO.stacks = 1;
	// timedProductionVO.buildingGrid = 6868;
	// game.gi.mClientMessages.SendMessagetoServer(91, game.gi.mCurrentViewedZoneID, timedProductionVO);






	// GAMESTATE_HIRED_TROOPS_POOL_PANEL
}

function specPosition(specId){
	var specialists = game.zone.GetSpecialists_vector();

	specialists.forEach(function(item){
		if(item.GetUniqueID().toKeyString() == specId){
			var task = item.GetTask();
			var pathPos = task.GetPathPos();
			var destinationPath = task.GetDestinationPath();
			air.Introspector.Console.log(destinationPath.CalculateGridIdxForPathPos(pathPos));
		}
	});
}

function x(){
	globalFlash.gui.mTradeWindow.mAvailableOfferVector.forEach(function(item){air.Introspector.Console.log("costs: "+item.costsNameSort+" "+item.costsSort+" offer: "+item.offerNameSort+" "+item.offerSort);});
}

function sendTradesToTO(offerID1, offerAmount, costsUD1, costAmount, lots){
	
	if (!game.gi.isOnHomzone())	{
		game.showAlert("You can only trade in your home zone!");
		return;
	}
	// globalFlash.gui.mTradingPanel.SetData(null,2,3,0);
	// globalFlash.gui.mTradingPanel.Show();

// sendTradesToTO(offerUD1, offerAmount, costsUD1, costAmount, lots)
// sendTradesToTO(770152, 1, 1530040, 1, 1)
	var waterid1 = 770152;
	var coinId1 = 1530040;
	var offer = game.gi.mCurrentPlayer.getBuffByUniqueID(swmmo.getDefinitionByName("Communication.VO::dUniqueID").Create(offerID1,0));
	var dTradeOfferVO = swmmo.getDefinitionByName("Communication.VO::dTradeOfferVO");
	var dBuffVO = swmmo.getDefinitionByName("Communication.VO::dBuffVO");

	const FREE_SLOT = 0;
	const PAID_SLOT_WITH_GEMS = 1;
	const PAID_SLOT_WITH_COINS = 2;

	var offerBuff = new dBuffVO();
	offerBuff.uniqueId1 = offer.GetUniqueId().uniqueID1;
	offerBuff.uniqueId2 = offer.GetUniqueId().uniqueID2;
	offerBuff.amount = offerAmount;
	offerBuff.buffName_string = offer.GetType();
	offerBuff.resourceName_string = "Water";
	offerBuff.sourceZoneId = game.player.GetPlayerId();

	var costBuff = new dBuffVO();
	costBuff.uniqueId1 = costsUD1;
	costBuff.uniqueId2 = 0;
	costBuff.amount = costAmount;
	costBuff.buffName_string = "AddResource";
	costBuff.resourceName_string = "Coin";

	var _loc2_ = new dTradeOfferVO();
	_loc2_.offerRes = null;
	_loc2_.offerBuff = offerBuff;
	_loc2_.costsRes = null;
	_loc2_.costsBuff = costBuff;
	_loc2_.receipientId = 0;
	_loc2_.lots = lots;

	// get available slots for trades
	var coinSlotsMax = swmmo.getDefinitionByName("global").activateSlotsWithCoins_vector.length;
	var nextFreeSlot = game.gi.mCurrentPlayer.mTradeData.getNextFreeSlotForType(FREE_SLOT);
	var nextCoinSlot = game.gi.mCurrentPlayer.mTradeData.getNextFreeSlotForType(PAID_SLOT_WITH_COINS);

	var slotType;
	var slotPos;
	if(nextFreeSlot == 0){
		slotType = FREE_SLOT;
		slotPos = 0;
	} else if(nextCoinSlot <= coinSlotsMax){
		slotType = PAID_SLOT_WITH_COINS;
		slotPos = nextCoinSlot;
	} else {
		game.showAlert("No more slots for trade!");
		return;
	}

	_loc2_.slotType = slotType;
	_loc2_.slotPos = slotPos;
	air.Introspector.Console.log(_loc2_);

	const INITIATE_TRADE = 1049;
	// game.gi.mClientMessages.SendMessagetoServer(INITIATE_TRADE,game.gi.mCurrentViewedZoneID,_loc2_);
}


function FootballResToMayorxxxxxxxxxxxxxxxxxx(){
	var dBuffListVO = swmmo.getDefinitionByName("Communication.VO::dBuffListVO");
	var buffList = new dBuffListVO();
	buffList.buffList = new(game.def("mx.collections::ArrayCollection"));
	var dBuffVO = swmmo.getDefinitionByName("Communication.VO::dBuffVO");
	var footbalResources = ["WMShoulderPad","WMShoe","WMBanana","WMShoulderPad","WMStuds","WMHelmet",
		"WMRedColor","WMTelescope","WMWetGrass","WMFist","WMGrease","WMElasticSpring","WMDummy"];
	game.gi.mCurrentPlayer.getAvailableBuffs_vector().forEach(function(item){air.Introspector.Console.log(item.GetResourceName_string()+" "+item.GetUniqueId().uniqueID1+" "+item.GetUniqueId().uniqueID2);});
	buffList.target_string = "Mayorhouse";
	var APPLY_BUFF_LIST = 63; // server command id
	var targetGrid = game.zone.mStreetDataMap.getBuildingByName("Mayorhouse").GetGrid();
	game.gi.SendServerAction(APPLY_BUFF_LIST, 0, targetGrid, 0, buffList);
}

function CloseAdventure(){
	globalFlash.gui.mAdventurePanel.Hide();
	var advMgr = swmmo.getDefinitionByName("com.bluebyte.tso.adventure.logic::AdventureManager").getInstance();
	var zoneID = advMgr.getAdventures()[0].zoneID
	advMgr.removeAdventure(zoneID)
}

function swimmingBuff(){
	game.gi.mCurrentPlayer.getAvailableBuffs_vector().forEach(function(item){
		if(item.getName() == "Ice Swimming"){
			var uID = item.GetUniqueId();
			game.gi.SendServerAction(61, 0, 6603, 0, uID);
		}
	});
}

// var resPumpkins = "HalloweenResource";
// var menuNamePumpkins = "Pumpkings";
// addPumpkinsMenuItem();
// function addPumpkinsMenuItem(){
// 	var toolsMenu = menu.nativeMenu.getItemByName("Tools");
// 	var toolsItem = new air.NativeMenuItem(menuNamePumpkins);
// 	toolsItem.name = menuNamePumpkins;
// 	var amount = swmmo.application.mGameInterface.mCurrentPlayerZone.GetResourcesForPlayerID(game.player.GetPlayerId()).GetResource(resPumpkins).amount;
// 	toolsItem.label = menuNamePumpkins+": "+amount;
// 	toolsItem.data = { 'item': { 'onSelect': getPumpkinsCount } };
// 	toolsItem.addEventListener(air.Event.SELECT, getPumpkinsCount);

// 	toolsMenu.submenu.addItem(toolsItem);
// }

// function getPumpkinsCount(){
// 	var amount = swmmo.application.mGameInterface.mCurrentPlayerZone.GetResourcesForPlayerID(game.player.GetPlayerId()).GetResource(resPumpkins).amount;
// 	var toolsMenu = menu.nativeMenu.getItemByName("Tools").submenu;
// 	var pItem = toolsMenu.getItemByName(menuNamePumpkins);
// 	pItem.label = menuNamePumpkins+": "+amount;
// 	showGameAlert(resPumpkins+": "+amount);
// }

addToolsMenuItem("Pumpkins count", getPumpkinsCount);
function getPumpkinsCount(){
	var resPumpkins = "HalloweenResource";
	var amount = swmmo.application.mGameInterface.mCurrentPlayerZone.GetResourcesForPlayerID(game.player.GetPlayerId()).GetResource(resPumpkins).amount;
	showGameAlert("Pumpkins: "+amount);
}


/*
swmmo.application.mGameInterface.mCurrentPlayerZone.GetSpecialists_vector().forEach(function(item){if(item.getPlayerID() == '1770612'&&item.GetType()=='50'){air.Introspector.Console.log(item.GetAllActiveModifiers());}});
GetAllActiveModifiers
*/
biggerSendArmyBack();
function biggerSendArmyBack(){
	// mSpecialistTravelPanel
	swmmo.application.GAMESTATE_ID_SPECIALIST_TRAVEL_PANEL.height = 800;
	swmmo.application.GAMESTATE_ID_SPECIALIST_TRAVEL_PANEL.width = 1100;
}

addToolsMenuItem("OpenManyFiles", OpenManyFiles);
function OpenManyFiles(onComplete){
    if (typeof window === "undefined" || !window.runtime || typeof air === "undefined" || !air.File) {
        showGameAlert("File dialog is not available in this environment.");
        return [];
    }
    var loadedFiles = [];
    var fileInfoList = [];
    var fileRoot = new air.File();
    var filters = new window.runtime.Array(
        new air.FileFilter("Text files (*.txt)", "*.txt"),
        new air.FileFilter("JSON files (*.json)", "*.json")
    );
    var handleSelect = null;
    var handleCancel = null;
    var cleanup = function(){
        if (handleSelect) {
            fileRoot.removeEventListener(window.runtime.flash.events.FileListEvent.SELECT_MULTIPLE, handleSelect);
        }
        if (handleCancel) {
            fileRoot.removeEventListener(window.runtime.flash.events.Event.CANCEL, handleCancel);
        }
    };
    handleSelect = function(event){
        cleanup();
        loadedFiles.length = 0;
        fileInfoList = [];
        try {
            event.files.forEach(function(file){
                try {
                    var extension = (file.extension || "").toLowerCase();
                    if (extension !== "txt" && extension !== "json") {
                        return;
                    }
                    var fileStream = new air.FileStream();
                    try {
                        fileStream.open(file, air.FileMode.READ);
                        var contents = fileStream.readUTFBytes(fileStream.bytesAvailable);
                        loadedFiles.push(contents);
                        fileInfoList.push({
                            name: file.name,
                            nativePath: file.nativePath,
                            extension: extension
                        });
                        showGameAlert("Loaded: " + (file.name || file.nativePath));
                    } finally {
                        if (fileStream.connected) {
                            fileStream.close();
                        }
                    }
                } catch (fileErr) {
                    air.Introspector.Console.log("Failed to load " + file.nativePath + ": " + fileErr);
                }
            });
            showGameAlert("Loaded " + loadedFiles.length + " file(s).");
            if (typeof onComplete === "function") {
                try {
                    onComplete(loadedFiles, fileInfoList);
                } catch (callbackErr) {
                    air.Introspector.Console.log("OpenManyFiles callback error: " + callbackErr);
                }
            }
        } catch (err) {
            air.Introspector.Console.log("OpenManyFiles selection error: " + err);
        }
    };
    handleCancel = function(){
        cleanup();
    };
    fileRoot.addEventListener(window.runtime.flash.events.FileListEvent.SELECT_MULTIPLE, handleSelect);
    fileRoot.addEventListener(window.runtime.flash.events.Event.CANCEL, handleCancel);
    try {
        fileRoot.browseForOpenMultiple("Select text or JSON files", filters);
    } catch (browseErr) {
        cleanup();
        air.Introspector.Console.log("OpenManyFiles browse error: " + browseErr);
        showGameAlert("Failed to open file chooser.");
    }
    return loadedFiles;
}

