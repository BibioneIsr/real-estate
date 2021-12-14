import { useState, useEffect } from "react";
import '../assets/css/MapBox.css';

let id = 0;
function genId() {
    return "mapBox-" + ++id;
}

export default function MapBox({handlerDrag = (()=> {}), styles, list=[], openModal, setData}) {
    const [mapBox, setMapBox] = useState(null);
    const [markers, setMarkers] = useState([]);
    const [controls, setControls] = useState([]);
    const [mapboxgl, setMapBoxGl] = useState(window.mapboxgl);
    const mapId = genId();

    const markersData = list.map((ad) => [ad.address.latitude, ad.address.longitude]);
    let position = {
        lat: 0, lon: 0
    };
    markersData.forEach((marker) => {
        position.lat += marker[0];
        position.lon += marker[1];
    });
    position.lat = +(position.lat / markersData.length).toFixed(6);
    position.lon = +(position.lon / markersData.length).toFixed(6);
    position = Object.values(position);

    const openAd = (ad) => {
        openModal();
        setData(ad)
    };

    useEffect(()=> {
        if (mapBox) {
            clearMap(markers, mapBox, controls);
            addMarkers(mapBox, mapboxgl, list, openAd, handlerDrag, markers, setMarkers);

            const newControls = [new mapboxgl.NavigationControl()];
            newControls.forEach(control => {
                mapBox.addControl(control);
            });
            setControls(newControls);
        }
    }, [mapBox]);

    useEffect(()=> {
        if (!mapBox) {
            mapboxgl.accessToken = 'pk.eyJ1IjoiYmliaW9uZSIsImEiOiJja3I0dHA2Z2YwM3NxMnBteWh4NXJ5dnFxIn0.xuf0r4SDoqMecJhV3ClyEA'; 
            setMapBox( 
                new mapboxgl.Map({
                    container: mapId,
                    style: 'mapbox://styles/mapbox/streets-v11', 
                    center: position,
                    zoom: 10.7
                })
            );
        }
    }, [])


    return <div id={mapId} style={styles}></div>;
}

function addMarkers(map, mapboxgl, ads, openAd, handler, arrMarkers, setMarkers) {
    let marker;
    const markersNew = [];
    for (const ad of ads) {
        marker = new mapboxgl.Marker(customMarker(ad, openAd))
        .setLngLat([
            ad.address.latitude,
            ad.address.longitude
        ])
        .addTo(map);

        // marker.on("dragend", function() {
        //     const lngLat = this.getLngLat();
        //     map.setCenter([lngLat.lng, lngLat.lat]);
        //     handler(lngLat.lng, lngLat.lat);
        // });
        markersNew.push(marker);
    }
    setMarkers(markersNew);
}
function customMarker(ad, openAd) {
    let previewPhoto = ad.photos[0].src;
    const photoPreview = ad.photos.filter((photo) => photo.is_preview)[0];
    if (photoPreview) {
        previewPhoto = photoPreview.src;
    }

    const marker = document.createElement("div");
    marker.className = "MapBox__marker";
    marker.style.backgroundImage = `url(${previewPhoto})`;

    marker.addEventListener("click", () => {
        openAd(ad);
    });
    marker.addEventListener("mouseenter", () => {
        marker.classList.add("MapBox__marker--animated");
        marker.classList.add("MapBox__marker--hovered");
    });
    marker.addEventListener("mouseleave", () => {
        marker.classList.remove("MapBox__marker--hovered");
        setTimeout(() => {
            marker.classList.remove("MapBox__marker--animated");
        }, 700);
    });
    return marker;
}
function clearMap(markers, map, controls) {
    markers.forEach(marker => {
        marker.remove();
    });
    controls.forEach(control => {
        map.removeControl(control);
    });
}