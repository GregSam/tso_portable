// use addMenuItem from main script
addToolsMenuItem("Topup mines", JzTopupMInes);

function JzTopupMInes(event)
{
	// close all modals
	$( "div[role='dialog']:not(#jzTopupMInesModal):visible").modal("hide");
	// create modal
	createModalWindow('jzTopupMInesModal', 'Example modal window');
	// fill modal data 
	$('#jzTopupMInesModalData').html(JzTopupMInesMakeModal());
	// bind buttons
	$('#jzTopupMInesModalData .showlevelbtn').click(ex_get_level);
	// show modal
	$('#jzTopupMInesModal:not(:visible)').modal({backdrop: "static"});
}

function ex_get_level()
{
	alert('Your level is - ' + swmmo.application.mGameInterface.mHomePlayer.GetPlayerLevel());
}

function JzTopupMInesMakeModal()
{
	var out = '<div class="container-fluid"><H3>Hello from example</H3>';
	return out + '</div>';
}

