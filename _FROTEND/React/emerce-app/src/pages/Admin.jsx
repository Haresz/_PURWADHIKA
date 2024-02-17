import React, { Component } from "react";
import Axios from "axios";
import { API_URL } from "../constants/API";
import "../asets/styles/admin.css";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

class Admin extends Component {
  state = {
    productList: [],
    addProductName: "",
    addPrice: 0,
    addProductImage: "",
    addDescription: "",
    addCategory: "",
    editId: "",
    editProductName: "",
    editPrice: 0,
    editProductImage: "",
    editDescription: "",
    editCategory: "",
  };

  fetchProducts = () => {
    Axios.get(`${API_URL}products`)
      .then((res) => {
        this.setState({ productList: res.data });
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  deleteBtnHandler = (deleteID) => {
    const con = window.confirm(`Are you sure you want to delete`);
    if (con) {
      Axios.delete(`${API_URL}products/${deleteID}`)
        .then(() => {
          this.fetchProducts();
        })
        .catch((err) => {
          alert(err.message);
        });
    } else {
      alert("Cancel delete");
    }
  };

  editToogle = (editData) => {
    this.setState({
      editId: editData.id,
      editProductName: editData.productName,
      editPrice: editData.price,
      editProductImage: editData.productImage,
      editDescription: editData.description,
      editCategory: editData.category,
    });
  };

  cancelEdit = () => {
    this.setState({ editId: 0 });
  };

  saveButtonHandler = () => {
    Axios.patch(`${API_URL}products/${this.state.editId}`, {
      productName: this.state.editProductName,
      price: parseInt(this.state.editPrice),
      productImage: this.state.editProductImage,
      description: this.state.editDescription,
      category: this.state.editCategory,
    })
      .then(() => {
        this.fetchProducts();
        this.setState({ editId: 0 });
      })
      .catch((err) => alert(err.message));
  };

  renderProducts = () => {
    return this.state.productList.map((product) => {
      if (this.state.editId === product.id) {
        return (
          <tr>
            <td>{product.id}</td>
            <td>
              <input
                value={this.state.editProductName}
                onChange={this.inputHandler}
                type="text"
                className="form-control"
                name="editProductName"
              />
            </td>
            <td>
              <input
                value={this.state.editPrice}
                onChange={this.inputHandler}
                type="number"
                className="form-control"
                name="editPrice"
              />
            </td>
            <td>
              <input
                value={this.state.editProductImage}
                onChange={this.inputHandler}
                type="text"
                className="form-control"
                name="editProductImage"
              />
            </td>
            <td>
              <input
                value={this.state.editDescription}
                onChange={this.inputHandler}
                type="text"
                className="form-control"
                name="editDescription"
              />
            </td>
            <td>
              <select
                value={this.state.editCategory}
                onChange={this.inputHandler}
                name="editCategory"
                className="from-control"
              >
                <option value="">All Items</option>
                <option value="kaos">Kaos</option>
                <option value="celana">Celana</option>
                <option value="aksesoris">Aksesoris</option>
              </select>
            </td>
            <td>
              <button
                onClick={this.saveButtonHandler}
                className="btn btn-success"
              >
                Save
              </button>
            </td>
            <td>
              <button onClick={this.cancelEdit} className="btn btn-danger">
                Cancel
              </button>
            </td>
          </tr>
        );
      }
      return (
        <tr>
          <td>{product.id}</td>
          <td>{product.productName}</td>
          <td>{product.price}</td>
          <td>
            <img
              className="admin-product-image"
              src={product.productImage}
              alt=""
            />
          </td>
          <td>{product.description}</td>
          <td>{product.category}</td>
          <td>
            <button
              onClick={() => this.editToogle(product)}
              className="btn btn-secondary"
            >
              Edit
            </button>
          </td>
          <td>
            <button
              onClick={() => this.deleteBtnHandler(product.id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };

  addNewProduct = () => {
    Axios.post(`${API_URL}products`, {
      productName: this.state.addProductName,
      price: parseInt(this.state.addPrice),
      productImage: this.state.addProductImage,
      description: this.state.addDescription,
      category: this.state.addCategory,
    })
      .then(() => {
        this.fetchProducts();
        this.setState({
          addProductName: "",
          addPrice: 0,
          addProductImage: "",
          addDescription: "",
          addCategory: "",
        });
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  inputHandler = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  componentDidMount = () => {
    this.fetchProducts();
  };

  render() {
    if (this.props.userGlobal.role !== "admin") {
      return <Navigate to="/" />;
    }
    return (
      <div className="p-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Manage Products</h1>
            <table className="table mt-4">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Image</th>
                  <th>Description</th>
                  <th>Category</th>
                  <th colSpan="2">Action</th>
                </tr>
              </thead>
              <tbody>{this.renderProducts()}</tbody>
              <tfoot className="bg-light">
                <tr>
                  <td></td>
                  <td>
                    <input
                      value={this.state.addProductName}
                      onChange={this.inputHandler}
                      name="addProductName"
                      type="text"
                      className="from-control"
                    />
                  </td>
                  <td>
                    <input
                      value={this.state.addPrice}
                      onChange={this.inputHandler}
                      name="addPrice"
                      type="number"
                      className="from-control"
                    />
                  </td>
                  <td>
                    <input
                      value={this.state.addProductImage}
                      onChange={this.inputHandler}
                      name="addProductImage"
                      type="text"
                      className="from-control"
                    />
                  </td>
                  <td>
                    <input
                      value={this.state.addDescription}
                      onChange={this.inputHandler}
                      name="addDescription"
                      type="text"
                      className="from-control"
                    />
                  </td>
                  <td>
                    <select
                      onChange={this.inputHandler}
                      name="addCategory"
                      className="from-control"
                    >
                      <option value="">All Items</option>
                      <option value="kaos">Kaos</option>
                      <option value="celana">Celana</option>
                      <option value="aksesoris">Aksesoris</option>
                    </select>
                  </td>
                  <td colSpan="2">
                    <button
                      onClick={this.addNewProduct}
                      className="btn btn-info"
                    >
                      Add Product
                    </button>
                  </td>
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
    userGlobal: state.user,
  };
};

export default connect(mapStateToProps)(Admin);
