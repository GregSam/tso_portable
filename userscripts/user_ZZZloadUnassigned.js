// TODO: script to load unassigned units to any available Generals
addToolsMenuItem("JZ Load All Army", jz_loadRemainingArmyOrg);

var generalsWithCapacity = [];
var armyFreeInfoCopy = {};
var queue = new TimedQueue(2000);

function jz_loadRemainingArmyOrg(){
    showGameAlert("Loading all unassigned units to available Generals");
	game.zone.GetSpecialists_vector().sort(specNameSorter).forEach(function(item){
        var isGeneral = armySPECIALIST_TYPE.IsGeneral(item.GetType());
		var notSanta = item.GetType() != 27; // no Santa/Claus;
		var canLoadUnits = item.GetGeneralState() <= 0; // is in garrison or star
		var hasCapacity = item.GetMaxMilitaryUnits() - item.GetArmy().GetUnitsCount() > 0;
        var loadedArmy = {};
        item.GetArmy().GetSquads_vector().forEach(function(item){
            loadedArmy[item.name_string] = item.amount;
        });

		if(isGeneral && notSanta && hasCapacity && canLoadUnits){
            var general = {
                spec: item,
                loadedArmy: loadedArmy,
                capacity: item.GetMaxMilitaryUnits() - item.GetArmy().GetUnitsCount()
            };
            generalsWithCapacity.push(general);
		}
    });
    if(generalsWithCapacity.length == 0) {
        showGameAlert("No generals with capacity");
        return;
    }

    // sort generals by capacity desc
    generalsWithCapacity.sort(function(a, b){
        return b.capacity - a.capacity;
    });

	jzv2_updateFreeArmyInfoORG();
    // air.Introspector.Console.log("armyFreeInfo", armyFreeInfo);
	if(Object.keys(armyFreeInfo).length == 0) {
        showGameAlert("No unassigned units to load");
        return;
    }

    // copy armyFreeInfo to local variable
    $.each(armyFreeInfo, function(type, amount){
        armyFreeInfoCopy[type] = amount;
    });

    $.each(generalsWithCapacity, function(i, general){
        var dRaiseArmyVO = new dRaiseArmyVODef();
        dRaiseArmyVO.armyHolderSpecialistVO = general.spec.CreateSpecialistVOFromSpecialist();
        // load already loaded units
        $.each(general.loadedArmy, function(item){
            var dResourceVO = new dResourceVODef();
            dResourceVO.name_string = item;
            dResourceVO.amount = general.loadedArmy[item];
            dRaiseArmyVO.unitSquads.addItem(dResourceVO);
        });
        // load remaining units
        while(general.capacity > 0){
            var type = Object.keys(armyFreeInfoCopy)[0];
            if(type == undefined){
                break;
            }
            var unitsToLoad = Math.min(general.capacity, armyFreeInfoCopy[type]);

            var dResourceVO = new dResourceVODef();
            dResourceVO.name_string = type;
            dResourceVO.amount = unitsToLoad;
            dRaiseArmyVO.unitSquads.addItem(dResourceVO);

            general.capacity -= unitsToLoad;
            armyFreeInfoCopy[type] -= unitsToLoad;
            if(armyFreeInfoCopy[type] == 0){
                delete armyFreeInfoCopy[type];
            }
        }

        if(dRaiseArmyVO.unitSquads.length > 0){
            queue.add(function(){
                game.gi.mClientMessages.SendMessagetoServer(1031, game.gi.mCurrentViewedZoneID, dRaiseArmyVO);
                showGameAlert('Queued army to load on '+getCleanName(general.spec.getName(false)));
            });
        }
    });

    if(Object.keys(armyFreeInfoCopy).length > 0){
        var sum = 0;
        $.each(armyFreeInfoCopy, function(type, amount){
            sum += amount;
        });
        queue.add(function(){
            showGameAlert(sum+' units not loaded');
        });
    }

    queue.run();
}

function getCleanName(name){
    return name.replace(/<b>(.*?)<\/b>.*/g, '$1');
}