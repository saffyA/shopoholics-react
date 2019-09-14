import React, { Component } from 'react';
//import axios from 'axios';
import AuthenticationService from '../services/authenticationService';
import getAxios from '../services/axiosApi'

class Products extends Component{
    constructor()
    {
        super()
        this.state = {
            productList: []
        };
    }

    componentDidMount(){
        getAxios().get("http://localhost:8080/categories"
        //,{ headers: { authorization: 'Basic ' + window.btoa("testuser1:!testuser1") } }
        ).then(response => this.setState({productList: response.data}));
    }

    render(){
        console.log("product list",this.state.productList);
        return (<React.Fragment>
            {this.state.productList.map( category => 
            { return (<div><h4>{category.categoryName}</h4>
                <table className="table">
                    <thead>
                        <th style={{width: "33%"}}>
                            Product Name
                        </th>
                        <th style={{ width: "33%"}}>
                            Price
                        </th>
                        {AuthenticationService.isUserLoggedIn() &&
                        <th style={{ width: "33%"}}>
                            Whatsay!
                        </th>}
                    </thead>
                    <tbody>
                    {category.productSet.map( product => 
                        {return <tr>
                            <td>{product.productName}</td>
                            <td>{product.price}</td>
                            {AuthenticationService.isUserLoggedIn() &&
                            <td><button className="btn btn-primary">Add to cart</button></td>}
                        </tr>;}
                    )}
                    </tbody>
            </table><br/></div>); }
            )}
        </React.Fragment>);
    }
}

export default Products;