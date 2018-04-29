import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {combineReducers, createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'

//Components
import Router from './routes/index'
import productsData from './data/productsData.json'
import productsReducer from './reducer/productReducer'

let store = createStore(
    productsReducer,applyMiddleware(thunk)
);


class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <Router/>
            </Provider>
        );
    }
}

export default App;
