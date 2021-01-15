import React, { useState, useEffect } from "react";

export const ProductContext = React.createContext();




export const ProductProvider = (props) => {
  
  const [products, setProducts] = useState([]);
  const SPOON_API_KEY = process.env.SPOON_API_KEY;


    const apiURL = `https://api.spoonacular.com/food/products/search?query=yogurt&apiKey=${SPOON_API_KEY}`;

    const fetchData = async () => {
        const response = await axios.get(apiURL)

        setBooks(response.data) 
    }

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {}, [products]);

  return (
    <ProductContext.Provider
      value={{
        products,
        // addProduct,
        // deleteProduct,
        // updateProduct,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
