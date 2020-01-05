import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <MDBFooter color="blue-gradient" className="font-small pt-4 footer">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow> 
          <MDBCol md="6">
            <h5 className="title">Check Music</h5>
                <li className="list-unstyled">
                <Link to="/">
                    Home
                </Link>
              </li>
              <li className="list-unstyled">
                <Link to="/upload">
                    Upload
                </Link>
              </li>
              <li className="list-unstyled">
              <Link to="/admin">
                    Admin
                </Link>
              </li>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Contact</h5>
            <li>Liên hệ: 0384748389</li>
            <li>Email: nskhai3897@gmail.com</li>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-2">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <span> Nguyen Sy Khai </span>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;