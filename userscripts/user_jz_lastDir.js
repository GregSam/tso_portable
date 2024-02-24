addToolsMenuItem("JZ Update LastDir", jz_updateLastDir, 115, true);

function jz_updateLastDir(event) {
    var adventureName = swmmo.application.mGameInterface.getAdventureName();
	var templatesDir = "C:\\Users\\myPc\\Downloads\\SettlersOnline\\Templates\\Army\\";
	var lastDir = templatesDir + adventureName;

	saveLastDir("army", lastDir);
	saveLastDir("battle", lastDir);

	alert('army/battle LastDirs: ' + lastDir);
}
