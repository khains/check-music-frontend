import React, { Component } from 'react'
import NavBar from "../components/NavBar";
import axios from "../axios";

export default class AdminScreen extends Component {
    state = {

    }

    onSubmit = (event) => {
        event.preventDefault();
        axios
            .post("/api/user", {
                email: document.getElementById("email").value,
                username: document.getElementById("username").value,
                password: document.getElementById("password").value
            })
            .then((res) => {
                const success = res.data.success; 
                this.setState({
                    success: success
                })
                if(success==="true"){
                    alert(res.data.message);
                    window.location.href = ("/admin")

                }
                else{
                    alert(res.data.message);
                }
            }).catch(err => console.error(err));
        
    }
    render() {
        return (
            <div>
                <NavBar
                    username={this.props.username}
                    onLogin={this.props.onLogin}
                />
                <div className = "container mt-5"> 
                    <div className="text-center textadmin">
                        <p>TẠO TÀI KHOẢN MỚI</p>   
                    </div>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input id="email"  className="form-control" name="email" type="text" placeholder="example@gmail.com" required unique/>
                        </div>
                        <div className="form-group">
                            <input id="username"  className="form-control" name="username" type="text" placeholder="username" required unique/>
                        </div>
                        <div className="form-group">
                            <input id="password" className="form-control" name="password" type="password" placeholder="password" required/>
                        </div>
                        
                        <div className="text-center">
                            <button className="btn btn-danger" type="submit">Xác nhận</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
