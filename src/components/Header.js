import React from 'react';
import styles from './Header.scss'

class Header extends React.Component {
    render() {
        return (
            <div >
                <div className="allproducts">All products</div>
                <div className="grid">
                    <div className="totalproducts"> 24 products </div>
                </div>
            </div>

        )
    }
}

export default Header;