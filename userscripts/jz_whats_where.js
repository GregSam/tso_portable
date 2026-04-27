addToolsMenuItem('JZ Whats Where', jzWhatsWhereOpen);

var jzWhatsWhereModalSelector = '#jzWhatsWhereModal';
var jzWhatsWhereModalDataSelector = '#jzWhatsWhereModalData';
var jzWhatsWhereSearchSelector = '#jzWhatsWhereSearch';
var jzWhatsWhereStylesInjected = false;

function jzWhatsWhereOpen() {
	$("div[role='dialog']:not(" + jzWhatsWhereModalSelector + "):visible").modal("hide");
	createModalWindow('jzWhatsWhereModal', 'JZ Whats Where');
	jzWhatsWhereEnsureStyles();
	jzWhatsWhereEnsureSearchBar();

	var $modalBody = $(jzWhatsWhereModalDataSelector);
	$modalBody.html(jzWhatsWhereRenderModal());
	$modalBody.off('click', '.jz-ww-target').on('click', '.jz-ww-target', jzWhatsWhereFocusBuilding);
	jzWhatsWhereBindSearch($modalBody);

	$(jzWhatsWhereModalSelector + ':not(:visible)').modal({ backdrop: "static" });
}

function jzWhatsWhereRenderModal() {
	var buildings = jzWhatsWhereCollectBuildings();
	var output = ['<div class="container-fluid jz-whats-where">'];

	if (buildings.length === 0) {
		output.push('<div class="alert alert-warning">No buildings detected in this zone.</div>', '</div>');
		return output.join('');
	}

	output.push(createTableRow([[10, 'Building'], [2, 'Target']], true));

	output.push('<div class="jz-ww-rows">');
	buildings.forEach(function (building) {
		output.push(jzWhatsWhereRowTemplate(building));
	});
	output.push('</div>');

	output.push('</div>');
	return output.join('');
}

function jzWhatsWhereTargetButton(building) {
	return '<button type="button" class="btn btn-link btn-sm jz-ww-target" data-grid="' + building.grid + '" title="Show on island">' +
		getImageTag('accuracy.png', '24px', '24px') +
		'<span class="sr-only">Go to ' + jzWhatsWhereEscape(building.displayName) + '</span>' +
		'</button>';
}

function jzWhatsWhereCollectBuildings() {
	var result = [];
	var zone = null;

	try {
		zone = swmmo.application.mGameInterface.mCurrentPlayerZone;
	} catch (e) {
		zone = null;
	}

	if (!zone || !zone.mStreetDataMap || typeof zone.mStreetDataMap.GetBuildings_vector !== 'function') {
		return result;
	}

	var vector;
	try {
		vector = zone.mStreetDataMap.GetBuildings_vector();
	} catch (err) {
		vector = [];
	}

	if (!vector || typeof vector.forEach !== 'function') {
		return result;
	}

	vector.forEach(function (item) {
		if (!item || typeof item.GetGrid !== 'function') {
			return;
		}

		var grid = parseInt(item.GetGrid(), 10);
		if (isNaN(grid)) {
			return;
		}

		var nameId = '';
		if (typeof item.GetBuildingName_string === 'function') {
			nameId = item.GetBuildingName_string();
		} else if (typeof item.GetName_string === 'function') {
			nameId = item.GetName_string();
		}

		result.push({
			displayName: jzWhatsWhereResolveName(nameId),
			rawName: nameId,
			grid: grid
		});
	});

	result.sort(function (a, b) {
		var nameCompare = a.displayName.localeCompare(b.displayName);
		if (nameCompare !== 0) {
			return nameCompare;
		}

		return a.grid - b.grid;
	});

	return result;
}

function jzWhatsWhereRowTemplate(building) {
	var escapedDisplay = jzWhatsWhereEscape(building.displayName);
	var escapedRaw = '';

	if (building.rawName && building.rawName !== building.displayName) {
		escapedRaw = jzWhatsWhereEscape(building.rawName);
	}

	var searchable = (building.displayName + ' ' + (building.rawName || '') + ' ' + building.grid).toLowerCase();
	var nameHtml = '<div class="jz-ww-name"><strong>' + escapedDisplay + '</strong></div>';

	if (escapedRaw) {
		nameHtml += '<div class="small text-muted">' + escapedRaw + '</div>';
	}

	nameHtml += '<div class="small text-muted">Grid ' + building.grid + '</div>';

	return '<div class="row jz-ww-row" data-name="' + jzWhatsWhereEscapeAttr(searchable) + '">' +
		'<div class="col-xs-10 col-sm-10 col-lg-10">' + nameHtml + '</div>' +
		'<div class="col-xs-2 col-sm-2 col-lg-2">' + jzWhatsWhereTargetButton(building) + '</div>' +
		'</div>';
}

function jzWhatsWhereResolveName(rawName) {
	if (!rawName) {
		return 'Unknown building';
	}

	var localizedName = '';
	try {
		localizedName = loca.GetText('BUI', rawName);
	} catch (e) {
		localizedName = '';
	}

	return localizedName && localizedName.length ? localizedName : rawName;
}

function jzWhatsWhereFocusBuilding(event) {
	event.preventDefault();

	var grid = parseInt($(this).attr('data-grid'), 10);
	if (isNaN(grid)) {
		return;
	}

	jzWhatsWhereScrollToGrid(grid);
}

function jzWhatsWhereScrollToGrid(grid) {
	try {
		swmmo.application.mGameInterface.mCurrentPlayerZone.ScrollToGrid(grid);
		return;
	} catch (e) {
		// ignore, try fallback below
	}

	if (typeof game !== 'undefined' && game && game.zone && typeof game.zone.ScrollToGrid === 'function') {
		game.zone.ScrollToGrid(grid);
	}
}

function jzWhatsWhereEscape(value) {
	return $('<div>').text(value || '').html();
}

function jzWhatsWhereEscapeAttr(value) {
	return $('<div>').text(value || '').html().replace(/"/g, '&quot;');
}

function jzWhatsWhereBindSearch($modalBody) {
	var $rows = $modalBody.find('.jz-ww-row');
	var $input = $(jzWhatsWhereSearchSelector);

	if (!$input.length) {
		return;
	}

	$input.off('input.jzww').on('input.jzww', function () {
		var query = $.trim($(this).val()).toLowerCase();
		if (!query.length) {
			$rows.show();
			return;
		}

		$rows.each(function () {
			var text = $(this).data('name') || '';
			$(this).toggle(text.indexOf(query) !== -1);
		});
	});
}

function jzWhatsWhereEnsureStyles() {
	if (jzWhatsWhereStylesInjected) {
		return;
	}

	var styles = [
		'.jz-whats-where { position: relative; }',
		'.jz-whats-where .jz-ww-rows { padding-top: 10px; }',
		'#jzWhatsWhereModal .modal-header .jz-ww-search {',
		'  margin-top: 10px;',
		'}',
		'#jzWhatsWhereModal .modal-header .jz-ww-search input {',
		'  width: 100%;',
		'}'
	].join('');

	$('<style>', { id: 'jzWhatsWhereStyles', text: styles }).appendTo('head');
	jzWhatsWhereStylesInjected = true;
}

function jzWhatsWhereEnsureSearchBar() {
	var $header = $(jzWhatsWhereModalSelector + ' .modal-header');
	if (!$header.length) {
		return;
	}

	var $existing = $header.find(jzWhatsWhereSearchSelector);
	if ($existing.length) {
		$existing.val('');
		return;
	}

	var $wrapper = $('<div>', { 'class': 'jz-ww-search form-group' });
	var $input = $('<input>', {
		'type': 'text',
		'class': 'form-control',
		'id': jzWhatsWhereSearchSelector.substring(1),
		'placeholder': 'Search buildings'
	});

	$wrapper.append($input);
	$header.append($wrapper);
}
