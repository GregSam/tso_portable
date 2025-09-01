/* Lost units counter by JZ
** Script reads battle reports from mails and counts lost units.
** Currently player got to open mails with battle reports before running this script.
** This allows to load battle report body into memory and process it by the script.
*/

var battlesFromMail = {};
var luc_pendingMailRequests = 0; // tracks outstanding battle mail fetches
var LUC_ICON_SIZE = '24px';
function luc_isGeneralUnit(unitType){
    try { return (typeof unitType === 'string') && /(general|boss)/i.test(unitType); } catch(e){ return false; }
}
function luc_casualtiesToList(casObj){
    var list = [];
    try {
        var keys = Object.keys(casObj || {}).sort(function(a,b){
            var ag = luc_isGeneralUnit(a), bg = luc_isGeneralUnit(b);
            return ag===bg ? 0 : (ag ? -1 : 1);
        });
        keys.forEach(function(unitType){
            list.push(utils.getImageTag(unitType, LUC_ICON_SIZE) + ' ' + casObj[unitType] + '&nbsp;');
        });
    } catch(e) {}
    return list;
}
addToolsMenuItem("JZ Lost units counter", luc_GetData);

function luc_GetData(){
	luc_MenuHandler();
}

function luc_MenuHandler(event)
{
	$( "div[role='dialog']:not(#lucModal):visible").modal("hide");
	createModalWindow('lucModal', 'Lost units counter');
	// set this modal width to a fixed 1100px
	try {
		var $dlg = $('#lucModal .modal-dialog');
		if ($dlg.length) {
			$dlg.css({ 'max-width': '1200px', 'width': '1200px' });
		}
	} catch(e) { }
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
    var perBattleDefendersTotal = (battlesFromMail.perBattleDefendersTotal || []).slice().reverse();
    for (var i = 0; i < perBattleCasualties.length; i++) {
        var battleCasualties = perBattleCasualties[i];
        var attackersHtml = perBattleAttackers[i] || '';
        var defendersHtml = perBattleDefenders[i] || '';
        var battleCasualtiesInfo = luc_casualtiesToList(battleCasualties);
        var defCas = perBattleCasualtiesDef[i] || {};
        var battleDefCasualtiesInfo = luc_casualtiesToList(defCas);
        // Check if defenders total equals their casualties => DEFETED
        try {
            var defCasTotal = 0;
            for (var ut in defCas) { defCasTotal += (parseInt(defCas[ut],10) || 0); }
            var defTotal = parseInt(perBattleDefendersTotal[i], 10) || 0;
            if (defTotal > 0 && defCasTotal >= defTotal) {
                var skullIcon = '';
                try {
                    skullIcon = utils.getImage(new (game.def('GUI.Assets::gAssetManager_IconSkull'))().bitmapData, 'auto', LUC_ICON_SIZE);
                } catch(e) {
                    skullIcon = '<span style="color:#c62828;font-weight:bold;">&#9760;</span>';
                }
                battleDefCasualtiesInfo.push('&nbsp;' + skullIcon);
            }
        } catch(e) {}
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
    } catch(e){
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
    if (firstA === '' && (atkData || []).length === 0) firstA = '<span style="color:#2e7d32;font-weight:bold;">No Losses</span>';
    if (firstD === '' && (defData || []).length === 0) firstD = '<span style="color:#c62828;font-weight:bold;">No Losses</span>';

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
        var battleData = parseBattleScript(data.data.attachments.battleScript, data.data.timestamp);
        insertSorted(battleReports, battleData);

        // Auto refresh when all pending mails are processed
        if (luc_pendingMailRequests > 0) {
            luc_pendingMailRequests--;
            if (luc_pendingMailRequests === 0 && $('#lucModal').length) {
                try { game.showAlert('All battle mails received.'); } catch(e) {}
                setTimeout(function(){ try{ luc_ReloadModal(); }catch(e){} }, 200);
            }
        }
	}
	catch (e)
	{
		// debug("getBattleBodyResponderHandler -> " + e);
	}
}

function getBattleBodyResponderHandlerFault(event, data)
{
    if (luc_pendingMailRequests > 0) {
        luc_pendingMailRequests--;
        if (luc_pendingMailRequests === 0 && $('#lucModal').length) {
            try { game.showAlert('All battle mails received.'); } catch(e) {}
            setTimeout(function(){ try{ luc_ReloadModal(); }catch(e){} }, 200);
        }
    }
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
    try {
        var currentMails = globalFlash.gui.mMailWindow.mailTypeHeader.owner.dataProvider;
        var requested = 0;
        for(var i = 0; i < currentMails.length; i++){
            var mail = currentMails[i];
            // BATTLE_REPORT_INTERCEPTED = 29;
            // BATTLE_REPORT = 8;
            if (mail.type == 8 || mail.type == 29) {
                var v = new vdef(mail.id);
                game.gi.mClientMessages.SendMessagetoServer(1177,game.gi.mCurrentViewedZoneID,v, getBattleBodyResponder);
                requested++;
            }
        };
        luc_pendingMailRequests = requested;
        // If nothing requested, just refresh immediately
        if (luc_pendingMailRequests === 0 && $('#lucModal').length) {
            setTimeout(function(){ try{ luc_ReloadModal(); }catch(e){} }, 50);
        }
    } catch (error) {
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
        var atkKeys = Object.keys(attackersCount).sort(function(a,b){ var ag=luc_isGeneralUnit(a), bg=luc_isGeneralUnit(b); return ag===bg?0:(ag?-1:1); });
        var defKeys = Object.keys(defendersCount).sort(function(a,b){ var ag=luc_isGeneralUnit(a), bg=luc_isGeneralUnit(b); return ag===bg?0:(ag?-1:1); });
        jsonResult.perBattleAttackers = atkKeys.map(function(u){ return utils.getImageTag(u, LUC_ICON_SIZE) + ' ' + attackersCount[u]; }).join('&nbsp;');
        jsonResult.perBattleDefenders = defKeys.map(function(u){ return utils.getImageTag(u, LUC_ICON_SIZE) + ' ' + defendersCount[u]; }).join('&nbsp;');
        // numeric totals for easier comparisons later
        jsonResult.perBattleDefendersTotal = Object.keys(defendersCount).reduce(function(sum, k){ return sum + (parseInt(defendersCount[k],10)||0); }, 0);
    } catch(e) {
        jsonResult.perBattleAttackers = '';
        jsonResult.perBattleDefenders = '';
        jsonResult.perBattleDefendersTotal = 0;
    }
    return jsonResult;
}
var battleReports = [];
function processBattleReports(event){
    try {
        var allCasualties = {};
		var lostGenerals = {};
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

            battleScript.Round.forEach(function(round){
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
            battleDetails.usedSkills = battleScript.Skills;
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
        perBattleDefendersTotal: battleReports.map(function(b){ return (b && typeof b.perBattleDefendersTotal !== 'undefined') ? b.perBattleDefendersTotal : 0; }),
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
