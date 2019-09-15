import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import NavBar from './navbar';
import * as Yup from 'yup';
import AuthenticationService from '../services/authenticationService';

class SignUp extends Component{

    onSubmit = (fields) =>{
        console.log("in on submit",fields);
        let user = {
            username: fields.username,
            password: fields.password,
            firstname: fields.firstName,
            lastname: fields.lastName,
            email: fields.email
        };
        console.log(user);
        AuthenticationService.createUser(user)
            .then( () => this.props.history.push('/login'))
    }

    async validateUsername(value){
        let error;
        let result = await AuthenticationService.doesUsernameExist(value);
        console.log(result);
        if(result == true)
            error = 'Username already exists!';
        return error;
    }

    render() {
        return (
            <Formik
                initialValues={{
                    username: '',
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                }}
                validationSchema={Yup.object().shape({
                    username: Yup.string()
                        .required('Username is required'),
                    firstName: Yup.string()
                        .required('First Name is required'),
                    lastName: Yup.string()
                        .required('Last Name is required'),
                    email: Yup.string()
                        .email('Email is invalid')
                        .required('Email is required'),
                    password: Yup.string()
                        .min(6, 'Password must be at least 6 characters')
                        .required('Password is required'),
                    confirmPassword:  Yup.string()
                        .oneOf([Yup.ref('password'), null], 'Passwords must match')
                        .required('Confirm Password is required')
                })}
                onSubmit={fields => {this.onSubmit(fields)}}
                validateOnChange = {false}
                render={({ errors, status, touched }) => (
                    <div>
                    <NavBar />
                    <div className="container">
                    <h3>Sign Up Now!</h3><br />
                    <Form>
                        <div className="form-group col-md-4 mb-3">
                            <label htmlFor="username">Username</label>
                            <Field name="username" type="text" className={'form-control' + (errors.username && touched.username ? ' is-invalid' : '')} validate={this.validateUsername}/>
                            <ErrorMessage name="username" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group col-md-4 mb-3">
                            <label htmlFor="firstName">First Name</label>
                            <Field name="firstName" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                            <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group col-md-4 mb-3">
                            <label htmlFor="lastName">Last Name</label>
                            <Field name="lastName" type="text" className={'form-control' + (errors.lastName && touched.lastName ? ' is-invalid' : '')} />
                            <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group col-md-4 mb-3">
                            <label htmlFor="email">Email</label>
                            <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group col-md-4 mb-3">
                            <label htmlFor="password">Password</label>
                            <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                            <ErrorMessage name="password" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group col-md-4 mb-3">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <Field name="confirmPassword" type="password" className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} />
                            <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group col-md-4 mb-3">
                            <button type="submit" className="btn btn-primary mr-2">Register</button>
                            <button type="reset" className="btn btn-secondary">Reset</button>
                        </div>
                    </Form>
                    </div>
                    </div>
                )}
            />
        )
    }
}

export default SignUp;