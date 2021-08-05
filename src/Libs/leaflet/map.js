var htmlCoordX = document.querySelector('.js-coordsX'),
	htmlCoordY = document.querySelector('.js-coordsY');



function getMap(zoom, id, coords) {
	var map = L.map(id);

	updateMap(map, false, zoom, coords);

	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
		attribution: 'by Vadim 2021',
		maxZoom: 18,
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1,
		accessToken: 'pk.eyJ1IjoidmFkaW0xMTIzNSIsImEiOiJja3F4bmJ3MTYwYXh3MnZwNnVrcDd1Zjh0In0.vD3WkTjEuO8tRaABfYD2jg'
	}).addTo(map);

	return map;
}

function getMarker(map) {
	var markerIcon = L.icon({
		iconUrl: 'marker-icon.png',
		iconSize: [38, 95],
		iconAnchor: [22, 94],
		popupAnchor: [-3, -76],
		shadowUrl: 'marker-shadow.png',
		shadowSize: [68, 95],
		shadowAnchor: [22, 94]
	});

	return L.marker(coords).addTo(map).bindPopup('Ты здесь');
}

function updateMap(map, marker, zoom, coords) {
	htmlCoordX.innerText = coords[0];
	htmlCoordY.innerText = coords[1];
	map.setView(coords, zoom);

	if(marker) {
		updateMarker(marker, coords);
	}
}

function updateMarker(marker, coords) {
	marker.setLatLng(L.latLng(coords[0], coords[1]));
}


function getPosition(f, reject) {
	if (!('geolocation' in navigator)) {
		alert('Увы, геопозицию не получить ;(');
		return false;
	}

	navigator.geolocation.getCurrentPosition(
		function(position) {
			f(position.coords.latitude, position.coords.longitude);
		}, function(error) {
			if(error.code === 1) {
				alert('Разрешите доступ к геопозиции!');
			}
		}
	);
}

function startWatch(f) {
	if (!('geolocation' in navigator)) {
		alert('Увы, геопозицию не получить ;(');
		return false;
	}

	var options = {
		enableHighAccuracy: false,
		timeout: 5000,
		maximumAge: 0
	};

	var watchId = navigator.geolocation.watchPosition(
		function(position) {
			var coords = position.coords;
			f(coords.latitude, coords.longitude);
		}, function(error) {
			if(error.code === 1) {
				alert('Разрешите доступ к геопозиции!');
			}
		}, options
	);

	return watchId;
}

function stopWatch(watchId) {
	if (!('geolocation' in navigator)) {
		watchId = false;
		return false;
	}
	navigator.geolocation.clearWatch(watchId);
}

