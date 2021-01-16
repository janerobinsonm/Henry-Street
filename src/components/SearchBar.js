import React, { Component } from 'react';
import axios from 'axios';
import "../App.css"

class SearchBar extends Component {
  state = {
    value: '',
    products: null
  };


  search = async val => {
    // const apiKey = "2ad4ade5aeee40faa49dccdee5364e48";

    this.setState({ loading: true });
    const res = await axios(
      `https://api.spoonacular.com/food/ingredients/search?query=${val}&apiKey=${apiKey}`
    );
    const products = await res.data.results;

    this.setState({ products, loading: false });

  };

  onChangeHandler = async e => {
    this.search(e.target.value);
    this.setState({ value: e.target.value });
  };

  get renderProducts() {
    let products = <h1></h1>;
    if (this.state.products) {
      products = this.state.products.map(r => (
        <div class="card">
        <div class="card-body">{r.name}</div>
        <img alt="img" src={`https://spoonacular.com/cdn/ingredients_100x100/${r.image}`}></img>
      </div>
      ))
    }
    return products;
  };


render() {
  return (
    <div className="searchBar">
      <input 
        value={this.state.value}
        onChange={e => this.onChangeHandler(e)}
        placeholder="Type something to search"
      />
      {this.renderProducts}
    </div>
  );
}
  }

export default SearchBar;
