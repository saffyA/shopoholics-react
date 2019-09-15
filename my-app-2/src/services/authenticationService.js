import axios from 'axios';
import { exists } from 'fs';
import getAxios from './axiosApi';

class AuthenticationService{

    createUser(user)
    {
        return axios.post("http://localhost:8080/register",user);
    }

    executeBasicAuthenticationService(username,password){
        return axios.get("http://localhost:8080/basicauth",
            {headers: { authorization: this.createBasicAuthenticationToken(username,password)}}
        );
    }

    createBasicAuthenticationToken(username,password){
        return 'Basic ' + window.btoa(username + ":" + password);
    }

    registerSuccessfulLogin(username,password){
        sessionStorage.setItem("authenticatedUser",username)
        this.setupAxiosInterceptors(this.createBasicAuthenticationToken(username,password))
    }

    executeJwtAuthenticationService(username,password){
        /*return axios.post("http://localhost:8080/authenticate",
            {username,password}
        );*/
        return getAxios().post("http://localhost:8080/authenticate",
            {username,password}
        )
    }

    registerSuccessfulLoginForJwt(username,token){
        sessionStorage.setItem("authenticatedUser",username)
        sessionStorage.setItem("userToken",token)
        //this.setupAxiosInterceptors(this.createJWTToken(token))
    }

    createJWTToken(token){
        return 'Bearer ' + token;
    }

    setupAxiosInterceptors(token)
    {
        axios.interceptors.request.use( (config) => {
            if(this.isUserLoggedIn())
            {
                config.headers.authorization = token
            }
            return config
        })
    }

    isUserLoggedIn()
    {
        let user = sessionStorage.getItem("authenticatedUser")
        if(user === null) return false;
        return true;
    }

    getLoggedInUser()
    {
        let user = sessionStorage.getItem("authenticatedUser")
        if(user === null) return '';
        return user;
    }

    logoutUser()
    {
        sessionStorage.removeItem("authenticatedUser")
        sessionStorage.removeItem("userToken");
    }

    async doesUsernameExist(value)
    {
        
        const result = await getAxios().get("http://localhost:8080/checkUsername/"+value);
        const data = await result.data;
        return data;
    }
}

export default new AuthenticationService();