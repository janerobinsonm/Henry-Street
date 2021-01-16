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
  
  const listItems = this.state.data.locations.map(function (e) {
    return e.address;
  });
  baseGeoCodeURL =
    "https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyCrVz7VKyTBvbx2ADJnyul1n69uxEK1KkI";
  
    getLatLon(address, appkey) {
    if (address) {
      return axios.get(baseGeoCodeURL + appkey + "&address=" + address);
    }
  };
  render() {



    Geocode.fromAddress(listItems).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log(lat, lng);
      },
      (error) => {
        console.error(error);
      }
    );

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
        <Marker map={listItems} position={positionRedIcon} icon={this.redIcon}>
          <Popup>
            <span>{listItems.address}</span>
          </Popup>
        </Marker>
        )
      </LeafMap>
    );
  }
}

export default LeafletMap;
