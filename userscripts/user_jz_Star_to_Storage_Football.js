addToolsMenuItem("JZ Football Stuff Star2Storage", FootballResToMayor);

function FootballResToMayor(){
    var dBuffListVO = swmmo.getDefinitionByName("Communication.VO::dBuffListVO");
    var buffList = new dBuffListVO();
    buffList.buffList = new(game.def("mx.collections::ArrayCollection"));
    var dBuffVO = swmmo.getDefinitionByName("Communication.VO::dBuffVO");
    var footbalResources = ["WMShoulderPad","WMShoe","WMBanana","WMShoulderPad","WMStuds","WMHelmet",
        "WMRedColor","WMTelescope","WMWetGrass","WMFist","WMGrease","WMElasticSpring","WMDummy", "EMEventResource"];
    var mydUniqueIDs = ['782'];
    game.gi.mCurrentPlayer.getAvailableBuffs_vector()
        .forEach(function(item){
            if(footbalResources.indexOf(item.GetResourceName_string()) > -1
                || mydUniqueIDs.indexOf(item.GetUniqueId().uniqueID1) > -1){
                var buff = new dBuffVO();
                buff.uniqueId1 = item.GetUniqueId().uniqueID1;
                buff.uniqueId2 = item.GetUniqueId().uniqueID2;
                buff.amount = item.GetAmount();
                buffList.buffList.addItem(buff);
            }
        }
    );
    buffList.target_string = "Mayorhouse";
    var APPLY_BUFF_LIST = 63; // server command id
    var targetGrid = game.zone.mStreetDataMap.getBuildingByName("Mayorhouse").GetGrid();
    game.gi.SendServerAction(APPLY_BUFF_LIST, 0, targetGrid, 0, buffList);
}

// 2|effectbuffweddingcake|
function FromStarToStorage(sortKey, amount){
    var dBuffListVO = swmmo.getDefinitionByName("Communication.VO::dBuffListVO");
    var buffList = new dBuffListVO();
    buffList.buffList = new(game.def("mx.collections::ArrayCollection"));
    var dBuffVO = swmmo.getDefinitionByName("Communication.VO::dBuffVO");
    var footbalResources = ["WMShoulderPad","WMShoe","WMBanana","WMShoulderPad","WMStuds","WMHelmet",
        "WMRedColor","WMTelescope","WMWetGrass","WMFist","WMGrease","WMElasticSpring","WMDummy", "EMEventResource"];
    var mydUniqueIDs = ['782'];
    game.gi.mCurrentPlayer.getAvailableBuffs_vector()
        .forEach(function(item){
            if(item.sortKey === sortKey) {
                var buff = new dBuffVO();
                buff.uniqueId1 = item.GetUniqueId().uniqueID1;
                buff.uniqueId2 = item.GetUniqueId().uniqueID2;
                buff.amount = amount;
                buffList.buffList.addItem(buff);
            }
        }
    );
    buffList.target_string = "Mayorhouse";
    var APPLY_BUFF_LIST = 63; // server command id
    var targetGrid = game.zone.mStreetDataMap.getBuildingByName("Mayorhouse").GetGrid();
    game.gi.SendServerAction(APPLY_BUFF_LIST, 0, targetGrid, 0, buffList);
}