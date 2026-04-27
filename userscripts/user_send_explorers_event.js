// Send Explorers Event 20251216_01
const toolsItem = new air.NativeMenuItem("Send Explorers Event");
toolsItem.name = "Send Explorers Event";
toolsItem.submenu = new air.NativeMenu();		
menu.nativeMenu.getItemByName("Tools").submenu.addItem(toolsItem);
var SEE = {
	active: false,
	timers: {
		main: null,
		explorers: [],
	},
	explorers: [],
	currentExplorer: null,
	tasks: [["1,0", 0.143, 3, 2],
			["1,1", 0.143, 7, 4],
			["1,2", 0.143, 14, 8],
			["1,3", 0.167, 28, 16],
			["1,6", 0.189, 40, 24]],
	makeMenu: function() {
		m = [{ label: "Start", name: "start", onSelect: SEE.control }, { label: "Stop", name: "stop", onSelect: SEE.control }];
		menu.nativeMenu.getItemByName("Tools").submenu.getItemByName("Send Explorers Event").submenu = air.ui.Menu.createFromJSON(m);
	},
	control: function(event) {
		switch (event.target.name) {
			case "stop":
				SEE.stop(false);
				break;
			case "start":
				SEE.start(false);
				break;
		}
	},
	stop: function(restart) {	
		if (!SEE.active && !restart) {
			game.showAlert("SEE already inactive");
			return;
		}
		if (SEE.timers.main !== null) {
			clearTimeout(SEE.timers.main);
			SEE.timers.main = null;
		}
		for (var idx = 0; idx < SEE.timers.explorers.length; idx++) {
			try { clearTimeout(SEE.timers.explorers[idx]); } catch (e) {}
		}
		SEE.explorers = [];
		SEE.timers.explorers = [];
		SEE.active = false;
		if (!restart) {
			game.showAlert("SEE stopped");
		}
	},
	start: function(restart) {
		if (SEE.active && !restart) {
			game.showAlert("SEE already active");
			return;
		}
		SEE.stop(true);
		SEE.active = true;
		if (!restart) {
			game.showAlert("SEE started");
		}
		SEE.sendExplorersEvent();
	},
	error: function(e) {
		debug(e, SEE.currentExplorer);
		var errorWait = 20;
		game.showAlert("SEE waiting " + errorWait + " seconds...");
		SEE.stop(true);
		SEE.timers.main = setTimeout(function() { SEE.start(true); }, errorWait * 1000);
	},
	sendExplorersEvent: function() {
		if (!SEE.active) return;
		try {
			SEE.getExplorers();
		} catch (e) {
			SEE.error(e);
			return;
		}
		SEE.sendExplorers();
	},
	getExplorers: function() {
		SEE.explorers = [];
		var specials = game.getSpecialists();
		specials.sort(specNameSorter);
		for (var idx = 0; idx < specials.length; idx++) {
			// var explorer = specials[idx];
			if (!specials[idx]) continue;
			if (specials[idx].GetBaseType() != 1) continue;
			SEE.currentExplorer = specials[idx];
			var expType = specials[idx].GetType();
			var expID = specials[idx].GetUniqueID().toKeyString();
			var bestTask;
			var loot;
			var bestLoot = 0;
			switch (expType) {
				case 53:
					var tasks = [0, 1];
					break;
				case 66:
					var tasks = [2, 4];
					break;
				default:
					var tasks = [0, 4];		
			}
			for (var jdx = tasks[0]; jdx <= tasks[1]; jdx++) {
				taskID = SEE.tasks[jdx][0].split(",");
				var task = getTaskInfo(taskID[0], taskID[1]);
				var calculatedTime = task.duration;
				var lootModifier = 1;
				var vectorIndex;
				var skills = specials[idx].getSkillTree().getItems_vector().concat(specials[idx].skills.getItems_vector());
				for (var kdx = 0; kdx < skills.length; kdx++) {
					var skill = skills[kdx];
					vectorIndex = skill.getLevel() - 1;
					if (vectorIndex == -1) continue;
					skill.getDefinition().level_vector[vectorIndex].forEach(function(skillDef) {
						if ((((skillDef.type_string.length === 0) || (skillDef.type_string == task.taskName + task.subTaskName)) && (skillDef.modifier_string.toLowerCase() == "searchtime"))) {
							calculatedTime = (skillDef.value != 0) ? skillDef.value : ((calculatedTime * skillDef.multiplier) + skillDef.adder);
						}
						if ((((skillDef.type_string.length === 0) || (skillDef.type_string == task.taskName + task.subTaskName)) && (skillDef.modifier_string.toLowerCase() == "changelootcount"))) {
							lootModifier = (skillDef.value != 0) ? skillDef.value : ((lootModifier * skillDef.multiplier) + skillDef.adder);
						}
					});
				}
				// debug(specials[idx]);
				try {
					calculatedTime = (calculatedTime / specials[idx].GetSpecialistDescription().GetTimeBonus()) * 100;
				} catch (e) {
					debug(e);
				}
				switch (expType) {
					case 41:
					case 51:
            			var resources = SEE.tasks[jdx][2] * lootModifier;
            			break;
            		default:
            			var resources = ((SEE.tasks[jdx][1] * SEE.tasks[jdx][2]) + ((1 - SEE.tasks[jdx][1]) * SEE.tasks[jdx][3])) * lootModifier;	
				}
				var loot = (resources * (3600000 / calculatedTime));
				if (loot >= bestLoot) { 
					bestLoot = loot;
					bestTask = SEE.tasks[jdx][0];
				}
			}
			SEE.explorers.push([expID, bestTask]);
			// debug("SEE explorers count: " + SEE.explorers.length);
		}
	},
	sendExplorers: function() {
		try {
			SEE.timers.explorers = [];
			var expCount = 0
			var specs = game.getSpecialists();
			specs.sort(specNameSorter);
			for (var ldx = 0; ldx < specs.length; ldx++) {
				var expl = specs[ldx];
				if (!expl) continue;
				if (expl.GetBaseType() != 1) continue;
				if (expl.GetTask() != null) continue;
				if (expl.getPlayerID && expl.getPlayerID() == -1) continue;
				var explID = expl.GetUniqueID().toKeyString();
				for	(var mdx = 0; mdx < SEE.explorers.length; mdx++) {
					if (explID == SEE.explorers[mdx][0]) {
						var delayMS = (expCount +1) * 1000;
						var timerID = setTimeout(function(explID, task) {
							sendSpecPacket(explID, task);
						}, delayMS, SEE.explorers[mdx][0], SEE.explorers[mdx][1]);
						SEE.timers.explorers.push(timerID);
						expCount++;
						// air.Introspector.Console.log("SEE sending explorer ", SEE.explorers[mdx]);
					}
				}
			}
			if (!expCount) {
				game.showAlert(getText('no_free_expl'));
			} else {
				game.showAlert("SEE sending " + expCount + " explorers");
			}
			var nextDelay = Math.max(60, expCount + 60) * 1000;
			SEE.timers.main = setTimeout(function() { SEE.sendExplorers(); }, nextDelay);
		}  catch (e) {
			SEE.timers.main = setTimeout(function() { SEE.sendExplorers(); }, 10000);
			SEE.error(e);
			return;
		}
	}
};
SEE.makeMenu();