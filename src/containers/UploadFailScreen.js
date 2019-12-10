import React, { Component } from 'react';
import NavBar from "../components/NavBar";
// import Background from "../components/Background";
// import Check from "../components/Check";


export default class UploadFailScreen extends Component {
   
    render() {

        return (
            <div>
                <NavBar
                    username={this.props.username}
                    onLogin={this.props.onLogin}
                />
                <div className="container">
                    <h2>Hãy đăng nhập để Upload!!!</h2>
                </div>
            </div>  
        )
    }
}
