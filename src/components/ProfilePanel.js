import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
  } from "mdbreact";

class ProfilePanel extends Component {
  // state = {
  //   isOpen: false
  // };
  
  // toggleCollapse = () => {
  //   this.setState({ isOpen: !this.state.isOpen });
  // }

  logout = () => {
    window.localStorage.removeItem("access_token");
    window.location.href = "/";
  }

  render() {
    const display = this.props.username ? (
      <div className="row">
        {/* <span className="navbar-text align-items-center">Xin chào, {this.props.username}!</span>
        <div className="col-3 text-right btn-pro">
          <a
            className="btn btn-info btn-sm align-items-center"
            onClick={this.logout}
          >
           Logout
        </a>
        </div> */}
        <MDBNavbar color="indigo" dark expand="md">
          <MDBNavItem>
            <MDBDropdown>
              <MDBDropdownToggle nav caret>
                <span className="navbar-text align-items-center">Xin chào, {this.props.username}!</span>
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                  <MDBDropdownItem onClick={this.logout}>Logout</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavItem>
        </MDBNavbar>
      </div>
    ) : (
        <Link className="login-color" to="/login">
          Login
        </Link>
      );
      
    return <div className="col-3 profile_panel text-right">{display}</div>;
  }
}
// import { format } from "util";

export default ProfilePanel;
