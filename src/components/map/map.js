import React, {Component} from 'react'
import { L, Map } from 'leaflet';
// import {Map as LeafMap} from 'leaflet'
import leafRed from "./leaf-red.png"
import 'leaflet/dist/leaflet.css'
import { TileLayer, Marker, Popup } from "react-leaflet"



class LeafletMap extends Component {
  state = {
    redIcon:{
    lat: 40.713,
    lng: -73.9
  },
  zoom: 13,
  }
  redIcon = L.icon({
    iconUrl: leafRed,
    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -86]
  });

  render(){
    const positionRedIcon = [this.state.redIcon.lat, this.state.redIcon.lng];
  return (
    <div>
      <Map center={positionRedIcon} zoom={this.state.zoom}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={positionRedIcon} icon={this.redIcon}>
          <Popup>
            <span>
              This is Henry Street Settlement
            </span>
          </Popup>
        </Marker>
      </Map>

    </div>
  );
}
}

export default LeafletMap;