import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  NavbarBrand,
  NavbarText,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class MyNavbar extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" light>
          <NavbarBrand>Emerce</NavbarBrand>
          <Nav>
            <NavbarText>Hello {this.props.userGlobal.username}</NavbarText>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Pages
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem right>
                  <Link to="/cart">Cart</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/history">History</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/admin">Admin</Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userGlobal: state.user,
  };
};

export default connect(mapStateToProps)(MyNavbar);
