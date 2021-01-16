import React, { Component } from "react";
import L from "leaflet";
import "../../App.css";
import axios from "axios";
import data from "./api/EFAP.json";
import Geocode from "react-geocode";
import leafRed from "./leaf-red.png";
import {
  MapContainer as LeafMap,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";
import GoogleMapReact from 'google-map-react';


class LeafletMap extends Component {
  state = {
    redIcon: {
      lat: 40.713,
      lng: -73.9,
    },
    data: data.locations.map((e) => {
      return e.address
    }),
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
    var listItem = [this.state.data].join(" ");
    console.log(listItem);

    const positionRedIcon = [this.state.redIcon.lat, this.state.redIcon.lng];

    return (
      <LeafMap
        className="map"
        center={positionRedIcon}
        onClick={this.addMarker}
        zoom={13}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <Marker position={positionRedIcon} icon={this.redIcon}>
          <Popup>
            <span>{this.listItem}</span>
          </Popup>
        </Marker>
        )
      </LeafMap>
    );
  }
}

export default LeafletMap;
