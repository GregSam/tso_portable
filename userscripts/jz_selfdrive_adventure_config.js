var Loner_1 = "63091";
var Loner_2 = "187526";
var Sylvana_1 = "127334";
var Sylvana_2 = "294792";
var Sylvana_3 = "855112";
var Sylvana_4 = "1055695";
var Major_1 = "64499";
var Major_2 = "64498";
var Major_3 = "149369";
var Major_4 = "261006";
var General_1 = "262";
var General_2 = "6365";
var General_3 = "589";
var General_4 = "6878";
var General_5 = "7155";
var General_6 = "39780";
var OGG_1 = "389191";
var OGG_2 = "3549972";
var OGG_3 = "";
var YGG_1 = "389488";
var YGG_2 = "483087";
var YGG_3 = "495320";
var YGG_4 = "527488";
var YGG_5 = "1647661";
var Quatermaster_1 = "65440";
var Quatermaster_2 = "65441";
var Claus_1 = "9898";
var Claus_2 = "29863";
var Claus_3 = "591850";
var Claus_4 = "619532";
var Ghost_1 = "483089";
var Ghost_2 = "";
var Ghost_3 = "";
var RG_1_Skills = "524888";
var RG_2_Skills = "536169";
var RG_3_Skills = "1631889";
var STF_1_BLK_1UP = "622987";
var STF_2_BLK_1UP = "623570";
var Frosty_1 = "591848";
var Frosty_2 = "619530";

TYPE_SantaGeneral = 27;

var adventures = {
	// "theBlackKnight": theBlackKnight,
	// "horseback_SYLV_2xYGG_A": horseback_SYLV_2xYGG_A,
	// "horseback_SYLV_2xYGG_B": horseback_SYLV_2xYGG_B,
	// "FirstThief": FirstThief,
	// "FirstThief_RG_A": FirstThief_RG_A,
	// "FirstThief_RG_B": FirstThief_RG_B,
	// "FirstThief_RG_Fast_A": FirstThief_RG_Fast_A,
	// "FirstThief_RG_Fast_B": FirstThief_RG_Fast_B,
	// "SecondThief": SecondThief,
	// "SecondThief_RG": SecondThief_RG,
	// "Woodcutter_A": Woodcutter_A,
	// "Woodcutter_B": Woodcutter_B,
	// "Woodcutter_Fast_A": Woodcutter_Fast_A,
	// "Woodcutter_Fast_B": Woodcutter_Fast_B,
	// "ArcticExplosion_A_Combined": ArcticExplosion_A_Combined,
	// "ArcticExplosion_B_Combined": ArcticExplosion_B_Combined,
	// "ArcticExplosion_C_RG_Combined": ArcticExplosion_C_RG_Combined,
	// "ArcticExplosion_D_RG_Combined": ArcticExplosion_D_RG_Combined,
	// "SurpriceAttack": SurpriceAttack,
	// "SurpriceAttackOGG": SurpriceAttackOGG,
	// "theSiege": theSiege,
	// "theSiegeP2": theSiegeP2,
	// "DarkPrists": DarkPrists,
	// "TikkiIsland": TikkiIsland,
	// "TheWhirlwind_P1_A": TheWhirlwind_P1_A,
	// "TheWhirlwind_P1_B": TheWhirlwind_P1_B,
	// "TheWhirlwind_P2_A": TheWhirlwind_P2_A,
	// "TheWhirlwind_P2_B": TheWhirlwind_P2_B,
	// "TheLostSkull_YGG1": TheLostSkull_YGG1,
	// "TheLostSkull_YGG2": TheLostSkull_YGG2,
	// "HorsebackYGGx2": HorsebackYGGx2,
	// "FRAN_Outlaws": FRAN_Outlaws,
	// "FRAN_Outlaws_center": FRAN_Outlaws_center,
	"JZ_SecludedExperiments": JZ_SecludedExperiments,
	// "VictorTheVictus_Silvana": VictorTheVictus_Silvana,
	// "VictorTheVictus_Silvana_2": VictorTheVictus_Silvana_2,
	// "TheValiantLittleTailor": TheValiantLittleTailor,
	// "TreasureOfWisdom_Silvana_Ghost": TreasureOfWisdom_Silvana_Ghost,
	// "TreasureOfKnowlage_RG_SYLV_GHOST": TreasureOfKnowlage_RG_SYLV_GHOST,
	"SindbadAndBesiegedCity_RG_SYLV_GHOST": SindbadAndBesiegedCity_RG_SYLV_GHOST,
	// "RoaringBull_A": RoaringBull_A,
	"SeaSnake": SeaSnake,
	// "OneStepAhead": OneStepAhead,
	"Outlaws_NoLoss_A": Outlaws_NoLoss_A,
	// "Outlaws_NoLoss_B": Outlaws_NoLoss_B,
	"BonabertiBuisness_A": BonabertiBuisness_A,
	// "TheDarkPriest_JZ_B": TheDarkPriest_JZ_B,
	// "AlladinPrincess_A": AlladinPrincess,
}

var delayExecutions = {
	"ArcticExplosion_A_Combined": ArcticExplosion_A_Execution,
	"ArcticExplosion_B_Combined": ArcticExplosion_B_Execution,
	"Woodcutter_A": Woodcutter_RG_Execution,
	"Woodcutter_B": Woodcutter_RG_Execution,
	"horseback_SYLV_2xYGG_A": horseback_SYLV_2xYGG_Execution,
	"horseback_SYLV_2xYGG_B": horseback_SYLV_2xYGG_Execution,
	"ArcticExplosion_C_RG_Combined": ArcticExplosion_CD_Execution,
	"ArcticExplosion_D_RG_Combined": ArcticExplosion_CD_Execution
}

var ArcticExplosion_A_Combined = {
	"01": {
		"127334.0":{"grid":5213,"name":"General Sylvana 1</b>","order":0,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Recruit":51,"Crossbowman":144},"type":57,"target":4803,"targetName":"Nords Camp (medium)"},
		"64499.0":{"grid":3178,"name":"Major 1 (Major General) ","order":2,"time":1000,"skills":{"3":1,"6":3,"11":3,"14":3},"army":{"Militia":57,"EliteSoldier":1,"Crossbowman":212},"type":13,"target":2634,"targetName":"Nords Camp (hard)"},
        "63091.0":{"grid":6239,"name":"Loner_1-Skills (Loner General) ","order":0,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":2,"9":3,"11":3,"12":3,"19":1},"army":{"Recruit":80,"Cavalry":20,"Crossbowman":145},"type":67,"target":5090,"targetName":"Nords Camp (hard)"}},
    "02": {"64499.0":{"grid":3178,"name":"Major 1 (Major General) ","order":1,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Cavalry":140,"Crossbowman":130},"type":13,"target":2288,"targetName":"Nords Camp (medium)"}},
    "03": {"64498.0":{"grid":5416,"name":"Major 2 (Major General) ","order":1,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":100,"EliteSoldier":1,"Crossbowman":169},"type":13,"target":3992,"targetName":"Nords Camp (leader)"}},
    "04": {"63091.0":{"grid":6239,"name":"Loner_1-Skills (Loner General) ","order":0,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":2,"9":3,"11":3,"12":3,"19":1},"army":{"Recruit":90,"Crossbowman":155},"type":67,"target":7256,"targetName":"Nords Camp (hard)"}},
	"05": {"127334.0":{"grid":2549,"name":"General Sylvana 1</b>","order":0,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Militia":23,"EliteSoldier":1,"Cavalry":50,"Crossbowman":106},"type":57,"target":2002,"targetName":"Nords Camp (medium)"}},
}

var ArcticExplosion_A_Execution = [
    { "name": "pick up collectables", "action": createActionWithoutParameters(shortcutsPickupAll), "timeToNextStep": 1 },
	{ "name": "Return Generals to star menu 25s", "action": createActionWithoutParameters(shortcutsReturnAll), "timeToNextStep": 40000 },
	{ "name": "Move Quatermaster 1s", "action": createActionWithParameters(jzv2_moveGeneralToGrid, ["65440.0", "2756"]), "timeToNextStep": 2000 },
	{ "name": "att03 Load 1s","action": createActionWithParameters(jzv2_regroupGeneralByAttackId, ["03"]),"timeToNextStep": 2000},
	{ "name": "att03 Move 1s", "action": createActionWithParameters(jzv2_moveGeneralByAttackId, ["03"]), "timeToNextStep": 2000 },
	{ "name": "att01 Load 1s", "action": createActionWithParameters(jzv2_regroupGeneralByAttackId, ["01"]), "timeToNextStep": 2000},
	{ "name": "att01 Move 30s", "action": createActionWithParameters(jzv2_moveGeneralByAttackId, ["01"]), "timeToNextStep": 31000 },
	{ "name": "att01 Attack 70s", "action": createActionWithParameters(jzv2_attackCampByAttackId, ["01"]), "timeToNextStep": 71*1000 },
	{ "name": "att03 Attack 15s","action": createActionWithParameters(jzv2_attackCampByAttackId, ["03"]),"timeToNextStep": 14*1000},
	{ "name": "att05 To Star 20s","action": createActionWithParameters(jzv2_toStarByAttackId, ["05"]),"timeToNextStep": 14*1000},
	{ "name": "att02 Load 5s","action": createActionWithParameters(jzv2_regroupGeneralByAttackId, ["02"]),"timeToNextStep": 5000},
	{ "name": "att02 Attack 1s","action": createActionWithParameters(jzv2_attackCampByAttackId, ["02"]),"timeToNextStep": 6*1000}, // 2:40
	{ "name": "att05 Load units 1s","action": createActionWithParameters(jzv2_regroupGeneralByAttackId, ["05"]),"timeToNextStep": 2*1000}, //2:45
	{ "name": "att05 Move 30s","action": createActionWithParameters(jzv2_moveGeneralByAttackId, ["05"]),"timeToNextStep": 31*1000}, // 2:46
	{ "name": "att05 Attack 20s","action": createActionWithParameters(jzv2_attackCampByAttackId, ["05"]),"timeToNextStep": 16*1000}, // 3:15
	{ "name": "att04 Load 5s","action": createActionWithParameters(jzv2_regroupGeneralByAttackId, ["04"]),"timeToNextStep": 6*1000}, //3:35
	{ "name": "att04 Attack 1s","action": createActionWithParameters(jzv2_attackCampByAttackId, ["04"]),"timeToNextStep": 15*1000},

    {"action": createActionWithoutParameters(jz_loadRemainingArmy), "name": "Load remaining army to quatermaster 1s", "timeToNextStep": 11*1000},
    {"name": "handle questbook", "action": createActionWithoutParameters(jz_handleQuestBook), "timeToNextStep": 1*1000},
];

var ArcticExplosion_B_Combined = {
	"01": {
		"294792.0":{"grid":5213,"name":"General Sylvana 2</b>","order":0,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Recruit":51,"Crossbowman":144},"type":57,"target":4803,"targetName":"Nords Camp (medium)"},
		"149369.0":{"grid":3178,"name":"Major 3 (Major General) ","order":2,"time":1000,"skills":{"3":1,"6":3,"11":3,"14":3},"army":{"Militia":57,"EliteSoldier":1,"Crossbowman":212},"type":13,"target":2634,"targetName":"Nords Camp (hard)"},
        "187526.0":{"grid":6239,"name":"Loner_2-Skills (Loner General) ","order":0,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":2,"9":3,"11":3,"12":3,"19":1},"army":{"Recruit":80,"Cavalry":20,"Crossbowman":145},"type":67,"target":5090,"targetName":"Nords Camp (hard)"}},
	"02": {"149369.0":{"grid":3178,"name":"Major 3 (Major General) ","order":1,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Cavalry":140,"Crossbowman":130},"type":13,"target":2288,"targetName":"Nords Camp (medium)"}},
	"03": {"261006.0":{"grid":5416,"name":"Major 4 (Major General) ","order":1,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":100,"EliteSoldier":1,"Crossbowman":169},"type":13,"target":3992,"targetName":"Nords Camp (leader)"}},
    "04": {"187526.0":{"grid":6239,"name":"Loner_2-Skills (Loner General) ","order":0,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":2,"9":3,"11":3,"12":3,"19":1},"army":{"Recruit":90,"Crossbowman":155},"type":67,"target":7256,"targetName":"Nords Camp (hard)"}},
	"05": {"294792.0":{"grid":2549,"name":"General Sylvana 2</b>","order":0,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Militia":23,"EliteSoldier":1,"Cavalry":50,"Crossbowman":106},"type":57,"target":2002,"targetName":"Nords Camp (medium)"}},
}

var ArcticExplosion_B_Execution = [
    { "action": createActionWithoutParameters(shortcutsPickupAll), "name": "pick up collectables", "timeToNextStep": 1 },
	{ "action": createActionWithoutParameters(shortcutsReturnAll), "name": "Return Generals to star menu 25s", "timeToNextStep": 40000 },
	{ "action": createActionWithParameters(jzv2_regroupGeneralByAttackId, ["01"]), "timeToNextStep": 2000, "name": "Load units 2s" }, // attack 01
	{ "action": createActionWithParameters(jzv2_moveGeneralToGrid, ["65441.0", "2756"]), "timeToNextStep": 2000, "name": "Move generals to position 30s" },
	{ "name": "att03 Load 1s",      "action": createActionWithParameters(jzv2_regroupGeneralByAttackId, ["03"]),"timeToNextStep": 2000},
	{ "name": "att03 Move 1s",      "action": createActionWithParameters(jzv2_moveGeneralByAttackId, ["03"]), "timeToNextStep": 2000 },
	{ "name": "att01 Load 1s",      "action": createActionWithParameters(jzv2_regroupGeneralByAttackId, ["01"]), "timeToNextStep": 2000},
	{ "name": "att01 Move 30s",     "action": createActionWithParameters(jzv2_moveGeneralByAttackId, ["01"]), "timeToNextStep": 31000 },
	{ "name": "att01 Attack 70s",   "action": createActionWithParameters(jzv2_attackCampByAttackId, ["01"]), "timeToNextStep": 71*1000 },
	{ "name": "att03 Attack 15s",   "action": createActionWithParameters(jzv2_attackCampByAttackId, ["03"]),"timeToNextStep": 14*1000},
	{ "name": "att05 To Star 20s",  "action": createActionWithParameters(jzv2_toStarByAttackId, ["05"]),"timeToNextStep": 14*1000},
	{ "name": "att02 Load 5s",      "action": createActionWithParameters(jzv2_regroupGeneralByAttackId, ["02"]),"timeToNextStep": 6000},
	{ "name": "att02 Attack 1s",    "action": createActionWithParameters(jzv2_attackCampByAttackId, ["02"]),"timeToNextStep": 6*1000}, // 2:40
	{ "name": "att05 Load units 1s","action": createActionWithParameters(jzv2_regroupGeneralByAttackId, ["05"]),"timeToNextStep": 2*1000}, //2:45
	{ "name": "att05 Move 30s",     "action": createActionWithParameters(jzv2_moveGeneralByAttackId, ["05"]),"timeToNextStep": 31*1000}, // 2:46
	{ "name": "att05 Attack 20s",   "action": createActionWithParameters(jzv2_attackCampByAttackId, ["05"]),"timeToNextStep": 16*1000}, // 3:15
	{ "name": "att04 Load 5s",      "action": createActionWithParameters(jzv2_regroupGeneralByAttackId, ["04"]),"timeToNextStep": 6*1000}, //3:35
	{ "name": "att04 Attack 1s",    "action": createActionWithParameters(jzv2_attackCampByAttackId, ["04"]),"timeToNextStep": 15*1000},
    { "name": "Load remaining army to quatermaster 1s", "action": createActionWithoutParameters(jz_loadRemainingArmy), "timeToNextStep": 11*1000},
    {"name": "handle questbook", "action": createActionWithoutParameters(jz_handleQuestBook), "timeToNextStep": 1*1000},
];

var ArcticExplosion_C_RG_Combined = {
	"01": {
		"622987.0":{"grid":6376,"name":"<b>STF_1_BLK_1UP</b> <font size='-3'>(Steadfast General)</font>","order":7,"time":3000,"skills":{"1":2,"6":3,"7":3,"10":3,"11":3,"12":3,"14":3,"16":1},"army":{"Crossbowman":1},"type":52,"target":5090,"targetName":"Nords Camp (hard)"},
		"389488.0":{"grid":3315,"name":"<b>YGG_1_1UP</b> <font size='-3'>(Younger Gemini General)</font>","order":0,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":1},"type":50,"target":2634,"targetName":"Nords Camp (hard)"},
		"483087.0":{"grid":6510,"name":"<b>YGG_2_1UP</b> <font size='-3'>(Younger Gemini General)</font>","order":6,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":1},"type":50,"target":7256,"targetName":"Nords Camp (hard)"},
		"127334.0":{"grid":5213,"name":"General Sylvana 1</b>","order":0,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Recruit":51,"Crossbowman":144},"type":57,"target":4803,"targetName":"Nords Camp (medium)"},
		"63091.0":{"grid":6239,"name":"Loner_1-Skills (Loner General) ","order":0,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":2,"9":3,"11":3,"12":3,"19":1},"army":{"Recruit":80,"Cavalry":20,"Crossbowman":145},"type":67,"target":5090,"targetName":"Nords Camp (hard)"},
		"64499.0":{"grid":3178,"name":"Major 1 (Major General) ","order":1,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Cavalry":140,"Crossbowman":130},"type":13,"target":2288,"targetName":"Nords Camp (medium)"},
		"855112.0":{"grid":2549,"name":"General Sylvana 3</b>","order":0,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Militia":23,"EliteSoldier":1,"Cavalry":50,"Crossbowman":121},"type":57,"target":2002,"targetName":"Nords Camp (medium)"},
		},
	"02": {
		"591848.0":{"grid":5350,"name":"<b>Frosty_01</b> <font size='-3'>(Frosty General)</font>","order":0,"time":5000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"14":3},"army":{"Crossbowman":1},"type":64,"target":3992,"targetName":"Nords Camp (leader)"},
		"389488.0":{"grid":3315,"name":"<b>YGG_1_1UP</b> <font size='-3'>(Younger Gemini General)</font>","order":0,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":1},"type":50,"target":2634,"targetName":"Nords Camp (hard)"},
		"524888.0":{"grid":3452,"name":"<b>RG_1_Skills</b> <font size='-3'>(Resolute General)</font>","order":1,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Recruit":45,"Crossbowman":170},"type":79,"target":2634,"targetName":"Nords Camp (hard)"},
		"483089.0":{"grid":6306,"name":"<b>Ghost_2_TR_WW</b> <font size='-3'>(Ghost General)</font>","order":0,"time":1000,"skills":{"3":3,"6":3,"8":3,"11":3,"12":3,"14":3,"15":3},"army":{"Recruit":50,"Crossbowman":180},"type":63,"target":7256,"targetName":"Nords Camp (hard)"},
		"483087.0":{"grid":6510,"name":"<b>YGG_2_1UP</b> <font size='-3'>(Younger Gemini General)</font>","order":6,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":1},"type":50,"target":7256,"targetName":"Nords Camp (hard)"},
		"64498.0":{"grid":5416,"name":"Major 2 (Major General) ","order":1,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":100,"EliteSoldier":1,"Crossbowman":169},"type":13,"target":3992,"targetName":"Nords Camp (leader)"},
	},
}

var ArcticExplosion_D_RG_Combined = {
	"01": {
		"623570.0":{"grid":6376,"name":"<b>STF_2_BLK_1UP</b> <font size='-3'>(Steadfast General)</font>","order":7,"time":3000,"skills":{"1":2,"6":3,"7":3,"10":3,"11":3,"12":3,"14":3,"16":1},"army":{"Crossbowman":1},"type":52,"target":5090,"targetName":"Nords Camp (hard)"},
		"495320.0":{"grid":3315,"name":"<b>YGG_3_1UP</b> <font size='-3'>(Younger Gemini General)</font>","order":0,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":1},"type":50,"target":2634,"targetName":"Nords Camp (hard)"},
		"527488.0":{"grid":6510,"name":"<b>YGG_4_1UP</b> <font size='-3'>(Younger Gemini General)</font>","order":6,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":1},"type":50,"target":7256,"targetName":"Nords Camp (hard)"},
		"294792.0":{"grid":5213,"name":"General Sylvana 2</b>","order":0,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Recruit":51,"Crossbowman":144},"type":57,"target":4803,"targetName":"Nords Camp (medium)"},
		"187526.0":{"grid":6239,"name":"Loner_2-Skills (Loner General) ","order":0,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":2,"9":3,"11":3,"12":3,"19":1},"army":{"Recruit":80,"Cavalry":20,"Crossbowman":145},"type":67,"target":5090,"targetName":"Nords Camp (hard)"},
		"149369.0":{"grid":3178,"name":"Major 3 (Major General) ","order":1,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Cavalry":140,"Crossbowman":130},"type":13,"target":2288,"targetName":"Nords Camp (medium)"},
		"1055695.0":{"grid":2549,"name":"General Sylvana 4</b>","order":0,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Militia":23,"EliteSoldier":1,"Cavalry":50,"Crossbowman":106},"type":57,"target":2002,"targetName":"Nords Camp (medium)"},
		},
	"02": {
		"619530.0":{"grid":5350,"name":"<b>Frosty_02</b> <font size='-3'>(Frosty General)</font>","order":0,"time":5000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"14":3},"army":{"Crossbowman":1},"type":64,"target":3992,"targetName":"Nords Camp (leader)"},
		"495320.0":{"grid":3315,"name":"<b>YGG_3_1UP</b> <font size='-3'>(Younger Gemini General)</font>","order":0,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":1},"type":50,"target":2634,"targetName":"Nords Camp (hard)"},
		"536169.0":{"grid":3452,"name":"<b>RG_2_Skills</b> <font size='-3'>(Resolute General)</font>","order":1,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Recruit":45,"Crossbowman":170},"type":79,"target":2634,"targetName":"Nords Camp (hard)"},
		"495322.0":{"grid":6306,"name":"<b>Ghost_2_TR_WW</b> <font size='-3'>(Ghost General)</font>","order":0,"time":1000,"skills":{"3":3,"6":3,"8":3,"11":3,"12":3,"14":3,"15":3},"army":{"Recruit":50,"Crossbowman":180},"type":63,"target":7256,"targetName":"Nords Camp (hard)"},
		"527488.0":{"grid":6510,"name":"<b>YGG_4_1UP</b> <font size='-3'>(Younger Gemini General)</font>","order":6,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":1},"type":50,"target":7256,"targetName":"Nords Camp (hard)"},
		"261006.0":{"grid":5416,"name":"Major 4 (Major General) ","order":1,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":100,"EliteSoldier":1,"Crossbowman":169},"type":13,"target":3992,"targetName":"Nords Camp (leader)"},
	},
}

var ArcticExplosion_CD_Execution = [
    { "action": createActionWithoutParameters(shortcutsPickupAll), "name": "pick up collectables", "timeToNextStep": 1 },
	{ "action": createActionWithoutParameters(shortcutsReturnAll), "name": "Return Generals to star menu 40s", "timeToNextStep": 40000 },
	{ "name": "att01 Load 2s",      "action": createActionWithParameters(jzv2_regroupGeneralByAttackId, ["01"]), "timeToNextStep": 2000},
	{ "name": "att02 Load 2s",      "action": createActionWithParameters(jzv2_regroupGeneralByAttackId, ["02"]),"timeToNextStep": 2000},
	{ "name": "att02 Move 1s",     "action": createActionWithParameters(jzv2_moveGeneralByAttackId, ["02"]),"timeToNextStep": 1*1000},
	{ "name": "att01 Move 35s",     "action": createActionWithParameters(jzv2_moveGeneralByAttackId, ["01"]), "timeToNextStep": 35000 },
	{ "name": "att01 Attack 71s",   "action": createActionWithParameters(jzv2_attackCampByAttackId, ["01"]), "timeToNextStep": 71*1000 },
	{ "name": "att02 Attack 5s",    "action": createActionWithParameters(jzv2_attackCampByAttackId, ["02"]),"timeToNextStep": 5*1000}, // 2:40
    { "name": "Load remaining army to quatermaster 1s", "action": createActionWithoutParameters(jz_loadRemainingArmy), "timeToNextStep": 11*1000},
    {"name": "handle questbook", "action": createActionWithoutParameters(jz_handleQuestBook), "timeToNextStep": 1*1000},
];

var theBlackKnight = {
	"01": {
		"6365.0":{"grid":6408,"name":"General 2","order":1,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"EliteSoldier":83,"Cavalry":65},"type":0,"target":5734,"targetName":"Bandit Camp (easy)"},
		"589.0":{"grid":6543,"name":"General 3","order":2,"time":18000,"skills":{"6":3,"11":3,"14":2},"army":{"EliteSoldier":97},"type":0,"target":5193,"targetName":"Bandit Camp (easy)"},
		"127334.0":{"grid":7015,"name":"General Sylvana</b>","order":3,"time":4000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":86,"Cannoneer":94},"type":13,"target":5193,"targetName":"Bandit Leader"}},
	"02": {
		"262.0":{"grid":5191,"name":"General 1","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"Recruit":2,"EliteSoldier":2,"Cavalry":196},"type":0,"target":4518,"targetName":"Bandit Camp (medium)"},
		"6365.0":{"grid":5595,"name":"General 2","order":1,"time":4000,"skills":{"6":3,"11":3,"14":2},"army":{"Recruit":2,"EliteSoldier":2,"Cavalry":196},"type":0,"target":4523,"targetName":"Bandit Camp (medium)"},
		"127334.0":{"grid":6064,"name":"General Sylvana</b>","order":6,"time":4000,"skills":{"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":84,"Cannoneer":96},"type":13,"target":4180,"targetName":"Dark Castle"}},
	"03": {
		"589.0":{"grid":5745,"name":"General 3","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"EliteSoldier":97},"type":0,"target":5549,"targetName":"Bandit Camp (easy)"},
		"64499.0":{"grid":6897,"name":"Major 1 (Major General) ","order":1,"time":4000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":121,"EliteSoldier":1,"Cannoneer":148},"type":13,"target":5139,"targetName":"Bandit Leader"}},
	"04": {
		"589.0":{"grid":5209,"name":"General 3","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"Recruit":2,"EliteSoldier":2,"Cavalry":196},"type":0,"target":4523,"targetName":"Bandit Camp (medium)"},
		"64499.0":{"grid":5620,"name":"Major 1 (Major General) ","order":1,"time":4000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":132,"EliteSoldier":1,"Cannoneer":137},"type":13,"target":4180,"targetName":"Dark Castle"}},
	"05": {
		"64498.0":{"grid":4054,"name":"Mayor 2 (Major General) ","order":3,"time":1000,"skills":{"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":65,"EliteSoldier":1,"Cavalry":120,"Cannoneer":84},"type":13,"target":2834,"targetName":"Bandit Camp (hard)"},
		"63091.0":{"grid":5142,"name":"Loner","order":4,"time":4000,"skills":{"3":1,"6":3,"11":3,"14":3},"army":{"Recruit":120},"type":13,"target":2295,"targetName":"Bandit Camp (hard)"},
		"64499.0":{"grid":6094,"name":"Major 1 (Major General) ","order":5,"time":4000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":80,"EliteSoldier":1,"Cavalry":120,"Cannoneer":69},"type":13,"target":1822,"targetName":"Bandit Camp (hard)"}},
	"06": {
		"262.0":{"grid":3376,"name":"General 1","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"EliteSoldier":59,"Cavalry":135},"type":0,"target":1548,"targetName":"Bandit Camp (hard)"},
		"127334.0":{"grid":4054,"name":"General Sylvana</b>","order":3,"time":4000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":84,"Cannoneer":96},"type":13,"target":1347,"targetName":"Dark Castle"}},
	"07": {"127334.0":{"grid":3426,"name":"General Sylvana</b>","order":3,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Recruit":85,"EliteSoldier":20,"Cannoneer":75},"type":57,"target":3153,"targetName":"Bandit Leader"}},
	"08": {"127334.0":{"grid":2610,"name":"General Sylvana</b>","order":3,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Recruit":65,"Cavalry":75,"Cannoneer":40},"type":57,"target":2350,"targetName":"Bandit Leader"}},
}

// var horseBackSilvana = {
// 	"01": {
// 		"127334.0": {"name": "General Sylvana","grid": 7153, "order": 0, "time": 1000, "type": 67, "target": 6409, "targetName": "Raiders Camp (medium)", "army":{"Recruit":180}},
// 		"64499.0": {"name": "Mayor 1","grid": 7084, "order": 1, "time": 1000, "type": 13, "target": 7361, "targetName": "Raiders Leader", "army":{"Recruit":49,"Cannoneer":221}}
// 	},
// 	// "02": {"127334.0": {"name":"General Sylvana","grid":7153,"order":0,"time":1000,"type":67,"target":6679,"targetName":"Raiders Leader","army":{"Recruit":180}}},
// 	"02": {"64499.0":{"grid":7084,"name":"Mayor 1s","order":0,"time":1000,"skills":{"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":106,"Cannoneer":164},"type":13,"target":6679,"targetName":"Raiders Leader"}},
// 	"03": {"64499.0": {name:"Mayor 1",grid:6752,order:0,time:1000,type:13,target:6010,targetName:"Raiders Leader","army":{"Recruit":43,"EliteSoldier":200}}},
// 	"04": {"127334.0": {"name":"General Sylvana","grid":7776,"order":0,"time":1000,"type":67,"target":7372,"targetName":"Raiders Camp (easy)","army":{"Recruit":180}}},
// 	"05": {"64499.0": {"name":"Mayor 1","grid":5257,"order":0,"time":1000,"type":13,"target":4779,"targetName":"Raiders Leader","army":{"Recruit":38,"EliteSoldier":200}}},
// 	"06": {"127334.0": {"name":"General Sylvana","grid":7776,"order":0,"time":1000,"type":67,"target":7780,"targetName":"Raiders Leader","army":{"Recruit":180}}},
// 	"07": {"64499.0": {"name":"Mayor 1","grid":4098,"order":0,"time":1000,"type":13,"target":4502,"targetName":"Raiders Leader","army":{"Recruit":38,"EliteSoldier":200}}}
// }

// var horseBackLoner = {
// 	"01": {
// 		"63091.0": {name: "General Loner",grid: 7153, order: 0, time: 1000, type: 67, target: 6409, targetName: "Raiders Camp (medium)","army":{"Recruit":230}},
// 		"64498.0": {name: "Mayor 2",grid: 7084, order: 1, time: 1000, type: 13, target: 7361, targetName: "Raiders Leader","army":{"Recruit":49,"Cannoneer":221}}},
// 	// "02": {"63091.0": {name:"General Loner","grid":7153,"order":0,"time":1000,"type":67,"target":6679,"targetName":"Raiders Leader","army":{"Recruit":230}}},
// 	"02": {"64498.0":{"grid":7084,"name":"Mayor 2 (Major General) ","order":0,"time":1000,"skills":{"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":106,"Cannoneer":164},"type":13,"target":6679,"targetName":"Raiders Leader"}},
// 	"03": {"64498.0": {name:"Mayor 2","grid":6752,"order":0,"time":1000,"type":13,"target":6010,"targetName":"Raiders Leader","army":{"Recruit":43,"EliteSoldier":200}}},
// 	"04": {"63091.0": {name:"General Loner","grid":7776,"order":0,"time":1000,"type":67,"target":7372,"targetName":"Raiders Camp (easy)","army":{"Recruit":230}}},
// 	"05": {"64498.0": {name:"Mayor 2","grid":5257,"order":0,"time":1000,"type":13,"target":4779,"targetName":"Raiders Leader","army":{"Recruit":38,"EliteSoldier":200}}},
// 	"06": {"63091.0": {name:"General Loner","grid":7776,"order":0,"time":1000,"type":67,"target":7780,"targetName":"Raiders Leader","army":{"Recruit":230}}},
// 	"07": {"64498.0": {name:"Mayor 2","grid":4098,"order":0,"time":1000,"type":13,"target":4502,"targetName":"Raiders Leader","army":{"Recruit":38,"EliteSoldier":200}}}
// }

var horseback_SYLV_2xYGG_A = {
	"01": {"483087.0":{"grid":7153,"name":"YGG_2_1UP(Younger Gemini General)","order":2,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":1},"type":50,"target":7020,"targetName":"Raiders Camp (medium)"}},
	"02": {"389488.0":{"grid":7220,"name":"YGG_1_1UP(Younger Gemini General)","order":1,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":10},"type":50,"target":6409,"targetName":"Raiders Camp (medium)"}},
	"03": {"127334.0":{"grid":6948,"name":"Sylvana_1-Skills(General Sylvana)","order":0,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"Recruit":59,"Cannoneer":136},"type":57,"target":6679,"targetName":"Raiders Leader"}},
	"04": {"483087.0":{"grid":7153,"name":"YGG_2_1UP(Younger Gemini General)","order":0,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":1},"type":50,"target":7361,"targetName":"Raiders Leader"}},
	"05": {"389488.0":{"grid":6752,"name":"YGG_1_1UP(Younger Gemini General)","order":1,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":1},"type":50,"target":6010,"targetName":"Raiders Leader"}},
	"06": {"483087.0":{"grid":5459,"name":"YGG_2_1UP(Younger Gemini General)","order":2,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":1},"type":50,"target":4779,"targetName":"Raiders Leader"}},
	"07": {"127334.0":{"grid":7099,"name":"Sylvana_1-Skills(General Sylvana)","order":2,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"Recruit":35,"Cannoneer":155},"type":57,"target":7372,"targetName":"Raiders Camp (easy)"}},
	"08": {"389488.0":{"grid":7300,"name":"YGG_1_1UP(Younger Gemini General)","order":0,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":35},"type":50,"target":7780,"targetName":"Raiders Leader"}},
	"09": {"483087.0":{"grid":5459,"name":"YGG_2_1UP(Younger Gemini General)","order":1,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":1},"type":50,"target":4502,"targetName":"Raiders Leader"}},
}

var horseback_SYLV_2xYGG_B = {
	"01": {"495320.0":{"grid":7153,"name":"YGG_3_1UP(Younger Gemini General)","order":2,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":1},"type":50,"target":7020,"targetName":"Raiders Camp (medium)"}},
	"02": {"527488.0":{"grid":7220,"name":"YGG_4_1UP(Younger Gemini General)","order":1,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":10},"type":50,"target":6409,"targetName":"Raiders Camp (medium)"}},
	"03": {"294792.0":{"grid":6948,"name":"Sylvana_2-Skills(General Sylvana)","order":0,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"Recruit":59,"Cannoneer":136},"type":57,"target":6679,"targetName":"Raiders Leader"}},
	"04": {"495320.0":{"grid":7153,"name":"YGG_3_1UP(Younger Gemini General)","order":0,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":1},"type":50,"target":7361,"targetName":"Raiders Leader"}},
	"05": {"527488.0":{"grid":6752,"name":"YGG_4_1UP(Younger Gemini General)","order":1,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":1},"type":50,"target":6010,"targetName":"Raiders Leader"}},
	"06": {"495320.0":{"grid":5459,"name":"YGG_3_1UP(Younger Gemini General)","order":2,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":1},"type":50,"target":4779,"targetName":"Raiders Leader"}},
	"07": {"294792.0":{"grid":7099,"name":"Sylvana_2-Skills(General Sylvana)","order":2,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"Recruit":35,"Cannoneer":155},"type":57,"target":7372,"targetName":"Raiders Camp (easy)"}},
	"08": {"527488.0":{"grid":7300,"name":"YGG_4_1UP(Younger Gemini General)","order":0,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":35},"type":50,"target":7780,"targetName":"Raiders Leader"}},
	"09": {"495320.0":{"grid":5459,"name":"YGG_3_1UP(Younger Gemini General)","order":1,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":1},"type":50,"target":4502,"targetName":"Raiders Leader"}},
}

var horseback_SYLV_2xYGG_Execution = [
    { "name": "pick up collectables", "action": createActionWithoutParameters(shortcutsPickupAll), "timeToNextStep": 1 },
	{ "name": "All to star",	"action": createActionWithoutParameters(shortcutsReturnAll), 	"timeToNextStep": 45000 },
	{ "name": "Load units 2s",	"action": createActionWithParameters(jzv2_regroupGeneralByAttackId, ["01"]), "timeToNextStep": 500, },
	{ "name": "att03 Move 1s",	"action": createActionWithParameters(jzv2_moveGeneralByAttackId, ["01"]), "timeToNextStep": 500 },
	{ "name": "Load units 2s",	"action": createActionWithParameters(jzv2_regroupGeneralByAttackId, ["02"]), "timeToNextStep": 500 },
	{ "name": "att03 Move 1s",	"action": createActionWithParameters(jzv2_moveGeneralByAttackId, ["02"]), "timeToNextStep": 500 },
	{ "name": "Load units 2s",	"action": createActionWithParameters(jzv2_regroupGeneralByAttackId, ["03"]), "timeToNextStep": 500 },
	{ "name": "att03 Move 1s",	"action": createActionWithParameters(jzv2_moveGeneralByAttackId, ["03"]), "timeToNextStep": 28000 },
	{ "name": "att01 Attack",   "action": createActionWithParameters(jzv2_attackCampByAttackId, ["01"]), "timeToNextStep": 20*1000 },
	{ "name": "att02 Attack",   "action": createActionWithParameters(jzv2_attackCampByAttackId, ["02"]), "timeToNextStep": 35*1000 },
	{ "name": "att03 Attack",   "action": createActionWithParameters(jzv2_attackCampByAttackId, ["03"]), "timeToNextStep": 15*1000 },
	{ "name": "att04 Attack",   "action": createActionWithParameters(jzv2_attackCampByAttackId, ["04"]), "timeToNextStep": 75*1000 },
	{ "name": "att05 To Star",  "action": createActionWithParameters(jzv2_toStarByAttackId, ["05"]),"timeToNextStep": 1*1000},
	{ "name": "att07 To Star",  "action": createActionWithParameters(jzv2_toStarByAttackId, ["07"]),"timeToNextStep": 15*1000},
	{ "name": "att06 To Star",  "action": createActionWithParameters(jzv2_toStarByAttackId, ["06"]),"timeToNextStep": 7*1000},
	{ "name": "att05 Load",		"action": createActionWithParameters(jzv2_regroupGeneralByAttackId, ["05"]), "timeToNextStep": 1*1000 },
	{ "name": "att05 Move",		"action": createActionWithParameters(jzv2_moveGeneralByAttackId, ["05"]), "timeToNextStep": 30*1000 },
	{ "name": "att05 Attack",   "action": createActionWithParameters(jzv2_attackCampByAttackId, ["05"]), "timeToNextStep": 68*1000 },
	{ "name": "att06 Load",		"action": createActionWithParameters(jzv2_regroupGeneralByAttackId, ["06"]), "timeToNextStep": 1*1000 },
	{ "name": "att06 Move",		"action": createActionWithParameters(jzv2_moveGeneralByAttackId, ["06"]), "timeToNextStep": 1*1000 },
	{ "name": "att07 Load",		"action": createActionWithParameters(jzv2_regroupGeneralByAttackId, ["07"]), "timeToNextStep": 1*1000 },
	{ "name": "att07 Move",		"action": createActionWithParameters(jzv2_moveGeneralByAttackId, ["07"]), "timeToNextStep": 20*1000 },
	{ "name": "att08 To Star",  "action": createActionWithParameters(jzv2_toStarByAttackId, ["08"]),"timeToNextStep": 10*1000},
	{ "name": "att09 Attack",   "action": createActionWithParameters(jzv2_attackCampByAttackId, ["09"]), "timeToNextStep": 1*1000 },
	{ "name": "att07 Attack",   "action": createActionWithParameters(jzv2_attackCampByAttackId, ["07"]), "timeToNextStep": 13*1000 },
	{ "name": "att08 Load",		"action": createActionWithParameters(jzv2_regroupGeneralByAttackId, ["08"]), "timeToNextStep": 3*1000 },
	{ "name": "att08 Move",		"action": createActionWithParameters(jzv2_moveGeneralByAttackId, ["08"]), "timeToNextStep": 27*1000 },
	{ "name": "att08 Attack",   "action": createActionWithParameters(jzv2_attackCampByAttackId, ["08"]), "timeToNextStep": 90*1000 },
	{ "name": "att06 Attack",   "action": createActionWithParameters(jzv2_attackCampByAttackId, ["06"]), "timeToNextStep": 1*1000 },
	{"name": "handle questbook", "action": createActionWithoutParameters(jz_handleQuestBook), "timeToNextStep": 1*1000},
]

var SurpriceAttack = {
	"01": {"149369.0": { grid:3610,"name":"Major3","order":0,"time":1000,"type":13,"target":4226,"targetName":"Nords Camp (medium)","army":{"Cavalry":100,"Crossbowman":170}}},
	"02": {"149369.0": { grid:3610,"name":"Major3","order":0,"time":1000,"type":13,"target":4297,"targetName":"Nords Camp (medium)","army":{"Cavalry":135,"Crossbowman":135}}},
	"03": {"149369.0": { grid:3610,"name":"Major3","order":0,"time":1000,"type":13,"target":4026,"targetName":"Nords Camp (leader)","army":{"Militia":30,"Cavalry":105,"Crossbowman":135}}},
	"04": {
		"262.0": { grid:4637,"name":"General 1","order":0,"time":1000,"type":0,"target":5457,"targetName":"Nords Camp (medium)","army":{"Soldier":3,"EliteSoldier":72,"Cavalry":125}},
		"6365.0": { grid:4225,"name":"General 2","order":1,"time":3500,"type":0,"target":6067,"targetName":"Nords Camp (medium)","army":{"EliteSoldier":125,"Cavalry":75}},
		"589.0": { grid:3680,"name":"General 3","order":2,"time":3500,"type":0,"target":6141,"targetName":"Nords Camp (medium)","army":{"Soldier":45,"EliteSoldier":130,"Crossbowman":25}},
		"149369.0": { grid:3136,"name":"Major3","order":3,"time":5500,"type":13,"target":5667,"targetName":"Nords Camp (leader)","army":{"Recruit":95,"EliteSoldier":1,"Crossbowman":174}}},
	"05": {
		"262.0": { grid:6069,"name":"General 1","order":0,"time":1000,"type":0,"target":6757,"targetName":"Nords Camp (medium)","army":{"EliteSoldier":111,"Cavalry":89}},
		"6365.0": { grid:5254,"name":"General 2","order":1,"time":3500,"type":0,"target":7433,"targetName":"Nords Camp (medium)","army":{"EliteSoldier":111,"Cavalry":89}},
		"149369.0": { grid:4637,"name":"Major 3","order":2,"time":3500,"type":13,"target":8044,"targetName":"Nords Camp (leader)","army":{"Militia":45,"Cavalry":114,"Crossbowman":111}}},
	"06": {
		"262.0": { grid:6966,"name":"General 1","order":0,"time":1000,"type":0,"target":6362,"targetName":"Nords Camp (medium)","army":{"Soldier":5,"EliteSoldier":69,"Cavalry":126}},
		"6365.0": { grid:6689,"name":"General 2","order":1,"time":4000,"type":0,"target":5814,"targetName":"Nords Camp (medium)","army":{"EliteSoldier":61,"Cavalry":139}},
		"589.0": { grid:7232,"name":"General 3","order":2,"time":4000,"type":0,"target":6022,"targetName":"Nords Camp (hard)","army":{"Soldier":65,"EliteSoldier":130}},
		"6878.0": { grid:7705,"name":"General 4","order":3,"time":4000,"type":0,"target":5816,"targetName":"Nords Camp (hard)","army":{"Soldier":70,"EliteSoldier":130}},
		"149369.0": { grid:8245,"name":"Mayor 3","order":4,"time":4000,"type":13,"target":5682,"targetName":"Nords Camp (leader)","army":{"Militia":45,"Cavalry":114,"Crossbowman":111}}},
	"07": {
		"262.0": { grid:6426,"name":"General 1","order":0,"time":1000,"type":0,"target":7178,"targetName":"Nords Camp (medium)","army":{"Soldier":2,"EliteSoldier":136,"Cavalry":62}},
		"6365.0": { grid:7033,"name":"General 2","order":1,"time":4000,"type":0,"target":7448,"targetName":"Nords Camp (medium)","army":{"EliteSoldier":152,"Cavalry":48}},
		"589.0": { grid:7373,"name":"General 3","order":2,"time":4000,"type":0,"target":7722,"targetName":"Nords Camp (hard)","army":{"Soldier":82,"EliteSoldier":118}},
		"6878.0": { grid:7980,"name":"General 4","order":3,"time":4000,"type":0,"target":7993,"targetName":"Nords Camp (hard)","army":{"Soldier":40,"EliteSoldier":160}},
		"149369.0": { grid:8110,"name":"Mayor 3","order":4,"time":4000,"type":13,"target":8199,"targetName":"Nords Camp (leader)","army":{"Militia":68,"EliteSoldier":1,"Crossbowman":201}}}
}

var SurpriceAttackOGG = {
	"01": {"389191.0": { grid:3610,"name":"OGG_1","order":0,"time":1000,"type":13,"target":4226,"targetName":"Nords Camp (medium)","army":{"Cavalry":100,"Crossbowman":195}}},
	"02": {"389191.0": { grid:3610,"name":"OGG_1","order":0,"time":1000,"type":13,"target":4297,"targetName":"Nords Camp (medium)","army":{"Cavalry":100,"Crossbowman":195}}},
	"03": {"389191.0": { grid:3610,"name":"OGG_1","order":0,"time":1000,"type":13,"target":4026,"targetName":"Nords Camp (leader)","army":{"Recruit":36,"EliteSoldier":1,"Cavalry":80,"Crossbowman":178}}},
	"04": {
		"262.0": { grid:4637,"name":"General 1","order":0,"time":1000,"type":0,"target":5457,"targetName":"Nords Camp (medium)","army":{"Soldier":3,"EliteSoldier":72,"Cavalry":125}},
		"6365.0": { grid:4225,"name":"General 2","order":1,"time":3500,"type":0,"target":6067,"targetName":"Nords Camp (medium)","army":{"EliteSoldier":125,"Cavalry":75}},
		"589.0": { grid:3680,"name":"General 3","order":2,"time":3500,"type":0,"target":6141,"targetName":"Nords Camp (medium)","army":{"Soldier":45,"EliteSoldier":130,"Crossbowman":25}},
		"389191.0": { grid:3136,"name":"OGG_1","order":3,"time":5500,"type":13,"target":5667,"targetName":"Nords Camp (leader)","army":{"Recruit":57,"Crossbowman":238}}},
	"05": {
		"262.0": { grid:6069,"name":"General 1","order":0,"time":1000,"type":0,"target":6757,"targetName":"Nords Camp (medium)","army":{"EliteSoldier":111,"Cavalry":89}},
		"6365.0": { grid:5254,"name":"General 2","order":1,"time":3500,"type":0,"target":7433,"targetName":"Nords Camp (medium)","army":{"EliteSoldier":111,"Cavalry":89}},
		"389191.0": { grid:4637,"name":"OGG_1","order":2,"time":3500,"type":13,"target":8044,"targetName":"Nords Camp (leader)","army":{"Recruit":10,"Cavalry":80,"Crossbowman":205}}},
	"06": {
		"262.0": { grid:6966,"name":"General 1","order":0,"time":1000,"type":0,"target":6362,"targetName":"Nords Camp (medium)","army":{"Soldier":5,"EliteSoldier":69,"Cavalry":126}},
		"6365.0": { grid:6689,"name":"General 2","order":1,"time":4000,"type":0,"target":5814,"targetName":"Nords Camp (medium)","army":{"EliteSoldier":61,"Cavalry":139}},
		"589.0": { grid:7232,"name":"General 3","order":2,"time":4000,"type":0,"target":6022,"targetName":"Nords Camp (hard)","army":{"Soldier":65,"EliteSoldier":130}},
		"6878.0": { grid:7705,"name":"General 4","order":3,"time":4000,"type":0,"target":5816,"targetName":"Nords Camp (hard)","army":{"Soldier":70,"EliteSoldier":130}},
		"389191.0": { grid:8245,"name":"OGG_1","order":4,"time":4000,"type":13,"target":5682,"targetName":"Nords Camp (leader)","army":{"Recruit":10,"Cavalry":80,"Crossbowman":205}}},
	"07": {
		"262.0": { grid:6426,"name":"General 1","order":0,"time":1000,"type":0,"target":7178,"targetName":"Nords Camp (medium)","army":{"Soldier":2,"EliteSoldier":136,"Cavalry":62}},
		"6365.0": { grid:7033,"name":"General 2","order":1,"time":4000,"type":0,"target":7448,"targetName":"Nords Camp (medium)","army":{"EliteSoldier":152,"Cavalry":48}},
		"589.0": { grid:7373,"name":"General 3","order":2,"time":4000,"type":0,"target":7722,"targetName":"Nords Camp (hard)","army":{"Soldier":82,"EliteSoldier":118}},
		"6878.0": { grid:7980,"name":"General 4","order":3,"time":4000,"type":0,"target":7993,"targetName":"Nords Camp (hard)","army":{"Soldier":40,"EliteSoldier":160}},
		"389191.0": { grid:8110,"name":"OGG_1","order":4,"time":4000,"type":13,"target":8199,"targetName":"Nords Camp (leader)","army":{"Recruit":85,"Crossbowman":210}}}
}

var Woodcutter = {
	"01": {"127334.0":{"grid":6134,"name":"General Sylvana</b>","order":0,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"MountedSwordsman":25,"MountedMarksman":155},"type":57,"target":7027,"targetName":"Desert Bandit Camp (medi..."}},
	"02": {"127334.0":{"grid":6134,"name":"General Sylvana</b>","order":0,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"MountedSwordsman":24,"MountedMarksman":156},"type":57,"target":7369,"targetName":"Desert Bandit Leader"}},
	// "01": {
	// 	"389191.0":{"grid":6269,"name":"OGG_1-Skills (Older Gemini General) ","order":0,"time":1000,"skills":{"2":3,"3":3,"8":2,"9":3,"11":3,"12":3,"14":3,"19":1},"army":{"MountedSwordsman":16,"MountedMarksman":279},"type":47,"target":7027,"targetName":"Desert Bandit Camp (medi..."},
	// 	"127334.0":{"grid":6134,"name":"General Sylvana</b>","order":1,"time":30000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"MountedSwordsman":24,"MountedMarksman":156},"type":57,"target":7369,"targetName":"Desert Bandit Leader"}},
	"03": {"389191.0":{"grid":7303,"name":"OGG_1-Skills (Older Gemini General) ","order":0,"time":1000,"skills":{"2":3,"3":3,"8":2,"9":3,"11":3,"12":3,"14":3,"19":1},"army":{"MountedSwordsman":5,"Knight":220,"Besieger":70},"type":47,"target":6771,"targetName":"Desert Bandit Camp (easy)"}},
	"04": {
		"7155.0":{"grid":7440,"name":"General 5","order":1,"time":28000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":200},"type":0,"target":5897,"targetName":"Desert Bandit Camp (hard)"},
		"39780.0":{"grid":7505,"name":"General 6","order":2,"time":4000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":150,"ArmoredMarksman":40},"type":0,"target":5021,"targetName":"Desert Bandit Camp (hard)"},
		"127334.0":{"grid":7500,"name":"General Sylvana</b>","order":3,"time":4000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"MountedSwordsman":16,"MountedMarksman":164},"type":57,"target":5155,"targetName":"Desert Bandit Leader"}},
	// "04": {"127334.0":{"grid":5491,"name":"General Sylvana</b>","order":2,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Knight":180},"type":57,"target":4405,"targetName":"Desert Bandit Camp (hard)"}},
	"05": {"389191.0":{"grid":5225,"name":"OGG_1-Skills (Older Gemini General) ","order":0,"time":1000,"skills":{"2":3,"3":3,"8":2,"9":3,"11":3,"12":3,"14":3,"19":1},"army":{"MountedSwordsman":5,"Knight":125,"Besieger":30},"type":47,"target":4405,"targetName":"Desert Bandit Camp (hard)"}},
	"06": {
		"7155.0":{"grid":5087,"name":"General 5","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":150,"ArmoredMarksman":10},"type":0,"target":2093,"targetName":"Desert Bandit Camp (easy)"},
		"127334.0":{"grid":5491,"name":"General Sylvana</b>","order":1,"time":4000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"MountedSwordsman":24,"MountedMarksman":156},"type":57,"target":873,"targetName":"Desert Bandit Leader"}},
	"07": {
		"39780.0":{"grid":1400,"name":"General 6","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":164,"ArmoredMarksman":36},"type":0,"target":1528,"targetName":"Desert Bandit Camp (medi..."},
		// "64499.0":{"grid":1537,"name":"Major 1 (Major General) ","order":3,"time":30000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"MountedSwordsman":35,"MountedMarksman":125,"Besieger":110},"type":13,"target":1254,"targetName":"Desert Bandit Leader"}},
		"524888.0":{"grid":1537,"name":"RG_1-Skills (Older Gemini General) ","order":1,"time":30000,"skills":{"2":3,"3":3,"8":2,"9":3,"11":3,"12":3,"14":3,"19":1},"army":{"Swordsman": 80,"Knight": 20,"MountedMarksman": 115},"type":47,"target":1254,"targetName":"Desert Bandit Leader"},
		"7155.0":{"grid":1265,"name":"General 5","order":2,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":126},"type":0,"target":2483,"targetName":"Desert Bandit Camp (medi..."},
		"127334.0":{"grid":1402,"name":"General Sylvana</b>","order":3,"time":31000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"MountedSwordsman":18,"MountedMarksman":162},"type":57,"target":2485,"targetName":"Desert Bandit Leader"}},
	"08": {
		"127334.0":{"grid":2746,"name":"General Sylvana</b>","order":0,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"MountedSwordsman":40,"Knight":17,"Besieger":123},"type":57,"target":2674,"targetName":"Desert Bandit Camp (easy)"},
		"389191.0":{"grid":2883,"name":"OGG_1-Skills (Older Gemini General) ","order":1,"time":9000,"skills":{"2":3,"3":3,"8":2,"9":3,"11":3,"12":3,"14":3,"19":1},"army":{"MountedMarksman":295},"type":47,"target":1923,"targetName":"Desert Bandit Camp (hard)"}},
	// "08": {"64499.0":{"grid":2883,"name":"Major 1 (Major General) ","order":3,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"ArmoredMarksman":40,"MountedMarksman":200},"type":13,"target":1923,"targetName":"Desert Bandit Camp (hard)"}},
	"09": {
		"7155.0":{"grid":2609,"name":"General 5","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":160,"ArmoredMarksman":40},"type":0,"target":1305,"targetName":"Desert Bandit Camp (hard)"},
		"127334.0":{"grid":2746,"name":"General Sylvana</b>","order":1,"time":22000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Knight":105},"type":57,"target":964,"targetName":"Bandit Stronghold"},
		// "64499.0":{"grid":2883,"name":"Major 1 (Major General) ","order":3,"time":4000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Knight":90,"Besieger":180},"type":13,"target":964,"targetName":"Bandit Stronghold"}
		"389191.0":{"grid":2883,"name":"OGG_1-Skills (Older Gemini General) ","order":2,"time":1000,"skills":{"2":3,"3":3,"8":2,"9":3,"11":3,"12":3,"14":3,"19":1},"army":{"MountedMarksman":225},"type":47,"target":964,"targetName":"Bandit Stronghold"}
	}
}

var Woodcutter_Execution = [
	// {"name": "", "action": , "timeToNextStep": 1},
	{"name": "Unload all units",    "action": createActionWithoutParameters(jzv2_unloadAllUnits), "timeToNextStep": 5000},
	{"name": "att01 to star",		"action": createActionWithParameters(jzv2_toStarByAttackId, ["01"]), 		"timeToNextStep": 25*1000},
	{"name": "att01 Load units",    "action": createActionWithParameters(jzv2_regroupGeneralByAttackId, ["01"]),"timeToNextStep": 100},
	{"name": "att01 Move",     	"action": createActionWithParameters(jzv2_moveGeneralByAttackId, ["01"]), 		"timeToNextStep": 35*1000 },
	{"name": "att01 Attack",   		"action": createActionWithParameters(jzv2_attackCampByAttackId, ["01"]), 	"timeToNextStep": 180*1000 },
	{"name": "att02 load units",    "action": createActionWithParameters(jzv2_regroupGeneralByAttackId, ["02"]),"timeToNextStep": 6000},
	{"name": "att02 Attack",   		"action": createActionWithParameters(jzv2_attackCampByAttackId, ["02"]), 	"timeToNextStep": 180*1000 },
	{"name": "att03 to star",		"action": createActionWithParameters(jzv2_toStarByAttackId, ["03"]), 		"timeToNextStep": 25*1000},
	{"name": "att03 Load units",    "action": createActionWithParameters(jzv2_regroupGeneralByAttackId, ["03"]),"timeToNextStep": 500},
	{"name": "att03 Move",     	"action": createActionWithParameters(jzv2_moveGeneralByAttackId, ["03"]), 		"timeToNextStep": 31*1000 },
	{"name": "att03 Attack",   		"action": createActionWithParameters(jzv2_attackCampByAttackId, ["03"]), 	"timeToNextStep": 20*1000 },
	{"name": "att04 to star",		"action": createActionWithParameters(jzv2_toStarByAttackId, ["04"]), 		"timeToNextStep": 30*1000},
	{"name": "att04 Load units",    "action": createActionWithParameters(jzv2_regroupGeneralByAttackId, ["04"]),"timeToNextStep": 500},
	{"name": "att04 Move",     	"action": createActionWithParameters(jzv2_moveGeneralByAttackId, ["04"]), 		"timeToNextStep": 35*1000 },
	{"name": "att04 Attack",   		"action": createActionWithParameters(jzv2_attackCampByAttackId, ["04"]), 	"timeToNextStep": 160*1000 },
	{"name": "att05 to star",		"action": createActionWithParameters(jzv2_toStarByAttackId, ["05"]), 		"timeToNextStep": 230*1000},
	{"name": "att05 Load units",    "action": createActionWithParameters(jzv2_regroupGeneralByAttackId, ["05"]),"timeToNextStep": 500},
	{"name": "att05 Move",     	"action": createActionWithParameters(jzv2_moveGeneralByAttackId, ["05"]), 		"timeToNextStep": 31*1000 },
	{"name": "att05 Attack",   		"action": createActionWithParameters(jzv2_attackCampByAttackId, ["05"]), 	"timeToNextStep": 80*1000 },
	{"name": "att06 to star",		"action": createActionWithParameters(jzv2_toStarByAttackId, ["07"]), 		"timeToNextStep": 25*1000},
	{"name": "att06 Load units",    "action": createActionWithParameters(jzv2_regroupGeneralByAttackId, ["06"]),"timeToNextStep": 500},
	{"name": "att06 Move",     	"action": createActionWithParameters(jzv2_moveGeneralByAttackId, ["06"]), 		"timeToNextStep": 35*1000 },
	{"name": "att06 Attack",   		"action": createActionWithParameters(jzv2_attackCampByAttackId, ["06"]), 	"timeToNextStep": 450*1000 },
	{"name": "att07 to star",		"action": createActionWithParameters(jzv2_toStarByAttackId, ["07"]), 		"timeToNextStep": 25*1000},
	{"name": "att07 Load units",    "action": createActionWithParameters(jzv2_regroupGeneralByAttackId, ["07"]),"timeToNextStep": 500},
	{"name": "att07 Move",     	"action": createActionWithParameters(jzv2_moveGeneralByAttackId, ["07"]), 		"timeToNextStep": 35*1000 },
	{"name": "att07 Attack",   		"action": createActionWithParameters(jzv2_attackCampByAttackId, ["07"]), 	"timeToNextStep": 230*1000 },
	{"name": "att08 to star",		"action": createActionWithParameters(jzv2_toStarByAttackId, ["07"]), 		"timeToNextStep": 27*1000},
	{"name": "att08 Load units",    "action": createActionWithParameters(jzv2_regroupGeneralByAttackId, ["08"]),"timeToNextStep": 500},
	{"name": "att08 Move",     	"action": createActionWithParameters(jzv2_moveGeneralByAttackId, ["09"]), 		"timeToNextStep": 35*1000 },
	{"name": "att08 Attack",   		"action": createActionWithParameters(jzv2_attackCampByAttackId, ["08"]), 	"timeToNextStep": 135*1000 },
	{"name": "Unload all units",    "action": createActionWithoutParameters(jzv2_unloadAllUnits), 				"timeToNextStep": 7000},
	{"name": "att09 Load units",    "action": createActionWithParameters(jzv2_regroupGeneralByAttackId, ["09"]),"timeToNextStep": 6000},
	{"name": "att09 Attack",   		"action": createActionWithParameters(jzv2_attackCampByAttackId, ["09"]), 	"timeToNextStep": 5*1000 },
	{"name": "Load remaining army to quatermaster", "action": createActionWithoutParameters(jz_loadRemainingArmy), "timeToNextStep": 11*1000}
];

var WoodcutterSylvana = {
	// "01": {"127334.0":{"grid":6134,"name":"General Sylvana</b>","order":0,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"MountedSwordsman":25,"MountedMarksman":155},"type":57,"target":7027,"targetName":"Desert Bandit Camp (medi..."}},
	// "02": {"127334.0":{"grid":7500,"name":"General Sylvana</b>","order":2,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"MountedSwordsman":12,"Knight":46,"Besieger":122},"type":57,"target":6771,"targetName":"Desert Bandit Camp (easy)"}},
	"01": {
		"389191.0":{"grid":6269,"name":"OGG_1-Skills (Older Gemini General) ","order":3,"time":1000,"skills":{"2":3,"3":3,"8":2,"9":3,"11":3,"12":3,"14":3,"19":1},"army":{"MountedSwordsman":16,"MountedMarksman":279},"type":47,"target":7027,"targetName":"Desert Bandit Camp (medi..."},
		"127334.0":{"grid":6134,"name":"General Sylvana</b>","order":0,"time":10000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"MountedSwordsman":24,"MountedMarksman":156},"type":57,"target":7369,"targetName":"Desert Bandit Leader"}},
	"02": {
		"389191.0":{"grid":7303,"name":"OGG_1-Skills (Older Gemini General) ","order":3,"time":1000,"skills":{"2":3,"3":3,"8":2,"9":3,"11":3,"12":3,"14":3,"19":1},"army":{"MountedSwordsman":5,"Knight":220,"Besieger":70},"type":47,"target":6771,"targetName":"Desert Bandit Camp (easy)"},
		"7155.0":{"grid":7440,"name":"General 5","order":0,"time":25000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":200},"type":0,"target":5897,"targetName":"Desert Bandit Camp (hard)"},
		"39780.0":{"grid":7505,"name":"General 6","order":1,"time":4000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":150,"ArmoredMarksman":40},"type":0,"target":5021,"targetName":"Desert Bandit Camp (hard)"},
		"127334.0":{"grid":7500,"name":"General Sylvana</b>","order":2,"time":4000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"MountedSwordsman":16,"MountedMarksman":164},"type":57,"target":5155,"targetName":"Desert Bandit Leader"}},
	// "04": {"127334.0":{"grid":5491,"name":"General Sylvana</b>","order":2,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Knight":180},"type":57,"target":4405,"targetName":"Desert Bandit Camp (hard)"}},
	"03": {"389191.0":{"grid":5225,"name":"OGG_1-Skills (Older Gemini General) ","order":3,"time":1000,"skills":{"2":3,"3":3,"8":2,"9":3,"11":3,"12":3,"14":3,"19":1},"army":{"MountedSwordsman":5,"Knight":125,"Besieger":30},"type":47,"target":4405,"targetName":"Desert Bandit Camp (hard)"}},
	"04": {
		"7155.0":{"grid":5087,"name":"General 5","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":150,"ArmoredMarksman":10},"type":0,"target":2093,"targetName":"Desert Bandit Camp (easy)"},
		"127334.0":{"grid":5491,"name":"General Sylvana</b>","order":2,"time":4000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"MountedSwordsman":24,"MountedMarksman":156},"type":57,"target":873,"targetName":"Desert Bandit Leader"}},
	"05": {
		"39780.0":{"grid":1400,"name":"General 6","order":1,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":164,"ArmoredMarksman":36},"type":0,"target":1528,"targetName":"Desert Bandit Camp (medi..."},
		// "64499.0":{"grid":1537,"name":"Major 1 (Major General) ","order":3,"time":30000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"MountedSwordsman":35,"MountedMarksman":125,"Besieger":110},"type":13,"target":1254,"targetName":"Desert Bandit Leader"}},
		"389191.0":{"grid":1537,"name":"OGG_1-Skills (Older Gemini General) ","order":3,"time":30000,"skills":{"2":3,"3":3,"8":2,"9":3,"11":3,"12":3,"14":3,"19":1},"army":{"MountedSwordsman":35,"MountedMarksman":260},"type":47,"target":1254,"targetName":"Desert Bandit Leader"}},
	"06": {
		"7155.0":{"grid":1265,"name":"General 5","order":0,"time":10000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":126},"type":0,"target":2483,"targetName":"Desert Bandit Camp (medi..."},
		"127334.0":{"grid":1402,"name":"General Sylvana</b>","order":2,"time":29000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"MountedSwordsman":18,"MountedMarksman":162},"type":57,"target":2485,"targetName":"Desert Bandit Leader"}},
	"07": {"127334.0":{"grid":2746,"name":"General Sylvana</b>","order":2,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"MountedSwordsman":40,"Knight":17,"Besieger":123},"type":57,"target":2674,"targetName":"Desert Bandit Camp (easy)"}},
	// "08": {"64499.0":{"grid":2883,"name":"Major 1 (Major General) ","order":3,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"ArmoredMarksman":40,"MountedMarksman":200},"type":13,"target":1923,"targetName":"Desert Bandit Camp (hard)"}},
	"08": {"389191.0":{"grid":2883,"name":"OGG_1-Skills (Older Gemini General) ","order":3,"time":1000,"skills":{"2":3,"3":3,"8":2,"9":3,"11":3,"12":3,"14":3,"19":1},"army":{"MountedMarksman":295},"type":47,"target":1923,"targetName":"Desert Bandit Camp (hard)"}},
	"09": {
		"7155.0":{"grid":2609,"name":"General 5","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":160,"ArmoredMarksman":40},"type":0,"target":1305,"targetName":"Desert Bandit Camp (hard)"},
		"127334.0":{"grid":2746,"name":"General Sylvana</b>","order":2,"time":22000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Knight":105},"type":57,"target":964,"targetName":"Bandit Stronghold"},
		// "64499.0":{"grid":2883,"name":"Major 1 (Major General) ","order":3,"time":4000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Knight":90,"Besieger":180},"type":13,"target":964,"targetName":"Bandit Stronghold"}
		"389191.0":{"grid":2883,"name":"OGG_1-Skills (Older Gemini General) ","order":3,"time":1000,"skills":{"2":3,"3":3,"8":2,"9":3,"11":3,"12":3,"14":3,"19":1},"army":{"MountedMarksman":225},"type":47,"target":964,"targetName":"Bandit Stronghold"}
	}
}

var Woodcutter_A = {
	"01": {"524888.0":{"grid":6269,"name":"RG_1_Skills (Resolute General) ","order":5,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":50,"MountedMarksman":165},"type":79,"target":7027,"targetName":"Desert Bandit Camp (medi..."}},
	"02": {"524888.0":{"grid":6269,"name":"RG_1_Skills (Resolute General) ","order":4,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":50,"MountedMarksman":165},"type":79,"target":7369,"targetName":"Desert Bandit Leader"}},
	"03": {"127334.0":{"grid":7303,"name":"Sylvana_1-Skills","order":6,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedSwordsman":10,"Knight":95,"Besieger":90},"type":57,"target":6771,"targetName":"Desert Bandit Camp (easy)"}},
	"04": {
		"7155.0":{"grid":7440,"name":"General 5","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":200},"type":0,"target":5897,"targetName":"Desert Bandit Camp (hard)"},
		// major1 Swordman:40, MountedSwordman:180
		// "64499.0":{"grid":7440,"name":"Major 1 (Major General) ","order":2,"time":1000,"skills":{"3":1,"6":3,"11":3,"14":3},"army":{"Swordsman":10,"MountedSwordsman":200},"type":13,"target":5897,"targetName":"Desert Bandit Camp (hard)"},
		"39780.0":{"grid":7505,"name":"General 6","order":1,"time":4000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":150,"ArmoredMarksman":40},"type":0,"target":5021,"targetName":"Desert Bandit Camp (hard)"},
		// major2 																															Swordman:20, MountedSwordman:200, ArmoredMarksman:20
		// "64498.0":{"grid":7505,"name":"Major 2 (Major General) ","order":1,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Swordsman":25,"MountedSwordsman":175,"ArmoredMarksman":25},"type":13,"target":5021,"targetName":"Desert Bandit Camp (hard)"},
		"524888.0":{"grid":7636,"name":"RG_1_Skills (Resolute General) ","order":2,"time":6000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":50,"MountedSwordsman":1,"MountedMarksman":164},"type":79,"target":5155,"targetName":"Desert Bandit Leader"}},
	"05": {"127334.0":{"grid":5354,"name":"Sylvana_1-Skills","order":3,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":60,"Knight":135},"type":57,"target":4405,"targetName":"Desert Bandit Camp (hard)"}},
	"06": {
		"7155.0":{"grid":5087,"name":"General 5","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":150,"ArmoredMarksman":10},"type":0,"target":2093,"targetName":"Desert Bandit Camp (easy)"},
		"127334.0":{"grid":5354,"name":"Sylvana_1-Skills","order":1,"time":9000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedMarksman":125},"type":57,"target":802,"targetName":"Desert Bandit Camp (medi..."},
		"524888.0":{"grid":5491,"name":"RG_1_Skills (Resolute General) ","order":2,"time":4000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":45,"MountedSwordsman":45,"MountedMarksman":125},"type":79,"target":873,"targetName":"Desert Bandit Leader"}},
	"07": {
		"7155.0":{"grid":1400,"name":"General 5","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":164,"ArmoredMarksman":36},"type":0,"target":1528,"targetName":"Desert Bandit Camp (medi..."},
		// "64499.0":{"grid":1537,"name":"Major 1 (Major General) ","order":3,"time":30000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"MountedSwordsman":35,"MountedMarksman":125,"Besieger":110},"type":13,"target":1254,"targetName":"Desert Bandit Leader"}},
		"524888.0":{"grid":1537,"name":"RG_1-Skills (Older Gemini General) ","order":1,"time":22000,"skills":{"2":3,"3":3,"8":2,"9":3,"11":3,"12":3,"14":3,"19":1},"army":{"Swordsman": 80,"Knight": 20,"MountedMarksman": 115},"type":47,"target":1254,"targetName":"Desert Bandit Leader"},
		"39780.0":{"grid":1265,"name":"Major 1 (Major General)","order":2,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":126},"type":0,"target":2483,"targetName":"Desert Bandit Camp (medi..."},
		"127334.0":{"grid":1402,"name":"General Sylvana</b>","order":3,"time":31000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"MountedSwordsman":18,"MountedMarksman":162},"type":57,"target":2485,"targetName":"Desert Bandit Leader"}},
	"08": {"389488.0":{"grid":2746,"name":"YGG_1_1UP (Younger Gemini General) ","order":7,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":155},"type":50,"target":2674,"targetName":"Desert Bandit Camp (easy)"}},
	"09": {"127334.0":{"grid":2883,"name":"Sylvana_1-Skills","order":6,"time":15000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedMarksman":180},"type":57,"target":2674,"targetName":"Desert Bandit Camp (easy)"}},
	"10": {"524888.0":{"grid":2405,"name":"RG_1_Skills (Resolute General) ","order":5,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedMarksman":180},"type":79,"target":1923,"targetName":"Desert Bandit Camp (hard)"}},
	"11": {
		"39780.0":{"grid":2609,"name":"Major 1 (Major General)","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":160,"ArmoredMarksman":40},"type":0,"target":1305,"targetName":"Desert Bandit Camp (hard)"},
		"389488.0":{"grid":2746,"name":"YGG_1_1UP (Younger Gemini General) ","order":7,"time":22000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":155},"type":50,"target":964,"targetName":"Bandit Stronghold"},
		"127334.0":{"grid":2883,"name":"General Sylvana</b>","order":2,"time":1,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"MountedMarksman":195},"type":57,"target":964,"targetName":"Bandit Stronghold"}},
		// "389191.0":{"grid":2883,"name":"OGG_1-Skills (Older Gemini General) ","order":3,"time":1000,"skills":{"2":3,"3":3,"8":2,"9":3,"11":3,"12":3,"14":3,"19":1},"army":{"MountedMarksman":225},"type":47,"target":964,"targetName":"Bandit Stronghold"}},
}

var Woodcutter_Fast_A = {
	"01": {"524888.0":{"grid":6269,"name":"<b>RG_1_Skills</b> <font size='-3'>(Resolute General)</font>","order":9,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":50,"MountedMarksman":165},"type":79,"target":7027,"targetName":"Desert Bandit Camp (medi..."},
		"536169.0":{"grid":6134,"name":"<b>RG_2_skills</b> <font size='-3'>(Resolute General)</font>","order":10,"time":40000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":50,"MountedMarksman":165},"type":79,"target":7369,"targetName":"Desert Bandit Leader"},
		"127334.0":{"grid":5929,"name":"<b>Sylvana_1-Skills</b> <font size='-3'>(General Sylvana)</font>","order":11,"time":30000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedSwordsman":10,"Knight":95,"Besieger":90},"type":57,"target":6771,"targetName":"Desert Bandit Camp (easy)"}},
	"02": {"64499.0":{"grid":7440,"name":"<b>Major 1</b> <font size='-3'>(Major General)</font>","order":1,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Swordsman":10,"MountedSwordsman":200},"type":13,"target":5897,"targetName":"Desert Bandit Camp (hard)"},
		"64498.0":{"grid":7505,"name":"<b>Major 2</b> <font size='-3'>(Major General)</font>","order":2,"time":4000,"skills":{"3":3,"6":3,"11":3,"14":3},"army":{"Swordsman":25,"MountedSwordsman":175,"ArmoredMarksman":25},"type":13,"target":5021,"targetName":"Desert Bandit Camp (hard)"},
		"524888.0":{"grid":7636,"name":"<b>RG_1_Skills</b> <font size='-3'>(Resolute General)</font>","order":3,"time":4000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":50,"MountedSwordsman":1,"MountedMarksman":164},"type":79,"target":5155,"targetName":"Desert Bandit Leader"},
		"294792.0":{"grid":7364,"name":"<b>Sylvana_2-Skills</b> <font size='-3'>(General Sylvana)</font>","order":4,"time":4000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":60,"Knight":135},"type":57,"target":4405,"targetName":"Desert Bandit Camp (hard)"}},
	"03": {"7155.0":{"grid":5087,"name":"<b>General 5</b> <font size='-3'>(General)</font>","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":150,"ArmoredMarksman":10},"type":0,"target":2093,"targetName":"Desert Bandit Camp (easy)"},
		"127334.0":{"grid":5354,"name":"<b>Sylvana_1-Skills</b> <font size='-3'>(General Sylvana)</font>","order":1,"time":13000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedMarksman":125},"type":57,"target":802,"targetName":"Desert Bandit Camp (medi..."},
		"536169.0":{"grid":5491,"name":"<b>RG_2_skills</b> <font size='-3'>(Resolute General)</font>","order":2,"time":6000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":45,"MountedSwordsman":45,"MountedMarksman":125},"type":79,"target":873,"targetName":"Desert Bandit Leader"}},
	"04": {
		"39780.0":{"grid":1400,"name":"General 6","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":164,"ArmoredMarksman":36},"type":0,"target":1528,"targetName":"Desert Bandit Camp (medi..."},
		"524888.0":{"grid":1537,"name":"RG_1-Skills (Older Gemini General) ","order":1,"time":22000,"skills":{"2":3,"3":3,"8":2,"9":3,"11":3,"12":3,"14":3,"19":1},"army":{"Swordsman": 80,"Knight": 20,"MountedMarksman": 115},"type":47,"target":1254,"targetName":"Desert Bandit Leader"},
		"389488.0":{"grid":1943,"name":"<b>YGG_1_1UP</b> <font size='-3'>(Younger Gemini General)</font>","order":0,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":155},"type":50,"target":2674,"targetName":"Desert Bandit Camp (easy)"},
		"294792.0":{"grid":2691,"name":"<b>Sylvana_2-Skills</b> <font size='-3'>(General Sylvana)</font>","order":1,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedMarksman":195},"type":57,"target":2674,"targetName":"Desert Bandit Camp (easy)"},
		"64499.0":{"grid":1265,"name":"Major 1 (Major General)","order":2,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":126},"type":0,"target":2483,"targetName":"Desert Bandit Camp (medi..."},
		"63091.0":{"grid":1402,"name":"<b>Loner 1_skills</b> <font size='-3'>(Loner General)</font>","order":0,"time":31000,"skills":{"2":3,"3":3,"6":3,"8":2,"9":3,"11":3,"12":3,"19":1},"army":{"Knight":1},"type":67,"target":2485,"targetName":"Desert Bandit Leader"},
		"483089.0":{"grid":1806,"name":"<b>Ghost_1_TR_WW</b> <font size='-3'>(Ghost General)</font>","order":1,"time":14000,"skills":{"3":3,"6":3,"8":3,"11":3,"12":3,"14":3,"15":3},"army":{"Swordsman":40,"Knight":65,"MountedMarksman":125},"type":63,"target":2485,"targetName":"Desert Bandit Leader"}
	},
	"05": {"536169.0":{"grid":2405,"name":"RG_1_Skills (Resolute General) ","order":5,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedMarksman":180},"type":79,"target":1923,"targetName":"Desert Bandit Camp (hard)"},
		"64498.0":{"grid":2609,"name":"Major 2 (Major General)","order":0,"time":22000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":160,"ArmoredMarksman":40},"type":0,"target":1305,"targetName":"Desert Bandit Camp (hard)"},
		"483087.0":{"grid":2746,"name":"YGG_2_1UP (Younger Gemini General) ","order":7,"time":20000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":155},"type":50,"target":964,"targetName":"Bandit Stronghold"},
		"127334.0":{"grid":2883,"name":"General Sylvana</b>","order":2,"time":1,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"MountedMarksman":195},"type":57,"target":964,"targetName":"Bandit Stronghold"}},
}
var Woodcutter_Fast_B = {
	"01": {"524888.0":{"grid":6269,"name":"<b>RG_1_Skills</b> <font size='-3'>(Resolute General)</font>","order":9,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":50,"MountedMarksman":165},"type":79,"target":7027,"targetName":"Desert Bandit Camp (medi..."},
		"536169.0":{"grid":6134,"name":"<b>RG_2_skills</b> <font size='-3'>(Resolute General)</font>","order":10,"time":40000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":50,"MountedMarksman":165},"type":79,"target":7369,"targetName":"Desert Bandit Leader"},
		"127334.0":{"grid":5929,"name":"<b>Sylvana_1-Skills</b> <font size='-3'>(General Sylvana)</font>","order":11,"time":30000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedSwordsman":10,"Knight":95,"Besieger":90},"type":57,"target":6771,"targetName":"Desert Bandit Camp (easy)"}},
	"02": {"64499.0":{"grid":7440,"name":"<b>Major 1</b> <font size='-3'>(Major General)</font>","order":1,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Swordsman":10,"MountedSwordsman":200},"type":13,"target":5897,"targetName":"Desert Bandit Camp (hard)"},
		"64498.0":{"grid":7505,"name":"<b>Major 2</b> <font size='-3'>(Major General)</font>","order":2,"time":4000,"skills":{"3":3,"6":3,"11":3,"14":3},"army":{"Swordsman":25,"MountedSwordsman":175,"ArmoredMarksman":25},"type":13,"target":5021,"targetName":"Desert Bandit Camp (hard)"},
		"524888.0":{"grid":7636,"name":"<b>RG_1_Skills</b> <font size='-3'>(Resolute General)</font>","order":3,"time":4000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":50,"MountedSwordsman":1,"MountedMarksman":164},"type":79,"target":5155,"targetName":"Desert Bandit Leader"},
		"294792.0":{"grid":7364,"name":"<b>Sylvana_2-Skills</b> <font size='-3'>(General Sylvana)</font>","order":4,"time":4000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":60,"Knight":135},"type":57,"target":4405,"targetName":"Desert Bandit Camp (hard)"}},
	"03": {"589.0":{"grid":5087,"name":"<b>General 3</b> <font size='-3'>(General)</font>","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":150,"ArmoredMarksman":10},"type":0,"target":2093,"targetName":"Desert Bandit Camp (easy)"},
		"127334.0":{"grid":5354,"name":"<b>Sylvana_1-Skills</b> <font size='-3'>(General Sylvana)</font>","order":1,"time":13000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedMarksman":125},"type":57,"target":802,"targetName":"Desert Bandit Camp (medi..."},
		"536169.0":{"grid":5491,"name":"<b>RG_2_skills</b> <font size='-3'>(Resolute General)</font>","order":2,"time":6000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":45,"MountedSwordsman":45,"MountedMarksman":125},"type":79,"target":873,"targetName":"Desert Bandit Leader"}},
	"04": {
		"6878.0":{"grid":1400,"name":"General 4","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":164,"ArmoredMarksman":36},"type":0,"target":1528,"targetName":"Desert Bandit Camp (medi..."},
		"524888.0":{"grid":1537,"name":"RG_1-Skills (Older Gemini General) ","order":1,"time":22000,"skills":{"2":3,"3":3,"8":2,"9":3,"11":3,"12":3,"14":3,"19":1},"army":{"Swordsman": 80,"Knight": 20,"MountedMarksman": 115},"type":47,"target":1254,"targetName":"Desert Bandit Leader"},
		"389488.0":{"grid":1943,"name":"<b>YGG_1_1UP</b> <font size='-3'>(Younger Gemini General)</font>","order":0,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":155},"type":50,"target":2674,"targetName":"Desert Bandit Camp (easy)"},
		"294792.0":{"grid":2691,"name":"<b>Sylvana_2-Skills</b> <font size='-3'>(General Sylvana)</font>","order":1,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedMarksman":195},"type":57,"target":2674,"targetName":"Desert Bandit Camp (easy)"},
		"64499.0":{"grid":1265,"name":"Major 1 (Major General)","order":2,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":126},"type":0,"target":2483,"targetName":"Desert Bandit Camp (medi..."},
		"63091.0":{"grid":1402,"name":"<b>Loner 1_skills</b> <font size='-3'>(Loner General)</font>","order":0,"time":31000,"skills":{"2":3,"3":3,"6":3,"8":2,"9":3,"11":3,"12":3,"19":1},"army":{"Knight":1},"type":67,"target":2485,"targetName":"Desert Bandit Leader"},
		"483089.0":{"grid":1806,"name":"<b>Ghost_1_TR_WW</b> <font size='-3'>(Ghost General)</font>","order":1,"time":14000,"skills":{"3":3,"6":3,"8":3,"11":3,"12":3,"14":3,"15":3},"army":{"Swordsman":40,"Knight":65,"MountedMarksman":125},"type":63,"target":2485,"targetName":"Desert Bandit Leader"}
	},
	"05": {"536169.0":{"grid":2405,"name":"RG_1_Skills (Resolute General) ","order":5,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedMarksman":180},"type":79,"target":1923,"targetName":"Desert Bandit Camp (hard)"},
		"64498.0":{"grid":2609,"name":"Major 2 (Major General)","order":0,"time":22000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":160,"ArmoredMarksman":40},"type":0,"target":1305,"targetName":"Desert Bandit Camp (hard)"},
		"483087.0":{"grid":2746,"name":"YGG_2_1UP (Younger Gemini General) ","order":7,"time":20000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":155},"type":50,"target":964,"targetName":"Bandit Stronghold"},
		"127334.0":{"grid":2883,"name":"General Sylvana</b>","order":2,"time":1,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"MountedMarksman":195},"type":57,"target":964,"targetName":"Bandit Stronghold"}},
}

var Woodcutter_RG_Execution = [
	// {"name": "", "action": , "timeToNextStep": 1},
				// isRegroupDisabled: isRegroupDisabled,
				// isMoveDisabled: isMoveDisabled,
				// isAttackDisabled: isAttackDisabled,
	// {
	// 	attackId: execution.condition.attackId,
	// 	type: execution.condition.type,
	// 	value: execution.condition.value
	// }
	{"name": "att01 to star",		"action": createActionWithParameters(jzv2_toStarByAttackId, ["01"]), 		"timeToNextStep": 25*1000},
	{"name": "att01 Load units",    "action": createActionWithParameters(jzv2_regroupGeneralByAttackId, ["01"]),"timeToNextStep": 100},
	{"name": "att01 Move",     		"action": createActionWithParameters(jzv2_moveGeneralByAttackId, ["01"]), 	"timeToNextStep": 35*1000 },
	{"name": "att01 Attack",   		"action": createActionWithParameters(jzv2_attackCampByAttackId, ["01"]), 	"timeToNextStep": 180*1000 }, //"condition": {"attackId": "01", "type": "isAttackDisabled", "value": "false"}},
	{"name": "Unload all units",    "action": createActionWithoutParameters(jzv2_unloadAllUnits), 				"timeToNextStep": 5000},
	{"name": "att02 load units",    "action": createActionWithParameters(jzv2_regroupGeneralByAttackId, ["02"]),"timeToNextStep": 6000},
	{"name": "att02 Attack",   		"action": createActionWithParameters(jzv2_attackCampByAttackId, ["02"]), 	"timeToNextStep": 180*1000 },
	{"name": "Unload all units",    "action": createActionWithoutParameters(jzv2_unloadAllUnits),				"timeToNextStep": 5000},
	{"name": "att03 to star",		"action": createActionWithParameters(jzv2_toStarByAttackId, ["03"]), 		"timeToNextStep": 25*1000},
	{"name": "att03 Load units",    "action": createActionWithParameters(jzv2_regroupGeneralByAttackId, ["03"]),"timeToNextStep": 500},
	{"name": "att03 Move",    	 	"action": createActionWithParameters(jzv2_moveGeneralByAttackId, ["03"]), 	"timeToNextStep": 31*1000 },
	{"name": "att03 Attack",   		"action": createActionWithParameters(jzv2_attackCampByAttackId, ["03"]), 	"timeToNextStep": 20*1000 },
	{"name": "att04 to star",		"action": createActionWithParameters(jzv2_toStarByAttackId, ["04"]), 		"timeToNextStep": 30*1000},
	{"name": "att04 Load units",    "action": createActionWithParameters(jzv2_regroupGeneralByAttackId, ["04"]),"timeToNextStep": 500},
	{"name": "att04 Move",    	 	"action": createActionWithParameters(jzv2_moveGeneralByAttackId, ["04"]), 	"timeToNextStep": 35*1000 },
	{"name": "att04 Attack",   		"action": createActionWithParameters(jzv2_attackCampByAttackId, ["04"]), 	"timeToNextStep": 160*1000 },
	{"name": "att05 to star",		"action": createActionWithParameters(jzv2_toStarByAttackId, ["05"]), 		"timeToNextStep": 180*1000},
	{"name": "att05 Load units",    "action": createActionWithParameters(jzv2_regroupGeneralByAttackId, ["05"]),"timeToNextStep": 500},
	{"name": "att05 Move",    	 	"action": createActionWithParameters(jzv2_moveGeneralByAttackId, ["05"]), 	"timeToNextStep": 31*1000 },
	{"name": "att05 Attack",   		"action": createActionWithParameters(jzv2_attackCampByAttackId, ["05"]), 	"timeToNextStep": 130*1000 },
	{"name": "att06 to star",		"action": createActionWithParameters(jzv2_toStarByAttackId, ["07"]), 		"timeToNextStep": 30*1000}, // yes 07
	{"name": "att06 Load units",    "action": createActionWithParameters(jzv2_regroupGeneralByAttackId, ["06"]),"timeToNextStep": 3000},
	{"name": "att06 Move",   	  	"action": createActionWithParameters(jzv2_moveGeneralByAttackId, ["06"]), 	"timeToNextStep": 35*1000 },
	{"name": "att06 Attack",   		"action": createActionWithParameters(jzv2_attackCampByAttackId, ["06"]), 	"timeToNextStep": 420*1000 },
	{"name": "att08 to star",		"action": createActionWithParameters(jzv2_toStarByAttackId, ["08"]), 		"timeToNextStep": 500},
	{"name": "att11 to star",		"action": createActionWithParameters(jzv2_toStarByAttackId, ["11"]), 		"timeToNextStep": 500},
	{"name": "att07 to star",		"action": createActionWithParameters(jzv2_toStarByAttackId, ["07"]), 		"timeToNextStep": 25*1000},
	{"name": "att07 Load units",    "action": createActionWithParameters(jzv2_regroupGeneralByAttackId, ["07"]),"timeToNextStep": 500},
	{"name": "att07 Move",   	  	"action": createActionWithParameters(jzv2_moveGeneralByAttackId, ["07"]), 	"timeToNextStep": 35*1000 },
	{"name": "att07 Attack",   		"action": createActionWithParameters(jzv2_attackCampByAttackId, ["07"]), 	"timeToNextStep": 190*1000 },
	{"name": "att08 Load units",    "action": createActionWithParameters(jzv2_regroupGeneralByAttackId, ["08"]),"timeToNextStep": 500},
	{"name": "att08 Move",     		"action": createActionWithParameters(jzv2_moveGeneralByAttackId, ["08"]), 	"timeToNextStep": 35*1000 },
	{"name": "att08 Attack",   		"action": createActionWithParameters(jzv2_attackCampByAttackId, ["08"]), 	"timeToNextStep": 10000 },
	{"name": "att09 to star",		"action": createActionWithParameters(jzv2_toStarByAttackId, ["07"]), 		"timeToNextStep": 500},
	{"name": "att09 to star",		"action": createActionWithParameters(jzv2_toStarByAttackId, ["11"]), 		"timeToNextStep": 30*1000},
	{"name": "att09 Load units",    "action": createActionWithParameters(jzv2_regroupGeneralByAttackId, ["09"]),"timeToNextStep": 500},
	{"name": "att10 Load units",    "action": createActionWithParameters(jzv2_regroupGeneralByAttackId, ["10"]),"timeToNextStep": 500},
	{"name": "att09 Move",    	 	"action": createActionWithParameters(jzv2_moveGeneralByAttackId, ["11"]), 	"timeToNextStep": 500 },
	{"name": "att10 Move",    	 	"action": createActionWithParameters(jzv2_moveGeneralByAttackId, ["10"]), 	"timeToNextStep": 35*1000 },
	{"name": "att09 Attack",   		"action": createActionWithParameters(jzv2_attackCampByAttackId, ["09"]), 	"timeToNextStep": 40*1000 },
	{"name": "att10 Attack",   		"action": createActionWithParameters(jzv2_attackCampByAttackId, ["10"]), 	"timeToNextStep": 60*1000 },
	{"name": "att11 Load units",    "action": createActionWithParameters(jzv2_regroupGeneralByAttackId, ["11"]),"timeToNextStep": 6000},
	{"name": "att11 Attack",   		"action": createActionWithParameters(jzv2_attackCampByAttackId, ["11"]), 	"timeToNextStep": 10*1000 },
	{"name": "Load to quatermaster", "action": createActionWithoutParameters(jz_loadRemainingArmy), "timeToNextStep": 11*1000},
    {"name": "handle questbook",	 "action": createActionWithoutParameters(jz_handleQuestBook), 				"timeToNextStep": 1*1000},
];

var Woodcutter_B = {
	// RG_2_Skills = "536169"; Sylvana_2 = "294792"; General_3 = "589"; General_4 = "6878"; YGG_2 = "483087";
	"01": {"536169.0":{"grid":6269,"name":"RG_2_Skills (Resolute General) ","order":5,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":50,"MountedMarksman":165},"type":79,"target":7027,"targetName":"Desert Bandit Camp (medi..."}},
	"02": {"536169.0":{"grid":6269,"name":"RG_2_Skills (Resolute General) ","order":4,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":50,"MountedMarksman":165},"type":79,"target":7369,"targetName":"Desert Bandit Leader"}},
	"03": {"294792.0":{"grid":7303,"name":"Sylvana_2-Skills","order":6,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedSwordsman":10,"Knight":95,"Besieger":90},"type":57,"target":6771,"targetName":"Desert Bandit Camp (easy)"}},
	"04": {
		"589.0":{"grid":7440,"name":"General 3","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":200},"type":0,"target":5897,"targetName":"Desert Bandit Camp (hard)"},
		"6878.0":{"grid":7505,"name":"General 4","order":1,"time":4000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":150,"ArmoredMarksman":40},"type":0,"target":5021,"targetName":"Desert Bandit Camp (hard)"},
		"536169.0":{"grid":7636,"name":"RG_2_Skills (Resolute General) ","order":2,"time":6000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":50,"MountedSwordsman":1,"MountedMarksman":164},"type":79,"target":5155,"targetName":"Desert Bandit Leader"}},
	"05": {"294792.0":{"grid":5354,"name":"Sylvana_2-Skills","order":3,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":60,"Knight":135},"type":57,"target":4405,"targetName":"Desert Bandit Camp (hard)"}},
	"06": {
		"589.0":{"grid":5087,"name":"General 3","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":150,"ArmoredMarksman":10},"type":0,"target":2093,"targetName":"Desert Bandit Camp (easy)"},
		"294792.0":{"grid":5354,"name":"Sylvana_2-Skills","order":1,"time":9000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedMarksman":125},"type":57,"target":802,"targetName":"Desert Bandit Camp (medi..."},
		"536169.0":{"grid":5491,"name":"RG_2_Skills (Resolute General) ","order":2,"time":4000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":45,"MountedSwordsman":45,"MountedMarksman":125},"type":79,"target":873,"targetName":"Desert Bandit Leader"}},
	"07": {
		"6878.0":{"grid":1400,"name":"General 4","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":164,"ArmoredMarksman":36},"type":0,"target":1528,"targetName":"Desert Bandit Camp (medi..."},
		"536169.0":{"grid":1537,"name":"RG_1-Skills (Older Gemini General) ","order":1,"time":22000,"skills":{"2":3,"3":3,"8":2,"9":3,"11":3,"12":3,"14":3,"19":1},"army":{"Swordsman": 80,"Knight": 20,"MountedMarksman": 115},"type":47,"target":1254,"targetName":"Desert Bandit Leader"},
		"589.0":{"grid":1265,"name":"General 3","order":2,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":126},"type":0,"target":2483,"targetName":"Desert Bandit Camp (medi..."},
		"294792.0":{"grid":1402,"name":"Sylvana_2</b>","order":3,"time":31000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"MountedSwordsman":18,"MountedMarksman":162},"type":57,"target":2485,"targetName":"Desert Bandit Leader"}},
	"08": {"483087.0":{"grid":2746,"name":"YGG_2","order":7,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":155},"type":50,"target":2674,"targetName":"Desert Bandit Camp (easy)"}},
	"09": {"294792.0":{"grid":2883,"name":"Sylvana_2-Skills","order":6,"time":15000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedMarksman":180},"type":57,"target":2674,"targetName":"Desert Bandit Camp (easy)"}},
	"10": {"536169.0":{"grid":2405,"name":"RG_2_Skills (Resolute General) ","order":5,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedMarksman":180},"type":79,"target":1923,"targetName":"Desert Bandit Camp (hard)"}},
	"11": {
		"589.0":{"grid":2609,"name":"General 3","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":160,"ArmoredMarksman":40},"type":0,"target":1305,"targetName":"Desert Bandit Camp (hard)"},
		"483087.0":{"grid":2746,"name":"YGG_2","order":7,"time":22000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":155},"type":50,"target":964,"targetName":"Bandit Stronghold"},
		"294792.0":{"grid":2883,"name":"Sylvana_2</b>","order":2,"time":1,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"MountedMarksman":195},"type":57,"target":964,"targetName":"Bandit Stronghold"}},
}

var theSiege = {
	"01": {"64499.0":{"grid":3863,"name":"Major 1 (Major General) ","order":0,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Cavalry":270},"type":13,"target":4811,"targetName":"Bandit Camp (easy)"}},
	"02": {"294792.0":{"grid":3796,"name":"Sylvana 2 (Major General) ","order":1,"time":1000,"skills":{"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":24,"EliteSoldier":1,"Cavalry":155},"type":13,"target":4195,"targetName":"Bandit Leader"}},
	"03": {"64499.0":{"grid":3787,"name":"Major 1 (Major General) ","order":0,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":10,"EliteSoldier":1,"Cavalry":259},"type":13,"target":3103,"targetName":"Bandit Camp (easy)"}},
	"04": {"64498.0":{"grid":3922,"name":"Major 2 (Major General) ","order":0,"time":1000,"skills":{"3":1,"6":3,"11":3,"14":3},"army":{"Cavalry":270},"type":13,"target":3304,"targetName":"Bandit Camp (easy)"}},
	"05": {"294792.0":{"grid":4264,"name":"Sylvana 2 (Major General) ","order":0,"time":1000,"skills":{"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":11,"EliteSoldier":1,"Cavalry":168},"type":13,"target":3439,"targetName":"Bandit Leader"}},
	"06": {"64499.0":{"grid":3981,"name":"Major 1 (Major General) ","order":0,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":4,"EliteSoldier":1,"Cavalry":265},"type":13,"target":4455,"targetName":"Bandit Camp (easy)"}},
	"07": {"64498.0":{"grid":3641,"name":"Major 2 (Major General) ","order":0,"time":1000,"skills":{"3":1,"6":3,"11":3,"14":3},"army":{"Recruit":49,"EliteSoldier":1,"Cavalry":220},"type":13,"target":4588,"targetName":"Bandit Camp (easy)"}},
	"08": {"294792.0":{"grid":3506,"name":"Sylvana 2 (Major General) ","order":0,"time":1000,"skills":{"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":17,"EliteSoldier":1,"Cavalry":162},"type":13,"target":4584,"targetName":"Bandit Leader"}},
	"09": {"64499.0":{"grid":4379,"name":"Major 1 (Major General) ","order":0,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Cavalry":270},"type":13,"target":4173,"targetName":"Watchtower"}},
	"10": {"294792.0":{"grid":4516,"name":"Sylvana 2 (Major General) ","order":1,"time":1000,"skills":{"3":3,"6":3,"11":3,"14":3},"army":{"Cavalry":195},"type":13,"target":4376,"targetName":"Watchtower"}},
	"11": {"64498.0":{"grid":4651,"name":"Major 2 (Major General) ","order":0,"time":1000,"skills":{"3":1,"6":3,"11":3,"14":3},"army":{"Recruit":64,"EliteSoldier":1,"Cannoneer":205},"type":13,"target":6067,"targetName":"Siege Command Camp"}},
	"12": {"64499.0":{"grid":4379,"name":"Major 1 (Major General) ","order":0,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":101,"EliteSoldier":1,"Cannoneer":168},"type":13,"target":4170,"targetName":"Siege Vanguard Camp"}}
}

var theSiegeP2 = {
	"01": {"64499.0":{"grid":1686,"name":"Major 1 (Major General) ","order":0,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Cavalry":270},"type":13,"target":1204,"targetName":"Bandit Camp (easy)"}},
	"02": {"294792.0":{"grid":1821,"name":"Sylvana 2","order":0,"time":1000,"skills":{"3":1,"6":3,"11":3,"14":3},"army":{"Recruit":24,"EliteSoldier":1,"Cavalry":155},"type":13,"target":998,"targetName":"Bandit Leader"}},
	"03": {"64498.0":{"grid":998,"name":"Mayor 2 (Major General) ","order":0,"time":1000,"skills":{"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":10,"EliteSoldier":1,"Cavalry":259},"type":13,"target":1471,"targetName":"Bandit Camp (easy)"}},
	"04": {"64499.0":{"grid":1067,"name":"Major 1 (Major General) ","order":0,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Cavalry":270},"type":13,"target":1810,"targetName":"Bandit Camp (easy)"}},
	"05": {"294792.0":{"grid":1204,"name":"Sylvana 2","order":1,"time":1000,"skills":{"3":1,"6":3,"11":3,"14":3},"army":{"Recruit":11,"EliteSoldier":1,"Cavalry":168},"type":13,"target":2221,"targetName":"Bandit Leader"}},
	"06": {"64498.0":{"grid":1947,"name":"Mayor 2 (Major General) ","order":1,"time":1000,"skills":{"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":4,"EliteSoldier":1,"Cavalry":265},"type":13,"target":1737,"targetName":"Bandit Camp (easy)"}},
	"07": {"64499.0":{"grid":2151,"name":"Major 1 (Major General) ","order":0,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":49,"EliteSoldier":1,"Cavalry":220},"type":13,"target":1597,"targetName":"Bandit Camp (easy)"}},
	"08": {"294792.0":{"grid":2016,"name":"Sylvana 2","order":0,"time":1000,"skills":{"3":1,"6":3,"11":3,"14":3},"army":{"Recruit":17,"EliteSoldier":1,"Cavalry":162},"type":13,"target":1730,"targetName":"Bandit Leader"}},
	"09": {"64498.0":{"grid":1730,"name":"Mayor 2 (Major General) ","order":1,"time":1000,"skills":{"3":3,"6":3,"11":3,"14":3},"army":{"Cavalry":270},"type":13,"target":1930,"targetName":"Watchtower"}},
	"10": {"64499.0":{"grid":1664,"name":"Major 1 (Major General) ","order":0,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":101,"EliteSoldier":1,"Cannoneer":168},"type":13,"target":2267,"targetName":"Siege Vanguard Camp"}},
	"11": {"294792.0":{"grid":1597,"name":"Sylvana 2","order":1,"time":1000,"skills":{"3":1,"6":3,"11":3,"14":3},"army":{"Recruit":64,"EliteSoldier":1,"Cannoneer":205},"type":13,"target":3023,"targetName":"Siege Command Camp"}}
}

var DarkPrists = {
	"01": {"64499.0":{"grid":2361,"name":"Major 1 (Major General) ","order":1,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":8,"EliteSoldier":1,"Cavalry":261},"type":13,"target":2227,"targetName":"Dark Cult Camp (easy)"}},
	"02": {"127334.0":{"grid":2224,"name":"General Sylvana</b>","order":0,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Recruit":180},"type":57,"target":1479,"targetName":"Dark Cult Leader"}},
	"03": {"149369.0":{"grid":2693,"name":"Major 3 (Major General) ","order":1,"time":1000,"skills":{"3":1,"6":3,"11":3,"14":3},"army":{"Recruit":19,"Cannoneer":100},"type":13,"target":3161,"targetName":"Bandit Camp (easy)"}},
	"04": {"64498.0":{"grid":2489,"name":"Mayor 2 (Major General) ","order":3,"time":1000,"skills":{"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":38,"Cannoneer":100},"type":13,"target":2617,"targetName":"Bandit Leader"}},
	"05": {"127334.0":{"grid":1613,"name":"General Sylvana</b>","order":0,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Recruit":180},"type":57,"target":1129,"targetName":"Dark Cult Leader"}},
	"06": {"127334.0":{"grid":1613,"name":"General Sylvana</b>","order":0,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Recruit":87,"Cannoneer":93},"type":57,"target":999,"targetName":"Dark Castle"}},
	"07": {"64499.0":{"grid":1996,"name":"Major 1 (Major General) ","order":0,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Cavalry":270},"type":13,"target":1111,"targetName":"Dark Cult Camp (easy)"}},
	"08": {"127334.0":{"grid":2133,"name":"General Sylvana</b>","order":0,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Recruit":180},"type":57,"target":1649,"targetName":"Dark Cult Camp (easy)"}},
	"09": {"127334.0":{"grid":2133,"name":"General Sylvana</b>","order":0,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Recruit":51,"Cannoneer":129},"type":57,"target":1848,"targetName":"Bone Church"}}
}

var TikkiIsland = {
	"01": {"127334.0":{"grid":5063,"name":"General Sylvana</b>","order":0,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Recruit":47,"Cannoneer":133},"type":57,"target":4794,"targetName":"Raiders Camp (easy)"}},
	"02": {"127334.0":{"grid":5063,"name":"General Sylvana</b>","order":0,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Recruit":71,"Cannoneer":109},"type":57,"target":4389,"targetName":"Raiders Camp (easy)"}},
	"03": {"127334.0":{"grid":5063,"name":"General Sylvana</b>","order":0,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Recruit":105,"Cannoneer":75},"type":57,"target":3704,"targetName":"Raiders Camp (easy)"}},
	"04": {"127334.0":{"grid":5063,"name":"General Sylvana</b>","order":0,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Recruit":41,"Cannoneer":139},"type":57,"target":3431,"targetName":"Chieftain's Tent"}},
	"05": {"127334.0":{"grid":3362,"name":"General Sylvana</b>","order":0,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Recruit":60,"EliteSoldier":120},"type":57,"target":2689,"targetName":"Raiders Camp (easy)"}},
	"06":{"127334.0":{"grid":3362,"name":"General Sylvana</b>","order":0,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Recruit":63,"Cannoneer":117},"type":57,"target":2623,"targetName":"Raiders Leader"}}
}

var SecondThief = {
	"01": {"63091.0":{"grid":6888,"name":"Loner 1 (Loner General) ","order":0,"time":1000,"skills":{"0":2,"3":3,"6":3,"8":1,"9":1,"11":3,"13":2,"14":3,"15":2,"18":1},"army":{"Bowman":220},"type":67,"target":4325,"targetName":"Desert Bandit Camp (hard)"},
		"64499.0":{"grid":7023,"name":"Major 1 (Major General) ","order":1,"time":4000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"MountedSwordsman":36,"MountedMarksman":234},"type":13,"target":4325,"targetName":"Desert Bandit Camp (hard)"},
		"127334.0":{"grid":7158,"name":"General Sylvana</b>","order":2,"time":13000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Knight":180},"type":57,"target":4124,"targetName":"Raiders Leader"},
		"294792.0":{"grid":7293,"name":"General Sylvana 2</b>","order":3,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"MountedSwordsman":20,"MountedMarksman":160},"type":57,"target":3715,"targetName":"Raiders Leader"}},
	"02": {"64499.0":{"grid":7023,"name":"Major 1 (Major General) ","order":3,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"MountedMarksman":270},"type":13,"target":2348,"targetName":"Desert Bandit Camp (hard)"},
		"127334.0":{"grid":7158,"name":"General Sylvana 1</b>","order":4,"time":2000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Knight":180},"type":57,"target":2076,"targetName":"Ancient Ruin"}},
	"03": {"262.0":{"grid":2873,"name":"General 1","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":1},"type":0,"target":4304,"targetName":"Desert Bandit Camp (easy)"},
		"294792.0":{"grid":2601,"name":"Silvana 2 (Major General) ","order":5,"time":4000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Knight":150,"Besieger":45},"type":13,"target":4239,"targetName":"Caravan Camp"}},
	"04": {"6365.0":{"grid":3918,"name":"General 2","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":1},"type":0,"target":5751,"targetName":"Desert Bandit Camp (hard)"},
		"64498.0":{"grid":3646,"name":"Major 2 (Major General) ","order":4,"time":4000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"MountedSwordsman":4,"MountedMarksman":66,"Besieger":200},"type":13,"target":6502,"targetName":"Caravan Camp"},
		"589.0":{"grid":3848,"name":"General 3","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":170,"MountedMarksman":30},"type":0,"target":4811,"targetName":"Desert Bandit Camp (hard)"},
		"6878.0":{"grid":4120,"name":"General 4","order":1,"time":4000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":160,"ArmoredMarksman":40},"type":0,"target":5220,"targetName":"Desert Bandit Camp (hard)"},
		"294792.0":{"grid":3436,"name":"General Sylvana 2</b>","order":2,"time":4000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"MountedSwordsman":25,"Knight":13,"Besieger":142},"type":57,"target":4950,"targetName":"Caravan Camp"}},
	"05": {"127334.0":{"grid":2143,"name":"General Sylvana</b>","order":1,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Cavalry":180},"type":57,"target":2771,"targetName":"Desert Bandit Camp (hard)"},
		"64499.0":{"grid":2278,"name":"Major 1 (Major General) ","order":2,"time":5000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"MountedSwordsman":23,"ArmoredMarksman":12,"MountedMarksman":235},"type":13,"target":2771,"targetName":"Desert Bandit Camp (hard)"},
		"64498.0":{"grid":2348,"name":"Mayor 2 (Major General) ","order":2,"time":20000,"skills":{"3":3,"6":3,"11":3,"14":3},"army":{"MountedSwordsman":43,"Knight":59,"Besieger":168},"type":13,"target":3179,"targetName":"Desert Bandit Camp (hard)"}},
	"06": {"64499.0":{"grid":2278,"name":"Major 1 (Major General) ","order":7,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"MountedSwordsman":55,"Besieger":200},"type":13,"target":2776,"targetName":"Raiders Leader"},
		"64498.0":{"grid":2348,"name":"Major 1 (Major General) ","order":7,"time":6000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"MountedSwordsman":82,"MountedMarksman":188},"type":13,"target":3385,"targetName":"Oasis Leader Camp"}},
	"07": {"294792.0":{"grid":6086,"name":"General Sylvana 2 (Major General) ","order":10,"time":1000,"skills":{"3":3,"6":3,"11":3,"14":3},"army":{"MountedSwordsman":60,"ArmoredMarksman":50, "MountedMarksman":85},"type":13,"target":6834,"targetName":"Raiders Leader"}}
}


var TheWhirlwind_P1_A = {
	"01": {"64499.0":{"grid":7565,"name":"Major 1 (Major General) ","order":1,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":43,"EliteSoldier":1,"Cavalry":226},"type":13,"target":7367,"targetName":"Bandit Camp (easy)"}},
	"02": {"64498.0":{"grid":7699,"name":"Major 2 (Major General) ","order":1,"time":1000,"skills":{"3":1,"6":3,"11":3,"14":3},"army":{"Recruit":96,"Cavalry":110,"Cannoneer":64},"type":13,"target":7777,"targetName":"Bandit Camp (easy)"}},
	"03": {"127334.0":{"grid":7905,"name":"Sylvana 1","order":2,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Recruit":59,"Cannoneer":121},"type":57,"target":7576,"targetName":"Bandit Leader"}},
	"04": {"64499.0":{"grid":7565,"name":"Major 1 (Major General) ","order":1,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":182,"Cannoneer":88},"type":13,"target":7178,"targetName":"Bandit Camp (easy)"}},
	"05": {"127334.0":{"grid":7905,"name":"Sylvana 1","order":3,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Recruit":91,"Cannoneer":89},"type":57,"target":7115,"targetName":"Bandit Camp (easy)"}},
	"06": {"64498.0":{"grid":7699,"name":"Major 2 (Major General) ","order":2,"time":1000,"skills":{"3":1,"6":3,"11":3,"14":3},"army":{"Recruit":100,"Cannoneer":170},"type":13,"target":6641,"targetName":"Bandit Camp (easy)"}},
	"07": {"64499.0":{"grid":7565,"name":"Major 1 (Major General) ","order":1,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Militia":64,"EliteSoldier":1,"Cavalry":130,"Cannoneer":75},"type":13,"target":6100,"targetName":"Forward Guard Leader"}},
	"08": {"64498.0":{"grid":6776,"name":"Major 2 (Major General) ","order":2,"time":1000,"skills":{"3":1,"6":3,"11":3,"14":3},"army":{"Recruit":91,"EliteSoldier":1,"Cannoneer":178},"type":13,"target":5280,"targetName":"Bandit Camp (easy)"}},
	"09": {"64499.0":{"grid":6980,"name":"Major 1 (Major General) ","order":1,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":107,"EliteSoldier":1,"Cannoneer":162},"type":13,"target":4533,"targetName":"Bandit Camp (easy)"}},
	"10": {"127334.0":{"grid":7045,"name":"Sylvana 1","order":5,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Militia":90,"Cannoneer":90},"type":57,"target":4191,"targetName":"Inner Fort"}},
	"11": {"64498.0":{"grid":4391,"name":"Mayor 2 (Major General) ","order":2,"time":1000,"skills":{"3":3,"6":3,"11":3,"14":3},"army":{"Cavalry":270},"type":13,"target":3975,"targetName":"Watchtower"}},
	"12": {"127334.0":{"grid":5347,"name":"Sylvana 1","order":5,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Recruit":180},"type":57,"target":3837,"targetName":"Fortified Storehouse"}},
	"13": {"64499.0":{"grid":5482,"name":"Major 1 (Major General) ","order":1,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":90,"EliteSoldier":1,"Crossbowman":179},"type":13,"target":3837,"targetName":"Fortified Storehouse"}}
}

var TheWhirlwind_P1_B = {
	"01": {"589.0":{"grid":7565,"name":"Major 1 (Major General) ","order":1,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":43,"EliteSoldier":1,"Cavalry":226},"type":13,"target":7367,"targetName":"Bandit Camp (easy)"}},
	"02": {"64498.0":{"grid":7699,"name":"Major 2 (Major General) ","order":1,"time":1000,"skills":{"3":1,"6":3,"11":3,"14":3},"army":{"Recruit":96,"Cavalry":110,"Cannoneer":64},"type":13,"target":7777,"targetName":"Bandit Camp (easy)"}},
	"03": {"127334.0":{"grid":7905,"name":"Sylvana 1","order":2,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Recruit":59,"Cannoneer":121},"type":57,"target":7576,"targetName":"Bandit Leader"}},
	"04": {"589.0":{"grid":7565,"name":"Major 1 (Major General) ","order":1,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":182,"Cannoneer":88},"type":13,"target":7178,"targetName":"Bandit Camp (easy)"}},
	"05": {"127334.0":{"grid":7905,"name":"Sylvana 1","order":3,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Recruit":91,"Cannoneer":89},"type":57,"target":7115,"targetName":"Bandit Camp (easy)"}},
	"06": {"64498.0":{"grid":7699,"name":"Major 2 (Major General) ","order":2,"time":1000,"skills":{"3":1,"6":3,"11":3,"14":3},"army":{"Recruit":100,"Cannoneer":170},"type":13,"target":6641,"targetName":"Bandit Camp (easy)"}},
	"07": {"589.0":{"grid":7565,"name":"Major 1 (Major General) ","order":1,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Militia":64,"EliteSoldier":1,"Cavalry":130,"Cannoneer":75},"type":13,"target":6100,"targetName":"Forward Guard Leader"}},
	"08": {"64498.0":{"grid":6776,"name":"Major 2 (Major General) ","order":2,"time":1000,"skills":{"3":1,"6":3,"11":3,"14":3},"army":{"Recruit":91,"EliteSoldier":1,"Cannoneer":178},"type":13,"target":5280,"targetName":"Bandit Camp (easy)"}},
	"09": {"589.0":{"grid":6980,"name":"Major 1 (Major General) ","order":1,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":107,"EliteSoldier":1,"Cannoneer":162},"type":13,"target":4533,"targetName":"Bandit Camp (easy)"}},
	"10": {"127334.0":{"grid":7045,"name":"Sylvana 1","order":5,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Militia":90,"Cannoneer":90},"type":57,"target":4191,"targetName":"Inner Fort"}},
	"11": {"64498.0":{"grid":4391,"name":"Mayor 2 (Major General) ","order":2,"time":1000,"skills":{"3":3,"6":3,"11":3,"14":3},"army":{"Cavalry":270},"type":13,"target":3975,"targetName":"Watchtower"}},
	"12": {"589.0":{"grid":5347,"name":"Sylvana 1","order":5,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Recruit":180},"type":57,"target":3837,"targetName":"Fortified Storehouse"}},
	"13": {"589.0":{"grid":5482,"name":"Major 1 (Major General) ","order":1,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":90,"EliteSoldier":1,"Crossbowman":179},"type":13,"target":3837,"targetName":"Fortified Storehouse"}}
}

var TheWhirlwind_P2_B = {
	"01": {"149369.0":{"grid":5221,"name":"Major 3 (Major General) ","order":1,"time":1000,"skills":{"3":1,"6":3,"11":3,"14":3},"army":{"Recruit":43,"EliteSoldier":1,"Cavalry":226},"type":13,"target":4880,"targetName":"Bandit Camp (easy)"}},
	"02": {"261006.0":{"grid":5223,"name":"Major 4 (Major General) ","order":1,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"Recruit":96,"Cavalry":110,"Cannoneer":64},"type":13,"target":4407,"targetName":"Bandit Camp (easy)"}},
	"03": {"294792.0":{"grid":5358,"name":"Sylvana 2","order":2,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"Recruit":59,"Cannoneer":121},"type":57,"target":4065,"targetName":"Bandit Leader"}},
	"04": {},
	"05": {},
	"06": {"294792.0":{"grid":2147,"name":"Sylvana 2","order":5,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"Recruit":76,"Cannoneer":104},"type":57,"target":1815,"targetName":"Bandit Camp (easy)"}},
	"07": {"149369.0":{"grid":2212,"name":"Major 3 (Major General) ","order":1,"time":1000,"skills":{"3":1,"6":3,"11":3,"14":3},"army":{"Militia":64,"EliteSoldier":1,"Cavalry":130,"Cannoneer":75},"type":13,"target":1742,"targetName":"Forward Guard Leader"}},
	"08": {"149369.0":{"grid":2212,"name":"Major 3 (Major General) ","order":1,"time":1000,"skills":{"3":1,"6":3,"11":3,"14":3},"army":{"Recruit":91,"EliteSoldier":1,"Cannoneer":178},"type":13,"target":2888,"targetName":"Bandit Camp (easy)"}},
	"09": {"149369.0":{"grid":2212,"name":"Major 3 (Major General) ","order":1,"time":1000,"skills":{"3":1,"6":3,"11":3,"14":3},"army":{"Recruit":107,"EliteSoldier":1,"Cannoneer":162},"type":13, "target": 3296,}},
	"10": {"294792.0":{"grid":2147,"name":"Sylvana 2","order":4,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"Militia":90,"Cannoneer":90},"type":57,"target":3224,"targetName":"Inner Fort"}}
}

var TheWhirlwind_P2_A = {
	"01": {"64499.0":{"grid":5221,"name":"Major 1 (Major General) ","order":1,"time":1000,"skills":{"3":1,"6":3,"11":3,"14":3},"army":{"Recruit":43,"EliteSoldier":1,"Cavalry":226},"type":13,"target":4880,"targetName":"Bandit Camp (easy)"}},
	"02": {"64498.0":{"grid":5223,"name":"Major 2 (Major General) ","order":1,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"Recruit":96,"Cavalry":110,"Cannoneer":64},"type":13,"target":4407,"targetName":"Bandit Camp (easy)"}},
	"03": {"127334.0":{"grid":5358,"name":"Sylvana 1","order":2,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"Recruit":59,"Cannoneer":121},"type":57,"target":4065,"targetName":"Bandit Leader"}},
	"04": {},
	"05": {},
	"06": {"127334.0":{"grid":2147,"name":"Sylvana 1","order":5,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"Recruit":76,"Cannoneer":104},"type":57,"target":1815,"targetName":"Bandit Camp (easy)"}},
	"07": {"64499.0":{"grid":2212,"name":"Major 1 (Major General) ","order":1,"time":1000,"skills":{"3":1,"6":3,"11":3,"14":3},"army":{"Militia":64,"EliteSoldier":1,"Cavalry":130,"Cannoneer":75},"type":13,"target":1742,"targetName":"Forward Guard Leader"}},
	"08": {"64499.0":{"grid":2212,"name":"Major 1 (Major General) ","order":1,"time":1000,"skills":{"3":1,"6":3,"11":3,"14":3},"army":{"Recruit":91,"EliteSoldier":1,"Cannoneer":178},"type":13,"target":2888,"targetName":"Bandit Camp (easy)"}},
	"09": {"64499.0":{"grid":2212,"name":"Major 1 (Major General) ","order":1,"time":1000,"skills":{"3":1,"6":3,"11":3,"14":3},"army":{"Recruit":107,"EliteSoldier":1,"Cannoneer":162},"type":13, "target": 3296,}},
	"10": {"127334.0":{"grid":2147,"name":"Sylvana 1","order":4,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"Militia":90,"Cannoneer":90},"type":57,"target":3224,"targetName":"Inner Fort"}}
}

var FirstThief = {
	"01": {
		"262.0":{"grid":1518,"name":"General 1","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":165,"ArmoredMarksman":35},"type":0,"target":2137,"targetName":"Desert Bandit Camp (easy)"},
		"6365.0":{"grid":1720,"name":"General 2","order":1,"time":19000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":156,"ArmoredMarksman":30},"type":0,"target":3767,"targetName":"Desert Bandit Camp (easy)"},
		"64499.0":{"grid":1379,"name":"Major 1 (Major General) ","order":2,"time":24000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"MountedSwordsman":39,"Knight":231},"type":13,"target":3359,"targetName":"Strategic Bandit Outpost"}},
	"02": {
		"589.0":{"grid":4312,"name":"General 3","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":176},"type":0,"target":5062,"targetName":"Desert Bandit Camp (easy)"},
		"64498.0":{"grid":4851,"name":"Major 2 (Major General) ","order":2,"time":4000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"MountedSwordsman":4,"MountedMarksman":266},"type":13,"target":5468,"targetName":"Strategic Bandit Outpost"}},
	"03": {
		"262.0":{"grid":3300,"name":"General 1","order":1,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"Cavalry":136},"type":0,"target":4468,"targetName":"Desert Bandit Camp (medi..."},
		"589.0":{"grid":3095,"name":"General 3","order":2,"time":4000,"skills":{"6":3,"11":3,"14":2},"army":{"Cavalry":136},"type":0,"target":4468,"targetName":"Desert Bandit Camp (medi..."}},
	"04": {
		"6365.0":{"grid":3439,"name":"General 2","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":195},"type":0,"target":4468,"targetName":"Desert Bandit Camp (medi..."},
		"64499.0":{"grid":2755,"name":"Major 1 (Major General) ","order":1,"time":4000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"MountedSwordsman":48,"ArmoredMarksman":112,"MountedMarksman":110},"type":13,"target":4196,"targetName":"Strategic Bandit Outpost"}},
	"05": {
		"6365.0":{"grid":2357,"name":"General 2","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":186},"type":0,"target":2154,"targetName":"Desert Bandit Camp (hard)"},
		"127334.0":{"grid":2763,"name":"Sylvana 1","order":1,"time":8000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Bowman":120},"type":57,"target":2363,"targetName":"Desert Bandit Camp (medi..."},
		"64499.0":{"grid":2898,"name":"Major 1 (Major General) ","order":2,"time":4000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"ArmoredMarksman":60,"MountedMarksman":210},"type":13,"target":2363,"targetName":"Desert Bandit Camp (medi..."},
		"6878.0":{"grid":3640,"name":"General 4","order":3,"time":4000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":90,"Knight":110},"type":0,"target":3045,"targetName":"Desert Bandit Camp (medi..."},
		"64498.0":{"grid":4248,"name":"Mayor 2 (Major General) ","order":4,"time":4000,"skills":{"3":3,"6":3,"11":3,"14":3},"army":{"MountedSwordsman":34,"Knight":106,"Besieger":130},"type":13,"target":2702,"targetName":"Oasis Camp"}},
	"06": {"64499.0":{"grid":2709,"name":"Major 1 (Major General) ","order":2,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"MountedSwordsman":29,"Knight":43,"Besieger":198},"type":13,"target":1826,"targetName":"Desert Bandit Camp (medi..."}},
	"07": {"64498.0":{"grid":3046,"name":"Mayor 2 (Major General) ","order":2,"time":1000,"skills":{"3":3,"6":3,"11":3,"14":3},"army":{"MountedMarksman":266},"type":13,"target":1345,"targetName":"Desert Bandit Camp (medi..."}},
	"08": {"64499.0":{"grid":2709,"name":"Major 1 (Major General) ","order":2,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"MountedSwordsman":34,"Knight":61,"Besieger":175},"type":13,"target":1410,"targetName":"Desert Bandit Camp (medi..."}},
	"09": {
		"6365.0":{"grid":2574,"name":"General 2","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":188,"Knight":1},"type":0,"target":1132,"targetName":"Desert Bandit Camp (hard)"},
		"64498.0":{"grid":3046,"name":"Mayor 2 (Major General) ","order":3,"time":4000,"skills":{"3":3,"6":3,"11":3,"14":3},"army":{"MountedSwordsman":58,"Knight":12,"Besieger":200},"type":13,"target":1870,"targetName":"Caravan Camp"}}
}

var FirstThief_RG_A = {
	"01": {
		"262.0":{"grid":1518,"name":"General 1","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":165,"ArmoredMarksman":35},"type":0,"target":2137,"targetName":"Desert Bandit Camp (easy)"},
		"6365.0":{"grid":1720,"name":"General 2","order":1,"time":19000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":156,"ArmoredMarksman":30},"type":0,"target":3767,"targetName":"Desert Bandit Camp (easy)"},
		"524888.0":{"grid":1379,"name":"RG_1_Skills","order":2,"time":24000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Swordsman":100,"MountedMarksman":100},"type":13,"target":3359,"targetName":"Strategic Bandit Outpost"}},
	"02": {
		"589.0":{"grid":4312,"name":"General 3","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":176},"type":0,"target":5062,"targetName":"Desert Bandit Camp (easy)"},
		"127334.0":{"grid":4851,"name":"Sylvana 1","order":2,"time":4000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"MountedMarksman":165},"type":13,"target":5468,"targetName":"Strategic Bandit Outpost"}},
	"03": {
		"389488.0":{"grid":3711,"name":"YGG_1_1UP","order":1,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"Recruit":70},"type":0,"target":4468,"targetName":"Desert Bandit Camp (medi..."},
		"524888.0":{"grid":3439,"name":"RG_1_Skills","order":2,"time":4000,"skills":{"6":3,"11":3,"14":2},"army":{"Swordsman":20,"ArmoredMarksman":40,"MountedMarksman": 155},"type":0,"target":4468,"targetName":"Desert Bandit Camp (medi..."}},
	"04": {
		"389488.0":{"grid":3711,"name":"YGG_1_1UP","order":1,"time":4000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":3},"type":13,"target":4196,"targetName":"Strategic Bandit Outpost"},
		"524888.0":{"grid":3439,"name":"RG_1_Skills","order":1,"time":4000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Swordsman":40,"ArmoredMarksman":60,"MountedMarksman": 115},"type":13,"target":4196,"targetName":"Strategic Bandit Outpost"}},
	"05": {
		"6365.0":{"grid":2357,"name":"General 2","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":186},"type":0,"target":2154,"targetName":"Desert Bandit Camp (hard)"},
		"127334.0":{"grid":2898,"name":"Sylvana 1","order":1,"time":8000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"MountedMarksman":195},"type":57,"target":2363,"targetName":"Desert Bandit Camp (medi..."},
		"262.0":{"grid":3640,"name":"General 1","order":2,"time":4000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":90,"Knight":110},"type":0,"target":3045,"targetName":"Desert Bandit Camp (medi..."},
		"524888.0":{"grid":4248,"name":"RG_1_Skills","order":3,"time":4000,"skills":{"3":3,"6":3,"11":3,"14":3},"army":{"Swordsman":20,"ArmoredMarksman":60,"MountedMarksman": 100},"type":13,"target":2702,"targetName":"Oasis Camp"}},
	"06": {"524888.0":{"grid":2709,"name":"RG_1_Skills","order":2,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Swordsman":40,"MountedMarksman": 120,"Besieger":55},"type":13,"target":1826,"targetName":"Desert Bandit Camp (medi..."}},
	"07": {"127334.0":{"grid":3046,"name":"Sylvana 1","order":2,"time":1000,"skills":{"3":3,"6":3,"11":3,"14":3},"army":{"MountedMarksman":195},"type":13,"target":1345,"targetName":"Desert Bandit Camp (medi..."}},
	"08": {"524888.0":{"grid":2709,"name":"RG_1_Skills","order":2,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Swordsman":40,"MountedMarksman": 120,"Besieger":55},"type":13,"target":1410,"targetName":"Desert Bandit Camp (medi..."}},
	"09": {
		"6365.0":{"grid":2574,"name":"General 2","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":188,"Knight":1},"type":0,"target":1132,"targetName":"Desert Bandit Camp (hard)"},
		"524888.0":{"grid":2709,"name":"RG_1_Skills","order":1,"time":28000,"skills":{"3":3,"6":3,"11":3,"14":3},"army":{"Swordsman":60,"ArmoredMarksman":100,"MountedMarksman": 55},"type":13,"target":1870,"targetName":"Caravan Camp"}}
}

var FirstThief_RG_B = {
	"01": {
		"6878.0":{"grid":1518,"name":"General 4","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":165,"ArmoredMarksman":35},"type":0,"target":2137,"targetName":"Desert Bandit Camp (easy)"},
		"7155.0":{"grid":1720,"name":"General 5","order":1,"time":19000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":156,"ArmoredMarksman":30},"type":0,"target":3767,"targetName":"Desert Bandit Camp (easy)"},
		"536169.0":{"grid":1379,"name":"RG_2_Skills","order":2,"time":24000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Swordsman":100,"MountedMarksman":100},"type":13,"target":3359,"targetName":"Strategic Bandit Outpost"}},
	"02": {
		"39780.0":{"grid":4312,"name":"General 6","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":176},"type":0,"target":5062,"targetName":"Desert Bandit Camp (easy)"},
		"294792.0":{"grid":4851,"name":"Sylvana 2","order":2,"time":4000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"MountedMarksman":165},"type":13,"target":5468,"targetName":"Strategic Bandit Outpost"}},
	"03": {
		"483087.0":{"grid":3711,"name":"YGG_2_1UP","order":1,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"Recruit":70},"type":0,"target":4468,"targetName":"Desert Bandit Camp (medi..."},
		"536169.0":{"grid":3439,"name":"RG_2_Skills","order":2,"time":4000,"skills":{"6":3,"11":3,"14":2},"army":{"Swordsman":20,"ArmoredMarksman":40,"MountedMarksman": 155},"type":0,"target":4468,"targetName":"Desert Bandit Camp (medi..."}},
	"04": {
		"483087.0":{"grid":3711,"name":"YGG_2_1UP","order":1,"time":4000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":3},"type":13,"target":4196,"targetName":"Strategic Bandit Outpost"},
		"536169.0":{"grid":3439,"name":"RG_2_Skills","order":1,"time":4000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Swordsman":40,"ArmoredMarksman":60,"MountedMarksman": 115},"type":13,"target":4196,"targetName":"Strategic Bandit Outpost"}},
	"05": {
		"7155.0":{"grid":2357,"name":"General 5","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":186},"type":0,"target":2154,"targetName":"Desert Bandit Camp (hard)"},
		"294792.0":{"grid":2898,"name":"Sylvana 2","order":1,"time":8000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"MountedMarksman":195},"type":57,"target":2363,"targetName":"Desert Bandit Camp (medi..."},
		"6878.0":{"grid":3640,"name":"General 4","order":2,"time":4000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":90,"Knight":110},"type":0,"target":3045,"targetName":"Desert Bandit Camp (medi..."},
		"536169.0":{"grid":4248,"name":"RG_2_Skills","order":3,"time":4000,"skills":{"3":3,"6":3,"11":3,"14":3},"army":{"Swordsman":20,"ArmoredMarksman":60,"MountedMarksman": 100},"type":13,"target":2702,"targetName":"Oasis Camp"}},
	"06": {"536169.0":{"grid":2709,"name":"RG_2_Skills","order":2,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Swordsman":40,"MountedMarksman": 120,"Besieger":55},"type":13,"target":1826,"targetName":"Desert Bandit Camp (medi..."}},
	"07": {"294792.0":{"grid":3046,"name":"Sylvana 2","order":2,"time":1000,"skills":{"3":3,"6":3,"11":3,"14":3},"army":{"MountedMarksman":195},"type":13,"target":1345,"targetName":"Desert Bandit Camp (medi..."}},
	"08": {"536169.0":{"grid":2709,"name":"RG_2_Skills","order":2,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Swordsman":40,"MountedMarksman": 120,"Besieger":55},"type":13,"target":1410,"targetName":"Desert Bandit Camp (medi..."}},
	"09": {
		"7155.0":{"grid":2574,"name":"General 5","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":188,"Knight":1},"type":0,"target":1132,"targetName":"Desert Bandit Camp (hard)"},
		"536169.0":{"grid":2709,"name":"RG_2_Skills","order":1,"time":28000,"skills":{"3":3,"6":3,"11":3,"14":3},"army":{"Swordsman":60,"ArmoredMarksman":100,"MountedMarksman": 55},"type":13,"target":1870,"targetName":"Caravan Camp"}}
}

var FirstThief_RG_Fast_A = {
	"01": {
		"622987.0":{"grid":1518,"name":"STF_1_BLK_1UP","order":30,"time":1000,"skills":{"1":2,"6":3,"7":3,"10":3,"11":3,"12":3,"14":3,"16":1},"army":{"MountedSwordsman":92,"Knight":8,"ArmoredMarksman":70},"type":52, "target":2137,"targetName":"Desert Bandit Camp (easy)"},
		"623570.0":{"grid":1720,"name":"STF_2_BLK_1UP","order":31,"time":19000,"skills":{"1":2,"6":3,"7":3,"10":3,"11":3,"12":3,"14":3,"16":1},"army":{"Knight":120,"ArmoredMarksman":40,"Besieger":20},"type":52,"target":3767,"targetName":"Desert Bandit Camp (easy)"},
		"524888.0":{"grid":1379,"name":"RG_1_Skills","order":2,"time":24000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Swordsman":100,"MountedMarksman":100},"type":13,"target":3359,"targetName":"Strategic Bandit Outpost"}},
	"02": {
		"589.0":{"grid":4312,"name":"General 3","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":176},"type":0,"target":5062,"targetName":"Desert Bandit Camp (easy)"},
		"127334.0":{"grid":4851,"name":"Sylvana 1","order":2,"time":4000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"MountedMarksman":165},"type":13,"target":5468,"targetName":"Strategic Bandit Outpost"}},
	"03": {
		"389488.0":{"grid":3711,"name":"YGG_1_1UP","order":1,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"Recruit":70},"type":0,"target":4468,"targetName":"Desert Bandit Camp (medi..."},
		"524888.0":{"grid":3439,"name":"RG_1_Skills","order":2,"time":4000,"skills":{"6":3,"11":3,"14":2},"army":{"Swordsman":20,"ArmoredMarksman":40,"MountedMarksman": 155},"type":0,"target":4468,"targetName":"Desert Bandit Camp (medi..."}},
	"04": {
		"483087.0":{"grid":3302,"name":"<b>YGG_2_1UP</b> <font size='-3'>(Younger Gemini General)</font>","order":0,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":3},"type":50,"target":4196,"targetName":"Strategic Bandit Outpost"},
		"536169.0":{"grid":3165,"name":"<b>RG_2_skills</b> <font size='-3'>(Resolute General)</font>","order":1,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":40,"ArmoredMarksman":60,"MountedMarksman":115},"type":79,"target":4196,"targetName":"Strategic Bandit Outpost"}},
"05": {
		"622987.0":{"grid":2357,"name":"STF_1_BLK_1UP","order":30,"time":1000,"skills":{"1":2,"6":3,"7":3,"10":3,"11":3,"12":3,"14":3,"16":1},"army":{"Swordsman":80,"MountedMarksman":60,"Knight":20,"ArmoredMarksman":20,"Besieger":20},"type":52,"target":2154,"targetName":"Desert Bandit Camp (hard)"},
		"127334.0":{"grid":2898,"name":"Sylvana 1","order":1,"time":8000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"MountedMarksman":195},"type":57,"target":2363,"targetName":"Desert Bandit Camp (medi..."},
		"262.0":{"grid":3640,"name":"General 1","order":2,"time":4000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":90,"Knight":110},"type":0,"target":3045,"targetName":"Desert Bandit Camp (medi..."},
		"524888.0":{"grid":4248,"name":"RG_1_Skills","order":3,"time":4000,"skills":{"3":3,"6":3,"11":3,"14":3},"army":{"Swordsman":20,"ArmoredMarksman":60,"MountedMarksman": 100},"type":13,"target":2702,"targetName":"Oasis Camp"}},
	"06": {
		"524888.0":{"grid":2709,"name":"RG_1_Skills","order":2,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Swordsman":40,"MountedMarksman": 120,"Besieger":55},"type":13,"target":1826,"targetName":"Desert Bandit Camp (medi..."},
		"127334.0":{"grid":2844,"name":"Sylvana 1","order":2,"time":18000,"skills":{"3":3,"6":3,"11":3,"14":3},"army":{"MountedMarksman":195},"type":13,"target":1345,"targetName":"Desert Bandit Camp (medi..."},
		"536169.0":{"grid":2979,"name":"RG_2_Skills","order":2,"time":16000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Swordsman":40,"MountedMarksman": 120,"Besieger":55},"type":13,"target":1410,"targetName":"Desert Bandit Camp (medi..."}},
	"07": {
		"623570.0":{"grid":2574,"name":"STF_2_BLK_1UP","order":31,"time":19000,"skills":{"1":2,"6":3,"7":3,"10":3,"11":3,"12":3,"14":3,"16":1},"army":{"Swordsman":160,"MountedMarksman":60},"type":52,"target":1132,"targetName":"Desert Bandit Camp (hard)"},
		"524888.0":{"grid":2709,"name":"RG_1_Skills","order":1,"time":30000,"skills":{"3":3,"6":3,"11":3,"14":3},"army":{"Swordsman":60,"ArmoredMarksman":100,"MountedMarksman": 55},"type":13,"target":1870,"targetName":"Caravan Camp"}}
}
var FirstThief_RG_Fast_B = {
	"01": {
		"6878.0":{"grid":1518,"name":"General 4","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":165,"ArmoredMarksman":35},"type":0,"target":2137,"targetName":"Desert Bandit Camp (easy)"},
		"7155.0":{"grid":1720,"name":"General 5","order":1,"time":19000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":156,"ArmoredMarksman":30},"type":0,"target":3767,"targetName":"Desert Bandit Camp (easy)"},
		"524888.0":{"grid":1379,"name":"RG_1_Skills","order":2,"time":24000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Swordsman":100,"MountedMarksman":100},"type":13,"target":3359,"targetName":"Strategic Bandit Outpost"}},
	"02": {
		"39780.0":{"grid":4312,"name":"General 6","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":176},"type":0,"target":5062,"targetName":"Desert Bandit Camp (easy)"},
		"127334.0":{"grid":4851,"name":"Sylvana 1","order":2,"time":4000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"MountedMarksman":165},"type":13,"target":5468,"targetName":"Strategic Bandit Outpost"}},
	"03": {
		"389488.0":{"grid":3711,"name":"YGG_1_1UP","order":1,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"Recruit":70},"type":0,"target":4468,"targetName":"Desert Bandit Camp (medi..."},
		"524888.0":{"grid":3439,"name":"RG_1_Skills","order":2,"time":4000,"skills":{"6":3,"11":3,"14":2},"army":{"Swordsman":20,"ArmoredMarksman":40,"MountedMarksman": 155},"type":0,"target":4468,"targetName":"Desert Bandit Camp (medi..."}},
	"04": {
		"483087.0":{"grid":3302,"name":"<b>YGG_2_1UP</b> <font size='-3'>(Younger Gemini General)</font>","order":0,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":70},"type":50,"target":4196,"targetName":"Strategic Bandit Outpost"},
		"536169.0":{"grid":3165,"name":"<b>RG_2_skills</b> <font size='-3'>(Resolute General)</font>","order":1,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":20,"ArmoredMarksman":40,"MountedMarksman":155},"type":79,"target":4196,"targetName":"Strategic Bandit Outpost"}
	},
	"04": {
		"483087.0":{"grid":3302,"name":"<b>YGG_2_1UP</b> <font size='-3'>(Younger Gemini General)</font>","order":0,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":3},"type":50,"target":4196,"targetName":"Strategic Bandit Outpost"},
		"536169.0":{"grid":3165,"name":"<b>RG_2_skills</b> <font size='-3'>(Resolute General)</font>","order":1,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":40,"ArmoredMarksman":60,"MountedMarksman":115},"type":79,"target":4196,"targetName":"Strategic Bandit Outpost"}
	},
	// "04": {
	// 	"389488.0":{"grid":3711,"name":"YGG_1_1UP","order":1,"time":4000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":3},"type":13,"target":4196,"targetName":"Strategic Bandit Outpost"},
	// 	"524888.0":{"grid":3439,"name":"RG_1_Skills","order":1,"time":4000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Swordsman":40,"ArmoredMarksman":60,"MountedMarksman": 115},"type":13,"target":4196,"targetName":"Strategic Bandit Outpost"}},
	"05": {
		"7155.0":{"grid":2357,"name":"General 5","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":186},"type":0,"target":2154,"targetName":"Desert Bandit Camp (hard)"},
		"127334.0":{"grid":2898,"name":"Sylvana 1","order":1,"time":8000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"MountedMarksman":195},"type":57,"target":2363,"targetName":"Desert Bandit Camp (medi..."},
		"6878.0":{"grid":3640,"name":"General 4","order":2,"time":4000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":90,"Knight":110},"type":0,"target":3045,"targetName":"Desert Bandit Camp (medi..."},
		"524888.0":{"grid":4248,"name":"RG_1_Skills","order":3,"time":4000,"skills":{"3":3,"6":3,"11":3,"14":3},"army":{"Swordsman":20,"ArmoredMarksman":60,"MountedMarksman": 100},"type":13,"target":2702,"targetName":"Oasis Camp"}},
	"06": {"524888.0":{"grid":2709,"name":"RG_1_Skills","order":2,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Swordsman":40,"MountedMarksman": 120,"Besieger":55},"type":13,"target":1826,"targetName":"Desert Bandit Camp (medi..."}},
	"07": {"127334.0":{"grid":3046,"name":"Sylvana 1","order":2,"time":1000,"skills":{"3":3,"6":3,"11":3,"14":3},"army":{"MountedMarksman":195},"type":13,"target":1345,"targetName":"Desert Bandit Camp (medi..."}},
	"08": {"524888.0":{"grid":2709,"name":"RG_1_Skills","order":2,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Swordsman":40,"MountedMarksman": 120,"Besieger":55},"type":13,"target":1410,"targetName":"Desert Bandit Camp (medi..."}},
	"09": {
		"7155.0":{"grid":2574,"name":"General 5","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":188,"Knight":1},"type":0,"target":1132,"targetName":"Desert Bandit Camp (hard)"},
		"524888.0":{"grid":2709,"name":"RG_1_Skills","order":1,"time":28000,"skills":{"3":3,"6":3,"11":3,"14":3},"army":{"Swordsman":60,"ArmoredMarksman":100,"MountedMarksman": 55},"type":13,"target":1870,"targetName":"Caravan Camp"}}
}

var TheLostSkull_YGG1 = {
	"01": {"11605.0":{"grid":5069,"name":"Younger Gemini General</b>","order":0,"time":1000,"skills":{},"army":{"Recruit":1},"type":50,"target":4866,"targetName":"Bandit Camp (easy)"}},
	"02": {"11605.0":{"grid":5069,"name":"Younger Gemini General</b>","order":0,"time":1000,"skills":{},"army":{"Recruit":1},"type":50,"target":3923,"targetName":"Bandit Leader"}},
	"03": {"11605.0":{"grid":3366,"name":"Younger Gemini General</b>","order":0,"time":1000,"skills":{},"army":{"Recruit":1},"type":50,"target":3162,"targetName":"Bandit Camp (easy)"}},
	"04": {"11605.0":{"grid":3366,"name":"Younger Gemini General</b>","order":0,"time":1000,"skills":{},"army":{"Recruit":40},"type":50,"target":1944,"targetName":"Bandit Leader"}}
}

var TheLostSkull_YGG2 = {
	"01": {"12976.0":{"grid":5069,"name":"Younger Gemini General</b>","order":0,"time":1000,"skills":{},"army":{"Recruit":1},"type":50,"target":4866,"targetName":"Bandit Camp (easy)"}},
	"02": {"12976.0":{"grid":5069,"name":"Younger Gemini General</b>","order":0,"time":1000,"skills":{},"army":{"Recruit":1},"type":50,"target":3923,"targetName":"Bandit Leader"}},
	"03": {"12976.0":{"grid":3366,"name":"Younger Gemini General</b>","order":0,"time":1000,"skills":{},"army":{"Recruit":1},"type":50,"target":3162,"targetName":"Bandit Camp (easy)"}},
	"04": {"12976.0":{"grid":3366,"name":"Younger Gemini General</b>","order":0,"time":1000,"skills":{},"army":{"Recruit":40},"type":50,"target":1944,"targetName":"Bandit Leader"}}
}

var HorsebackYGGx2 = {
	"01": {"11605.0":{"grid":7153,"name":"YGG 1 (Younger Gemini General) ","order":0,"time":1000,"skills":{"2":2,"6":3,"11":3},"army":{"Recruit":1},"type":50,"target":7020,"targetName":"Raiders Camp (medium)"}},
	"02": {"12976.0":{"grid":7220,"name":"YGG 2 (Younger Gemini General) ","order":1,"time":1000,"skills":{"2":3,"6":3,"11":3},"army":{"Recruit":10},"type":50,"target":6409,"targetName":"Raiders Camp (medium)"}},
	"03": {"11605.0":{"grid":7153,"name":"YGG 1 (Younger Gemini General) ","order":0,"time":1000,"skills":{"2":2,"6":3,"11":3},"army":{"Recruit":110},"type":50,"target":6679,"targetName":"Raiders Leader"}},
	"04": {"12976.0":{"grid":6752,"name":"YGG 2 (Younger Gemini General) ","order":0,"time":1000,"skills":{"2":3,"6":3,"11":3},"army":{"Recruit":1},"type":50,"target":6010,"targetName":"Raiders Leader"}},
	"05": {"11605.0":{"grid":7153,"name":"YGG 1 (Younger Gemini General) ","order":0,"time":1000,"skills":{"2":2,"6":3,"11":3},"army":{"Recruit":1},"type":50,"target":7361,"targetName":"Raiders Leader"}},
	"06": {"11605.0":{"grid":7776,"name":"YGG 1 (Younger Gemini General) ","order":0,"time":1000,"skills":{"2":2,"6":3,"11":3},"army":{"Recruit":40},"type":50,"target":7372,"targetName":"Raiders Camp (easy)"}},
	"07": {"12976.0":{"grid":5257,"name":"YGG 2 (Younger Gemini General) ","order":0,"time":1000,"skills":{"2":3,"6":3,"11":3},"army":{"Recruit":1},"type":50,"target":4779,"targetName":"Raiders Leader"}},
	"08": {"11605.0":{"grid":7776,"name":"YGG 1 (Younger Gemini General) ","order":0,"time":1000,"skills":{"2":2,"6":3,"11":3},"army":{"Recruit":35},"type":50,"target":7780,"targetName":"Raiders Leader"}},
	"09": {"12976.0":{"grid":5257,"name":"YGG 2 (Younger Gemini General) ","order":0,"time":1000,"skills":{"2":3,"6":3,"11":3},"army":{"Recruit":1},"type":50,"target":4502,"targetName":"Raiders Leader"}},
}

var FRAN_Outlaws = {
	"01": {"12976.0":{"grid":3905,"name":"YGG 2 (Younger Gemini General) ","order":5,"time":1000,"skills":{"2":3,"3":2,"6":3,"11":3,"14":1},"army":{"Recruit":100},"type":50,"target":3296,"targetName":"Bandit Camp (medium)"}},
	"02": {"11605.0":{"grid":4648,"name":"YGG 1 (Younger Gemini General) ","order":0,"time":1000,"skills":{"2":3,"3":2,"6":3,"11":3,"14":1},"army":{"Recruit":1},"type":50,"target":2395,"targetName":"Bandit Leader"}},
	"03": {"12976.0":{"grid":3905,"name":"YGG 2 (Younger Gemini General) ","order":3,"time":1000,"skills":{"2":3,"3":2,"6":3,"11":3,"14":1},"army":{"Recruit":10},"type":50,"target":3162,"targetName":"Bandit Camp (medium)"}},
	"04": {"12976.0":{"grid":3905,"name":"YGG 2 (Younger Gemini General) ","order":6,"time":1000,"skills":{"2":3,"3":2,"6":3,"11":3,"14":1},"army":{"Recruit":100},"type":50,"target":2956,"targetName":"Bandit Camp (medium)"}},
	"05": {"12976.0":{"grid":4727,"name":"YGG 2 (Younger Gemini General) ","order":1,"time":1000,"skills":{"2":3,"3":2,"6":3,"11":3,"14":1},"army":{"Recruit":1},"type":50,"target":4403,"targetName":"Bandit Leader"}},
	"06": {"11605.0":{"grid":2393,"name":"YGG 1 (Younger Gemini General) ","order":0,"time":1000,"skills":{"2":3,"3":2,"6":3,"11":3,"14":1},"army":{"Recruit":1},"type":50,"target":1304,"targetName":"Bandit Camp (easy)"}},
	"07": {"11605.0":{"grid":2393,"name":"YGG 1 (Younger Gemini General) ","order":1,"time":1000,"skills":{"2":3,"3":2,"6":3,"11":3,"14":1},"army":{"Recruit":45},"type":50,"target":1302,"targetName":"Bandit Leader"}},
	"08": {"11605.0":{"grid":4131,"name":"YGG 2 (Younger Gemini General) ","order":0,"time":1000,"skills":{"2":3,"3":2,"6":3,"11":3,"14":1},"army":{"Recruit":1},"type":50,"target":935,"targetName":"Bandit Leader"}},
	"09": {"12976.0":{"grid":4197,"name":"YGG 1 (Younger Gemini General) ","order":1,"time":1000,"skills":{"2":3,"3":2,"6":3,"11":3,"14":1},"army":{"Recruit":1},"type":50,"target":935,"targetName":"Bandit Leader"}},
	"10": {"14377.0":{"grid":4268,"name":"Field Medic General</b>","order":0,"time":1000,"skills":{},"army":{"Recruit":98,"Soldier":1,"Crossbowman":101},"type":36,"target":935,"targetName":"Bandit Leader"}},
}

var FRAN_Outlaws_center = {
	"01": {
		"261.0":{"grid":4041,"name":"General 1","order":1,"time":1000,"skills":{"6":2,"11":3,"14":3},"army":{"Soldier":28,"Cavalry":162},"type":0,"target":1600,"targetName":"Bandit Camp (medium)"},
		"3999.0":{"grid":4446,"name":"General 2","order":2,"time":4000,"skills":{"6":1,"11":3,"14":3},"army":{"Soldier":15,"Cavalry":160},"type":0,"target":1398,"targetName":"Bandit Camp (medium)"},
		"11458.0":{"grid":4786,"name":"General 3","order":3,"time":4000,"skills":{},"army":{"Recruit":90,"Soldier":90},"type":0,"target":1395,"targetName":"Bandit Camp (medium)"},
		"12976.0":{"grid":5198,"name":"YGG 2 (Younger Gemini General) ","order":5,"time":4000,"skills":{"2":3,"3":2,"6":3,"11":3,"14":1},"army":{"Recruit":17,"Crossbowman":123},"type":50,"target":1328,"targetName":"Bandit Leader"}},
}

var JZ_SecludedExperiments = {
	"01": {"127334.0":{"grid":1845,"name":"Sylvana_1-Skills","order":1,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"Cavalry":195},"type":57,"target":1990,"targetName":"Bandit Camp (medium)"}},
	"02": {
		"262.0":{"grid":2256,"name":"General 1","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"EliteSoldier":150},"type":0,"target":2064,"targetName":"Bandit Camp (medium)"},
		"389191.0":{"grid":1982,"name":"OGG_1-Skills (Older Gemini General) ","order":5,"time":5000,"skills":{"2":3,"3":3,"6":3,"8":2,"11":3,"12":3,"14":3,"19":1},"army":{"Recruit":160,"EliteSoldier":60,"Cannoneer":75},"type":47,"target":2404,"targetName":"Bandit Leader"}},
	"03": {
		"127334.0":{"grid":2336,"name":"Sylvana_1-Skills","order":0,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"Recruit":136,"Cannoneer":59},"type":57,"target":2479,"targetName":"Bandit Camp (medium)"},
		"262.0":{"grid":2473,"name":"General 1","order":1,"time":45000,"skills":{"6":3,"11":3,"14":2},"army":{"EliteSoldier":101},"type":0,"target":2077,"targetName":"Bandit Camp (medium)"},
		"389191.0":{"grid":1788,"name":"OGG_1-Skills (Older Gemini General) ","order":2,"time":4000,"skills":{"2":3,"3":3,"6":3,"8":2,"11":3,"12":3,"14":3,"19":1},"army":{"Recruit":180,"Cannoneer":100},"type":47,"target":1732,"targetName":"Bandit Leader"}},
	"04": {
		"262.0":{"grid":2348,"name":"General 1","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"EliteSoldier":114},"type":0,"target":1741,"targetName":"Bandit Camp (medium)"},
		"389191.0":{"grid":2957,"name":"OGG_1-Skills (Older Gemini General) ","order":1,"time":4000,"skills":{"2":3,"3":3,"6":3,"8":2,"11":3,"12":3,"14":3,"19":1},"army":{"Recruit":200,"Cannoneer":95},"type":47,"target":999,"targetName":"Bandit Leader"}},
	"05": {
		"127334.0":{"grid":2225,"name":"Sylvana_1-Skills","order":0,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"Recruit":125,"Cannoneer":70},"type":57,"target":2703,"targetName":"Bandit Camp (medium)"},
		"294792.0":{"grid":2222,"name":"Sylvana_2-Skills","order":1,"time":10000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"Recruit":100,"Cannoneer":95},"type":57,"target":3458,"targetName":"Bandit Camp (medium)"}},
	"06": {"127334.0":{"grid":2225,"name":"Sylvana_1-Skills","order":7,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"Recruit":50,"Cannoneer":145},"type":57,"target":3937,"targetName":"Bandit Leader"}},
	"07": {"294792.0":{"grid":2222,"name":"Sylvana_2-Skills","order":7,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"Recruit":110,"Cannoneer":85},"type":57,"target":3385,"targetName":"Bandit Leader"}},
	"08": {
		"262.0":{"grid":3922,"name":"General 1","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"EliteSoldier":112,"Cavalry":5},"type":0,"target":3646,"targetName":"Bandit Camp (medium)"},
		"127334.0":{"grid":3721,"name":"Sylvana_1-Skills","order":1,"time":5000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"Recruit":22,"Cannoneer":173},"type":57,"target":3779,"targetName":"Bandit Leader"}},
	"09": {
		"6365.0":{"grid":2302,"name":"General 2","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"EliteSoldier":110},"type":0,"target":1487,"targetName":"Bandit Camp (medium)"},
		"389191.0":{"grid":2908,"name":"OGG_1-Skills (Older Gemini General) ","order":1,"time":4000,"skills":{"2":3,"3":3,"6":3,"8":2,"11":3,"12":3,"14":3,"19":1},"army":{"Recruit":190,"Cannoneer":105},"type":47,"target":943,"targetName":"Bandit Leader"}},
	"10": {
		"127334.0":{"grid":4252,"name":"Sylvana_1-Skills","order":5,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"Recruit":84,"Cannoneer":111},"type":57,"target":5605,"targetName":"Bandit Leader"},
		"389191.0":{"grid":3706,"name":"OGG_1-Skills (Older Gemini General) ","order":6,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":2,"11":3,"12":3,"14":3,"19":1},"army":{"Recruit":175,"Cannoneer":120},"type":47,"target":4175,"targetName":"Bandit Leader"}},
	"11": {
		"262.0":{"grid":4102,"name":"General 1","order":0,"time":4000,"skills":{"6":3,"11":3,"14":2},"army":{"EliteSoldier":150},"type":0,"target":3617,"targetName":"Bandit Camp (medium)"},
		"389191.0":{"grid":3698,"name":"OGG_1-Skills (Older Gemini General) ","order":1,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":2,"11":3,"12":3,"14":3,"19":1},"army":{"Recruit":195,"Cannoneer":100},"type":47,"target":3888,"targetName":"Bandit Leader"}},
	"12": {"127334.0":{"grid":4849,"name":"Sylvana_1-Skills","order":6,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"Recruit":139,"Cannoneer":56},"type":57,"target":5455,"targetName":"Bandit Camp (medium)"}},
	"13": {"294792.0":{"grid":4307,"name":"Sylvana_2-Skills","order":7,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"Recruit":34,"Cavalry":161},"type":57,"target":6068,"targetName":"Bandit Camp (medium)"}},
	"14": {"127334.0":{"grid":4849,"name":"Sylvana_1-Skills","order":7,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"Recruit":100,"Cannoneer":95},"type":57,"target":5585,"targetName":"Bandit Camp (medium)"}},
	"15": {"294792.0":{"grid":4307,"name":"Sylvana_2-Skills","order":7,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"Recruit":67,"Cannoneer":128},"type":57,"target":6479,"targetName":"Bandit Camp (medium)"}},
	"16": {"127334.0":{"grid":4849,"name":"Sylvana_1-Skills","order":7,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"Recruit":75,"Cannoneer":120},"type":57,"target":5451,"targetName":"Bandit Leader"}},
	"17": {"389191.0":{"grid":4172,"name":"OGG_1-Skills (Older Gemini General) ","order":6,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":2,"11":3,"12":3,"14":3,"19":1},"army":{"Recruit":140,"Cannoneer":155},"type":47,"target":5799,"targetName":"Bandit Leader"}},
	"18": {"294792.0":{"grid":4307,"name":"Sylvana_2-Skills","order":6,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"Recruit":26,"Cannoneer":169},"type":57,"target":7013,"targetName":"Bandit Camp (medium)"}},
	"19": {"127334.0":{"grid":4849,"name":"Sylvana_1-Skills","order":6,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"Recruit":128,"Cannoneer":67},"type":57,"target":7696,"targetName":"Bandit Leader"}},
	"20": {"127334.0":{"grid":3459,"name":"Sylvana_1-Skills","order":4,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"Recruit":98,"Cannoneer":97},"type":57,"target":5630,"targetName":"Bandit Camp (medium)"}},
	"21": {"294792.0":{"grid":3594,"name":"Sylvana_2-Skills","order":7,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"Recruit":126,"Cannoneer":69},"type":57,"target":6108,"targetName":"Bandit Camp (hard)"}},
	"22": {"127334.0":{"grid":3459,"name":"Sylvana_1-Skills","order":7,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"Cavalry":195},"type":57,"target":6113,"targetName":"Bandit Camp (hard)"}},
	"23": {
		"389488.0":{"grid":3388,"name":"YGG_1_1UP (Younger Gemini General) ","order":0,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":155},"type":50,"target":6314,"targetName":"Bandit Leader"},
		"389191.0":{"grid":3322,"name":"OGG_1-Skills (Older Gemini General) ","order":1,"time":20000,"skills":{"2":3,"3":3,"6":3,"8":2,"11":3,"12":3,"14":3,"19":1},"army":{"Recruit":60,"Militia":60,"Cannoneer":175},"type":47,"target":6314,"targetName":"Bandit Leader"}},
	"24": {
		"262.0":{"grid":3594,"name":"General 1","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"EliteSoldier":75},"type":0,"target":6855,"targetName":"Bandit Camp (hard)"},
		"294792.0":{"grid":4202,"name":"Sylvana_2-Skills","order":1,"time":4000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"Recruit":7,"EliteSoldier":1,"Cavalry":187},"type":57,"target":6788,"targetName":"Bandit Leader"}},
	"25": {"127334.0":{"grid":6781,"name":"Sylvana_1-Skills","order":5,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"Recruit":10,"Cavalry":185},"type":57,"target":7045,"targetName":"Bandit Camp (medium)"}},
	"26": {"294792.0":{"grid":6304,"name":"Sylvana_2-Skills","order":7,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"Recruit":116,"Cannoneer":79},"type":57,"target":7323,"targetName":"Bandit Camp (medium)"}},
	"27": {"127334.0":{"grid":6781,"name":"Sylvana_1-Skills","order":7,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"Recruit":4,"EliteSoldier":1,"Cavalry":190},"type":57,"target":7796,"targetName":"Bandit Leader"}},
	"28": {"389191.0":{"grid":7796,"name":"OGG_1-Skills (Older Gemini General) ","order":3,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":2,"11":3,"12":3,"14":3,"19":1},"army":{"Recruit":190,"Cannoneer":105},"type":47,"target":7714,"targetName":"Bandit Leader"}},
	"29": {
		"262.0":{"grid":7045,"name":"General 1","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"EliteSoldier":110,"Cavalry":7},"type":0,"target":6156,"targetName":"Bandit Camp (medium)"},
		"389191.0":{"grid":7796,"name":"OGG_1-Skills (Older Gemini General) ","order":1,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":2,"11":3,"12":3,"14":3,"19":1},"army":{"Recruit":190,"Cannoneer":105},"type":47,"target":6022,"targetName":"Bandit Leader"}},
}

var VictorTheVictus_Silvana = {
	"01": {"127334.0":{"grid":8323,"name":"General Sylvana</b>","order":2,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Recruit":52,"Cannoneer":128},"type":57,"target":7580,"targetName":"Bandit Camp (medium)"}},
	"02": {"127334.0":{"grid":8323,"name":"General Sylvana</b>","order":0,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Recruit":37,"EliteSoldier":1,"Cavalry":142},"type":57,"target":7175,"targetName":"Bandit Camp (medium)"}},
	"03": {
		"262.0":{"grid":7783,"name":"General 1","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"Recruit":15,"Soldier":101,"Cavalry":4},"type":0,"target":7112,"targetName":"Bandit Camp (medium)"},
		"6365.0":{"grid":7918,"name":"General 2","order":1,"time":30000,"skills":{"6":3,"11":3,"14":2},"army":{"Recruit":2,"Soldier":20,"Cavalry":145},"type":0,"target":6637,"targetName":"Bandit Camp (medium)"},
		"127334.0":{"grid":8323,"name":"General Sylvana</b>","order":2,"time":4000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Recruit":115,"Cannoneer":65},"type":57,"target":6091,"targetName":"Bandit Leader"}},
	"04": {
		"262.0":{"grid":5955,"name":"General 1","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"Recruit":10,"Militia":15,"Soldier":60,"Cavalry":115},"type":0,"target":5272,"targetName":"Bandit Camp (medium)"},
		"6365.0":{"grid":6160,"name":"General 2","order":1,"time":4000,"skills":{"6":3,"11":3,"14":2},"army":{"Soldier":125,"Cavalry":16},"type":0,"target":4866,"targetName":"Bandit Camp (medium)"},
		"127334.0":{"grid":6635,"name":"General Sylvana</b>","order":2,"time":4000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Recruit":106,"EliteSoldier":1,"Cannoneer":73},"type":57,"target":5207,"targetName":"Bandit Leader"}},
	"05": {"127334.0":{"grid":5204,"name":"General Sylvana</b>","order":2,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Recruit":115,"Cannoneer":65},"type":57,"target":6083,"targetName":"Bandit Leader"}},
	"06": {"64499.0":{"grid":5690,"name":"Major 1 (Major General) ","order":2,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":6,"Cannoneer":100},"type":13,"target":4676,"targetName":"Forest"}},
	"07": {"127334.0":{"grid":5204,"name":"General Sylvana</b>","order":2,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Recruit":115,"Cannoneer":65},"type":57,"target":3705,"targetName":"Bandit Leader"}},
	"08": {
		// "262.0":{"grid":5558,"name":"General 1","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"Soldier":60,"Cavalry":140},"type":0,"target":3515,"targetName":"Bandit Camp (medium)"},
		// "64499.0":{"grid":5690,"name":"Major 1 (Major General) ","order":3,"time":4000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":75,"Militia":20,"Cannoneer":175},"type":13,"target":2972,"targetName":"Bandit Leader"}},
		"262.0":{"grid":5558,"name":"General 1","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"Soldier":60,"Cavalry":140},"type":0,"target":3515,"targetName":"Bandit Camp (medium)"},
		"483089.0":{"grid":5690,"name":"Ghost_1_TR_WW (Ghost General) ","order":1,"time":4000,"skills":{"3":3,"6":3,"8":3,"11":3,"12":3,"14":3,"15":3},"army":{"Recruit":70,"Cannoneer":160},"type":63,"target":2972,"targetName":"Bandit Leader"}},
	"09": {
		"6365.0":{"grid":5555,"name":"General 2","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"Soldier":57,"Cavalry":143},"type":0,"target":5971,"targetName":"Bandit Camp (medium)"},
		"262.0":{"grid":4608,"name":"General 1","order":1,"time":4000,"skills":{"6":3,"11":3,"14":2},"army":{"Soldier":125},"type":0,"target":5701,"targetName":"Bandit Camp (medium)"},
		"64499.0":{"grid":4127,"name":"Major 1 (Major General) ","order":2,"time":4000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":114,"Cannoneer":156},"type":13,"target":5974,"targetName":"Bandit Leader"}},
	"10": {"127334.0":{"grid":3650,"name":"General Sylvana</b>","order":2,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Recruit":83,"Cannoneer":97},"type":57,"target":1826,"targetName":"Bandit Camp (medium)"}},
	"11": {
		// "262.0":{"grid":2975,"name":"General 1","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"Soldier":87,"Cavalry":67},"type":0,"target":1419,"targetName":"Bandit Camp (hard)"},
		// "6365.0":{"grid":3515,"name":"General 2","order":1,"time":4000,"skills":{"6":3,"11":3,"14":2},"army":{"Recruit":80,"Cavalry":120},"type":0,"target":1421,"targetName":"Bandit Leader"},
		// "127334.0":{"grid":3650,"name":"General Sylvana</b>","order":2,"time":4000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Soldier":77,"Cannoneer":103},"type":57,"target":1421,"targetName":"Bandit Leader"}}
		"262.0":{"grid":2975,"name":"General 1","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"Soldier":87,"Cavalry":67},"type":0,"target":1419,"targetName":"Bandit Camp (hard)"},
		"389488.0":{"grid":3515,"name":"YGG_1_1UP (Younger Gemini General) ","order":1,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":1},"type":50,"target":1421,"targetName":"Bandit Leader"},
		"483089.0":{"grid":3650,"name":"Ghost_1_TR_WW (Ghost General) ","order":2,"time":1000,"skills":{"3":3,"6":3,"8":3,"11":3,"12":3,"14":3,"15":3},"army":{"Recruit":35,"Cannoneer":195},"type":63,"target":1421,"targetName":"Bandit Leader"}}
}

var VictorTheVictus_Silvana_2 = {
	"01": {"294792.0":{"grid":8323,"name":"General Sylvana 2</b>","order":2,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Recruit":52,"Cannoneer":128},"type":57,"target":7580,"targetName":"Bandit Camp (medium)"}},
	"02": {"294792.0":{"grid":8323,"name":"General Sylvana 2</b>","order":0,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Recruit":37,"EliteSoldier":1,"Cavalry":142},"type":57,"target":7175,"targetName":"Bandit Camp (medium)"}},
	"03": {
		"589.0":{"grid":7783,"name":"General 3","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"Recruit":15,"Soldier":101,"Cavalry":4},"type":0,"target":7112,"targetName":"Bandit Camp (medium)"},
		"6878.0":{"grid":7918,"name":"General 4","order":1,"time":30000,"skills":{"6":3,"11":3,"14":2},"army":{"Recruit":2,"Soldier":20,"Cavalry":145},"type":0,"target":6637,"targetName":"Bandit Camp (medium)"},
		"294792.0":{"grid":8323,"name":"General Sylvana 2</b>","order":2,"time":4000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Recruit":115,"Cannoneer":65},"type":57,"target":6091,"targetName":"Bandit Leader"}},
	"04": {
		"589.0":{"grid":5955,"name":"General 3","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"Recruit":10,"Militia":15,"Soldier":60,"Cavalry":115},"type":0,"target":5272,"targetName":"Bandit Camp (medium)"},
		"6878.0":{"grid":6160,"name":"General 4","order":1,"time":4000,"skills":{"6":3,"11":3,"14":2},"army":{"Soldier":125,"Cavalry":16},"type":0,"target":4866,"targetName":"Bandit Camp (medium)"},
		"294792.0":{"grid":6635,"name":"General Sylvana 2</b>","order":2,"time":4000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Recruit":106,"EliteSoldier":1,"Cannoneer":73},"type":57,"target":5207,"targetName":"Bandit Leader"}},
	"05": {"294792.0":{"grid":5204,"name":"General Sylvana 2</b>","order":2,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Recruit":115,"Cannoneer":65},"type":57,"target":6083,"targetName":"Bandit Leader"}},
	"06": {"149369.0":{"grid":5690,"name":"Major 3 (Major General) ","order":2,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":6,"Cannoneer":100},"type":13,"target":4676,"targetName":"Forest"}},
	"07": {"294792.0":{"grid":5204,"name":"General Sylvana 2</b>","order":2,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Recruit":115,"Cannoneer":65},"type":57,"target":3705,"targetName":"Bandit Leader"}},
	"08": {
		// "589.0":{"grid":5558,"name":"General 3","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"Soldier":60,"Cavalry":140},"type":0,"target":3515,"targetName":"Bandit Camp (medium)"},
		// "149369.0":{"grid":5690,"name":"Major 3 (Major General) ","order":3,"time":4000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":75,"Militia":20,"Cannoneer":175},"type":13,"target":2972,"targetName":"Bandit Leader"}},
		"589.0":{"grid":5558,"name":"General 3","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"Soldier":60,"Cavalry":140},"type":0,"target":3515,"targetName":"Bandit Camp (medium)"},
		"495322.0":{"grid":5690,"name":"Ghost_2_TR_WW (Ghost General) ","order":1,"time":4000,"skills":{"3":3,"6":3,"8":3,"11":3,"12":3,"14":3,"15":3},"army":{"Recruit":70,"Cannoneer":160},"type":63,"target":2972,"targetName":"Bandit Leader"}},
	"09": {
		"6878.0":{"grid":5555,"name":"General 4","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"Soldier":57,"Cavalry":143},"type":0,"target":5971,"targetName":"Bandit Camp (medium)"},
		"589.0":{"grid":4608,"name":"General 3","order":1,"time":4000,"skills":{"6":3,"11":3,"14":2},"army":{"Soldier":125},"type":0,"target":5701,"targetName":"Bandit Camp (medium)"},
		"149369.0":{"grid":4127,"name":"Major 3 (Major General) ","order":2,"time":4000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":114,"Cannoneer":156},"type":13,"target":5974,"targetName":"Bandit Leader"}},
	"10": {"294792.0":{"grid":3650,"name":"General Sylvana 2</b>","order":2,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Recruit":83,"Cannoneer":97},"type":57,"target":1826,"targetName":"Bandit Camp (medium)"}},
	"11": {
		// "589.0":{"grid":2975,"name":"General 3","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"Soldier":87,"Cavalry":67},"type":0,"target":1419,"targetName":"Bandit Camp (hard)"},
		// "6878.0":{"grid":3515,"name":"General 4","order":1,"time":4000,"skills":{"6":3,"11":3,"14":2},"army":{"Recruit":80,"Cavalry":120},"type":0,"target":1421,"targetName":"Bandit Leader"},
		// "294792.0":{"grid":3650,"name":"General Sylvana 2</b>","order":2,"time":4000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Soldier":77,"Cannoneer":103},"type":57,"target":1421,"targetName":"Bandit Leader"}}
		"589.0":{"grid":2975,"name":"General 3","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"Soldier":87,"Cavalry":67},"type":0,"target":1419,"targetName":"Bandit Camp (hard)"},
		"483087.0":{"grid":3515,"name":"YGG_2_1UP (Younger Gemini General) ","order":1,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":1},"type":50,"target":1421,"targetName":"Bandit Leader"},
		"495322.0":{"grid":3650,"name":"Ghost_2_TR_WW (Ghost General) ","order":2,"time":1000,"skills":{"3":3,"6":3,"8":3,"11":3,"12":3,"14":3,"15":3},"army":{"Recruit":35,"Cannoneer":195},"type":63,"target":1421,"targetName":"Bandit Leader"}}
}

var TheValiantLittleTailor = {
	"01": {"389488.0":{"grid":6446,"name":"YGG_1_1UP (Younger Gemini General) ","order":6,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":100},"type":50,"target":5963,"targetName":"Wildlife Cave (easy)"}},
	"02": {"389488.0":{"grid":6446,"name":"YGG_1_1UP (Younger Gemini General) ","order":8,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":15},"type":50,"target":5410,"targetName":"Wildlife Cave (easy)"}},
	"03": {"389191.0":{"grid":6583,"name":"OGG_1-Skills (Older Gemini General) ","order":3,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":2,"11":3,"12":3,"14":3,"19":1},"army":{"Recruit":160,"Cannoneer":135},"type":47,"target":6016,"targetName":"Wildlife Cave (easy)"}},
	"04": {"389488.0":{"grid":6446,"name":"YGG_1_1UP (Younger Gemini General) ","order":7,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":155},"type":50,"target":6686,"targetName":"Wildlife Cave (easy)"}},
	"05": {"389191.0":{"grid":6583,"name":"OGG_1-Skills (Older Gemini General) ","order":3,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":2,"11":3,"12":3,"14":3,"19":1},"army":{"Recruit":145,"Cannoneer":150},"type":47,"target":7434,"targetName":"Wildlife Cave (easy)"}},
	"06": {"389191.0":{"grid":6583,"name":"OGG_1-Skills (Older Gemini General) ","order":13,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":2,"11":3,"12":3,"14":3,"19":1},"army":{"Militia":152,"Cannoneer":143},"type":47,"target":7432,"targetName":"Wildlife Leader Cave"}},
	"07": {"187526.0":{"grid":7633,"name":"Loner_2-Skills (Loner General) ","order":8,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":2,"9":3,"11":3,"12":3,"19":1},"army":{"Recruit":140,"Cannoneer":105},"type":67,"target":7699,"targetName":"Wildlife Cave (easy)"}},
	"08": {"187526.0":{"grid":7633,"name":"Loner_2-Skills (Loner General) ","order":8,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":2,"9":3,"11":3,"12":3,"19":1},"army":{"Recruit":140,"Cavalry":20,"Cannoneer":85},"type":67,"target":5654,"targetName":"Wildlife Cave (easy)"}},
	"09": {"389191.0":{"grid":7566,"name":"OGG_1-Skills (Older Gemini General) ","order":13,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":2,"11":3,"12":3,"14":3,"19":1},"army":{"Recruit":160,"Cannoneer":135},"type":47,"target":4699,"targetName":"Wildlife Cave (easy)"}},
	"10": {
		"262.0":{"grid":7297,"name":"General 1","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"EliteSoldier":151,"Cavalry":49},"type":0,"target":3273,"targetName":"Wildlife Cave (easy)"},
		"6365.0":{"grid":6757,"name":"General 2","order":1,"time":4000,"skills":{"6":3,"11":3,"14":2},"army":{"Bowman":200},"type":0,"target":3069,"targetName":"Wildlife Leader Cave"},
		"389191.0":{"grid":6622,"name":"OGG_1-Skills (Older Gemini General) ","order":2,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":2,"11":3,"12":3,"14":3,"19":1},"army":{"Militia":150,"Cannoneer":145},"type":47,"target":3069,"targetName":"Wildlife Leader Cave"}},
	"11": {"187526.0":{"grid":3613,"name":"Loner_2-Skills (Loner General) ","order":7,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":2,"9":3,"11":3,"12":3,"19":1},"army":{"Militia":80,"Cannoneer":165},"type":67,"target":2732,"targetName":"Wildlife Cave (easy)"}},
	"12": {"389488.0":{"grid":3817,"name":"YGG_1_1UP (Younger Gemini General) ","order":16,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":125},"type":50,"target":1106,"targetName":"Wildlife Cave (easy)"}},
	"13": {"187526.0":{"grid":3613,"name":"Loner_2-Skills (Loner General) ","order":7,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":2,"9":3,"11":3,"12":3,"19":1},"army":{"Recruit":165,"Cannoneer":80},"type":67,"target":1925,"targetName":"Wildlife Cave (easy)"}},
	"14": {"389488.0":{"grid":3817,"name":"YGG_1_1UP (Younger Gemini General) ","order":10,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":120},"type":50,"target":3020,"targetName":"Wildlife Cave (easy)"}},
	"15": {
		"589.0":{"grid":3608,"name":"General 3","order":1,"time":4000,"skills":{"6":3,"11":3,"14":2},"army":{"EliteSoldier":103,"Cavalry":97},"type":0,"target":2067,"targetName":"Wildlife Cave (easy)"},
		"63091.0":{"grid":4430,"name":"Loner 1 (Loner General) ","order":4,"time":4000,"skills":{"2":2,"3":1,"6":3,"11":3},"army":{"Bowman":230},"type":67,"target":1930,"targetName":"Wildlife Leader Cave"},
		"187526.0":{"grid":4565,"name":"Loner_2-Skills (Loner General) ","order":5,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":2,"9":3,"11":3,"12":3,"19":1},"army":{"Recruit":160,"Militia":85},"type":67,"target":1930,"targetName":"Wildlife Leader Cave"}},
	"16": {"127334.0":{"grid":1867,"name":"Sylvana_1-Skills","order":4,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"Recruit":120,"Cannoneer":75},"type":57,"target":1801,"targetName":"Traitors Camp (easy)"}},
	"17": {"389488.0":{"grid":1113,"name":"YGG_1_1UP (Younger Gemini General) ","order":10,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":20,"Longbowman":135},"type":50,"target":3301,"targetName":"Traitors Camp (easy)"}},
	"18": {
		"589.0":{"grid":2071,"name":"General 3","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"Recruit":200},"type":0,"target":2625,"targetName":"Traitors Camp (easy)"},
		"389488.0":{"grid":1113,"name":"YGG_1_1UP (Younger Gemini General) ","order":1,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":80},"type":50,"target":2625,"targetName":"Traitors Camp (easy)"}},
	"19": {"389488.0":{"grid":1113,"name":"YGG_1_1UP (Younger Gemini General) ","order":9,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":100},"type":50,"target":2830,"targetName":"Traitors Camp (easy)"}},
	"20": {"389191.0":{"grid":1661,"name":"OGG_1-Skills (Older Gemini General) ","order":6,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":2,"11":3,"12":3,"14":3,"19":1},"army":{"Recruit":160,"Cannoneer":135},"type":47,"target":1545,"targetName":"Traitors Camp (easy)"}},
	"21": {"127334.0":{"grid":1867,"name":"Sylvana_1-Skills","order":6,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"Recruit":160,"Cannoneer":35},"type":57,"target":2160,"targetName":"Traitors Camp (easy)"}},
	"22": {
		"39780.0":{"grid":1798,"name":"General 6","order":1,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"Bowman":200},"type":0,"target":3247,"targetName":"Traitors Camp (easy)"},
		"389488.0":{"grid":1113,"name":"YGG_1_1UP (Younger Gemini General) ","order":9,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":100},"type":50,"target":3247,"targetName":"Traitors Camp (easy)"}},
	"23": {
		"389488.0":{"grid":1113,"name":"YGG_1_1UP (Younger Gemini General) ","order":0,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":140},"type":50,"target":3379,"targetName":"Royal Residence"},
		"389191.0":{"grid":1661,"name":"OGG_1-Skills (Older Gemini General) ","order":1,"time":60000,"skills":{"2":3,"3":3,"6":3,"8":2,"11":3,"12":3,"14":3,"19":1},"army":{"Recruit":160,"Cannoneer":135},"type":47,"target":3379,"targetName":"Royal Residence"}}
}

var TreasureOfWisdom_Silvana_Ghost = {
	"01": {"536169.0":{"grid":5853,"name":"RG_2_skills (Resolute General) ","order":8,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":85,"MountedMarksman":100,"Besieger":30},"type":79,"target":7217,"targetName":"Desert Bandit Camp (easy)"}},
	"02": {"127334.0":{"grid":6059,"name":"Sylvana_1-Skills","order":3,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedMarksman":195},"type":57,"target":5725,"targetName":"Desert Bandit Camp (easy)"}},
	"03": {"389488.0":{"grid":5518,"name":"YGG_1_1UP (Younger Gemini General) ","order":5,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":1},"type":50,"target":6279,"targetName":"Desert Bandit Leader"}},
	// "03": {"483089.0":{"grid":5922,"name":"Ghost_1_TR_WW (Ghost General) ","order":3,"time":1000,"skills":{"3":3,"6":3,"8":3,"11":3,"12":3,"14":3,"15":3},"army":{"MountedSwordsman":20,"Knight":20,"MountedMarksman":180,"Besieger":10},"type":63,"target":6279,"targetName":"Desert Bandit Leader"}},
	"04": {"524888.0":{"grid":5788,"name":"RG_1_Skills (Resolute General) ","order":7,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":25,"MountedMarksman":190},"type":79,"target":6279,"targetName":"Desert Bandit Leader"}},
	// "04": {"127334.0":{"grid":6059,"name":"Sylvana_1-Skills","order":9,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"Knight":140,"Besieger":20},"type":57,"target":7217,"targetName":"Desert Bandit Camp (easy)"}},
	// "05": {"294792.0":{"grid":6124,"name":"Sylvana_2-Skills","order":10,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedSwordsman":80,"Knight":80,"MountedMarksman":35},"type":57,"target":7488,"targetName":"Desert Bandit Camp (easy)"}},
	"05": {"536169.0":{"grid":5853,"name":"RG_2_Skills (Resolute General) ","order":7,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":50,"MountedMarksman":165},"type":79,"target":7488,"targetName":"Desert Bandit Camp (easy)"}},
	"06": {"495320.0":{"grid":6124,"name":"YGG_3_1UP (Younger Gemini General) ","order":11,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":55},"type":50,"target":7988,"targetName":"Desert Bandit Camp (easy)"}},
	"07": {"127334.0":{"grid":6059,"name":"Sylvana_1-Skills","order":7,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedMarksman":160},"type":57,"target":7988,"targetName":"Desert Bandit Camp (easy)"}},
	"08": {"294792.0":{"grid":5922,"name":"Sylvana_2-Skills","order":9,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedSwordsman":120,"MountedMarksman":75},"type":57,"target":7454,"targetName":"Desert Bandit Camp (easy)"}},
	"09": {"483089.0":{"grid":5987,"name":"Ghost_1_TR_WW (Ghost General) ","order":4,"time":1000,"skills":{"3":3,"6":3,"8":3,"11":3,"12":3,"14":3,"15":3},"army":{"Swordsman":60,"ArmoredMarksman":170},"type":63,"target":7660,"targetName":"Desert Bandit Leader"}},
	"10": {
		"262.0":{"grid":6059,"name":"General 1","order":0,"time":4000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":200},"type":0,"target":7500,"targetName":"Desert Bandit Camp (easy)"},
		"127334.0":{"grid":5377,"name":"Sylvana_1-Skills","order":1,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedSwordsman":40,"Knight":120,"MountedMarksman":35},"type":57,"target":7367,"targetName":"Desert Bandit Leader"}},
	"11": {"294792.0":{"grid":7659,"name":"Sylvana_2-Skills","order":8,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedSwordsman":20,"MountedMarksman":120},"type":57,"target":8149,"targetName":"Desert Bandit Camp (hard)"}},
	"12": {"483089.0":{"grid":7386,"name":"Ghost_1_TR_WW (Ghost General) ","order":4,"time":1000,"skills":{"3":3,"6":3,"8":3,"11":3,"12":3,"14":3,"15":3},"army":{"MountedSwordsman":20,"ArmoredMarksman":100,"MountedMarksman":110},"type":63,"target":7129,"targetName":"Desert Bandit Camp (easy)"}},
	"13": {"127334.0":{"grid":7589,"name":"Sylvana_1-Skills","order":8,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedSwordsman":20,"Knight":60,"MountedMarksman":60},"type":57,"target":8149,"targetName":"Desert Bandit Camp (hard)"}},
	"14": {
		"483087.0":{"grid":7724,"name":"YGG_2_1UP (Younger Gemini General) ","order":0,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Knight":85},"type":50,"target":5021,"targetName":"Desert Bandit Camp (medi..."},
		"127334.0":{"grid":7589,"name":"Sylvana_1-Skills","order":1,"time":25000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"Knight":80,"MountedMarksman":115},"type":57,"target":5021,"targetName":"Desert Bandit Camp (medi..."}
	},
	"15": {"294792.0":{"grid":7659,"name":"Sylvana_2-Skills","order":8,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedMarksman":100},"type":57,"target":6995,"targetName":"Desert Bandit Leader"}},
	"16": {"294792.0":{"grid":7659,"name":"Sylvana_2-Skills","order":3,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedSwordsman":100,"Knight":95},"type":57,"target":5891,"targetName":"Desert Bandit Leader"}},
	"17": {"127334.0":{"grid":7589,"name":"Sylvana_1-Skills","order":4,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedSwordsman":20,"Knight":175},"type":57,"target":4887,"targetName":"Desert Bandit Leader"}},
	"18": {"483087.0":{"grid":6301,"name":"YGG_2_1UP (Younger Gemini General) ","order":14,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":115},"type":50,"target":4792,"targetName":"Desert Bandit Camp (medi..."}},
	"19": {"294792.0":{"grid":5067,"name":"Sylvana_2-Skills","order":12,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedMarksman":160},"type":57,"target":4792,"targetName":"Desert Bandit Camp (medi..."}},
	"20": {"127334.0":{"grid":4929,"name":"Sylvana_1-Skills","order":12,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedMarksman":180},"type":57,"target":5125,"targetName":"Desert Bandit Camp (easy)"}},
	"21": {"294792.0":{"grid":5067,"name":"Sylvana_2-Skills","order":12,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedSwordsman":40,"Knight":55,"MountedMarksman":60,"Besieger":40},"type":57,"target":4571,"targetName":"Desert Bandit Camp (hard)"}},
	"22": {"483089.0":{"grid":5958,"name":"Ghost_1_TR_WW (Ghost General) ","order":7,"time":1000,"skills":{"3":3,"6":3,"8":3,"11":3,"12":3,"14":3,"15":3},"army":{"MountedSwordsman":80,"Besieger":150},"type":63,"target":3009,"targetName":"Desert Bandit Camp (easy)"}},
	// 22 update grid to non colliding as general is recovering
	// send 3rd YGG to the adventure as two are already recovering
	"23": {"495320.0":{"grid":6163,"name":"YGG_3_1UP (Younger Gemini General) ","order":13,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Knight":85},"type":50,"target":2461,"targetName":"Desert Bandit Leader"}},
	"24": {"127334.0":{"grid":4929,"name":"Sylvana_1-Skills","order":11,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedSwordsman":20,"MountedMarksman":160,"Besieger":15},"type":57,"target":2461,"targetName":"Desert Bandit Leader"}},
	"25": {"294792.0":{"grid":5067,"name":"Sylvana_2-Skills","order":12,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedSwordsman":60,"ArmoredMarksman":40,"MountedMarksman":95},"type":57,"target":1976,"targetName":"Desert Bandit Camp (easy)"}},
	"26": {"127334.0":{"grid":4929,"name":"Sylvana_1-Skills","order":12,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedSwordsman":160,"Knight":35},"type":57,"target":420,"targetName":"Desert Bandit Camp (easy)"}},
	"27": {"483089.0":{"grid":5958,"name":"Ghost_1_TR_WW (Ghost General) ","order":7,"time":1000,"skills":{"3":3,"6":3,"8":3,"11":3,"12":3,"14":3,"15":3},"army":{"MountedSwordsman":40,"ArmoredMarksman":60,"MountedMarksman":130},"type":63,"target":491,"targetName":"Desert Bandit Leader"}},
	"28": {"495322.0":{"grid":757,"name":"Ghost_2_TR_WW (Ghost General) ","order":8,"time":1000,"skills":{"3":3,"6":3,"8":3,"11":3,"12":3,"14":3,"15":3},"army":{"MountedSwordsman":75,"ArmoredMarksman":155},"type":63,"target":1578,"targetName":"Desert Bandit Camp (hard)"}},
	"29": {"294792.0":{"grid":491,"name":"Sylvana_2-Skills","order":11,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedMarksman":195},"type":57,"target":2061,"targetName":"Desert Bandit Camp (easy)"}},
	"30": {"127334.0":{"grid":420,"name":"Sylvana_1-Skills","order":12,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedSwordsman":20,"Knight":120,"Besieger":20},"type":57,"target":974,"targetName":"Desert Bandit Leader"}},
	"31": {"495322.0":{"grid":757,"name":"Ghost_2_TR_WW (Ghost General) ","order":7,"time":1000,"skills":{"3":3,"6":3,"8":3,"11":3,"12":3,"14":3,"15":3},"army":{"MountedSwordsman":20,"MountedMarksman":210},"type":63,"target":785,"targetName":"Desert Bandit Camp (medi..."}},
	"32": {"294792.0":{"grid":491,"name":"Sylvana_2-Skills","order":11,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedSwordsman":20,"Knight":60,"MountedMarksman":115},"type":57,"target":989,"targetName":"Desert Bandit Leader"}},
	"33": {"127334.0":{"grid":1534,"name":"Sylvana_1-Skills","order":11,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedSwordsman":40,"Knight":60,"Besieger":95},"type":57,"target":3025,"targetName":"Desert Bandit Leader"}},
	"34": {"483089.0":{"grid":1125,"name":"Ghost_1_TR_WW (Ghost General) ","order":8,"time":1000,"skills":{"3":3,"6":3,"8":3,"11":3,"12":3,"14":3,"15":3},"army":{"MountedSwordsman":60,"ArmoredMarksman":40,"MountedMarksman":130},"type":63,"target":4123,"targetName":"Desert Bandit Leader"}},
	"35": {"294792.0":{"grid":785,"name":"Sylvana_2-Skills","order":11,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedSwordsman":20,"Knight":140,"Besieger":35},"type":57,"target":3169,"targetName":"Desert Bandit Camp (hard)"}},
	"36": {"127334.0":{"grid":1534,"name":"Sylvana_1-Skills","order":11,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedSwordsman":40,"ArmoredMarksman":40,"MountedMarksman":115},"type":57,"target":2359,"targetName":"Tomb"}},
	"37": {"524888.0":{"grid":2898,"name":"RG_1_Skills (Resolute General) ","order":7,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":65,"ArmoredMarksman":110,"MountedMarksman":40},"type":79,"target":1545,"targetName":"Desert Bandit Camp (hard)"}},
	"38": {"536169.0":{"grid":3033,"name":"RG_2_skills (Resolute General) ","order":8,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":50,"MountedMarksman":165},"type":79,"target":2022,"targetName":"Desert Bandit Camp (medi..."}},
	"39": {"524888.0":{"grid":2898,"name":"RG_1_Skills (Resolute General) ","order":7,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":50,"MountedMarksman":105,"Besieger":60},"type":79,"target":2639,"targetName":"Desert Bandit Camp (medi..."}},
	"40": {"536169.0":{"grid":3033,"name":"RG_2_skills (Resolute General) ","order":7,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":25,"ArmoredMarksman":80,"MountedMarksman":110},"type":79,"target":2229,"targetName":"Western defence system"}},
	"41": {"524888.0":{"grid":2898,"name":"RG_1_Skills (Resolute General) ","order":7,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":35,"MountedMarksman":180},"type":79,"target":2434,"targetName":"Eastern defence system"}},
	"42": {},
	"43": {},
}

var TreasureOfKnowlage_RG_SYLV_GHOST = {
	"01": {"524888.0":{"grid":1367,"name":"RG_1_Skills(Resolute General)","order":15,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":35,"Knight":85,"ArmoredMarksman":5,"MountedMarksman":90},"type":79,"target":497,"targetName":"Desert Bandit Camp (medi..."}},
	"02": {"536169.0":{"grid":1026,"name":"RG_2_skills(Resolute General)","order":23,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":65,"Knight":5,"MountedMarksman":30,"Besieger":115},"type":79,"target":1590,"targetName":"Desert Bandit Camp (medi..."}},
	"03": {"127334.0":{"grid":960,"name":"Sylvana_1-Skills(General Sylvana)","order":24,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedMarksman":195},"type":57,"target":1595,"targetName":"Desert Bandit Camp (medi..."}},
	"04": {"524888.0":{"grid":1367,"name":"RG_1_Skills(Resolute General)","order":23,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":80,"MountedMarksman":135},"type":79,"target":1866,"targetName":"Desert Bandit Leader"}},
	"05": {"536169.0":{"grid":1026,"name":"RG_2_skills(Resolute General)","order":24,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":55,"ArmoredMarksman":120,"MountedMarksman":40},"type":79,"target":2390,"targetName":"Desert Bandit Camp (medi..."}},
	"06": {"524888.0":{"grid":1367,"name":"RG_1_Skills(Resolute General)","order":23,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":30,"ArmoredMarksman":140,"MountedMarksman":45},"type":79,"target":2727,"targetName":"Desert Bandit Camp (medi..."}},
	"07": {"536169.0":{"grid":1026,"name":"RG_2_skills(Resolute General)","order":24,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":55,"ArmoredMarksman":160},"type":79,"target":3412,"targetName":"Desert Bandit Camp (medi..."}},
	"08": {"524888.0":{"grid":1367,"name":"RG_1_Skills(Resolute General)","order":23,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":60,"MountedMarksman":20,"Besieger":135},"type":79,"target":3819,"targetName":"Desert Bandit Camp (medi..."}},
	"09": {"536169.0":{"grid":1026,"name":"RG_2_skills(Resolute General)","order":23,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":50,"Knight":15,"Besieger":150},"type":79,"target":3549,"targetName":"Desert Bandit Leader"}},
	"10": {"524888.0":{"grid":1367,"name":"RG_1_Skills(Resolute General)","order":23,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":60,"MountedMarksman":155},"type":79,"target":4426,"targetName":"Desert Bandit Camp (easy)"}},
	"11": {"536169.0":{"grid":1026,"name":"RG_2_skills(Resolute General)","order":23,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":60,"Besieger":155},"type":79,"target":5242,"targetName":"Desert Bandit Camp (medi..."}},
	"12": {"127334.0":{"grid":960,"name":"Sylvana_1-Skills(General Sylvana)","order":23,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedSwordsman":105,"MountedMarksman":90},"type":57,"target":6682,"targetName":"Desert Bandit Camp (medi..."}},
	"13": {"524888.0":{"grid":1367,"name":"RG_1_Skills(Resolute General)","order":23,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":30,"MountedMarksman":185},"type":79,"target":6963,"targetName":"Desert Bandit Camp (medi..."}},
	"14": {"294792.0":{"grid":1297,"name":"Sylvana_2-Skills(General Sylvana)","order":24,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedMarksman":195},"type":57,"target":7373,"targetName":"Desert Bandit Camp (medi..."}},
	"15": {"536169.0":{"grid":1026,"name":"RG_2_skills(Resolute General)","order":23,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":35,"MountedMarksman":90,"Besieger":90},"type":79,"target":6965,"targetName":"Desert Bandit Leader"}},
	"16": {"524888.0":{"grid":2368,"name":"RG_1_Skills(Resolute General)","order":23,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":115,"Knight":45,"ArmoredMarksman":35,"MountedMarksman":20},"type":79,"target":3525,"targetName":"Desert Bandit Camp (medi..."}},
	"17": {"524888.0":{"grid":2368,"name":"RG_1_Skills(Resolute General)","order":23,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":45,"MountedMarksman":170},"type":79,"target":3933,"targetName":"Desert Bandit Camp (medi..."}},
	"18": {"524888.0":{"grid":2368,"name":"RG_1_Skills(Resolute General)","order":23,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":65,"ArmoredMarksman":10,"MountedMarksman":140},"type":79,"target":3799,"targetName":"Desert Bandit Leader"}},
	"19": {"127334.0":{"grid":7514,"name":"Sylvana_1-Skills(General Sylvana)","order":25,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedMarksman":195},"type":57,"target":1985,"targetName":"Desert Bandit Camp (easy)"}},
	"20": {"389488.0":{"grid":7718,"name":"YGG_1_1UP(Younger Gemini General)","order":23,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":125},"type":50,"target":1716,"targetName":"Desert Bandit Camp (medi..."},
			"294792.0":{"grid":7583,"name":"Sylvana_2-Skills(General Sylvana)","order":24,"time":10000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedMarksman":195},"type":57,"target":1716,"targetName":"Desert Bandit Camp (medi..."}},
	"21": {"524888.0":{"grid":7788,"name":"RG_1_Skills(Resolute General)","order":23,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":45,"MountedMarksman":100,"Besieger":70},"type":79,"target":1444,"targetName":"Desert Bandit Leader"}},
	"22": {"536169.0":{"grid":7653,"name":"RG_2_skills(Resolute General)","order":24,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":65,"MountedMarksman":150},"type":79,"target":6168,"targetName":"Desert Bandit Camp (medi..."}},
	"23": {"389191.0":{"grid":7248,"name":"OGG_1-Skills(Older Gemini General)","order":16,"time":1000,"skills":{"2":3,"3":3,"8":2,"9":3,"11":3,"12":3,"14":3,"19":1},"army":{"Swordsman":30,"ArmoredMarksman":120,"MountedMarksman":145},"type":47,"target":6241,"targetName":"Desert Bandit Camp (medi..."}},
	"24": {"536169.0":{"grid":7653,"name":"RG_2_skills(Resolute General)","order":24,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":50,"MountedMarksman":165},"type":79,"target":5427,"targetName":"Desert Bandit Camp (medi..."}},
	"25": {"524888.0":{"grid":7788,"name":"RG_1_Skills(Resolute General)","order":23,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":55,"ArmoredMarksman":100,"MountedMarksman":60},"type":79,"target":5225,"targetName":"Desert Bandit Leader"}},
	"26": {"536169.0":{"grid":7653,"name":"RG_2_skills(Resolute General)","order":24,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":70,"ArmoredMarksman":105,"MountedMarksman":40},"type":79,"target":1747,"targetName":"Desert Bandit Leader"}},
	"27": {"524888.0":{"grid":2427,"name":"RG_1_Skills(Resolute General)","order":22,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":65,"ArmoredMarksman":150},"type":79,"target":2011,"targetName":"Desert Bandit Camp (hard)"}},
	"28": {"536169.0":{"grid":2429,"name":"RG_2_skills(Resolute General)","order":22,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":35,"ArmoredMarksman":140,"MountedMarksman":40},"type":79,"target":2353,"targetName":"Desert Bandit Camp (hard)"}},
	"29": {"483089.0":{"grid":2363,"name":"Ghost_1_TR_WW(Ghost General)","order":7,"time":1000,"skills":{"3":3,"6":3,"8":3,"11":3,"12":3,"14":3,"15":3},"army":{"Swordsman":15,"MountedMarksman":215},"type":63,"target":2013,"targetName":"Desert Bandit Leader"}},
	"30": {"524888.0":{"grid":2427,"name":"RG_1_Skills(Resolute General)","order":20,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":35,"ArmoredMarksman":145,"MountedMarksman":35},"type":79,"target":2266,"targetName":"Desert Bandit Camp (hard)"}},
	"31": {"127334.0":{"grid":2567,"name":"Sylvana_1-Skills(General Sylvana)","order":24,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedMarksman":195},"type":57,"target":1992,"targetName":"Desert Bandit Leader"}},
	"32": {"536169.0":{"grid":2429,"name":"RG_2_Skills(Resolute General)","order":23,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":30,"ArmoredMarksman":130,"MountedMarksman":55},"type":79,"target":3517,"targetName":"Desert Bandit Camp (hard)"}},
	"33": {"524888.0":{"grid":2427,"name":"RG_1_skills(Resolute General)","order":23,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":115,"MountedMarksman":100},"type":79,"target":5008,"targetName":"Desert Bandit Camp (hard)"}},
	"34": {"389488.0":{"grid":2704,"name":"YGG_1_1UP(Younger Gemini General)","order":25,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":1},"type":50,"target":5959,"targetName":"Desert Bandit Camp (hard)"},
			"127334.0":{"grid":2567,"name":"Sylvana_1-Skills(General Sylvana)","order":26,"time":15000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedMarksman":195},"type":57,"target":5959,"targetName":"Desert Bandit Camp (hard)"}},
	"35": {"536169.0":{"grid":2429,"name":"RG_2_Skills(Resolute General)","order":23,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":50,"MountedMarksman":165},"type":79,"target":5947,"targetName":"Desert Bandit Camp (hard)"}},
	"36": {"524888.0":{"grid":2427,"name":"RG_1_skills(Resolute General)","order":22,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":150,"MountedMarksman":65},"type":79,"target":5949,"targetName":"Desert Bandit Leader"}},
	"37": {"483089.0":{"grid":2363,"name":"Ghost_1_TR_WW(Ghost General)","order":7,"time":1000,"skills":{"3":3,"6":3,"8":3,"11":3,"12":3,"14":3,"15":3},"army":{"Swordsman":75,"MountedMarksman":155},"type":63,"target":5874,"targetName":"Desert Bandit Leader"}},
	"38": {"524888.0":{"grid":5946,"name":"RG_1_Skills(Resolute General)","order":23,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":125,"MountedMarksman":90},"type":79,"target":4259,"targetName":"Desert Bandit Leader"}},
	"39": {"536169.0":{"grid":5944,"name":"RG_2_skills(Resolute General)","order":23,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":60,"MountedMarksman":15,"Besieger":140},"type":79,"target":3221,"targetName":"Desert Bandit Camp (hard)"}},
	"40": {"524888.0":{"grid":5946,"name":"RG_1_Skills(Resolute General)","order":23,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":65,"Besieger":150},"type":79,"target":3359,"targetName":"Desert Bandit Leader"}},
	"41": {"536169.0":{"grid":5262,"name":"RG_2_skills(Resolute General)","order":22,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":115,"MountedMarksman":100},"type":79,"target":4786,"targetName":"Desert Bandit Camp (medi..."}},
	"42": {"524888.0":{"grid":5123,"name":"RG_1_Skills(Resolute General)","order":21,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":60,"ArmoredMarksman":130,"MountedMarksman":25},"type":79,"target":4449,"targetName":"Desert Bandit Camp (hard)"}},
	"43": {"536169.0":{"grid":5262,"name":"RG_2_skills(Resolute General)","order":23,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":60,"Besieger":155},"type":79,"target":4385,"targetName":"Desert Bandit Camp (medi..."}},
	"44": {"524888.0":{"grid":5123,"name":"RG_1_Skills(Resolute General)","order":23,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":35,"MountedMarksman":180},"type":79,"target":4591,"targetName":"Desert Bandit Camp (easy)"}},
	"45": {"536169.0":{"grid":5262,"name":"RG_2_skills(Resolute General)","order":24,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":50,"ArmoredMarksman":70,"MountedMarksman":95},"type":79,"target":4184,"targetName":"Desert Bandit Camp (hard)"}},
	"46": {"127334.0":{"grid":5054,"name":"Sylvana_1-Skills(General Sylvana)","order":24,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedMarksman":195},"type":57,"target":3571,"targetName":"Desert Bandit Camp (hard)"}},
	"47": {"524888.0":{"grid":5123,"name":"RG_1_Skills(Resolute General)","order":23,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":75,"Knight":15,"MountedMarksman":95,"Besieger":30},"type":79,"target":3777,"targetName":"Ancient Library"}}
}

var SindbadAndBesiegedCity_RG_SYLV_GHOST = {
	"01": {
		"127334.0":{"grid":6981,"name":"Sylvana_1-Skills","order":8,"time":1000,"skills":{"4":3,"4":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedSwordsman":50,"MountedMarksman":145},"type":57,"target":6370,"targetName":"Sailor Camp (hard)"},
		"524888.0":{"grid":7047,"name":"RG_1_Skills (Resolute General) ","order":8,"time":30000,"skills":{"4":3,"4":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":50,"MountedMarksman":165},"type":79,"target":6305,"targetName":"Sailor Camp (easy)"},
		"294792.0":{"grid":7184,"name":"Sylvana_2-Skills","order":8,"time":30000,"skills":{"4":3,"4":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedMarksman":150},"type":57,"target":5896,"targetName":"Sailor Camp (easy)"},
		"389488.0":{"grid":7386,"name":"YGG_1_1UP (Younger Gemini General) ","order":15,"time":30000,"skills":{"4":3,"4":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":155},"type":50,"target":5898,"targetName":"Sailor Camp (medium)"}},
	"02": {
		"127334.0":{"grid":6981,"name":"Sylvana_1-Skills","order":13,"time":1000,"skills":{"4":3,"4":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedSwordsman":100,"MountedMarksman":95},"type":57,"target":5898,"targetName":"Sailor Camp (medium)"},
		"294792.0":{"grid":7184,"name":"Sylvana_2-Skills","order":13,"time":30000,"skills":{"4":3,"4":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedSwordsman":14,"MountedMarksman":181},"type":57,"target":5488,"targetName":"Sailor Camp (easy)"}},
	"03": {"127334.0":{"grid":6981,"name":"Sylvana_1-Skills","order":13,"time":1000,"skills":{"4":3,"4":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedSwordsman":50,"Knight":50,"MountedMarksman":50,"Besieger":45},"type":57,"target":5618,"targetName":"Sailor Leader"}},
	"04": {
		"524888.0":{"grid":7047,"name":"RG_1_Skills (Resolute General) ","order":12,"time":1000,"skills":{"4":3,"4":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedMarksman":215},"type":79,"target":5904,"targetName":"Sailor Camp (hard)"},
		"536169.0":{"grid":7182,"name":"RG_2_Skills (Resolute General) ","order":11,"time":30000,"skills":{"4":3,"4":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":50,"MountedMarksman":165},"type":79,"target":6042,"targetName":"Sailor Leader"}},
	"05": {"524888.0":{"grid":7047,"name":"RG_1_Skills (Resolute General) ","order":12,"time":1000,"skills":{"4":3,"4":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":35,"MountedMarksman":180},"type":79,"target":5360,"targetName":"Sailor Camp (easy)"}},
	"06": {"483089.0":{"grid":7319,"name":"Ghost_1_TR_WW (Ghost General) ","order":4,"time":1000,"skills":{"4":3,"6":3,"8":3,"11":3,"12":3,"14":3,"15":3},"army":{"MountedSwordsman":15,"ArmoredMarksman":140,"MountedMarksman":75},"type":63,"target":4820,"targetName":"Sailor Camp (easy)"}},
	"07": {
		"536169.0":{"grid":7182,"name":"RG_2_Skills (Resolute General) ","order":11,"time":1000,"skills":{"4":3,"4":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":40,"MountedSwordsman":25,"MountedMarksman":135},"type":79,"target":4278,"targetName":"Sailor Camp (hard)"},
		"389488.0":{"grid":7386,"name":"YGG_1_1UP (Younger Gemini General) ","order":14,"time":30000,"skills":{"4":3,"4":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":75},"type":50,"target":4075,"targetName":"Sailor Leader"}},
	"08": {"524888.0":{"grid":7047,"name":"RG_1_Skills (Resolute General) ","order":12,"time":1000,"skills":{"4":3,"4":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":25,"MountedMarksman":190},"type":79,"target":4075,"targetName":"Sailor Leader"}},
	"09": {
		"536169.0":{"grid":2850,"name":"RG_2_Skills (Resolute General) ","order":12,"time":1000,"skills":{"4":3,"4":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":85,"MountedMarksman":130},"type":79,"target":3253,"targetName":"Sailor Camp (easy)"},
		"495322.0":{"grid":2987,"name":"Ghost_2_TR_WW (Ghost General) ","order":4,"time":30000,"skills":{"4":3,"6":3,"8":3,"11":3,"12":3,"14":3,"15":3},"army":{"MountedSwordsman":40,"MountedMarksman":190},"type":63,"target":3176,"targetName":"Sailor Leader"},
		"127334.0":{"grid":4550,"name":"Sylvana_1-Skills","order":11,"time":1000,"skills":{"4":3,"4":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedSwordsman":15,"Knight":140,"Besieger":40},"type":57,"target":1619,"targetName":"Sailor Camp (medium)"},
		"294792.0":{"grid":4685,"name":"Sylvana_2-Skills","order":12,"time":30000,"skills":{"4":3,"4":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedMarksman":170},"type":57,"target":1423,"targetName":"Sailor Leader"}},
	"10": {
		"536169.0":{"grid":2850,"name":"RG_2_Skills (Resolute General) ","order":12,"time":1000,"skills":{"4":3,"4":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":25,"MountedMarksman":190},"type":79,"target":1209,"targetName":"Sailor Camp (easy)"},
		"483087.0":{"grid":4210,"name":"YGG_2_1UP (Younger Gemini General) ","order":14,"time":1000,"skills":{"4":3,"4":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":40},"type":50,"target":1070,"targetName":"Sailor Camp (easy)"}},
	"11": {
		"127334.0":{"grid":4550,"name":"Sylvana_1-Skills","order":12,"time":1000,"skills":{"4":3,"4":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedMarksman":150},"type":57,"target":1070,"targetName":"Sailor Camp (easy)"},
		"294792.0":{"grid":4685,"name":"Sylvana_2-Skills","order":13,"time":25000,"skills":{"4":3,"4":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedSwordsman":45,"MountedMarksman":150},"type":57,"target":868,"targetName":"Sailor Leader"},
		"536169.0":{"grid":2850,"name":"RG_2_Skills (Resolute General) ","order":6,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":50,"MountedMarksman":25,"Besieger":140},"type":79,"target":3921,"targetName":"Sailor Camp (medium)"}},
	"12": {
		"524888.0":{"grid":3176,"name":"RG_1_Skills (Resolute General) ","order":12,"time":1000,"skills":{"4":3,"4":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":90,"ArmoredMarksman":25,"Besieger":100},"type":79,"target":3725,"targetName":"Sailor Leader"},
		"536169.0":{"grid":2363,"name":"RG_2_Skills (Resolute General) ","order":12,"time":1000,"skills":{"4":3,"4":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":50,"Besieger":165},"type":79,"target":3578,"targetName":"Sailor Camp (hard)"}},
	"13": {"524888.0":{"grid":3176,"name":"RG_1_Skills (Resolute General) ","order":12,"time":1000,"skills":{"4":3,"4":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":20,"MountedMarksman":195},"type":79,"target":3511,"targetName":"Sailor Leader"}},
	"14": {
		"127334.0":{"grid":3041,"name":"Sylvana_1-Skills","order":12,"time":1000,"skills":{"4":3,"4":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":35,"MountedMarksman":160},"type":57,"target":5211,"targetName":"Sailor Leader"},
		"389191.0":{"grid":2566,"name":"OGG_1-Skills (Older Gemini General) ","order":8,"time":10000,"skills":{"4":3,"4":3,"8":2,"9":3,"11":3,"12":3,"14":3,"19":1},"army":{"MountedSwordsman":50,"MountedMarksman":245},"type":47,"target":4457,"targetName":"Sailor Camp (easy)"}},
	"15": {
		"127334.0":{"grid":3041,"name":"Sylvana_1-Skills","order":13,"time":1000,"skills":{"4":3,"4":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedMarksman":150},"type":57,"target":4520,"targetName":"Sailor Camp (hard)"},
		"389191.0":{"grid":2566,"name":"OGG_1-Skills (Older Gemini General) ","order":8,"time":10000,"skills":{"4":3,"4":3,"8":2,"9":3,"11":3,"12":3,"14":3,"19":1},"army":{"MountedSwordsman":70,"ArmoredMarksman":40,"MountedMarksman":185},"type":47,"target":4248,"targetName":"Sailor Leader"},
		"495320.0":{"grid":2771,"name":"YGG_3_1UP (Younger Gemini General) ","order":14,"time":30000,"skills":{"4":3,"4":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":25},"type":50,"target":5060,"targetName":"Sailor Camp (medium)"},
		"524888.0":{"grid":3176,"name":"RG_1_Skills (Resolute General) ","order":11,"time":40000,"skills":{"4":3,"4":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":15,"MountedMarksman":200},"type":79,"target":5060,"targetName":"Sailor Camp (medium)"}},
	"16": {
		"127334.0":{"grid":3041,"name":"Sylvana_1-Skills","order":11,"time":1000,"skills":{"4":3,"4":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedSwordsman":26,"MountedMarksman":169},"type":57,"target":5401,"targetName":"Sailor Camp (hard)"},
		"262.0":{"grid":2906,"name":"General 1","order":0,"time":25000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":200},"type":0,"target":4433,"targetName":"Sailor Camp (medium)"},
		"389191.0":{"grid":2566,"name":"OGG_1-Skills (Older Gemini General) ","order":1,"time":12000,"skills":{"4":3,"4":3,"8":2,"9":3,"11":3,"12":3,"14":3,"19":1},"army":{"MountedSwordsman":40,"MountedMarksman":255},"type":47,"target":4367,"targetName":"Sailor Leader"}},
	"17": {
		"524888.0":{"grid":5471,"name":"RG_1_Skills (Resolute General) ","order":8,"time":1000,"skills":{"4":3,"4":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":60,"Besieger":155},"type":79,"target":5677,"targetName":"Sailor Leader"},
		"127334.0":{"grid":5336,"name":"Sylvana_1-Skills","order":12,"time":25000,"skills":{"4":3,"4":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedSwordsman":10,"MountedMarksman":185},"type":57,"target":5874,"targetName":"Sailor Camp (hard)"},
		"536169.0":{"grid":5201,"name":"RG_2_Skills (Resolute General) ","order":11,"time":25000,"skills":{"4":3,"4":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":85,"Besieger":45},"type":79,"target":5601,"targetName":"Sailor Camp (easy)"}},
	"18": {
		"524888.0":{"grid":5471,"name":"RG_1_Skills (Resolute General) ","order":11,"time":1000,"skills":{"4":3,"4":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":85,"ArmoredMarksman":35,"MountedMarksman":95},"type":79,"target":5603,"targetName":"Sailor Leader"},
		"536169.0":{"grid":5201,"name":"RG_2_Skills (Resolute General) ","order":11,"time":1000,"skills":{"4":3,"4":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":50,"MountedMarksman":165},"type":79,"target":5111,"targetName":"Sailor Camp (hard)"},
		"389191.0":{"grid":5401,"name":"OGG_1-Skills (Older Gemini General) ","order":8,"time":40000,"skills":{"4":3,"4":3,"8":2,"9":3,"11":3,"12":3,"14":3,"19":1},"army":{"MountedSwordsman":60,"MountedMarksman":170,"Besieger":65},"type":47,"target":5113,"targetName":"Sailor Leader"}},
	"19": {
		"127334.0":{"grid":4227,"name":"Sylvana_1-Skills","order":2,"time":1000,"skills":{"4":3,"4":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedMarksman":150},"type":57,"target":4168,"targetName":"Sailor Camp (easy)"},
		"536169.0":{"grid":1372,"name":"RG_2_Skills (Resolute General) ","order":3,"time":1000,"skills":{"4":3,"4":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":25,"MountedMarksman":190},"type":79,"target":2188,"targetName":"Sailor Leader"},
		"294792.0":{"grid":4293,"name":"Sylvana_2-Skills","order":13,"time":25000,"skills":{"4":3,"4":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedSwordsman":20,"Knight":175},"type":57,"target":3420,"targetName":"Sailor Camp (medium)"},
		"524888.0":{"grid":4430,"name":"RG_1_Skills (Resolute General) ","order":11,"time":25000,"skills":{"4":3,"4":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":40,"MountedMarksman":175},"type":79,"target":3557,"targetName":"Sailor Leader"}},
	"20": {
		"262.0":{"grid":1307,"name":"General 1","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":135},"type":0,"target":972,"targetName":"Sailor Camp (hard)"},
		"127334.0":{"grid":3784,"name":"Sylvana_1-Skills","order":10,"time":1000,"skills":{"4":3,"4":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedSwordsman":3,"MountedMarksman":192},"type":57,"target":2555,"targetName":"Besieged building"},
		"536169.0":{"grid":1372,"name":"RG_2_Skills (Resolute General) ","order":1,"time":7000,"skills":{"4":3,"4":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":25,"MountedMarksman":165,"Besieger":25},"type":79,"target":703,"targetName":"Sailor Leader"},
		"524888.0":{"grid":4058,"name":"RG_1_Skills (Resolute General) ","order":11,"time":10000,"skills":{"4":3,"4":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":55,"ArmoredMarksman":160},"type":79,"target":2213,"targetName":"Besieged building"}},
	"21": {
		"536169.0":{"grid":3784,"name":"RG_1_Skills (Resolute General) ","order":11,"time":1000,"skills":{"4":3,"4":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":40,"MountedMarksman":85,"Besieger":90},"type":79,"target":2220,"targetName":"Sailor Camp (easy)"},
		"524888.0":{"grid":4058,"name":"RG_1_Skills (Resolute General) ","order":11,"time":1000,"skills":{"4":3,"4":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":30,"MountedMarksman":185},"type":79,"target":1672,"targetName":"Sailor Camp (hard)"}},
	"22": {
		"483087.0":{"grid":3784,"name":"YGG_2_1UP (Younger Gemini General) ","order":0,"time":1000,"skills":{"4":3,"4":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":1},"type":50,"target":920,"targetName":"Sailor Camp (easy)"},
		"524888.0":{"grid":4058,"name":"RG_1_Skills (Resolute General) ","order":1,"time":5000,"skills":{"4":3,"4":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":16,"MountedMarksman":199},"type":79,"target":920,"targetName":"Sailor Camp (easy)"}},
	"23": {"389191.0":{"grid":3921,"name":"OGG_1-Skills (Older Gemini General) ","order":8,"time":1000,"skills":{"4":3,"4":3,"8":2,"9":3,"11":3,"12":3,"14":3,"19":1},"army":{"Knight":40,"ArmoredMarksman":40,"MountedMarksman":215},"type":47,"target":990,"targetName":"Sailor Leader"}},
	"24": {"127334.0":{"grid":4058,"name":"Sylvana_1-Skills","order":12,"time":1000,"skills":{"4":3,"4":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedSwordsman":50,"MountedMarksman":145},"type":57,"target":1666,"targetName":"Besieged palace"}}
}

var RoaringBull_A = {
	"01": {"389488.0":{"grid":820,"name":"YGG_1_1UP (Younger Gemini General) ","order":3,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"EliteSoldier":1},"type":50,"target":1711,"targetName":"Raiders Camp (hard)"}},
	"02": {"483087.0":{"grid":1300,"name":"YGG_2_1UP (Younger Gemini General) ","order":3,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":80},"type":50,"target":4452,"targetName":"Raiders Camp (hard)"}},
	"03": {"262.0":{"grid":1437,"name":"General 1 (General)","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"EliteSoldier":159},"type":0,"target":4319,"targetName":"Witch Tower"},
		"6365.0":{"grid":1025,"name":"General 2 (General)","order":1,"time":4000,"skills":{"6":3,"11":3,"14":2},"army":{"Recruit":1},"type":0,"target":4049,"targetName":"Raiders Camp (hard)"},
		"389488.0":{"grid":820,"name":"YGG_1_1UP (Younger Gemini General)","order":3,"time":4000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":80},"type":50,"target":4319,"targetName":"Witch Tower"}},
	"04": {"483087.0":{"grid":3979,"name":"YGG_2_1UP (Younger Gemini General)","order":1,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":105},"type":50,"target":5279,"targetName":"Dark Cult Camp (hard)"}},
	"05": {"389488.0":{"grid":4186,"name":"YGG_1_1UP (Younger Gemini General)","order":2,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":85},"type":50,"target":5283,"targetName":"Dark Cult Camp (hard)"}},
	"06": {"262.0":{"grid":4458,"name":"General 1 (General)","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"Recruit":1},"type":0,"target":5896,"targetName":"Dark Cult Camp (hard)"},
		"483087.0":{"grid":3979,"name":"YGG_2_1UP (Younger Gemini General)","order":2,"time":4000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":100},"type":50,"target":5553,"targetName":"Witch Tower"}},
	"07": {"589.0":{"grid":7051,"name":"General 3 (General)","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"Recruit":1},"type":0,"target":6854,"targetName":"Dark Cult Camp (hard)"},
		"483087.0":{"grid":6641,"name":"YGG_2_1UP (Younger Gemini General)","order":2,"time":4000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":145},"type":50,"target":7129,"targetName":"Witch Tower"}},
}

var SeaSnake = {
	"01": {"389488.0":{"grid":8696,"name":"YGG_1_1UP(Younger Gemini General)","order":19,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":80},"type":50,"target":8354,"targetName":"Sailor Camp (hard)"}},
	"02": {"524888.0":{"grid":8493,"name":"RG_1_Skills(Resolute General)","order":15,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":15,"MountedMarksman":200},"type":79,"target":8354,"targetName":"Sailor Camp (hard)"}},
	"03": {"294792.0":{"grid":8084,"name":"Sylvana_2-Skills(General Sylvana)","order":19,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedMarksman":195},"type":57,"target":8014,"targetName":"Sailor Camp (easy)"}},
	"04": {"294792.0":{"grid":8084,"name":"Sylvana_2-Skills(General Sylvana)","order":25,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedSwordsman":55,"MountedMarksman":140},"type":57,"target":7873,"targetName":"Sailor Camp (hard)"}},
	"05": {"389488.0":{"grid":8696,"name":"YGG_1_1UP(Younger Gemini General)","order":26,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":1},"type":50,"target":8623,"targetName":"Sailor Camp (easy)"}},
	"06": {"524888.0":{"grid":8493,"name":"RG_1_Skills(Resolute General)","order":22,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":25,"MountedMarksman":190},"type":79,"target":8623,"targetName":"Sailor Camp (easy)"}},
	"07": {"536169.0":{"grid":8562,"name":"RG_1_Skills(Resolute General)","order":22,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":160,"Besieger":55},"type":79,"target":8890,"targetName":"Sailor Camp (hard)"}},
	"08": {"524888.0":{"grid":8493,"name":"RG_2_Skills(Resolute General)","order":22,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":45,"Besieger":170},"type":79,"target":8614,"targetName":"Sailor Camp (easy)"}},
	"09": {"483087.0":{"grid":8153,"name":"YGG_2_1UP(Younger Gemini General)","order":26,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":120},"type":50,"target":8476,"targetName":"Sailor Leader"}},
	"10": {"389191.0":{"grid":8288,"name":"OGG_1-Skills(Older Gemini General)","order":15,"time":1000,"skills":{"2":3,"3":3,"8":2,"9":3,"11":3,"12":3,"14":3,"19":1},"army":{"Swordsman":15,"ArmoredMarksman":35,"MountedMarksman":245},"type":47,"target":8476,"targetName":"Sailor Leader"}},
	"11": {"294792.0":{"grid":8084,"name":"Sylvana_2-Skills(General Sylvana)","order":24,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedMarksman":195},"type":57,"target":7729,"targetName":"Sailor Camp (easy)"}},
	"12": {"483087.0":{"grid":8153,"name":"YGG_2_1UP(Younger Gemini General)","order":26,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":70},"type":50,"target":7049,"targetName":"Sailor Camp (medium)"}},
	"13": {"524888.0":{"grid":8493,"name":"RG_1_Skills(Resolute General)","order":22,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":25,"MountedMarksman":190},"type":79,"target":7049,"targetName":"Sailor Camp (medium)"}},
	"14": {
		"262.0":{"grid":8084,"name":"General 1(General)","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":200},"type":0,"target":6507,"targetName":"Sailor Camp (hard)"},
		"389191.0":{"grid":7543,"name":"OGG_1-Skills(Older Gemini General)","order":1,"time":4000,"skills":{"2":3,"3":3,"8":2,"9":3,"11":3,"12":3,"14":3,"19":1},"army":{"Swordsman":10,"ArmoredMarksman":200,"MountedMarksman":85},"type":47,"target":6233,"targetName":"Sailor Leader"},
		"536169.0":{"grid":7067,"name":"RG_2_Skills(Resolute General)","order":2,"time":4000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":80,"MountedMarksman":50,"Besieger":85},"type":79,"target":6233,"targetName":"Sailor Leader"}},
	"15": {"536169.0":{"grid":6568,"name":"RG_2_skills(Resolute General)","order":18,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":65,"MountedMarksman":125,"Besieger":25},"type":79,"target":5686,"targetName":"Sailor Camp (easy)"}},
	"16": {"524888.0":{"grid":6705,"name":"RG_1_Skills(Resolute General)","order":19,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":50,"Besieger":165},"type":79,"target":5485,"targetName":"Sailor Camp (medium)"}},
	"17": {"536169.0":{"grid":6568,"name":"RG_2_skills(Resolute General)","order":18,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":20,"MountedMarksman":175,"Besieger":20},"type":79,"target":6311,"targetName":"Sailor Camp (hard)"}},
	"18": {"294792.0":{"grid":6638,"name":"Sylvana_2-Skills(General Sylvana)","order":9,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedSwordsman":40,"MountedMarksman":155},"type":57,"target":6921,"targetName":"Sailor Camp (easy)"}},
	"19": {"389191.0":{"grid":6503,"name":"OGG_1-Skills(Older Gemini General)","order":11,"time":1000,"skills":{"2":3,"3":3,"8":2,"9":3,"11":3,"12":3,"14":3,"19":1},"army":{"Swordsman":45,"ArmoredMarksman":165,"MountedMarksman":85},"type":47,"target":7059,"targetName":"Sailor Leader"}},
	"20": {"127334.0":{"grid":3814,"name":"Sylvana_1-Skills(General Sylvana)","order":6,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedSwordsman":30,"MountedMarksman":165},"type":57,"target":3952,"targetName":"Sailor Camp (easy)"}},
	"21": {"524888.0":{"grid":3201,"name":"RG_1_Skills(Resolute General)","order":6,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":25,"MountedMarksman":190},"type":79,"target":3751,"targetName":"Sailor Camp (hard)"}},
	"22": {"536169.0":{"grid":3066,"name":"RG_2_skills(Resolute General)","order":6,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":170,"MountedMarksman":45},"type":79,"target":3413,"targetName":"Sailor Camp (medium)"}},
	"23": {"524888.0":{"grid":3201,"name":"RG_1_Skills(Resolute General)","order":8,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":60,"Knight":25,"MountedMarksman":130},"type":79,"target":3207,"targetName":"Sailor Leader"}},
	"24": {"536169.0":{"grid":3066,"name":"RG_2_skills(Resolute General)","order":18,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":150,"Besieger":65},"type":79,"target":2939,"targetName":"Sailor Camp (medium)"}},
	"25": {"127334.0":{"grid":3814,"name":"Sylvana_1-Skills(General Sylvana)","order":19,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedMarksman":195},"type":57,"target":1921,"targetName":"Sailor Camp (easy)"}},
	"26": {"524888.0":{"grid":3201,"name":"RG_1_Skills(Resolute General)","order":18,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":65,"MountedMarksman":150},"type":79,"target":2059,"targetName":"Sailor Leader"}},
	// block not working
	"27": {"262.0":{"grid":3814,"name":"General 1(General)","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":76,"MountedMarksman":124},"type":0,"target":1109,"targetName":"Sailor Camp (easy)"},"536169.0":{"grid":3066,"name":"RG_2_skills(Resolute General)","order":1,"time":4000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":70,"ArmoredMarksman":30,"MountedMarksman":115},"type":79,"target":703,"targetName":"Sailor Leader"}},
	"28": {"524888.0":{"grid":703,"name":"RG_1_Skills(Resolute General)","order":17,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":25,"MountedMarksman":190},"type":79,"target":1182,"targetName":"Sailor Camp (hard)"}},
	"29": {"127334.0":{"grid":1109,"name":"Sylvana_1-Skills(General Sylvana)","order":19,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedMarksman":195},"type":57,"target":438,"targetName":"Sailor Camp (easy)"}},
	"30": {"495320.0":{"grid":1922,"name":"YGG_3_1UP(Younger Gemini General)","order":22,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Swordsman":150},"type":50,"target":1723,"targetName":"Sailor Camp (medium)"}},
	"31": {"524888.0":{"grid":703,"name":"RG_1_Skills(Resolute General)","order":16,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":20,"MountedMarksman":195},"type":79,"target":1723,"targetName":"Sailor Camp (medium)"}},
	"32": {"536169.0":{"grid":1988,"name":"RG_2_skills(Resolute General)","order":17,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":75,"MountedMarksman":140},"type":79,"target":2809,"targetName":"Sailor Camp (medium)"}},
	"33": {"524888.0":{"grid":703,"name":"RG_1_Skills(Resolute General)","order":17,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":95,"ArmoredMarksman":35,"MountedMarksman":85},"type":79,"target":2606,"targetName":"Sailor Leader"}},
	"34": {"524888.0":{"grid":703,"name":"RG_1_Skills(Resolute General)","order":17,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":85,"MountedMarksman":70,"Besieger":60},"type":79,"target":4508,"targetName":"Sailor Leader"}},
	"35": {"6365.0":{"grid":1244,"name":"General 1(General)","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":164,"ArmoredMarksman":36},"type":0,"target":579,"targetName":"Sailor Camp (medium)"},"389191.0":{"grid":1988,"name":"OGG_1-Skills(Older Gemini General)","order":1,"time":4000,"skills":{"2":3,"3":3,"8":2,"9":3,"11":3,"12":3,"14":3,"19":1},"army":{"Swordsman":35,"ArmoredMarksman":55,"MountedMarksman":205},"type":47,"target":307,"targetName":"Sailor Leader"}},
	"36": {"524888.0":{"grid":4509,"name":"RG_1_Skills(Resolute General)","order":17,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":40,"MountedMarksman":30,"Besieger":145},"type":79,"target":4511,"targetName":"Sailor Camp (medium)"}},
	"37": {"536169.0":{"grid":4712,"name":"RG_2_skills(Resolute General)","order":18,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":180,"Besieger":35},"type":79,"target":5671,"targetName":"Sailor Camp (hard)"}},
	"38": {"524888.0":{"grid":4509,"name":"RG_1_Skills(Resolute General)","order":17,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":35,"ArmoredMarksman":15,"MountedMarksman":165},"type":79,"target":6006,"targetName":"Sailor Camp (medium)"}},
	"39": {"389191.0":{"grid":4438,"name":"OGG_1-Skills(Older Gemini General)","order":13,"time":1000,"skills":{"2":3,"3":3,"8":2,"9":3,"11":3,"12":3,"14":3,"19":1},"army":{"Swordsman":60,"ArmoredMarksman":85,"MountedMarksman":150},"type":47,"target":5733,"targetName":"Sailor Leader"}},
	"40": {"536169.0":{"grid":4712,"name":"RG_2_skills(Resolute General)","order":17,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":55,"ArmoredMarksman":160},"type":79,"target":5477,"targetName":"Sailor Leader"}},
	"41": {"524888.0":{"grid":4509,"name":"RG_1_Skills(Resolute General)","order":16,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":35,"MountedMarksman":180},"type":79,"target":4798,"targetName":"Sailor Camp (medium)"}},
	"42": {"536169.0":{"grid":4712,"name":"RG_2_skills(Resolute General)","order":17,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":55,"ArmoredMarksman":45,"MountedMarksman":115},"type":79,"target":3372,"targetName":"Sailor Camp (hard)"}},
	"43": {"127334.0":{"grid":4575,"name":"Sylvana_1-Skills(General Sylvana)","order":9,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedMarksman":195},"type":57,"target":2759,"targetName":"Sailor Camp (hard)"}},
	"44": {"524888.0":{"grid":4509,"name":"RG_1_Skills(Resolute General)","order":13,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":100,"Knight":15,"ArmoredMarksman":40,"MountedMarksman":60},"type":79,"target":3234,"targetName":"Bubbling Cave Lake"}},
	"45": {"536169.0":{"grid":2759,"name":"RG_2_skills(Resolute General)","order":5,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":35,"ArmoredMarksman":70,"MountedMarksman":110},"type":79,"target":857,"targetName":"Sailor Camp (easy)"}},
	"46": {"524888.0":{"grid":2963,"name":"RG_1_Skills(Resolute General)","order":9,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":150,"Besieger":65},"type":79,"target":584,"targetName":"Sailor Leader"}},
	"47": {"536169.0":{"grid":2759,"name":"RG_2_skills(Resolute General)","order":16,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":50,"ArmoredMarksman":50,"MountedMarksman":115},"type":79,"target":1272,"targetName":"Sailor Camp (easy)"}},
	"48": {"524888.0":{"grid":2963,"name":"RG_1_Skills(Resolute General)","order":15,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":35,"ArmoredMarksman":85,"MountedMarksman":95},"type":79,"target":1479,"targetName":"Sailor Camp (medium)"}},
	"49": {"536169.0":{"grid":2759,"name":"RG_2_skills(Resolute General)","order":17,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":20,"ArmoredMarksman":155,"MountedMarksman":40},"type":79,"target":1005,"targetName":"Sailor Camp (hard)"}},
	"50": {"524888.0":{"grid":2963,"name":"RG_1_Skills(Resolute General)","order":17,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":60,"ArmoredMarksman":120,"MountedMarksman":35},"type":79,"target":799,"targetName":"Sailor Leader"}},
	"51": {"127334.0":{"grid":1277,"name":"Sylvana_1-Skills(General Sylvana)","order":17,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedSwordsman":30,"MountedMarksman":165},"type":57,"target":1758,"targetName":"Sailor Camp (hard)"}},
	"52": {"6365.0":{"grid":1482,"name":"General 1(General)","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":150},"type":0,"target":1488,"targetName":"Sailor Camp (easy)"},
		"536169.0":{"grid":1411,"name":"RG_2_skills(Resolute General)","order":1,"time":4000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":50,"MountedMarksman":165},"type":79,"target":1763,"targetName":"Sailor Leader"}}
}

var OneStepAhead = {
	"01": {"127334.0":{"grid":4019,"name":"Sylvana_1-Skills(General Sylvana)","order":15,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedMarksman":195},"type":57,"target":4080,"targetName":"Sailor Camp (easy)"}},
	"02": {"524888.0":{"grid":3902,"name":"RG_1_Skills(Resolute General)","order":27,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":215},"type":79,"target":4737,"targetName":"Sailor Camp (easy)"}},
	"03": {"536169.0":{"grid":3724,"name":"RG_2_skills(Resolute General)","order":29,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":40,"MountedMarksman":150,"Besieger":25},"type":79,"target":3615,"targetName":"Sailor Camp (medium)"}},
	"04": {"127334.0":{"grid":4019,"name":"Sylvana_1-Skills(General Sylvana)","order":31,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedMarksman":195},"type":57,"target":3202,"targetName":"Sailor Camp (medium)"}},
	"05": {"294792.0":{"grid":3841,"name":"Sylvana_2-Skills(General Sylvana)","order":33,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedMarksman":195},"type":57,"target":3318,"targetName":"Sailor Camp (easy)"}},
	"06": {"524888.0":{"grid":3902,"name":"RG_1_Skills(Resolute General)","order":28,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":90,"ArmoredMarksman":125},"type":79,"target":2556,"targetName":"Sailor Leader"}},
	"07": {"536169.0":{"grid":3724,"name":"RG_2_skills(Resolute General)","order":28,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":80,"MountedMarksman":100,"Besieger":35},"type":79,"target":5269,"targetName":"Sailor Camp (easy)"}},
	"08": {"536169.0":{"grid":3724,"name":"RG_2_skills(Resolute General)","order":28,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":25,"MountedMarksman":190},"type":79,"target":5810,"targetName":"Sailor Camp (easy)"}},
	"09": {"524888.0":{"grid":3902,"name":"RG_1_Skills(Resolute General)","order":28,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":45,"ArmoredMarksman":40,"MountedMarksman":130},"type":79,"target":4279,"targetName":"Sailor Camp (medium)"}},
	"10": {"389191.0":{"grid":3548,"name":"OGG_1-Skills(Older Gemini General)","order":25,"time":1000,"skills":{"2":3,"3":3,"8":2,"9":3,"11":3,"12":3,"14":3,"19":1},"army":{"Swordsman":40,"MountedMarksman":240,"Besieger":15},"type":47,"target":4215,"targetName":"Sailor Leader"}},
	"11": {"536169.0":{"grid":4457,"name":"RG_2_skills(Resolute General)","order":28,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":50,"ArmoredMarksman":165},"type":79,"target":5172,"targetName":"Sailor Camp (medium)"}},
	"12": {"127334.0":{"grid":4574,"name":"Sylvana_1-Skills(General Sylvana)","order":31,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedMarksman":195},"type":57,"target":5001,"targetName":"Sailor Camp (medium)"}},
	"13": {"524888.0":{"grid":4335,"name":"RG_1_Skills(Resolute General)","order":28,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":130,"Besieger":85},"type":79,"target":4414,"targetName":"Sailor Camp (hard)"}},
	"14": {"389191.0":{"grid":4397,"name":"OGG_1-Skills(Older Gemini General)","order":25,"time":1000,"skills":{"2":3,"3":3,"8":2,"9":3,"11":3,"12":3,"14":3,"19":1},"army":{"Swordsman":85,"ArmoredMarksman":100,"MountedMarksman":110},"type":47,"target":4228,"targetName":"Sailor Leader"}},
	"15": {"294792.0":{"grid":4751,"name":"Sylvana_2-Skills(General Sylvana)","order":32,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedMarksman":195},"type":57,"target":3394,"targetName":"Sailor Camp (easy)"}},
	"16": {"127334.0":{"grid":4574,"name":"Sylvana_1-Skills(General Sylvana)","order":31,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedMarksman":195},"type":57,"target":2684,"targetName":"Sailor Camp (medium)"}},
	"17": {"536169.0":{"grid":4457,"name":"RG_2_skills(Resolute General)","order":29,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":40,"ArmoredMarksman":70,"MountedMarksman":105},"type":79,"target":3034,"targetName":"Sailor Camp (medium)"}},
	"18": {"294792.0":{"grid":4751,"name":"Sylvana_2-Skills(General Sylvana)","order":31,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedSwordsman":25,"MountedMarksman":170},"type":57,"target":1968,"targetName":"Sailor Camp (hard)"}},
	"19": {"524888.0":{"grid":4335,"name":"RG_1_Skills(Resolute General)","order":28,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":55,"ArmoredMarksman":45,"MountedMarksman":115},"type":79,"target":2327,"targetName":"Sailor Leader"}},
	"20": {"389191.0":{"grid":4397,"name":"OGG_1-Skills(Older Gemini General)","order":25,"time":1000,"skills":{"2":3,"3":3,"8":2,"9":3,"11":3,"12":3,"14":3,"19":1},"army":{"Swordsman":10,"ArmoredMarksman":50,"MountedMarksman":235},"type":47,"target":1802,"targetName":"Treasure Frigate"}},
};

var Outlaws_NoLoss_A = {
	"01": {"483087.0":{"grid":4174,"name":"YGG_2_1UP (Younger Gemini General)","order":2,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":1},"type":50,"target":2395,"targetName":"Bandit Leader"}},
	"02": {"389488.0":{"grid":4864,"name":"YGG_1_1UP (Younger Gemini General)","order":1,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":1},"type":50,"target":4403,"targetName":"Bandit Leader"}},
	"03": {"495320.0":{"grid":4111,"name":"YGG_3_1UP (Younger Gemini General)","order":1,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":1},"type":50,"target":2956,"targetName":"Bandit Camp (medium)"},"527488.0":{"grid":4176,"name":"YGG_4_1UP (Younger Gemini General)","order":2,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":1},"type":50,"target":2956,"targetName":"Bandit Camp (medium)"}},
	"04": {"495320.0":{"grid":4111,"name":"YGG_3_1UP (Younger Gemini General)","order":1,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":1},"type":50,"target":3162,"targetName":"Bandit Camp (medium)"}},
	"05": {"527488.0":{"grid":4176,"name":"YGG_4_1UP (Younger Gemini General)","order":1,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":1},"type":50,"target":3296,"targetName":"Bandit Camp (medium)"}},
	"06": {"495320.0":{"grid":4111,"name":"YGG_3_1UP (Younger Gemini General)","order":5,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":1},"type":50,"target":3296,"targetName":"Bandit Camp (medium)"}},
	"07": {"389488.0":{"grid":4131,"name":"YGG_1_1UP (Younger Gemini General)","order":0,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":1},"type":50,"target":935,"targetName":"Bandit Leader"}},
	"08": {"527488.0":{"grid":4268,"name":"YGG_4_1UP (Younger Gemini General)","order":2,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":1},"type":50,"target":935,"targetName":"Bandit Leader"}},
	"09": {"483087.0":{"grid":2258,"name":"YGG_2_1UP (Younger Gemini General)","order":0,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":1},"type":50,"target":1302,"targetName":"Bandit Leader"}},
	"10": {"495320.0":{"grid":4197,"name":"YGG_3_1UP (Younger Gemini General)","order":0,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":1},"type":50,"target":935,"targetName":"Bandit Leader"}},
	"11": {
			"262.0":{"grid":4041,"name":"General 1","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"Soldier":28,"Cavalry":162},"type":0,"target":1600,"targetName":"Bandit Camp (medium)"},
			"6365.0":{"grid":4446,"name":"General 2","order":1,"time":4000,"skills":{"6":3,"11":3,"14":2},"army":{"Soldier":15,"Cavalry":160},"type":0,"target":1398,"targetName":"Bandit Camp (medium)"},
			"589.0":{"grid":4786,"name":"General 3","order":2,"time":4000,"skills":{"6":3,"11":3,"14":2},"army":{"Recruit":90,"Soldier":90},"type":0,"target":1395,"targetName":"Bandit Camp (medium)"},
			"127334.0":{"grid":5198,"name":"Sylvana_1","order":4,"time":4000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"Crossbowman":195},"type":57,"target":1328,"targetName":"Bandit Leader"}}
};

var Outlaws_NoLoss_B = {
	"01": {"483087.0":{"grid":4174,"name":"YGG_2_1UP (Younger Gemini General)","order":2,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":1},"type":50,"target":2395,"targetName":"Bandit Leader"}},
	"02": {"389488.0":{"grid":4864,"name":"YGG_1_1UP (Younger Gemini General)","order":1,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":1},"type":50,"target":4403,"targetName":"Bandit Leader"}},
	"03": {"495320.0":{"grid":4111,"name":"YGG_3_1UP (Younger Gemini General)","order":1,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":1},"type":50,"target":2956,"targetName":"Bandit Camp (medium)"},"527488.0":{"grid":4176,"name":"YGG_4_1UP (Younger Gemini General)","order":2,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":1},"type":50,"target":2956,"targetName":"Bandit Camp (medium)"}},
	"04": {"495320.0":{"grid":4111,"name":"YGG_3_1UP (Younger Gemini General)","order":1,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":1},"type":50,"target":3162,"targetName":"Bandit Camp (medium)"}},
	"05": {"527488.0":{"grid":4176,"name":"YGG_4_1UP (Younger Gemini General)","order":1,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":1},"type":50,"target":3296,"targetName":"Bandit Camp (medium)"}},
	"06": {"495320.0":{"grid":4111,"name":"YGG_3_1UP (Younger Gemini General)","order":5,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":1},"type":50,"target":3296,"targetName":"Bandit Camp (medium)"}},
	"07": {"389488.0":{"grid":4131,"name":"YGG_1_1UP (Younger Gemini General)","order":0,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":1},"type":50,"target":935,"targetName":"Bandit Leader"}},
	"08": {"527488.0":{"grid":4268,"name":"YGG_4_1UP (Younger Gemini General)","order":2,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":1},"type":50,"target":935,"targetName":"Bandit Leader"}},
	"09": {"483087.0":{"grid":2258,"name":"YGG_2_1UP (Younger Gemini General)","order":0,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":1},"type":50,"target":1302,"targetName":"Bandit Leader"}},
	"10": {"495320.0":{"grid":4197,"name":"YGG_3_1UP (Younger Gemini General)","order":0,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":1},"type":50,"target":935,"targetName":"Bandit Leader"}},
	"11": {
		"6878.0":{"grid":4041,"name":"General 4","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"Soldier":28,"Cavalry":172},"type":0,"target":1600,"targetName":"Bandit Camp (medium)"},
		"7155.0":{"grid":4446,"name":"General 5","order":1,"time":4000,"skills":{"6":3,"11":3,"14":2},"army":{"Soldier":15,"Cavalry":185},"type":0,"target":1398,"targetName":"Bandit Camp (medium)"},
		"39780.0":{"grid":4786,"name":"General 6","order":2,"time":4000,"skills":{"6":3,"11":3,"14":2},"army":{"Recruit":110,"Soldier":90},"type":0,"target":1395,"targetName":"Bandit Camp (medium)"},
		"127334.0":{"grid":5198,"name":"Sylvana_1-Skills","order":4,"time":4000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"Crossbowman":195},"type":57,"target":1328,"targetName":"Bandit Leader"}}
};

var BonabertiBuisness_A = {
	"01": {"389488.0":{"grid":4771,"name":"YGG_1_1UP (Younger Gemini General)","order":0,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":155},"type":50,"target":3821,"targetName":"Bandit Camp (medium)"},
		"524888.0":{"grid":4701,"name":"RG_1_Skills (Resolute General)","order":1,"time":8000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":45,"MountedMarksman":140,"Besieger":30},"type":79,"target":3821,"targetName":"Bandit Camp (medium)"},
		"483087.0":{"grid":4908,"name":"YGG_2_1UP (Younger Gemini General)","order":13,"time":40000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":130},"type":50,"target":3687,"targetName":"Bandit Camp (medium)"},
		"127334.0":{"grid":4973,"name":"Sylvana_1-Skills (General Sylvana)","order":14,"time":4000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedMarksman":195},"type":57,"target":3687,"targetName":"Bandit Camp (medium)"},
		"495320.0":{"grid":5110,"name":"YGG_3_1UP (Younger Gemini General)","order":14,"time":40000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":155},"type":50,"target":3824,"targetName":"Bandit Leader"},
		"294792.0":{"grid":5245,"name":"Sylvana_2-Skills (General Sylvana)","order":15,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedSwordsman":5,"MountedMarksman":190},"type":57,"target":3824,"targetName":"Bandit Leader"}},
	"02": {"389488.0":{"grid":3892,"name":"YGG_1_1UP (Younger Gemini General)","order":9,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":55},"type":50,"target":3829,"targetName":"Bandit Camp (medium)"},
		"63091.0":{"grid":3687,"name":"Loner 1_skills (Loner General)","order":10,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":2,"9":3,"11":3,"12":3,"19":1},"army":{"ArmoredMarksman":175,"MountedMarksman":70},"type":67,"target":3829,"targetName":"Bandit Camp (medium)"},
		"524888.0":{"grid":3689,"name":"RG_1_Skills (Resolute General)","order":19,"time":30000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":105,"ArmoredMarksman":110},"type":79,"target":3420,"targetName":"Bandit Camp (medium)"},
		"483087.0":{"grid":3821,"name":"YGG_2_1UP (Younger Gemini General)","order":8,"time":30000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Knight":130},"type":50,"target":3490,"targetName":"Bandit Leader"},
		"536169.0":{"grid":3956,"name":"RG_2_skills (Resolute General)","order":9,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":140,"MountedMarksman":60,"Besieger":15},"type":79,"target":3490,"targetName":"Bandit Leader"}},
	"03": {"495320.0":{"grid":3424,"name":"YGG_3_1UP (Younger Gemini General)","order":8,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":155},"type":50,"target":3019,"targetName":"Bandit Camp (medium)"},
		"127334.0":{"grid":3559,"name":"Sylvana_1-Skills (General Sylvana)","order":9,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedSwordsman":45,"MountedMarksman":150},"type":57,"target":3019,"targetName":"Bandit Camp (medium)"},
		"527488.0":{"grid":3561,"name":"YGG_4_1UP (Younger Gemini General)","order":7,"time":30000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":155},"type":50,"target":2746,"targetName":"Bandit Camp (medium)"},
		"294792.0":{"grid":3698,"name":"Sylvana_1-Skills (General Sylvana)","order":8,"time":4000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedSwordsman":50,"MountedMarksman":145},"type":57,"target":2746,"targetName":"Bandit Camp (medium)"},
		"622987.0":{"grid":3354,"name":"STF_MP (Steadfast General)","order":21,"time":30000,"skills":{"2":1,"3":3,"6":3,"8":3,"9":3,"11":3,"12":3,"14":1,"19":1},"army":{"MountedSwordsman":25,"MountedMarksman":210},"type":52,"target":2815,"targetName":"Bandit Leader"}},
	"04": {"127334.0":{"grid":2547,"name":"Sylvana_1-Skills (General Sylvana)","order":22,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedSwordsman":95,"MountedMarksman":100},"type":57,"target":1667,"targetName":"Bandit Camp (medium)"},
		"527488.0":{"grid":2410,"name":"YGG_4_1UP (Younger Gemini General)","order":8,"time":40000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":155},"type":50,"target":1462,"targetName":"Bandit Camp (medium)"},
		"524888.0":{"grid":2815,"name":"RG_1_Skills (Resolute General)","order":9,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":55,"MountedMarksman":160},"type":79,"target":1462,"targetName":"Bandit Camp (medium)"},
		"536169.0":{"grid":2273,"name":"RG_2_skills (Resolute General)","order":19,"time":40000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":110,"ArmoredMarksman":10,"MountedMarksman":95},"type":79,"target":1396,"targetName":"Bandit Leader"}},
	"05": {"524888.0":{"grid":1467,"name":"RG_1_Skills (Resolute General)","order":19,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":80,"ArmoredMarksman":75,"MountedMarksman":60},"type":79,"target":1676,"targetName":"Bandit Camp (medium)"},
		"536169.0":{"grid":1127,"name":"RG_2_skills (Resolute General)","order":20,"time":30000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":105,"ArmoredMarksman":75,"MountedMarksman":35},"type":79,"target":1405,"targetName":"Bandit Camp (medium)"},
		"1631889.0":{"grid":1330,"name":"RG_3_Skills (Resolute General)","order":19,"time":30000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":95,"ArmoredMarksman":120},"type":79,"target":1610,"targetName":"Bandit Leader"}},
	"06": {"536169.0":{"grid":2155,"name":"RG_2_skills (Resolute General) ","order":3,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":100,"ArmoredMarksman":45,"MountedMarksman":70},"type":79,"target":2229,"targetName":"Bandit Camp (medium)"},
		"63091.0":{"grid":1408,"name":"Loner 1_skills (Loner General) ","order":0,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":2,"9":3,"11":3,"12":3,"19":1},"army":{"Recruit":245},"type":67,"target":1889,"targetName":"Bandit Camp (medium)"},
		"524888.0":{"grid":1884,"name":"RG_1_Skills (Resolute General) ","order":3,"time":10000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":105,"MountedMarksman":110},"type":79,"target":1889,"targetName":"Bandit Camp (medium)"}},
	"07": {"187526.0":{"grid":1271,"name":"<b>Loner_2-Skills</b> <font size='-3'>(Loner General)</font>","order":0,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":2,"9":3,"11":3,"12":3,"19":1},"army":{"Recruit":1},"type":67,"target":2299,"targetName":"Bandit Leader"},
		"524888.0":{"grid":1884,"name": "RG_1_Skills","order":0,"time":3000,"skills":{"2":3,"3":3,"6":3,"8":2,"9":3,"11":3,"12":3,"19":1},"army":{"Recruit":1},"type":67,"target":2299,"targetName":"Bandit Leader"},
		"1631889.0":{"grid":1745,"name": "RG_3_Skills","order":0,"time":3000,"skills":{"2":3,"3":3,"6":3,"8":2,"9":3,"11":3,"12":3,"19":1},"army":{"Recruit":1},"type":67,"target":2299,"targetName":"Bandit Leader"},
		"127334.0":{"grid":1747,"name":"Sylvana_1-Skills (General Sylvana) ","order":1,"time":8000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"Recruit":1},"type":57,"target":2299,"targetName":"Bandit Leader"},
		"294792.0":{"grid":1612,"name":"Sylvana_2-Skills (General Sylvana) ","order":2,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"Recruit":1},"type":57,"target":2299,"targetName":"Bandit Leader"},
		"622987.0":{"grid":1543,"name":"STF_MP (Steadfast General) ","order":3,"time":1000,"skills":{"2":1,"3":3,"6":3,"8":3,"9":3,"11":3,"12":3,"14":1,"19":1},"army":{"Recruit":1},"type":52,"target":2299,"targetName":"Bandit Leader"},
		"536169.0":{"grid":2155,"name":"RG_2_skills (Resolute General) ","order":6,"time":10000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":115,"MountedMarksman":100},"type":79,"target":2299,"targetName":"Bandit Leader"}},
};

var TheDarkPriest_JZ_B = {
	"01": {"495320.0":{"grid":2489,"name":"YGG_3_1UP(Younger Gemini General)","order":0,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":1},"type":50,"target":1848,"targetName":"Bone Church"}},
	"02": {"527488.0":{"grid":2361,"name":"YGG_4_1UP (Younger Gemini General)","order":0,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":1},"type":50,"target":999,"targetName":"Dark Castle"}},
	"03": {"527488.0":{"grid":2361,"name":"YGG_4_1UP (Younger Gemini General)","order":0,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":1},"type":50,"target":1848,"targetName":"Bone Church"}},
	"04": {"495320.0":{"grid":2489,"name":"YGG_3_1UP (Younger Gemini General)","order":0,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"10":1,"11":3,"12":3,"14":1,"16":1},"army":{"Recruit":1},"type":50,"target":999,"targetName":"Dark Castle"}}
};


var AlladinPrincess = {
	"01": {"524888.0":{"grid":9198,"name":"RG_1_Skills (Resolute General)","order":20,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":210,"Besieger":5},"type":79,"target":8721,"targetName":"Sailor Camp (easy)"}},
	"02": {"536169.0":{"grid":9063,"name":"RG_2_skills (Resolute General)","order":20,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":70,"Besieger":145},"type":79,"target":8176,"targetName":"Sailor Camp (medium)"}},
	"03": {"524888.0":{"grid":9198,"name":"RG_1_Skills (Resolute General)","order":20,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":50,"Besieger":165},"type":79,"target":7765,"targetName":"Sailor Camp (medium)"}},
	"04": {"127334.0":{"grid":8724,"name":"Sylvana_1-Skills (General Sylvana)","order":22,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedMarksman":195},"type":57,"target":6956,"targetName":"Sailor Camp (medium)"}},
	"05": {"294792.0":{"grid":8589,"name":"Sylvana_2-Skills (General Sylvana)","order":22,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedMarksman":195},"type":57,"target":5731,"targetName":"Sailor Camp (easy)"}},
	"06": {"536169.0":{"grid":9063,"name":"RG_2_skills (Resolute General)","order":21,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":60,"MountedMarksman":120,"Besieger":35},"type":79,"target":5391,"targetName":"Sailor Leader"}},
	"07": {"389191.0":{"grid":8928,"name":"OGG_1-Skills (Older Gemini General)","order":13,"time":1000,"skills":{"2":3,"3":3,"8":2,"9":3,"11":3,"12":3,"14":3,"19":1},"army":{"Swordsman":20,"ArmoredMarksman":160,"MountedMarksman":115},"type":47,"target":6831,"targetName":"Sailor Camp (easy)"}},
	"08": {"524888.0":{"grid":9198,"name":"RG_1_Skills (Resolute General)","order":19,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":60,"MountedMarksman":75,"Besieger":80},"type":79,"target":7036,"targetName":"Sailor Leader"}},
	"09": {"524888.0":{"grid":4986,"name":"RG_1_Skills (Resolute General)","order":20,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":45,"MountedMarksman":170},"type":79,"target":4567,"targetName":"Sailor Camp (medium)"}},
	"10": {"127334.0":{"grid":5121,"name":"Sylvana_1-Skills (General Sylvana)","order":20,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedMarksman":195},"type":57,"target":3950,"targetName":"Sailor Camp (easy)"}},
	"11": {"536169.0":{"grid":4851,"name":"RG_2_skills (Resolute General)","order":21,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":50,"ArmoredMarksman":40,"MountedMarksman":125},"type":79,"target":4512,"targetName":"Sailor Camp (easy)"}},
	"12": {"524888.0":{"grid":4986,"name":"RG_1_Skills (Resolute General)","order":20,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":60,"ArmoredMarksman":90,"MountedMarksman":65},"type":79,"target":4019,"targetName":"Sailor Leader"}},
	"13": {"536169.0":{"grid":4851,"name":"RG_2_skills (Resolute General)","order":19,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":90,"ArmoredMarksman":35,"MountedMarksman":90},"type":79,"target":4240,"targetName":"Sailor Leader"}},
	"14": {"536169.0":{"grid":4851,"name":"RG_2_skills (Resolute General)","order":20,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":40,"MountedMarksman":90,"Besieger":85},"type":79,"target":3758,"targetName":"Sailor Camp (easy)"}},
	"15": {"524888.0":{"grid":4986,"name":"RG_1_Skills (Resolute General)","order":20,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":45,"ArmoredMarksman":20,"MountedMarksman":150},"type":79,"target":3209,"targetName":"Sailor Camp (hard)"}},
	"16": {"536169.0":{"grid":4851,"name":"RG_2_skills (Resolute General)","order":20,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":50,"MountedMarksman":165},"type":79,"target":2600,"targetName":"Sailor Camp (medium)"}},
	"17": {"524888.0":{"grid":4986,"name":"RG_1_Skills (Resolute General)","order":20,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":85,"Knight":5,"MountedMarksman":120,"Besieger":5},"type":79,"target":2873,"targetName":"Sailor Leader"}},
	"18": {"536169.0":{"grid":2397,"name":"RG_2_skills (Resolute General)","order":21,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":70,"MountedMarksman":145},"type":79,"target":2059,"targetName":"Sailor Camp (easy)"}},
	"19": {"524888.0":{"grid":2532,"name":"RG_1_Skills (Resolute General)","order":20,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":45,"MountedMarksman":90,"Besieger":80},"type":79,"target":1788,"targetName":"Sailor Camp (medium)"}},
	"20": {"536169.0":{"grid":2397,"name":"RG_2_skills (Resolute General)","order":20,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":195,"Besieger":20},"type":79,"target":1589,"targetName":"Sailor Camp (easy)"}},
	"21": {"524888.0":{"grid":2532,"name":"RG_1_Skills (Resolute General)","order":20,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":45,"MountedMarksman":170},"type":79,"target":1260,"targetName":"Sailor Camp (hard)"}},
	"22": {"536169.0":{"grid":2397,"name":"RG_2_skills (Resolute General)","order":21,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":85,"MountedMarksman":95,"Besieger":35},"type":79,"target":1538,"targetName":"Sailor Camp (medium)"}},
	"23": {"524888.0":{"grid":2532,"name":"RG_1_Skills (Resolute General)","order":19,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":45,"MountedMarksman":165,"Besieger":5},"type":79,"target":1339,"targetName":"Sailor Camp (easy)"}},
	"24": {"536169.0":{"grid":2397,"name":"RG_2_skills (Resolute General)","order":20,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":50,"MountedMarksman":150,"Besieger":15},"type":79,"target":1549,"targetName":"Sailor Camp (medium)"}},
	"25": {"524888.0":{"grid":2532,"name":"RG_1_Skills (Resolute General)","order":20,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":40,"ArmoredMarksman":15,"MountedMarksman":160},"type":79,"target":1551,"targetName":"Sailor Camp (easy)"}},
	"26": {"127334.0":{"grid":2667,"name":"Sylvana_1-Skills (General Sylvana)","order":20,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedMarksman":195},"type":57,"target":2362,"targetName":"Sailor Camp (medium)"}},
	"27": {"294792.0":{"grid":2802,"name":"Sylvana_2-Skills (General Sylvana)","order":21,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"MountedMarksman":195},"type":57,"target":2364,"targetName":"Sailor Camp (hard)"}},
	"28": {"63091.0":{"grid":2737,"name":"<b>Loner 1_skills</b> <font size='-3'>(Loner General)</font>","order":9,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":2,"9":3,"11":3,"12":3,"19":1},"army":{"Recruit":1},"type":67,"target":2711,"targetName":"Oasis Leader Camp"},"187526.0":{"grid":2872,"name":"<b>Loner_2-Skills</b> <font size='-3'>(Loner General)</font>","order":10,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":2,"9":3,"11":3,"12":3,"19":1},"army":{"Recruit":1},"type":67,"target":2711,"targetName":"Oasis Leader Camp"},"127334.0":{"grid":2667,"name":"<b>Sylvana_1-Skills</b> <font size='-3'>(General Sylvana)</font>","order":22,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"Recruit":1},"type":57,"target":2711,"targetName":"Oasis Leader Camp"},"294792.0":{"grid":2802,"name":"<b>Sylvana_2-Skills</b> <font size='-3'>(General Sylvana)</font>","order":23,"time":1000,"skills":{"2":3,"3":3,"6":3,"9":3,"11":3,"12":3,"14":2,"19":1},"army":{"Recruit":1},"type":57,"target":2711,"targetName":"Oasis Leader Camp"}},
	"29": {"536169.0":{"grid":2397,"name":"RG_2_skills (Resolute General)","order":19,"time":1000,"skills":{"2":3,"3":3,"6":3,"8":3,"11":3,"12":3,"14":2,"19":1},"army":{"Swordsman":100,"ArmoredMarksman":85,"MountedMarksman":30},"type":79,"target":2711,"targetName":"Oasis Leader Camp"}},
	// "30": {"buff_DYZAG":{"name":"BattleBuffBomb_random_units_limited","order":25,"time":1000,"type":"buff","skills":{},"army":{},"target":3031,"targetName":"Old palace"}},
};

function getRequiredUnits(){
	var units = {};
	for (var i in TreasureOfKnowlage_RG_SYLV_GHOST){
		for (var j in TreasureOfKnowlage_RG_SYLV_GHOST[i]){
			for (var k in TreasureOfKnowlage_RG_SYLV_GHOST[i][j].army){
				if (units[k]){
					units[k] += TreasureOfKnowlage_RG_SYLV_GHOST[i][j].army[k];
				} else {
					units[k] = TreasureOfKnowlage_RG_SYLV_GHOST[i][j].army[k];
				}
			}
		}
	}
	air.Introspector.Console.log(units);
}

function getRequiredGenerals(){
	// get distinct generals names
	var generals = [];
	for (var i in TreasureOfKnowlage_RG_SYLV_GHOST){
		for (var j in TreasureOfKnowlage_RG_SYLV_GHOST[i]){
			if (generals.indexOf(TreasureOfKnowlage_RG_SYLV_GHOST[i][j].name) == -1){
				generals.push(TreasureOfKnowlage_RG_SYLV_GHOST[i][j].name);
			}
		}
	}
	air.Introspector.Console.log(generals);
}