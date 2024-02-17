import React, { Component } from "react";
import Axios from "axios";
import { API_URL } from "../constants/API";
import { connect } from "react-redux";
import { getCartData } from "../redux/action/cart";

class Cart extends Component {
  deleteCartHandler(cartId) {
    Axios.delete(`${API_URL}cart/${cartId}`)
      .then(() => {
        alert(`Cart deleted`);
        this.props.getCartData(this.props.userGlobal.id);
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  renderCart() {
    return this.props.cartGlobal.cartList.map((cart) => {
      return (
        <tr>
          <td className="align-middle">{cart.productName}</td>
          <td className="align-middle">{cart.price}</td>
          <td className="align-middle">
            <img src={cart.productImage} style={{ width: "100px" }} alt="" />
          </td>
          <td className="align-middle">{cart.quantity}</td>
          <td className="align-middle">{cart.quantity * cart.price}</td>
          <td className="align-middle">
            <button
              className="btn btn-danger"
              onClick={() => this.deleteCartHandler(cart.id)}
            >
              {" "}
              Delete{" "}
            </button>
          </td>
        </tr>
      );
    });
  }
  render() {
    return (
      <div className="p-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Cart</h1>
            <table className="table mt-4">
              <thead className="thead-light">
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Image</th>
                  <th>Quantity</th>
                  <th>Total Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>{this.renderCart()}</tbody>
              <tfoot>
                <tr colSpan="6">
                  <button className="btn btn-success">Checkout</button>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cartGlobal: state.cart,
    userGlobal: state.user,
  };
};

const mapdispatchToProps = {
  getCartData,
};

export default connect(mapStateToProps, mapdispatchToProps)(Cart);
