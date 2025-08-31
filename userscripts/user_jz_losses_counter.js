/* Lost units counter by JZ
** Script reads battle reports from mails and counts lost units.
** Currently player got to open mails with battle reports before running this script.
** This allows to load battle report body into memory and process it by the script.
*/
var dIntegerVODef = swmmo.getDefinitionByName("Communication.VO::dIntegerVO");

var battlesFromMail = {};
var LUC_ICON_SIZE = '24px';
addToolsMenuItem("JZ Lost units counter", luc_GetData);

function luc_GetData(){
	luc_MenuHandler();
}

function luc_MenuHandler(event)
{
	$( "div[role='dialog']:not(#lucModal):visible").modal("hide");
	createModalWindow('lucModal', 'Lost units counter');
	$("#lucModalData, .modal-body").css({
		"margin-top": -10,
		"padding-top": 0
	});
	$("modal-header").css({
		"padding-bottom": 0
	});
	$('#lucModalData').html(luc_MakeModal());
	$('#lucModal:not(:visible)').modal({backdrop: "static"});

	// Add footer buttons once
	if($('#lucModal .lucLoadEmails').length === 0 && $('#lucModal .lucReloadModal').length === 0){
		$("#lucModal .modal-footer").prepend([
			$('<button>').attr({ "class": "btn btn-primary lucLoadEmails" }).text('Load battle mails'),
			$('<button>').attr({ "class": "btn btn-default lucReloadModal" }).text('Reload counter')
		]);
		$('#lucModal .lucLoadEmails').click(function(){
			try { getEmailsFromServer(); } catch(e) { }
		});
		$('#lucModal .lucReloadModal').click(function(){
			luc_ReloadModal();
		});
	}
}

function luc_MakeModal()
{
	try{
		var out = '<div class="container-fluid">';

		return out += luc_GetCurrentArmyTable();
	}
	catch(e){
		return '<div>' + e + '</div>';
	}
}

function luc_GetCurrentArmyTable(){
	battlesFromMail = processBattleReports();
    //battlesFromMail = getEmailsFromServer();
	var html = '<div>';

    // Render per-battle losses with an extra column for attackers
    var battleId = 1;
    var perBattleCasualties = battlesFromMail.perBattleCasualties.slice().reverse();
    var perBattleAttackers = (battlesFromMail.perBattleAttackers || []).slice().reverse();

    // Header row
    html += utils.createTableRow([
        [1, '<strong>Battle</strong>'],
        [3, '<strong>Attackers</strong>'],
        [3, '<strong>Defenders</strong>'],
        [2, '<strong>Casualties</strong>'],
        [3, '<strong>Def. Casualties</strong>']
    ]);
    var perBattleDefenders = (battlesFromMail.perBattleDefenders || []).slice().reverse();
    var perBattleCasualtiesDef = (battlesFromMail.perBattleCasualtiesDef || []).slice().reverse();
    for (var i = 0; i < perBattleCasualties.length; i++) {
        var battleCasualties = perBattleCasualties[i];
        var attackersHtml = perBattleAttackers[i] || '';
        var defendersHtml = perBattleDefenders[i] || '';
        var battleCasualtiesInfo = [];
        var battleDefCasualtiesInfo = [];

        for(var unitType in battleCasualties){
            battleCasualtiesInfo.push(utils.getImageTag(unitType, LUC_ICON_SIZE) + ' ' + battleCasualties[unitType] + '&nbsp;');
        }
        var defCas = perBattleCasualtiesDef[i] || {};
        for(var unitType in defCas){
            battleDefCasualtiesInfo.push(utils.getImageTag(unitType, LUC_ICON_SIZE) + ' ' + defCas[unitType] + '&nbsp;');
        }
        html += ulc_createBattleRow('Battle ' + battleId, attackersHtml, defendersHtml, battleCasualtiesInfo, battleDefCasualtiesInfo);
        battleId++;
    }

    html += '<br>';

    var usedSkills = [];
    var skillsHtml = '';
    // <Skill id=90 name=Skill_GetRecruits minLvl: 26> // hostile takeover
    // <Skill id=94 name=Skill_ResurrectLosses minLvl: 19> // first aid
    for(var skill in battlesFromMail.battleDetails){
        if (skill.id == 90 || skill.id == 94) {
            usedSkills.push(skill);
            skillsHtml += skill.name + ' lvl ' + skill.level + '&nbsp;'
        }
    }
	var lostGeneralsInfo = [];
	for(var unitType in battlesFromMail.lostGenerals){
		lostGeneralsInfo.push(utils.getImageTag(unitType) + ' ' + battlesFromMail.lostGenerals[unitType] + skillsHtml + '&nbsp;');
	}
	html += ulc_createRowsWithMaxUnits('Lost generals', lostGeneralsInfo);

	var lostUnitsInfo = [];
	for(var unitType in battlesFromMail.allCasualties){
		lostUnitsInfo.push(utils.getImageTag(unitType) + ' ' + battlesFromMail.allCasualties[unitType] + '&nbsp;');
	}
	html += ulc_createRowsWithMaxUnits('Lost units', lostUnitsInfo);

	return html + '<div>';
}

function luc_ReloadModal(){
    try{
        $('#lucModalData').html(luc_MakeModal());
        // Save button removed; no click binding
    } catch(e){
        // debug('luc_ReloadModal error', e);
    }
}

function ulc_createRowsWithMaxUnits(rowName, data){
	var temp = JSON.parse(JSON.stringify(data));
	var first8 = temp.splice(0, 8);
	first8 = first8.map(function(item){ return item; }).join('');
	var html = utils.createTableRow([
		[4, rowName],
		[8, first8]
	]);
	while(temp.length > 0){
		var next8 = temp.splice(0, 8);
		next8 = next8.map(function(item){ return item; }).join('');
		html += utils.createTableRow([
			[4, ''],
			[8, next8]
		]);
	}
	return html;
}

// Create rows for a battle with 3 columns: Battle id, attackers images, casualties
function ulc_createBattleRow(rowName, attackersHtml, defendersHtml, atkData, defData){
    var tempA = JSON.parse(JSON.stringify(atkData || []));
    var tempD = JSON.parse(JSON.stringify(defData || []));

    var firstA = tempA.splice(0, 3).map(function(item){ return item; }).join('');
    var firstD = tempD.splice(0, 3).map(function(item){ return item; }).join('');

    // Placeholders for empty columns
    if (firstA === '' && (atkData || []).length === 0) firstA = '<span>No Losses</span>';
    if (firstD === '' && (defData || []).length === 0) firstD = '<span>No Losses</span>';

    var html = utils.createTableRow([
        [1, rowName],
        [3, attackersHtml],
        [3, defendersHtml],
        [2, firstA],
        [3, firstD]
    ]);
    while(tempA.length > 0 || tempD.length > 0){
        var nextA = tempA.splice(0, 3).map(function(item){ return item; }).join('');
        var nextD = tempD.splice(0, 3).map(function(item){ return item; }).join('');
        html += utils.createTableRow([
            [1, ''],
            [3, ''],
            [3, ''],
            [2, nextA],
            [3, nextD]
        ]);
    }
    return html;
}

var getBattleBodyResponder = game.createResponder(getBattleBodyResponderHandler, getBattleBodyResponderHandlerFault);
function getBattleBodyResponderHandler(event, data)
{
	try
	{
        // debug("getBattleBodyResponderHandler data: ", data);
        var battleData = parseBattleScript(data.data.attachments.battleScript, data.data.timestamp);
        // battleReports.push(battleData);
        // debug("getBattleBodyResponderHandler battleData: ", battleData);
        insertSorted(battleReports, battleData);
	}
	catch (e)
	{
		// debug("getBattleBodyResponderHandler -> " + e);
	}
}

function getBattleBodyResponderHandlerFault(event, data)
{
    // debug("getBattleBodyResponderHandlerFault data: ", data);
    // debug("getBattleBodyResponderHandlerFault event: ", event);
}

// Insert while keeping array sorted
function insertSorted(arr, item) {
    var i = arr.length - 1;
    while (i >= 0 && arr[i].timestamp < item.timestamp) {
        i--;
    }
    arr.splice(i + 1, 0, item);
}

var vdef = swmmo.getDefinitionByName("Communication.VO::dIntegerVO");
function getEmailsFromServer(){
    battleReports = [];
    // globalFlash.gui.mMailWindow.Show();
    // globalFlash.gui.mMailWindow.Hide();
    try {
        var currentMails = globalFlash.gui.mMailWindow.mailTypeHeader.owner.dataProvider;
        // debug("currentMails: ", currentMails);
        for(var i = 0; i < currentMails.length; i++){
            var mail = currentMails[i];
            // BATTLE_REPORT_INTERCEPTED = 29;
            // BATTLE_REPORT = 8;
            if (mail.type == 8 || mail.type == 29) {
                // alert("Fetching email "+i);
                var v = new vdef(mail.id);
                game.gi.mClientMessages.SendMessagetoServer(1177,game.gi.mCurrentViewedZoneID,v, getBattleBodyResponder);
            }
        };
    } catch (error) {
        // debug("Error in getEmailsFromServer: ", error);
    }
}

function parseBattleScript(battleScript, timestamp) {
    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(battleScript, "text/xml");
    var jsonResult = elementToJSON(xmlDoc);
    jsonResult = jsonResult.Battle[0];
    jsonResult.ArmyDescription = jsonResult.ArmyDescription[0];
    jsonResult.CombatModifiers = jsonResult.CombatModifiers[0];
    jsonResult.Skills = jsonResult.Skills[0];
    jsonResult.timestamp = timestamp;
    // derive attackers/defenders summary (images with counts) for quick rendering later
    try {
        var armies = jsonResult.ArmyDescription.Army;
        // ensure array
        if (!Array.isArray(armies)) { armies = [armies]; }
        var attackingArmy = armies.filter(function(army){ return army.group === 'Attackers'; })[0];
        var defendingArmy = armies.filter(function(army){ return army.group === 'Defenders'; })[0];
        var attackersCount = {};
        var defendersCount = {};
        if (attackingArmy) {
            var squadsA = attackingArmy.Squad || [];
            if (!Array.isArray(squadsA)) { squadsA = [squadsA]; }
            squadsA.forEach(function(sq){
                var unitType = sq.unitType || (sq.Unit && sq.Unit[0] && (sq.Unit[0].unitType || sq.Unit[0].type)) || sq.combatantType || sq.name;
                var amt = parseInt(sq.amount, 10);
                if (!isNaN(amt) && amt < 0) { amt = 0; }
                if (unitType) {
                    attackersCount[unitType] = (attackersCount[unitType] || 0) + (isNaN(amt) ? 0 : amt);
                }
            });
        }
        if (defendingArmy) {
            var squadsD = defendingArmy.Squad || [];
            if (!Array.isArray(squadsD)) { squadsD = [squadsD]; }
            squadsD.forEach(function(sq){
                var unitType = sq.unitType || (sq.Unit && sq.Unit[0] && (sq.Unit[0].unitType || sq.Unit[0].type)) || sq.combatantType || sq.name;
                var amt = parseInt(sq.amount, 10);
                if (!isNaN(amt) && amt < 0) { amt = 0; }
                if (unitType) {
                    defendersCount[unitType] = (defendersCount[unitType] || 0) + (isNaN(amt) ? 0 : amt);
                }
            });
        }
        jsonResult.perBattleAttackers = Object.keys(attackersCount).map(function(u){ return utils.getImageTag(u, LUC_ICON_SIZE) + ' ' + attackersCount[u]; }).join('&nbsp;');
        jsonResult.perBattleDefenders = Object.keys(defendersCount).map(function(u){ return utils.getImageTag(u, LUC_ICON_SIZE) + ' ' + defendersCount[u]; }).join('&nbsp;');
    } catch(e) {
        jsonResult.perBattleAttackers = '';
        jsonResult.perBattleDefenders = '';
    }
    return jsonResult;
}
var battleReports = [];
function processBattleReports(event){
    try {
        var parser = new DOMParser();
        var allCasualties = {};
		var lostGenerals = {};
        var battleId = 1;
        var perBattleCasualties = [];
        var perBattleCasualtiesDef = [];
        var battleDetails = {};
        battleReports.forEach(function (battleScript) {
            var battleCasualties = {};
            var battleCasualtiesDef = {};
            // var xmlDoc = parser.parseFromString(battleScript,"text/xml");
            // // debug("battleScript xmlDoc", xmlDoc);
            // var jsonResult = elementToJSON(xmlDoc);

            // jsonResult = jsonResult.Battle[0];
            // jsonResult.ArmyDescription = jsonResult.ArmyDescription[0];
            // jsonResult.CombatModifiers = jsonResult.CombatModifiers[0];
            // jsonResult.Skills = jsonResult.Skills[0];

            var armyCopy = JSON.parse(JSON.stringify(battleScript.ArmyDescription.Army));
            var attackingArmy = armyCopy.filter(function(army) {
                return army.group === "Attackers";
            })[0];

            var attackingWithOneUnit = false;
            if(attackingArmy.Squad.length === 2 ){
                if(attackingArmy.Squad[0].amount === "1" && attackingArmy.Squad[1].amount === "1"){
                    attackingWithOneUnit = true;
                }
            }

            var roundId = 0;
            battleScript.Round.forEach(function(round){
                var phaseId = 0;
                round.Phase.forEach(function(phase){
                    if(phase.Casualties){
                        var casualties = phase.Casualties;
                        casualties.forEach(function(casualty){
                            if(casualty.group == "Attackers"){
                                casualty.Casualty.forEach(function(unitCasualty){
                                    var deadUnits = parseInt(unitCasualty.dead,10);
                                    var isGeneral = unitCasualty.combatantType === "CombatGeneral";
                                    if(isGeneral){
                                        if(lostGenerals[unitCasualty.unitType]){
                                            lostGenerals[unitCasualty.unitType] += deadUnits;
                                            battleCasualties[unitCasualty.unitType] = deadUnits;
                                        } else {
                                            lostGenerals[unitCasualty.unitType] = deadUnits;
                                            battleCasualties[unitCasualty.unitType] = deadUnits;
                                        }
                                        return;
                                    }
                                    if(attackingWithOneUnit) return;

                                    if(!isNaN(deadUnits)){
                                        var unitType = unitCasualty.unitType;
                                        if(allCasualties[unitType]){
                                            allCasualties[unitType] = parseInt(allCasualties[unitType],10) + deadUnits;
                                        } else {
                                            allCasualties[unitType] = deadUnits;
                                        }
                                        if(battleCasualties[unitType]){
                                            battleCasualties[unitType] = parseInt(battleCasualties[unitType],10) + deadUnits;
                                        } else {
                                            battleCasualties[unitType] = deadUnits;
                                        }
                                    }
                                });
                            } else if (casualty.group == "Defenders") {
                                casualty.Casualty.forEach(function(unitCasualty){
                                    var deadUnits = parseInt(unitCasualty.dead,10);
                                    if(!isNaN(deadUnits)){
                                        var unitType = unitCasualty.unitType;
                                        if(battleCasualtiesDef[unitType]){
                                            battleCasualtiesDef[unitType] = parseInt(battleCasualtiesDef[unitType],10) + deadUnits;
                                        } else {
                                            battleCasualtiesDef[unitType] = deadUnits;
                                        }
                                    }
                                });
                            }
                        });
                    }
                });
            });

            perBattleCasualties.push(battleCasualties);
            perBattleCasualtiesDef.push(battleCasualtiesDef);
            // debug("jsonResult.Skills", jsonResult.Skills);
            battleDetails.usedSkills = battleScript.Skills;

            battleId++;
        });
    }
    catch (e) {
        alert(e);
    }
    return {
        allCasualties: allCasualties,
		lostGenerals: lostGenerals,
        battleReports: battleReports,
        perBattleCasualties: perBattleCasualties,
        perBattleCasualtiesDef: perBattleCasualtiesDef,
        perBattleAttackers: battleReports.map(function(b){ return (b && b.perBattleAttackers) ? b.perBattleAttackers : ''; }),
        perBattleDefenders: battleReports.map(function(b){ return (b && b.perBattleDefenders) ? b.perBattleDefenders : ''; }),
        battleDetails: battleDetails
    };
}

function elementToJSON(element) {
    var obj = {};

    if (element.attributes && element.attributes.length > 0) {
      for (var i = 0; i < element.attributes.length; i++) {
        var attribute = element.attributes[i];
        obj[attribute.name] = attribute.value;
      }
    }

    if (element.hasChildNodes()) {
      for (var i = 0; i < element.childNodes.length; i++) {
        var child = element.childNodes[i];
        if (child.nodeType === 1) {
          if (child.childNodes.length === 1 && child.firstChild.nodeType === 3) {
            obj[child.nodeName] = child.textContent;
          } else {
            if (!obj[child.nodeName]) {
              obj[child.nodeName] = [];
            }
            obj[child.nodeName].push(elementToJSON(child));
          }
        }
      }
    }
    return obj;
  }
