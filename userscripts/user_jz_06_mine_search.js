var sendGeosTimeout;
addToolsMenuItem("06 JZ Mine Search", SeachForMines);

var subTaskIDs = {
    "Stone": 0,
    "BronzeOre": 1,
    "Marble": 2,
    "IronOre": 3,
    "GoldOre": 4,
    "Coal": 5,
    "Granite": 6,
    "TitaniumOre": 7,
    "Salpeter": 8
}

var ironGeos = [822317, 855114];
var marbleGeos = [157109, 28398, 622986];
var goldGeos = [880523];
var coalGeos = [623920];
// var graniteGeos = [1048523, 322239];
var graniteGeos = [1467017, 1048523, 322239]; // balanced geo - adds titanium refills
var titaniumGeos = [430463];
var salpeterGeos = [430463];

function SeachForMines(){
    if(sendGeosTimeout != null) {
        clearInterval(sendGeosTimeout);
        sendGeosTimeout = null;
        game.showAlert("Mine search is OFF");
        game.chatMessage("Mine search is OFF");
        return;
    }
    sendGeosTimeout = setInterval(searchMinesInternal, 2*60*1000);
    searchMinesInternal();
    game.showAlert("Mine search is ON");
    game.chatMessage("Mine search is ON");
}

function searchMinesInternal(){
	if(game.gi.isOnHomzone() == false) {
		game.showAlert(getText('not_home'));
		return;
	}
    game.showAlert("Searching for mines");
    game.chatMessage("Searching for mines");
    // get depleted mines
    var depleted = specGeoGetDepleted(); // [name] count
    // debug(depleted);

    // get specialists duty time
    var dutyTime = SfM_GetDutyTime(); // [name, time, iconID, task, type, subTaskID]
    // debug(dutyTime);

    // compare subTaskID with depleted mines
    var needsSearch = removeAlreadyInSearch(depleted, dutyTime); // its updating ony for now
    // air.Introspector.Console.log("after removeAlreadyInSearch",needsSearch);

    for(var key in needsSearch) {
        if(needsSearch[key] > 0) {
            var restingGeos = geoGetRestingGeos(marbleGeos);
            SendGeosOut(needsSearch, restingGeos, "Marble", key);

            restingGeos = geoGetRestingGeos(ironGeos);
            SendGeosOut(needsSearch, restingGeos, "IronOre", key);

            restingGeos = geoGetRestingGeos(goldGeos);
            SendGeosOut(needsSearch, restingGeos, "GoldOre", key);

            restingGeos = geoGetRestingGeos(coalGeos);
            SendGeosOut(needsSearch, restingGeos, "Coal", key);

            restingGeos = geoGetRestingGeos(graniteGeos);
            SendGeosOut(needsSearch, restingGeos, "Granite", key);

            restingGeos = geoGetRestingGeos(titaniumGeos);
            SendGeosOut(needsSearch, restingGeos, "TitaniumOre", key);
            SendGeosOut(needsSearch, restingGeos, "Salpeter", key);
        }
    };
}

function SendGeosOut(needsSearch, restingGeos, mineType, key){
    if(key == mineType && restingGeos.length > 0) {
        restingGeos.forEach(function(geo){
            if(needsSearch[mineType] <= 0) { return; }
            var task = "0,"+subTaskIDs[mineType];
            var geoID = geo.uniqueID1+"_0";
            sendSpecPacket(geoID, task);
            game.showAlert("Sent "+geoID+" for "+key);
            needsSearch[mineType] -= 1;
            // remove used geo from restingGeos
            // restingGeos = restingGeos.filter(function(item){
            //     return item != geo;
            // });
        });
    }
}

function geoGetRestingGeos(geoList){
    var restingGeos = [];
    game.gi.mCurrentPlayerZone.GetSpecialists_vector().sort(0).forEach(function(item){
        if(geoList.indexOf(item.GetUniqueID().uniqueID1) > -1) {
            if(item.GetTask() == null) {
                restingGeos.push(item.GetUniqueID());
            }
        }
    });
    return restingGeos;
}

function removeAlreadyInSearch(depleted, dutyTime){
    var needsSearch = JSON.parse(JSON.stringify(depleted));
    dutyTime.forEach(function(item){
        var subTaskID = item[3];
        if(depleted[subTaskID] > 0) {
            needsSearch[subTaskID] -= 1;
        }
    });

    return needsSearch;
}

function SfM_GetDutyTime(){
    var listSpec = [];
    game.gi.mCurrentPlayerZone.GetSpecialists_vector().sort(0).forEach(function(item){
        // if(item.GetBaseType() === 2) {
        //     debug(item.getName(false)+" "+item.GetUniqueID());
        // }
		if(item.GetTask() == null) { return; }
		var name = item.getName(false);
		var task, subTaskIdName;

		if(item.GetBaseType() === 2) {
            // debug(item);
            subTaskIdName = item.GetTask().getTaskDefinition().taskType_string;
            // air.Introspector.Console.log(subTaskIdName,item.GetTask().getTaskDefinition());
			task = loca.GetText("LAB", item.GetTask().getTaskDefinition().mainTask.taskName_string+item.GetTask().getTaskDefinition().taskType_string);
		} else { return; }

		var time = item.GetTask().GetRemainingTime();
		listSpec.push( [ name, time, task, subTaskIdName ] );
	});

    return listSpec;
}