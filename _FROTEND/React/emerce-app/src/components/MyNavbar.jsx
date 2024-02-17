import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  NavbarBrand,
  NavbarText,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../redux/action/user";

class MyNavbar extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" light>
          <NavbarBrand>Emerce</NavbarBrand>
          <Nav>
            {this.props.userGlobal.username ? (
              <>
                <NavbarText>Hello {this.props.userGlobal.username}</NavbarText>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Pages
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem right>
                      <Link to="/cart">
                        Cart ({this.props.cartGlobal.cartList.length})
                      </Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link to="/history">History</Link>
                    </DropdownItem>

                    {this.props.userGlobal.role === "admin" ? (
                      <DropdownItem>
                        <Link to="/admin">Admin</Link>
                      </DropdownItem>
                    ) : null}
                    <DropdownItem divider />
                    <DropdownItem onClick={this.props.logoutUser}>
                      Logout
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </>
            ) : (
              <NavItem>
                <NavbarText>
                  <Link to="/login">Login</Link> |{" "}
                  <Link to="/register">Register</Link>
                </NavbarText>
              </NavItem>
            )}
          </Nav>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userGlobal: state.user,
    cartGlobal: state.cart,
  };
};

const mapDispatchToProps = {
  logoutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyNavbar);
