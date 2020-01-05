import React, { Component } from 'react';



class LoginScreen extends Component {
    state = {
        username: '',
        password: ''
    }

    handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            active: "enable",
        })
        this.props.onLogin(this.state.username, this.state.password);
    }

    render() {
        // console.log(this.state);
        const loading = this.state.active && this.state.active==="enable" ? (
            <span class="spinner-border spinner-border-sm"></span>
        ) : (
            <span>
                Login
            </span>
        );
        return (
            <div className=" login" >
                <div className="all">
                    <form onSubmit = { this.handleSubmit}>
                        <div className="imgcontainer">
                            <img src="http://thuthuat123.com/uploads/2018/01/27/avatar-dep-nhat-49_112148.jpg" alt="Avatar" className="avatar"/>
                        </div>

                        <div className = "container"> 
                            <div className="form-group">
                                <input onChange={this.handleInputChange} className="form-control" name="username" type="text" placeholder="username" required/>
                            </div>

                            <div className="form-group">
                                <input onChange={this.handleInputChange} className="form-control" name="password" type="password" placeholder="password" required/>
                            </div>
                        </div>
                        
                        <div className="text-center">
                            <button className="btn btn-danger btn-login" type="submit">{loading}</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginScreen;
