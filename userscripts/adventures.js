
var adventures = {
    "theBlackKnight": {
        "01": {
            "6365.0":{"grid":6408,"name":"<b>General 2</b> <font size='-3'>(General)</font>","order":1,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"EliteSoldier":83,"Cavalry":65},"type":0,"target":5734,"targetName":"Bandit Camp (easy)"},
            "589.0":{"grid":6543,"name":"<b>General 3</b> <font size='-3'>(General)</font>","order":2,"time":18000,"skills":{"6":3,"11":3,"14":2},"army":{"EliteSoldier":97},"type":0,"target":5193,"targetName":"Bandit Camp (easy)"},
            "127334.0":{"grid":7015,"name":"<b>General Sylvana</b>","order":3,"time":4000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":86,"Cannoneer":94},"type":13,"target":5193,"targetName":"Bandit Leader"}},
        "02": {
            "262.0":{"grid":5191,"name":"<b>General 1</b> <font size='-3'>(General)</font>","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"Recruit":2,"EliteSoldier":2,"Cavalry":196},"type":0,"target":4518,"targetName":"Bandit Camp (medium)"},
            "6365.0":{"grid":5595,"name":"<b>General 2</b> <font size='-3'>(General)</font>","order":1,"time":4000,"skills":{"6":3,"11":3,"14":2},"army":{"Recruit":2,"EliteSoldier":2,"Cavalry":196},"type":0,"target":4523,"targetName":"Bandit Camp (medium)"},
            "127334.0":{"grid":6064,"name":"<b>General Sylvana</b>","order":6,"time":4000,"skills":{"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":84,"Cannoneer":96},"type":13,"target":4180,"targetName":"Dark Castle"}},
        "03": {
            "589.0":{"grid":5745,"name":"<b>General 3</b> <font size='-3'>(General)</font>","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"EliteSoldier":97},"type":0,"target":5549,"targetName":"Bandit Camp (easy)"},
            "64499.0":{"grid":6897,"name":"<b>Major 1</b> <font size='-3'>(Major General)</font>","order":1,"time":4000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":121,"EliteSoldier":1,"Cannoneer":148},"type":13,"target":5139,"targetName":"Bandit Leader"}},
        "04": {
            "589.0":{"grid":5209,"name":"<b>General 3</b> <font size='-3'>(General)</font>","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"Recruit":2,"EliteSoldier":2,"Cavalry":196},"type":0,"target":4523,"targetName":"Bandit Camp (medium)"},
            "64499.0":{"grid":5620,"name":"<b>Major 1</b> <font size='-3'>(Major General)</font>","order":1,"time":4000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":132,"EliteSoldier":1,"Cannoneer":137},"type":13,"target":4180,"targetName":"Dark Castle"}},
        "05": {
            "64498.0":{"grid":4054,"name":"<b>Mayor 2</b> <font size='-3'>(Major General)</font>","order":3,"time":1000,"skills":{"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":65,"EliteSoldier":1,"Cavalry":120,"Cannoneer":84},"type":13,"target":2834,"targetName":"Bandit Camp (hard)"},
            "63091.0":{"grid":5142,"name":"Loner","order":4,"time":4000,"skills":{"3":1,"6":3,"11":3,"14":3},"army":{"Recruit":120},"type":13,"target":2295,"targetName":"Bandit Camp (hard)"},
            "64499.0":{"grid":6094,"name":"<b>Major 1</b> <font size='-3'>(Major General)</font>","order":5,"time":4000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":80,"EliteSoldier":1,"Cavalry":120,"Cannoneer":69},"type":13,"target":1822,"targetName":"Bandit Camp (hard)"}},
        "06": {
            "262.0":{"grid":3376,"name":"<b>General 1</b> <font size='-3'>(General)</font>","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"EliteSoldier":59,"Cavalry":135},"type":0,"target":1548,"targetName":"Bandit Camp (hard)"},
            "127334.0":{"grid":4054,"name":"<b>General Sylvana</b>","order":3,"time":4000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":84,"Cannoneer":96},"type":13,"target":1347,"targetName":"Dark Castle"}},
        "07": {"127334.0":{"grid":3426,"name":"<b>General Sylvana</b>","order":3,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Recruit":85,"EliteSoldier":20,"Cannoneer":75},"type":57,"target":3153,"targetName":"Bandit Leader"}},
        "08": {"127334.0":{"grid":2610,"name":"<b>General Sylvana</b>","order":3,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Recruit":65,"Cavalry":75,"Cannoneer":40},"type":57,"target":2350,"targetName":"Bandit Leader"}},
    },

    "horseBackSilvana": {
        "01": {
            "127334.0": {"name": "General Sylvana","grid": 7153, "order": 0, "time": 1000, "type": 67, "target": 6409, "targetName": "Raiders Camp (medium)", "army":{"Recruit":180}},
            "64499.0": {"name": "Mayor 1","grid": 7084, "order": 1, "time": 1000, "type": 13, "target": 7361, "targetName": "Raiders Leader", "army":{"Recruit":49,"Cannoneer":221}}
        },
        // "02": {"127334.0": {"name":"General Sylvana","grid":7153,"order":0,"time":1000,"type":67,"target":6679,"targetName":"Raiders Leader","army":{"Recruit":180}}},
        "02": {"64499.0":{"grid":7084,"name":"Mayor 1s","order":0,"time":1000,"skills":{"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":106,"Cannoneer":164},"type":13,"target":6679,"targetName":"Raiders Leader"}},
        "03": {"64499.0": {name:"Mayor 1",grid:6752,order:0,time:1000,type:13,target:6010,targetName:"Raiders Leader","army":{"Recruit":43,"EliteSoldier":200}}},
        "04": {"127334.0": {"name":"General Sylvana","grid":7776,"order":0,"time":1000,"type":67,"target":7372,"targetName":"Raiders Camp (easy)","army":{"Recruit":180}}},
        "05": {"64499.0": {"name":"Mayor 1","grid":5257,"order":0,"time":1000,"type":13,"target":4779,"targetName":"Raiders Leader","army":{"Recruit":38,"EliteSoldier":200}}},
        "06": {"127334.0": {"name":"General Sylvana","grid":7776,"order":0,"time":1000,"type":67,"target":7780,"targetName":"Raiders Leader","army":{"Recruit":180}}},
        "07": {"64499.0": {"name":"Mayor 1","grid":4098,"order":0,"time":1000,"type":13,"target":4502,"targetName":"Raiders Leader","army":{"Recruit":38,"EliteSoldier":200}}}
},

    "horseBackLoner": {
	"01": {
		"63091.0": {name: "General Loner",grid: 7153, order: 0, time: 1000, type: 67, target: 6409, targetName: "Raiders Camp (medium)","army":{"Recruit":230}},
		"64498.0": {name: "Mayor 2",grid: 7084, order: 1, time: 1000, type: 13, target: 7361, targetName: "Raiders Leader","army":{"Recruit":49,"Cannoneer":221}}},
	// "02": {"63091.0": {name:"General Loner","grid":7153,"order":0,"time":1000,"type":67,"target":6679,"targetName":"Raiders Leader","army":{"Recruit":230}}},
	"02": {"64498.0":{"grid":7084,"name":"<b>Mayor 2</b> <font size='-3'>(Major General)</font>","order":0,"time":1000,"skills":{"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":106,"Cannoneer":164},"type":13,"target":6679,"targetName":"Raiders Leader"}},
	"03": {"64498.0": {name:"Mayor 2","grid":6752,"order":0,"time":1000,"type":13,"target":6010,"targetName":"Raiders Leader","army":{"Recruit":43,"EliteSoldier":200}}},
	"04": {"63091.0": {name:"General Loner","grid":7776,"order":0,"time":1000,"type":67,"target":7372,"targetName":"Raiders Camp (easy)","army":{"Recruit":230}}},
	"05": {"64498.0": {name:"Mayor 2","grid":5257,"order":0,"time":1000,"type":13,"target":4779,"targetName":"Raiders Leader","army":{"Recruit":38,"EliteSoldier":200}}},
	"06": {"63091.0": {name:"General Loner","grid":7776,"order":0,"time":1000,"type":67,"target":7780,"targetName":"Raiders Leader","army":{"Recruit":230}}},
	"07": {"64498.0": {name:"Mayor 2","grid":4098,"order":0,"time":1000,"type":13,"target":4502,"targetName":"Raiders Leader","army":{"Recruit":38,"EliteSoldier":200}}}
},

"SurpriceAttack": {
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
},

"Woodcutter": {
	"01": {"127334.0":{"grid":6134,"name":"<b>General Sylvana</b>","order":0,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"MountedSwordsman":25,"MountedMarksman":155},"type":57,"target":7027,"targetName":"Desert Bandit Camp (medi..."}},
	"02": {"127334.0":{"grid":6134,"name":"<b>General Sylvana</b>","order":0,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"MountedSwordsman":24,"MountedMarksman":156},"type":57,"target":7369,"targetName":"Desert Bandit Leader"}},
	"03": {"127334.0":{"grid":7500,"name":"<b>General Sylvana</b>","order":2,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"MountedSwordsman":12,"Knight":46,"Besieger":122},"type":57,"target":6771,"targetName":"Desert Bandit Camp (easy)"}},
	"04": {
		"7155.0":{"grid":7440,"name":"<b>General 5</b> <font size='-3'>(General)</font>","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":200},"type":0,"target":5897,"targetName":"Desert Bandit Camp (hard)"},
		"39780.0":{"grid":7505,"name":"<b>General 6</b> <font size='-3'>(General)</font>","order":1,"time":4000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":150,"ArmoredMarksman":40},"type":0,"target":5021,"targetName":"Desert Bandit Camp (hard)"},
		"127334.0":{"grid":7500,"name":"<b>General Sylvana</b>","order":2,"time":4000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"MountedSwordsman":16,"MountedMarksman":164},"type":57,"target":5155,"targetName":"Desert Bandit Leader"}},
	"05": {"127334.0":{"grid":5491,"name":"<b>General Sylvana</b>","order":2,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Knight":180},"type":57,"target":4405,"targetName":"Desert Bandit Camp (hard)"}},
	"06": {
		"7155.0":{"grid":5087,"name":"<b>General 5</b> <font size='-3'>(General)</font>","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":150,"ArmoredMarksman":10},"type":0,"target":2093,"targetName":"Desert Bandit Camp (easy)"},
		"127334.0":{"grid":5491,"name":"<b>General Sylvana</b>","order":2,"time":4000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"MountedSwordsman":24,"MountedMarksman":156},"type":57,"target":873,"targetName":"Desert Bandit Leader"}},
	"07": {
		"7155.0":{"grid":3173,"name":"<b>General 5</b> <font size='-3'>(General)</font>","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":164,"ArmoredMarksman":36},"type":0,"target":1528,"targetName":"Desert Bandit Camp (medi..."},
		"39780.0":{"grid":4393,"name":"<b>General 6</b> <font size='-3'>(General)</font>","order":1,"time":4000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":126},"type":0,"target":2483,"targetName":"Desert Bandit Camp (medi..."},
		"127334.0":{"grid":3180,"name":"<b>General Sylvana</b>","order":2,"time":4000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"MountedSwordsman":18,"MountedMarksman":162},"type":57,"target":2485,"targetName":"Desert Bandit Leader"},
		"64499.0":{"grid":3315,"name":"<b>Major 1</b> <font size='-3'>(Major General)</font>","order":3,"time":4000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"MountedSwordsman":35,"MountedMarksman":125,"Besieger":110},"type":13,"target":1254,"targetName":"Desert Bandit Leader"}},
	"08": {"127334.0":{"grid":2746,"name":"<b>General Sylvana</b>","order":2,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"MountedSwordsman":40,"Knight":17,"Besieger":123},"type":57,"target":2674,"targetName":"Desert Bandit Camp (easy)"}},
	"09": {"64499.0":{"grid":2883,"name":"<b>Major 1</b> <font size='-3'>(Major General)</font>","order":3,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"ArmoredMarksman":40,"MountedMarksman":200},"type":13,"target":1923,"targetName":"Desert Bandit Camp (hard)"}},
	"10": {
		"7155.0":{"grid":2609,"name":"<b>General 5</b> <font size='-3'>(General)</font>","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":160,"ArmoredMarksman":40},"type":0,"target":1305,"targetName":"Desert Bandit Camp (hard)"},
		"127334.0":{"grid":2746,"name":"<b>General Sylvana</b>","order":2,"time":22000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Knight":125},"type":57,"target":964,"targetName":"Bandit Stronghold"},
		"64499.0":{"grid":2883,"name":"<b>Major 1</b> <font size='-3'>(Major General)</font>","order":3,"time":4000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Knight":90,"Besieger":180},"type":13,"target":964,"targetName":"Bandit Stronghold"}}
},

"theSiege": {
	"01": {"64499.0":{"grid":3863,"name":"<b>Major 1</b> <font size='-3'>(Major General)</font>","order":0,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Cavalry":270},"type":13,"target":4811,"targetName":"Bandit Camp (easy)"}},
	"02": {"64498.0":{"grid":3796,"name":"<b>Mayor 2</b> <font size='-3'>(Major General)</font>","order":1,"time":1000,"skills":{"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":24,"EliteSoldier":1,"Cavalry":245},"type":13,"target":4195,"targetName":"Bandit Leader"}},
	"03": {"64499.0":{"grid":3787,"name":"<b>Major 1</b> <font size='-3'>(Major General)</font>","order":0,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":10,"EliteSoldier":1,"Cavalry":259},"type":13,"target":3103,"targetName":"Bandit Camp (easy)"}},
	"04": {"149369.0":{"grid":3922,"name":"<b>Major 3</b> <font size='-3'>(Major General)</font>","order":0,"time":1000,"skills":{"3":1,"6":3,"11":3,"14":3},"army":{"Cavalry":270},"type":13,"target":3304,"targetName":"Bandit Camp (easy)"}},
	"05": {"64498.0":{"grid":4264,"name":"<b>Mayor 2</b> <font size='-3'>(Major General)</font>","order":0,"time":1000,"skills":{"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":15,"EliteSoldier":1,"Cavalry":254},"type":13,"target":3439,"targetName":"Bandit Leader"}},
	"06": {"64499.0":{"grid":3981,"name":"<b>Major 1</b> <font size='-3'>(Major General)</font>","order":0,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":4,"EliteSoldier":1,"Cavalry":265},"type":13,"target":4455,"targetName":"Bandit Camp (easy)"}},
	"07": {"149369.0":{"grid":3641,"name":"<b>Major 3</b> <font size='-3'>(Major General)</font>","order":0,"time":1000,"skills":{"3":1,"6":3,"11":3,"14":3},"army":{"Recruit":49,"EliteSoldier":1,"Cavalry":220},"type":13,"target":4588,"targetName":"Bandit Camp (easy)"}},
	"08": {"64498.0":{"grid":3506,"name":"<b>Mayor 2</b> <font size='-3'>(Major General)</font>","order":0,"time":1000,"skills":{"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":22,"EliteSoldier":1,"Cavalry":247},"type":13,"target":4584,"targetName":"Bandit Leader"}},
	"09": {"64499.0":{"grid":4379,"name":"<b>Major 1</b> <font size='-3'>(Major General)</font>","order":0,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Cavalry":270},"type":13,"target":4173,"targetName":"Watchtower"}},
	"10": {"64498.0":{"grid":4516,"name":"<b>Mayor 2</b> <font size='-3'>(Major General)</font>","order":1,"time":1000,"skills":{"3":3,"6":3,"11":3,"14":3},"army":{"Cavalry":270},"type":13,"target":4376,"targetName":"Watchtower"}},
	"11": {"149369.0":{"grid":4651,"name":"<b>Major 3</b> <font size='-3'>(Major General)</font>","order":0,"time":1000,"skills":{"3":1,"6":3,"11":3,"14":3},"army":{"Recruit":64,"EliteSoldier":1,"Cannoneer":205},"type":13,"target":6067,"targetName":"Siege Command Camp"}},
	"12": {"64499.0":{"grid":4379,"name":"<b>Major 1</b> <font size='-3'>(Major General)</font>","order":0,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":101,"EliteSoldier":1,"Cannoneer":168},"type":13,"target":4170,"targetName":"Siege Vanguard Camp"}}
},

"theSiegeP2": {
	"01": {"64499.0":{"grid":1686,"name":"<b>Major 1</b> <font size='-3'>(Major General)</font>","order":0,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Cavalry":270},"type":13,"target":1204,"targetName":"Bandit Camp (easy)"}},
	"02": {"149369.0":{"grid":1821,"name":"<b>Major 3</b> <font size='-3'>(Major General)</font>","order":0,"time":1000,"skills":{"3":1,"6":3,"11":3,"14":3},"army":{"Recruit":24,"EliteSoldier":1,"Cavalry":245},"type":13,"target":998,"targetName":"Bandit Leader"}},
	"03": {"64498.0":{"grid":998,"name":"<b>Mayor 2</b> <font size='-3'>(Major General)</font>","order":0,"time":1000,"skills":{"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":10,"EliteSoldier":1,"Cavalry":259},"type":13,"target":1471,"targetName":"Bandit Camp (easy)"}},
	"04": {"64499.0":{"grid":1067,"name":"<b>Major 1</b> <font size='-3'>(Major General)</font>","order":0,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Cavalry":270},"type":13,"target":1810,"targetName":"Bandit Camp (easy)"}},
	"05": {"149369.0":{"grid":1204,"name":"<b>Major 3</b> <font size='-3'>(Major General)</font>","order":1,"time":1000,"skills":{"3":1,"6":3,"11":3,"14":3},"army":{"Recruit":15,"EliteSoldier":1,"Cavalry":254},"type":13,"target":2221,"targetName":"Bandit Leader"}},
	"06": {"64498.0":{"grid":1947,"name":"<b>Mayor 2</b> <font size='-3'>(Major General)</font>","order":1,"time":1000,"skills":{"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":4,"EliteSoldier":1,"Cavalry":265},"type":13,"target":1737,"targetName":"Bandit Camp (easy)"}},
	"07": {"64499.0":{"grid":2151,"name":"<b>Major 1</b> <font size='-3'>(Major General)</font>","order":0,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":49,"EliteSoldier":1,"Cavalry":220},"type":13,"target":1597,"targetName":"Bandit Camp (easy)"}},
	"08": {"149369.0":{"grid":2016,"name":"<b>Major 3</b> <font size='-3'>(Major General)</font>","order":0,"time":1000,"skills":{"3":1,"6":3,"11":3,"14":3},"army":{"Recruit":22,"EliteSoldier":1,"Cavalry":247},"type":13,"target":1730,"targetName":"Bandit Leader"}},
	"09": {"64498.0":{"grid":1730,"name":"<b>Mayor 2</b> <font size='-3'>(Major General)</font>","order":1,"time":1000,"skills":{"3":3,"6":3,"11":3,"14":3},"army":{"Cavalry":270},"type":13,"target":1930,"targetName":"Watchtower"}},
	"10": {"64499.0":{"grid":1664,"name":"<b>Major 1</b> <font size='-3'>(Major General)</font>","order":0,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":101,"EliteSoldier":1,"Cannoneer":168},"type":13,"target":2267,"targetName":"Siege Vanguard Camp"}},
	"11": {"149369.0":{"grid":1597,"name":"<b>Major 3</b> <font size='-3'>(Major General)</font>","order":1,"time":1000,"skills":{"3":1,"6":3,"11":3,"14":3},"army":{"Recruit":64,"EliteSoldier":1,"Cannoneer":205},"type":13,"target":3023,"targetName":"Siege Command Camp"}}
},

"DarkPrists": {
	"01": {"64499.0":{"grid":2361,"name":"<b>Major 1</b> <font size='-3'>(Major General)</font>","order":1,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":8,"EliteSoldier":1,"Cavalry":261},"type":13,"target":2227,"targetName":"Dark Cult Camp (easy)"}},
	"02": {"127334.0":{"grid":2224,"name":"<b>General Sylvana</b>","order":0,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Recruit":180},"type":57,"target":1479,"targetName":"Dark Cult Leader"}},
	"03": {"149369.0":{"grid":2693,"name":"<b>Major 3</b> <font size='-3'>(Major General)</font>","order":1,"time":1000,"skills":{"3":1,"6":3,"11":3,"14":3},"army":{"Recruit":19,"Cannoneer":100},"type":13,"target":3161,"targetName":"Bandit Camp (easy)"}},
	"04": {"64498.0":{"grid":2489,"name":"<b>Mayor 2</b> <font size='-3'>(Major General)</font>","order":3,"time":1000,"skills":{"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":38,"Cannoneer":100},"type":13,"target":2617,"targetName":"Bandit Leader"}},
	"05": {"127334.0":{"grid":1613,"name":"<b>General Sylvana</b>","order":0,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Recruit":180},"type":57,"target":1129,"targetName":"Dark Cult Leader"}},
	"06": {"127334.0":{"grid":1613,"name":"<b>General Sylvana</b>","order":0,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Recruit":87,"Cannoneer":93},"type":57,"target":999,"targetName":"Dark Castle"}},
	"07": {"64499.0":{"grid":1996,"name":"<b>Major 1</b> <font size='-3'>(Major General)</font>","order":0,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Cavalry":270},"type":13,"target":1111,"targetName":"Dark Cult Camp (easy)"}},
	"08": {"127334.0":{"grid":2133,"name":"<b>General Sylvana</b>","order":0,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Recruit":180},"type":57,"target":1649,"targetName":"Dark Cult Camp (easy)"}},
	"09": {"127334.0":{"grid":2133,"name":"<b>General Sylvana</b>","order":0,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Recruit":51,"Cannoneer":129},"type":57,"target":1848,"targetName":"Bone Church"}}
},

"TikkiIsland": {
	"01": {"127334.0":{"grid":5063,"name":"<b>General Sylvana</b>","order":0,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Recruit":47,"Cannoneer":133},"type":57,"target":4794,"targetName":"Raiders Camp (easy)"}},
	"02": {"127334.0":{"grid":5063,"name":"<b>General Sylvana</b>","order":0,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Recruit":71,"Cannoneer":109},"type":57,"target":4389,"targetName":"Raiders Camp (easy)"}},
	"03": {"127334.0":{"grid":5063,"name":"<b>General Sylvana</b>","order":0,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Recruit":105,"Cannoneer":75},"type":57,"target":3704,"targetName":"Raiders Camp (easy)"}},
	"04": {"127334.0":{"grid":5063,"name":"<b>General Sylvana</b>","order":0,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Recruit":41,"Cannoneer":139},"type":57,"target":3431,"targetName":"Chieftain's Tent"}},
	"05": {"127334.0":{"grid":3362,"name":"<b>General Sylvana</b>","order":0,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Recruit":60,"EliteSoldier":120},"type":57,"target":2689,"targetName":"Raiders Camp (easy)"}},
	"06":{"127334.0":{"grid":3362,"name":"<b>General Sylvana</b>","order":0,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Recruit":63,"Cannoneer":117},"type":57,"target":2623,"targetName":"Raiders Leader"}}
},

"ArcticExplosion_A": {
	"01": {"127334.0":{"grid":5213,"name":"<b>General Sylvana 1</b>","order":0,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Militia":31,"Cavalry":10,"Crossbowman":139},"type":57,"target":4803,"targetName":"Nords Camp (medium)"}},
	"02": {"64499.0":{"grid":3178,"name":"<b>Major 1</b> <font size='-3'>(Major General)</font>","order":2,"time":1000,"skills":{"3":1,"6":3,"11":3,"14":3},"army":{"Militia":57,"EliteSoldier":1,"Crossbowman":212},"type":13,"target":2634,"targetName":"Nords Camp (hard)"}},
	"03": {"64498.0":{"grid":6510,"name":"<b>Major 2</b> <font size='-3'>(Major General)</font>","order":0,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Militia":56,"EliteSoldier":1,"Crossbowman":213},"type":13,"target":7256,"targetName":"Nords Camp (hard)"}},
	"04": {"64499.0":{"grid":3178,"name":"<b>Major 1</b> <font size='-3'>(Major General)</font>","order":1,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Cavalry":140,"Crossbowman":130},"type":13,"target":2288,"targetName":"Nords Camp (medium)"}},
	"05": {"64498.0":{"grid":5416,"name":"<b>Major 2</b> <font size='-3'>(Major General)</font>","order":1,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":100,"EliteSoldier":1,"Crossbowman":169},"type":13,"target":3992,"targetName":"Nords Camp (leader)"}},
	"06": {"64499.0":{"grid":6376,"name":"<b>Major 1</b> <font size='-3'>(Major General)</font>","order":2,"time":1000,"skills":{"3":1,"6":3,"11":3,"14":3},"army":{"Recruit":200},"type":13,"target":5090,"targetName":"Nords Camp (hard)"}},
	"07": {"64498.0":{"grid":6239,"name":"<b>Major 2</b> <font size='-3'>(Major General)</font>","order":1,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":57,"EliteSoldier":1,"Cavalry":30,"Crossbowman":182},"type":13,"target":5090,"targetName":"Nords Camp (hard)"}},
	"08": {"127334.0":{"grid":2549,"name":"<b>General Sylvana 1</b>","order":0,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Militia":23,"EliteSoldier":1,"Cavalry":50,"Crossbowman":106},"type":57,"target":2002,"targetName":"Nords Camp (medium)"}},
},

"ArcticExplosion_B": {
	"01": {"294792.0":{"grid":5213,"name":"<b>General Sylvana 2</b>","order":0,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Militia":31,"Cavalry":10,"Crossbowman":139},"type":57,"target":4803,"targetName":"Nords Camp (medium)"}},
	"02": {"149369.0":{"grid":3178,"name":"<b>Major 3</b> <font size='-3'>(Major General)</font>","order":2,"time":1000,"skills":{"3":1,"6":3,"11":3,"14":3},"army":{"Militia":57,"EliteSoldier":1,"Crossbowman":212},"type":13,"target":2634,"targetName":"Nords Camp (hard)"}},
	"03": {"261006.0":{"grid":6510,"name":"<b>Major 4</b> <font size='-3'>(Major General)</font>","order":0,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Militia":56,"EliteSoldier":1,"Crossbowman":213},"type":13,"target":7256,"targetName":"Nords Camp (hard)"}},
	"04": {"149369.0":{"grid":3178,"name":"<b>Major 3</b> <font size='-3'>(Major General)</font>","order":1,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Cavalry":140,"Crossbowman":130},"type":13,"target":2288,"targetName":"Nords Camp (medium)"}},
	"05": {"261006.0":{"grid":5416,"name":"<b>Major 4</b> <font size='-3'>(Major General)</font>","order":1,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":100,"EliteSoldier":1,"Crossbowman":169},"type":13,"target":3992,"targetName":"Nords Camp (leader)"}},
	"06": {"149369.0":{"grid":6376,"name":"<b>Major 3</b> <font size='-3'>(Major General)</font>","order":2,"time":1000,"skills":{"3":1,"6":3,"11":3,"14":3},"army":{"Recruit":200},"type":13,"target":5090,"targetName":"Nords Camp (hard)"}},
	"07": {"261006.0":{"grid":6239,"name":"<b>Major 4</b> <font size='-3'>(Major General)</font>","order":1,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":57,"EliteSoldier":1,"Cavalry":30,"Crossbowman":182},"type":13,"target":5090,"targetName":"Nords Camp (hard)"}},
	"08": {"294792.0":{"grid":2549,"name":"<b>General Sylvana 2</b>","order":0,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Militia":23,"EliteSoldier":1,"Cavalry":50,"Crossbowman":106},"type":57,"target":2002,"targetName":"Nords Camp (medium)"}},
},

"SecondThief": {
	"01": {"262.0":{"grid":2873,"name":"<b>General 1</b> <font size='-3'>(General)</font>","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":1},"type":0,"target":4304,"targetName":"Desert Bandit Camp (easy)"},
		"64499.0":{"grid":2601,"name":"<b>Major 1</b> <font size='-3'>(Major General)</font>","order":5,"time":4000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Knight":190,"Besieger":80},"type":13,"target":4239,"targetName":"Caravan Camp"}},
		"02": {"63091.0":{"grid":6888,"name":"<b>Loner 1</b> <font size='-3'>(Loner General)</font>","order":4,"time":1000,"skills":{"0":2,"3":3,"6":3,"8":1,"9":1,"11":3,"13":2,"14":3,"15":2,"18":1},"army":{"Bowman":220},"type":67,"target":4325,"targetName":"Desert Bandit Camp (hard)"},
		"64499.0":{"grid":7023,"name":"<b>Major 1</b> <font size='-3'>(Major General)</font>","order":6,"time":4000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"MountedSwordsman":36,"MountedMarksman":234},"type":13,"target":4325,"targetName":"Desert Bandit Camp (hard)"}},
	"03": {"127334.0":{"grid":7158,"name":"<b>General Sylvana</b>","order":3,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Knight":180},"type":57,"target":4124,"targetName":"Raiders Leader"}},
	"04": {"127334.0":{"grid":7158,"name":"<b>General Sylvana</b>","order":3,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"MountedSwordsman":20,"MountedMarksman":160},"type":57,"target":3715,"targetName":"Raiders Leader"}},
	"05": {"64499.0":{"grid":7023,"name":"<b>Major 1</b> <font size='-3'>(Major General)</font>","order":3,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"MountedMarksman":270},"type":13,"target":2348,"targetName":"Desert Bandit Camp (hard)"},
		"127334.0":{"grid":7293,"name":"<b>General Sylvana</b>","order":4,"time":2000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Knight":180},"type":57,"target":2076,"targetName":"Ancient Ruin"}},
	"06": {"6365.0":{"grid":3918,"name":"<b>General 2</b> <font size='-3'>(General)</font>","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":1},"type":0,"target":5751,"targetName":"Desert Bandit Camp (hard)"},
		"64499.0":{"grid":3646,"name":"<b>Major 1</b> <font size='-3'>(Major General)</font>","order":4,"time":4000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"MountedSwordsman":4,"MountedMarksman":66,"Besieger":200},"type":13,"target":6502,"targetName":"Caravan Camp"}},
	"07": {
		"589.0":{"grid":3848,"name":"<b>General 3</b> <font size='-3'>(General)</font>","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":170,"MountedMarksman":30},"type":0,"target":4811,"targetName":"Desert Bandit Camp (hard)"},
		"6878.0":{"grid":4120,"name":"<b>General 4</b> <font size='-3'>(General)</font>","order":1,"time":4000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":160,"ArmoredMarksman":40},"type":0,"target":5220,"targetName":"Desert Bandit Camp (hard)"},
		"127334.0":{"grid":3436,"name":"<b>General Sylvana</b>","order":2,"time":4000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"MountedSwordsman":25,"Knight":13,"Besieger":142},"type":57,"target":4950,"targetName":"Caravan Camp"}},
	"08": {"127334.0":{"grid":2143,"name":"<b>General Sylvana</b>","order":2,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Cavalry":180},"type":57,"target":2771,"targetName":"Desert Bandit Camp (hard)"},
		"64499.0":{"grid":2278,"name":"<b>Major 1</b> <font size='-3'>(Major General)</font>","order":4,"time":3000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"MountedSwordsman":23,"ArmoredMarksman":12,"MountedMarksman":235},"type":13,"target":2771,"targetName":"Desert Bandit Camp (hard)"}},
	"09": {"64498.0":{"grid":2348,"name":"<b>Mayor 2</b> <font size='-3'>(Major General)</font>","order":5,"time":1000,"skills":{"3":3,"6":3,"11":3,"14":3},"army":{"MountedSwordsman":43,"Knight":59,"Besieger":168},"type":13,"target":3179,"targetName":"Desert Bandit Camp (hard)"}},
	"10": {"64499.0":{"grid":2278,"name":"<b>Major 1</b> <font size='-3'>(Major General)</font>","order":7,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"MountedSwordsman":55,"Besieger":200},"type":13,"target":2776,"targetName":"Raiders Leader"}},
	"11": {"64498.0":{"grid":6086,"name":"<b>Mayor 2</b> <font size='-3'>(Major General)</font>","order":10,"time":1000,"skills":{"3":3,"6":3,"11":3,"14":3},"army":{"MountedSwordsman":75,"Besieger":195},"type":13,"target":6834,"targetName":"Raiders Leader"}},
	"12": {"64499.0":{"grid":2278,"name":"<b>Major 1</b> <font size='-3'>(Major General)</font>","order":7,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"MountedSwordsman":82,"MountedMarksman":188},"type":13,"target":3385,"targetName":"Oasis Leader Camp"}}
},

"TheWhirlwind_P1_A": {
	"01": {"64499.0":{"grid":7565,"name":"<b>Major 1</b> <font size='-3'>(Major General)</font>","order":1,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":43,"EliteSoldier":1,"Cavalry":226},"type":13,"target":7367,"targetName":"Bandit Camp (easy)"}},
	"02": {"64498.0":{"grid":7699,"name":"<b>Major 2</b> <font size='-3'>(Major General)</font>","order":1,"time":1000,"skills":{"3":1,"6":3,"11":3,"14":3},"army":{"Recruit":96,"Cavalry":110,"Cannoneer":64},"type":13,"target":7777,"targetName":"Bandit Camp (easy)"}},
	"03": {"127334.0":{"grid":7905,"name":"<b>Sylvana 1</b> <font size='-3'>(General Sylvana)</font>","order":2,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Recruit":59,"Cannoneer":121},"type":57,"target":7576,"targetName":"Bandit Leader"}},
	"04": {"64499.0":{"grid":7565,"name":"<b>Major 1</b> <font size='-3'>(Major General)</font>","order":1,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":182,"Cannoneer":88},"type":13,"target":7178,"targetName":"Bandit Camp (easy)"}},
	"05": {"127334.0":{"grid":7905,"name":"<b>Sylvana 1</b> <font size='-3'>(General Sylvana)</font>","order":3,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Recruit":91,"Cannoneer":89},"type":57,"target":7115,"targetName":"Bandit Camp (easy)"}},
	"06": {"64498.0":{"grid":7699,"name":"<b>Major 2</b> <font size='-3'>(Major General)</font>","order":2,"time":1000,"skills":{"3":1,"6":3,"11":3,"14":3},"army":{"Recruit":100,"Cannoneer":170},"type":13,"target":6641,"targetName":"Bandit Camp (easy)"}},
	"07": {"64499.0":{"grid":7565,"name":"<b>Major 1</b> <font size='-3'>(Major General)</font>","order":1,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Militia":64,"EliteSoldier":1,"Cavalry":130,"Cannoneer":75},"type":13,"target":6100,"targetName":"Forward Guard Leader"}},
	"08": {"64498.0":{"grid":6776,"name":"<b>Major 2</b> <font size='-3'>(Major General)</font>","order":2,"time":1000,"skills":{"3":1,"6":3,"11":3,"14":3},"army":{"Recruit":91,"EliteSoldier":1,"Cannoneer":178},"type":13,"target":5280,"targetName":"Bandit Camp (easy)"}},
	"09": {"64499.0":{"grid":6980,"name":"<b>Major 1</b> <font size='-3'>(Major General)</font>","order":1,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":107,"EliteSoldier":1,"Cannoneer":162},"type":13,"target":4533,"targetName":"Bandit Camp (easy)"}},
	"10": {"127334.0":{"grid":7045,"name":"<b>Sylvana 1</b> <font size='-3'>(General Sylvana)</font>","order":5,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Militia":90,"Cannoneer":90},"type":57,"target":4191,"targetName":"Inner Fort"}},
	"11": {"64498.0":{"grid":4391,"name":"<b>Mayor 2</b> <font size='-3'>(Major General)</font>","order":2,"time":1000,"skills":{"3":3,"6":3,"11":3,"14":3},"army":{"Cavalry":270},"type":13,"target":3975,"targetName":"Watchtower"}},
	"12": {"127334.0":{"grid":5347,"name":"<b>Sylvana 1</b> <font size='-3'>(General Sylvana)</font>","order":5,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Recruit":180},"type":57,"target":3837,"targetName":"Fortified Storehouse"}},
	"13": {"64499.0":{"grid":5482,"name":"<b>Major 1</b> <font size='-3'>(Major General)</font>","order":1,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":90,"EliteSoldier":1,"Crossbowman":179},"type":13,"target":3837,"targetName":"Fortified Storehouse"}}
},

"TheWhirlwind_P1_B": {
	"01": {"589.0":{"grid":7565,"name":"<b>Major 1</b> <font size='-3'>(Major General)</font>","order":1,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":43,"EliteSoldier":1,"Cavalry":226},"type":13,"target":7367,"targetName":"Bandit Camp (easy)"}},
	"02": {"64498.0":{"grid":7699,"name":"<b>Major 2</b> <font size='-3'>(Major General)</font>","order":1,"time":1000,"skills":{"3":1,"6":3,"11":3,"14":3},"army":{"Recruit":96,"Cavalry":110,"Cannoneer":64},"type":13,"target":7777,"targetName":"Bandit Camp (easy)"}},
	"03": {"127334.0":{"grid":7905,"name":"<b>Sylvana 1</b> <font size='-3'>(General Sylvana)</font>","order":2,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Recruit":59,"Cannoneer":121},"type":57,"target":7576,"targetName":"Bandit Leader"}},
	"04": {"589.0":{"grid":7565,"name":"<b>Major 1</b> <font size='-3'>(Major General)</font>","order":1,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":182,"Cannoneer":88},"type":13,"target":7178,"targetName":"Bandit Camp (easy)"}},
	"05": {"127334.0":{"grid":7905,"name":"<b>Sylvana 1</b> <font size='-3'>(General Sylvana)</font>","order":3,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Recruit":91,"Cannoneer":89},"type":57,"target":7115,"targetName":"Bandit Camp (easy)"}},
	"06": {"64498.0":{"grid":7699,"name":"<b>Major 2</b> <font size='-3'>(Major General)</font>","order":2,"time":1000,"skills":{"3":1,"6":3,"11":3,"14":3},"army":{"Recruit":100,"Cannoneer":170},"type":13,"target":6641,"targetName":"Bandit Camp (easy)"}},
	"07": {"589.0":{"grid":7565,"name":"<b>Major 1</b> <font size='-3'>(Major General)</font>","order":1,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Militia":64,"EliteSoldier":1,"Cavalry":130,"Cannoneer":75},"type":13,"target":6100,"targetName":"Forward Guard Leader"}},
	"08": {"64498.0":{"grid":6776,"name":"<b>Major 2</b> <font size='-3'>(Major General)</font>","order":2,"time":1000,"skills":{"3":1,"6":3,"11":3,"14":3},"army":{"Recruit":91,"EliteSoldier":1,"Cannoneer":178},"type":13,"target":5280,"targetName":"Bandit Camp (easy)"}},
	"09": {"589.0":{"grid":6980,"name":"<b>Major 1</b> <font size='-3'>(Major General)</font>","order":1,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":107,"EliteSoldier":1,"Cannoneer":162},"type":13,"target":4533,"targetName":"Bandit Camp (easy)"}},
	"10": {"127334.0":{"grid":7045,"name":"<b>Sylvana 1</b> <font size='-3'>(General Sylvana)</font>","order":5,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Militia":90,"Cannoneer":90},"type":57,"target":4191,"targetName":"Inner Fort"}},
	"11": {"64498.0":{"grid":4391,"name":"<b>Mayor 2</b> <font size='-3'>(Major General)</font>","order":2,"time":1000,"skills":{"3":3,"6":3,"11":3,"14":3},"army":{"Cavalry":270},"type":13,"target":3975,"targetName":"Watchtower"}},
	"12": {"589.0":{"grid":5347,"name":"<b>Sylvana 1</b> <font size='-3'>(General Sylvana)</font>","order":5,"time":1000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Recruit":180},"type":57,"target":3837,"targetName":"Fortified Storehouse"}},
	"13": {"589.0":{"grid":5482,"name":"<b>Major 1</b> <font size='-3'>(Major General)</font>","order":1,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"Recruit":90,"EliteSoldier":1,"Crossbowman":179},"type":13,"target":3837,"targetName":"Fortified Storehouse"}}
},

"TheWhirlwind_P2_B": {
	"01": {"149369.0":{"grid":5221,"name":"<b>Major 3</b> <font size='-3'>(Major General)</font>","order":1,"time":1000,"skills":{"3":1,"6":3,"11":3,"14":3},"army":{"Recruit":43,"EliteSoldier":1,"Cavalry":226},"type":13,"target":4880,"targetName":"Bandit Camp (easy)"}},
	"02": {"261006.0":{"grid":5223,"name":"<b>Major 4</b> <font size='-3'>(Major General)</font>","order":1,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"Recruit":96,"Cavalry":110,"Cannoneer":64},"type":13,"target":4407,"targetName":"Bandit Camp (easy)"}},
	"03": {"294792.0":{"grid":5358,"name":"<b>Sylvana 2</b> <font size='-3'>(General Sylvana)</font>","order":2,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"Recruit":59,"Cannoneer":121},"type":57,"target":4065,"targetName":"Bandit Leader"}},
	"04": {},
	"05": {},
	"06": {"294792.0":{"grid":2147,"name":"<b>Sylvana 2</b> <font size='-3'>(General Sylvana)</font>","order":5,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"Recruit":76,"Cannoneer":104},"type":57,"target":1815,"targetName":"Bandit Camp (easy)"}},
	"07": {"149369.0":{"grid":2212,"name":"<b>Major 3</b> <font size='-3'>(Major General)</font>","order":1,"time":1000,"skills":{"3":1,"6":3,"11":3,"14":3},"army":{"Militia":64,"EliteSoldier":1,"Cavalry":130,"Cannoneer":75},"type":13,"target":1742,"targetName":"Forward Guard Leader"}},
	"08": {"149369.0":{"grid":2212,"name":"<b>Major 3</b> <font size='-3'>(Major General)</font>","order":1,"time":1000,"skills":{"3":1,"6":3,"11":3,"14":3},"army":{"Recruit":91,"EliteSoldier":1,"Cannoneer":178},"type":13,"target":2888,"targetName":"Bandit Camp (easy)"}},
	"09": {"149369.0":{"grid":2212,"name":"<b>Major 3</b> <font size='-3'>(Major General)</font>","order":1,"time":1000,"skills":{"3":1,"6":3,"11":3,"14":3},"army":{"Recruit":107,"EliteSoldier":1,"Cannoneer":162},"type":13, "target": 3296,}},
	"10": {"294792.0":{"grid":2147,"name":"<b>Sylvana 2</b> <font size='-3'>(General Sylvana)</font>","order":4,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"Militia":90,"Cannoneer":90},"type":57,"target":3224,"targetName":"Inner Fort"}}
},

"TheWhirlwind_P2_A": {
	"01": {"64499.0":{"grid":5221,"name":"<b>Major 1</b> <font size='-3'>(Major General)</font>","order":1,"time":1000,"skills":{"3":1,"6":3,"11":3,"14":3},"army":{"Recruit":43,"EliteSoldier":1,"Cavalry":226},"type":13,"target":4880,"targetName":"Bandit Camp (easy)"}},
	"02": {"64498.0":{"grid":5223,"name":"<b>Major 2</b> <font size='-3'>(Major General)</font>","order":1,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"Recruit":96,"Cavalry":110,"Cannoneer":64},"type":13,"target":4407,"targetName":"Bandit Camp (easy)"}},
	"03": {"127334.0":{"grid":5358,"name":"<b>Sylvana 1</b> <font size='-3'>(General Sylvana)</font>","order":2,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"Recruit":59,"Cannoneer":121},"type":57,"target":4065,"targetName":"Bandit Leader"}},
	"04": {},
	"05": {},
	"06": {"127334.0":{"grid":2147,"name":"<b>Sylvana 1</b> <font size='-3'>(General Sylvana)</font>","order":5,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"Recruit":76,"Cannoneer":104},"type":57,"target":1815,"targetName":"Bandit Camp (easy)"}},
	"07": {"64499.0":{"grid":2212,"name":"<b>Major 1</b> <font size='-3'>(Major General)</font>","order":1,"time":1000,"skills":{"3":1,"6":3,"11":3,"14":3},"army":{"Militia":64,"EliteSoldier":1,"Cavalry":130,"Cannoneer":75},"type":13,"target":1742,"targetName":"Forward Guard Leader"}},
	"08": {"64499.0":{"grid":2212,"name":"<b>Major 1</b> <font size='-3'>(Major General)</font>","order":1,"time":1000,"skills":{"3":1,"6":3,"11":3,"14":3},"army":{"Recruit":91,"EliteSoldier":1,"Cannoneer":178},"type":13,"target":2888,"targetName":"Bandit Camp (easy)"}},
	"09": {"64499.0":{"grid":2212,"name":"<b>Major 1</b> <font size='-3'>(Major General)</font>","order":1,"time":1000,"skills":{"3":1,"6":3,"11":3,"14":3},"army":{"Recruit":107,"EliteSoldier":1,"Cannoneer":162},"type":13, "target": 3296,}},
	"10": {"127334.0":{"grid":2147,"name":"<b>Sylvana 1</b> <font size='-3'>(General Sylvana)</font>","order":4,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"Militia":90,"Cannoneer":90},"type":57,"target":3224,"targetName":"Inner Fort"}}
},

"FirstThief": {
	"01": {
		"262.0":{"grid":1518,"name":"<b>General 1</b> <font size='-3'>(General)</font>","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":165,"ArmoredMarksman":35},"type":0,"target":2137,"targetName":"Desert Bandit Camp (easy)"},
		"6365.0":{"grid":1720,"name":"<b>General 2</b> <font size='-3'>(General)</font>","order":1,"time":19000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":156,"ArmoredMarksman":30},"type":0,"target":3767,"targetName":"Desert Bandit Camp (easy)"},
		"64499.0":{"grid":1379,"name":"<b>Major 1</b> <font size='-3'>(Major General)</font>","order":2,"time":24000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"MountedSwordsman":39,"Knight":231},"type":13,"target":3359,"targetName":"Strategic Bandit Outpost"}},
	"02": {
		"262.0":{"grid":4312,"name":"<b>General 1</b> <font size='-3'>(General)</font>","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":176},"type":0,"target":5062,"targetName":"Desert Bandit Camp (easy)"},
		"64499.0":{"grid":4851,"name":"<b>Major 1</b> <font size='-3'>(Major General)</font>","order":2,"time":4000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"MountedSwordsman":4,"MountedMarksman":266},"type":13,"target":5468,"targetName":"Strategic Bandit Outpost"}},
	"03": {
		"6365.0":{"grid":3300,"name":"<b>General 2</b> <font size='-3'>(General)</font>","order":1,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"Cavalry":136},"type":0,"target":4468,"targetName":"Desert Bandit Camp (medi..."},
		"589.0":{"grid":3095,"name":"<b>General 3</b> <font size='-3'>(General)</font>","order":2,"time":4000,"skills":{"6":3,"11":3,"14":2},"army":{"Cavalry":136},"type":0,"target":4468,"targetName":"Desert Bandit Camp (medi..."}},
	"04": {
		"262.0":{"grid":3439,"name":"<b>General 1</b> <font size='-3'>(General)</font>","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":195},"type":0,"target":4468,"targetName":"Desert Bandit Camp (medi..."},
		"64499.0":{"grid":2755,"name":"<b>Major 1</b> <font size='-3'>(Major General)</font>","order":1,"time":4000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"MountedSwordsman":48,"ArmoredMarksman":112,"MountedMarksman":110},"type":13,"target":4196,"targetName":"Strategic Bandit Outpost"}},
	"05": {
		"262.0":{"grid":2357,"name":"<b>General 1</b> <font size='-3'>(General)</font>","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":186},"type":0,"target":2154,"targetName":"Desert Bandit Camp (hard)"},
		"127334.0":{"grid":2763,"name":"<b>Sylvana 1</b> <font size='-3'>(General Sylvana)</font>","order":1,"time":8000,"skills":{"0":3,"3":3,"6":3,"9":3,"11":3,"14":3},"army":{"Bowman":120},"type":57,"target":2363,"targetName":"Desert Bandit Camp (medi..."},
		"64499.0":{"grid":2898,"name":"<b>Major 1</b> <font size='-3'>(Major General)</font>","order":2,"time":4000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"ArmoredMarksman":60,"MountedMarksman":210},"type":13,"target":2363,"targetName":"Desert Bandit Camp (medi..."},
		"6878.0":{"grid":3640,"name":"<b>General 4</b> <font size='-3'>(General)</font>","order":3,"time":4000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":90,"Knight":110},"type":0,"target":3045,"targetName":"Desert Bandit Camp (medi..."},
		"64498.0":{"grid":4248,"name":"<b>Mayor 2</b> <font size='-3'>(Major General)</font>","order":4,"time":4000,"skills":{"3":3,"6":3,"11":3,"14":3},"army":{"MountedSwordsman":34,"Knight":106,"Besieger":130},"type":13,"target":2702,"targetName":"Oasis Camp"}},
	"06": {"64499.0":{"grid":2709,"name":"<b>Major 1</b> <font size='-3'>(Major General)</font>","order":2,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"MountedSwordsman":29,"Knight":43,"Besieger":198},"type":13,"target":1826,"targetName":"Desert Bandit Camp (medi..."}},
	"07": {"64498.0":{"grid":3046,"name":"<b>Mayor 2</b> <font size='-3'>(Major General)</font>","order":2,"time":1000,"skills":{"3":3,"6":3,"11":3,"14":3},"army":{"MountedMarksman":266},"type":13,"target":1345,"targetName":"Desert Bandit Camp (medi..."}},
	"08": {"64499.0":{"grid":2709,"name":"<b>Major 1</b> <font size='-3'>(Major General)</font>","order":2,"time":1000,"skills":{"1":2,"2":1,"3":3,"6":3,"11":3,"14":3},"army":{"MountedSwordsman":34,"Knight":61,"Besieger":175},"type":13,"target":1410,"targetName":"Desert Bandit Camp (medi..."}},
	"09": {
		"262.0":{"grid":2574,"name":"<b>General 1</b> <font size='-3'>(General)</font>","order":0,"time":1000,"skills":{"6":3,"11":3,"14":2},"army":{"MountedSwordsman":188,"Knight":1},"type":0,"target":1132,"targetName":"Desert Bandit Camp (hard)"},
		"64498.0":{"grid":3046,"name":"<b>Mayor 2</b> <font size='-3'>(Major General)</font>","order":3,"time":4000,"skills":{"3":3,"6":3,"11":3,"14":3},"army":{"MountedSwordsman":58,"Knight":12,"Besieger":200},"type":13,"target":1870,"targetName":"Caravan Camp"}}
}
}