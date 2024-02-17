import React, { Component } from "react";
import Axios from "axios";
import { API_URL } from "../constants/API";
import { connect } from "react-redux";
import { getCartData } from "../redux/action/cart";

class Cart extends Component {
  state = {
    isCheckoutMode: false,
    recipientName: "",
    address: "",
    payment: 0,
  };

  deleteCartHandler(cartId) {
    Axios.delete(`${API_URL}cart/${cartId}`)
      .then(() => {
        this.props.getCartData(this.props.userGlobal.id);
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  checkoutModeToggle = () => {
    this.setState({ isCheckoutMode: !this.state.isCheckoutMode });
  };

  renderSubTotalPrice = () => {
    let subTotal = 0;
    for (let i = 0; i < this.props.cartGlobal.cartList.length; i++) {
      subTotal +=
        this.props.cartGlobal.cartList[i].price *
        this.props.cartGlobal.cartList[i].quantity;
    }
    return subTotal;
  };

  renderTaxFee = () => {
    return this.renderSubTotalPrice() * 0.05;
  };

  renderTotalPrice = () => {
    return this.renderSubTotalPrice() + this.renderTaxFee();
  };

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

  inputHandler = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  payButtonHandler = () => {
    if (this.state.payment < this.renderTotalPrice()) {
      alert("Payment lowered");
      return;
    }
    const d = new Date();
    const funPay = () =>
      Axios.post(`${API_URL}transactions`, {
        userID: this.props.userGlobal.id,
        recipientName: this.state.recipientName,
        address: this.state.address,
        totalPrice: parseInt(this.renderTotalPrice()),
        totalPayment: parseInt(this.state.payment),
        transactionsDate: `${d.getDate()} - ${d.getMonth()} - ${d.getFullYear()}`,
        transactionItem: this.props.cartGlobal.cartList,
      })
        .then((res) => {
          alert(`payment successful`);
          res.data.transactionItem.forEach((val) => {
            this.deleteCartHandler(val.id);
          });
        })
        .catch((err) => {
          alert(err.message);
        });

    if (this.state.payment > this.renderTotalPrice()) {
      alert(
        "Payment higher your changes " +
          (this.state.payment - this.renderTotalPrice())
      );
      funPay();
    } else if (this.state.payment == this.renderTotalPrice()) {
      funPay();
    }
  };

  render() {
    return (
      <div className="p-5 text-center">
        <h1>Cart</h1>
        <div className="row">
          <div className="col-9 text-center">
            <table className="table mt-4">
              <thead className="table-secondary">
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
                  <button
                    className="btn btn-success"
                    onClick={this.checkoutModeToggle}
                  >
                    Checkout
                  </button>
                </tr>
              </tfoot>
            </table>
          </div>
          {this.state.isCheckoutMode ? (
            <div className="col-3 mt-4">
              {/* Form Checkout */}
              <div className="card text-start">
                <div className="card-header">
                  <strong>Order summary</strong>
                </div>
                <div className="card-body">
                  <div className="d-flex my-2 flex-row justify-content-between alig-items-center">
                    <span className="fw-bold">Subtotal Price</span>
                    <span>Rp. {this.renderSubTotalPrice()}</span>
                  </div>
                  <div className="d-flex my-2 flex-row justify-content-between alig-items-center">
                    <span className="fw-bold">Tax Fee(5%)</span>
                    <span>Rp. {this.renderTaxFee()}</span>
                  </div>
                  <div className="d-flex my-2 flex-row justify-content-between alig-items-center">
                    <span className="fw-bold">Total Price</span>
                    <span>Rp. {this.renderTotalPrice()}</span>
                  </div>
                </div>
                <div className="card-body border-top">
                  <label htmlFor="recipientName">Rcipient Name</label>
                  <input
                    onChange={this.inputHandler}
                    type="text"
                    className="form-control mb-3"
                    name="recipientName"
                  />
                  <label htmlFor="address">Address</label>
                  <input
                    onChange={this.inputHandler}
                    type="text"
                    className="form-control"
                    name="address"
                  />
                </div>
                <div className="card-footer">
                  <div className="d-flex flex-row justify-content-between aalign-items-center">
                    <input
                      onChange={this.inputHandler}
                      className="form-control"
                      type="number"
                      name="payment"
                    />
                    <button
                      className="btn btn-success mx-1"
                      onClick={this.payButtonHandler}
                    >
                      {" "}
                      Pay{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
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
