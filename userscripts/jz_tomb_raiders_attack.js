addToolsMenuItem("JZ TombRaiders Attack", OnOffWrapper);
var AttackWhenReadysetTimeOut = null;

function OnOffWrapper(){
	if(AttackWhenReadysetTimeOut != null
		|| CheckAndAttacksetTimeOut != null
		|| game.gi.isOnHomzone() == true){
			clearTimeout(AttackWhenReadysetTimeOut);
			clearTimeout(CheckAndAttacksetTimeOut);
			AttackWhenReadysetTimeOut = null;
			CheckAndAttacksetTimeOut = null;
			game.showAlert("TR Ghost attack OFF");
			return;
	}
	game.showAlert("TR Ghost attack ON");
	AttackWhenReady();
}
function AttackWhenReady(){
	var GhostType = 63;
	var myGhost = null;
	var SPECIALIST_TYPE = swmmo.getDefinitionByName("Enums::SPECIALIST_TYPE");
	game.zone.GetSpecialists_vector().forEach(function(item){
		if (SPECIALIST_TYPE.IsGeneral(item.GetType())
			&& item.getPlayerID() == game.gi.mCurrentPlayer.GetPlayerId()
			&& item.GetType() == GhostType) {
				myGhost = item;
				return;
		}
	});
	if(myGhost == null){
		game.showAlert("No Ghost yet");
		AttackWhenReadysetTimeOut = setTimeout(function(){AttackWhenReady();}, 5*1000);
	} else {
		CheckAndAttack(myGhost);
	}
}
var CheckAndAttacksetTimeOut = null;
function CheckAndAttack(spec){
	if(spec.GetGeneralState() != 0){ // 0 - ready
		game.showAlert("Ghost not ready to attack! state: "+spec.GetGeneralState());
		CheckAndAttacksetTimeOut = setTimeout(function(){AttackWhenReady(spec);}, 5*1000);
	} else {
		SendGhostAttack(spec);
	}
}

function SendGhostAttack(myGhost){
	game.showAlert("Ghost ready to attack!");
	var tombRaidersLiders = [2621, 2897, 2218, 2010]
	tombRaidersLiders.forEach(function(item){
		if(battlecheckCanAttack(myGhost.GetUniqueID().toKeyString(), item)){
			game.showAlert("Attack sent to: "+item);
			jzv2_battleSendGeneral(myGhost, 5, item);
		}
	});
}

function jzv2_battleSendGeneral(spec, type, target)
{
	try {
		game.gi.mCurrentCursor.mCurrentSpecialist = spec;
		var stask = new armySpecTaskDef();
		stask.uniqueID = spec.GetUniqueID();
		stask.subTaskID = 0;
		swmmo.application.mGameInterface.SendServerAction(95, type, target, 0, stask);
		CheckAndAttacksetTimeOut = null
		AttackWhenReadysetTimeOut = null;
        return true;
	}
	catch (error) {
		alert(error);
        return error;
     }
}