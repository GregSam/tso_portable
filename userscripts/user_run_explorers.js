// addToolsMenuItem("Run Explores on short treasure", CheckAndSendExplorers);

// function CheckAndSendExplorers(){
// 	var explorerType = 1; // explorer
// 	var isThereAnySpec = false;
// 	var RomanticExplorerType = 66;
// 	game.getSpecialists().sort(specNameSorter).forEach(function(item){
// 		// air.Introspector.Console.log(item);
// 		// air.Introspector.Console.log(item.GetType());
// 		if (item.GetTask() != null || item.GetBaseType() != explorerType || item.getPlayerID() == -1) { return; }
// 		isThereAnySpec = true;

// 		var uniqueId = item.GetUniqueID().toKeyString();
// 		var specId = uniqueId.split(".")[0];
// 		var shortTreasureTask = "1,0";
// 		var longTreasureTask = "1,2";
// 		var task = shortTreasureTask;
// 		if(item.GetType() == RomanticExplorerType){
// 			task = longTreasureTask;
// 		}
// 		sendSpecPacket(specId, task);
// 	});
// 	if(!isThereAnySpec) {
// 		game.showAlert(getText('no_free_expl'));
// 	}
// 	setTimeout(function(){CheckAndSendExplorers();}, 60*1000);
// }
