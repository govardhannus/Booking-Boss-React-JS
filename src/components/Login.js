import React, {Component} from "react";
import {Button, FormGroup, FormControl, ControlLabel} from "react-bootstrap";
import "./Login.scss";
import fire from '../config/FireBase'

export default class Login extends Component {
    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }
    handleSubmit = event => {
        event.preventDefault();
    }

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };
        this.login = this.login.bind(this);
        this.signUp = this.signUp.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    login(e) {
        var log;
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
        }).catch((error => {
            console.log(error);
        }))
        this.navigateToScreen();
    }

    navigateToScreen() {
        this.props.history.push('/');
    }

    signUp(e) {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .catch((error) => {
                    console.log(error);
                }
            )
        this.navigateToScreen();
    }


    render() {
        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="email" bsSize="large">
                        <ControlLabel>Email</ControlLabel>
                        <FormControl
                            autoFocus
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                        />
                    </FormGroup>
                    <Button
                        block
                        bsSize="large"
                        bsStyle="primary"
                        disabled={!this.validateForm()}
                        type="submit"
                        onClick={this.login}>Login</Button>
                    <Button
                        block
                        bsSize="large"
                        type="submit"
                        disabled={!this.validateForm()}
                        bsStyle="primary"
                        onClick={this.signUp}>SignUp</Button>
                </form>
            </div>
        );
    }
}