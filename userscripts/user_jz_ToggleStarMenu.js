addToolsMenuItem("JZ open star menu", openStarMenuHandler);

function openStarMenuHandler(event){
	globalFlash.gui.ToggleStarMenu(null);
	// globalFlash.gui.ToggleMailWindow(null);
	// game.gi.mMouseCursor.SetCursorEditMode(86);
	// air.Introspector.Console.log(game.gi.mSetBuildings);
	// game.gi.mSetBuildings.ShowPreviewPath(game.gi.mCurrentPlayer.GetPlayerId(),true);

	// var activeQuests = game.questCallbacks.GetClientQuestPool().GetQuest_vector().source;

	// activeQuests.forEach(function(quest){
	// 	air.Introspector.Console.log("quest.mQuestMode: "+ quest.mQuestMode);
	// 	if(quest.mQuestMode == 2)
	// 	{
	// 		air.Introspector.Console.log("updating quest mode");
	// 		game.questCallbacks.QuestOkButtonPressedFromGui(quest);
	// 		air.Introspector.Console.log("updated qest mode");
	// 	}
	// }); mEventInfoPanel



	// test getting quatermaster
	// air.Introspector.Console.log("jz_getAvailableQuatermaster(): ", jz_getAvailableQuatermaster().GetUniqueID().toKeyString());
}