import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Home extends Component {
    render() {
        const upload = this.props.username ? (
            <div>
                <Link className="login-color" to="/upload">
                    UPLOAD
                </Link>
            </div>
        ) : "";
        const admin = this.props.username && this.props.username=== "admin" ? (
            <div>
                <Link className="login-color" to="/admin">
                    ADMIN
                </Link>
            </div>
        ) : "";

        return (
            <div className="container row">
                <div className="col-2 link">
                    <Link className="link-color" to="/">
                        HOME
                    </Link>
                </div>
                <div className="col-2">{upload}</div>
                <div>{admin}</div>
            </div>
        )
    }
}
