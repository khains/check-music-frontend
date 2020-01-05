import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

import ProfilePanel from "./ProfilePanel";

class NavbarPage extends Component {
    state = {
        isOpen: false,
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        // const upload = this.props.username ? (
        //     <div>
        //         <Link className="login-color text-size" to="/upload">
        //             Upload
        //         </Link>
        //     </div>
        // ) : "";
        // const admin = this.props.username && this.props.username=== "admin" ? (
        //     <div>
        //         <Link className="login-color text-size" to="/admin">
        //             Admin
        //         </Link>
        //     </div>
        // ) : "";
        return (
            <div>
                <MDBNavbar color="indigo" dark expand="md">
                    <MDBNavbarBrand>
                        <strong className="white-text">Check Music</strong>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={this.toggleCollapse} />
                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                        <MDBNavbarNav left>
                            <MDBNavItem>
                                <MDBNavLink to="/">Home</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="/upload">Upload</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="/admin">Admin</MDBNavLink>
                            </MDBNavItem>
                            {/* <MDBNavItem>
                                    <MDBDropdown>
                                        <MDBDropdownToggle nav caret>
                                        <span className="mr-2">Dropdown</span>
                                        </MDBDropdownToggle>
                                        <MDBDropdownMenu>
                                        <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                                        <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                                        <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                        <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                        </MDBDropdownMenu>
                                    </MDBDropdown>
                                </MDBNavItem> */}
                        </MDBNavbarNav>
                        <MDBNavbarNav right>
                            <MDBNavItem>
                                <ProfilePanel
                                    username={this.props.username}
                                    onLogin={this.props.onLogin}
                                />
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
                {/* <ProfilePanel
                    username={this.props.username}
                    onLogin={this.props.onLogin}
                /> */}
            </div>
        );
    }
}

export default NavbarPage;