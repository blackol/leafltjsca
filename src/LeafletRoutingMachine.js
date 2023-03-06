import React, { useEffect, useState } from "react";
import L, { divIcon } from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { useMap } from "react-leaflet";

const LeafletRoutingMachine = () => {
  const map = useMap();
  let DefaultIcon = L.icon({
    iconUrl: "/marker.png",
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
  });
  useEffect(() => {
    var marker1 = L.marker([16.225043614770968, -61.531797502759034], {
      icon: DefaultIcon,
    }).addTo(map);
    map.on("click", function (e) {
      L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
      L.Routing.control({
        waypoints: [
          L.latLng(16.225043614770968, -61.531797502759034), //depart touver comment intégrer la geo automatiquement
          L.latLng(e.latlng.lat, e.latlng.lng),// arriveé 
          
        ],
        lineOptions: {
          styles: [
            {
              color: "blue",
              weight: 4,
              opacity: 0.7,
            },
          ],
        },
        routeWhileDragging: false,
        geocoder: L.Control.Geocoder.nominatim(),
        addWaypoints: false,
        draggableWaypoints: true,
        fitSelectedRoutes: true,
        showAlternatives: true,
      })
        .on("routesfound", function (e) {
          e.routes[0].coordinates.forEach((c, i) => {
          });
        })
        .addTo(map);
    });
  }, []);
  return null;
};

export default LeafletRoutingMachine;
