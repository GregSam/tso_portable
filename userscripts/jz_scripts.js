function jz_collectProduction(id) {
    if(game.gi.isOnHomzone() == false) {
		game.showAlert(getText('not_home'));
		return;
	}
    var barracksProductionQueueId = 0;
    var provisionHouseProductionQueueId = 1;
    var bookbinderProductionQueueId = 2;
    var mayorhouseProductionQueueId = 4;
    var provisionHouse2ProductionQueueId = 5;
    var expeditionWeaponSmithProductionQueueId = 6;
    var barracks3ProductionQueueId = 7;
    var eliteBarracksProductionQueueId = 8;
    var laboratoryProductionQueueId = 16;
    var snackStandProductionQueueId = 18;
    var adventureBookbinderProductionQueueId = 24;
    var harbourProductionQueueId = 25;
    var oilmillProductionQueueId = 26;
    var christmasBakeryProductionQueueId = 27;
    var blackTree_RedProductionQueueId = 36;
    var loversStatueProductionQueueId = 38;
    var siegeWorkshopProductionQueueId = 45;
    var unityEvent_TrophyProductionQueueId = 48;
    var giantTreeOfHopeProductionQueueId = 53;

	var prodQueue4 = swmmo.application.mGameInterface.mCurrentPlayerZone.GetProductionQueue(id);
	var mProductionType = prodQueue4.mProductionType;
	var cPlayerData = swmmo.application.mGameInterface.mHomePlayer;
	var IncCollectedTime = true;
	prodQueue4.finishProduction(cPlayerData, IncCollectedTime);

	var DELIVER_PRODUCTION = 141;
	var mProductionType = prodQueue4.mProductionType;
	game.gi.mClientMessages.SendMessagetoServer(DELIVER_PRODUCTION, game.gi.mCurrentViewedZoneID, mProductionType);
    game.showAlert("Production picked up!");
}

// addToolsMenuItem("07 jz_questbookresize", jz_questbookresize);
// function jz_questbookresize(){
//     if(game.gi.isOnHomzone() == false) {
// 		game.showAlert(getText('not_home'));
// 		return;
// 	}
//     swmmo.application.GAMESTATE_ID_QUEST_BOOK.height = 750;
//     swmmo.application.GAMESTATE_ID_QUEST_BOOK.listContainer.height = 690;
//     //list
//     swmmo.application.GAMESTATE_ID_QUEST_BOOK.list.height = 670;
//     swmmo.application.GAMESTATE_ID_QUEST_BOOK.detailsContainer.height = 640;
//     var triggerContainer = swmmo.application.GAMESTATE_ID_QUEST_BOOK.detailsContainer.getChildByName("triggerContainer");
//     triggerContainer.height = 400;
//     var rewardInfo = swmmo.application.GAMESTATE_ID_QUEST_BOOK.detailsContainer.getChildByName("rewardInfo");
//     rewardInfo.nonInheritingStyles.top = "540"
//     rewardInfo.height = 540; // - to refresh canvas
// }
// jz_questbookresize();

function removeLandingZones(){
    var landingFields = game.gi.mCurrentPlayerZone.mStreetDataMap.mLandingFields_vector;
    game.gi.mCurrentPlayerZone.mStreetDataMap.mLandingFields_vector = 0
}