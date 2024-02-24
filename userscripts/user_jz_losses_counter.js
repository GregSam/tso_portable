/* Lost units counter by JZ
** Script reads battle reports from mails and counts lost units.
** Currently player got to open mails with battle reports before running this script.
** This allows to load battle report body into memory and process it by the script.
*/
// var dIntegerVODef = swmmo.getDefinitionByName("Communication.VO::dIntegerVO");

var battlesFromMail = {};
addToolsMenuItem("JZ Lost units counter", luc_GetData);

function luc_GetData(){
	// air.Introspector.Console.log("luc_GetData");
	// getBattleReportsBodies();
	// setTimeout(function() { luc_MenuHandler(); }, 5000);

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
	$('#lucModalData .savecaualtiesbtn').click(luc_SaveData);
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
	var html = '<div>';

    html += luc_getSaveButton();

    var battleId = 1;
    battlesFromMail.perBattleCasualties.reverse().forEach(function (battleCasualties) {
        var battleCasualtiesInfo = [];

        if(battleCasualties.length == 0){
            return;
        }

        for(var unitType in battleCasualties){
            battleCasualtiesInfo.push(utils.getImageTag(unitType) + ' ' + battleCasualties[unitType] + '&nbsp;');
        }
        html += ulc_createRowsWithMaxUnits('Battle ' + battleId, battleCasualtiesInfo);
        battleId++;
    });

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

// function getBattleReportsBodies(){
// 	// MARK_MAIL_AS_READ = 1164;
// 	// GET_INBOX_BODY = 1177;
// 	// this.mGI.mClientMessages.SendMessagetoServer(COMMAND.MARK_MAIL_AS_READ,this.mGI.mCurrentViewedZoneID,new dIntegerVO(param1.id));
// 	var currentMails = globalFlash.gui.mMailWindow.mailTypeHeader.owner.dataProvider;
// 	for(var i = 0; i < currentMails.length; i++){
// 		var mail = currentMails[i];

// 		if (mail.type == 8 || mail.type == 29 && (mail.attachments == null || mail.attachments == undefined)) {
// 			// game.gi.mClientMessages.SendMessagetoServer(1031, game.gi.mCurrentViewedZoneID, dRaiseArmyVO);
// 			// air.Introspector.Console.log("mail: ", mail);
// 			// air.Introspector.Console.log("mail.type: "+ mail.type);
// 			// air.Introspector.Console.log("mail.id " + mail.id);
// 			// air.Introspector.Console.log("mail.attachments " + mail.attachments);

// 			var id = parseInt(mail.id, 10);
// 			// air.Introspector.Console.log("id: "+ id);
// 			var maildInteger = new dIntegerVODef(id);
// 			air.Introspector.Console.log("maildInteger: ", maildInteger);
// 			// air.Introspector.Console.log("marking as read mail.id: "+ mail.id + " " + mail.subject);
// 			// game.gi.mClientMessages.SendMessagetoServer(1177,game.gi.mCurrentViewedZoneID,maildInteger);
// 			air.Introspector.Console.log("command sent for mail.id: "+ mail.id);
// 		}
// 	}

// 	setTimeout(function() {processBattleReports()}, 7000);
// 	processBattleReports()
// }

function processBattleReports(event){
    try {
		var global = swmmo.getDefinitionByName("global")
        var currentMails = globalFlash.gui.mMailWindow.mailTypeHeader.owner.dataProvider;
        var battleReports = [];
        for(var i = 0; i < currentMails.length; i++){
            var mail = currentMails[i];
            // BATTLE_REPORT_INTERCEPTED = 29;
            // BATTLE_REPORT = 8;
            if (mail.type == 8 || mail.type == 29) {
                if(mail.attachments && mail.attachments.battleScript){
                    // air.Introspector.Console.log("mail", mail);
                    // air.Introspector.Console.log("global.skills_vector", global.skills_vector);
                    battleReports.push(mail.attachments.battleScript);
                }
            }
        };

        var parser = new DOMParser();
        var allCasualties = {};
		var lostGenerals = {};
        var battleId = 1;
        var perBattleCasualties = [];
        var battleDetails = {};
        battleReports.forEach(function (battleScript) {
            var battleCasualties = {};
            var xmlDoc = parser.parseFromString(battleScript,"text/xml");
            // air.Introspector.Console.log("battleScript xmlDoc", xmlDoc);
            var jsonResult = elementToJSON(xmlDoc);

            jsonResult = jsonResult.Battle[0];
            jsonResult.ArmyDescription = jsonResult.ArmyDescription[0];
            jsonResult.CombatModifiers = jsonResult.CombatModifiers[0];
            jsonResult.Skills = jsonResult.Skills[0];

            var armyCopy = JSON.parse(JSON.stringify(jsonResult.ArmyDescription.Army));
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
            jsonResult.Round.forEach(function(round){
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
                            }
                        });
                    }
                });
            });

            perBattleCasualties.push(battleCasualties);
            // air.Introspector.Console.log("jsonResult.Skills", jsonResult.Skills);
            battleDetails.usedSkills = jsonResult.Skills;

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

function luc_getSaveButton(){
    return '<button class="btn btn-success savecaualtiesbtn"">Save</button>';
}

function luc_SaveData(){
    air.Introspector.Console.log("luc_SaveData");
    var data = {};
	data['lastRecordedCasualties'] = battlesFromMail.allCasualties;
	settings.store(data);
    alert('Data saved');
}
