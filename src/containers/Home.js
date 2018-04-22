import React, { Component } from 'react';

//Styles
import styles from './Home.css';

//Components
import Header from '../components/Header'


export default class Home extends React.Component {
    render(){
        return(
            <div className="mainContainer">
                <div className="fullContainer">
                    <Header/>
                    <div>hi</div>
                </div>
            </div>

        )
    }
}