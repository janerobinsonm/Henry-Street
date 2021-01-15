/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Route } from "react-router-dom";
import AppProvider from "./AppProvider";
import SearchBar from "./SearchBar.js";


export default (props) => {
  return (
    <>
      <AppProvider>
      <Route exact path="/" render={props => <SearchBar {...props} />} />
      </AppProvider>
    </>
  );
};
