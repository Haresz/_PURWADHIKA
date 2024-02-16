import React, { Component } from "react";
import ProductCart from "../components/ProductCart";
import Axios from "axios";
import { API_URL } from "../constants/API";

export default class Home extends Component {
  state = {
    productList: [],
    filterProductList: [],
    page: 1,
    maxPage: 0,
    itemPerPage: 5,
    searchProductName: "",
    searchCategory: "",
  };

  fetchProduct = () => {
    Axios.get(`${API_URL}products`)
      .then((res) => {
        this.setState({
          productList: res.data,
          filterProductList: res.data,
          maxPage: Math.ceil(res.data.length / this.state.itemPerPage),
        });
      })
      .catch((err) => {
        alert(err.massage);
      });
  };

  renderProduct = () => {
    const beginingIndex = (this.state.page - 1) * this.state.itemPerPage;
    const currentData = this.state.filterProductList.slice(
      beginingIndex,
      beginingIndex + this.state.itemPerPage
    );
    return currentData.map((product) => {
      return <ProductCart productData={product} />;
    });
  };

  nextPageHandler = () => {
    if (this.state.maxPage > this.state.page) {
      this.setState({ page: this.state.page + 1 });
    }
  };

  prevPageHandler = () => {
    if (this.state.page > 1) {
      this.setState({ page: this.state.page - 1 });
    }
  };

  searchInputHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  componentDidMount() {
    this.fetchProduct();
  }

  searchButtonHandler = () => {
    const filterProductList = this.state.productList.filter((val) => {
      return (
        val.productName
          .toLowerCase()
          .includes(this.state.searchProductName.toLowerCase()) &&
        val.category.includes(this.state.searchCategory)
      );
    });

    this.setState({
      filterProductList,
      maxPage: Math.ceil(filterProductList.length / this.state.itemPerPage),
      page: 1,
    });
  };

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-3">
            <div className="card">
              <div className="card-header">
                <strong>Filter Products</strong>
              </div>
              <div className="card-body">
                <label htmlFor="searchProductName">Product Name</label>
                <input
                  name="searchProductName"
                  type="text"
                  className="form-control mb-3"
                  onChange={this.searchInputHandler}
                />
                <label htmlFor="searchCategory">Product Category</label>
                <select
                  onChange={this.searchInputHandler}
                  name="searchCategory"
                  className="form-control"
                >
                  <option value="">All Items</option>
                  <option value="kaos">Kaos</option>
                  <option value="celana">Celana</option>
                  <option value="aksesoris">Aksesoris</option>
                </select>
                <button
                  onClick={this.searchButtonHandler}
                  className="btn btn-primary mt-3"
                >
                  Search
                </button>
              </div>
            </div>
            <div className="card mt-4">
              <div className="card-header">
                <strong>Sort Products</strong>
              </div>
              <div className="card-body">
                <label htmlFor="searchCategory">Sort by</label>
                <select name="searchCategory">
                  <option value="">Default</option>
                  <option value="">Lowest Price</option>
                  <option value="">Highest Price</option>
                  <option value="">A-Z</option>
                  <option value="">Z-A</option>
                </select>
              </div>
            </div>
            <div className="mt-3">
              <div className="d-flex flex-row justify-content-between align-items-center">
                <button
                  onClick={this.prevPageHandler}
                  className="btn btn-dark"
                  disabled={this.state.page > 1 ? false : true}
                >
                  {" "}
                  {"<"}{" "}
                </button>
                <div className="text-center">
                  Page {this.state.page} of {this.state.maxPage}
                </div>
                <button
                  onClick={this.nextPageHandler}
                  className="btn btn-dark"
                  disabled={this.state.page < this.state.maxPage ? false : true}
                >
                  {" "}
                  {">"}{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="d-flex flex-wrap flex-row">
              {this.renderProduct()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
