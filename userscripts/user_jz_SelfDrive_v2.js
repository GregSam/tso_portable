
String.prototype.padStart = function (targetLength, padString) {
	targetLength = targetLength >> 0; // truncate if number or convert non-number to 0;
	padString = String(typeof padString !== 'undefined' ? padString : ' ');
	if (this.length >= targetLength) {
	  return String(this);
	} else {
	  targetLength = targetLength - this.length;
	  if (targetLength > padString.length) {
		padString += padString.repeat(targetLength / padString.length); // append to original to ensure we are longer than needed
	  }
	  return padString.slice(0, targetLength) + String(this);
	}
  };

var battleEnemiesDrop;
var battleWindow;
var battleSearchFor;
var battlePacket;
var battleTemplates;
var battleTimedQueue;

var armyPacket = {};
var armyPacketMatches = {};
var armyInfo = {};
var armyFreeInfo = {};
var freeArmySquadInfo = [];
var armyWindow;
var armyTemplates;
var allSpecs = [];
var generalsSpecs = {};
var quatermaster;
var quatermasterId;
var generalState = [];
var attacksState = [];

var armySpecTaskDef = swmmo.getDefinitionByName("Communication.VO::dStartSpecialistTaskVO");
var dRaiseArmyVODef = swmmo.getDefinitionByName("Communication.VO::dRaiseArmyVO");
var dArmyVODef = swmmo.getDefinitionByName("Communication.VO::dArmyVO");
var dResourceVODef = swmmo.getDefinitionByName("Communication.VO::dResourceVO");
var adventureDef = swmmo.getDefinitionByName("AdventureSystem::cAdventureDefinition");

var numberOfAttacks;
var currentAdventure;
var selectedAdventure;

var genTracker = game.getTracker('genTracker', genTrackerFn);
game.gi.channels.SPECIALIST.addPropertyObserver("generalcasualties",genTracker);

// use addMenuItem from main script
addToolsMenuItem("JZ Self Drive v2", jzv2_SelfDriveMenuHandler);

function jzv2_SelfDriveMenuHandler(event)
{
	// close all modals
	$( "div[role='dialog']:not(#jzSelfDriveModal):visible").modal("hide");
	// create modal
	createModalWindow('jzSelfDriveModal', 'JZ Self Drive v2 modal window');
	// fill modal data
	$('#jzSelfDriveModalData').html(jzv2_SelfDriveMakeModal());
	// bind buttons
	for(var i = 1; i <= numberOfAttacks; i++) {
		$('#jzSelfDriveModalData .tostarbtn'+i).click(jzv2_toStar);
		$('#jzSelfDriveModalData .movebtn'+i).click(jzv2_moveGeneral);
		$('#jzSelfDriveModalData .regroupbtn'+i).click(jzv2_regroupGeneral);
		$('#jzSelfDriveModalData .attackbtn'+i).click(jzv2_attackCamp);
		// $('#jzSelfDriveModalData .loadarmy'+i).click(jzv2_loadarmy);
		// $('#jzSelfDriveModalData .loadbattle'+i).click(jzv2_loadbattle);
	}
	$('#jzSelfDriveModalData .autoexecutebtn').click(jzv2_execute);
	$('#jzSelfDriveModalData .loadremainingbtn').click(loadRemainingUnits);
	// $('#generalSelect').change(function() {
	// 	currentMainGeneral = $(this).val();
	// 	$('#selGen').text('Selected general: ' + currentMainGeneral);
	// 	// store in settings
	// 	var l = {};
	// 	l['jzLastSelectedGeneral'] = currentMainGeneral;
	// 	settings.store(l);
	// });
	// footer buttons
	if($('#jzSelfDriveModal .modal-footer .unloadunitsbtn').length == 0)
	{
		$("#jzSelfDriveModal .modal-footer").prepend([
			// test button
			$('<button>').attr({ "id": "completequestsbtn", "class": "btn btn-sm d-block completequestsbtn" }).text('Complete quests'),
			$('<button>').attr({ "id": "cancelexecutebtn", "class": "btn btn-sm d-block cancelexecutebtn" }).text('Cancel Execution'),
			// add button to clear current adventure
			$('<button>').attr({ "id": "clearadvbtn", "class": "btn btn-sm d-block clearadvbtn" }).text('Clear Adventure'),
			$('<button>').attr({ "id": "refreshbtn", "class": "btn btn-sm d-block refreshbtn" }).text('Refresh'),
			$('<button>').attr({ "id": "unloadunitsbtn", "class": "btn btn-sm d-block unloadunitsbtn" }).text('Unload all Units')
		]);
		// if no selected advenure or selected adventure does not exist in delayExecutions, disable execute button
		// air.Introspector.Console.log("currentAdventure", currentAdventure);
		// air.Introspector.Console.log("has execution for adv", delayExecutions.hasOwnProperty(Object.keys(currentAdventure)[0]));
		// if(currentAdventure == null || !delayExecutions.hasOwnProperty(Object.keys(currentAdventure)[0])) {
		// }
		$('button.completequestsbtn').click(function(event) {jzv2_test(event);});
		$('button.cancelexecutebtn').click(function(event) {jzv2_CancelExecute();});
		$('button.clearadvbtn').click(function(event) {jzv2_clearAdventure();});
		$('button.refreshbtn').click(function(event) {jzv2_refreshModal();});
		$('button.unloadunitsbtn').click(function(event) {jzv2_unloadAllUnits();});
	}
	// show modal
	$('#jzSelfDriveModal:not(:visible)').modal({backdrop: "static", focus: false});
    $("#jzSelfDriveModal, #jzSelfDriveModalData").css("opacity", 0.8);
    $('#jzSelfDriveModal [data-toggle="tooltip"]').tooltip({container: 'body'});
	// $(".mark-green.row").each(function() {
	// 	$(this).find(":first-child").addClass("buffready");
	//   });
	$(".mark-green").each(function() {
		$(this).find(".row").children().first().addClass("buffready");
	});
	$('#adventureSelect').change(function(){
		selectedAdventure = $('#adventureSelect').val();
		currentAdventure = adventures[selectedAdventure];
		alert(selectedAdventure);
		jzv2_refreshModal();
	});
}

jzv2_test = function(event) {
	jz_handleQuestBook();
	// air.Introspector.Console.log(document.getElementById('btnReturnHome'));// not working
	
	// air.Introspector.Console.log( window.runtime.flash.events.MouseEvent);

	// var xCoordinate = 950;
	// var yCoordinate = 720;
	// var mouseEvent = window.runtime.flash.events.MouseEvent;
	// var mouseClick = new mouseEvent(mouseEvent.DOUBLE_CLICK, true, false, xCoordinate, yCoordinate);

	// game.gi.MouseClick(mouseClick);
	// air.Introspector.Console.log("DOUBLE_CLICK");

	// air.Introspector.Console.log(game.zone); // player zone screen
	// air.Introspector.Console.log(game.zone.GetAdventure());
	// game.zone.Exit();
	// air.Introspector.Console.log(game.gi); // game interface
	// air.Introspector.Console.log(game); // game
	
	// var global = swmmo.getDefinitionByName("global");
	// air.Introspector.Console.log(global); // global
	// air.Introspector.Console.log(global.gui);

}

jzv2_clearAdventure = function() {
	// clear adventure
	currentAdventure = null;
	// refresh modal
	jzv2_refreshModal();
}

function jzv2_execute() {
	alert("Executing " + selectedAdventure);
	if(selectedAdventure == null) { return; }

	// execute delayExecutions
	var execution = delayExecutions[selectedAdventure];

	if(execution == null) { return; }

	jz_triggerExecte(execution);
}

var timeoutId;
jzv2_CancelExecute = function() {
	clearTimeout(timeoutId);
}

function jz_triggerExecte(execution){
	if(execution == null) { return; }

	var generalState = [];
	// var advAttacks = numberOfAttacks;
	var advAttacks = 1;
	for(var i = 1; i <= advAttacks; i++) {
		var istr = i.toString();
		var attackId = istr.padStart(2, '0');
		var keys = Object.keys(currentAdventure[attackId]);
		for (var j = 0; j < keys.length; j++) {
			var general = keys[j];
			var spec = generalsSpecs[general];
			// var spec = jzv2_armyGetSpecialistFromID(general);
			generalState.push(spec.GetGeneralState());
		}
	}

	generalState = generalState.filter(function(item, pos) {
		return generalState.indexOf(item) == pos;
	});

	if(generalState.every(function(state){return state == 0;} )){ // state 0 is ready
		showAlert("All generals are ready, executing");
		execute(execution)
	} else {
		showGameAlert("Not all generals are ready, waiting 15 seconds");
		timeoutId = setTimeout(function() {jz_triggerExecte(execution)}, 15000);
	}
	// get generals of first attack
}

var step = 0;
var executionMessage;
function execute(execution){

	if(execution.condition){
		// condition types 
				// isRegroupDisabled: isRegroupDisabled,
				// isMoveDisabled: isMoveDisabled,
				// isAttackDisabled: isAttackDisabled,
		var actionButtonState = attacksState[execution.condition.attackId];
		if(actionButtonState[execution.condition.type] != execution.condition.value) {
			showGameAlert("Condition not met, waiting 3 seconds");
			timeoutId = setTimeout(function() {execute(execution)}, 3000);
			return;
		}
		// var condition = {
		// 	attackId: execution.condition.attackId,
		// 	type: execution.condition.type,
		// 	value: execution.condition.value
		// }
	}

	if(step < execution.length) {
		showGameAlert(execution[step]['name']);

		execution[step]['action']();
		step++;
		if(step == execution.length) {
			showGameAlert("All steps completed")
		} else {
			timeoutId = setTimeout(function() {execute(execution)}, execution[step-1]['timeToNextStep']);
		}
	}
}

function createActionWithParameters(func) {
	const params = Array.prototype.slice.call(arguments, 1) || [];
	return function () {
	  func.apply(null, params);
	};
  }

function createActionWithoutParameters(func) {
	return function () {
		func.call(this);
	};
}

function jzv2_toStar(){
	var id = this.className.match(/tostarbtn(\d+)/)[1];
	var attackId = id.toString().padStart(2, '0');

	jzv2_toStarByAttackId(attackId);
}

function jzv2_toStarByAttackId(attackId){
	var generalIds = Object.keys(currentAdventure[attackId]);
	var queue = new TimedQueue(1000);
	swmmo.application.mGameInterface.mCurrentPlayerZone.GetSpecialists_vector().forEach(function(item){
		if (game.player.GetPlayerId() == item.getPlayerID() &&
		armySPECIALIST_TYPE.IsGeneral(item.GetType()) &&
		item.GetGarrisonGridIdx() > 0  && !item.IsInUse() && !item.isTravellingAway() &&
		generalIds.indexOf(item.GetUniqueID().toKeyString()) !== -1)
		{
			queue.add(function(){ armySendGeneralToStar(item); });
		}
	});
	if(queue.len() > 0)
	{
		queue.add(function(){ game.showAlert("Moving generals to star"); });
		queue.run();
		game.showAlert(getText('command_sent'));
	}
}

function jzv2_toStarByGeneralId(generalId){
	var genSpec = generalsSpecs[generalId];
	queue.add(function(){ armySendGeneralToStar(genSpec); });
	if(queue.len() > 0)
	{
		queue.add(function(){ game.showAlert("Moving generals to star"); });
		queue.run();
		game.showAlert(getText('command_sent'));
	}
}

function jzv2_moveGeneral()
{
	var id = this.className.match(/movebtn(\d+)/)[1];
	var attackId = id.toString().padStart(2, '0');

	jzv2_moveGeneralByAttackId(attackId);
}

function jzv2_moveGeneralByAttackId(attackId){
	var generalIds = Object.keys(currentAdventure[attackId]);

	var movePackets = [];
	generalIds.forEach(function(general) {
		jzv2_unloadGeneralUnits(general);
		movePackets.push({
			general: general,
			grid: currentAdventure[attackId][general].grid})
	});

	if (!$(this).hasClass('disabled')) {
    	jzv2_battleMove(movePackets);
	};

	// setTimeout(function() {jzv2_refreshModal();}, 5000);
}

function jzv2_moveGeneralToGrid(parameters){
	var generalSpec;
	allSpecs.forEach(function(spec) {
		if(spec.GetUniqueID().toKeyString() == parameters[0]) {
			generalSpec = spec;
		}
	});

	if (generalSpec == null) { return; }

	var movePacket = {
		general: parameters[0],
		grid: parameters[1]
	};
	jzv2_battleMoveGeneralSpec(movePacket, generalSpec);
}

function jzv2_regroupGeneral(){
	var id = this.className.match(/regroupbtn(\d+)/)[1];
	var attackId = id.toString().padStart(2, '0');

	jzv2_regroupGeneralByAttackId(attackId);
}

function jzv2_regroupGeneralByAttackId(attackId){
	var generalIds = Object.keys(currentAdventure[attackId]);
	var armyPackets = [];
	generalIds.forEach(function(general) {
		armyPackets.push({
			general: general,
			army: currentAdventure[attackId][general].army})
	});


	if (!$(this).hasClass('disabled')) {
		jzv2_armyLoadGenerals(armyPackets);
	};
	// setTimeout(function() {jzv2_refreshModal();}, 5000);

}

function jzv2_attackCamp(){
	var id = this.className.match(/attackbtn(\d+)/)[1];
	var attackId = id.toString().padStart(2, '0');

	jzv2_attackCampByAttackId(attackId);
}

function jzv2_attackCampByAttackId(attackId){
	var generalId = Object.keys(currentAdventure[attackId]);
	var battlePacks = [];
	generalId.forEach(function(general) {
		battlePacks.push({
			general: general,
			name: jzv2_GetGeneralName(currentAdventure[attackId][general].name),
			target: currentAdventure[attackId][general].target,
			time: currentAdventure[attackId][general].time,
			targetName: currentAdventure[attackId][general].targetName})
	});
	if (!$(this).hasClass('disabled')) {
		jzv2_battleAttack(battlePacks);
	};
}

function jzv2_GetGeneralName(formattedName){
	var generalName = formattedName.match(/<b>(.*?)<\/b>/);
	return generalName ? generalName[1] : formattedName;
}

function jzv2_loadarmy(){
    try{
        // armyTemplates.load(); // load army templates from file
		jzv2_armyLoadGenerals(); // load generals from object
    }
    catch(e){
        alert(e);
    }
}

function jzv2_loadbattle(){
    alert("jzv2_loadbattle");
}

function jzv2_unloadAllUnits(){
	var queue = new TimedQueue(1000);
	swmmo.application.mGameInterface.mCurrentPlayerZone.GetSpecialists_vector().forEach(function(item){
		if (game.player.GetPlayerId() == item.getPlayerID() &&
		    armySPECIALIST_TYPE.IsGeneral(item.GetType()) &&
			item.GetGarrisonGridIdx() > 0  && item.HasUnits() && !item.IsInUse() && !item.isTravellingAway())
		{
			queue.add(function(){ armyMilitarySystem.SendRaiseArmyToServer(game.gi, item, null); });
		}
	});
	if(queue.len() > 0)
	{
		queue.run();
		game.showAlert('Unload all units');
	}
}

function jzv2_unloadGeneralUnits(generalId){
	var queue = new TimedQueue(1000);
	swmmo.application.mGameInterface.mCurrentPlayerZone.GetSpecialists_vector().forEach(function(item){
		if (game.player.GetPlayerId() == item.getPlayerID() &&
		    armySPECIALIST_TYPE.IsGeneral(item.GetType()) &&
			item.GetGarrisonGridIdx() > 0  && item.HasUnits() && !item.IsInUse() && !item.isTravellingAway() &&
			item.GetUniqueID().toKeyString() == generalId)
		{
			queue.add(function(){ armyMilitarySystem.SendRaiseArmyToServer(game.gi, item, null); });
		}
	});
	if(queue.len() > 0)
	{
		queue.run();
		game.showAlert('Unload general units');
	}
}

function jzv2_armyConvertTemplate(data)
{
	if(data[Object.keys(data)[0]].army) { return data; }
	var newData = {};
	$.each(data, function(item) {
		newData[item] = { 'name': data[item].name, 'army': {} };
		delete data[item].name;
		newData[item].army = data[item];
	});
	return newData;
}

function jzv2_refreshModal(){
	jzv2_SelfDriveMenuHandler();
}

function genTrackerFn(){
	// air.Introspector.Console.log("casualties callback");
	// var playarId = game.player.GetPlayerId();
	// var zoneArmy = game.zone.GetArmy(playarId);
	// var zonedArmyVo = zoneArmy.CreateArmyVO();
	
	// air.Introspector.Console.log("zonedArmyVo", zonedArmyVo );
	// var zoneSquads = game.zone.GetArmy(game.player.GetPlayerId()).GetSquadsCollection_vector().sort(game.def("MilitarySystem::cSquad").SortByCombatPriority);
	// var casualities = zoneArmy.GetCasualtiesVO(dArmyVO);
	
	// air.Introspector.Console.log(casualities);

    // zoneSquads.forEach(function(zSquad){
	// 	air.Introspector.Console.log(zSquad);
	// 	air.Introspector.Console.log(zSquad.GetCasualties());
    // });

	// var zoneSquads = zoneArmy.GetSquads_vector().sort(game.def("MilitarySystem::cSquad").SortByCombatPriority)
	// air.Introspector.Console.log("zoneSquads", zoneSquads);
    // zoneSquads.forEach(function(item){
	// 	// var armydef = new dArmyVODef();
	// 	air.Introspector.Console.log("casulties", item.GetCasualties(zonedArmyVo));
    // });
}

function getAllSpecs(){
	game.zone.GetSpecialists_vector().sort(specNameSorter).forEach(function(item){
		allSpecs.push(item);
	});
}

function jzv2_SelfDriveMakeModal()
{
	if (!String.prototype.padStart) {
	  }

	// display adventure dropdown
	if(currentAdventure == null) {
		// add dropdown to select
		generalsSpecs = {};

		var selectAdventure = '<select id="adventureSelect" class="form-control d-inline" style="width: 150px; max-width:150px;">';
		selectAdventure += '<option value="">Unselected</option>'
		// loop trough array
		for (var adventure in adventures){
			selectAdventure += '<option value="' + adventure + '">' + adventure + '</option>';
		}
		selectAdventure += '</select>';
		// add button to start adventure
		// var startAdventure = '<button id="startAdventure" class="btn btn-primary d-inline" style="width: 150px; max-width:150px;">Start Adventure</button>';
		// on select adventure change currentAdventure
		return '<div class="container-fluid">' + selectAdventure + '</div>';
	}

	// get all specialists in zone
	getAllSpecs();

	numberOfAttacks = Object.keys(currentAdventure).length;
	// get generals specs
	for(var i = 1; i <= numberOfAttacks; i++) {
		var istr = i.toString();
		var attackId = istr.padStart(2, '0');
		for (var general in currentAdventure[attackId]){
			generalsSpecs[general] = {};
		}
	}
	for (var general in generalsSpecs){
		// air.Introspector.Console.log(general);
		var spec = jzv2_armyGetSpecialistFromID(general);
		if (spec == null) {
			alert("Error loading general " + general);
		}
		// air.Introspector.Console.log(general);
		generalsSpecs[general] = spec;
	}

	armyTemplates = new SaveLoadTemplate('army', function(data, name) {
		try{
			armyPacket = jzv2_armyConvertTemplate(data);
			jzv2_armyLoadData();
            showGameAlert("Army loaded " + name, 'army');
		} catch(e) {
			showGameAlert("Error loading " + e, 'army');
		}
	});
	jzv2_updateFreeArmyInfo();

    try{
        var out = '<div class="container-fluid">';
		if(!delayExecutions.hasOwnProperty(selectedAdventure)) {
			out += '<button id="autoexecutebtn" class="btn btn-primary d-inline disabled autoexecutebtn" style="width: 150px; max-width:150px;">Execute '+selectedAdventure+' '+step+'</button>';
		} else {
			out += '<button id="autoexecutebtn" class="btn btn-primary d-inline autoexecutebtn" style="width: 150px; max-width:150px;">Execute</button>';
		}

		out += '<button id="loadremainingbtn" class="btn btn-primary d-inline loadremainingbtn" style="width: 150px; max-width:150px;">Load remaining units</button>';

		out += utils.createTableRow([[4, "attack sequance"], [8, "some other table title"]], true);

		attacksState = [];
		for(var i = 1; i <= numberOfAttacks; i++) {
			var istr = i.toString();
			var attackId = istr.padStart(2, '0');
			var buttonsTemplate = '<div>';

			// check if general in position
			var isInAttackPosition = true;

			// check if general has required army
			var hasRequiredArmy = true;
			var generalState = [];
			for (var general in currentAdventure[attackId]){
				var spec = generalsSpecs[general];
				// check if general in position
				var position = currentAdventure[attackId][general].grid;
				isInAttackPosition = spec.GetGarrisonGridIdx() == position && isInAttackPosition;

				generalState.push(spec.GetGeneralState());
				var generalArmy = spec.GetArmy();
				var armyForGeneral = currentAdventure[attackId][general].army;

				if(!armyForGeneral) { return; }

				$.each(armyForGeneral, function(type) {
					var typeInGen = generalArmy.GetSquad(type);
					hasRequiredArmy = typeInGen && typeInGen.amount == armyForGeneral[type] && hasRequiredArmy;
				});
			};
			// check if target still exists
			var targets = [];
			for (var general in currentAdventure[attackId]){
				var target = currentAdventure[attackId][general].target;
				var buildingAtTarget = game.zone.mStreetDataMap.GetBuildingByGridPos(target);
				if(buildingAtTarget && buildingAtTarget.getPlayerID() != 1770612){
					targets.push(target);
				}
			};

			// all generalState are 0, add 'All ready' to buttonsTemplate
			var areReady = '';
			var readyBool = false;
			if(generalState.every(function(state){return state == 0;})){
				areReady += ' All ready';
				readyBool = true;
			} else {
				areReady += ' Not ready';
				readyBool = false;
			}

			// check if generals are ready in grrison
			var targetsAlive = targets.length > 0 ? true : false;
			var isRegroupDisabled = hasRequiredArmy || !targetsAlive || !readyBool ? 'disabled' : '';
			var isMoveDisabled = isInAttackPosition || !targetsAlive || !readyBool ? 'disabled' : '';
			// isMoveDisabled = false;
			var isAttackDisabled = isInAttackPosition && hasRequiredArmy && targetsAlive && readyBool ? '' : 'disabled';
			attacksState.push({
				isRegroupDisabled: isRegroupDisabled,
				isMoveDisabled: isMoveDisabled,
				isAttackDisabled: isAttackDisabled,
			});
			if(!targetsAlive) {
				continue;
			}
			// air.Introspector.Console.log(attacksState);
			var generalActionButtons = '<button type="button" class="btn btn-sm tostarbtn'+i+' '+attacksState[i-1].isMoveDisabled+'">To Star</button>';
			generalActionButtons += '<button type="button" class="btn btn-sm movebtn'+i+' '+attacksState[i-1].isMoveDisabled+'">Move</button>';
			generalActionButtons += '<button type="button" class="btn btn-sm regroupbtn'+i+' '+attacksState[i-1].isRegroupDisabled+'">Regroup</button>';
			generalActionButtons += '<button type="button" class="btn btn-sm attackbtn'+i+' '+attacksState[i-1].isAttackDisabled+'">Attack</button>';
			generalActionButtons += ' '+generalState.join(', ');
			buttonsTemplate += generalActionButtons;
			buttonsTemplate += areReady;
			buttonsTemplate += '</div>';
			out += '<div style="display: flex; align-items: center;" class="d-flex align-items-center justify-content-center">';

			// get generals icons and attach to next row
			var generalIcons = '';
			for (var general in currentAdventure[attackId]){
				var spec = generalsSpecs[general];
				var generalName = currentAdventure[attackId][general].name;
				// var generalIcon = utils.getImageTag();

				// air.Introspector.Console.log(spec.getMilitaryUnitType()); //SylvanaGeneral
				var generalIcon = utils.getImageTag(spec.getMilitaryUnitType()); // utils.getImageTag(unitType)
				generalIcons += '<span data-toggle="tooltip" data-placement="top" title="{0}">{1}</span>|'.format(general+": "+generalName, generalIcon);
			}

			var row = utils.createTableRow([
				[7, attackId + ' targets '+targets.join(', ') + ' ' + generalIcons],
				[5, buttonsTemplate]]);
			out += row;
		}
        return out + '</div>';
    }
    catch(e){
		// alert(e);
        return '<div>' + e + '</div>';
    }
}

function jzv2_battleMove(movePackets)
{
	battleTimedQueue = new TimedQueue(1000);
	movePackets.forEach(function(packet) {
		var generalId = packet.general;
		var gridId = packet.grid;
		var spec = generalsSpecs[generalId];
        battleTimedQueue.add(function(){
			jzv2_battleSendGeneral(spec, 4, gridId);
			showGameAlert('Moving general '+generalId+' to '+gridId);
		});
	});

	if(battleTimedQueue.len() > 0) {
		battleTimedQueue.run();
		showGameAlert('Moving generals');
	}
}

function jzv2_battleMoveGeneralSpec(movePacket, generalSpec)
{
	battleTimedQueue = new TimedQueue(1000);

	var generalId = movePacket.general;
	var gridId = movePacket.grid;
	battleTimedQueue.add(function(){
		jzv2_battleSendGeneral(generalSpec, 4, gridId);
		showGameAlert('Moving general '+generalId+' to '+gridId);
	});

	if(battleTimedQueue.len() > 0) {
		battleTimedQueue.run();
		showGameAlert('Moving generals');
	}
}

function jzv2_battleAttack(battlePackets)
{
	battleTimedQueue = new TimedQueue(1000);
	try {
		battlePackets.forEach(function(packet) {
			var generalId = packet.general;
			var generalName = packet.name;
			var target = packet.target;
			var time = packet.time;
			var targetName = packet.targetName;

			var spec = generalsSpecs[generalId];
			battleTimedQueue.add(function(){
				jzv2_battleSendGeneral(spec, 5, target); }, time);
				showGameAlert(generalName+' attacking '+targetName);
		});
	}
	catch(e){
		alert(e);
	}

	if(battleTimedQueue.len() > 0) {
		battleTimedQueue.run();
		showGameAlert('All attacks sent');
	}
}

function jzv2_battleSendGeneral(spec, type, target)
{
	try {
		game.gi.mCurrentCursor.mCurrentSpecialist = spec;
		var stask = new armySpecTaskDef();
		stask.uniqueID = spec.GetUniqueID();
		stask.subTaskID = 0;
		swmmo.application.mGameInterface.SendServerAction(95, type, target, 0, stask);
        return true;
	}
	catch (error) {
		alert(error);
        return error;
     }
}

function jzv2_armyGetSpecialistFromID(item)
{
	try {
		var uniqueID = item.id !== undefined ? item.id.split(".") : item.split(".");

		var uniqueIDPacket = game.def("Communication.VO::dUniqueID").Create(uniqueID[0], uniqueID[1]);
		var spec = game.zone.getSpecialist(game.player.GetPlayerId(), uniqueIDPacket);
		// air.Introspector.Console.log(spec);
		return spec;
	} catch (e) {
		game.chatMessage("Error parse id " + item + " - " + e, 'army');
	}
	return null;
}

function jzv2_armyLoadData()
{
	var checkedPacket = jzv2_armyLoadDataCheck(armyPacket);
	if(checkedPacket.canSubmit) {
        jzv2_armyLoadGenerals();
	}
}

function jzv2_armyLoadDataCheck(data)
{
	var result = { 'canSubmit': true }, requiredArmy = {};
	armyPacketMatches = {};
	var canFree = false;
	$.each(data, function(item) {
        result[item] = result[item] || { 'data': data[item] };
		var spec = generalsSpecs[item]
		result[item].spec = spec;
		if(spec == null) { return; }
		var curArmyChecksum = armyInfo[item]&&jzv2_armyGetChecksum(armyInfo[item]);
		var alreadyMatch = jzv2_armyGetChecksum(data[item]) == curArmyChecksum;
		armyPacketMatches[item] = alreadyMatch;
		$.each(data[item].army, function(res) {
			if(!alreadyMatch) {
				var req = data[item].army[res] - jzv2_armyGetSquadCount(item, res);
				if(req > 0) {
					requiredArmy[res] = requiredArmy[res] + req || req;
				} else {
					canFree = true;
				}
			}
		});
		var gStatus = spec.GetGarrison() != null && spec.GetTask() == null;
		result[item].gStatus = gStatus;
		if(!gStatus && !alreadyMatch) {
			result.canSubmit = false;
		}
	});
	result["army"] = requiredArmy;
	$.each(requiredArmy, function(item) {
		var aStatus = armyFreeInfo[item] >= requiredArmy[item];
		if(!aStatus) { result.canSubmit = false; alert('not enough units')}
	});
	if(Object.keys(requiredArmy).length == 0 && !canFree) { result.canSubmit = false; }
	return result;
}

function jzv2_armyGetChecksum(army)
{
	var result = 0;
	$.each(army.army, function(res) {
		result = result ^ (armyMilitaryBase.GetUnitBaseForType(res).GetCombatPriority() + (army.army[res] << 6));
	});
	return result;
}

function jzv2_armyGetSquadCount(spec, squad)
{
	if(!armyInfo[spec]) { return 0; }
	return armyInfo[spec].army[squad] || 0;
}

function jzv2_updateFreeArmyInfo()
{
	var armyCategory = [];
	armyFreeInfo = {};
	freeArmySquadInfo = [];

	game.zone.GetArmy(game.player.GetPlayerId()).GetSquadsCollection_vector().sort(game.def("MilitarySystem::cSquad").SortByCombatPriority).forEach(function(item){
		// air.Introspector.Console.log(item);
		freeArmySquadInfo.push(item);
		var cat = item.GetUnitBase().GetUnitCategory() + +item.GetUnitBase().GetIsElite();
		armyCategory[cat] = armyCategory[cat] || '';
		armyCategory[cat] += utils.getImageTag(item.GetType(), '20px') + ' ' + item.GetAmount() + '&nbsp;';
		armyFreeInfo[item.GetType()] = item.GetAmount();
	});
}

function jzv2_armyLoadGenerals(armyPackets)
{
	var queue = new TimedQueue(1000);
	armyPackets.forEach(function(packet) {
		var dRaiseArmyVO = new dRaiseArmyVODef();
		var generalId = packet.general;
		var army = packet.army;
		var spec = generalsSpecs[generalId];
		if(spec == null) { return; }

		dRaiseArmyVO.armyHolderSpecialistVO = spec.CreateSpecialistVOFromSpecialist();
		$.each(army, function(type) {
			var dResourceVO = new dResourceVODef();
			dResourceVO.name_string = type;
			dResourceVO.amount = army[type];
			dRaiseArmyVO.unitSquads.addItem(dResourceVO);
		});

		queue.add(function(){
            game.gi.mClientMessages.SendMessagetoServer(1031, game.gi.mCurrentViewedZoneID, dRaiseArmyVO);
		});
	});
	queue.run();
	showGameAlert('Load army completed');
}

function jz_getAvailableQuatermasterId(){
	getAllSpecs();
	allSpecs.forEach(function(item){
		showGameAlert("spec", item.GetUniqueID().toKeyString());
		if(item.GetType() == 12){ // as public static const TRANSPORTER_GENERAL:int = 12;
			quatermaster = item;
			quatermasterId = item.GetUniqueID().toKeyString();
			showGameAlert("Quatermaster found "+quatermasterId);
			// air.Introspector.Console.log("quatermasterId", quatermasterId);
		}
	});
	return quatermasterId;
}

function jz_loadRemainingArmyToQuatermaster(){
	jz_getAvailableQuatermasterId();

	if(quatermasterId == null) {
		// air.Introspector.Console.log("quatermasterId is null");
		showGameAlert("No quatermaster available");
		return; }
	if(quatermaster == null) {
		// air.Introspector.Console.log("quatermaster is null");
		showGameAlert("No quatermaster available");
		return; }

	var capacity = quatermaster.GetMaxMilitaryUnits();

	jzv2_updateFreeArmyInfo();
	if(Object.keys(armyFreeInfo).length == 0) { return; }

	var queue = new TimedQueue(1000);
	var amountLoaded = 0;
	var dRaiseArmyVO = new dRaiseArmyVODef();

	dRaiseArmyVO.armyHolderSpecialistVO = quatermaster.CreateSpecialistVOFromSpecialist();
	$.each(armyFreeInfo, function(type) {
		var unitsToLoad = armyFreeInfo[type];
		var dResourceVO = new dResourceVODef();
		dResourceVO.name_string = type;
		dResourceVO.amount = unitsToLoad;

		if(amountLoaded + unitsToLoad <= capacity) {
			amountLoaded += unitsToLoad;
			dRaiseArmyVO.unitSquads.addItem(dResourceVO);
		} else {
			showGameAlert("Not enough capacity");
		}
	});

	queue.add(function(){
		game.gi.mClientMessages.SendMessagetoServer(1031, game.gi.mCurrentViewedZoneID, dRaiseArmyVO);
		showGameAlert('Load army completed');
	});
	queue.run();
}

var windowOpened = false;
function jz_handleQuestBook(){
// public static const QUEST_MODE_string:String = "mQuestMode";
// public static const QUEST_MODE_QUEST_FAILED:int = 0;
// public static const QUEST_MODE_LOOP_UNTIL_QUEST_REWARD_COULD_BE_ASSIGNED:int = 1;
// public static const QUEST_MODE_START_WINDOW_DESCRIPTION_WAIT_FOR_BUTTON_PRESSED:int = 2;
// public static const QUEST_MODE_RUNNING:int = 3;
// public static const QUEST_MODE_INIT_REWARD_WINDOW:int = 4;
// public static const QUEST_MODE_REWARD_WINDOW_WAIT_FOR_BUTTON_ACTIVE:int = 5;
// public static const QUEST_MODE_START_DELAY:int = 6;
// public static const QUEST_MODE_SHOW_WINDOW_DESCRIPTION:int = 7;
// public static const QUEST_MODE_PRESS_REWARD_BUTTON:int = 8;
// public static const QUEST_MODE_PENDING_NEXT_RANDOM_DAILY_QUEST:int = 9;
// public static const QUEST_MODE_WAIT_FOR_FINISH:int = 10;
// public static const QUEST_MODE_DEACTIVATED:int = 11;
// public static const QUEST_MODE_REWARD_COLLECTED_IDLE:int = 12; // finished
	showGameAlert("completing quests");
	var activeQuests = game.questCallbacks.GetClientQuestPool().GetQuest_vector().source;
	var global = swmmo.getDefinitionByName("global");

	var notFinishedQuests = [];

	for(var i = 0; i < activeQuests.length; i++) {
		var quest = activeQuests[i];
		var timeoutDuration = 5*1000;
		if (windowOpened == false){
			globalFlash.gui.OpenWindow("GAMESTATE_ID_QUEST_BOOK_START_WITH", quest.getQuestName_string())
			windowOpened = true;
		}

		if(quest.mQuestMode == 12) { // QUEST_MODE_REWARD_COLLECTED_IDLE
			// finished
			// showGameAlert("Complete Idle quest: " + quest.getQuestName_string());
			continue;
		} else {
			notFinishedQuests.push(quest);
		}

		if(quest.mQuestMode == 2) { // QUEST_MODE_START_WINDOW_DESCRIPTION_WAIT_FOR_BUTTON_PRESSED
			// notFinishedQuests.push(quest);
			globalFlash.gui.OpenWindow("GAMESTATE_ID_QUEST_BOOK_START_WITH", quest.getQuestName_string())
			// air.Introspector.Console.log("quest.mQuestMode: "+ quest.mQuestMode + " name: " + quest.getQuestName_string());
			showGameAlert("Completing quest: " + quest.getQuestName_string());
			game.questCallbacks.QuestOkButtonPressedFromGui(quest);
			break;
		}

		var mainquest = quest.mQuestDefinition.connectedToQuest_string == "";
		if(quest.mQuestMode == 3 && !mainquest) { // QUEST_MODE_RUNNING
			// notFinishedQuests.push(quest);
			// air.Introspector.Console.log("endConditions_vector.length", quest.mQuestDefinition.endConditions_vector.length);
			var questCondition0 = quest.mQuestDefinition.questTriggers_vector[0].condition;

			if (questCondition0 == 9) { // CONDITION_SELECTED = 9;
				// air.Introspector.Console.log("quest.mQuestMode: "+ quest.mQuestMode + " name: " + quest.getQuestName_string());
				showGameAlert("Pickup all: " + quest.getQuestName_string());
				timeoutDuration = 10*1000;
				shortcutsPickupAll();
				break
			}
		}

		if(quest.mQuestMode == 5) { //QUEST_MODE_REWARD_WINDOW_WAIT_FOR_BUTTON_ACTIVE
			// notFinishedQuests.push(quest);
			showGameAlert("Getting rewards: " + quest.getQuestName_string());
			global.ui.mQuestClientCallbacks.RewardOkButtonPressedFromGui(quest);
			break;
		}
	};

	// timeoutId = setTimeout(function() { jz_handleQuestBook() }, 5*1000);

	// close game window if no quests
	if (notFinishedQuests.length > 0){
		timeoutId = setTimeout(function() { jz_handleQuestBook() }, timeoutDuration);
	} else {
		showGameAlert("No quests left");
		// air.NativeApplication.nativeApplication.exit();
		return;
	}
}

function loadRemainingUnits(){
	alert("loadRemainingUnits");

/// adv def
	// var def = game.zone.GetAdventure().GetAdventureDefinition();
	// air.Introspector.Console.log(swmmo.application.mGameInterface.mCurrentPlayerZone.mAdventureName);

	// air.Introspector.Console.log("adventureDef", adventureDef);
	// var advDef = adventureDef.FindAdventureDefinition(swmmo.application.mGameInterface.mCurrentPlayerZone.mAdventureName);
	// air.Introspector.Console.log(advDef);




	// get all specialists in zone
	var fullCapacityGenerals = [];
	var generalsWithEliteUnits = [];
	var generalsWithStandardUnits = [];
	game.zone.GetSpecialists_vector().sort(specNameSorter).forEach(function(item){
		// item.GetType() == 12){ // as public static const TRANSPORTER_GENERAL:int = 12;
		if (game.player.GetPlayerId() == item.getPlayerID() &&
			(armySPECIALIST_TYPE.IsGeneral(item.GetType()) || item.GetType() == 12)){
				// air.Introspector.Console.log(item);
				// air.Introspector.Console.log("max units: "+ item.GetMaxMilitaryUnits());
				// air.Introspector.Console.log("loaded units: "+ item.GetArmy().GetUnitsCount());

				var maxCapacity = item.GetMaxMilitaryUnits();
				var loadedUnits = item.GetArmy().GetUnitsCount();
				var freeCapacity = maxCapacity - loadedUnits;

				// air.Introspector.Console.log(loadedUnits+"/"+maxCapacity);
				var eliteUnit = false;
				if(freeCapacity == maxCapacity){
					// air.Introspector.Console.log("full capacity");
					fullCapacityGenerals.push(item);
				}else if(freeCapacity > 0 && loadedUnits > 0){
					// check if elite unit
					var army = item.GetArmy();
					var squads = army.GetSquads_vector();

					for(var i = 0; i < squads.length; i++) {
						var squad = squads[i];
						if(squad.GetUnitDescription().GetIsElite() == true){
							eliteUnit = true;
						}
					}
					if(eliteUnit){
						generalsWithEliteUnits.push(item);
					} else {
						generalsWithStandardUnits.push(item);
					}
				}
			}
	});
	// air.Introspector.Console.log("fullCapacityGenerals " + fullCapacityGenerals.length);
	// air.Introspector.Console.log("generalsWithEliteUnits " + generalsWithEliteUnits.length);
	// air.Introspector.Console.log("generalsWithStandardUnits " + generalsWithStandardUnits.length);


	// get free army info
	jzv2_updateFreeArmyInfo();
	if(freeArmySquadInfo.length == 0) { return; }

	var queue = new TimedQueue(1000);
	var amountLoaded = 0;
	var dRaiseArmyVO = new dRaiseArmyVODef();

	// dRaiseArmyVO.armyHolderSpecialistVO = quatermaster.CreateSpecialistVOFromSpecialist();
	freeArmySquadInfo.forEach(function(squad){
		var isElite = squad.GetUnitDescription().GetIsElite();
		air.Introspector.Console.log(isElite + " unasigned ", squad);

		if(isElite){
			while(squad.GetAmount() > 0){
			}

		}
		// var dResourceVO = new dResourceVODef();
		// dResourceVO.name_string = type;
		// dResourceVO.amount = unitsToLoad;

		// if(amountLoaded + unitsToLoad <= capacity) {
		// 	amountLoaded += unitsToLoad;
		// 	dRaiseArmyVO.unitSquads.addItem(dResourceVO);
		// } else {
		// 	showGameAlert("Not enough capacity");
		// }
	});

	// queue.add(function(){
	// 	game.gi.mClientMessages.SendMessagetoServer(1031, game.gi.mCurrentViewedZoneID, dRaiseArmyVO);
	// 	showGameAlert('Load army completed');
	// });
	// queue.run();
}

function jz_UpdateButtonStates(){
	for(var i = 1; i <= numberOfAttacks; i++) {
		var istr = i.toString();
		var attackId = istr.padStart(2, '0');

		// check if general in position
		var isInAttackPosition = true;

		// check if general has required army
		var hasRequiredArmy = true;
		generalState = [];
		for (var general in currentAdventure[attackId]){
			var spec = generalsSpecs[general];
			// check if general in position
			var position = currentAdventure[attackId][general].grid;
			isInAttackPosition = spec.GetGarrisonGridIdx() == position && isInAttackPosition;

			generalState.push(spec.GetGeneralState());
			var generalArmy = spec.GetArmy();
			var armyForGeneral = currentAdventure[attackId][general].army;

			if(!armyForGeneral) { return; }

			$.each(armyForGeneral, function(type) {
				var typeInGen = generalArmy.GetSquad(type);
				hasRequiredArmy = typeInGen && typeInGen.amount == armyForGeneral[type] && hasRequiredArmy;
			});
		};
		// check if target still exists
		var targets = [];
		for (var general in currentAdventure[attackId]){
			var target = currentAdventure[attackId][general].target;
			var buildingAtTarget = game.zone.mStreetDataMap.GetBuildingByGridPos(target);
			if(buildingAtTarget && buildingAtTarget.getPlayerID() != 1770612){
				targets.push(target);
			}
		};

		// all generalState are 0, add 'All ready' to buttonsTemplate
		var areReady = '';
		var readyBool = false;
		if(generalState.every(function(state){return state == 0;})){
			areReady += ' All ready';
			readyBool = true;
		} else {
			areReady += ' Not ready';
			readyBool = false;
		}

		// check if generals are ready in grrison
		var targetsAlive = targets.length > 0 ? true : false;
		var isRegroupDisabled = hasRequiredArmy || !targetsAlive || !readyBool ? 'disabled' : '';
		var isMoveDisabled = isInAttackPosition || !targetsAlive || !readyBool ? 'disabled' : '';
		// isMoveDisabled = false;
		var isAttackDisabled = isInAttackPosition && hasRequiredArmy && targetsAlive && readyBool ? '' : 'disabled';
		attacksState.push({
			isRegroupDisabled: isRegroupDisabled,
			isMoveDisabled: isMoveDisabled,
			isAttackDisabled: isAttackDisabled,
		});
	}
}