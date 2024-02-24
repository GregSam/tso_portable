// use addMenuItem from main script
addToolsMenuItem("JZ Reload scripts", ReloadScriptsMenuHandler);

function ReloadScriptsMenuHandler(event)
{
    reloadScripts(null);
}