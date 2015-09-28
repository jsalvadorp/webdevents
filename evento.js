//script de evento.html
var map;

window.onload = function() {
	
    document.myform.action = get_action();
}

function initialize() {
	map = new google.maps.Map(document.getElementById('map'), {
	  zoom: 16,
	  center: new google.maps.LatLng(25.651313, -100.289604),
	  mapTypeId: google.maps.MapTypeId.ROADMAP,
	});
	


	var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
	var icons = {
	  parking: {
		  name: 'Estacionamiento',
		  icon: iconBase + 'parking_lot_maps.png'
	  },
	  library: {
		  name: 'Biblioteca',
		  icon: iconBase + 'library_maps.png'
	  },
	  info: {
		  name: 'Informacion',
		  icon: iconBase + 'info-i_maps.png'
	  }
	};

	function addMarker(feature) {
	  var marker = new google.maps.Marker({
		  position: feature.position,
		  icon: icons[feature.type].icon,
		  map: map
	  });
	}

	var features = [
	  {
		  position: new google.maps.LatLng(25.651505, -100.290877), //rectoria
		  type: 'info'
	  }, {
		  position: new google.maps.LatLng(25.649447, -100.289871), //a3
		  type: 'parking'
	  },  {
		  position: new google.maps.LatLng(25.652315, -100.287709), //e2
		  type: 'parking'
	  }, {
		  position: new google.maps.LatLng(25.650486, -100.289750), //bib
		  type: 'library'
	  }
	];


	for (var i = 0, feature; feature = features[i]; i++) {
	  addMarker(feature);
	}

	var legend = document.getElementById('legend');
	for (var key in icons) {
	  var type = icons[key];
	  var name = type.name;
	  var icon = type.icon;
	  var div = document.createElement('div');
	  div.innerHTML = '<img src="' + icon + '"> ' + name;
	  legend.appendChild(div);
	}

	 map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);
}

google.maps.event.addDomListener(window, 'load', initialize);


function addComment(){


}