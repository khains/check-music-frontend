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
import Upload from "../components/UploadCopy";

class HomeScreen extends React.Component {
 
  render() {
    return (
      <div id="classicformpage">
        <NavbarPage
            username={this.props.username}
            onLogin={this.props.onLogin}
        />
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
                    Tải nhạc lên
                  </h1>
                  <hr className="hr-light" />
                  <h6 className="mb-4">
                    Bạn là ca sĩ, tác giả bài hát muốn lưu trữ bài hát của mình,
                    để mọi người có thể lên kiểm tra xem có chính xác không.
                  </h6>
                  
                </MDBAnimation>

                <MDBCol md="6" xl="5" className="mb-4">
                  <MDBAnimation type="fadeInRight" delay=".3s">
                    <MDBCard id="classic-card">
                      <MDBCardBody className="white-text">
                        <h3 className="text-center">
                            Tải nhạc lên:
                        </h3>
                        <hr className="hr-light" />
                        
                        <Upload/>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>

        <Footer/>
      </div>
    );
  }
}

export default HomeScreen;