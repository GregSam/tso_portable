// clicks on specified coordinates
addToolsMenuItem("JZ Click XY", clickXYHandler);

function clickXYHandler(i)
{
    if (i == undefined) {
        i = 0;
    }

    air.Introspector.Console.log(game.gi.mMouseCursor);
    game.gi.mMouseCursor.SetPosition(950, 720);
    air.Introspector.Console.log(game.gi.mMouseCursor);
	var xCoordinate = 950;
	var yCoordinate = 720;
	var mouseEvent = window.runtime.flash.events.MouseEvent;
	var mouseClick = new mouseEvent(mouseEvent.CLICK, true, false, xCoordinate, yCoordinate);
	game.zone.MouseClick(mouseClick);
    showAlert("Clicked on Y" + i);

    // if (i > 216) {
    //     return;
    // }
    // setTimeout(function () {
    //     clickXYHandler(i+5);},
    //     500
    // );

}