// addToolsMenuItem("Move to FlowerFarm", move2flowerfarm);
addJohnnyScriptsSubmenuItem("Move to FlowerFarm", move2flowerfarm);
function move2flowerfarm(){
    game.zone.ScrollToGrid(game.gi.mCurrentPlayerZone.mStreetDataMap.getBuildingsByName_vector('FlowerFarm')[0].GetGrid());
}