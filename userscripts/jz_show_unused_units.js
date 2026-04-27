// addToolsMenuItem("jz_show_unused_units", jz_show_unused_units);
addJohnnyScriptsSubmenuItem("Show unused units count", jz_show_unused_units);
var jz_unused_units = {};
var jz_unused_units_timer = null;

function jz_show_unused_units(){
	jz_collect_unused_units(true);
	jz_render_unused_units_modal(false);
	jz_schedule_unused_units_tick();
}

function jz_stop_unused_units() {
	if(jz_unused_units_timer !== null) {
		clearTimeout(jz_unused_units_timer);
		jz_unused_units_timer = null;
	}
	if(typeof game !== 'undefined' && game.showAlert) {
		game.showAlert('Unused units tracking stopped');
	}
}

function jz_collect_unused_units(showMessages) {
	if(game.gi.isOnHomzone() == true) {
		if(showMessages) {
			game.showAlert('unused units count paused; showing last snapshot');
		}
		return;
	}
	if(showMessages) {
		game.showAlert('saving unused units');
	}
    game.zone.GetArmy(game.player.GetPlayerId()).GetSquadsCollection_vector().sort(game.def("MilitarySystem::cSquad").SortByCombatPriority)
    .forEach(function(item){
        var minAmount = jz_unused_units[item.name_string] || 9999999;
        if(item.amount < minAmount) {
            jz_unused_units[item.name_string] = item.amount;
        }
	});
}

function jz_schedule_unused_units_tick() {
	if(jz_unused_units_timer !== null) {
		return;
	}
	jz_unused_units_timer = setTimeout(jz_unused_units_tick, 10000);
}

function jz_unused_units_tick() {
	jz_unused_units_timer = null;
	jz_collect_unused_units(false);
	jz_render_unused_units_modal(true); // refresh if modal is open
	jz_schedule_unused_units_tick();
}

function jz_render_unused_units_modal(updateOnly) {
	var modalId = 'jzUnusedUnitsModal';
	if(updateOnly) {
		if(!$('#' + modalId).length) { return; }
	} else {
		$("div[role='dialog']:not(#" + modalId + "):visible").modal("hide");
		$('#' + modalId).remove();
		createModalWindow(modalId, 'Unused units');
	}

	var rows = [];
	var keys = Object.keys(jz_unused_units);
	if(keys.length === 0) {
		rows.push(utils.createTableRow([[12, 'No unused units captured yet', 'text-center']]));
	} else {
		keys.sort(function(a, b){ return jz_unused_units[a] - jz_unused_units[b]; });
		keys.forEach(function(name){
			rows.push(utils.createTableRow([
				[9, name],
				[3, '<div style="text-align:right;">' + jz_unused_units[name] + '</div>']
			]));
		});
	}

	var header = utils.createTableRow([
		[9, 'Unit', 'tblHeader'],
		[3, '<div style="text-align:right;">Count</div>', 'tblHeader']
	], true);

	var html = '<div class="container-fluid">';
	html += '<p>Lowest observed free army counts (updated each run):</p>';
	html += '<div class="jz-unused-table">';
	html += header + rows.join('');
	html += '</div></div>';

	if($('#' + modalId + 'Data').length) {
		$('#' + modalId + 'Data').html(html);
	}
	if(!updateOnly) {
		if(!$('#jzUnusedUnitsStyles').length) {
			$('head').append('<style id="jzUnusedUnitsStyles">.modal-backdrop.jz-unused-backdrop{opacity:0.35 !important;}</style>');
		}
		$('#' + modalId + ':not(:visible)').modal({backdrop: true});
		$('.modal-backdrop').addClass('jz-unused-backdrop');
	}

	var $footer = $('#' + modalId + ' .modal-footer');
	if($footer.length) {
		$footer.find('.jz-unused-reset').remove();
		$footer.find('.jz-unused-stop').remove();
		var resetBtn = $('<button>', {
			'class': 'btn btn-danger jz-unused-reset',
			text: 'Reset data'
		}).click(function(){
			jz_unused_units = {};
			if(typeof game !== 'undefined' && game.showAlert) {
				game.showAlert('Unused units data reset');
			}
			jz_render_unused_units_modal();
		});
		var stopBtn = $('<button>', {
			'class': 'btn btn-warning jz-unused-stop',
			text: 'Stop script'
		}).click(function(){
			jz_stop_unused_units();
		});
		$footer.append(stopBtn).append(resetBtn);
	}
}
