import React, { Component } from 'react';
import logo from '../../assets/images/ggktech-logo.png';
import './header-styles.scss';

class Header extends Component {
    render() {
        return (
            <div className='header-container'>
                <img src={logo} className='logo-section'/>
            </div>
        )
    }
}

export default Header