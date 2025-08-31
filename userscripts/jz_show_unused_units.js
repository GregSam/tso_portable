addToolsMenuItem("jz_show_unused_units", jz_show_unused_units);
var jz_unused_units = {};
function jz_show_unused_units(){
	if(game.gi.isOnHomzone() == true) {
		game.showAlert('unused units cout stopped');
		return;
	}
    game.showAlert('saving unused units');
    game.zone.GetArmy(game.player.GetPlayerId()).GetSquadsCollection_vector().sort(game.def("MilitarySystem::cSquad").SortByCombatPriority)
    .forEach(function(item){
        var minAmount = jz_unused_units[item.name_string] || 9999999;
        if(item.amount < minAmount) {
            jz_unused_units[item.name_string] = item.amount;
        }
	});
    // trigger jz_show_unused_units after 60s
    setTimeout(jz_show_unused_units, 10000);
}