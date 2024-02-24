MyFunctionsID_MakeMenuGridPosMenu();
function MyFunctionsID_MakeMenuGridPosMenu()
{
    try
    {
        var existing = window.nativeWindow.menu.getItemByName("GridPosMenu");
        if(existing != null)
            window.nativeWindow.menu.removeItem(existing);

        Menu = new air.NativeMenu();
        MenuItem = new air.NativeMenuItem("Pos");
        MenuItem.name = "GridPosMenu";
        MenuItem.submenu = Menu;
        window.nativeWindow.menu.addItem(MenuItem);
        window.nativeWindow.stage.addEventListener("mouseMove", MyFunctionsID_RefreshGridPosMenu);
    }
    catch(e)
    {
    }
}

function MyFunctionsID_RefreshGridPosMenu(event)
{
    var GenesID;
    try
    {
        swmmo.application.mGameInterface.mCurrentPlayerZone.GetSpecialists_vector().forEach(function(item){
            if(game.gi.mCurrentCursor.GetGridPosition() == item.GetGarrisonGridIdx())
            {
                GenesID = item.GetUniqueID().toKeyString();
            }
        });
        menu.nativeMenu.getItemByName("GridPosMenu").label = "GridPos : " + game.gi.mCurrentCursor.GetGridPosition() + " | GenesID : " + GenesID;
    }
    catch (e)
    {
        menu.nativeMenu.getItemByName("GridPosMenu").label = "Pos : ---";
    }
}