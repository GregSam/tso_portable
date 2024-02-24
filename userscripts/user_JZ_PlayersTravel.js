// use addMenuItem from main script
addToolsMenuItem("JZ Players Travel", JZ_PlayersTravel);

var specTypes = {
	0: "General",
	6: "Army Transporter",
	7: "Halloween General",
	8: "Retail General",
	9: "Easter General",
	11: "Retail 2 General",
	12: "Transporter General",
	13: "Major General",
	14: "Star 1 General",
	15: "Star 2 General",
	16: "Star 3 General",
	18: "Admiral",
	19: "Transporter Admiral",
	20: "Expert Admiral",
	21: "Expert Transporter Admiral",
	22: "Additional Admiral Shop",
	23: "Easter 2015 Transporter Admiral",
	24: "Black Marshal",
	25: "Lord Dracul",
	27: "Santa General",
	29: "General Vargus",
	30: "General Anslem",
	31: "General Nusala",
	33: "General Mary",
	47: "OGG",
	50: "YGG General",
	67: "Loner General",
	63: "Ghost General",
	64: "General Bighelmet",
};


function JZ_PlayersTravel(event)
{
	// close all modals
	$( "div[role='dialog']:not(#jzplayerstravelModal):visible").modal("hide");
	// create modal
	createModalWindow('jzplayerstravelModal', 'Traveling to Zone');
	// fill modal data
	$('#jzplayerstravelModalData').html(PlayersTravelMakeModal());
	// show modal
	$('#jzplayerstravelModal:not(:visible)').modal({backdrop: "static"});

	if($('#jzplayerstravelModal .modal-footer .refreshbtn').length == 0)
	{
		$("#jzplayerstravelModal .modal-footer").prepend([
			$('<button>').attr({ "id": "refreshbtn", "class": "btn btn-sm d-block refreshbtn" }).text('Refresh')
		]);
		$('button.refreshbtn').click(function(event) {JZ_PlayersTravel();});
	}
}

function PlayersTravelMakeModal()
{
	var out = '<div class="container-fluid">';
	try {
		out += JZ_GetTravelGensRows(JZ_GetTravelGenerals());
	} catch (e) {
		out += '<div class="alert alert-danger" role="alert">Error: ' + e + '</div>';
	}
	return out + '</div>';
}

function JZ_GetTravelGensRows(specsByPlayer){
	var out = utils.createTableRow([
		[5, "Player Name"],
		[5, "General Type"],
		[2, "Remaining Time"]], true);

	// air.Introspector.Console.log(specsByPlayer);
	$.each(specsByPlayer, function(playerid) {
		var player = specsByPlayer[playerid];
		// air.Introspector.Console.log(player);
		player.forEach(function(spec){
			var genType = spec.generalType;
			if(specTypes[spec.generalType] != undefined) { genType = specTypes[spec.generalType] }

			out += utils.createTableRow([
				[5, spec.playerName],
				[5, genType],
				[2, spec.remainingTime]
			]);
		});
	});
	return out;
}

function JZ_GetTravelGenerals(){
	var specsByPlayer = {};
	game.zone.GetSpecialists_vector().forEach(function(item){
		if(item.GetTask() == null) { return; }
		if(item.GetTask().GetType() == 7) // travel to zone
		{
			var playerid = item.getPlayerID();
			if(specsByPlayer.hasOwnProperty(playerid)){
				specsByPlayer[playerid].push({
					"playerName": getPlayerNameFromVector(playerid),
					"color": game.zone.GetPlayerColorIdx(playerid),
					"generalType": item.GetType(),
					"remainingTime":  GetFormatedTime(item.GetTask().GetRemainingTime())
				});
			} else {
				specsByPlayer[playerid] = [{
					"playerName": getPlayerNameFromVector(playerid),
					"color": game.zone.GetPlayerColorIdx(playerid),
					"generalType": item.GetType(),
					"remainingTime":  GetFormatedTime(item.GetTask().GetRemainingTime())
				}];
			}
		}
	});
	// air.Introspector.Console.log(specsByPlayer);
	return specsByPlayer;
}

function GetFormatedTime(time){
	return GetMinutes(time) + ":" + GetSeconds(time);
}

function GetMinutes(time){
	if(time <= 0) { return "00"; }
	return (Math.floor(time / 1000 / 60) < 10 ? "0" : "") + Math.floor(time / 1000 / 60);
}

function GetSeconds(time){
	if(time <= 0) { return "00"; }
	return (Math.floor((time / 1000) % 60) < 10 ? "0" : "") + Math.floor((time / 1000) % 60);
}

function getPlayerNameFromVector(playerid){
	var playersVector = swmmo.application.mGameInterface.GetPlayerList_vector();
	var playerName = "";
	playersVector.forEach(function(item){
		if(item.GetPlayerId() == playerid){
			playerName = item.GetPlayerName_string();
		}
	});
	return playerName;
}