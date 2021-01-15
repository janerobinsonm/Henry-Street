import React from "react";
import { Route } from "react-router-dom";
import AppProvider from "./AppProvider";
import SearchBar from "./SearchBar.js";
import LeafMap from "./map/Map";


export default (props) => {
  return (
    <>
      <AppProvider>
      <Route exact path="/" render={props => <SearchBar {...props} />} />
      <Route exact path="/" render={props => <LeafMap {...props} />} />
      </AppProvider>
    </>
  );
};