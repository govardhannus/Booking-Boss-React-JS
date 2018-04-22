import React, {Component} from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import Home from '../containers/Home'

class index extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Route path="/" component={Home}/>
            </BrowserRouter>
        )
    }
}

export default index;