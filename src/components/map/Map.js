import React, { Component } from "react";
import L from "leaflet";
import "../../App.css";
import data from "./api/EFAP.json";
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
    marker1: {
      lat: 40.665920,
      lng: -73.886480,
      name: "DIVINE INTERVENTION INSTITUTE INC"
    },
    marker2: {
      lat: 40.669010,
      lng: -73.919820,
      name: "COMMUNITY SERVICES HOUSING DEVELOPMENT CORP"
    },
    marker3: {
      lat: 40.575980,
      lng: -73.988400,
      name: "ACTS COMMUNITY DEVELOPMENT CORPORATION"
    },
    marker4: {
      lat: 40.670000,
      lng: -73.894330,
      name: "COPO FOOD PANTR"
    },
    marker5: {
      lat: 40.637320,
      lng: -73.946690,
      name: "EVANGELICAL CRUSADE FOOD PANTRY"
    },
    zoom: 12,
  };
  redIcon = L.icon({
    iconUrl: leafRed,
    iconSize: [38, 95], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62], // the same for the shadow
    popupAnchor: [-3, -86],
  });

  render() {
   

    const positionRedIcon = [this.state.redIcon.lat, this.state.redIcon.lng];
    const marker1 = [this.state.marker1.lat, this.state.marker1.lng];
    const marker2 = [this.state.marker2.lat, this.state.marker2.lng];
    const marker3 = [this.state.marker3.lat, this.state.marker3.lng];
    const marker4 = [this.state.marker4.lat, this.state.marker4.lng];
    const marker5 = [this.state.marker5.lat, this.state.marker5.lng];

    return (
      <div className="map">
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
              <span>{this.state.marker1.name}</span>
            </Popup>
          </Marker>
          <Marker position={marker1} icon={this.redIcon}>
            <Popup>
              <span>{this.state.marker1.name}</span>
            </Popup>
          </Marker>
          <Marker position={marker2} icon={this.redIcon}>
            <Popup>
              <span>{this.state.marker2.name}</span>
            </Popup>
          </Marker>
          <Marker position={marker3} icon={this.redIcon}>
            <Popup>
              <span>{this.state.marker3.name}</span>
            </Popup>
          </Marker>
          <Marker position={marker4} icon={this.redIcon}>
            <Popup>
              <span>{this.state.marker4.name}</span>
            </Popup>
          </Marker>
          <Marker position={marker5} icon={this.redIcon}>
            <Popup>
              <span>{this.state.marker5.name}</span>
            </Popup>
          </Marker>
        </LeafMap>
      </div>
    );
  }
}

export default LeafletMap;
