import React, { Component } from "react";
import Axios from "axios";
import { API_URL } from "../constants/API";
import { connect } from "react-redux";

class History extends Component {
  state = {
    transactionList: [],
    transactionDetails: [],
  };

  fetchTransaction = () => {
    Axios.get(`${API_URL}transactions`, {
      params: {
        userID: this.props.userGlobal.id,
      },
    })
      .then((res) => {
        this.setState({ transactionList: res.data });
        console.log(res);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  seeDetailsButtonHandler = (transactionDetails) => {
    this.setState({ transactionDetails });
  };

  rendeTransaction = () => {
    return this.state.transactionList.map((transaction) => {
      return (
        <tr>
          <td>{transaction.transactionsDate}</td>
          <td>{transaction.transactionItem.length} Item(s)</td>
          <td>Rp.{transaction.totalPrice}</td>
          <td>
            <button
              className="btn btn-info"
              onClick={() =>
                this.seeDetailsButtonHandler(transaction.transactionItem)
              }
            >
              See details
            </button>
          </td>
        </tr>
      );
    });
  };

  renderTransactionDetailItem = () => {
    return this.state.transactionDetails.map((val) => {
      return (
        <div className="d-flex my-2 flex-row justify-content-between align-items-center">
          <span className="fw-bold">{val.productName} (3)</span>
          <span>Rp {val.price}</span>
        </div>
      );
    });
  };

  componentDidMount = () => {
    this.fetchTransaction();
  };

  render() {
    return (
      <div className="p-5">
        <h1>Transaction History</h1>
        <div className="row mt-5">
          <div className="col-8">
            <table className="table">
              <thead className="table-primary">
                <tr>
                  <th>Transaction Date</th>
                  <th>Total Items</th>
                  <th>Total Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>{this.rendeTransaction()}</tbody>
            </table>
          </div>
          <div className="col-4">
            {this.state.transactionDetails.length ? (
              <div className="card">
                <div className="card-header">
                  <strong>Transaction Details</strong>
                </div>
                <div className="card-body">
                  {this.renderTransactionDetailItem()}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userGlobal: state.user,
  };
};

export default connect(mapStateToProps)(History);
