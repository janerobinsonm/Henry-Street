/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Route, Redirect } from "react-router-dom";
import AppViews from "./AppViews";
import Navigation from "./Navigation";
import Login from "./auth/Login";
import Register from "./auth/Register";


export default () => (
  <>
    <Route
      render={() => {
        if (localStorage.getItem("goodNFull_user")) {
          return (
            <>
            <Route render={(props) => <Navigation {...props} />} />
              <Route render={(props) => <AppViews {...props} />} />
            </>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
    <Route path="/login" render={(props) => <Login {...props} />} />
    <Route path="/register" render={(props) => <Register {...props} />} />
  </>
);
