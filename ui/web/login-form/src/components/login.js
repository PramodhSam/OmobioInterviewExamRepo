import React, { Component } from "react";
import {PostData} from '../service/loginpost.js';



export default class Login extends Component {

    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
            redirectToReferrer: false
        };
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    login() {
        if(this.state.username && this.state.password){
            PostData('login',this.state).then((result) => {
                let responseJson = result;
                if(responseJson.userData){
                    sessionStorage.setItem('userData',JSON.stringify(responseJson));
                    this.setState({redirectToReferrer: true});
                }
            });
        }
    }


    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }

    

    render() {
        return (
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" value="Login" onClick={this.login} className="btn btn-primary btn-block">Submit</button>
            </form>
        );
    }
}