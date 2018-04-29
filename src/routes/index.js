import React, {Component} from 'react';
import {Route, BrowserRouter,Redirect} from 'react-router-dom';

//components
import Home from '../containers/Home'
import Login from '../components/Login'

class index extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route path="/login/" component={Login}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default index;