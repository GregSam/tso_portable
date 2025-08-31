addToolsMenuItem("jz_questbookresize", jz_questbookresize);
function jz_questbookresize(){
    if(game.gi.isOnHomzone() == false) {
		game.showAlert(getText('not_home'));
		return;
	}
    swmmo.application.GAMESTATE_ID_QUEST_BOOK.height = 750;
    swmmo.application.GAMESTATE_ID_QUEST_BOOK.listContainer.height = 690;
    //list
    swmmo.application.GAMESTATE_ID_QUEST_BOOK.list.height = 670;
    swmmo.application.GAMESTATE_ID_QUEST_BOOK.detailsContainer.height = 640;
    var triggerContainer = swmmo.application.GAMESTATE_ID_QUEST_BOOK.detailsContainer.getChildByName("triggerContainer");
    triggerContainer.height = 400;
    var rewardInfo = swmmo.application.GAMESTATE_ID_QUEST_BOOK.detailsContainer.getChildByName("rewardInfo");
    rewardInfo.nonInheritingStyles.top = "540"
    rewardInfo.height = 540; // - to refresh canvas
}
// jz_questbookresize(); // uncomment to run on load