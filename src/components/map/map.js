import React, { Component } from "react";
import L from "leaflet";
import "../../App.css";
import leafRed from "./leaf-red.png";
import {
  MapContainer as LeafMap,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

class LeafletMap extends Component {
  state = {
    redIcon: {
      lat: 40.713,
      lng: -73.9,
    },
    zoom: 13,
  };
  redIcon = L.icon({
    iconUrl: leafRed,
    iconSize: [38, 95], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62], // the same for the shadow
    popupAnchor: [-3, -86],
  });

    geocode = fetch("./api/EFAP.json").then((response) => response.json()).then((responseData) => {
        console.log(responseData.data);
        const stations = responseData.data.stations;
  
        const layerGroup = L.featureGroup().addTo(map);
  
        stations.forEach(({ lat, lon, name, city, state, zip_code, hours, days }) => {
          const address = city + state + zip_code;
          const operation = hours + days; 
  
          layerGroup.addLayer(
            L.marker([lat, lon], { icon }).bindPopup(
              `Name: ${name}, Address: ${address}, Operation Hours:${operation}`
            )
          );
        });
  
        map.fitBounds(layerGroup.getBounds());
      })

  render() {

    const location = [this.geocode.address]
    const positionRedIcon = [this.state.redIcon.lat, this.state.redIcon.lng];
    return (
      <div>
        <LeafMap
          className="map"
          center={positionRedIcon}
          zoom={this.state.zoom}
        >
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={positionRedIcon} icon={this.redIcon}>
            <Popup>
              
              <span>This is Henry Street Settlement</span>
            </Popup>
          </Marker>
        </LeafMap>
      </div>
    );
  }
}

export default LeafletMap;
