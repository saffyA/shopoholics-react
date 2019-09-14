import React, { Component } from 'react';
import LoginComponent from './login';
import App from '../App';
import SignUp from './signUp';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AuthenticatedRoute from './authenticatedRoute';

class ShopoholicsApp extends Component{
    render(){
        return (
            <>
                <Router>
                    <>
                        <Switch>
                            <Route path="/" exact component={App} />
                            <Route path="/login" exact component={LoginComponent} />
                            <Route path="/signUp" exact component={SignUp} />
                            <AuthenticatedRoute path="/home" exact component={App} />
                            <AuthenticatedRoute path="/logout" exact component={App} />
                        </Switch>
                    </>
                </Router>
            </>
        );
    }

}

export default ShopoholicsApp;