import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import HomeScreen from "./containers/HomeScreen";
import LoginScreen from "./containers/LoginScreen";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import axios from "axios";
import "./App.css";

export default class App extends Component {
  state = {
    username: '',
    id: '',  
  };

  componentDidMount() {
    //check login
    const access_token = window.localStorage.getItem("access_token")
    axios.get("http://localhost:6969/api/auth/check?access_token="+access_token)
      .then(response => {
        if(response.data.success){
          this.setState({
            username: response.data.user.username,
            id: response.data.user.id
          });
        }else {
          this.props.history.push("/login")
        }
      }).catch(error =>{
        console.log(error)
      })
  }

  _onLogin = (username, password) => {
    axios
      .post("http://localhost:6969/api/auth/login", {
        username: username,
        password: password
      })
      .then(response => {
        if(response.data.success){
          window.localStorage.setItem("access_token", response.data.access_token)
          this.setState({
            username: response.data.user.username,
            id: response.data.id
          });
          this.props.history.push("/");
        }
        else {
          alert(response.data.message);
        }
        // console.log(response.data.message);
      })
      .catch(err => console.error(err));
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={props => {
                
                return <HomeScreen
                {...props}
                username={this.state.username}
                onLogin={this._onLogin}
                />;
                
              }}
            />
            <Route path="/login"
              render={props => {
                if (this.state.username) {
                  props.history.push("/");
                  return "";
                }
                return <LoginScreen
                  {...props}
                  username={this.state.username}
                  onLogin={this._onLogin}
                />;
              }}
            />
          </Switch>
        </BrowserRouter>
      </div>
    )           
  }
}
