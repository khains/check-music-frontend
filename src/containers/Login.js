import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBFormInline,
  MDBAnimation
} from "mdbreact";
import "./backg.css";

import NavbarPage from "../components/NavbarPage";
import Footer from "../components/Footer";


class ClassicFormPage extends React.Component {
    state = {
        username: '',
        password: ''
    }

    handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            active: "enable",
        })
        this.props.onLogin(this.state.username, this.state.password);
    }
  render() {
    // console.log(this.state);
    const loading = this.state.active && this.state.active==="enable" ? (
        <span class="spinner-border spinner-border-sm"></span>
    ) : (
        <span>
            Đăng nhập
        </span>
    );
    return (
      <div id="classicformpage">

        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow>
                <MDBAnimation
                  type="fadeInLeft"
                  delay=".3s"
                  className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5"
                >
                  <h1 className="h1-responsive font-weight-bold">
                    Đăng nhập
                  </h1>
                  <hr className="hr-light" />
                  <h6 className="mb-4">
                    Đăng nhập ngay để sử dụng chức năng của chúng tôi.
                  </h6>
                  
                </MDBAnimation>

                <MDBCol md="6" xl="5" className="mb-4">
                  <MDBAnimation type="fadeInRight" delay=".3s">
                    <MDBCard id="classic-card">
                      <MDBCardBody className="white-text">
                        <h3 className="text-center">
                          <MDBIcon icon="user" /> Đăng nhập:
                        </h3>
                        <hr className="hr-light" />
                        
                        <MDBInput
                          onChange={this.handleInputChange}
                          className="white-text"
                          iconClass="white-text"
                          label="Your email"
                          icon="envelope"
                          name="username"
                        />
                        <MDBInput
                          onChange={this.handleInputChange}
                          className="white-text"
                          iconClass="white-text"
                          label="Your password"
                          icon="lock"
                          type="password"
                          name="password"
                        />
                        <div onClick = {this.handleSubmit} className="text-center mt-4 black-text">
                            <MDBBtn color="indigo">{loading}</MDBBtn>
                        </div>  
                      </MDBCardBody>
                    </MDBCard>
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>

        
      </div>
    );
  }
}

export default ClassicFormPage;