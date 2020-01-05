import React, { Component } from 'react';
import NavbarPage from "../components/NavbarPage";



export default class AdminFailScreen extends Component {
   
    render() {

        return (
            <div>
                <NavbarPage
                    username={this.props.username}
                    onLogin={this.props.onLogin}
                />
                <div className="container">
                    <h2>Hãy đăng nhập với quyền admin!!!</h2>
                </div>
            </div>  
        )
    }
}
