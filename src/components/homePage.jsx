import React, { Component } from "react";
import { getProducts } from "./../services/productService";

class HomePage extends Component {
  state = {
    products: getProducts()
  };

  render() {
    console.log(this.state.products);
    return (
      <div>
        <h1>showing</h1>
      </div>
    );
  }
}

export default HomePage;
