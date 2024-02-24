////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////Created by PiTi/////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////Projects:////////////////////////////////////////////////////////////////
//////////////////https://a-calc.de | Taming calculator and companion app for Ark: Survivial Evolved/Ascended///////////////////
//////////////////https://crypto-webminer.com | Crypto Webminer - Mining in your Browser with Webmining technology//////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////Ihr mögt meine Arbeit und wollt mich Supporten? https://www.paypal.com/paypalme/ACalcDevelopment///////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////Version 10.12.2023 V1 - kompatibel mit TestBuild///////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Funktionen:///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Direktes ausführen von Vorlagen Verknüpfungen mit überspringen von Fenstern///////////////////////////////////////////////////
//direktsenden.txt für beladen und versenden ins AT mit einer Vorlage///////////////////////////////////////////////////////////
//Semi Automatisierung für ATs, Vorlage anklicken, rest wird automatisch bis zur letzten Quest erledigt/////////////////////////
//volle AT Automatik, von Heimatinsel bis zum AT durchspielen mit Rundenanzahl//////////////////////////////////////////////////
//Entdecker/Geologen/Buffs/Queste Überwachung///////////////////////////////////////////////////////////////////////////////////
//Söldner per Vorlage zuweisen//////////////////////////////////////////////////////////////////////////////////////////////////
//Genes per Vorlagen nach Hause senden//////////////////////////////////////////////////////////////////////////////////////////
//Semi Automatisierung per Vorlage stoppen//////////////////////////////////////////////////////////////////////////////////////
//Einstellungen der Features per UI/////////////////////////////////////////////////////////////////////////////////////////////
//Gebäude Ausbau per Vorlagen/manuell oder Überwachung - In Zusammenarbeit mit Test_Siedler#3694////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//WICHTIG! Gilt für alle Funktionen! Es darf keine Partition  in Partiton in Partition gebaut werden ---> immer Hauptpartition und dann müssen die Vorlagen folgen



//--------------------------------------------------------Skript Interne Variablen/Methoden - Keine Änderungen nötig----------------------------------------------------------------------------
var user_fast_shortcut_settings = {
	ATAuswahl: '1001NightsWoodcutter',
	ATAuswahlID: '1',
	WarteZeitZwischenVorlagenSelector: '5000',
	WarteZeitAusSternVersetzenSelector: '10000',
	WarteZeitZwischenATNeustartSelector: '60000',
	WarteZeitZwischenATAutoStartSelector: '40000',
	WarteZeitZwischenInselswitchSelector: '90000',
	WarteZeitZwischenAutomatikstartenimATSelector: '40000',
	WarteZeitZwischenQuestÜberwachungSelector: '20000',
	WarteZeitZwischenZurHeimatinselATEndeSelector: '15000',
	RundenanzahlSelector: '1',
	Kampfgeraeusche: false,
	buffNameHufeisenSelector: 'GeneralSpeedBuff_Bronze',
	Hufeisenbuffen: false,
	debugAT: false,
	debugPlayground: false,
	debugPlaygroundQuestNamen: false,
	VorlagenUeberwachungEnt: false,
	VorlagenUeberwachungGeo: false,
	VorlagenUeberwachungBuffs: false,
	VorlagenUeberwachungAusbau: false,
	VorlagenUeberwachungQuests: false,
	WarteZeitZwischenVorlagenÜberwachungSelector: '10',
	AuswahlUeberwachungVorlagenIndexSelectorID: '1',
	AuswahlUeberwachungVorlagenIndexSelectorID2: '1',
	AuswahlUeberwachungVorlagenIndexSelectorID3: '1',
	AuswahlUeberwachungVorlagenIndexSelectorID4: '1',
	AuswahlUeberwachungVorlagenIndexInPartitionSelectorID: '1',
	AuswahlUeberwachungVorlagenIndexInPartitionSelectorID2: '1',
	AuswahlUeberwachungVorlagenIndexInPartitionSelectorID3: '1',
	AuswahlUeberwachungVorlagenIndexInPartitionSelectorID4: '1',
	AusbauStufeSelector: '4',
	SollBuffenImATSoeldner: true,
	buffNameSöldnerSelector: 'Recruit'
};
$.extend(user_fast_shortcut_settings, settings.read(null, "FastShortcut"));
var onlyoncesetting = true;

var AuswahlAT = user_fast_shortcut_settings.ATAuswahlID; //Index Verknüpfungsmenü vom AT --> Index fängt bei 0 an, nachdem ersten Separator, wichtig für Auto AT Start Funktion
var AuswahlDirektSenden = AuswahlAT; //Index vom direktsenden --> Index fängt bei 0 an, nachdem ersten Separator, wichtig für Auto AT Start Funktion --> direktsenden kann nun in AT Partition liegen, muss aber nicht :)
//AT Starten
var SollATStarten = true; //Soll AT gestartet werden auf der Heimatinsel bei Auto AT Start Funktion
var buffNameVomAT = user_fast_shortcut_settings.ATAuswahl; //Welches AT gestartet werden soll --> siehe unten Namen von ATs
//Wartezeiten
var WarteZeitZwischenVorlagen = user_fast_shortcut_settings.WarteZeitZwischenVorlagenSelector; //In Millisekunden - Sollte nicht weniger als 5 Sekunden sein wegen ServerLag --> 10000 Millisekunden bei langen Verzögerungen, wenn z.B. die nächsten Angriffe viel zu früh starten obwohl Genes nicht bereit
var WarteZeitAusSternVersetzen = user_fast_shortcut_settings.WarteZeitAusSternVersetzenSelector; //In Millisekunden --> 35000 Millisekunden bei langen Verzögerungen/Serverlags z.B. EE/Bulle/Priester usw. beim Holzi reichen 10000 Millisekunden je nach Server
var WarteZeitZwischenATNeustart = user_fast_shortcut_settings.WarteZeitZwischenATNeustartSelector; //In Millisekunden - Sollte nicht weniger als 60000 Millisekunden sein wegen ServerLag. Startet die erneute Überwachung der Heimatinsel Generäle
var WarteZeitZwischenATAutoStart = user_fast_shortcut_settings.WarteZeitZwischenATAutoStartSelector; //In Millisekunden - Sollte nicht weniger als 40000 Millisekunden sein wegen ServerLag. Zeit zwischen AT starten und der Überwachung Vorlage direktsenden einlesen/auswerten
var WarteZeitZwischenInselswitch = user_fast_shortcut_settings.WarteZeitZwischenInselswitchSelector; //In Millisekunden - Sollte nicht weniger als 90000 Millisekunden sein wegen ServerLag und Laufwege der Generäle. Zeit zwischen Insel switches --> Alle Generäle sollte schon auf der Reise sein und nicht mehr auf der Heimatinsel zusehen sein
var WarteZeitZwischenAutomatikstartenimAT = user_fast_shortcut_settings.WarteZeitZwischenAutomatikstartenimATSelector; //In Millisekunden sollte nicht weniger als 40000 Millisekunden sein wegen ServerLag / Ladebildschirm zur Insel muss abgeschlossen sein, bevor es weiter geht mit der AT Automatisierung
var WarteZeitZwischenQuestÜberwachung = user_fast_shortcut_settings.WarteZeitZwischenQuestÜberwachungSelector; //In Millisekunden - Alle x Millisekunden überprüft er, ob eine Quest fertig ist und abgeschlossen werden kann --> Bei Semi Auto wird die letzte Quest nicht automatisch beendet
var WarteZeitZwischenZurHeimatinselATEnde = user_fast_shortcut_settings.WarteZeitZwischenZurHeimatinselATEndeSelector; //In Millisekunden - Bei Problemen mit AT Fenster (Am Ende AT) Zeit erhöhen auf mindestens 25000
//Im AT Buffen
var SollBuffenImAT = user_fast_shortcut_settings.Hufeisenbuffen; //Soll Hufeisen gebufft werden bei Auto AT Start Funktion
var buffNameHufeisen = user_fast_shortcut_settings.buffNameHufeisenSelector; //Welches Hufeisen gebufft werden soll --> siehe unten Namen von Hufeisen
var SollBuffenImATSoeldner = user_fast_shortcut_settings.SollBuffenImATSoeldner; //Sollen Söldner via Vorlage zugewiesen werden --> Hinweise weiter oben beachten
var buffNameSöldner = user_fast_shortcut_settings.buffNameSöldnerSelector; //Welche Söldner zugewiesen werden sollen --> siehe unten Namen von Söldner
//Automatik steuern
var ATSchleife = true; //Soll das AT neugestartet werden in einer Schleife bei Auto AT Start Funktion --> Rundenanzahl beachten
var Rundenanzahl = user_fast_shortcut_settings.RundenanzahlSelector; //Wieviele AT Runden soll er bei Auto AT Start Funktion abspielen bevor er automatisch stoppt
var Kampfgeraeusche = user_fast_shortcut_settings.Kampfgeraeusche; //Kampfgeräusche beim AT Start durch Auto AT Start Funktion (direktsenden wird ausgeführt) und Ende erreicht eines ATs
//Entdecker Überwachung
var VorlagenUeberwachungEnt = user_fast_shortcut_settings.VorlagenUeberwachungEnt; //Entdecker/Geo/Sammelquest/Buff/Ausbau Vorlagen Überwachung ein/aus durch true/false setzen im Skript und Semi Automatisierung muss aktiv sein
var VorlagenUeberwachungGeo = user_fast_shortcut_settings.VorlagenUeberwachungGeo; //Entdecker/Geo/Sammelquest/Buff/Ausbau Vorlagen Überwachung ein/aus durch true/false setzen im Skript und Semi Automatisierung muss aktiv sein
var VorlagenUeberwachungBuffs = user_fast_shortcut_settings.VorlagenUeberwachungBuffs; //Entdecker/Geo/Sammelquest/Buff/Ausbau Vorlagen Überwachung ein/aus durch true/false setzen im Skript und Semi Automatisierung muss aktiv sein
var VorlagenUeberwachungAusbau = user_fast_shortcut_settings.VorlagenUeberwachungAusbau; //Entdecker/Geo/Sammelquest/Buff/Ausbau Vorlagen Überwachung ein/aus durch true/false setzen im Skript und Semi Automatisierung muss aktiv sein
var AuswahlUeberwachungVorlagenIndexEnt = user_fast_shortcut_settings.AuswahlUeberwachungVorlagenIndexSelectorID; //Index Verknüpfungsmenü von Vorlagenordner (Partition) --> Index fängt bei 0 an, nachdem ersten Separator, wichtig für Vorlagen Überwachung Funktion
var AuswahlUeberwachungVorlagenIndexInPartitionEnt = [user_fast_shortcut_settings.AuswahlUeberwachungVorlagenIndexInPartitionSelectorID]; //Es können mehrere Index angegeben werden "[0,1,2]", Standard ist der erste Eintrag den er findet, daher 0, Index im AuswahlUeberwachungVorlagenIndex (Ordner/Partition) --> Index fängt bei 0 an
var AuswahlUeberwachungVorlagenIndexGeo = user_fast_shortcut_settings.AuswahlUeberwachungVorlagenIndexSelectorID2; //Index Verknüpfungsmenü von Vorlagenordner (Partition) --> Index fängt bei 0 an, nachdem ersten Separator, wichtig für Vorlagen Überwachung Funktion
var AuswahlUeberwachungVorlagenIndexInPartitionGeo = [user_fast_shortcut_settings.AuswahlUeberwachungVorlagenIndexInPartitionSelectorID2]; //Es können mehrere Index angegeben werden "[0,1,2]", Standard ist der erste Eintrag den er findet, daher 0, Index im AuswahlUeberwachungVorlagenIndex (Ordner/Partition) --> Index fängt bei 0 an
var AuswahlUeberwachungVorlagenIndexBuffs = user_fast_shortcut_settings.AuswahlUeberwachungVorlagenIndexSelectorID3; //Index Verknüpfungsmenü von Vorlagenordner (Partition) --> Index fängt bei 0 an, nachdem ersten Separator, wichtig für Vorlagen Überwachung Funktion
var AuswahlUeberwachungVorlagenIndexInPartitionBuffs = [user_fast_shortcut_settings.AuswahlUeberwachungVorlagenIndexInPartitionSelectorID3]; //Es können mehrere Index angegeben werden "[0,1,2]", Standard ist der erste Eintrag den er findet, daher 0, Index im AuswahlUeberwachungVorlagenIndex (Ordner/Partition) --> Index fängt bei 0 an
var AuswahlUeberwachungVorlagenIndexAusbau = user_fast_shortcut_settings.AuswahlUeberwachungVorlagenIndexSelectorID4; //Index Verknüpfungsmenü von Vorlagenordner (Partition) --> Index fängt bei 0 an, nachdem ersten Separator, wichtig für Vorlagen Überwachung Funktion
var AuswahlUeberwachungVorlagenIndexInPartitionAusbau = [user_fast_shortcut_settings.AuswahlUeberwachungVorlagenIndexInPartitionSelectorID4]; //Es können mehrere Index angegeben werden "[0,1,2]", Standard ist der erste Eintrag den er findet, daher 0, Index im AuswahlUeberwachungVorlagenIndex (Ordner/Partition) --> Index fängt bei 0 an
var AusbauStufe = user_fast_shortcut_settings.AusbauStufeSelector; //Ausbaustufe der Gebäude
var WarteZeitZwischenVorlagenÜberwachung = user_fast_shortcut_settings.WarteZeitZwischenVorlagenÜberwachungSelector; //In Minuten - Alle x Minuten überprüft er, ob ob Entdecker Vorlage geladen werden kann
var VorlagenUeberwachungQuests = user_fast_shortcut_settings.VorlagenUeberwachungQuests;
//Soll AutoAT Start Menü überhaupt angezeigt werden
var MyStartMenu = true; //AutoStartAT Menü sichtbar
var debugAT = user_fast_shortcut_settings.debugAT; //Fehleranalyse Debug Window
var debugPlayground = user_fast_shortcut_settings.debugPlayground; //Fehleranalyse Debug Window und AT/Buff Namen selber rausfinden
var debugPlaygroundQuestNamen = user_fast_shortcut_settings.debugPlaygroundQuestNamen; //Fehleranalyse Queste Debug Window
//Nur wichtig für gleichzeitig mehrere direktsenden im gleichen Index des AuswahlDirektSenden
var NurEineDirektSenden = true;//user_fast_shortcut_settings.direktsendenbeachten; //Auf true --> Es wird nur die erste direktsenden Vorlage beachtet im gewählten Index var AuswahlDirektSenden = 0; bedeutet erste Vorlage die er findet
var MeineGenAnzahlOhneQM = 4; //Braucht nicht geändert werden --> ist für meine mehreren direktsenden Vorlagen wichtig und wenn NurEineDirektSenden auf false steht
var MeineGenAnzahlMitQM = 6; //Braucht nicht geändert werden --> ist für meine mehreren direktsenden Vorlagen wichtig und wenn NurEineDirektSenden auf false steht
var shortcutsAutoFuncBool = false;
var retry = true;
var result = false;
var resultAT1 = false;
var resultAT2 = false;
var automatisierung = false;
var WoBinIch = 0;
var WoBinIchATneustarten = 0;
var KannWeiterGehen = false;
var KannWeiterGehenATneustarten = false;
var ShortcutPathArray = [];
var ShortcutPathArrayDirektSenden = [];
var meinIntervall;
var meinIntervallATneustarten;
var myQuestIntervall;
var myQuestIntervallSemi;
var MaxGenes = 0;
var MaxGenesATneustarten = 0;
var AbNachHause = false;
var GenesBeladenReks = false;
var VomSternGen = false;
var LetzteVorlage = false;
var RundenanzahlCounter = 0;
var GenesAuslesenausVorlage = [];
var GetIndexAT = 0;
var GetIndexATAuslesen = false;
var myIntervall;
var MyStart = false;
var ATweitermachen = false;
var PathGensAuslesen = false;
var ATnochAktiv = false;
var BuffnochAktiv = false;
var GetQuestSemiStarten = false;
var PathATAuslesen = false;
var VorlagenUeberwachungInternEnt = false;
var VorlagenUeberwachungInternGeo = false;
var VorlagenUeberwachungInternBuffs = false;
var VorlagenUeberwachungInternAusbau = false;
var ShortcutPathArrayVorlagenEnt = [];
var ShortcutPathArrayVorlagenGeo = [];
var ShortcutPathArrayVorlagenBuffs = [];
var ShortcutPathArrayVorlagenAusbau = [];
var myEntdIntervall;
var WarteZeitZwischenVorlagenÜberwachungIntern = 60000; 
var WarteZeitZwischenVorlagenÜberwachungFinal = 0;
var buffsAvailable2 = {};
var Hufeisendelay = false;
var PiTi = false;
var AutoBuffVorlage = false; //Braucht nicht geändert werden --> ist für meine Automatisierung

var _searchArchitecturesViewerModalInitialized = false;
const UNDEFINED_TEXT = '[undefined text]',
    MAXLEVEL = 7,
	MAXLEVEL2 = 7,
    ALLLEVELS = 1,
    DEBUG = false;
var searchString = '',
    searchLevel = 1,
    destroyableOnlyShow = false,
    improvableOnlyShow = true;
var buildingTypeInfoPanelMap = {
    'decoration': 'cDecorationInfoPanel',
    'minimal': 'cMinimalInfoPanel',
    'enemy': 'cEnemyBuildingInfoPanel',
};

var buildingArray = [];
var buildingArraySave = [];
var buildingArrayLoad = [];
var maxUpgradeLevel = AusbauStufe; // Max Ausbauhöhe
var maxUpgradeLevelUI = AusbauStufe; // Max Ausbauhöhe UI
var expertFunction = true; // Export Funktion

var user_building_extension_settings = {
	maxUpgradeLevelSetting: 4
};

$.extend(user_building_extension_settings, settings.read(null, 'UpgradeBuilding'));
maxUpgradeLevelUI = user_building_extension_settings.maxUpgradeLevelSetting;

var shortcutsTypes2 = { '[b]': 'a ', '[a]': 'l ', '[m]': 'm ', '[g]': 'g ', '[e]': 'e ', '[u]': 'b ', '[p]': 'p ', '[d]': 'd ', '[f]': 'f ', '[s]': 's ', '[x]': 'x '};
var shortcutsTypesLang = {
	'a ': loca.GetText("ACL", "PvPAttacker"),
	'l ': loca.GetText("LAB","Army"),
	'm ': loca.GetText("LAB", "Move"),
	'g ': loca.GetText("SPE", "Geologist"),
	'e ': loca.GetText("SPE", "Explorer"),
	'b ': loca.GetText("LAB", "Buffs"),
	'p ': loca.GetText("LAB", "Production"),
	'd ': loca.GetText("LAB", "Details"),
	'f ': loca.GetText("LAB","UnloadUnits"),
	's ': getText('shortcutsToStar'),
	'x ': loca.GetText("ACL","Upgrades")
};

var moduleToName = {
	'battle': { name: loca.GetText("ACL", "ExcelsiorLostCityBeforeRitual"), type: '[m]' },
	'expl': { name: loca.GetText("SPE", "Explorer"), type: '[e]' },
	'geo': { name: loca.GetText("SPE", "Geologist"), type: '[g]' },
	'buff': { name: loca.GetText("LAB", "Buffs"), type: '[u]' },
	'bui': { name: loca.GetText("LAB", "Production"), type: '[p]' },
	'building': { name: loca.GetText("ACL", "Upgrades"), type: '[x]' }
};

function shortcutsStripType(value)
{
	var possibleType = value.slice(-3);
	if(shortcutsTypes2[possibleType] == null)
		return [value, '^ '];
	return [value.slice(0, -3), shortcutsTypes2[possibleType]]; 
}

clearAll();
function clearAll() {
  for (var i = setTimeout(function() {}, 0); i > 0; i--) {
    clearInterval(i);
    clearTimeout(i);
  }
}

setInterval(function() { menu.nativeMenu.getItemByName("memusage").label = 'Mem: ' + humanMemorySize(air.System.privateMemory, 1); }, 5000);

var shortcutGetPathArray = [];
$.extend(shortcutGetPathArray, readSettings(null, 'shortcuts'));


shortcutsAutoFuncMakeMenu();
VorlagenUeberwachungAutoStart();

function shortcutsAutoFuncMakeMenu()
{
	var m = [
		{ label: loca.GetText("LAB","ToggleOptionsPanel"), mnemonicIndex: 0, onSelect: shortcutsAddHandler2 },
		{ label: loca.GetText("LAB","UnloadUnits"), mnemonicIndex: 0, onSelect: shortcutsFreeAllUnits },
		{ label: getText('shortcutsToStar'), mnemonicIndex: 0, onSelect: shortcutsReturnAll },
		{ label: loca.GetText("LAB","Retreat"), mnemonicIndex: 0, onSelect: shortcutsRetreatAll },
		{ label: loca.GetText("LAB", "WarehouseTab7"), mnemonicIndex: 0, onSelect: shortcutsPickupAll },
		{ label: 'SemiAT | AutoAT | Tools - Einstellungen', mnemonicIndex: 0, onSelect: FastShortcutSettingsHandler },
		{ label: 'Gebäude Ausbau via Vorlagen', mnemonicIndex: 0, onSelect: SearchArchitecturesHandler },
		{ label: 'Verknüpfung direkt ausführen - aktivieren', name: 'Verknüpfung direkt ausführen ist AN Short', mnemonicIndex: 0, onSelect: shortcutsAutoFunc },
		{ type: 'separator' }
	];
	shortcutsGenMenuRecursive(shortcutsSettings, m);
	menu.nativeMenu.getItemByName("Shortcuts").submenu = air.ui.Menu.createFromJSON(m);
}

function shortcutsGenMenuRecursiveNEW(item, m)
{
	item.forEach(function(data, idx){
		idx = "|| " +idx;
		if(/--s[0-9]+p--/.test(data)) {
			m.push({ type: 'separator' });
			return;
		}
		if(Array.isArray(data)) {
			switch(shortcutsStripType(data[0])[1]) {
				case 'd ':
					m.push({ label: "{0}. {1} {2}".format(idx, data[1], idx), enabled: false });
				break;
				case 'f ':
					m.push({ label: "{0}. [{1}] {2} {3}".format(idx, loca.GetText("LAB", "Commands"), loca.GetText("LAB","UnloadUnits"), idx), mnemonicIndex: 0, onSelect: shortcutsMenuSelectedHandler });
				break;
				case 's ':
					m.push({ label: "{0}. [{1}] {2} {3}".format(idx, loca.GetText("LAB", "Commands"), getText('shortcutsToStar'), idx), mnemonicIndex: 0, onSelect: shortcutsMenuSelectedHandler });
				break;
				default:
					var label = "{0}. [{1}] {2} {3}".format(
						idx,
						shortcutsTypesLang[shortcutsStripType(data[0])[1]], data[1] == null ? shortcutsStripType(data[0])[0].split("\\").pop().replace(/_/g, "[UNDERSCORE]") : data[1].replace(/_/g, "[UNDERSCORE]"),
						idx
					);
					m.push({ label: label, mnemonicIndex: 0, name: data[0], onSelect: shortcutsMenuSelectedHandler });
			}
			return;
		}
		var s = { label: data.name.replace(/_/g, "[UNDERSCORE]"), mnemonicIndex: 0, items: [] };
		data.items.forEach(function(i, index) {
			if(typeof i == 'object' && !Array.isArray(i)) {
				return shortcutsGenMenuRecursive([i], s.items);
			}
			if(/--s[0-9]+p--/.test(i)) {
				s.items.push({ type: 'separator' });
			} else {
				switch(shortcutsStripType(i[0])[1]) {
					case 'd ':
						s.items.push({ label: "{0}. {1} {2}".format(index, i[1], idx), enabled: false });
					break;
					case 'f ':
						s.items.push({ label: "{0}. [{1}] {2} {3}".format(index, loca.GetText("LAB", "Commands"), loca.GetText("LAB","UnloadUnits"), idx), mnemonicIndex: 0, onSelect: shortcutsMenuSelectedHandler });
					break;
					case 's ':
						s.items.push({ label: "{0}. [{1}] {2} {3}".format(index, loca.GetText("LAB", "Commands"), getText('shortcutsToStar'), idx), mnemonicIndex: 0, onSelect: shortcutsMenuSelectedHandler });
					break;
					default:
						var label = "{0}. [{1}] {2} {3}".format(
							index,
							shortcutsTypesLang[shortcutsStripType(i[0])[1]], i[1] == null ? shortcutsStripType(i[0])[0].split("\\").pop().replace(/_/g, "[UNDERSCORE]") : i[1].replace(/_/g, "[UNDERSCORE]"),
							idx
						);
						s.items.push({ label: label, mnemonicIndex: 0, name: i[0], onSelect: shortcutsMenuSelectedHandler });
				}
			}
		});
		m.push(s);
	});
}

function shortcutsAutoFunc(event)
{
	if(event.target.name == 'Verknüpfung direkt ausführen - aktivieren' || event.target.name == 'Verknüpfung direkt ausführen ist AN Short')
	{
		shortcutsAutoFuncBool = true;
		game.showAlert('Verknüpfung direkt ausführen wurde aktiviert');
		var m = [
			{ label: loca.GetText("LAB","ToggleOptionsPanel"), mnemonicIndex: 0, onSelect: shortcutsAddHandler2 },
			{ label: loca.GetText("LAB","UnloadUnits"), mnemonicIndex: 0, onSelect: shortcutsFreeAllUnits },
			{ label: getText('shortcutsToStar'), mnemonicIndex: 0, onSelect: shortcutsReturnAll },
			{ label: loca.GetText("LAB","Retreat"), mnemonicIndex: 0, onSelect: shortcutsRetreatAll },
			{ label: loca.GetText("LAB", "WarehouseTab7"), mnemonicIndex: 0, onSelect: shortcutsPickupAll },
			{ label: 'SemiAT | AutoAT | Tools - Einstellungen', mnemonicIndex: 0, onSelect: FastShortcutSettingsHandler },
			{ label: 'Gebäude Ausbau via Vorlagen', mnemonicIndex: 0, onSelect: SearchArchitecturesHandler },
			{ label: 'Verknüpfung direkt ausführen - deaktivieren', name: 'Verknüpfung direkt ausführen ist AUS Short', mnemonicIndex: 0, onSelect: shortcutsAutoFunc },
			{ label: 'Semi Automatisierung - aktivieren', name: 'Semi Automatisierung ist AUS Short', mnemonicIndex: 0, onSelect: shortcutsAutoFunc },
			{ type: 'separator' }
			];
		
		shortcutsGenMenuRecursiveNEW(shortcutsSettings, m);
		menu.nativeMenu.getItemByName("Shortcuts").submenu = air.ui.Menu.createFromJSON(m);
	}
	else if(event.target.name == 'Verknüpfung direkt ausführen - deaktivieren' || event.target.name == 'Verknüpfung direkt ausführen ist AUS Short')
	{
		if(automatisierung)
		{
			game.showAlert('Semi Automatisierung wurde deaktiviert');
		}
		if(MyStart)
		{
			game.showAlert('Auto AT Start wurde deaktiviert');
		}
		
		shortcutsAutoFuncBool = false;
		clearInterval(meinIntervall);
		clearInterval(myIntervall);
		clearInterval(meinIntervallATneustarten);
		clearInterval(myQuestIntervall);
		clearInterval(myQuestIntervallSemi);
		ATweitermachen = false;
		automatisierung = false;
		MyStart = false;
		KannWeiterGehen = false;
		GetQuestSemiStarten = false;
		PathATAuslesen = false;
		game.showAlert('Verknüpfung direkt ausführen wurde deaktiviert');

		var m = [
		{ label: loca.GetText("LAB","ToggleOptionsPanel"), mnemonicIndex: 0, onSelect: shortcutsAddHandler2 },
		{ label: loca.GetText("LAB","UnloadUnits"), mnemonicIndex: 0, onSelect: shortcutsFreeAllUnits },
		{ label: getText('shortcutsToStar'), mnemonicIndex: 0, onSelect: shortcutsReturnAll },
		{ label: loca.GetText("LAB","Retreat"), mnemonicIndex: 0, onSelect: shortcutsRetreatAll },
		{ label: loca.GetText("LAB", "WarehouseTab7"), mnemonicIndex: 0, onSelect: shortcutsPickupAll },
		{ label: 'SemiAT | AutoAT | Tools - Einstellungen', mnemonicIndex: 0, onSelect: FastShortcutSettingsHandler },
		{ label: 'Gebäude Ausbau via Vorlagen', mnemonicIndex: 0, onSelect: SearchArchitecturesHandler },
		{ label: 'Verknüpfung direkt ausführen - aktivieren', name: 'Verknüpfung direkt ausführen ist AN Short', mnemonicIndex: 0, onSelect: shortcutsAutoFunc },
		{ type: 'separator' }
		];
		shortcutsGenMenuRecursive(shortcutsSettings, m);
		menu.nativeMenu.getItemByName("Shortcuts").submenu = air.ui.Menu.createFromJSON(m);
	}
	if(event.target.name == 'Semi Automatisierung - aktivieren' && shortcutsAutoFuncBool == true || event.target.name == 'Semi Automatisierung ist AUS Short' && shortcutsAutoFuncBool == true)
	{
		game.showAlert('Semi Automatisierung wurde aktiviert');
		automatisierung = true;
		GetQuestSemiStarten = true;
		
		if(!MyStartMenu)
		{
			var m = [
			{ label: loca.GetText("LAB","ToggleOptionsPanel"), mnemonicIndex: 0, onSelect: shortcutsAddHandler2 },
			{ label: loca.GetText("LAB","UnloadUnits"), mnemonicIndex: 0, onSelect: shortcutsFreeAllUnits },
			{ label: getText('shortcutsToStar'), mnemonicIndex: 0, onSelect: shortcutsReturnAll },
			{ label: loca.GetText("LAB","Retreat"), mnemonicIndex: 0, onSelect: shortcutsRetreatAll },
			{ label: loca.GetText("LAB", "WarehouseTab7"), mnemonicIndex: 0, onSelect: shortcutsPickupAll },
			{ label: 'SemiAT | AutoAT | Tools - Einstellungen', mnemonicIndex: 0, onSelect: FastShortcutSettingsHandler },
			{ label: 'Gebäude Ausbau via Vorlagen', mnemonicIndex: 0, onSelect: SearchArchitecturesHandler },
			{ label: 'Verknüpfung direkt ausführen - deaktivieren', name: 'Verknüpfung direkt ausführen ist AUS Short', mnemonicIndex: 0, onSelect: shortcutsAutoFunc },
			{ label: 'Semi Automatisierung - deaktivieren', name: 'Semi Automatisierung ist AN Short', mnemonicIndex: 0, onSelect: shortcutsAutoFunc },
			{ type: 'separator' }
			];
			shortcutsGenMenuRecursiveNEW(shortcutsSettings, m);
			menu.nativeMenu.getItemByName("Shortcuts").submenu = air.ui.Menu.createFromJSON(m);
		}
		else
		{
			var m = [
			{ label: loca.GetText("LAB","ToggleOptionsPanel"), mnemonicIndex: 0, onSelect: shortcutsAddHandler2 },
			{ label: loca.GetText("LAB","UnloadUnits"), mnemonicIndex: 0, onSelect: shortcutsFreeAllUnits },
			{ label: getText('shortcutsToStar'), mnemonicIndex: 0, onSelect: shortcutsReturnAll },
			{ label: loca.GetText("LAB","Retreat"), mnemonicIndex: 0, onSelect: shortcutsRetreatAll },
			{ label: loca.GetText("LAB", "WarehouseTab7"), mnemonicIndex: 0, onSelect: shortcutsPickupAll },
			{ label: 'SemiAT | AutoAT | Tools - Einstellungen', mnemonicIndex: 0, onSelect: FastShortcutSettingsHandler },
			{ label: 'Gebäude Ausbau via Vorlagen', mnemonicIndex: 0, onSelect: SearchArchitecturesHandler },
			{ label: 'Verknüpfung direkt ausführen - deaktivieren', name: 'Verknüpfung direkt ausführen ist AUS Short', mnemonicIndex: 0, onSelect: shortcutsAutoFunc },
			{ label: 'Semi Automatisierung - deaktivieren', name: 'Semi Automatisierung ist AN Short', mnemonicIndex: 0, onSelect: shortcutsAutoFunc },
			{ label: 'Auto AT Start - aktivieren', name: 'Auto AT Start ist AUS Short', mnemonicIndex: 0, onSelect: shortcutsAutoFunc },
			{ type: 'separator' }
			];
			shortcutsGenMenuRecursiveNEW(shortcutsSettings, m);
			menu.nativeMenu.getItemByName("Shortcuts").submenu = air.ui.Menu.createFromJSON(m);
		}	
	}
	else if(event.target.name == 'Semi Automatisierung - deaktivieren' && shortcutsAutoFuncBool == true || event.target.name == 'Semi Automatisierung ist AN Short' && shortcutsAutoFuncBool == true)
	{
		if(automatisierung)
		{
			game.showAlert('Semi Automatisierung wurde deaktiviert');
		}
		if(MyStart)
		{
			game.showAlert('Auto AT Start wurde deaktiviert');
		}
		
		clearInterval(meinIntervall);
		clearInterval(myIntervall);
		clearInterval(meinIntervallATneustarten);
		clearInterval(myQuestIntervall);
		clearInterval(myQuestIntervallSemi);
		ATweitermachen = false;
		automatisierung = false;
		KannWeiterGehen = false;
		MyStart = false;
		GetQuestSemiStarten = false;
		PathATAuslesen = false;

		var m = [
		{ label: loca.GetText("LAB","ToggleOptionsPanel"), mnemonicIndex: 0, onSelect: shortcutsAddHandler2 },
		{ label: loca.GetText("LAB","UnloadUnits"), mnemonicIndex: 0, onSelect: shortcutsFreeAllUnits },
		{ label: getText('shortcutsToStar'), mnemonicIndex: 0, onSelect: shortcutsReturnAll },
		{ label: loca.GetText("LAB","Retreat"), mnemonicIndex: 0, onSelect: shortcutsRetreatAll },
		{ label: loca.GetText("LAB", "WarehouseTab7"), mnemonicIndex: 0, onSelect: shortcutsPickupAll },
		{ label: 'SemiAT | AutoAT | Tools - Einstellungen', mnemonicIndex: 0, onSelect: FastShortcutSettingsHandler },
		{ label: 'Gebäude Ausbau via Vorlagen', mnemonicIndex: 0, onSelect: SearchArchitecturesHandler },
		{ label: 'Verknüpfung direkt ausführen - deaktivieren', name: 'Verknüpfung direkt ausführen ist AUS Short', mnemonicIndex: 0, onSelect: shortcutsAutoFunc },
		{ label: 'Semi Automatisierung - aktivieren', name: 'Semi Automatisierung ist AUS Short', mnemonicIndex: 0, onSelect: shortcutsAutoFunc },
		{ type: 'separator' }
		];
		shortcutsGenMenuRecursiveNEW(shortcutsSettings, m);
		menu.nativeMenu.getItemByName("Shortcuts").submenu = air.ui.Menu.createFromJSON(m);
	}
	else if(event.target.name == 'Semi Automatisierung - aktivieren' && shortcutsAutoFuncBool == false || event.target.name == 'Semi Automatisierung - deaktivieren' && shortcutsAutoFuncBool == false)
	{
		game.showAlert('Semi Automatisierung wurde NICHT de-/aktiviert --> aktiviere zuerst Direktes ausführen');
		clearInterval(meinIntervall);
		clearInterval(myIntervall);
		clearInterval(meinIntervallATneustarten);
		clearInterval(myQuestIntervall);
		clearInterval(myQuestIntervallSemi);
		ATweitermachen = false;
		automatisierung = false;
		KannWeiterGehen = false;
		MyStart = false;
		GetQuestSemiStarten = false;
		PathATAuslesen = false;
	}
	if(MyStartMenu)
	{
		if(event.target.name == 'Auto AT Start - aktivieren' && shortcutsAutoFuncBool == true && automatisierung == true || event.target.name == 'Auto AT Start ist AUS Short' && shortcutsAutoFuncBool == true && automatisierung == true)
		{
			game.showAlert('Auto AT Start wurde aktiviert');
			MyStart = true;
			ATweitermachen = true;
			GetQuestSemiStarten = false;
			RundenanzahlCounter = 0;
			WoBinIchATneustarten = 0;
			PathATAuslesen = true;
			ATStart();
			var m = [
			{ label: loca.GetText("LAB","ToggleOptionsPanel"), mnemonicIndex: 0, onSelect: shortcutsAddHandler2 },
			{ label: loca.GetText("LAB","UnloadUnits"), mnemonicIndex: 0, onSelect: shortcutsFreeAllUnits },
			{ label: getText('shortcutsToStar'), mnemonicIndex: 0, onSelect: shortcutsReturnAll },
			{ label: loca.GetText("LAB","Retreat"), mnemonicIndex: 0, onSelect: shortcutsRetreatAll },
			{ label: loca.GetText("LAB", "WarehouseTab7"), mnemonicIndex: 0, onSelect: shortcutsPickupAll },
			{ label: 'SemiAT | AutoAT | Tools - Einstellungen', mnemonicIndex: 0, onSelect: FastShortcutSettingsHandler },
			{ label: 'Gebäude Ausbau via Vorlagen', mnemonicIndex: 0, onSelect: SearchArchitecturesHandler },
			{ label: 'Verknüpfung direkt ausführen - deaktivieren', name: 'Verknüpfung direkt ausführen ist AUS Short', mnemonicIndex: 0, onSelect: shortcutsAutoFunc },
			{ label: 'Semi Automatisierung - deaktivieren', name: 'Semi Automatisierung ist AN Short', mnemonicIndex: 0, onSelect: shortcutsAutoFunc },
			{ label: 'Auto AT Start - deaktivieren', name: 'Auto AT Start ist AN Short', mnemonicIndex: 0, onSelect: shortcutsAutoFunc },
			{ type: 'separator' }
			];
			shortcutsGenMenuRecursiveNEW(shortcutsSettings, m);
			menu.nativeMenu.getItemByName("Shortcuts").submenu = air.ui.Menu.createFromJSON(m);
				
		}
		else if(event.target.name == 'Auto AT Start - deaktivieren' && shortcutsAutoFuncBool == true && automatisierung == true || event.target.name == 'Auto AT Start ist AN Short' && shortcutsAutoFuncBool == true && automatisierung == true)
		{
			game.showAlert('Auto AT Start wurde deaktiviert');
			clearInterval(myIntervall);
			clearInterval(meinIntervallATneustarten);
			clearInterval(myQuestIntervall);
			ATweitermachen = false;
			MyStart = false;
			GetQuestSemiStarten = false;
			PathATAuslesen = false;
			var m = [
			{ label: loca.GetText("LAB","ToggleOptionsPanel"), mnemonicIndex: 0, onSelect: shortcutsAddHandler2 },
			{ label: loca.GetText("LAB","UnloadUnits"), mnemonicIndex: 0, onSelect: shortcutsFreeAllUnits },
			{ label: getText('shortcutsToStar'), mnemonicIndex: 0, onSelect: shortcutsReturnAll },
			{ label: loca.GetText("LAB","Retreat"), mnemonicIndex: 0, onSelect: shortcutsRetreatAll },
			{ label: loca.GetText("LAB", "WarehouseTab7"), mnemonicIndex: 0, onSelect: shortcutsPickupAll },
			{ label: 'SemiAT | AutoAT | Tools - Einstellungen', mnemonicIndex: 0, onSelect: FastShortcutSettingsHandler },
			{ label: 'Gebäude Ausbau via Vorlagen', mnemonicIndex: 0, onSelect: SearchArchitecturesHandler },
			{ label: 'Verknüpfung direkt ausführen - deaktivieren', name: 'Verknüpfung direkt ausführen ist AUS Short', mnemonicIndex: 0, onSelect: shortcutsAutoFunc },
			{ label: 'Semi Automatisierung - deaktivieren', name: 'Semi Automatisierung ist AN Short', mnemonicIndex: 0, onSelect: shortcutsAutoFunc },
			{ label: 'Auto AT Start - aktivieren', name: 'Auto AT Start ist AUS Short', mnemonicIndex: 0, onSelect: shortcutsAutoFunc },
			{ type: 'separator' }
			];
			shortcutsGenMenuRecursiveNEW(shortcutsSettings, m);
			menu.nativeMenu.getItemByName("Shortcuts").submenu = air.ui.Menu.createFromJSON(m);
		}
		else if(event.target.name == 'Auto AT Start - aktivieren' && shortcutsAutoFuncBool == false || event.target.name == 'Auto AT Start - deaktivieren' && shortcutsAutoFuncBool == false)
		{
			game.showAlert('Auto AT Start wurde NICHT de-/aktiviert --> aktiviere zuerst Direktes ausführen');
			clearInterval(meinIntervall);
			clearInterval(myIntervall);
			clearInterval(meinIntervallATneustarten);
			clearInterval(myQuestIntervall);
			clearInterval(myQuestIntervallSemi);
			ATweitermachen = false;
			automatisierung = false;
			KannWeiterGehen = false;
			MyStart = false;
			GetQuestSemiStarten = false;
			PathATAuslesen = false;
		}
	}
}

function VorlagenUeberwachungAutoStart()
{
	if(VorlagenUeberwachungEnt)
	{
		game.showAlert("Vorlagen Entdecker Überwachung ist aktiviert");
		VorlagenUeberwachungInternEnt = true;
	}
	else if(!VorlagenUeberwachungEnt) 
	{
		game.showAlert("Vorlagen Entdecker Überwachung ist deaktiviert");
		VorlagenUeberwachungInternEnt = false;
	}
		
	if(VorlagenUeberwachungGeo)
	{
		game.showAlert("Vorlagen Geologen Überwachung ist aktiviert");
		VorlagenUeberwachungInternGeo = true;
	}
	else if(!VorlagenUeberwachungGeo) 
	{
		game.showAlert("Vorlagen Geologen Überwachung ist deaktiviert");
		VorlagenUeberwachungInternGeo = false;
	}
	
	if(VorlagenUeberwachungBuffs)
	{
		game.showAlert("Vorlagen Buffs Überwachung ist aktiviert");
		VorlagenUeberwachungInternBuffs = true;
	}
	else if(!VorlagenUeberwachungBuffs) 
	{
		game.showAlert("Vorlagen Buffs Überwachung ist deaktiviert");
		VorlagenUeberwachungInternBuffs = false;
	}
	
	if(VorlagenUeberwachungAusbau)
	{
		game.showAlert("Vorlagen Gebäudeausbau Überwachung ist aktiviert");
		VorlagenUeberwachungInternAusbau = true;
	}
	else if(!VorlagenUeberwachungAusbau) 
	{
		game.showAlert("Vorlagen Gebäudeausbau Überwachung ist deaktiviert");
		VorlagenUeberwachungInternAusbau = false;
	}
	
	setTimeout(function() {
					if(game.gi.isOnHomzone() == true)
					{
						EntdUeberwachung();
					}
				},20000);
}

function EntdUeberwachung()
{
	if(VorlagenUeberwachungInternEnt || VorlagenUeberwachungInternGeo || VorlagenUeberwachungInternBuffs || VorlagenUeberwachungQuests || VorlagenUeberwachungAusbau && game.gi.isOnHomzone() == true)
	{
		shortcutGetpathVorlagenEnt();
		shortcutGetpathVorlagenGeo();
		shortcutGetpathVorlagenBuffs();
		shortcutGetpathVorlagenAusbau();
		WarteZeitZwischenVorlagenÜberwachungFinal = 0;
		WarteZeitZwischenVorlagenÜberwachungFinal = WarteZeitZwischenVorlagenÜberwachung * WarteZeitZwischenVorlagenÜberwachungIntern;
		
		EntdeckerAktion();
		
		myEntdIntervall = setInterval(function() { 
		
			EntdeckerAktion();
		
		},WarteZeitZwischenVorlagenÜberwachungFinal);
	}
	else
	{
		clearInterval(myEntdIntervall);
	}
}

function EntdeckerAktion()
{
			if(game.gi.isOnHomzone() == true)
			{
				game.showAlert("Vorlagen Überwachung Runde - aktiv");
			}
			else
			{
				game.showAlert("Vorlagen Überwachung Runde - pausiert");
			}
		
			if(game.gi.isOnHomzone() == true && VorlagenUeberwachungEnt)
			{
				setTimeout(function() {
					if(game.gi.isOnHomzone() == true)
					{
						AuswahlUeberwachungVorlagenIndexInPartitionEnt.forEach(function(AktuellerIndex) {
						shortcutsMenuSelectedHandlerVorlagenEnt(AktuellerIndex);
						});
						game.showAlert("Vorlagen Entdecker Überwachung Runde - aktiv");
					}
				},5000);
			}
			
			if(game.gi.isOnHomzone() == true && VorlagenUeberwachungGeo)
			{
				setTimeout(function() {
					if(game.gi.isOnHomzone() == true)
					{
						AuswahlUeberwachungVorlagenIndexInPartitionGeo.forEach(function(AktuellerIndex) {
						shortcutsMenuSelectedHandlerVorlagenGeo(AktuellerIndex);
						});
						game.showAlert("Vorlagen Geologen Überwachung Runde - aktiv");
					}		
				},60000);
			}
			
			if(game.gi.isOnHomzone() == true && VorlagenUeberwachungBuffs)
			{
				setTimeout(function() {
					if(game.gi.isOnHomzone() == true)
					{
						AuswahlUeberwachungVorlagenIndexInPartitionBuffs.forEach(function(AktuellerIndex) {
						shortcutsMenuSelectedHandlerVorlagenBuffs(AktuellerIndex);
						});
						game.showAlert("Vorlagen Buffs Überwachung Runde - aktiv");
					}		
				},120000);
			}
			
			if(game.gi.isOnHomzone() == true && VorlagenUeberwachungAusbau)
			{
				setTimeout(function() {
					if(game.gi.isOnHomzone() == true)
					{
						AuswahlUeberwachungVorlagenIndexInPartitionAusbau.forEach(function(AktuellerIndex) {
						shortcutsMenuSelectedHandlerVorlagenAusbau(AktuellerIndex);
						});
						game.showAlert("Vorlagen Gebäudeausbau Überwachung Runde - aktiv");
					}		
				},150000);
			}

			if(game.gi.isOnHomzone() == true && VorlagenUeberwachungQuests)
			{
				$.each(game.gi.mNewQuestManager.GetQuestPool().GetQuest_vector(), function(i, item) {
						if(!item.isFinished() && item.GetQuestDefinition().questName_string.toString() == "CollectAllCollectibles" && item.GetQuestMode().toString() != "12")
						{
							shortcutsPickupAllAT();
						}
						else if(item.isFinished() && item.GetQuestDefinition().questName_string.toString() == "CollectAllCollectibles")
						{
							game.showAlert("Sammel Quest Fertig | " +item); 
							game.gi.mNewQuestManager.RewardOkButtonPressedFromGui(item);
							globalFlash.gui.mQuestBook.Show();
							setTimeout(function() {globalFlash.gui.mQuestBook.Hide();},2000);
						}
					});
			}
}

function containsSign (word, content) {
for(var i = 0; i < (word.length-content.length+1); i++){
if(word.substring(i, i+content.length) == content) return true;
}
return false;
}

function shortcutsMenuSelectedHandler(event)
{
	AbNachHause = false;
	GenesBeladenReks = false;

	if(game.gi.isOnHomzone() == false && event.target.label != null)
	{
		var a = event.target.label;
		var b = a;
		var c = b;
		var checking = a;
		var sign = "->";
		var checking2 = a;
		var sign2 = "||";
		var d = event.target.label;
		var e = d;
		var f = e;
		if (containsSign(checking, sign)) 
		{
			b = a.split("->")[1];
			c = b.split(".")[0];
			WoBinIch = parseInt(c);
		}
		else
		{
			b = a.split(".")[0];
			WoBinIch = parseInt(b);
		}
		
		if (containsSign(checking2, sign2)) 
		{
			GetIndexATAuslesen = true;
			e = d.split("||")[1];
			GetIndexAT = parseInt(e);
			PathATAuslesen = false;
			shortcutGetPath();
		}
	}
	else if(game.gi.isOnHomzone() == false && event.target.label == null)
	{
		showGameAlert("Hotkey entdeckt - setze Startindex 0");
		WoBinIch = 0;
	}

	if(event.target.label != null && shortcutsAutoFuncBool)
	{
		if(/Alle Einheiten entfernen/.test(event.target.label)) {
			showGameAlert('Alle Einheiten entfernen Vorlage gefunden - Direkt Klick');
			shortcutsFreeAllUnitsNEW();
			if(automatisierung)
			{
				setTimeout(function() {automatisierungBasic();},2000);
			}
			return;
		} 
		else if(/Alle Generäle zurück/.test(event.target.label)) 
		{
			showGameAlert('Alle Generäle in den Stern Vorlage gefunden - Direkt Klick');
			shortcutsReturnAllNEW();
			if(automatisierung)
			{
				setTimeout(function() {automatisierungBasic();},2000);
			}
			return;
		}
		
		if(/NachHause1337/.test(event.target.label))
		{
			showGameAlert("Home gefunden - Direkt Klick");
			AbNachHause = true;
		}
		if(/GenesBeladen1337/.test(event.target.label))
		{
			showGameAlert("Generäle beladen mit Söldner Vorlage gefunden - Direkt Klick");
			GenesBeladenReks = true;
		}
		if(/SemiStop1337/.test(event.target.label))
		{
			showGameAlert("Semi stoppen Vorlage gefunden - Direkt Klick");
			KannWeiterGehen = false;						
			clearInterval(meinIntervall);
			return;
		}
	}

	if(shortcutsLRUItem) {
		shortcutsLRUItem.label = shortcutsLRUItem.label.slice(2);
	}
	shortcutsLRUItem = event.target;
	shortcutsLRUItem.label = "->{0}".format(shortcutsLRUItem.label);

	try {
		var filetype = shortcutsStripType(event.target.name);
		var file = new air.File(filetype[0]);
		if(!file.exists) {
			alert(getText("bad_template"));
			return;
		}
		var fileStream = new air.FileStream();
		fileStream.open(file, air.FileMode.READ);
		var data = fileStream.readUTFBytes(file.size);
		fileStream.close();
		if (data == "") { return; }
		shortcutsProceedFile(JSON.parse(data), filetype[1], file.name, filetype[0]);
	} catch(e) {
				try {
					var filetype = shortcutsStripType(event.target.name);
					var file = new air.File(filetype[0]);
					if(!file.exists) {
						alert(getText("bad_template"));
						return;
					}
					var fileStream = new air.FileStream();
					fileStream.open(file, air.FileMode.READ);
					var data = fileStream.readUTFBytes(file.size);
					fileStream.close();
					if (data == "") { return; }
					shortcutsProceedFile(JSON.parse(data), filetype[1], file.name, filetype[0]);
					showGameAlert('Vorlagen Error Retry - Erfolgreich');
						try{
							var SM = swmmo.getDefinitionByName("Sound::cSoundManager").getInstance();
							var item = 'CGJackpot';
							if(SM.isEffectsMuted())
							{
								SM.toggleEffects();
								SM.setEffectsVolume(1);
								SM.playEffect(item);
								SM.toggleEffects();
							}	
							else
							{
								SM.setEffectsVolume(1);
								SM.playEffect(item);
							}
						}
						catch (e)
						{
						}
				}
				catch(e) 
				{
					alert(getText("bad_template"));
					showGameAlert('Vorlagen Error Retry - Fehlgeschlagen');
				}
	}
}

function shortcutsMenuSelectedHandlerVorlagenEnt(number)
{
	var pathVorlagen = "";
	pathVorlagen = ShortcutPathArrayVorlagenEnt[number];
			
				showGameAlert("Vorlagen Entdecker Überwachung | " + pathVorlagen + " | Index: " + number);

				try {
					var filetype = shortcutsStripType(pathVorlagen);
					var file = new air.File(filetype[0]);
					if(!file.exists) {
						//alert(getText("bad_template"));
						return;
					}
					var fileStream = new air.FileStream();
					fileStream.open(file, air.FileMode.READ);
					var data = fileStream.readUTFBytes(file.size);
					fileStream.close();
					if (data == "") { return; }
					shortcutsProceedFileUeberwachung(JSON.parse(data), filetype[1], file.name, filetype[0]);
				} catch(e) {
							try {
								var filetype = shortcutsStripType(pathVorlagen);
								var file = new air.File(filetype[0]);
								if(!file.exists) {
									//alert(getText("bad_template"));
									return;
								}
								var fileStream = new air.FileStream();
								fileStream.open(file, air.FileMode.READ);
								var data = fileStream.readUTFBytes(file.size);
								fileStream.close();
								if (data == "") { return; }
								shortcutsProceedFileUeberwachung(JSON.parse(data), filetype[1], file.name, filetype[0]);
								showGameAlert('Vorlagen Entdecker Überwachung Error Retry - Erfolgreich');
									try{
										var SM = swmmo.getDefinitionByName("Sound::cSoundManager").getInstance();
										var item = 'CGJackpot';
										if(SM.isEffectsMuted())
										{
											SM.toggleEffects();
											SM.setEffectsVolume(1);
											SM.playEffect(item);
											SM.toggleEffects();
										}	
										else
										{
											SM.setEffectsVolume(1);
											SM.playEffect(item);
										}
									}
									catch (e)
									{
									}
							}
							catch(e) 
							{
								//alert(getText("bad_template"));
								showGameAlert('Vorlagen Entdecker Überwachung Error Retry - Fehlgeschlagen');
							}
				}		
}

function shortcutsMenuSelectedHandlerVorlagenGeo(number)
{
	var pathVorlagen = "";
	pathVorlagen = ShortcutPathArrayVorlagenGeo[number];
			
				showGameAlert("Vorlagen Geologen Überwachung | " + pathVorlagen + " | Index: " + number);

				try {
					var filetype = shortcutsStripType(pathVorlagen);
					var file = new air.File(filetype[0]);
					if(!file.exists) {
						//alert(getText("bad_template"));
						return;
					}
					var fileStream = new air.FileStream();
					fileStream.open(file, air.FileMode.READ);
					var data = fileStream.readUTFBytes(file.size);
					fileStream.close();
					if (data == "") { return; }
					shortcutsProceedFileUeberwachung(JSON.parse(data), filetype[1], file.name, filetype[0]);
				} catch(e) {
							try {
								var filetype = shortcutsStripType(pathVorlagen);
								var file = new air.File(filetype[0]);
								if(!file.exists) {
									//alert(getText("bad_template"));
									return;
								}
								var fileStream = new air.FileStream();
								fileStream.open(file, air.FileMode.READ);
								var data = fileStream.readUTFBytes(file.size);
								fileStream.close();
								if (data == "") { return; }
								shortcutsProceedFileUeberwachung(JSON.parse(data), filetype[1], file.name, filetype[0]);
								showGameAlert('Vorlagen Geologen Überwachung Error Retry - Erfolgreich');
									try{
										var SM = swmmo.getDefinitionByName("Sound::cSoundManager").getInstance();
										var item = 'CGJackpot';
										if(SM.isEffectsMuted())
										{
											SM.toggleEffects();
											SM.setEffectsVolume(1);
											SM.playEffect(item);
											SM.toggleEffects();
										}	
										else
										{
											SM.setEffectsVolume(1);
											SM.playEffect(item);
										}
									}
									catch (e)
									{
									}
							}
							catch(e) 
							{
								//alert(getText("bad_template"));
								showGameAlert('Vorlagen Geologen Überwachung Error Retry - Fehlgeschlagen');
							}
				}		
}

function shortcutsMenuSelectedHandlerVorlagenBuffs(number)
{
	var pathVorlagen = "";
	pathVorlagen = ShortcutPathArrayVorlagenBuffs[number];
			
				showGameAlert("Vorlagen Buffs Überwachung | " + pathVorlagen + " | Index: " + number);

				try {
					var filetype = shortcutsStripType(pathVorlagen);
					var file = new air.File(filetype[0]);
					if(!file.exists) {
						//alert(getText("bad_template"));
						return;
					}
					var fileStream = new air.FileStream();
					fileStream.open(file, air.FileMode.READ);
					var data = fileStream.readUTFBytes(file.size);
					fileStream.close();
					if (data == "") { return; }
					shortcutsProceedFileUeberwachung(JSON.parse(data), filetype[1], file.name, filetype[0]);
				} catch(e) {
							try {
								var filetype = shortcutsStripType(pathVorlagen);
								var file = new air.File(filetype[0]);
								if(!file.exists) {
									//alert(getText("bad_template"));
									return;
								}
								var fileStream = new air.FileStream();
								fileStream.open(file, air.FileMode.READ);
								var data = fileStream.readUTFBytes(file.size);
								fileStream.close();
								if (data == "") { return; }
								shortcutsProceedFileUeberwachung(JSON.parse(data), filetype[1], file.name, filetype[0]);
								showGameAlert('Vorlagen Buffs Überwachung Error Retry - Erfolgreich');
									try{
										var SM = swmmo.getDefinitionByName("Sound::cSoundManager").getInstance();
										var item = 'CGJackpot';
										if(SM.isEffectsMuted())
										{
											SM.toggleEffects();
											SM.setEffectsVolume(1);
											SM.playEffect(item);
											SM.toggleEffects();
										}	
										else
										{
											SM.setEffectsVolume(1);
											SM.playEffect(item);
										}
									}
									catch (e)
									{
									}
							}
							catch(e) 
							{
								//alert(getText("bad_template"));
								showGameAlert('Vorlagen Buffs Überwachung Error Retry - Fehlgeschlagen');
							}
				}		
}

function shortcutsMenuSelectedHandlerVorlagenAusbau(number)
{
	var pathVorlagen = "";
	pathVorlagen = ShortcutPathArrayVorlagenAusbau[number];
			
				showGameAlert("Vorlagen Gebäudeausbau Überwachung | " + pathVorlagen + " | Index: " + number);

				try {
					var filetype = shortcutsStripType(pathVorlagen);
					var file = new air.File(filetype[0]);
					if(!file.exists) {
						//alert(getText("bad_template"));
						return;
					}
					var fileStream = new air.FileStream();
					fileStream.open(file, air.FileMode.READ);
					var data = fileStream.readUTFBytes(file.size);
					fileStream.close();
					if (data == "") { return; }
					shortcutsProceedFileUeberwachung(JSON.parse(data), filetype[1], file.name, filetype[0]);
				} catch(e) {
							try {
								var filetype = shortcutsStripType(pathVorlagen);
								var file = new air.File(filetype[0]);
								if(!file.exists) {
									//alert(getText("bad_template"));
									return;
								}
								var fileStream = new air.FileStream();
								fileStream.open(file, air.FileMode.READ);
								var data = fileStream.readUTFBytes(file.size);
								fileStream.close();
								if (data == "") { return; }
								shortcutsProceedFileUeberwachung(JSON.parse(data), filetype[1], file.name, filetype[0]);
								showGameAlert('Vorlagen Gebäudeausbau Überwachung Error Retry - Erfolgreich');
									try{
										var SM = swmmo.getDefinitionByName("Sound::cSoundManager").getInstance();
										var item = 'CGJackpot';
										if(SM.isEffectsMuted())
										{
											SM.toggleEffects();
											SM.setEffectsVolume(1);
											SM.playEffect(item);
											SM.toggleEffects();
										}	
										else
										{
											SM.setEffectsVolume(1);
											SM.playEffect(item);
										}
									}
									catch (e)
									{
									}
							}
							catch(e) 
							{
								//alert(getText("bad_template"));
								showGameAlert('Vorlagen Gebäudeausbau Überwachung Error Retry - Fehlgeschlagen');
							}
				}		
}

function shortcutsProceedFileUeberwachung(data, type, name, fullPath)
{
	var module = '';
	switch(type) {
		case 'e ':
		case 'g ':
			if(game.gi.isOnHomzone() == false) {
				game.showAlert(getText('not_home'));
				return;
			}

			game.showAlert('Geos/Entdecker - direktes ausführen aktiv!');
			module = type == 'e ' ? 'expl' : 'geo';
			sendSpecEntdecker(data);			
		break;
		case 'b ':
			game.showAlert('Buffen - direktes ausführen aktiv!');
			//module = 'buff';
			buffDoJob2(data);		
		break;
		case 'x ':
			game.showAlert('Gebäudeausbau - direktes ausführen aktiv!');
			buildingArrayLoad = data;
				var buildingList = _getArchitecturesList();
				var keys = Object.keys(buildingList);
					keys.sort().forEach(function (key) {	
					buildingList[key].forEach(function (item) {
						var isGridInArray = false;
						for (var i = 0; i < buildingArrayLoad.length; i++) {
							if (buildingArrayLoad[i] === item.grid) {
								isGridInArray = true;
								break;
							}
						} 
						if (isGridInArray) {
							$('#_upgrade_' + item.building.GetGrid()).prop('checked', true);
							if (buildingArray.indexOf(item.building) === -1) {
								buildingArray.push(item.building);
								//air.Introspector.Console.log(buildingArray);
							}
						}			
					});
				});
			setTimeout(function() {upgradeBuildingForClientArray(buildingArray);},1000);
		break;	
	}
}

function shortcutsMenuSelectedHandlerNew(number)
{
	AbNachHause = false;
	GenesBeladenReks = false;
	LetzteVorlage = false;
	if(automatisierung && game.gi.isOnHomzone() == false)
	{
			WoBinIch = number;
			WoBinIch++;
			var path = "";
			if(WoBinIch >= ShortcutPathArray.length)
			{ 
				WoBinIch = 0;
				
				try{
					if(Kampfgeraeusche)
					{
						var SM = swmmo.getDefinitionByName("Sound::cSoundManager").getInstance();
						var item = 'GeneralBattleStart';
						if(SM.isEffectsMuted())
						{
							SM.toggleEffects();
							SM.setEffectsVolume(1);
							SM.playEffect(item);
							SM.toggleEffects();
						}	
						else
						{
							SM.setEffectsVolume(1);
							SM.playEffect(item);
						}
					}
				}
				catch (e)
				{
				}
				showGameAlert("Letzte Vorlage!");
				LetzteVorlage = true;
				return;
			}

			path = ShortcutPathArray[WoBinIch];
			
			if(/--s[0-9]+p--/.test(path)) {
					game.gi.mClientMessages.SendMessagetoServer(1037, game.gi.mCurrentViewedZoneID, null);
					showGameAlert('SEP gefunden - Auto Zone Refresh (F2)');
					//WoBinIch++;
					//path = ShortcutPathArray[WoBinIch];
					shortcutsMenuSelectedHandlerNew(WoBinIch);
					return;
			} 
			else if(/[0-9]+\[(d)\]/.test(path)) {
					showGameAlert('Details gefunden - Vorlage wird übersprungen');
					//WoBinIch++;
					//path = ShortcutPathArray[WoBinIch];
					shortcutsMenuSelectedHandlerNew(WoBinIch);
					return;
			}
			else if(/[0-9]+\[(f)\]/.test(path)) {
					showGameAlert('Alle Einheiten entfernen Vorlage gefunden');
					shortcutsFreeAllUnitsNEW();
					if(automatisierung)
					{
						setTimeout(function() {
						automatisierungBasic();},2000);
					}
					return;
			} 
			else if(/[0-9]+\[(s)\]/.test(path)) {
					showGameAlert('Alle Generäle in den Stern Vorlage gefunden');
					shortcutsReturnAllNEW();
					if(automatisierung)
					{
						setTimeout(function() {
						automatisierungBasic();},2000);
					}
					return;
			}
			else if(/NachHause1337/.test(path))
			{
				showGameAlert("Home gefunden");
				AbNachHause = true;
				path = ShortcutPathArray[WoBinIch];
			}
			else if(/GenesBeladen1337/.test(path))
			{
				showGameAlert("Generäle beladen mit Söldner Vorlage gefunden");
				GenesBeladenReks = true;
				path = ShortcutPathArray[WoBinIch];
			}
			else if(/direktsenden/.test(path))
			{
				showGameAlert("Direktsenden im AT - Vorlage wird übersprungen");
				shortcutsMenuSelectedHandlerNew(WoBinIch);
				return;
			}
			else if(/SemiStop1337/.test(path))
			{
				showGameAlert("Semi stoppen Vorlage gefunden");
				KannWeiterGehen = false;						
				clearInterval(meinIntervall);
				return;
			}
			else 
			{
					path = ShortcutPathArray[WoBinIch];
			}
				showGameAlert(path + " | Index: " + WoBinIch);

				try {
					var filetype = shortcutsStripType(path);
					var file = new air.File(filetype[0]);
					if(!file.exists) {
						//alert(getText("bad_template"));
						return;
					}
					var fileStream = new air.FileStream();
					fileStream.open(file, air.FileMode.READ);
					var data = fileStream.readUTFBytes(file.size);
					fileStream.close();
					if (data == "") { return; }
					shortcutsProceedFile(JSON.parse(data), filetype[1], file.name, filetype[0]);
				} catch(e) {
							try {
								var filetype = shortcutsStripType(path);
								var file = new air.File(filetype[0]);
								if(!file.exists) {
									//alert(getText("bad_template"));
									return;
								}
								var fileStream = new air.FileStream();
								fileStream.open(file, air.FileMode.READ);
								var data = fileStream.readUTFBytes(file.size);
								fileStream.close();
								if (data == "") { return; }
								shortcutsProceedFile(JSON.parse(data), filetype[1], file.name, filetype[0]);
								showGameAlert('Vorlagen Error Automatisierung Retry - Erfolgreich');
									try{
										var SM = swmmo.getDefinitionByName("Sound::cSoundManager").getInstance();
										var item = 'CGJackpot';
										if(SM.isEffectsMuted())
										{
											SM.toggleEffects();
											SM.setEffectsVolume(1);
											SM.playEffect(item);
											SM.toggleEffects();
										}	
										else
										{
											SM.setEffectsVolume(1);
											SM.playEffect(item);
										}
									}
									catch (e)
									{
									}
							}
							catch(e) 
							{
								//alert(getText("bad_template"));
								showGameAlert('Vorlagen Error Retry Automatisierung - Fehlgeschlagen');
							}
				}	
	}
	else if(automatisierung && game.gi.isOnHomzone() == true && ATweitermachen == true && MyStart == true && ATSchleife == true)
	{
			WoBinIchATneustarten = number;
			var pathATneustarten = "";
			try{
					if(Kampfgeraeusche)
					{
						var SM = swmmo.getDefinitionByName("Sound::cSoundManager").getInstance();
						var item = 'GeneralBattleStart';
						if(SM.isEffectsMuted())
						{
							SM.toggleEffects();
							SM.setEffectsVolume(1);
							SM.playEffect(item);
							SM.toggleEffects();
						}	
						else
						{
							SM.setEffectsVolume(1);
							SM.playEffect(item);
						}
					}
					showGameAlert("AT gestartet!");					
				}
				catch (e)
				{
				}

			pathATneustarten = ShortcutPathArrayDirektSenden[WoBinIchATneustarten];

				showGameAlert(pathATneustarten + " | Index: " + WoBinIchATneustarten);

				try {
					var filetype = shortcutsStripType(pathATneustarten);
					var file = new air.File(filetype[0]);
					
					if(!file.exists) {
						//alert(getText("bad_template"));
						return;
					}
					var fileStream = new air.FileStream();
					fileStream.open(file, air.FileMode.READ);
					var data = fileStream.readUTFBytes(file.size);
					fileStream.close();
					if (data == "") { return; }
					shortcutsProceedFile(JSON.parse(data), filetype[1], file.name, filetype[0]);
				} catch(e) {
							try {
								var filetype = shortcutsStripType(pathATneustarten);
								var file = new air.File(filetype[0]);
								if(!file.exists) {
									//alert(getText("bad_template"));
									return;
								}
								var fileStream = new air.FileStream();
								fileStream.open(file, air.FileMode.READ);
								var data = fileStream.readUTFBytes(file.size);
								fileStream.close();
								if (data == "") { return; }
								shortcutsProceedFile(JSON.parse(data), filetype[1], file.name, filetype[0]);
								showGameAlert('Vorlagen Error Automatisierung Retry - Erfolgreich');
									try{
										var SM = swmmo.getDefinitionByName("Sound::cSoundManager").getInstance();
										var item = 'CGJackpot';
										if(SM.isEffectsMuted())
										{
											SM.toggleEffects();
											SM.setEffectsVolume(1);
											SM.playEffect(item);
											SM.toggleEffects();
										}	
										else
										{
											SM.setEffectsVolume(1);
											SM.playEffect(item);
										}
									}
									catch (e)
									{
									}
							}
							catch(e) 
							{
								//alert(getText("bad_template"));
								showGameAlert('Vorlagen Error Retry Automatisierung - Fehlgeschlagen');
							}
				}	
	}
}

function shortcutsMenuSelectedHandlerNewGenAuslesen(number)
{

	if(automatisierung && game.gi.isOnHomzone() == true && ATweitermachen == true && MyStart == true && ATSchleife == true)
	{
			WoBinIchATneustarten = number;
			var pathATneustarten2 = "";
			pathATneustarten2 = ShortcutPathArrayDirektSenden[WoBinIchATneustarten];
			showGameAlert(pathATneustarten2 + " | Index: " + WoBinIchATneustarten);

				try {
					var filetype = shortcutsStripType(pathATneustarten2);
					var file = new air.File(filetype[0]);
					
					if(!file.exists) {
						//alert(getText("bad_template"));
						return;
					}
					var fileStream = new air.FileStream();
					fileStream.open(file, air.FileMode.READ);
					var data = fileStream.readUTFBytes(file.size);
					fileStream.close();
					if (data == "") { return; }
					shortcutsProceedFile(JSON.parse(data), filetype[1], file.name, filetype[0]);
				} catch(e) {
							try {
								var filetype = shortcutsStripType(pathATneustarten2);
								var file = new air.File(filetype[0]);
								if(!file.exists) {
									//alert(getText("bad_template"));
									return;
								}
								var fileStream = new air.FileStream();
								fileStream.open(file, air.FileMode.READ);
								var data = fileStream.readUTFBytes(file.size);
								fileStream.close();
								if (data == "") { return; }
								shortcutsProceedFile(JSON.parse(data), filetype[1], file.name, filetype[0]);
								showGameAlert('Vorlagen NewGenAuslesen Error Automatisierung Retry - Erfolgreich');
									try{
										var SM = swmmo.getDefinitionByName("Sound::cSoundManager").getInstance();
										var item = 'CGJackpot';
										if(SM.isEffectsMuted())
										{
											SM.toggleEffects();
											SM.setEffectsVolume(1);
											SM.playEffect(item);
											SM.toggleEffects();
										}	
										else
										{
											SM.setEffectsVolume(1);
											SM.playEffect(item);
										}
									}
									catch (e)
									{
									}
							}
							catch(e) 
							{
								//alert(getText("bad_template"));
								showGameAlert('Vorlagen Error Retry Automatisierung - Fehlgeschlagen');
							}
				}							
	}
}

function contains (word, content) {
for(var i = 0; i < (word.length-content.length+1); i++){
if(word.substring(i, i+content.length) == content) return true;
}
return false;
}

function shortcutsProceedFile(data, type, name, fullPath)
{
	if(debugAT)
	{
		air.Introspector.Console.log("shortcutsProceedFile Data");
		air.Introspector.Console.log(data);
	}	
	var module = '';
	switch(type) {
		case 'l ':
		module = 'battle';
		var checkup = name;
		var wording = "direktsenden.txt, direktsenden1.txt, direktsenden2.txt, direktsenden3.txt, direktsenden4.txt, direktsenden5.txt, direktsenden6.txt";
		var wordingAT1 = "direktsenden_AT1.txt, direktsenden1_AT1.txt, direktsenden2_AT1.txt, direktsenden3_AT1.txt, direktsenden4_AT1.txt, direktsenden5_AT1.txt, direktsenden6_AT1.txt";
		var wordingAT2 = "direktsenden_AT2.txt, direktsenden1_AT2.txt, direktsenden2_AT2.txt, direktsenden3_AT2.txt, direktsenden4_AT2.txt, direktsenden5_AT2.txt, direktsenden6_AT2.txt";
		if (contains(wording, checkup)) 
		{
			result = true;
			game.showAlert('Direktsenden gefunden!');
		}
		else
		{
			result = false;
		}
		if (contains(wordingAT1, checkup)) 
		{
			resultAT1 = true;
			game.showAlert('AT1 gefunden!');
		}
		else
		{
			resultAT1 = false;
		}
		if (contains(wordingAT2, checkup)) 
		{
			resultAT2 = true;
			game.showAlert('AT2 gefunden!');
		}
		else
		{
			resultAT2 = false;
		}
		
		if(battleTimedQueue && battleTimedQueue.index != battleTimedQueue.len())
		{
			game.showAlert(loca.GetText("ALT", "ServerOverstrained"));
			return;
		}
		if(shortcutsAutoFuncBool && game.gi.isOnHomzone() == false && GenesBeladenReks == false && result == false && resultAT1 == false && resultAT2 == false)
		{
			battlePacket = data;
			battleLoadDataNEW();
			setTimeout(function() {
			armyLoadGeneralsNEW();},1000);
			
			if(automatisierung)
			{
				setTimeout(function() {
				automatisierungBasic();},1000);
			}
		}
		else if(shortcutsAutoFuncBool && game.gi.isOnHomzone() == false && GenesBeladenReks == true && result == false && resultAT1 == false && resultAT2 == false)
		{
			battlePacket = data;
			battleLoadDataNEW();
			setTimeout(function() {
			armyLoadGeneralsGenesAusStern();},1000);
			GenesBeladenReks = false;
			
			if(automatisierung)
			{
				setTimeout(function() {
				automatisierungBasic();},1000);
			}
		}
		else if(shortcutsAutoFuncBool && game.gi.isOnHomzone() == false && result == true || shortcutsAutoFuncBool && game.gi.isOnHomzone() == false && resultAT1 == true || shortcutsAutoFuncBool && game.gi.isOnHomzone() == false && resultAT2 == true)
		{
			game.showAlert('AT Insel | Armee Vorlage zum AT senden gefunden - Wird übersprungen!');
			if(automatisierung)
			{
				KannWeiterGehen = true;
				setTimeout(function() {
				automatisierungBasic();},1000);
			}
		}
		else if (shortcutsAutoFuncBool && game.gi.isOnHomzone() == true && result == false && resultAT1 == false && resultAT2 == false)
		{
			game.showAlert('Heimatinsel | Armee Vorlage - Verknüpfung direkt ausführen wurde automatisch temporär deaktiviert!');
			battleMenuHandler(null);
			battlePacket = data;
			battleWindow.withHeader('.templateFile').html("{0} ({1}: {2})".format('&nbsp;'.repeat(5), loca.GetText("LAB", "AvatarCurrentSelection"), name));
			battleLoadData();
		}
		else if (shortcutsAutoFuncBool && game.gi.isOnHomzone() == true && result == true && PathGensAuslesen == false || shortcutsAutoFuncBool && game.gi.isOnHomzone() == true && resultAT1 == true && PathGensAuslesen == false || shortcutsAutoFuncBool && game.gi.isOnHomzone() == true && resultAT2 == true && PathGensAuslesen == false)
		{
			game.showAlert('Heimatinsel | Armee Vorlage zum AT senden gefunden - Truppen werden beladen und zum AT versandt!');
			battlePacket = data;
			battleLoadDataNEW();
			setTimeout(function() {
			armyLoadGeneralsNEW();},1000);
		}
		else if (shortcutsAutoFuncBool && game.gi.isOnHomzone() == true && result == true && PathGensAuslesen == true || shortcutsAutoFuncBool && game.gi.isOnHomzone() == true && resultAT1 == true && PathGensAuslesen == true || shortcutsAutoFuncBool && game.gi.isOnHomzone() == true && resultAT2 == true && PathGensAuslesen == true)
		{
			game.showAlert('Genes aus Vorlage auslesen');
			battlePacket = data;
			battleLoadDataNEW();
			setTimeout(function() {
			armyLoadGeneralsNEWGenesauslesen();},1000);
			PathGensAuslesen = false;
		}
		else	
		{
			result = false;
			resultAT1 = false; 
			resultAT2 = false;
			battleMenuHandler(null);
			battlePacket = data;
			battleWindow.withHeader('.templateFile').html("{0} ({1}: {2})".format('&nbsp;'.repeat(5), loca.GetText("LAB", "AvatarCurrentSelection"), name));
			battleLoadData();
		}
		break;
		case 'm ':
		module = 'battle';
		if(battleTimedQueue && battleTimedQueue.index != battleTimedQueue.len())
		{
			game.showAlert(loca.GetText("ALT", "ServerOverstrained"));
			return;
		}
		if(shortcutsAutoFuncBool && game.gi.isOnHomzone() == false && AbNachHause == false)
		{
			battlePacket = data;
			battleLoadDataNEW();
			setTimeout(function() {
			battleMoveNEW();},1000);
			
			if(automatisierung)
			{
				setTimeout(function() {
				automatisierungBasic();},1000);
			}
		}
		else if(shortcutsAutoFuncBool && game.gi.isOnHomzone() == false && AbNachHause == true)
		{
			battlePacket = data;
			battleLoadDataNEW();
			setTimeout(function() {
			SendToHome();},1000);
			AbNachHause = false;
			if(automatisierung)
			{
				setTimeout(function() {
				automatisierungBasic();},25000);
			}
		}
		else if (shortcutsAutoFuncBool && game.gi.isOnHomzone() == true)
		{
			game.showAlert('Heimatinsel | Kriegsführung Vorlage - Verknüpfung direkt ausführen wurde automatisch temporär deaktiviert!');
			battleMenuHandler(null);
			battlePacket = data;
			battleWindow.withHeader('.templateFile').html("{0} ({1}: {2})".format('&nbsp;'.repeat(5), loca.GetText("LAB", "AvatarCurrentSelection"), name));
			battleLoadData();
		}
		else	
		{
			battleMenuHandler(null);
			battlePacket = data;
			battleWindow.withHeader('.templateFile').html("{0} ({1}: {2})".format('&nbsp;'.repeat(5), loca.GetText("LAB", "AvatarCurrentSelection"), name));
			battleLoadData();
		}
		break;
		case 'a ':
		module = 'battle';
		if(battleTimedQueue && battleTimedQueue.index != battleTimedQueue.len())
		{
			game.showAlert(loca.GetText("ALT", "ServerOverstrained"));
			return;
		}
		if(shortcutsAutoFuncBool && game.gi.isOnHomzone() == false)
		{
			battlePacket = data;
			battleLoadDataNEW();
			setTimeout(function() {
			battleAttackNEW();},1000);
			
			if(automatisierung)
			{
				setTimeout(function() {
				automatisierungBasic();},1000);
			}
			
		}
		else if (shortcutsAutoFuncBool && game.gi.isOnHomzone() == true)
		{
			game.showAlert('Heimatinsel | Kriegsführung Vorlage  - Verknüpfung direkt ausführen wurde automatisch temporär deaktiviert!');
			battleMenuHandler(null);
			battlePacket = data;
			battleWindow.withHeader('.templateFile').html("{0} ({1}: {2})".format('&nbsp;'.repeat(5), loca.GetText("LAB", "AvatarCurrentSelection"), name));
			battleLoadData();
		}	
		else
		{
			battleMenuHandler(null);
			battlePacket = data;
			battleWindow.withHeader('.templateFile').html("{0} ({1}: {2})".format('&nbsp;'.repeat(5), loca.GetText("LAB", "AvatarCurrentSelection"), name));
			battleLoadData();
		}
		break;
		case 'e ':
		case 'g ':
			if(game.gi.isOnHomzone() == false) {
				game.showAlert(getText('not_home'));
				return;
			}

			if(shortcutsAutoFuncBool)
			{
				game.showAlert('Geos/Entdecker - direktes ausführen aktiv!');
				module = type == 'e ' ? 'expl' : 'geo';
				sendSpecEntdecker(data);
			}
			else
			{
				specSharedHandler(type == 'e ' ? 1 : 2);
				module = type == 'e ' ? 'expl' : 'geo';
				$('#specModalData select').val(0);
				$.each(data, function(spec, val) { $('#' + spec.replace('expl-','')).val(val); });
				$('#specModalData select').each(function(i, select){updateSpecTimeRow(select, $(select).val(), $(select).val());});
				$("#specModal .templateFile").html("{0} ({1}: {2})".format('&nbsp;'.repeat(5), loca.GetText("LAB", "AvatarCurrentSelection"), name));
			}				
		break;
		case 'b ':
			if(shortcutsAutoFuncBool)
			{
				game.showAlert('Buffen - direktes ausführen aktiv!');
				//module = 'buff';
				buffDoJob2(data);
			}
			else
			{
				module = 'buff';
				buffRecord = data;
				buffSourceRecord = false;
				menuBuffsHandler(null);
				$("#buffModal .templateFile").html("{0} ({1}: {2})".format('&nbsp;'.repeat(5), loca.GetText("LAB", "AvatarCurrentSelection"), name));
			}		
		break;
		case 'p ':
			module = 'bui';
			buildingRecord = data;
			$("#buildingModal .templateFile").html("{0} ({1}: {2})".format('&nbsp;'.repeat(5), loca.GetText("LAB", "AvatarCurrentSelection"), name));
			menuBuildingHandler(null);
		case 'x ':
			if(shortcutsAutoFuncBool)
			{
				game.showAlert('Gebäudeausbau - direktes ausführen aktiv!');
				buildingArrayLoad = data;
				var buildingList = _getArchitecturesList();
				var keys = Object.keys(buildingList);
					keys.sort().forEach(function (key) {	
					buildingList[key].forEach(function (item) {
						var isGridInArray = false;
						for (var i = 0; i < buildingArrayLoad.length; i++) {
							if (buildingArrayLoad[i] === item.grid) {
								isGridInArray = true;
								break;
							}
						} 
						if (isGridInArray) {
							$('#_upgrade_' + item.building.GetGrid()).prop('checked', true);
							if (buildingArray.indexOf(item.building) === -1) {
								buildingArray.push(item.building);
								//air.Introspector.Console.log(buildingArray);
							}
						}			
					});
				});
				setTimeout(function() {upgradeBuildingForClientArray(buildingArray);},1000);
			}
			else
			{
				game.showAlert('Gebäudeausbau!');
				module = 'building';
				buildingArrayLoad = data;
				SearchArchitecturesHandler();
				$("#searchArchitecturesModal .templateFile").html("{0} ({1}: {2})".format('&nbsp;'.repeat(5), loca.GetText("LAB", "AvatarCurrentSelection"), name));
				var buildingList = _getArchitecturesList();
				var keys = Object.keys(buildingList);
					keys.sort().forEach(function (key) {	
					buildingList[key].forEach(function (item) {
						var isGridInArray = false;
						for (var i = 0; i < buildingArrayLoad.length; i++) {
							if (buildingArrayLoad[i] === item.grid) {
								isGridInArray = true;
								break;
							}
						} 
						if (isGridInArray) {
							$('#_upgrade_' + item.building.GetGrid()).prop('checked', true);
							if (buildingArray.indexOf(item.building) === -1) {
								buildingArray.push(item.building);
								//air.Introspector.Console.log(buildingArray);
							}
						}			
					});
				});
			}	
		break;
	}
	lruTemplate[module]=lruTemplate[module]||new LRUCache(mainSettings.lruCacheSize);
	lruTemplate[module].put(Date.now(), fullPath);
}

function sendSpecEntdecker(Daten)
{
	if(Object.keys(Daten).length > 0){
		var queue = new TimedQueue(1000);
		$.each(Daten, function(spec, val) {
			game.zone.GetSpecialists_vector().forEach(function(item){
			if(item.GetUniqueID().toKeyString().replace(".", '_') == spec && !item.GetTask() && game.gi.isOnHomzone() == true)
			{
				queue.add(function(){ sendSpecPacket(spec, val); });
			}
			});
		});
		if(game.gi.isOnHomzone() == false) {
				game.showAlert(getText('not_home'));
				return;
			}else{
				queue.run();
			}
	}
}

function checkBuffType2(type)
{
	availableBuffTypes2 = ["ProductivityBuff", "RecruitingBuff", "ProvisionerBuff", "BookbinderBuff", "AreaBuff", "RemoveBuff"];
	return availableBuffTypes2.filter(function(item) { return type.indexOf(item); }).length > 0;
}

function getBuffAvailableCount2(buffName)
{
	buffVectorGetName = game.getBuffs();
	buffsAvailable2[buffName] = {count: 0, id: ''};
	buffVectorGetName.every(function(item){
		if(item.GetBuffDefinition().GetName_string() == buffName) {
			buffsAvailable2[buffName].count = item.GetAmount();
			buffsAvailable2[buffName].id = item.GetUniqueId().uniqueID1 + '_' + item.GetUniqueId().uniqueID2;
			return false;
		}
		return true;
	});
	return buffsAvailable2[buffName].count;
}

function buffDoJob2(Daten)
{
	var isZoneRight = true;
	if(Daten["zoneId"] != game.gi.mCurrentViewedZoneID) {
		
		isZoneRight = false;
	}
	var buffRecordFiltered2 = [];
	var status2;
	var buinull = false;
	
	$.each(Daten['data'], function(index, data) { 
	status2 = "buff_ready";
	if(!isZoneRight) { status2 = "buff_wrong_zone"; }
	var bui = game.zone.GetBuildingFromGridPosition(data['buiGrid']);
	if(bui == null) { buinull = true; status2 = "buff_not_exist"; }
	if(!buinull)if(bui.GetBuildingName_string() != data['buiName']) { status2 = "buff_wrong_name"; }
	if(!buinull)if(bui.productionBuff != null && checkBuffType2(bui.productionBuff.GetBuffDefinition().GetName_string())) { status2 = "buff_buffed"; }
	if(!buinull)if(mainSettings.buffOnlyActive && (!bui.IsProductionActive() || bui.IsUpgradeInProgress())) { status2 = "buff_notactive"; }

		if(data['buffName'].indexOf("RemoveBuff") >= 0) { 
			if(status2 == "buff_buffed") { status2 = "buff_ready"; } 
			else if(status2 == "buff_ready") { status2 = "buff_not_buffed"; } 
		}
		
		if(status2 == "buff_ready" && getBuffAvailableCount2(data['buffName']) > 0) { buffRecordFiltered2.push(data); }

	});

	var x = new TimedQueue(1000);
	$.each(buffRecordFiltered2, function(i, item) {
		if(buffsAvailable2[item.buffName].count > 0) {
			buffsAvailable2[item.buffName].count -= 1;
			x.add(function(){ sendBuffPacket(buffsAvailable2[item.buffName].id, item.buiGrid); });
		}
	});
	x.run();
}

function armyLoadGeneralsNEWGenesauslesen()
{
	GenesAuslesenausVorlage = [];
	$.each(battlePacket, function(item) { 
		if(item == null) { 
			showGameAlert('Keine Generäle!');
			return;
		}
		else
		{
			GenesAuslesenausVorlage.push(armyGetSpecialistFromID(item));
		}
	});
}

function armyLoadGeneralsNEW()
{
	var queue = new TimedQueue(1000);
	var total = Object.keys(battlePacket).length;
	armyProgressCounter = total;
	$.each(battlePacket, function(item) { 
		if(armyPacketMatches[item]) {
			total--;
			armyProgressCounter--;
			if(armyProgressCounter == 0)
			{
				showGameAlert('Truppen sind schon aufgefüllt!');
				if(result){setTimeout(function() {SendToAdvAfterLoading();},2000);}
				if(resultAT1){setTimeout(function() {SendToAdvAfterLoading();},2000);}
				if(resultAT2){setTimeout(function() {SendToAdvAfterLoading();},2000);}
				if(game.gi.isOnHomzone() == false){KannWeiterGehen = true;}
			}

			return;
		}
		var dRaiseArmyVO = new dRaiseArmyVODef();
		var spec = armyGetSpecialistFromID(item);
		if(spec == null) { 
			total--;
			armyProgressCounter--;
			showGameAlert('Keine Generäle!');
			return;
		}
		dRaiseArmyVO.armyHolderSpecialistVO = spec.CreateSpecialistVOFromSpecialist();
		$.each(battlePacket[item].army, function(res) {
			var dResourceVO = new dResourceVODef();
			dResourceVO.name_string = res;
			dResourceVO.amount = battlePacket[item].army[res];
			dRaiseArmyVO.unitSquads.addItem(dResourceVO);
		});
		queue.add(function(){ 
			game.gi.mClientMessages.SendMessagetoServer(1031, game.gi.mCurrentViewedZoneID, dRaiseArmyVO);
		});
		
		
	});
	if(queue.len() > 0) {
		queue.add(function(){ battleLoadDataNEW(); showGameAlert('Truppen fertig aufgefüllt!'); if(game.gi.isOnHomzone() == false){KannWeiterGehen = true;} if(result){setTimeout(function() {SendToAdvAfterLoading(); showGameAlert('Truppen fertig aufgefüllt!');},1000);}if(resultAT1){setTimeout(function() {SendToAdvAfterLoading(); showGameAlert('Truppen fertig aufgefüllt!');},1000);}if(resultAT2){setTimeout(function() {SendToAdvAfterLoading(); showGameAlert('Truppen fertig aufgefüllt!');},1000);}}, 6000);
	}
	queue.run();
}

function armyLoadGeneralsGenesAusStern()
{
	if(SollBuffenImATSoeldner)
	{
		var MyRecID = "";
		var MyRecGrid = "";
		var KannLosGehenReks = false;
		var BuffGefundenReks = false;
		var MyBuffIDReks;
		var buffVectorReks = [];
		var req;
		var armyMilitarySystemReks = swmmo.getDefinitionByName("MilitarySystem::cMilitaryUtil");
		buffVectorReks = game.getBuffs();
		buffVectorReks.forEach(function(data){
			if(data.GetBuffDefinition().GetName_string() == "HiredMilitary") {
				if(data.GetResourceName_string() == buffNameSöldner)
				{
					BuffGefundenReks = true;
					MyBuffID = data.GetUniqueId();
				}
			}
			});
		
		var queue = new TimedQueue(1000);
		var queue2 = new TimedQueue(1000);
		var queue3 = new TimedQueue(1000);
		
		queue.add(function(){ 
				game.gi.mClientMessages.SendMessagetoServer(1037, game.gi.mCurrentViewedZoneID, null);
				showGameAlert('Auto Zone Refresh AT Start (F2)');
			});
		queue.run();
		$.each(battlePacket, function(item) {
			var spec = armyGetSpecialistFromID(item);
			queue2.add(function(){ 
				if(game.player.GetPlayerId() == spec.getPlayerID() && spec.HasUnits() && !spec.IsInUse() && !spec.isTravellingAway() && spec.GetGarrisonGridIdx() > 0 && armySPECIALIST_TYPE.IsGeneral(spec.GetType()))
				{
					armyMilitarySystemReks.SendRaiseArmyToServer(game.gi, spec, null);
				}
			},4000);

			queue3.add(function(){ 
				if (game.player.GetPlayerId() == spec.getPlayerID() && armySPECIALIST_TYPE.IsGeneral(spec.GetType()) && spec.GetGarrisonGridIdx() > 0  && !spec.IsInUse() && !spec.isTravellingAway())
				{
					MyRecGrid = spec.GetGarrisonGridIdx();
					$.each(battlePacket[item].army, function(res) {
						req = battlePacket[item].army[res];
					});
					KannLosGehenReks = true;		
				}
				if(KannLosGehenReks && BuffGefundenReks)
				{
					//air.Introspector.Console.log("Söldner Gebufft");
					game.gi.SendServerAction(61, 0, MyRecGrid, req, MyBuffID);
				}
			},8000);
			
					
		});
		if(queue3.len() > 0) {
			queue3.add(function(){ showGameAlert('Söldner fertig aufgefüllt!'); if(automatisierung){if(game.gi.isOnHomzone() == false){KannWeiterGehen = true;}}}, 12000);
		}
		queue2.run();
		queue3.run();
	}
}

function SendToHome()
{
	try {
		showGameAlert("Generäle ab nach Hause");
		var HomeID = game.player.GetHomeZoneId();
			armyGeneralsSendNEWW(HomeID);
			
		} catch (error) {
			alert("Err (retry): " + error.message);
		}
}

function armyGeneralsSendNEWW(e)
{
	try
	{
		var queue = new TimedQueue(1000);
		var OptionSelected = e;
		$.each(battlePacket, function(item) { 
			var spec = armyGetSpecialistFromID(item);
			if(spec == null) { return; }
			if (OptionSelected == '98') {
				if(spec.GetGarrisonGridIdx() > 0) {
					queue.add(function(){ armySendGeneralToStar(spec); });
				}
			} else {
				queue.add(function(){ armyServices.specialist.sendToZone(spec, OptionSelected); });
			}
		});
		if(queue.len() > 0) {
			queue.run();
			showGameAlert(getText('command_sent'));
			if(game.gi.isOnHomzone() == false)
			{
				setTimeout(function() {KannWeiterGehen = true;},WarteZeitZwischenVorlagen);
			}
		}
		else
		{
			if(game.gi.isOnHomzone() == false)
			{
				setTimeout(function() {KannWeiterGehen = true;},WarteZeitZwischenVorlagen);
			}
		}
	}
	catch (error) {
		alert("send error : " + error.message);
	}
}

function SendToAdvAfterLoading()
{
	try {
			var AdvManager = swmmo.getDefinitionByName("com.bluebyte.tso.adventure.logic::AdventureManager").getInstance();
			var Adventures = AdvManager.getAdventures();
			if (Adventures[0].zoneID !== game.gi.mCurrentViewedZoneID || Adventures[1].zoneID !== game.gi.mCurrentViewedZoneID) {
					//armyGeneralsSendNEW(item.zoneID);
				if(result && Adventures[0] != undefined)
				{
					armyGeneralsSendNEW(Adventures[0].zoneID);
				}
				if(resultAT1 && Adventures[0] != undefined)
				{
					armyGeneralsSendNEW(Adventures[0].zoneID);
				}
				if(resultAT2 && Adventures[1] != undefined)
				{
					armyGeneralsSendNEW(Adventures[1].zoneID);	
				}
			}
			/* AdvManager.getAdventures().forEach(function(item){
				if (item.zoneID !== game.gi.mCurrentViewedZoneID) {
					//armyGeneralsSendNEW(item.zoneID);
					if(result)
					{
						armyGeneralsSendNEW(item.zoneID);
					}
					if(resultAT1)
					{
						armyGeneralsSendNEW(item.zoneID);
					}
					if(resultAT2)
					{
						
					}
				}
			}); */
			
		} catch (error) {
			alert("Err (retry): " + error.message);
		}
}

function armyGeneralsSendNEW(e)
{
	try
	{
		var queue = new TimedQueue(1000);
		var OptionSelected = e;
		$.each(battlePacket, function(item) { 
			var spec = armyGetSpecialistFromID(item);
			if(spec == null) { return; }
			if (OptionSelected == '98') {
				if(spec.GetGarrisonGridIdx() > 0) {
					queue.add(function(){ armySendGeneralToStar(spec); });
				}
			} else {
				queue.add(function(){ armyServices.specialist.sendToZone(spec, OptionSelected); });
			}
		});
		if(queue.len() > 0) {
			queue.run();
			showGameAlert(getText('command_sent'));
			if(game.gi.isOnHomzone() == true && ATweitermachen == true && automatisierung == true && MyStart == true && ATSchleife == true)
			{
				setTimeout(function() {
					if(ATweitermachen){
					var ATID = OptionSelected;
					game.gi.visitZone(ATID);}
				setTimeout(function() {
					if(ATweitermachen){ATStart();}},WarteZeitZwischenAutomatikstartenimAT);
				},WarteZeitZwischenInselswitch);
			}
		}
	}
	catch (error) {
		alert("send error : " + error.message);
	}
}

function battleLoadDataNEW()
{
	var armyCategory = [];
	armyInfo = {};
	armyFreeInfo = {};
	game.zone.GetArmy(game.player.GetPlayerId()).GetSquadsCollection_vector().sort(game.def("MilitarySystem::cSquad").SortByCombatPriority).forEach(function(item){
		armyFreeInfo[item.GetType()] = item.GetAmount();
	});
	
	var armySPECIALIST_TYPE = swmmo.getDefinitionByName("Enums::SPECIALIST_TYPE");
	game.zone.GetSpecialists_vector().forEach(function(item){
		try {
			if(!armySPECIALIST_TYPE.IsGeneral(item.GetType()) || item.getPlayerID() != game.player.GetPlayerId()) { return; }
			if(item == null || typeof item == 'undefined' || item.GetTask() != null) { return; }
			var uniqId = item.GetUniqueID().toKeyString();
			armyInfo[uniqId] = armyInfo[uniqId] || { 'name': item.getName(false), 'type': item.GetType(), 'army': {}, 'skills': {} };
			item.getSkillTree().getItems_vector().forEach(function(skill, index){
				if(skill.getLevel() > 0) { armyInfo[uniqId].skills[index] = skill.getLevel(); }
			});
			item.GetArmy().GetSquadsCollection_vector().sort(game.def("MilitarySystem::cSquad").SortByCombatPriority).forEach(function(squad){
				armyInfo[uniqId].army[squad.GetType()] = squad.GetAmount();
			});
		} catch(e) {}
	});
	
	var canSubmitAttack = true, canSubmitMove = false, attackSubmitChecker = [];
	battlePacket = battleLoadDataCheck(battlePacket);
	var checkedPacket = armyLoadDataCheck(battlePacket);
	$.each(battlePacket, function(item) { 
		if(battlePacket[item].spec == null) {
			canSubmitAttack = false, canSubmitMove = false;
			return;
		}
		
		if(battlePacket[item].canSubmitMove) { canSubmitMove = true; }
		if(!battlePacket[item].canSubmitAttack && battlePacket[item].target > 0) { canSubmitAttack = false; }
		if(battlePacket[item].target > 0) { attackSubmitChecker.push(battlePacket[item].canSubmitAttack); }
	});
}

function battleAttackNEW()
{
	battleTimedQueue = new TimedQueue(1000);
	$.each(battlePacket, function(item) {
		if(!battlePacket[item].canAttack) { /* setTimeout(function() {KannWeiterGehen = true;},WarteZeitZwischenVorlagen); */ return; }
		var spec = armyGetSpecialistFromID(item);
		
		battleTimedQueue.add(function(){ battleSendGeneral(spec, battlePacket[item].name, battlePacket[item].targetName, 5, battlePacket[item].target); }, battlePacket[item].time);
	});
	if(battleTimedQueue.len() > 0) {
		battleTimedQueue.run();
		showGameAlert(getText('command_sent'));
		if(game.gi.isOnHomzone() == false)
		{
			setTimeout(function() {KannWeiterGehen = true;},WarteZeitZwischenVorlagen);
		}
	}
	else
	{
		game.showAlert(getText('command_sent'));
		if(game.gi.isOnHomzone() == false)
		{
			setTimeout(function() {KannWeiterGehen = true;},WarteZeitZwischenVorlagen);
		}
	}
}

function battleMoveNEW()
{
	VomSternGen = false;
	battleTimedQueue = new TimedQueue(1000);
	$.each(battlePacket, function(item) {
		//if(!battlePacket[item].canSubmitMove) { /* setTimeout(function() {KannWeiterGehen = true;},WarteZeitZwischenVorlagen); */ return; } --> Verschieben Bug
		var spec = armyGetSpecialistFromID(item);
		if(battlePacket[item].grid > 0) {
			battleTimedQueue.add(function(){ battleSendGeneral(spec, battlePacket[item].name, battlePacket[item].grid, 4, battlePacket[item].grid); });
		} else {
			battleTimedQueue.add(function(){ armySendGeneralToStar(spec); });
		}

		if(automatisierung && game.gi.isOnHomzone() == false)
		{
			swmmo.application.mGameInterface.mCurrentPlayerZone.GetSpecialists_vector().forEach(function(item2){
				if(spec.GetUniqueID().toKeyString() == item2.GetUniqueID().toKeyString() && item2.GetGarrisonGridIdx() == -1)
				{
					VomSternGen = true;
				}
			});
		}
	});
	if(battleTimedQueue.len() > 0 && VomSternGen == false) {
		battleTimedQueue.run();
		game.showAlert(getText('command_sent'));
		if(game.gi.isOnHomzone() == false)
		{
			setTimeout(function() {KannWeiterGehen = true;},WarteZeitZwischenVorlagen);
		}
	}
	else if(battleTimedQueue.len() > 0 && VomSternGen == true) {
		battleTimedQueue.run();
		game.showAlert(getText('command_sent'));
		if(game.gi.isOnHomzone() == false)
		{
			game.showAlert("Gleiche Gen ID wie in Vorlage und im Stern | Timeout: " + WarteZeitAusSternVersetzen + " Millisekunden | " + "(" +WarteZeitAusSternVersetzen/1000 + ") Sekunden");
			setTimeout(function() {if(automatisierung){KannWeiterGehen = true; game.showAlert("Geht weiter mit Automatisierung");}},WarteZeitAusSternVersetzen);
		}
	}
	else
	{
		game.showAlert(getText('command_sent'));
		if(game.gi.isOnHomzone() == false)
		{
			setTimeout(function() {KannWeiterGehen = true;},WarteZeitZwischenVorlagen);
		}
	}
}

function shortcutsFreeAllUnitsNEW()
{
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
		queue.add(function(){ game.showAlert(loca.GetText("LAB", "GuildQuestCompleted")); });
		queue.run();
		game.showAlert(getText('command_sent'));
		if(game.gi.isOnHomzone() == false)
		{
			setTimeout(function() {KannWeiterGehen = true;},WarteZeitZwischenVorlagen);
		}
	}
	else
	{
		game.showAlert(getText('command_sent'));
		if(game.gi.isOnHomzone() == false)
		{
			setTimeout(function() {KannWeiterGehen = true;},WarteZeitZwischenVorlagen);
		}
	}
}

function shortcutsReturnAllNEW()
{
	var queue = new TimedQueue(1000);
	swmmo.application.mGameInterface.mCurrentPlayerZone.GetSpecialists_vector().forEach(function(item){
		if (game.player.GetPlayerId() == item.getPlayerID() && 
		    armySPECIALIST_TYPE.IsGeneral(item.GetType()) && 
			item.GetGarrisonGridIdx() > 0  && !item.IsInUse() && !item.isTravellingAway())
		{
			queue.add(function(){ armySendGeneralToStar(item); });
		}
	});
	if(queue.len() > 0)
	{
		queue.add(function(){ game.showAlert(loca.GetText("LAB", "GuildQuestCompleted")); });
		queue.run();
		game.showAlert(getText('command_sent'));
		if(game.gi.isOnHomzone() == false)
		{
			setTimeout(function() {KannWeiterGehen = true;},WarteZeitZwischenVorlagen);
		}
	}
	else
	{
		game.showAlert(getText('command_sent'));
		if(game.gi.isOnHomzone() == false)
		{
			setTimeout(function() {KannWeiterGehen = true;},WarteZeitZwischenVorlagen);
		}
	}
}

function automatisierungBasic()
{
	if(automatisierung && game.gi.isOnHomzone() == false)
	{
		if(GetQuestSemiStarten == true)
		{
			GetQuestSemi();
			GetQuestSemiStarten = false;
		}
		var OnlyOnce = true;
		var arryAva = [];
		var task = "";
		MaxGenes = 0;
		swmmo.application.mGameInterface.mCurrentPlayerZone.GetSpecialists_vector().forEach(function(item){
		if (game.player.GetPlayerId() == item.getPlayerID())
		{
			MaxGenes++;
		}
		});
		meinIntervall = setInterval(function() { 
			arryAva = [];		
				swmmo.application.mGameInterface.mCurrentPlayerZone.GetSpecialists_vector().forEach(function(item){
					if (game.player.GetPlayerId() == item.getPlayerID())
					{
						if(item.GetTask() != null)
						{
							task = item.GetTask().toString();
						}

						if(item.IsInUse() && task != "[object cSpecialistTask_Recover]")
						{
							var index = arryAva.indexOf(item.GetUniqueID().toKeyString());
							if (index > -1) { 
							  arryAva.splice(index, 1);
							}
						}
						else if(item.IsInUse() && task == "[object cSpecialistTask_Recover]")
						{
							if (arryAva.indexOf(item.GetUniqueID().toKeyString()) == -1) {
								arryAva.push(item.GetUniqueID().toKeyString());
							}
						}
						else if(!item.IsInUse() && item.GetTask() == null)
						{
							if (arryAva.indexOf(item.GetUniqueID().toKeyString()) == -1) {
								arryAva.push(item.GetUniqueID().toKeyString());
							}
						}
						
						if(debugAT)
						{
							air.Introspector.Console.log(item);
						}
					}					
				});
				
					if(game.gi.isOnHomzone() == true)
					{
						KannWeiterGehen = false;						
						clearInterval(meinIntervall);
					}
					if(arryAva.length == MaxGenes && OnlyOnce == true && KannWeiterGehen == true && automatisierung == true)
					{
						KannWeiterGehen = false;
						clearInterval(meinIntervall);
						OnlyOnce = false;
						game.showAlert('Alle Generäle bereit');
						if(Hufeisendelay)
						{
							ATStartBuffen();
							Hufeisendelay = false;
						}
						setTimeout(function() {
						shortcutsMenuSelectedHandlerNew(WoBinIch);},WarteZeitZwischenVorlagen);
					}
					if(debugAT)
					{
						air.Introspector.Console.log("arryAva.length: "+arryAva.length);
					}	
			}, 5000);				
	}			
}

function automatisierungBasicATneustarten()
{
	if(automatisierung && game.gi.isOnHomzone() == true && ATweitermachen == true && MyStart == true && ATSchleife == true)
	{
		var taskATneustarten = "";
		var OnlyOnceATneustarten = true;
		var arryAvaATneustarten = [];
		MaxGenesATneustarten = 0;
		var AufReisen = false;
		
		GenesAuslesenausVorlage.forEach(function(item){
					MaxGenesATneustarten++;
					});
		meinIntervallATneustarten = setInterval(function() {  
		arryAvaATneustarten = [];
				GenesAuslesenausVorlage.forEach(function(item){
						
					if(item.GetTask() != null)
					{
						taskATneustarten = item.GetTask().toString();
					}
					if(/cSpecialistTask_TravelToZone/.test(taskATneustarten))
					{
						AufReisen = true;
					}
					else
					{
						AufReisen = false;
					}
			
					if(item.IsInUse())
					{
						var index = arryAvaATneustarten.indexOf(item.GetUniqueID().toKeyString());
						if (index > -1) { 
						  arryAvaATneustarten.splice(index, 1);
						}
					}
					else if(!item.IsInUse())
					{
						if (arryAvaATneustarten.indexOf(item.GetUniqueID().toKeyString()) == -1) {
							arryAvaATneustarten.push(item.GetUniqueID().toKeyString());
						}						
					}
					
					if(game.gi.isOnHomzone() == false)
					{
						KannWeiterGehenATneustarten = false;						
						clearInterval(meinIntervallATneustarten);
					}
					
					if(debugAT)
					{
						air.Introspector.Console.log("Aufreisen: "+AufReisen);
						air.Introspector.Console.log(item);
					}	

				});
					
					if(AufReisen && !NurEineDirektSenden && arryAvaATneustarten.length == MeineGenAnzahlOhneQM && arryAvaATneustarten.length != MeineGenAnzahlMitQM)
					{
						game.showAlert("Genes auf Reise gefunden! Springe zur nächsten Vorlage");
						clearInterval(meinIntervallATneustarten);
						setTimeout(function() {
						RundenanzahlCounter++;
						if(ATweitermachen){ATStart();}},10000);
					}
					if(arryAvaATneustarten.length == MaxGenesATneustarten && OnlyOnceATneustarten == true && KannWeiterGehenATneustarten == true && ATweitermachen == true)
					{
						KannWeiterGehenATneustarten = false;
						clearInterval(meinIntervallATneustarten);
						OnlyOnceATneustarten = false;
						RundenanzahlCounter++;
						game.showAlert('Alle Generäle für AT bereit');	
						setTimeout(function() {
						shortcutsMenuSelectedHandlerNew(WoBinIchATneustarten);},WarteZeitZwischenVorlagen);
					}
					if(debugAT)
					{
						air.Introspector.Console.log("arryAvaATneustarten.length: "+arryAvaATneustarten.length);
						air.Introspector.Console.log("RundenanzahlCounter: "+ RundenanzahlCounter);
					}	
			}, 5000);				
	}				
}

function shortcutGetPath()
{
	var item = shortcutGetPathArray;
	
	item.forEach(function(data, idx){
		if(/--s[0-9]+p--/.test(data)) {
			
			return;
		}
		if(idx == AuswahlAT && PathATAuslesen)
		{
			ShortcutPathArray = [];
			data.items.forEach(function(i, index) {
					var label = "{0}".format(i);
						var label2 = label.split(",")[0];	
						ShortcutPathArray.push(label2);
				});	
		}
		
		if(idx == AuswahlDirektSenden && PathATAuslesen)
		{
			ShortcutPathArrayDirektSenden = [];
			data.items.forEach(function(i, index) {
					var label = "{0}".format(i);
					var label2 = label.split(",")[0];	
					ShortcutPathArrayDirektSenden.push(label2);
				});	
		}

		if(automatisierung && !MyStart && idx == GetIndexAT && !PathATAuslesen)
		{
			ShortcutPathArray = [];
			data.items.forEach(function(i, index) {
					var label = "{0}".format(i);
						var label2 = label.split(",")[0];	
						ShortcutPathArray.push(label2);
						
				});
				GetIndexATAuslesen = false;	
		}		
	});
}

function shortcutGetpathVorlagenEnt()
{
	if(VorlagenUeberwachungEnt)
	{
		var item = shortcutGetPathArray;
		
		item.forEach(function(data, idx){
			if(/--s[0-9]+p--/.test(data)) {
				
				return;
			}
			
			if(idx == AuswahlUeberwachungVorlagenIndexEnt && VorlagenUeberwachungInternEnt && VorlagenUeberwachungEnt)
			{
				ShortcutPathArrayVorlagenEnt = [];
				data.items.forEach(function(i, index) {
						var label = "{0}".format(i);
						var label2 = label.split(",")[0];	
						ShortcutPathArrayVorlagenEnt.push(label2);
					});	
			}		
		});
	}
}

function shortcutGetpathVorlagenGeo()
{
	if(VorlagenUeberwachungGeo)
	{
		var item = shortcutGetPathArray;
		
		item.forEach(function(data, idx){
			if(/--s[0-9]+p--/.test(data)) {
				
				return;
			}
			
			if(idx == AuswahlUeberwachungVorlagenIndexGeo && VorlagenUeberwachungInternGeo && VorlagenUeberwachungGeo)
			{
				ShortcutPathArrayVorlagenGeo = [];
				data.items.forEach(function(i, index) {
						var label = "{0}".format(i);
						var label2 = label.split(",")[0];	
						ShortcutPathArrayVorlagenGeo.push(label2);
					});	
			}		
		});
	}
}

function shortcutGetpathVorlagenBuffs()
{
	if(VorlagenUeberwachungBuffs)
	{
		var item = shortcutGetPathArray;
		
		item.forEach(function(data, idx){
			if(/--s[0-9]+p--/.test(data)) {
				
				return;
			}
			
			if(idx == AuswahlUeberwachungVorlagenIndexBuffs && VorlagenUeberwachungInternBuffs && VorlagenUeberwachungBuffs)
			{
				ShortcutPathArrayVorlagenBuffs = [];
				data.items.forEach(function(i, index) {
						var label = "{0}".format(i);
						var label2 = label.split(",")[0];	
						ShortcutPathArrayVorlagenBuffs.push(label2);
					});	
			}		
		});
	}
}

function shortcutGetpathVorlagenAusbau()
{
	if(VorlagenUeberwachungAusbau)
	{
		var item = shortcutGetPathArray;
		
		item.forEach(function(data, idx){
			if(/--s[0-9]+p--/.test(data)) {
				
				return;
			}
			
			if(idx == AuswahlUeberwachungVorlagenIndexAusbau && VorlagenUeberwachungInternAusbau && VorlagenUeberwachungAusbau)
			{
				ShortcutPathArrayVorlagenAusbau = [];
				data.items.forEach(function(i, index) {
						var label = "{0}".format(i);
						var label2 = label.split(",")[0];	
						ShortcutPathArrayVorlagenAusbau.push(label2);
					});	
			}		
		});
	}
}

function ATStart()
{
		if(MyStart)
		{
			if(PathATAuslesen)
			{
				shortcutGetPath();
				PathATAuslesen = false;
			}
			myIntervall = setInterval(function() {  
				if(game.gi.isOnHomzone() == false && automatisierung == true)
				{	
					if(WoBinIch == 0)
					{
						game.showAlert("Auto AT Start Überwachung aktiv");
						setTimeout(function() {if(automatisierung){WoBinIch = -1; KannWeiterGehen = true; automatisierungBasic(); Hufeisendelay = true;}},WarteZeitZwischenVorlagen);		
						GetQuest();
						if(debugAT)
						{
							air.Introspector.Console.log("Auto AT Start Überwachung aktiv | WoBinIch: "+ WoBinIch);
						}					
						clearInterval(myIntervall);
					}
					else
					{
						game.showAlert("Auto AT Start Überwachung geht weiter - im AT");
						setTimeout(function() {if(automatisierung){KannWeiterGehen = true; automatisierungBasic();}},WarteZeitZwischenVorlagen);
						GetQuest();
						if(debugAT)
						{
							air.Introspector.Console.log("Auto AT Start Überwachung geht weiter - im AT | WoBinIch: "+ WoBinIch);
						}							
						clearInterval(myIntervall);
					}
				}
				else if(game.gi.isOnHomzone() == true && ATweitermachen == true && ATSchleife == true && RundenanzahlCounter < Rundenanzahl)
				{
						game.showAlert("Auto AT Start Überwachung erneut aktiv");
						if(WoBinIchATneustarten < ShortcutPathArrayDirektSenden.length - 1 && RundenanzahlCounter != 0 && !NurEineDirektSenden)
						{
							game.showAlert("Direktsenden Index Länge " + ShortcutPathArrayDirektSenden.length);
							WoBinIchATneustarten++;
						}
						else
						{
							WoBinIchATneustarten = 0;
						}
						game.showAlert("RundenanzahlCounter: " + RundenanzahlCounter);
						game.showAlert("Direktsenden Index Länge: " + ShortcutPathArrayDirektSenden.length);
						game.showAlert("Nehme direktsenden Index: "+WoBinIchATneustarten);
						if(debugAT)
						{
							air.Introspector.Console.log("RundenanzahlCounter: " + RundenanzahlCounter);
							air.Introspector.Console.log("Direktsenden Index Länge: " + ShortcutPathArrayDirektSenden.length);
							air.Introspector.Console.log("Nehme direktsenden Index: "+WoBinIchATneustarten);
						}						
						setTimeout(function() {if(ATweitermachen){PathGensAuslesen = true;shortcutsMenuSelectedHandlerNewGenAuslesen(WoBinIchATneustarten);}},2000);		
						
						setTimeout(function() {if(ATweitermachen){ATStartBuffen();}setTimeout(function() {if(ATweitermachen){KannWeiterGehenATneustarten = true; automatisierungBasicATneustarten();}},WarteZeitZwischenATAutoStart);},WarteZeitZwischenVorlagen);		
						clearInterval(myIntervall);
						
				}
			}, 5000);
			
			if(RundenanzahlCounter > Rundenanzahl)
			{
				game.showAlert("RundenanzahlCounter >: " + RundenanzahlCounter + "AT Auto Stop");
				WoBinIchATneustarten = 0;
				ATweitermachen = false;
				clearInterval(meinIntervall);
				clearInterval(myIntervall);
				clearInterval(meinIntervallATneustarten);
				clearInterval(myQuestIntervall);
			}
		}
		else
		{
			clearInterval(meinIntervall);
			clearInterval(myIntervall);
			clearInterval(meinIntervallATneustarten);
			clearInterval(myQuestIntervall);
			clearInterval(myQuestIntervallSemi);
		}
}

function GetQuest()
{
	var LastQuest = false;
	myQuestIntervall = setInterval(function() { 
			if (game.gi.mCurrentPlayer.mIsAdventureZone && game.gi.mNewQuestManager.GetQuestPool().IsAnyQuestsActive() && ATSchleife == true) {
				$.each(game.gi.mNewQuestManager.GetQuestPool().GetQuest_vector(), function(i, item) {
					if(item.GetQuestDefinition().questName_string.toString() == "MiadArcticExplosionMain" || item.GetQuestDefinition().questName_string.toString() == "MiadTheLostSkullMain" && LetzteVorlage)
					{
						globalFlash.gui.mQuestBook.Show();
						setTimeout(function() {globalFlash.gui.mQuestBook.Hide();},2000);
					}
					if(debugAT)
					{
						air.Introspector.Console.log(item.GetQuestDefinition());
						air.Introspector.Console.log(item.GetQuestDefinition().specialType_string.toString());
					}
					if(!item.isFinished() && item.GetQuestDefinition().questName_string.toString() == "CollectAllCollectiblesAdventure" && item.GetQuestMode().toString() != "12")
					{
						shortcutsPickupAllAT();
					}
					if(!item.isFinished() && item.GetQuestDefinition().questTriggers_vector[0].toString() == "Building_selected_barrelTransporter_ae3" && item.GetQuestMode().toString() != "12")
					{
						shortcutsPickupAllAT();
					}
					if(!item.isFinished() && item.GetQuestDefinition().questTriggers_vector[0].toString() == "Building_selected_crates_ae5" && item.GetQuestMode().toString() != "12")
					{
						shortcutsPickupAllAT();
					}
					if(!item.isFinished() && item.GetQuestDefinition().questTriggers_vector[0].toString() == "Building_selected_ruinAncientLibrary_02_tls3" && item.GetQuestMode().toString() != "12")
					{
						shortcutsPickupAllAT();
					}
					if(!item.isFinished() && item.GetQuestDefinition().questName_string.toString() == "MiadSleepyReefQ4" && item.GetQuestMode().toString() != "12")
					{
						shortcutsPickupAllAT();
					}
					if (item.isFinished())
					{ 
						game.showAlert("Quest Fertig | " +item);
						game.gi.mNewQuestManager.RewardOkButtonPressedFromGui(item);
						if(item.GetQuestDefinition().specialType_string.toString() == "lastQuest")
						{
							LastQuest = true;
						}
						if(item.GetQuestDefinition().specialType_string.toString() == "firstQuestlastQuest")
						{
							LastQuest = true;
						}
					}					
				});
			}

			if (game.gi.mCurrentPlayer.mIsAdventureZone && LastQuest && ATSchleife)
			{	
				game.showAlert("Letzte Quest beendet - Zone Wechsel demnächst");
				WoBinIch = 0;
				LastQuest = false;
				setTimeout(function() {clearInterval(myQuestIntervall);if(ATweitermachen){ToHeimatInsel();}},WarteZeitZwischenZurHeimatinselATEnde);
			}
		},WarteZeitZwischenQuestÜberwachung); // WarteZeitZwischenQuestÜberwachung
		
		if(!game.gi.mCurrentPlayer.mIsAdventureZone || !ATSchleife)
		{
			clearInterval(myQuestIntervall);
		}
}

function GetQuestSemi()
{
	var LastQuest = false;
	myQuestIntervallSemi = setInterval(function() { 
			if (game.gi.mCurrentPlayer.mIsAdventureZone && game.gi.mNewQuestManager.GetQuestPool().IsAnyQuestsActive() && !ATweitermachen) {
				$.each(game.gi.mNewQuestManager.GetQuestPool().GetQuest_vector(), function(i, item) {
					if(item.GetQuestDefinition().questName_string.toString() == "MiadArcticExplosionMain" || item.GetQuestDefinition().questName_string.toString() == "MiadTheLostSkullMain" && LetzteVorlage)
					{
						globalFlash.gui.mQuestBook.Show();
						setTimeout(function() {globalFlash.gui.mQuestBook.Hide();},2000);
					}
					if(debugAT)
					{
						air.Introspector.Console.log(item.GetQuestDefinition());
						air.Introspector.Console.log(item.GetQuestDefinition().specialType_string.toString());
					}
					if(!item.isFinished() && item.GetQuestDefinition().questName_string.toString() == "CollectAllCollectiblesAdventure" && item.GetQuestMode().toString() != "12")
					{
						shortcutsPickupAllAT();
					}
					if(!item.isFinished() && item.GetQuestDefinition().questTriggers_vector[0].toString() == "Building_selected_barrelTransporter_ae3" && item.GetQuestMode().toString() != "12")
					{
						shortcutsPickupAllAT();
					}
					if(!item.isFinished() && item.GetQuestDefinition().questTriggers_vector[0].toString() == "Building_selected_crates_ae5" && item.GetQuestMode().toString() != "12")
					{
						shortcutsPickupAllAT();
					}
					if(!item.isFinished() && item.GetQuestDefinition().questTriggers_vector[0].toString() == "Building_selected_ruinAncientLibrary_02_tls3" && item.GetQuestMode().toString() != "12")
					{
						shortcutsPickupAllAT();
					}
					if(!item.isFinished() && item.GetQuestDefinition().questName_string.toString() == "MiadSleepyReefQ4" && item.GetQuestMode().toString() != "12")
					{
						shortcutsPickupAllAT();
					}
					if (item.isFinished())
					{ 
						if(item.GetQuestDefinition().specialType_string.toString() == "lastQuest")
						{
							LastQuest = true;
						}
						else if(item.GetQuestDefinition().specialType_string.toString() == "firstQuestlastQuest")
						{
							LastQuest = true;
						}
						else
						{
							game.showAlert("Quest Fertig | " +item);
							game.gi.mNewQuestManager.RewardOkButtonPressedFromGui(item);
						}
					}						
				});
			}

			if (game.gi.mCurrentPlayer.mIsAdventureZone && LastQuest)
			{	
				game.showAlert("Letzte Quest erreicht");
				LastQuest = false;
				clearInterval(myQuestIntervallSemi);
			}
		},WarteZeitZwischenQuestÜberwachung);
		if(!game.gi.mCurrentPlayer.mIsAdventureZone)
		{
			clearInterval(myQuestIntervallSemi);
		}
}

function shortcutsPickupAllAT() {
    var collectionsManager = swmmo.getDefinitionByName("Collections::CollectionsManager").getInstance(),
        queue = new TimedQueue(1000),
        questTriggersMap = {},
        itemBuildingName, itemGOContainer;
    if (game.gi.mCurrentPlayer.mIsAdventureZone && game.gi.mNewQuestManager.GetQuestPool().IsAnyQuestsActive()) {
		$.each(game.gi.mNewQuestManager.GetQuestPool().GetQuest_vector(), function(i, item) {
			if (item.isFinished() || !item.IsQuestActive()) { return; }
			$.each(item.mQuestDefinition.questTriggers_vector, function(n, trigger) {
				if(trigger.name_string != null && trigger.name_string != '')
					questTriggersMap[trigger.name_string] = true;
			});
		});
    }

    game.zone.mStreetDataMap.GetBuildings_vector().forEach(function(item){
        if (item === null) { return; }
        itemGOContainer = item.GetGOContainer();
        if (
            collectionsManager.getBuildingIsCollectible(item.GetBuildingName_string()) ||
            (
                questTriggersMap[item.GetBuildingName_string()] &&
                item.mIsSelectable &&
                itemGOContainer.mIsAttackable &&
                !itemGOContainer.mIsLeaderCamp &&
                itemGOContainer.ui !== "enemy" &&
                (item.GetArmy() == null || !item.GetArmy().HasUnits())
            )
        ) {
            queue.add(function(){
                game.gi.SelectBuilding(item);
            });
        }
    });

    if (queue.len() === 0) {
        showGameAlert(getText("NoCollectibles"));
        return;
    }
    showGameAlert(getText('command_sent'));
    queue.run();
}

function ToHeimatInsel()
{
	try {
		showGameAlert("Ab nach Hause");
		var HomeID = game.player.GetHomeZoneId();
			game.gi.visitZone(HomeID);
			BuffnochAktiv = false;
			if(ATweitermachen == true && ATSchleife == true)
			{
				setTimeout(function() {
					game.gi.mClientMessages.SendMessagetoServer(1037, game.gi.mCurrentViewedZoneID, null);
					showGameAlert('Auto Zone Refresh (F2)');
					setTimeout(function() {if(ATweitermachen){ATStart();}},WarteZeitZwischenVorlagen);	
					},WarteZeitZwischenATNeustart);			
			}
			
		} catch (error) {
			alert("Err (retry): " + error.message);
		}
	
}

function ATStartBuffen()
{
	var BuffGefunden = false;
	if(game.gi.isOnHomzone() == false)
	{
		var MyBuffID;
		var buffVector = [];
		buffVector = game.getBuffs();
		buffVector.forEach(function(data){
			if(data.GetBuffDefinition().GetName_string() == buffNameHufeisen) {
				BuffGefunden = true;
				MyBuffID = data.GetUniqueId();
			}
		});
		
		if(SollBuffenImAT)
		{
			if(BuffGefunden && !BuffnochAktiv)
			{
				game.showAlert("Buffe: " + buffNameHufeisen + " | ID: " + MyBuffID);
				game.gi.SendServerAction(61, 0, 0, 0, MyBuffID);
				BuffnochAktiv = true;
			}
			else
			{
				game.showAlert("Buff nicht gefunden im Stern");
			}
		}
		else
		{
			game.showAlert("Buffen nicht aktiv");
		}
	}
	else if(game.gi.isOnHomzone() == true)
	{
		var MyBuffID;
		var buffVector = [];
		buffVector = game.getBuffs();
		buffVector.forEach(function(data){
			if(data.GetResourceName_string() == buffNameVomAT) {
				BuffGefunden = true;
				MyBuffID = data.GetUniqueId();
			}
		});
		
		if(SollATStarten)
		{
			try {
			ATnochAktiv = false;
			var AdvManager = swmmo.getDefinitionByName("com.bluebyte.tso.adventure.logic::AdventureManager").getInstance();
			
			AdvManager.getAdventures().forEach(function(item){
				if (item.zoneID !== game.gi.mCurrentViewedZoneID) {
					ATnochAktiv = true;
				}
			});
			
			} catch (error) {
				ATnochAktiv = true;
				alert("Err (retry): " + error.message);
			}
			if(BuffGefunden && !ATnochAktiv)
			{
				game.showAlert("Buffe: " + buffNameVomAT + " | ID: " + MyBuffID);
				game.gi.SendServerAction(61, 0, 0, 0, MyBuffID);
			}
			else
			{
				game.showAlert("AT läuft bereits oder Buff nicht gefunden im Stern");
			}
		}
		else
		{
			game.showAlert("Buffen nicht aktiv");
		}
	}
}

function shortcutsAddHandler2(event)
{
	shortcutsSkillsVector = game.def("global").skillTrees_vector.filter(function(t) { return t.name_string == 'general'; })[0].items_vector;
	shortcutsTransportSkillsVector = game.def("global").skillTrees_vector.filter(function(t) { return t.name_string == 'transporter'; })[0].items_vector;
	shortcutsWindow = new Modal('shortcutsWindow', utils.getImageTag('icon_advanced_paper_wholesale.png') + ' ' + getText('shortcutsTitle'));
	shortcutsWindow.create();
	
	if(shortcutsWindow.withHeader('.container-fluid').length == 0){
		var select = $('<select>', { id: 'shortcutsSelect', 'class': "form-control" }).append($('<option>', { value:"---" }).text("---"));
		shortcutsWindow.withHeader('').append($('<div>', { 'class': 'container-fluid' }).append([
			createTableRow([
				[2, getText('shortcutsFolder')],
				[6, select ],
				[1, $('<a>', { 'href': '#', 'class': 'renamePart' }).append(utils.getImage(new(game.def("GUI.Assets::gAssetManager_IconCombat3BonusTank"))().bitmapData))],
				[3, $('<center>').append($('<span>', { 'class': "shortcutsSaved", 'style': "display:none;" }).html("<b>{0}</b>".format(getText('shortcutsSaved')))) ]
			], true),
			createTableRow([[3, loca.GetText("LAB", "Type")],[5, getText('shortcutsFilename')],[4, '']], true)
		]));
		shortcutsWindow.withHeader('#shortcutsSelect').change(shortcutsUpdateView);
	
		var groupSelect = $('<div>', { 'class': 'btn-group dropup' }).append([
			$('<button>').attr({ 
				"id": "shortcutsAddItem",
				"class": "btn btn-success shortcutsAddItem dropdown-toggle",
				'aria-haspopup': 'true',
				'style': 'margin-left: 4px;',
				'aria-expanded': 'false',
				'data-toggle': "dropdown"
			}).text(getText('shortcutsAddItem')), 
			$('<ul>', { 'class': 'dropdown-menu' }).append([
				$('<li>').html($('<a>', {'href': '#', 'name': 'geo'}).text(shortcutsTypesLang['g '])),
				$('<li>').html($('<a>', {'href': '#', 'name': 'expl'}).text(shortcutsTypesLang['e '])),
				$('<li>').html($('<a>', {'href': '#', 'name': 'buff'}).text(shortcutsTypesLang['b '])),
				$('<li>').html($('<a>', {'href': '#', 'name': 'bui'}).text(shortcutsTypesLang['p '])),
				$('<li>').html($('<a>', {'href': '#', 'name': 'army'}).text(shortcutsTypesLang['l '])),
				$('<li>').html($('<a>', {'href': '#', 'name': 'move'}).text(shortcutsTypesLang['m '])),
				$('<li>').html($('<a>', {'href': '#', 'name': 'battle'}).text(shortcutsTypesLang['a '])),
				$('<li>').html($('<a>', {'href': '#', 'name': 'descr'}).text(shortcutsTypesLang['d '])),
				$('<li>').html($('<a>', {'href': '#', 'name': 'funload'}).text(shortcutsTypesLang['f '])),
				$('<li>').html($('<a>', {'href': '#', 'name': 'star'}).text(shortcutsTypesLang['s '])),
				$('<li>').html($('<a>', {'href': '#', 'name': 'sep'}).text(getText('shortcutsSeparator'))),
				$('<li>').html($('<a>', {'href': '#', 'name': 'folder'}).text(getText('shortcutsFolder'))),
				$('<li>').html($('<a>', {'href': '#', 'name': 'building'}).text(shortcutsTypesLang['x '])),
			])
		]);

		shortcutsWindow.Footer().prepend([
			$('<button>').attr({ "id": "shortcutsSave", "class": "btn btn-primary pull-left shortcutsSave" }).text(loca.GetText("LAB","GuildSave")),
			$('<button>').attr({ "id": "shortcutsExport","class": "btn btn-primary pull-left"}).text(getText("shortExportTitle")),
			$('<button>').attr({ "id": "shortcutsImport","class": "btn btn-primary pull-left"}).text(getText("shortImportTitle")),
			groupSelect
		]);
		shortcutsWindow.withFooter('#shortcutsExport').hide();
		shortcutsWindow.withFooter('#shortcutsExport').click(shortcutsExport);
		shortcutsWindow.withFooter('#shortcutsImport').click(shortcutsImport);
		shortcutsWindow.withFooter('.dropdown-menu a').click(function() {
			switch(this.name) {
				case 'sep':
					(shortcutsGetActive() && shortcutsGetActive().items || shortcutsSettings).push('--s'+Date.now()+'p--');
					shortcutsUpdateView();
				break;
				case 'descr':
				case 'funload':
				case 'star':
					(shortcutsGetActive() && shortcutsGetActive().items || shortcutsSettings).push([Date.now() + "[{0}]".format(this.name.charAt(0)), null]);
					shortcutsUpdateView();
				break;
			    case 'folder':
					var des = prompt("Folder name", '');
					if(des == null || des == "") { return; }
					var newid = Date.now();
					(shortcutsGetActive() && shortcutsGetActive().items || shortcutsSettings).push({
						'id' : newid,
						'name' : des,
						'items' : new Array()
					});
					shortcutsRefresh();
					shortcutsWindow.withHeader("#shortcutsSelect").val(newid).change();
				break;
				default:
					shortcutsselectTextFile2(this.name); 
			}
		});
		shortcutsWindow.withFooter('.shortcutsSave').click(function(){
			$.each(shortcutsWindow.withBody('div.row'), function(i, item) { 
				if($(item).find('.form-control').length > 0) {
					(shortcutsGetActive() && shortcutsGetActive().items || shortcutsSettings)[i][1] = $(item).find('.form-control').val() || null;
				}
			});
			settings.settings['shortcuts'] = [];
			storeSettings(shortcutsSettings, 'shortcuts');
			shortcutsMakeMenu();
			shortcutsWindow.withHeader('.shortcutsSaved').fadeIn();
			setTimeout(function() { shortcutsWindow.withHeader('.shortcutsSaved').fadeOut(); }, 1000);
		});
		shortcutsWindow.withHeader('.renamePart').click(function(){
			var des = prompt("New folder name", '');
			if(des == null || des == "") { return; }
			shortcutsGetActive()&&(shortcutsGetActive().name = des);
			var active = shortcutsGetActive().id;
			shortcutsRefresh();
			shortcutsWindow.withHeader("#shortcutsSelect").val(active).change();
		});
		shortcutsWindow.Body().html($('<div>', { 'id': 'shortcutsRows' }));
	}
	shortcutsRefresh();
	shortcutsWindow.show();
}

function shortcutsselectTextFile2(type) 
{ 
    var txtFilter = new air.FileFilter("Template", "*.*");
	var root = new air.File();
	root.nativePath = readLastDir(type == 'move' ? 'battle' : type);
    root.browseForOpenMultiple("Open", new window.runtime.Array(txtFilter)); 
    root.addEventListener(window.runtime.flash.events.FileListEvent.SELECT_MULTIPLE, function(event) {
		var nametotype = { 'buff': 'u', 'bui': 'p', 'battle': 'b', 'building': 'x' };
		event.files.forEach(function(item) {
			(shortcutsGetActive() && shortcutsGetActive().items || shortcutsSettings).push([item.nativePath + "[{0}]".format(nametotype[type] ? nametotype[type] : type.charAt(0)), null]);
		showGameAlert(item.nativePath);
		});
		shortcutsUpdateView();
	});
}


/////////////////////
///####Frontend####//
/////////////////////


var ShortcutCurrentNameID = [];
var ShortcutCurrentNameIDUeberwachung = [];
var ShortcutCurrentNameIDUeberwachung2 = [];
var ShortcutCurrentNameIDUeberwachung3 = [];
var ShortcutCurrentNameIDUeberwachungInnerIndex = [];
var ShortcutCurrentNameIDUeberwachungInnerIndex2 = [];
var ShortcutCurrentNameIDUeberwachungInnerIndex3 = [];

function FastShortcutSettingsHandler(event)
{
	
	var w = new Modal('FastShortcutSettings', utils.getImageTag('icon_dice.png', '45px') + ' '+"SemiAT | AutoAT | Tools - Einstellungen (created by PiTi)");
	var createButton = function(id, text) {
		return $('<button>', { 
			'style': 'cursor: pointer;text-decoration:none;color:#000;height: 20px;padding: 0px;',
			'class': 'btn form-control',
			'id': id
		}).text(text)
	}
	w.size = '';
	w.create();
	var html = '<div class="container-fluid" style="user-select: all;">';
	html += utils.createTableRow([[6, loca.GetText("LAB", "Name")], [6, loca.GetText("LAB", "AvatarCurrentSelection")]], true);
	var ATSelector = $('<select>', { 'class': 'form-control ATAuswahl' });
	ATSelector.append([
	$('<option>', { 'value': '1001NightsWoodcutter' }).text("Ali Baba, der junge Holzfäller"), 
	$('<option>', { 'value': '1001NightsFirstThief' }).text("Ali Baba und der erste Dieb"), 
	$('<option>', { 'value': '1001NightsSecondThief' }).text("Ali Baba und der zweite Dieb"),
	$('<option>', { 'value': '1001NightsThirdThief' }).text("Ali Baba und der dritte Dieb"),
	$('<option>', { 'value': '1001NightsBesiegedCity' }).text("Sindbad und die belagerte Stadt"),
	$('<option>', { 'value': '1001NightsPrincess' }).text("Aladin und die schöne Prinzessin"),
	$('<option>', { 'value': '1001NightsOilLamp' }).text("Öllampe"),
	$('<option>', { 'value': '1001NightsTreasureWisdom' }).text("Weisheit"),
	$('<option>', { 'value': '1001NightsTreasureKnowledge' }).text("Schatz des Wissens"),
	$('<option>', { 'value': '1001NightsSeaSnake' }).text("Seeschlange"),
	$('<option>', { 'value': 'Outlaws' }).text("Räuberbande"),
	$('<option>', { 'value': 'BonabertiBusiness' }).text("Das Bonaberti-Problem"),
	$('<option>', { 'value': 'TheBlackKnights' }).text("Die Schwarzen Ritter"),
	$('<option>', { 'value': 'BanditNest' }).text("Das Räubernest"),
	$('<option>', { 'value': 'TheNords' }).text("Die Nordmänner"),
	$('<option>', { 'value': 'TheNords2' }).text("Die Invasion der Nordmänner"),
	$('<option>', { 'value': 'WitchOfTheSwamp' }).text("Sumpfhexe"),
	$('<option>', { 'value': 'MiadSleepyReef' }).text("Schlummernde Riff"),
	$('<option>', { 'value': 'MiadArcticExplosion' }).text("Arktische Explosion"),
	$('<option>', { 'value': 'MadHenry' }).text("Die wilde Waltraut"),
	$('<option>', { 'value': 'SecludedExperiments' }).text("Einsame Experimente"),
	$('<option>', { 'value': 'RoaringBull' }).text("Rasender Bulle"),
	$('<option>', { 'value': 'Horseback' }).text("Sattelfest"),
	$('<option>', { 'value': 'Gunpowder' }).text("Schießpulver"),
	$('<option>', { 'value': 'StealingFromTheRich' }).text("Beutelschneider"),
	$('<option>', { 'value': 'TheBetrayedLittleTailor' }).text("Betrogene Schneiderlein"),
	$('<option>', { 'value': 'TheHeroicLittleTailor' }).text("Heldenhafte Schneiderlein"),
	$('<option>', { 'value': 'TheCleverLittleTailor' }).text("Kluge Schneiderlein"),
	$('<option>', { 'value': 'TheValiantLittleTailor' }).text("Tapfere Schneiderlein"),
	$('<option>', { 'value': 'TheSonsOfTheLittleTailor' }).text("Die Söhne des Schneiderlein"),
	$('<option>', { 'value': 'SurpriseAttack' }).text("Überraschungs Angriff"),
	$('<option>', { 'value': 'TheDarkBrotherhood' }).text("Die dunkle Bruderschaft"),
	$('<option>', { 'value': 'TheIslandOfThePirates' }).text("Die Insel der Freibeuter"),
	$('<option>', { 'value': 'SonsOfTheVeld' }).text("Söhne der Steppe"),
	$('<option>', { 'value': 'Traitors' }).text("Verräter"),
	$('<option>', { 'value': 'VictorTheVicious' }).text("Victor der Verschlagene"),
	$('<option>', { 'value': 'MiadTheSleepingVolcano' }).text("Der schlafende Vulkan"),
	$('<option>', { 'value': 'MiadTheLostSkull' }).text("Der verschollene Schädel"),
	$('<option>', { 'value': 'BuffAdventures_TMC_At_the_Foot_of_the_Mountain' }).text("Am Fuße der Berge"),
	$('<option>', { 'value': 'BuffAdventures_TMC_Unknown_Regions' }).text("Unbekannte Regionen"),
	$('<option>', { 'value': 'BuffAdventures_OneStepAhead' }).text("Einen Schritt Voraus"),
	$('<option>', { 'value': 'LakesideTreasure' }).text("Seeufer"),
	$('<option>', { 'value': 'BuffAdventures_ElChupacabra' }).text("Chupacabra")

	]);

	var ATSelectorID = $('<select>', { 'class': 'form-control ATAuswahlID' });
	ShortcutCurrentNameID = [];
	shortcutsGetID(shortcutsSettings);
	ShortcutCurrentNameID.forEach(function(item){
		var a = item.label;
		var b;
		b = a.split(" || ")[1];
		ATSelectorID.append([
		$('<option>', { 'value': b }).text(item.label)
	
		]);
	});
	
	var WarteZeitZwischenVorlagenSelector = $('<select>', { 'class': 'form-control WarteZeitZwischenVorlagenSelector' });
	WarteZeitZwischenVorlagenSelector.append([
	$('<option>', { 'value': '2000' }).text("2000 ms | Nur bei Lagfreien Servern"), 
	$('<option>', { 'value': '5000' }).text("5000 ms | Standard"),
	$('<option>', { 'value': '10000' }).text("10000 ms | Bei Laggy Server/MultiP ATs"),
	$('<option>', { 'value': '15000' }).text("15000 ms | Bei Laggy Server/MultiP ATs")
	
	]);
	
	var WarteZeitAusSternVersetzenSelector = $('<select>', { 'class': 'form-control WarteZeitAusSternVersetzenSelector' });
	WarteZeitAusSternVersetzenSelector.append([
	$('<option>', { 'value': '10000' }).text("10000 ms | Standard"), 
	$('<option>', { 'value': '20000' }).text("20000 ms | Bei Laggy Server/MultiP ATs"),
	$('<option>', { 'value': '35000' }).text("35000 ms | Bei Laggy Server/MultiP ATs")
	
	]);
	
	var WarteZeitZwischenATNeustartSelector = $('<select>', { 'class': 'form-control WarteZeitZwischenATNeustartSelector' });
	WarteZeitZwischenATNeustartSelector.append([
	$('<option>', { 'value': '60000' }).text("60000 ms | Standard"), 
	$('<option>', { 'value': '100000' }).text("100000 ms | Bei Laggy Server/MultiP ATs")
	
	]);
	
	var WarteZeitZwischenATAutoStartSelector = $('<select>', { 'class': 'form-control WarteZeitZwischenATAutoStartSelector' });
	WarteZeitZwischenATAutoStartSelector.append([
	$('<option>', { 'value': '40000' }).text("40000 ms | Standard")
	
	]);
	
	var WarteZeitZwischenInselswitchSelector = $('<select>', { 'class': 'form-control WarteZeitZwischenInselswitchSelector' });
	WarteZeitZwischenInselswitchSelector.append([
	$('<option>', { 'value': '90000' }).text("90000 ms | Standard")
	
	]);
	
	var WarteZeitZwischenAutomatikstartenimATSelector = $('<select>', { 'class': 'form-control WarteZeitZwischenAutomatikstartenimATSelector' });
	WarteZeitZwischenAutomatikstartenimATSelector.append([
	$('<option>', { 'value': '40000' }).text("40000 ms | Standard")
	
	]);
	
	var WarteZeitZwischenQuestÜberwachungSelector = $('<select>', { 'class': 'form-control WarteZeitZwischenQuestÜberwachungSelector' });
	WarteZeitZwischenQuestÜberwachungSelector.append([
	$('<option>', { 'value': '20000' }).text("20000 ms | Standard")
	
	]);
	
	var WarteZeitZwischenZurHeimatinselATEndeSelector = $('<select>', { 'class': 'form-control WarteZeitZwischenZurHeimatinselATEndeSelector' });
	WarteZeitZwischenZurHeimatinselATEndeSelector.append([
	$('<option>', { 'value': '15000' }).text("15000 ms | Standard"), 
	$('<option>', { 'value': '25000' }).text("25000 ms | Bei Laggy Server/MultiP ATs")
	
	]);
	
	var RundenanzahlSelector = $('<select>', { 'class': 'form-control RundenanzahlSelector' });
	RundenanzahlSelector.append([
	$('<option>', { 'value': '1' }).text("1"), 
	$('<option>', { 'value': '2' }).text("2"),
	$('<option>', { 'value': '3' }).text("3"), 
	$('<option>', { 'value': '4' }).text("4"), 
	$('<option>', { 'value': '5' }).text("5"), 
	$('<option>', { 'value': '6' }).text("6"),
	$('<option>', { 'value': '7' }).text("7"),
	$('<option>', { 'value': '8' }).text("8"),
	$('<option>', { 'value': '9' }).text("9"),
	$('<option>', { 'value': '10' }).text("10")
	
	]);
	
	var buffNameHufeisenSelector = $('<select>', { 'class': 'form-control buffNameHufeisenSelector' });
	buffNameHufeisenSelector.append([
	$('<option>', { 'value': 'GeneralSpeedBuff_Bronze' }).text("Bronze-Hufeisen"), 
	$('<option>', { 'value': 'GeneralSpeedBuff_Platinum' }).text("Platinum-Hufeisen"),
	$('<option>', { 'value': 'GeneralSpeedBuff_Blackened_Titanium' }).text("Geschwärztes Titan-Hufeisen"), 
	$('<option>', { 'value': 'GeneralSpeedBuff_Obsidian' }).text("Obsidian-Hufeisen"), 
	$('<option>', { 'value': 'GeneralSpeedBuff_Mystical' }).text("Mystisches-Hufeisen")
	
	]);
	
	var WarteZeitZwischenVorlagenÜberwachungSelector = $('<select>', { 'class': 'form-control WarteZeitZwischenVorlagenÜberwachungSelector' });
	WarteZeitZwischenVorlagenÜberwachungSelector.append([
	$('<option>', { 'value': '5' }).text("5 Minuten"), 
	$('<option>', { 'value': '10' }).text("10 Minuten"),
	$('<option>', { 'value': '15' }).text("15 Minuten"), 
	$('<option>', { 'value': '20' }).text("20 Minuten"), 
	$('<option>', { 'value': '25' }).text("25 Minuten")
	
	]);
	
	var AuswahlUeberwachungVorlagenIndexSelectorID = $('<select>', { 'class': 'form-control AuswahlUeberwachungVorlagenIndexSelectorID' });
	ShortcutCurrentNameIDUeberwachung = [];
	shortcutsGetIDUeberwachung(shortcutsSettings);
	ShortcutCurrentNameIDUeberwachung.forEach(function(item){
		var a = item.label;
		var b;
		b = a.split(" || ")[1];
		AuswahlUeberwachungVorlagenIndexSelectorID.append([
		$('<option>', { 'value': b }).text(item.label)
	
		]);
	});
	
	var AuswahlUeberwachungVorlagenIndexSelectorID2 = $('<select>', { 'class': 'form-control AuswahlUeberwachungVorlagenIndexSelectorID2' });
	ShortcutCurrentNameIDUeberwachung2 = [];
	shortcutsGetIDUeberwachung2(shortcutsSettings);
	ShortcutCurrentNameIDUeberwachung2.forEach(function(item){
		var a = item.label;
		var b;
		b = a.split(" || ")[1];
		AuswahlUeberwachungVorlagenIndexSelectorID2.append([
		$('<option>', { 'value': b }).text(item.label)
	
		]);
	});
	
	var AuswahlUeberwachungVorlagenIndexSelectorID3 = $('<select>', { 'class': 'form-control AuswahlUeberwachungVorlagenIndexSelectorID3' });
	ShortcutCurrentNameIDUeberwachung3 = [];
	shortcutsGetIDUeberwachung3(shortcutsSettings);
	ShortcutCurrentNameIDUeberwachung3.forEach(function(item){
		var a = item.label;
		var b;
		b = a.split(" || ")[1];
		AuswahlUeberwachungVorlagenIndexSelectorID3.append([
		$('<option>', { 'value': b }).text(item.label)
	
		]);
	});
	
	var AuswahlUeberwachungVorlagenIndexSelectorID4 = $('<select>', { 'class': 'form-control AuswahlUeberwachungVorlagenIndexSelectorID4' });
	ShortcutCurrentNameIDUeberwachung4 = [];
	shortcutsGetIDUeberwachung4(shortcutsSettings);
	ShortcutCurrentNameIDUeberwachung4.forEach(function(item){
		var a = item.label;
		var b;
		b = a.split(" || ")[1];
		AuswahlUeberwachungVorlagenIndexSelectorID4.append([
		$('<option>', { 'value': b }).text(item.label)
	
		]);
	});
	
	var AuswahlUeberwachungVorlagenIndexInPartitionSelectorID = $('<select>', { 'class': 'form-control AuswahlUeberwachungVorlagenIndexInPartitionSelectorID' });
	ShortcutCurrentNameIDUeberwachungInnerIndex = [];
	shortcutsGetIDUeberwachungInnerIndex(shortcutsSettings, user_fast_shortcut_settings.AuswahlUeberwachungVorlagenIndexSelectorID);
	ShortcutCurrentNameIDUeberwachungInnerIndex.forEach(function(item){
		var a = item;
		var b;
		b = a.split(" || ")[1];
		AuswahlUeberwachungVorlagenIndexInPartitionSelectorID.append([
		$('<option>', { 'value': b }).text(item)
	
		]);
	});
	
	var AuswahlUeberwachungVorlagenIndexInPartitionSelectorID2 = $('<select>', { 'class': 'form-control AuswahlUeberwachungVorlagenIndexInPartitionSelectorID2' });
	ShortcutCurrentNameIDUeberwachungInnerIndex2 = [];
	shortcutsGetIDUeberwachungInnerIndex2(shortcutsSettings, user_fast_shortcut_settings.AuswahlUeberwachungVorlagenIndexSelectorID2);
	ShortcutCurrentNameIDUeberwachungInnerIndex2.forEach(function(item){
		var a = item;
		var b;
		b = a.split(" || ")[1];
		AuswahlUeberwachungVorlagenIndexInPartitionSelectorID2.append([
		$('<option>', { 'value': b }).text(item)
	
		]);
	});
	
	var AuswahlUeberwachungVorlagenIndexInPartitionSelectorID3 = $('<select>', { 'class': 'form-control AuswahlUeberwachungVorlagenIndexInPartitionSelectorID3' });
	ShortcutCurrentNameIDUeberwachungInnerIndex3 = [];
	shortcutsGetIDUeberwachungInnerIndex3(shortcutsSettings, user_fast_shortcut_settings.AuswahlUeberwachungVorlagenIndexSelectorID3);
	ShortcutCurrentNameIDUeberwachungInnerIndex3.forEach(function(item){
		var a = item;
		var b;
		b = a.split(" || ")[1];
		AuswahlUeberwachungVorlagenIndexInPartitionSelectorID3.append([
		$('<option>', { 'value': b }).text(item)
	
		]);
	});
	
	var AuswahlUeberwachungVorlagenIndexInPartitionSelectorID4 = $('<select>', { 'class': 'form-control AuswahlUeberwachungVorlagenIndexInPartitionSelectorID4' });
	ShortcutCurrentNameIDUeberwachungInnerIndex4 = [];
	shortcutsGetIDUeberwachungInnerIndex4(shortcutsSettings, user_fast_shortcut_settings.AuswahlUeberwachungVorlagenIndexSelectorID4);
	ShortcutCurrentNameIDUeberwachungInnerIndex4.forEach(function(item){
		var a = item;
		var b;
		b = a.split(" || ")[1];
		AuswahlUeberwachungVorlagenIndexInPartitionSelectorID4.append([
		$('<option>', { 'value': b }).text(item)
	
		]);
	});
	
	var AusbauStufeSelector = $('<select>', { 'class': 'form-control AusbauStufeSelector' });
	AusbauStufeSelector.append([
	$('<option>', { 'value': '1' }).text("1"), 
	$('<option>', { 'value': '2' }).text("2"),
	$('<option>', { 'value': '3' }).text("3"), 
	$('<option>', { 'value': '4' }).text("4"), 
	$('<option>', { 'value': '5' }).text("5"), 
	$('<option>', { 'value': '6' }).text("6"),
	$('<option>', { 'value': '7' }).text("7")
	]);
	
	var buffNameSöldnerSelector = $('<select>', { 'class': 'form-control buffNameSöldnerSelector' });
	buffNameSöldnerSelector.append([
	$('<option>', { 'value': 'Recruit' }).text("Rekruten Söldner"), 
	$('<option>', { 'value': 'Soldier' }).text("Soldaten Söldner"),
	$('<option>', { 'value': 'Bowman' }).text("Bogenschützen Söldner")
	
	]);

	html += utils.createTableRow([[6, '------------------------------------------------Auto AT Config--------------------------------------------'], [6, ""]]);
	html += utils.createTableRow([[6, 'AT Name - Auswahl für AutoAT Funktion'], [6, ATSelector.prop('outerHTML')]]);
	html += utils.createTableRow([[6, 'AT Index - Auswahl für AutoAT Funktion'], [6, ATSelectorID.prop('outerHTML')]]);
	html += utils.createTableRow([[6, 'AutoAT Rundenanzahl'], [6, RundenanzahlSelector.prop('outerHTML')]]);
	html += utils.createTableRow([[9, 'Kampfgeräusche beim AT Start/Ende'], [3, createSwitch('Kampfgeraeuschesound', user_fast_shortcut_settings.Kampfgeraeusche)]]);
	html += utils.createTableRow([[9, 'Hufeisen im AT buffen'], [3, createSwitch('Hufeisenbuffen', user_fast_shortcut_settings.Hufeisenbuffen)]]);
	html += utils.createTableRow([[6, 'Welches Hufeisen soll verwendet werden'], [6, buffNameHufeisenSelector.prop('outerHTML')]]);
	html += utils.createTableRow([[6, '-------------------------------------------------Wartezeiten-----------------------------------------------'], [6, ""]]);
	html += utils.createTableRow([[6, 'Wartezeit zwischen Vorlagen'], [6, WarteZeitZwischenVorlagenSelector.prop('outerHTML')]]);
	html += utils.createTableRow([[6, 'Wartezeit Genes ausm Stern holen'], [6, WarteZeitAusSternVersetzenSelector.prop('outerHTML')]]);
	html += utils.createTableRow([[6, 'Neustart von AT Automatik'], [6, WarteZeitZwischenATNeustartSelector.prop('outerHTML')]]);
	html += utils.createTableRow([[6, 'Genes zum AT schicken'], [6, WarteZeitZwischenATAutoStartSelector.prop('outerHTML')]]);
	html += utils.createTableRow([[6, 'Von Heimatinsel zum AT wechseln'], [6, WarteZeitZwischenInselswitchSelector.prop('outerHTML')]]);
	html += utils.createTableRow([[6, 'Überwachung starten im AT'], [6, WarteZeitZwischenAutomatikstartenimATSelector.prop('outerHTML')]]);
	html += utils.createTableRow([[6, 'Überwachung automatisch Queste beenden'], [6, WarteZeitZwischenQuestÜberwachungSelector.prop('outerHTML')]]);
	html += utils.createTableRow([[6, 'Von AT zur Heimatinsel wechseln'], [6, WarteZeitZwischenZurHeimatinselATEndeSelector.prop('outerHTML')]]);
	html += utils.createTableRow([[6, '------------------------------------------Vorlagen Überwachung---------------------------------------'], [6, ""]]);
	html += utils.createTableRow([[6, 'Lade Vorlagen automatisch alle x Minuten'], [6, WarteZeitZwischenVorlagenÜberwachungSelector.prop('outerHTML')]]);
	html += utils.createTableRow([[9, 'Entdecker Automatisierung (bei Client Start und x Minuten)'], [3, createSwitch('VorlagenUeberwachungEnt', user_fast_shortcut_settings.VorlagenUeberwachungEnt)]]);
	html += utils.createTableRow([[6, 'Vorlagen Partition Index Entdecker'], [6, AuswahlUeberwachungVorlagenIndexSelectorID.prop('outerHTML')]]);
	html += utils.createTableRow([[6, 'Vorlagen Index in Partition Entdecker'], [6, AuswahlUeberwachungVorlagenIndexInPartitionSelectorID.prop('outerHTML')]]);
	html += utils.createTableRow([[9, 'Geologen Automatisierung (bei Client Start und x Minuten)'], [3, createSwitch('VorlagenUeberwachungGeo', user_fast_shortcut_settings.VorlagenUeberwachungGeo)]]);
	html += utils.createTableRow([[6, 'Vorlagen Partition Index Geologen'], [6, AuswahlUeberwachungVorlagenIndexSelectorID2.prop('outerHTML')]]);
	html += utils.createTableRow([[6, 'Vorlagen Index in Partition Geologen'], [6, AuswahlUeberwachungVorlagenIndexInPartitionSelectorID2.prop('outerHTML')]]);
	html += utils.createTableRow([[9, 'Buffs Automatisierung (bei Client Start und x Minuten)'], [3, createSwitch('VorlagenUeberwachungBuffs', user_fast_shortcut_settings.VorlagenUeberwachungBuffs)]]);
	html += utils.createTableRow([[6, 'Vorlagen Partition Index Buffs'], [6, AuswahlUeberwachungVorlagenIndexSelectorID3.prop('outerHTML')]]);
	html += utils.createTableRow([[6, 'Vorlagen Index in Partition Buffs'], [6, AuswahlUeberwachungVorlagenIndexInPartitionSelectorID3.prop('outerHTML')]]);
	html += utils.createTableRow([[9, 'Sammelquest Automatisierung (Heimatinsel)'], [3, createSwitch('VorlagenUeberwachungQuests', user_fast_shortcut_settings.VorlagenUeberwachungQuests)]]);
	html += utils.createTableRow([[9, 'Gebäudeausbau Automatisierung (bei Client Start und x Minuten)'], [3, createSwitch('VorlagenUeberwachungAusbau', user_fast_shortcut_settings.VorlagenUeberwachungAusbau)]]);
	html += utils.createTableRow([[6, 'Vorlagen Partition Index Gebäudeausbau'], [6, AuswahlUeberwachungVorlagenIndexSelectorID4.prop('outerHTML')]]);
	html += utils.createTableRow([[6, 'Vorlagen Index in Partition Gebäudeausbau'], [6, AuswahlUeberwachungVorlagenIndexInPartitionSelectorID4.prop('outerHTML')]]);
	html += utils.createTableRow([[6, 'Maximale Ausbaustufe (einschließlich)'], [6, AusbauStufeSelector.prop('outerHTML')]]);
	html += utils.createTableRow([[6, '------------------------------------------Söldner buffen via Vorlage-----------------------------------'], [6, ""]]);
		html += utils.createTableRow([[9, 'Anleitung in der user_fast_shortcut.js beachten!'], [3, ""]]);
	html += utils.createTableRow([[9, 'Stern Söldner via Vorlagen zuweisen (GenesBeladen1337.txt)'], [3, createSwitch('SoeldnerStern', user_fast_shortcut_settings.SollBuffenImATSoeldner)]]);
	html += utils.createTableRow([[6, 'Welche Söldner soll verwendet werden'], [6, buffNameSöldnerSelector.prop('outerHTML')]]);
	html += utils.createTableRow([[6, '----------------------------------------------------DEBUG-------------------------------------------------'], [6, ""]]);
	html += utils.createTableRow([[9, '[DEV] Fehleranalyse über introinspector'], [3, createSwitch('debugAT', user_fast_shortcut_settings.debugAT)]]);
	html += utils.createTableRow([[9, '[DEV] AT/Buff Namen selber rausfinden über introinspector'], [3, createSwitch('debugPlayground', user_fast_shortcut_settings.debugPlayground)]]);
	html += utils.createTableRow([[9, '[DEV] Fehleranalyse Queste über introinspector'], [3, createSwitch('debugPlaygroundQuestNamen', user_fast_shortcut_settings.debugPlaygroundQuestNamen)]]);

	w.Body().html(html + '<div>');
	w.withBody('div.row').addClass('nohide');

	w.withBody('.ATAuswahl').val(user_fast_shortcut_settings.ATAuswahl).change(function(e) { user_fast_shortcut_settings.ATAuswahl = $(e.target).val(); });
	w.withBody('.ATAuswahlID').val(user_fast_shortcut_settings.ATAuswahlID).change(function(e) { user_fast_shortcut_settings.ATAuswahlID = $(e.target).val(); });
	w.withBody('.RundenanzahlSelector').val(user_fast_shortcut_settings.RundenanzahlSelector).change(function(e) { user_fast_shortcut_settings.RundenanzahlSelector = $(e.target).val(); });
	w.withBody('#Kampfgeraeuschesound').change(function(e) { user_fast_shortcut_settings.Kampfgeraeusche = $(e.target).is(':checked'); });
	w.withBody('#Hufeisenbuffen').change(function(e) { user_fast_shortcut_settings.Hufeisenbuffen = $(e.target).is(':checked'); });
	w.withBody('.buffNameHufeisenSelector').val(user_fast_shortcut_settings.buffNameHufeisenSelector).change(function(e) { user_fast_shortcut_settings.buffNameHufeisenSelector = $(e.target).val(); });
	w.withBody('.WarteZeitZwischenVorlagenSelector').val(user_fast_shortcut_settings.WarteZeitZwischenVorlagenSelector).change(function(e) { user_fast_shortcut_settings.WarteZeitZwischenVorlagenSelector = $(e.target).val(); });
	w.withBody('.WarteZeitAusSternVersetzenSelector').val(user_fast_shortcut_settings.WarteZeitAusSternVersetzenSelector).change(function(e) { user_fast_shortcut_settings.WarteZeitAusSternVersetzenSelector = $(e.target).val(); });
	w.withBody('.WarteZeitZwischenATNeustartSelector').val(user_fast_shortcut_settings.WarteZeitZwischenATNeustartSelector).change(function(e) { user_fast_shortcut_settings.WarteZeitZwischenATNeustartSelector = $(e.target).val(); });
	w.withBody('.WarteZeitZwischenATAutoStartSelector').val(user_fast_shortcut_settings.WarteZeitZwischenATAutoStartSelector).change(function(e) { user_fast_shortcut_settings.WarteZeitZwischenATAutoStartSelector = $(e.target).val(); });
	w.withBody('.WarteZeitZwischenInselswitchSelector').val(user_fast_shortcut_settings.WarteZeitZwischenInselswitchSelector).change(function(e) { user_fast_shortcut_settings.WarteZeitZwischenInselswitchSelector = $(e.target).val(); });
	w.withBody('.WarteZeitZwischenAutomatikstartenimATSelector').val(user_fast_shortcut_settings.WarteZeitZwischenAutomatikstartenimATSelector).change(function(e) { user_fast_shortcut_settings.WarteZeitZwischenAutomatikstartenimATSelector = $(e.target).val(); });
	w.withBody('.WarteZeitZwischenQuestÜberwachungSelector').val(user_fast_shortcut_settings.WarteZeitZwischenQuestÜberwachungSelector).change(function(e) { user_fast_shortcut_settings.WarteZeitZwischenQuestÜberwachungSelector = $(e.target).val(); });
	w.withBody('.WarteZeitZwischenZurHeimatinselATEndeSelector').val(user_fast_shortcut_settings.WarteZeitZwischenZurHeimatinselATEndeSelector).change(function(e) { user_fast_shortcut_settings.WarteZeitZwischenZurHeimatinselATEndeSelector = $(e.target).val(); });
	w.withBody('#VorlagenUeberwachungEnt').change(function(e) { user_fast_shortcut_settings.VorlagenUeberwachungEnt = $(e.target).is(':checked'); });
	w.withBody('.WarteZeitZwischenVorlagenÜberwachungSelector').val(user_fast_shortcut_settings.WarteZeitZwischenVorlagenÜberwachungSelector).change(function(e) { user_fast_shortcut_settings.WarteZeitZwischenVorlagenÜberwachungSelector = $(e.target).val(); });
	w.withBody('.AuswahlUeberwachungVorlagenIndexSelectorID').val(user_fast_shortcut_settings.AuswahlUeberwachungVorlagenIndexSelectorID).change(function(e) { user_fast_shortcut_settings.AuswahlUeberwachungVorlagenIndexSelectorID = $(e.target).val(); onlyoncesetting = false; FastShortcutSettingsHandler(); onlyoncesetting = true;});
	w.withBody('.AuswahlUeberwachungVorlagenIndexInPartitionSelectorID').val(user_fast_shortcut_settings.AuswahlUeberwachungVorlagenIndexInPartitionSelectorID).change(function(e) { user_fast_shortcut_settings.AuswahlUeberwachungVorlagenIndexInPartitionSelectorID = $(e.target).val(); });
	w.withBody('#VorlagenUeberwachungGeo').change(function(e) { user_fast_shortcut_settings.VorlagenUeberwachungGeo = $(e.target).is(':checked'); });
	w.withBody('.AuswahlUeberwachungVorlagenIndexSelectorID2').val(user_fast_shortcut_settings.AuswahlUeberwachungVorlagenIndexSelectorID2).change(function(e) { user_fast_shortcut_settings.AuswahlUeberwachungVorlagenIndexSelectorID2 = $(e.target).val(); onlyoncesetting = false; FastShortcutSettingsHandler(); onlyoncesetting = true;});
	w.withBody('.AuswahlUeberwachungVorlagenIndexInPartitionSelectorID2').val(user_fast_shortcut_settings.AuswahlUeberwachungVorlagenIndexInPartitionSelectorID2).change(function(e) { user_fast_shortcut_settings.AuswahlUeberwachungVorlagenIndexInPartitionSelectorID2 = $(e.target).val(); });
	w.withBody('#VorlagenUeberwachungBuffs').change(function(e) { user_fast_shortcut_settings.VorlagenUeberwachungBuffs = $(e.target).is(':checked'); });
	w.withBody('.AuswahlUeberwachungVorlagenIndexSelectorID3').val(user_fast_shortcut_settings.AuswahlUeberwachungVorlagenIndexSelectorID3).change(function(e) { user_fast_shortcut_settings.AuswahlUeberwachungVorlagenIndexSelectorID3 = $(e.target).val(); onlyoncesetting = false; FastShortcutSettingsHandler(); onlyoncesetting = true;});
	w.withBody('.AuswahlUeberwachungVorlagenIndexInPartitionSelectorID3').val(user_fast_shortcut_settings.AuswahlUeberwachungVorlagenIndexInPartitionSelectorID3).change(function(e) { user_fast_shortcut_settings.AuswahlUeberwachungVorlagenIndexInPartitionSelectorID3 = $(e.target).val(); });
	w.withBody('#VorlagenUeberwachungQuests').change(function(e) { user_fast_shortcut_settings.VorlagenUeberwachungQuests = $(e.target).is(':checked'); });
	w.withBody('.AuswahlUeberwachungVorlagenIndexSelectorID4').val(user_fast_shortcut_settings.AuswahlUeberwachungVorlagenIndexSelectorID4).change(function(e) { user_fast_shortcut_settings.AuswahlUeberwachungVorlagenIndexSelectorID4 = $(e.target).val(); onlyoncesetting = false; FastShortcutSettingsHandler(); onlyoncesetting = true;});
	w.withBody('.AuswahlUeberwachungVorlagenIndexInPartitionSelectorID4').val(user_fast_shortcut_settings.AuswahlUeberwachungVorlagenIndexInPartitionSelectorID4).change(function(e) { user_fast_shortcut_settings.AuswahlUeberwachungVorlagenIndexInPartitionSelectorID4 = $(e.target).val(); });
	w.withBody('.AusbauStufeSelector').val(user_fast_shortcut_settings.AusbauStufeSelector).change(function(e) { user_fast_shortcut_settings.AusbauStufeSelector = $(e.target).val(); });
	w.withBody('#VorlagenUeberwachungAusbau').change(function(e) { user_fast_shortcut_settings.VorlagenUeberwachungAusbau = $(e.target).is(':checked'); });
	w.withBody('#SoeldnerStern').change(function(e) { user_fast_shortcut_settings.SollBuffenImATSoeldner = $(e.target).is(':checked'); });
	w.withBody('.buffNameSöldnerSelector').val(user_fast_shortcut_settings.buffNameSöldnerSelector).change(function(e) { user_fast_shortcut_settings.buffNameSöldnerSelector = $(e.target).val(); });
	w.withBody('#debugAT').change(function(e) { user_fast_shortcut_settings.debugAT = $(e.target).is(':checked'); });
	w.withBody('#debugPlayground').change(function(e) { user_fast_shortcut_settings.debugPlayground = $(e.target).is(':checked'); });
	w.withBody('#debugPlaygroundQuestNamen').change(function(e) { user_fast_shortcut_settings.debugPlaygroundQuestNamen = $(e.target).is(':checked'); });

    if(onlyoncesetting)
	{
		w.Footer().prepend($("<button>").attr({'class':"btn btn-primary pull-left"}).text(loca.GetText("LAB","Save")).click(function(){
		game.showAlert("Optionen gespeichert");
		settings.settings["FastShortcut"] = {};
		settings.store(user_fast_shortcut_settings, "FastShortcut");
		reloadScripts();
		//$.extend(user_fast_shortcut_settings, settings.read(null, "FastShortcut"));
		w.hide();
		}));
		onlyoncesetting = true;
	}
	w.show();
}

function shortcutsGetID(item)
{
	item.forEach(function(data, idx){
		idx = " || " +idx;
		if(/--s[0-9]+p--/.test(data)) {
			return;
		}

		var s = { label: data.name.replace(/_/g, "[UNDERSCORE]") + idx, mnemonicIndex: 0, items: [] };
		ShortcutCurrentNameID.push(s);
		//m.push(s);
		
	});			
}

function shortcutsGetIDUeberwachung(item)
{
	item.forEach(function(data, idx){
		idx = " || " +idx;
		if(/--s[0-9]+p--/.test(data)) {
			return;
		}

		var s = { label: data.name.replace(/_/g, "[UNDERSCORE]") + idx, mnemonicIndex: 0, items: [] };
		ShortcutCurrentNameIDUeberwachung.push(s);		
	});			
}

function shortcutsGetIDUeberwachung2(item)
{
	item.forEach(function(data, idx){
		idx = " || " +idx;
		if(/--s[0-9]+p--/.test(data)) {
			return;
		}

		var s = { label: data.name.replace(/_/g, "[UNDERSCORE]") + idx, mnemonicIndex: 0, items: [] };
		ShortcutCurrentNameIDUeberwachung2.push(s);		
	});			
}

function shortcutsGetIDUeberwachung3(item)
{
	item.forEach(function(data, idx){
		idx = " || " +idx;
		if(/--s[0-9]+p--/.test(data)) {
			return;
		}

		var s = { label: data.name.replace(/_/g, "[UNDERSCORE]") + idx, mnemonicIndex: 0, items: [] };
		ShortcutCurrentNameIDUeberwachung3.push(s);		
	});			
}

function shortcutsGetIDUeberwachung4(item)
{
	item.forEach(function(data, idx){
		idx = " || " +idx;
		if(/--s[0-9]+p--/.test(data)) {
			return;
		}

		var s = { label: data.name.replace(/_/g, "[UNDERSCORE]") + idx, mnemonicIndex: 0, items: [] };
		ShortcutCurrentNameIDUeberwachung4.push(s);		
	});			
}

function shortcutsGetIDUeberwachungInnerIndex(item, idxx)
{
	var Inneritem = item;
	
	Inneritem.forEach(function(data, idx){
		if(/--s[0-9]+p--/.test(data)) {
			
			return;
		}
		if(idx == idxx)
		{
			data.items.forEach(function(i, index) {
					var label = "{0}. [{1}] {2} {3}".format(
							index,
							shortcutsTypesLang[shortcutsStripType(i[0])[1]], i[1] == null ? shortcutsStripType(i[0])[0].split("\\").pop().replace(/_/g, "[UNDERSCORE]") : i[1].replace(/_/g, "[UNDERSCORE]"),
							idx
						);
						ShortcutCurrentNameIDUeberwachungInnerIndex.push(label + " || " + index);
				});	
		}		
	});
}

function shortcutsGetIDUeberwachungInnerIndex2(item, idxx)
{
	var Inneritem = item;
	
	Inneritem.forEach(function(data, idx){
		if(/--s[0-9]+p--/.test(data)) {
			
			return;
		}
		if(idx == idxx)
		{
			data.items.forEach(function(i, index) {
					var label = "{0}. [{1}] {2} {3}".format(
							index,
							shortcutsTypesLang[shortcutsStripType(i[0])[1]], i[1] == null ? shortcutsStripType(i[0])[0].split("\\").pop().replace(/_/g, "[UNDERSCORE]") : i[1].replace(/_/g, "[UNDERSCORE]"),
							idx
						);
						ShortcutCurrentNameIDUeberwachungInnerIndex2.push(label + " || " + index);
				});	
		}		
	});
}

function shortcutsGetIDUeberwachungInnerIndex3(item, idxx)
{
	var Inneritem = item;
	
	Inneritem.forEach(function(data, idx){
		if(/--s[0-9]+p--/.test(data)) {
			
			return;
		}
		if(idx == idxx)
		{
			data.items.forEach(function(i, index) {
					var label = "{0}. [{1}] {2} {3}".format(
							index,
							shortcutsTypesLang[shortcutsStripType(i[0])[1]], i[1] == null ? shortcutsStripType(i[0])[0].split("\\").pop().replace(/_/g, "[UNDERSCORE]") : i[1].replace(/_/g, "[UNDERSCORE]"),
							idx
						);
						ShortcutCurrentNameIDUeberwachungInnerIndex3.push(label + " || " + index);
				});	
		}		
	});
}

function shortcutsGetIDUeberwachungInnerIndex4(item, idxx)
{
	var Inneritem = item;
	
	Inneritem.forEach(function(data, idx){
		if(/--s[0-9]+p--/.test(data)) {
			
			return;
		}
		if(idx == idxx)
		{
			data.items.forEach(function(i, index) {
					var label = "{0}. [{1}] {2} {3}".format(
							index,
							shortcutsTypesLang[shortcutsStripType(i[0])[1]], i[1] == null ? shortcutsStripType(i[0])[0].split("\\").pop().replace(/_/g, "[UNDERSCORE]") : i[1].replace(/_/g, "[UNDERSCORE]"),
							idx
						);
						ShortcutCurrentNameIDUeberwachungInnerIndex4.push(label + " || " + index);
				});	
		}		
	});
}

////////////////////////////////////////////////////////////////////////
////////Gebäude Ausbau - In Zusammenarbeit mit Test_Siedler#3694////////
////////////////////////////////////////////////////////////////////////

function SearchArchitecturesHandler(event) {
    $('div[role="dialog"]:not(#searchArchitecturesModal):visible').modal('hide');
    if (!_searchArchitecturesViewerModalInitialized)
        $('#searchArchitecturesModal').remove();
    createModalWindow('searchArchitecturesModal', loca.GetText("ALT","UpgradeBuilding"));
	
	building_newTemplates = new SaveLoadTemplate('upg', function(data, name) {
			$("#searchArchitecturesModal .templateFile").html("{0} ({1}: {2})".format('&nbsp;'.repeat(5), loca.GetText("LAB", "AvatarCurrentSelection"), name));
			buildingArrayLoad = data;
			var buildingList = _getArchitecturesList();
			var keys = Object.keys(buildingList);
			keys.sort().forEach(function (key) {	
			buildingList[key].forEach(function (item) {
			var isGridInArray = false;
			for (var i = 0; i < buildingArrayLoad.length; i++) {
				if (buildingArrayLoad[i] === item.grid) {
					isGridInArray = true;
					break;
				}
			} 
			if (isGridInArray) {
				$('#_upgrade_' + item.building.GetGrid()).prop('checked', true);
				if (isGridInArray) {
					$('#_upgrade_' + item.building.GetGrid()).prop('checked', true);
					if (buildingArray.indexOf(item.building) === -1) {
						buildingArray.push(item.building);
					}
				}	
			}			
        });
    });
		});
	
    $('#searchArchitecturesModal .modal-header').append(
        '<br><div class="container-fluid" id="searchArchitecturesSelectLevel"><b>'+loca.GetText("LAB","Filter")+':</b>&emsp; </div>');
    for (i = 1; i <= MAXLEVEL; i++) {
        $('<label><input type="radio" name="searchArchitecturesRadio" value={0}> &thinsp;{1}&emsp; </label>'.format(
            i, (i < MAXLEVEL ? i : i + '+')
        )).appendTo('#searchArchitecturesSelectLevel');
    }
    $('<label><input type="radio" name="searchArchitecturesRadio"  value={0}> &thinsp;{1}&emsp; </label>'.format(
        ALLLEVELS, loca.GetText("LAB","All")
    )).appendTo('#searchArchitecturesSelectLevel');
	$('#searchArchitecturesModal .modal-header').append(
        '<br><div class="container-fluid" id="searchArchitecturesSelectLevel2"><b>Max '+ loca.GetText("ALT","UpgradeBuilding") + ' ' + loca.GetText("LAB","GuildLevel") + ' (' +loca.GetText("QUL","GuiDaiAllTheShinyRoadsSub4") + ')' +':</b>&emsp; </div>');
    for (i = 1; i <= MAXLEVEL2; i++) {
        $('<label><input type="radio" name="searchArchitecturesRadio2" value={0}> &thinsp;{1}&emsp; </label>'.format(
            i, (i < MAXLEVEL2 ? i : i)
        )).appendTo('#searchArchitecturesSelectLevel2');
    }
	$('input[name="searchArchitecturesRadio2"][value=' + maxUpgradeLevelUI + ']').prop('checked', true);
    $('input[name="searchArchitecturesRadio2"]').click(function () {
        maxUpgradeLevelUI = $(this).val();
		user_building_extension_settings.maxUpgradeLevelSetting = maxUpgradeLevelUI;
		settings.settings['UpgradeBuilding'] = {};
		settings.store(user_building_extension_settings, 'UpgradeBuilding');
		//game.showAlert(maxUpgradeLevelUI);
    });
	
    $('#searchArchitecturesModal .modal-header').append(
        '<br><div class="container-fluid" id="searchArchitecturesSelectFound"><b>'+ loca.GetText("LAB","Search") + ':</b>&emsp;</div>'
    );
	
    $('<input>', {
        'type': 'text', 'id': 'searchArchitecturesFind', 'class': 'form-control',
        'style': 'display: inline;width: 300px;', 'value': searchString
    }).appendTo('#searchArchitecturesSelectFound');
    $('<label>&emsp</label>').appendTo('#searchArchitecturesSelectFound');
    $('<label><input type="checkbox" id="searchImprovableArchitecturesOnly"> &thinsp;'+ loca.GetText("LAB","Search") + ': '+ loca.GetText("ALT","UpgradeBuilding") + '&emsp; </label>'
    ).appendTo('#searchArchitecturesSelectFound');
    $('<label><input type="checkbox" id="searchDestroyableArchitecturesOnly"> &thinsp;'+ loca.GetText("LAB","Search") + ': '+ loca.GetText("HIL","Help_window_destroyable_mountains_0") + '&emsp; </label>'
    ).appendTo('#searchArchitecturesSelectFound');
    $('#searchArchitecturesModal .modal-header').append('<br><div class="container-fluid">' + createTableRow([
        [5, 'Name'],
        [3, 'Buff'],
        [1, ''],
        [2, 'Status'],
        [1, ''],
    ], true) + '</div>');
    $('#searchArchitecturesModal #searchArchitecturesFind').keyup(function (e) {
        searchString = $(e.target).val();
        if (!searchString || searchString == "") {
            $('#searchArchitecturesModalData .container-fluid div:hidden').show();
            return;
        }
        $('#searchArchitecturesModalData .container-fluid .row').each(function (i, item) {
            if ($(item.firstChild).text().toUpperCase().indexOf(searchString.toUpperCase()) == -1) {
                $(item).hide();
            } else {
                $(item).show();
            }
        });
    });
    $('input[name="searchArchitecturesRadio"][value=' + searchLevel + ']').prop('checked', true);
    $('input[name="searchArchitecturesRadio"]').click(function () {
        searchLevel = $(this).val();
        _updateArchitecturesModalData();
    });
    $('#searchImprovableArchitecturesOnly').prop('checked', improvableOnlyShow);
    $('#searchImprovableArchitecturesOnly').click(function () {
        improvableOnlyShow = $('#searchImprovableArchitecturesOnly').is(':checked');
        _updateArchitecturesModalData();
    });
    $('#searchDestroyableArchitecturesOnly').prop('checked', destroyableOnlyShow);
    $('#searchDestroyableArchitecturesOnly').click(function () {
        destroyableOnlyShow = $('#searchDestroyableArchitecturesOnly').is(':checked');
        _updateArchitecturesModalData();
    });
    _updateArchitecturesModalData();
    $('#searchArchitecturesModal:not(:visible)').modal({ backdrop: 'static' });

			$("#searchArchitecturesModal .modal-footer").prepend([
			$('<button>').attr({ "class": "btn btn-warning upgradeReset" }).text(getText('btn_reset')),
			$('<button>').attr({ "class": "btn btn-success upgradeSubmit" }).text(getText('btn_submit')),	
			]);
			
	if (expertFunction){
			$("#searchArchitecturesModal .modal-footer").prepend([
			$('<button>').attr({ "class": "btn btn-primary pull-left building_newSaveTemplate" }).text(getText('save_template')),
			$('<button>').attr({ "class": "btn btn-primary pull-left building_newLoadTemplate" }).text(getText('load_template'))
			]);		
	};
			
		$('#searchArchitecturesModal .upgradeReset').click(function() {
			buildingArray = [];
			buildingArraySave = [];
			buildingArrayLoad = [];
			_updateArchitecturesModalData();
		});
		$('#searchArchitecturesModal .upgradeSubmit').click(function() {
			$('#searchArchitecturesModal').modal('hide');

			if(buildingArray.length === 0)
			{
				//game.showAlert('buildingArray leer');
			}
			else if(buildingArray.length !== 0)
			{
				//game.showAlert('buildingArray nicht leer');
				setTimeout(function() {upgradeBuildingForClientArrayUI(buildingArray);},1000);		
			}			
		});
		$('#searchArchitecturesModal .building_newSaveTemplate').click(function(){ 
			buildingArraySave = [];
			$.each(buildingArray, function(i, building) {
				
				if (buildingArraySave.indexOf(building.GetGrid()) === -1) {
					buildingArraySave.push(building.GetGrid());
				}
				
			});
			building_newTemplates.save(buildingArraySave);
		});
		$('#searchArchitecturesModal .building_newLoadTemplate').click(function() { 
			building_newTemplates.load();
			
	
		});
		$("#searchArchitecturesModal .btnClose").click(function(e) { 
			buildingArray = [];
			buildingArraySave = [];
			buildingArrayLoad = [];
			$('#searchArchitecturesModal').modal('hide');
		});
}

function _updateArchitecturesModalData() {
    var buildingList = _getArchitecturesList();
    $('#searchArchitecturesModalData').html(_searchArchitecturesModal(buildingList));
    var keys = Object.keys(buildingList);
    keys.sort().forEach(function (key) {
        buildingList[key].forEach(function (item) {
            if (item.goto != '')
                document.getElementById('buildPOS_' + item.grid).addEventListener(
                    'click', function () { _buildingViewerGoTo(item.grid, item.building); }
                );
        });
    });
    $('#searchArchitecturesModalData .container-fluid .row').each(function (i, item) {
        if ($(item.firstChild).text().toUpperCase().indexOf(searchString.toUpperCase()) == -1) {
            $(item).hide();
        } else {
            $(item).show();
        }
    });
}

function _getArchitecturesList() {
    var buildingList = {};
    swmmo.application.mGameInterface.mCurrentPlayerZone.mStreetDataMap.mBuildingContainer.forEach(function (item) {
        if (item.isGarrison()) { return; }
        var isDestroyableMountain = item.IsDestroyableMountain();
        if (isDestroyableMountain != destroyableOnlyShow) { return; }
        var level = item.GetUIUpgradeLevel();
        if (!(searchLevel == MAXLEVEL && level >= MAXLEVEL || searchLevel == level || searchLevel == ALLLEVELS)) { return; }
        var grid = item.GetGrid();
        var buildingGoto = '';
        if (grid > 0)
            buildingGoto = getImageTag('accuracy.png', '24px', '24px').replace(
                '<img', '<img id="buildPOS_' + grid + '"'
            ).replace('style="', 'style="cursor: pointer;');
        var name = item.GetBuildingName_string();
        if (
            name.toUpperCase().indexOf('EW_') != -1 ||
            name.toUpperCase().indexOf('DECORATION_MOUNTAIN_PEAK') != -1 ||
            name.toUpperCase().indexOf('BANDITS') != -1
        ) { return; }
        var isUpgradeAllowed = item.IsUpgradeAllowed(true) && !isDestroyableMountain && !_findBuildingType(item, ['decoration', 'minimal', 'enemy']);
        if (improvableOnlyShow && !isUpgradeAllowed) { return; }
        var locName = loca.GetText('BUI', name);
        if (locName.indexOf(UNDEFINED_TEXT) >= 0) {
            locName = name;
        }
        if (buildingList[locName] === undefined) {
            buildingList[locName] = new Array();
        }
        buff = '';
        if (item.productionBuff != null) {
            buff = loca.GetText("RES", item.productionBuff.GetBuffDefinition().GetName_string());
        }
        buildingList[locName].push({
            'grid': grid,
            'name': name,
            'goto': buildingGoto,
            'locName': locName,
            'level': level,
            'building': item,
            'isWorking': item.IsProductionActive(),
            'isUpgradeInProgress': item.IsUpgradeInProgress(),
            'isUpgradeAllowed': isUpgradeAllowed,
            'buff': buff,
        });
    });
    return buildingList
}

function _buildingViewerGoTo(g, b) {
    try {
        $('#searchArchitecturesModal').modal('hide');
        swmmo.application.mGameInterface.mCurrentPlayerZone.ScrollToGrid(g);
        swmmo.application.mGameInterface.SelectBuilding(b)
    }
    catch (e) { }
}

function _findBuildingType(b, bTypes) {
    var panelClass = globalFlash.gui.GetInfoPanel(b.GetBuildingName_string());
    var className = window.runtime.flash.utils.getQualifiedClassName(panelClass);
    var found = false;
    for (t in buildingTypeInfoPanelMap) {
        if (bTypes.indexOf(t) >= 0){
            found = found || (className == 'GUI.GAME::{0}'.format(buildingTypeInfoPanelMap[t]));
        }
    }
    return found;
}

function _searchArchitecturesModal(buildingList) {
    var out = '<div class="container-fluid">';
    try {
        var keys = Object.keys(buildingList);
        keys.sort().forEach(function (key) {
            var buildingCount = buildingList[key].length,
                firstItem = buildingList[key][0],
                prefix = '&#9500',
                counter = 1;
            out += createTableRow([
                [12, '<b>' + firstItem.locName + '</b>' + (DEBUG ? ' <sup>' + firstItem.name + '</sup>' : '')],
            ]);
            buildingList[key].sort(_compareArchitecturesByLevel).forEach(function (item) {
                checkboxU = '<input type="checkbox" id="_upgrade_' +  item.building.GetGrid()  + '" />'.format(item.building);
                if (counter == buildingCount) {
                    prefix = '&#9492;';
                }
                itemStatus = '';
                if (!item.isWorking) {
                    itemStatus = 'Gestoppt';
                }
                if (item.isUpgradeInProgress) {
                    itemStatus = 'wird ausgebaut'
                }
                out += createTableRow([
                    [5, prefix + (itemStatus == '' ? '' : ' <span style="color:LightGray;font-style:italic;">') +
                        ' <sup>' + item.level + '</sup>&thinsp;' + item.locName + " (Grid: " +item.grid+")" + (itemStatus == '' ? '' : '</span>')
                    ],
                    [3, (itemStatus == '' ? ' ' : ' <span style="color:LightGray;font-style:italic;">') +
                        '<small>' + item.buff + '</small>' + (itemStatus == '' ? '' : '</span>')],
                    [1, item.isUpgradeAllowed ?  checkboxU : ''],
                    [2, '<span style="color:LightGray;font-style:italic;"><small>' + itemStatus + '</small></span>'],
                    [1, item.goto]
                ]);
                

				
				$(document).on('click', '#_upgrade_'+ item.building.GetGrid(), function () {
					var isChecked = $('#_upgrade_' + item.building.GetGrid()).prop('checked');

					if (buildingArray.indexOf(item.building) === -1 && isChecked) {
						buildingArray.push(item.building);
						
					}
					else if(buildingArray.indexOf(item.building) !== -1 && !isChecked)
					{
						var index = buildingArray.indexOf(item.building);
						buildingArray.splice(index, 1);
					}
				});

				counter++;
            });
        });
    } catch (e) {
        out += '<p>Error: ' + e + '/<p>';
    }
    out += '</div>';

    return out;
}


function _compareArchitecturesByLevel(a, b) {
    if (a.level < b.level) return -1;
    if (a.level > b.level) return 1;
    return 0;
}

function upgradeBuildingForClientArray(buildingArray_input) { 
	var x = new TimedQueue(1000);
	$.each(buildingArray_input, function(i, building) {
		var isUpgradeAllowed_tmp = building.IsUpgradeAllowed(true);
		if (building.GetUIUpgradeLevel() < maxUpgradeLevel && building.IsBuildingInProduction() ) {
			if (isUpgradeAllowed_tmp) {
				x.add(function() { 
					if (isUpgradeAllowed_tmp) {
						game.gi.SendServerAction(60,  0, building.GetGrid(), 0, null);
					};
				}); 
			};
		}
		
	});
	x.run();
	buildingArray_input = [];
	buildingArray = [];
	game.showAlert(getText('command_sent'));
}

function upgradeBuildingForClientArrayUI(buildingArray_input) { 
	var x = new TimedQueue(1000);
	$.each(buildingArray_input, function(i, building) {
		var isUpgradeAllowed_tmp = building.IsUpgradeAllowed(true);
		if (building.GetUIUpgradeLevel() < maxUpgradeLevelUI && building.IsBuildingInProduction() ) {
			if (isUpgradeAllowed_tmp) {
				x.add(function() { 
					if (isUpgradeAllowed_tmp) {
						game.gi.SendServerAction(60,  0, building.GetGrid(), 0, null);
					};
				}); 
			};
		}
		
	});
	x.run();
	buildingArray_input = [];
	buildingArray = [];
	game.showAlert(getText('command_sent'));
}

/////////////////////
////####DEBUG####////
/////////////////////
Playground2();
function Playground2()
{
	if(debugPlayground)
	{
		if(game.gi.mMouseCursor.mCurrentBuff != null)
		{
			air.Introspector.Console.log(game.gi.mMouseCursor.mCurrentBuff.GetBuffDefinition().GetName_string());
			air.Introspector.Console.log(game.gi.mMouseCursor.mCurrentBuff.GetResourceName_string());
			air.Introspector.Console.log(game.gi.mMouseCursor.mCurrentBuff.GetUniqueId());
		}
	}
	
	if(debugPlaygroundQuestNamen)
	{
		$.each(game.gi.mNewQuestManager.GetQuestPool().GetQuest_vector(), function(i, item) {
					air.Introspector.Console.log(item.GetQuestDefinition());
					air.Introspector.Console.log(item.GetQuestDefinition().specialType_string.toString());	
					air.Introspector.Console.log(item.GetQuestDefinition().questTriggers_vector.toString());
					air.Introspector.Console.log(item.GetQuestMode().toString());
				});
	}
}
