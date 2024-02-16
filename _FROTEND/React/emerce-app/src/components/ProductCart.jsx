import React, { Component } from "react";
import "../asets/styles/product_cart.css";

export default class ProductCart extends Component {
  render() {
    return (
      <div className="card product-card">
        <img src={this.props.productData.productImage} alt="" />
        <div className="mt-2">
          <div>
            <h6>{this.props.productData.productName}</h6>
            <span className="text-muted">{this.props.productData.price}</span>
          </div>
          <div className="d-flex flex-row justify-content-end">
            <button className="btn btn-primary mt-2">Add to cart</button>
          </div>
        </div>
      </div>
    );
  }
}
