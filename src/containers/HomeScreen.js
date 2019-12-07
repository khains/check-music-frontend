import React, { Component } from 'react';
import NavBar from "../components/NavBar";
// import Background from "../components/Background";
import Check from "../components/Check";


export default class HomeScreen extends Component {
   
    render() {

        return (
            <div>
                <NavBar
                    username={this.props.username}
                    onLogin={this.props.onLogin}
                />
                <div>
                    {/* <img src="http://4.bp.blogspot.com/-bU8eKkYiXNY/VDQI4_w-sjI/AAAAAAAAAVA/6bHI3j7yfWM/s1600/pic_06_06.png" className="imgbackground"/> */}
                    <Check/>
                </div>
            </div>  
        )
    }
}
