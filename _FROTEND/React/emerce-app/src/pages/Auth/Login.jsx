import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import { loginUser } from "../../redux/action/user";
import { connect } from "react-redux";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  inputHandler = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({ [name]: value });
  };

  render() {
    if (this.props.userGlobals.id) {
      return <Navigate to="/" />;
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Login Now</h1>
            <p className="lead">
              Login now and start shopping in the most affordable ecomerce
              playform
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-4 offset-4">
            {this.props.userGlobals.errMsg ? (
              <div className="alert alert-danger">
                {this.props.userGlobals.errMsg}
              </div>
            ) : null}
            <div className="card">
              <div className="card-body">
                <h5 className="font-weight-bold mb-3">Login</h5>

                <input
                  name="username"
                  onChange={this.inputHandler}
                  placeholder="Username"
                  type="text"
                  className="form-control my-2"
                />
                <input
                  name="password"
                  onChange={this.inputHandler}
                  placeholder="Password"
                  type="password"
                  className="form-control my-2"
                />
                <div className="d-flex flex-row justify-content-between align-items-center">
                  <button
                    onClick={() => this.props.loginUser(this.state)}
                    className="btn btn-primary mt-2"
                  >
                    Login
                  </button>
                  <Link to="/register">Or register</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userGlobals: state.user,
  };
};
const mapDispatchToProps = {
  loginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
