/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Route } from "react-router-dom";
import {ProductProvider} from "./grocery/product_api/ProductProvider";
import AppProvider from "./AppProvider";


export default (props) => {
  return (
    <>
      <AppProvider>
        <Route
          path="/"
          render={(props) => <ProductProvider {...props} />}
        />
      </AppProvider>
    </>
  );
};
