import logo from './logo.svg';
import React, {Component} from 'react'
import L from 'leaflet';
import './App.css';
import SearchPage from './components/SearchPage.js';
import {Map, TileLayer, Marker, Popup} from react-leaflet

class App extends Component() {
  state = {
    redIcon:{
    lat = 40.713,
    lng = -73.9,
  },
  zoom = 13,
  }
  redIcon = L.icon({
    iconUrl: leafRed,
    shadowUrl: leafShadow,
    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -86]
  });

  render(){
    const positionRedIcon = [this.state.redIcon.lat, this.state.redIcon.lng];
  return (
    <div className="App">
      <SearchPage />
      <Map center={position} zoom={this.state.zoom}>
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

export default App;
