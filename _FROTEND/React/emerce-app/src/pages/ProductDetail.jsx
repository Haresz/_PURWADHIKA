import React, { Component } from "react";
import Axios from "axios";
import { API_URL } from "../constants/API";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getCartData } from "../redux/action/cart";

class ProductDetail extends Component {
  state = {
    productData: {},
    productNotfound: false,
    quantity: 0,
  };

  fetchProductData() {
    const productId = window.location.href.split("/")[4];
    Axios.get(`${API_URL}products`, {
      params: {
        id: productId,
      },
    })
      .then((res) => {
        if (res.data.length > 0) {
          this.setState({
            productData: res.data[0],
          });
        } else {
          this.setState({
            productNotfound: true,
          });
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  qtyBtnHandler(action) {
    if (action === "increment") {
      this.setState({ quantity: this.state.quantity + 1 });
    } else if (action === "decrement" && this.state.quantity > 1) {
      this.setState({ quantity: this.state.quantity - 1 });
    }
  }

  addToCartHandler(id) {
    Axios.get(`${API_URL}cart`, {
      params: {
        userId: id,
        productId: this.state.productData.id,
      },
    }).then((res) => {
      if (res.data.length) {
        Axios.patch(`${API_URL}cart/${res.data[0].id}`, {
          quantity: res.data[0].quantity + this.state.quantity,
        })
          .then(() => {
            alert(`Add to cart successfully`);
          })
          .catch((err) => {
            alert(err.message);
          });
      } else {
        Axios.post(`${API_URL}cart`, {
          userId: id,
          productId: this.state.productData.id,
          price: this.state.productData.price,
          productName: this.state.productData.productName,
          productImage: this.state.productData.productImage,
          quantity: this.state.quantity,
        })
          .then((res) => {
            alert(`Add to cart successfully`);
            this.props.getCartData(id);
          })
          .catch((err) => {
            alert(err.message);
          });
      }
    });
  }

  componentDidMount() {
    this.fetchProductData();
  }

  render() {
    return (
      <div className="container">
        {this.state.productNotfound ? (
          <>
            <div className="alert alert-warning text-center my-3">
              Product with ID {window.location.href.split("/")[4]} has not been
              found
            </div>
            <Link to="/">Back To Home</Link>
          </>
        ) : (
          <div className="row mt-3">
            <div className="col-6">
              <img
                style={{ width: "100%" }}
                src={this.state.productData.productImage}
                alt=""
              />
            </div>
            <div className="col-6 d-flex flex-column justify-content-center">
              <h4>{this.state.productData.productname}</h4>
              <h5>Rp {this.state.productData.price}</h5>
              <p>{this.state.productData.description}</p>
              <div className="d-flex flex-row align-items-center">
                <button
                  className="btn btn-primary mr-4"
                  onClick={() => this.qtyBtnHandler("decrement")}
                  disabled={this.state.quantity < 1 ? true : false}
                >
                  {" "}
                  -{" "}
                </button>
                <button className="btn btn-primary mx-4">
                  {" "}
                  {this.state.quantity}{" "}
                </button>
                <button
                  className="btn btn-primary mx-t"
                  onClick={() => this.qtyBtnHandler("increment")}
                >
                  {" "}
                  +{" "}
                </button>
              </div>
              <button
                onClick={() => this.addToCartHandler(this.props.userGlobal.id)}
                className="btn btn-success mt-3"
              >
                Add to cart
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userGlobal: state.user,
  };
};

const mapDispatchToProps = {
  getCartData,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
