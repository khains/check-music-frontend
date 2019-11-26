import React, { Component } from 'react';
import NavBar from "../components/NavBar";
import ConvertMd5 from "../components/ConvertMd5";
// import Check from "../components/Check";


export default class UploadScreen extends Component {
   
    render() {

        return (
            <div>
                <NavBar
                    username={this.props.username}
                    onLogin={this.props.onLogin}
                />
                <div>
                    <ConvertMd5/>
                </div>
            </div>  
        )
    }
}