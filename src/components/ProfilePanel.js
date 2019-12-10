import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProfilePanel extends Component {
  logout = () => {
    window.localStorage.removeItem("access_token");
    window.location.href = "/";
  }

  render() {
    const display = this.props.username ? (
      <div className="row">
        <span className="navbar-text align-items-center">Xin chào, {this.props.username}!</span>
        <div className="col-3 text-right">
          <a
            className="btn btn-info btn-sm align-items-center"
            onClick={this.logout}
          >
           Logout
        </a>
        </div>
      </div>
    ) : (
        <Link className="login-color" to="/login">
          <a
            className="btn btn-primary btn-sm"
          >
            Login
          </a>
        </Link>
      );
      
    return <div className="col-3 profile_panel text-right">{display}</div>;
  }
}
// import { format } from "util";

export default ProfilePanel;
