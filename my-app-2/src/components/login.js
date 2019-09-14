import React, { Component } from 'react';
import NavBar from './navbar';
import { Redirect } from 'react-router-dom';
import AuthenticationService from '../services/authenticationService';

class LoginComponent extends Component{
    constructor()
    {
        super()
        this.state={
            username: 'username',
            password: 'password',
            loginFailed: false,
            showSuccessMessage: false
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    loginClicked = () => {
        console.log("username",this.state.username);
        console.log("password",this.state.password);
        AuthenticationService
            .executeJwtAuthenticationService(this.state.username,this.state.password)
            /*.executeBasicAuthenticationService(this.state.username,this.state.password)
            .then( () => {
                AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
                this.props.history.push('/home')
            })*/
            .then( (response) => {
                console.log(response.data.token);
                AuthenticationService.registerSuccessfulLoginForJwt(this.state.username,response.data.token)
                this.props.history.push('/home')
            })
            .catch( () => { 
                    this.setState({showSuccessMessage: false})
                    this.setState({loginFailed: true})
            })
        // if(this.state.username==='testuser1' && this.state.password==='!testuser1')
        // {
        //     this.props.history.push(`/home`)
        //     // this.setState({showSuccessMessage: true})
        //     // this.setState({loginFailed: false})
        // }
        // else
        // {
        //     this.setState({showSuccessMessage: false})
        //     this.setState({loginFailed: true})
        // }
    }

    render()
    {
        if(AuthenticationService.isUserLoggedIn())
            return <Redirect to="/home" />;
        return (<React.Fragment>
            <NavBar />
            <div className="container">
            <h3>Please login</h3>
            {this.state.showSuccessMessage && <div className="alert alert-info">Login Successful!</div>}
            {this.state.loginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
            {!this.state.showSuccessMessage &&
                    <div>
                    <br />
                    <div className="form-row">UserName : <input type="text" name="username" onChange={this.handleChange}></input></div>
                    <div className="form-row">Password : <input type="password" name="password" onChange={this.handleChange}></input></div>
                    <button className="btn btn-primary" onClick={this.loginClicked}>Login</button>
                    </div>}
            </div>
        </React.Fragment>);
    }
}

export default LoginComponent;