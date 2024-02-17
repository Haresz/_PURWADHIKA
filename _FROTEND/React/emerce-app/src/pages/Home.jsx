import React, { Component } from "react";
import ProductCart from "../components/ProductCart";
import Axios from "axios";
import { API_URL } from "../constants/API";
import { connect } from "react-redux";

class Home extends Component {
  state = {
    productList: [],
    filterProductList: [],
    page: 1,
    maxPage: 0,
    itemPerPage: 5,
    searchProductName: "",
    searchCategory: "",
    sortBy: "",
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
    let rawData = [...this.state.filterProductList];
    const compareString = (a, b) => {
      if (a.productName < b.productName) {
        return -1;
      }
      if (a.productName > b.productName) {
        return 1;
      }
      return 0;
    };
    switch (this.state.sortBy) {
      case "lowPrice":
        rawData.sort((a, b) => a.price - b.price);
        break;
      case "highPrice":
        rawData.sort((a, b) => b.price - a.price);
        break;
      case "az":
        rawData.sort(compareString);
        break;
      case "za":
        rawData.sort((a, b) => compareString(b, a));
        break;
      default:
        rawData = [...this.state.filterProductList];
        break;
    }
    const currentData = rawData.slice(
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

  inputHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  componentDidMount() {
    this.fetchProduct();
  }

  searchBtnHandler = () => {
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
                  onChange={this.inputHandler}
                />
                <label htmlFor="searchCategory">Product Category</label>
                <select
                  onChange={this.inputHandler}
                  name="searchCategory"
                  className="form-control"
                >
                  <option value="">All Items</option>
                  <option value="kaos">Kaos</option>
                  <option value="celana">Celana</option>
                  <option value="aksesoris">Aksesoris</option>
                </select>
                <button
                  onClick={this.searchBtnHandler}
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
                <label htmlFor="sortBy">Sort by</label>
                <select onChange={this.inputHandler} name="sortBy">
                  <option value="">Default</option>
                  <option value="lowPrice">Lowest Price</option>
                  <option value="highPrice">Highest Price</option>
                  <option value="az">A-Z</option>
                  <option value="za">Z-A</option>
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

const mapStateToProps = (state) => {
  return {
    userGlobal: state.user,
  };
};

export default connect(mapStateToProps)(Home);
