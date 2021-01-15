/* eslint-disable import/no-anonymous-default-export */
import React from "react"

import { ProductProvider } from "./grocery/product_api/ProductProvider"


export default (props) => {
    return (
        <>
                <ProductProvider>
                            {props.children}
                </ProductProvider>
        </>
    )
}
