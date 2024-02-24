// use addMenuItem from main script
addToolsMenuItem("JZ Functions", FunctionsMenuHandler);

var GingerBreadGeo ={
	"uniqueId": "639822_0",
	"name": "Gingerbread Geologist",
	// "searchTime": 645*1000 // for copper search normal
	"searchTime": 530*1000 // for copper search with PFB
}

var GeoOnVacation = {
	"uniqueId": "237984_0",
	"name": "Geologist on Vacation",
	// "searchTime": 9*60*1000 - 1*1000 // for copper search normal
	"searchTime": 490*1000 // for copper search with PFB
}

function FunctionsMenuHandler(event)
{
	// close all modals
	$( "div[role='dialog']:not(#jzFunctionsModal):visible").modal("hide");
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
	$('#jzFunctionsModalData .function7').click(function7);
	$('#jzFunctionsModalData .function8').click(function8);
	$('#jzFunctionsModalData .function9').click(function9);
	$('#jzFunctionsModalData .function10').click(function10);
	// show modal
	$('#jzFunctionsModal:not(:visible)').modal({backdrop: "static"});
}

function function1()
{
	alert('Your level is - ' + swmmo.application.mGameInterface.mHomePlayer.GetPlayerLevel());
}

function function2()
{
	BookbinderHandle();
}

function function3(){
	channelObserver();
}

function function4(){
	jz_loadRemainingArmyToQuatermaster();
}

function function5(){
	getRequiredGenerals();
}

function function6(){
	farmWithGeologist(GingerBreadGeo);
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
	air.Introspector.Console.log(specsByPlayer);
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
	out += utils.createTableRow([[3, '<button type="button" class="btn btn-primary function1">Level</button>'],[5, "Check your level"]]);
	out += utils.createTableRow([[3, '<button type="button" class="btn btn-primary function2">BookBinder</button>'],[5, "Collect from bookbinder and queue new production"]]);
	out += utils.createTableRow([[3, '<button type="button" class="btn btn-primary function3">ChannelObserver</button>'],[5, "ChannelObserver"]]);
	out += utils.createTableRow([[3, '<button type="button" class="btn btn-primary function4">Load units</button>'],[5, "Load to Quartermaster"]]);
	out += utils.createTableRow([[3, '<button type="button" class="btn btn-primary function5">Get generals</button>'],[5, "Get generals"]]);
	out += utils.createTableRow([[3, '<button type="button" class="btn btn-primary function6">Farm with Ginger Geo</button>'],[5, "Sending, resetting copper mine, sending again"]]);
	out += utils.createTableRow([[3, '<button type="button" class="btn btn-primary function7">Farm with Geo on vacation</button>'],[5, "Sending, resetting copper mine, sending again"]]);
	out += utils.createTableRow([[3, '<button type="button" class="btn btn-primary function8">Bigger mail window</button>'],[5, "Bigger mail window"]]);
	out += utils.createTableRow([[3, '<button type="button" class="btn btn-primary function9">Bigger specialist window</button>'],[5, "Bigger specialist window"]]);
	out += utils.createTableRow([[3, '<button type="button" class="btn btn-primary function10">Get generals state</button>'],[5, "Get generals state"]]);

	// testingStuff();
	return out + '</div>';
}

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
	// 16: Laboratory
	// 18: SnackStand
	// 24: AdventureBookbinder
	// 25: Harbour
	// 26: Oilmill
	// 27: ChristmasBakery
	// 36: BlackTree_Red
	// 38: LoversStatue
	// 45: SiegeWorkshop
	// 48: UnityEvent_Trophy
	// 53: GiantTreeOfHope
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










	air.Introspector.Console.log("channelObserver done");
}

function prodTrackerHandler(event){
	air.Introspector.Console.log(event);
	var type = event.data.GetType();
	air.Introspector.Console.log("GetType "+ type, event);
	var bookBinderItems = ["Manuscript", "Tome", "Codex"];
	if(bookBinderItems.indexOf(type) > -1){
		air.Introspector.Console.log("type "+ type + " found");
		setTimeout(function(){BookbinderHandle();}, 5000);
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
	// 		BookbinderHandle();
	// 	}, 5000);
	// }
}

function taskTrackerHandler(event){
	air.Introspector.Console.log(event);
	// var bookBinderItems = ["Manuscript", "Tome", "Codex"];
	// if(bookBinderItems.indexOf(event.data.GetType()) > -1){
	// 	setTimeout(() => {
	// 		game.showAlert("Bookbinder production finished!");
	// 		BookbinderHandle();
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
	showGameAlert("Farm with Geo started!");

	var QueueTotal = swmmo.application.mGameInterface.mHomePlayer.mBuildQueue.GetTotalAvailableSlots();
	if(QueueTotal < 1){
		game.showAlert("Not enough slots in queue!");
		return;
	}

	if(isStoneDepleted()){
		var task = "0,0"; // send for stone
		sendSpecPacket(geo.uniqueId, task);
		setTimeout(function(){farmWithGeologist(geo);}, 260*1000);
		return;
	}

	var task = "0,1"; // send for copper
	sendSpecPacket(geo.uniqueId, task);

	buildAndDemolish_CopperMine();

	setTimeout(function(){farmWithGeologist(geo);}, geo.searchTime);
}

function isStoneDepleted(){
	var depletedDeposits = specGeoGetDepleted();
	if(depletedDeposits["Stone"] > 1){
		return true;
	}
	return false;
}

function buildAndDemolish_CopperMine(){
	var xValuesDeposit = [];
	var copperMines = [10005, 9735];

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
		}
		catch(e)
		{
			if (xValuesDeposit.indexOf(copperMineid) !== -1) {
				game.gi.SendServerAction(50, 36, copperMineid, 0, null); // 50 - build, 36 - copper mine 9735, 10005
				game.showAlert('Building: Copper at grid: '+copperMineid);
				setTimeout(function(){_MyIID_DestroyBuildingAtGridIdx();}, 10000);
			}
		}
	}
}

function _MyIID_DestroyBuildingAtGridIdx()
{
	var copperMines = [10005, 9735];
	for (var i = 0; i < copperMines.length; i++) {
		var copperMineid = copperMines[i];
		if (game.gi.isOnHomzone()){
			try
			{
				var loc2 = game.gi.mCurrentPlayerZone.mStreetDataMap.GetBuildingByGridPos(copperMineid);
				// air.Introspector.Console.log("building: ", loc2);
				game.showAlert('Destroying copper at grid: '+copperMineid);
				if (loc2 != null)
				{
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

function biggerMailWindow(){
	globalFlash.gui.mMailWindow.getMPanel().height = 700;
	globalFlash.gui.mMailWindow.getMPanel().width = 900;
	globalFlash.gui.mMailWindow.getMPanel().mailContent.parent.setActualSize(870,300);
	showGameAlert("Mail window resized!");
}

function biggerSpecialistWindow(){
	globalFlash.gui.mSpecialistWindow.getMPanel().height = 800;
	globalFlash.gui.mSpecialistWindow.getMPanel().width = 1200;
	globalFlash.gui.mSpecialistWindow.getMPanel().mSpecialistContent.parent.setActualSize(1170,400);
	showGameAlert("Specialist window resized!");
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
}