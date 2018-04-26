import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {combineReducers, createStore} from 'redux';

import Router from './routes/index'
import productsData from './data/productsData.json'
import productsReducer from './reducer/productReducer'


const rootReducer = combineReducers({
    products: productsReducer
});

let store = createStore(
    rootReducer,
    {
        products: productsData // initial store values
    },
);


class App extends Component {

    render() {
        return (
            <Provider>
                <Router/>
            </Provider>
        );
    }
}

export default App;
