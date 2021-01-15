import React, { Component } from 'react';
import axios from 'axios';

class SearchBar extends Component {
  state = {
    value: '',
    products: null
  };

  search = async val => {
    const apiKey = "2e35c181664d413b8b22bd5c33d98a65";

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
    let products = <h1>There's no products</h1>;
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
    <div>
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
