import React from 'react';
import {connect} from 'react-redux';

//styles
import styles from './Header.scss'

//Components
import * as actions from '../reducer/actiondata'

class Header extends React.Component {
    render() {
        return (
            <div>
                <div className="allproducts">All products</div>
                <div className="grid">
                    <div className="totalproducts"> {this.props.product.length} products</div>
                </div>
            </div>

        )
    }
}


const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, actions)(Header);