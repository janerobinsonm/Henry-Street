import React, { Component } from "react";
import L from "leaflet";
import "../../App.css";
import axios from "axios";
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
    data: data,
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
  
  
  render() {

    const positionRedIcon = [this.state.redIcon.lat, this.state.redIcon.lng];

    return (
      <div className="map">
        <LeafMap
          className="map"
          center={positionRedIcon}
          zoom={this.state.zoom}

        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={positionRedIcon}>
            <Popup>
            ACTS COMMUNITY DEVELOPMENT CORPORATION
            2114 MERMAID AVE  BROOKLYN NEW YORK 11224
            </Popup>
          </Marker>
        </LeafMap>
      </div>
    );
  }
}

export default LeafletMap;
