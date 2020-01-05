import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";
import {
    MDBMask, MDBRow, MDBCol, MDBView, MDBContainer
} from "mdbreact";
import "./backg.css";
// import Navbar from "../components/NavBar";
import Check from "../components/Check";
import Footer from "../components/Footer";
import NavbarPage from "../components/NavbarPage";


class HomeScreen extends React.Component {
    
    render() {
        
        return (
            <div id="videobackground">
                <NavbarPage
                    username={this.props.username}
                    onLogin={this.props.onLogin}
                />

                <MDBView>
                    <video className="video-intro" poster="https://mdbootstrap.com/img/Photos/Others/background.jpg" playsInline
                        autoPlay muted="" loop>
                        <source src="https://mdbootstrap.com/img/video/animation.mp4" type="video/mp4" />
                    </video>
                    <MDBMask className="d-flex justify-content-center align-items-center gradient">
                        <MDBContainer className="px-md-3 px-sm-0 ">
                            <MDBRow>
                                <MDBCol md="12" className="mb-4 white-text text-center form-1">
                                    <Check/>
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