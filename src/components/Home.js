import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Home extends Component {
    render() {
        const upload = this.props.username ? (
            <div>
                <Link className="login-color text-size" to="/upload">
                    UPLOAD
                </Link>
            </div>
        ) : "";
        const admin = this.props.username && this.props.username=== "admin" ? (
            <div>
                <Link className="login-color text-size" to="/admin">
                    ADMIN
                </Link>
            </div>
        ) : "";

        return (
            <div className="container row">
                <div className="col-3 col-xl-2 link">
                    <Link className="text-size" to="/">
                        HOME
                    </Link>
                </div>
                <div className="col-3 col-xl-2">{upload}</div>
                <div className="col-3 col-xl-2">{admin}</div>
            </div>
        )
    }
}
