/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Route } from "react-router-dom";
import AppProvider from "./AppProvider";
import SearchBar from "./SearchBar.js";
import Map from "./map/map"
import { MapConsumer } from "react-leaflet";
import LeafletMap from "./map/map";


export default (props) => {
  return (
    <>
      <AppProvider>
      <Route exact path="/" render={props => <SearchBar {...props} />} />
      <Route exact path="/" render={props => <LeafletMap {...props} />} />
      </AppProvider>
    </>
  );
};