function jz_collectProduction() {
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

	var prodQueue4 = swmmo.application.mGameInterface.mCurrentPlayerZone.GetProductionQueue(mayorhouseProductionQueueId);
	var mProductionType = prodQueue4.mProductionType;
	var cPlayerData = swmmo.application.mGameInterface.mHomePlayer;
	var IncCollectedTime = true;
	prodQueue4.finishProduction(cPlayerData, IncCollectedTime);

	var DELIVER_PRODUCTION = 141;
	var mProductionType = prodQueue4.mProductionType;
	game.gi.mClientMessages.SendMessagetoServer(DELIVER_PRODUCTION, game.gi.mCurrentViewedZoneID, mProductionType);
}