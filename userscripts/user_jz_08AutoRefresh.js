addToolsMenuItem("JZ 08 Autorefresh", JZAutoRefresh);

var autoRefreshTimeout;
function JZAutoRefresh(){
    if(autoRefreshTimeout != null) {
        clearTimeout(autoRefreshTimeout);
        autoRefreshTimeout = null;
        game.showAlert("Auto refresh is OFF");
        game.chatMessage("Auto refresh is OFF");
        return;
    }
    autoRefreshTimeout = setTimeout(menuZoneRefreshHandler, 120*1000);
    menuZoneRefreshHandler();
    game.showAlert("Auto refresh is ON");
    game.chatMessage("Auto refresh is ON");
}