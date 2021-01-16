import React from "react";
import { Route } from "react-router-dom";
import AppProvider from "./AppProvider";
import SearchBar from "./SearchBar.js";
import LeafMap from "./map/Map";
import SideNavBar from "./NavBar/SideNavBar";
import { BrowserRouter as Router, Switch } from "react-router-dom";

export default (props) => {
  return (
    <>
      <Router>
        <Switch>
          <AppProvider>
            <SideNavBar />
            <Route
              exact
              path="/"
              render={(props) => <SearchBar {...props} />}
            />
            <Route exact path="/" render={(props) => <LeafMap {...props} />} />
          </AppProvider>
        </Switch>
      </Router>
    </>
  );
};
