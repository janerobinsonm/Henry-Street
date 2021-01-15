import React, { Component } from 'react';
import axios from 'axios';

import Results from './components/Results';

class App extends Component {
  state = {
    value: '',
    products:null
  };

  search = async val => {
    const apiKey = "ac393b5517be4d51b254915616bdc6fe";

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
      products = <Results list={this.state.products} />;
    }

    return products;
  }

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

export default App;
