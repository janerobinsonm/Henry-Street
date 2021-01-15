/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import ProductList from "./ProductList";

const SearchPage = (props) => {
  const [input, setInput] = useState("");
  const [productListDefault, setProductListDefault] = useState();
  const [productList, setProductList] = useState();

  const fetchData = async () => {
    // return await fetch(`https://api.spoonacular.com/food/products/search?query=yogurt&apiKey=${API_KEY}`)
    const apiHost = `https://api.spoonacular.com/food/products/search?${input}`;
    const apiKey = "ac393b5517be4d51b254915616bdc6fe";
    const apiEndpoint = `${apiHost}/${apiKey}`;

    fetch(apiEndpoint)
      .then((response) => response.json())
      .then((data) => {
        setProductList(data);
        setProductListDefault(data);
      });
  };

  const updateInput = async (input) => {
    const filtered = productListDefault.filter((product) => {
      return product.name.toLowerCase().includes(input.toLowerCase());
    });
    setInput(input);
    setProductList(filtered);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Product List</h1>
      <SearchBar input={input} onChange={updateInput} />
      <ProductList ProductList={productList} />
    </>
  );
};

export default SearchPage;
