/* eslint-disable import/no-anonymous-default-export */
import React, { useContext } from "react";
import { ProductContext } from "./product_api/ProductProvider";
import Product from "./Product";
import "./Products.css";

export default (props) => {
  const { products } = useContext(ProductContext);
  
  const fetchData = async () => {
    const response = await axios.get(apiURL)

    setBooks(response.data) 
}

// return (
//   </>
//     < className="App">

//   {/_ Fetch data from API _/}
//   <div>
//     <button className="fetch-button" onClick={fetchData}>
//       Fetch Data
//     </button>
//   </div>
// </>
// };
