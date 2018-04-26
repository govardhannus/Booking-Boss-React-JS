import React, {Component} from 'react';
import fire from '../config/FireBase'
import {Button} from "react-bootstrap";

//Styles
import styles from './Home.scss';

//Components
import Header from '../components/Header'
import Products from '../components/Products'
import Login from '../components/Login'

var loginAction = "login";
var signupAction = "signup";

export default class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            per_page: 20,
            user: {}
        }
        this.getperpage = this.getperpage.bind(this);
        this.logout = this.logout.bind(this);
    }

    componentDidMount() {
        this.authListener();
    }

    getperpage(event) {
        this.setState({
            per_page: event.target.value
        });
    }

    authListener() {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({user});
            } else {
                this.setState({user: null})
            }

        })
    }

    logout() {
        fire.auth().signOut();
    }

    navigateToLogin(action) {
        this.props.history.push('/login');
    }

    render() {
        return (
            <div className="mainContainer">
                {
                    this.state.user ?
                    <div className="fullContainer">
                        <Header/>
                        {
                            this.state.user ?
                                <Button
                                    block
                                    bsSize="large"
                                    type="submit"
                                    onClick={this.logout}
                                > Logout </Button> :
                                <div>

                                    <Button
                                        block
                                        bsSize="large"
                                        type="submit"
                                        onClick={this.navigateToLogin.bind(this)}
                                    >
                                        Login
                                    </Button>
                                </div>
                        }


                        <div className="dropdown">
                            <div className="dropdown2">
                                <select name="navyOp" onChange={this.getperpage}>
                                    <option value="20" selected="selected">20 per page</option>
                                    <option value="8">8 per page</option>
                                    <option value="4">4 per page</option>
                                </select>
                            </div>
                        </div>
                        <div className="hr"></div>
                        <Products perpage={this.state.per_page}/>
                    </div> : <div> <Login/></div>
                }

            </div>

        )
    }
}