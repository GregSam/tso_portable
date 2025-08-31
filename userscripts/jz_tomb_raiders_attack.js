
addToolsMenuItem("JZ TombRaiders Attack", AttackWhenReady);
var AttackWhenReadysetTimeOut = null;
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

