import './leaflet.css';
import useSriptLoader from '../../components/utils/useSriptLoader';

export default function LeafletMap({zoom = 13, position = [51.505, -0.09]}) {
	const libLoaded = () => {
		const L = window.L;
		console.log(L);
		var map = L.map("leaflet-map");

		map.setView(position, zoom);

		L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
			attribution: 'by Bibione 2021',
			maxZoom: 18,
			id: 'mapbox/streets-v11',
			tileSize: 512,
			zoomOffset: -1,
			accessToken: 'pk.eyJ1IjoidmFkaW0xMTIzNSIsImEiOiJja3F4bmJ3MTYwYXh3MnZwNnVrcDd1Zjh0In0.vD3WkTjEuO8tRaABfYD2jg'
		}).addTo(map);

	}
	useSriptLoader(
		"https://unpkg.com/leaflet@1.7.1/dist/leaflet.js",
		libLoaded
	)

	return (
		<MapContainer center={position} zoom={zoom} scrollWheelZoom={true}>
			<TileLayer
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker position={position}>
				<Popup>
					You are here
				</Popup>
			</Marker>
		</MapContainer>
	)
}

function MapContainer() {
	return (
		<div id="leaflet-map"></div>
	);
}
function TileLayer() {
	return (
		<div></div>
	);
}
function Marker() {
	console.log(window.L);
	// var markerIcon = L.icon({
	// 	iconUrl: 'marker-icon.png',
	// 	iconSize: [38, 95],
	// 	iconAnchor: [22, 94],
	// 	popupAnchor: [-3, -76],
	// 	shadowUrl: 'marker-shadow.png',
	// 	shadowSize: [68, 95],
	// 	shadowAnchor: [22, 94]
	// });

	// return L.marker(coords).addTo(map).bindPopup('Ты здесь');
	return (
		<div></div>
	);
}
function Popup() {
	return (
		<div></div>
	);
}
/*
function DraggableMarker() {
	const [draggable, setDraggable] = useState(false)
	const [position, setPosition] = useState(center)
	const markerRef = useRef(null)
	const eventHandlers = useMemo(
	  () => ({
		dragend() {
		  const marker = markerRef.current
		  if (marker != null) {
			setPosition(marker.getLatLng())
		  }
		},
	  }),
	  [],
	)
	const toggleDraggable = useCallback(() => {
	  setDraggable((d) => !d)
	}, [])
  
	return (
	  <Marker
		draggable={draggable}
		eventHandlers={eventHandlers}
		position={position}
		ref={markerRef}>
		<Popup minWidth={90}>
		  <span onClick={toggleDraggable}>
			{draggable
			  ? 'Marker is draggable'
			  : 'Click here to make marker draggable'}
		  </span>
		</Popup>
	  </Marker>
	)
  } */