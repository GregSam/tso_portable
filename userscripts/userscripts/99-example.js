// use addMenuItem from main script
addToolsMenuItem("UserExample", ExampleMenuHandler);

function ExampleMenuHandler(event)
{
	// close all modals
	$( "div[role='dialog']:not(#exampleModal):visible").modal("hide");
	// create modal
	createModalWindow('exampleModal', 'Example modal window');
	// fill modal data 
	$('#exampleModalData').html(ExampleMakeModal());
	// bind buttons
	$('#exampleModalData .showlevelbtn').click(ex_get_level);
	// show modal
	$('#exampleModal:not(:visible)').modal({backdrop: "static"});
}

function ex_get_level()
{
	alert('Your level is - ' + swmmo.application.mGameInterface.mHomePlayer.GetPlayerLevel());
}

function ExampleMakeModal()
{
	var out = '<div class="container-fluid"><H3>Hello from example</H3>';
	out += jz_showTooltip();
	return out + '</div>';
}

function jz_showTooltip()
{
	// var tooltip = new swmmo.application.mTooltip();
	// tooltip.ShowTooltip("Test tooltip", 0, 0, 0, 0, 0, 0, 0, 0, 0);
	var generalIcon = utils.getImageTag("SylvanaGeneral");
	generalIcons = '<span data-toggle="tooltip" data-placement="top" title="{0}">{1}</span>'.format("generals name goes here", generalIcon);
	var row = utils.createTableRow([
	[7, generalIcons],
	[5, "more data"]]);

	return row;
}