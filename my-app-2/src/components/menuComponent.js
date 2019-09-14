import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import AuthenticationService from '../services/authenticationService';

class MenuComponent extends Component{
    render()
    {
        const loggedInUser = AuthenticationService.getLoggedInUser();
        return <div style={{ float: "right" }}>
            { loggedInUser==='' && <div>Welcome User! <Link className="m-2" to="/login">Login</Link><Link className="m-2" to="/signUp">Sign Up</Link></div>}
            { loggedInUser != '' && <div>Welcome {loggedInUser} <Link to="/logout" className="m-2" onClick={AuthenticationService.logoutUser}>Logout</Link></div>}
        </div>;
    }

}

export default withRouter(MenuComponent);
