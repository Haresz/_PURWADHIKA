import React, { Component } from "react";
import "../asets/styles/product_cart.css";
import { Link } from "react-router-dom";

class ProductCart extends Component {
  render() {
    return (
      <div className="card product-card">
        <img src={this.props.productData.productImage} alt="" />
        <div className="mt-2">
          <div>
            <Link
              to={`/product-detail/${this.props.productData.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <h6>{this.props.productData.productName}</h6>
            </Link>
            <span className="text-muted">{this.props.productData.price}</span>
          </div>
          <Link
            to={`/product-detail/${this.props.productData.id}`}
            className="d-flex flex-row justify-content-end"
          >
            <button className="btn btn-primary mt-2">Add to cart</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default ProductCart;
