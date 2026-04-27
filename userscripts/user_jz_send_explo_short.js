// addToolsMenuItem("JZ Send Explorers Short", CheckAndSendExplorers);

// var sendExloTimeout = null;
// function CheckAndSendExplorers(){
// 	// if(sendExloTimeout != null){
// 	// 	clearTimeout(sendExloTimeout);
// 	// 	sendExloTimeout = null;
// 	// 	showAlert("Send Explorers disabled");
// 	// 	return;
// 	// }
// 	var explorerType = 1; // explorer
// 	var isThereAnySpec = false;
// 	var RomanticExplorerType = 66;
// 	var BlackTreeExp = 87;
// 	game.getSpecialists().sort(specNameSorter).forEach(function(item){
// 		if (item.GetTask() != null || item.GetBaseType() != explorerType || item.getPlayerID() == -1) { return; }
// 		isThereAnySpec = true;

// 		var uniqueId = item.GetUniqueID().toKeyString();
// 		var specId = uniqueId.split(".")[0];
// 		var shortTreasureTask = "1,0";
// 		var mediumTreasureTask = "1,1";
// 		var longTreasureTask = "1,2";


// 		var task = shortTreasureTask;

// 		if(item.GetType() == RomanticExplorerType || item.GetType() == BlackTreeExp) {
// 			task = longTreasureTask;
// 		}
// 		sendSpecPacket(specId, task);
// 	});
// 	if(!isThereAnySpec) {
// 		game.showAlert(getText('no_free_expl'));
// 	}
// 	sendExloTimeout = setTimeout(function(){CheckAndSendExplorers();}, 60*1000);
// }

// game.getSpecialists().sort(specNameSorter).forEach(function(item){
//     air.Introspector.Console.log(item.GetType(), item);
// });