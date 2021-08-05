import { useState, useEffect } from "react";

export default function MapBox({position = [-87.661557, 41.893748], handlerDrag = (()=> {})}) {
    const [mapBox, setMapBox] = useState(null);
    const mapboxgl = window.mapboxgl;
    
    useEffect(()=> {
        if (mapBox) {
            addMarkers(mapBox, mapboxgl, [
                {coords: [-87.661557, 41.893748], color: "#0af5"}
            ], handlerDrag);
            mapBox.addControl(new mapboxgl.NavigationControl());
        }
    }, [mapBox]);

    useEffect(()=> {
        if (!mapBox) {
            mapboxgl.accessToken = 'pk.eyJ1IjoiYmliaW9uZSIsImEiOiJja3I0dHA2Z2YwM3NxMnBteWh4NXJ5dnFxIn0.xuf0r4SDoqMecJhV3ClyEA'; 
            setMapBox( 
                new mapboxgl.Map({
                    container: 'MapBox',
                    style: 'mapbox://styles/mapbox/streets-v11', 
                    center: position,
                    zoom: 10.7
                })
            );
        }
    }, [])


    return <div id="MapBox" style={{height: 512}}></div>;
}

function addMarkers(map, mapboxgl, markers, handler) {
    let tempMarker, lngLat;
    for (const marker of markers) {
        tempMarker = new mapboxgl.Marker({ color: marker.color, draggable: true})
        .setLngLat(marker.coords)
        .addTo(map);

        tempMarker.on("dragend", function() {
            lngLat = this.getLngLat();
            map.setCenter([lngLat.lng, lngLat.lat]);
            handler(lngLat.lng, lngLat.lat);
        })
    }
}