import React, { Component } from "react";

import ProfilePanel from "./ProfilePanel";
import Home from "./Home";
// import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div className="navbar navbar-expand">
        <div className="container align-items-center">
          <Home 
            username={this.props.username}
            onLogin={this.props.onLogin}
          />
          <ProfilePanel
            username={this.props.username}
            onLogin={this.props.onLogin}
          />
        </div>
      </div>
    );
  }
}

export default NavBar;
