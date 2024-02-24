// use refresh zone on request
addToolsMenuItem("JZ Refresh zone", menuZoneRefreshHandler);

function menuZoneRefreshHandler(event)
{
	game.gi.mClientMessages.SendMessagetoServer(1037, game.gi.mCurrentViewedZoneID, null);
	showGameAlert('Zone Refreshed');
}