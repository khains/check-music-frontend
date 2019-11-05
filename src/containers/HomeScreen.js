import React, { Component } from 'react';
import NavBar from "../components/NavBar";


export default class HomeScreen extends Component {
   
    render() {

        return (
            <div>
                <NavBar
                    username={this.props.username}
                    onLogin={this.props.onLogin}
                />
                <div>
                    <img src="http://2.bp.blogspot.com/-wSA8IHz8FCU/V3sylQbfIOI/AAAAAAAAAFI/WJmXSKHLm9UywUcXFG4ZNZ1fXqAtZ3PdQCK4B/s1600/mw_new_background.jpg" className="imgbackground"/>
                </div>
            </div>  
        )
    }
}
