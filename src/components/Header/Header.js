import React from 'react';
import logo from '../../images/logo.png'
import './Header.css';

const Header = () => {
    return (
        <div className="header">
        <img className="logo" src={logo} alt="logo"></img>
        <nav>
        <a href="/shop">Shop</a>
        <a href="/orders">Orders</a>
        <a href="/inventory">Inventory Management</a>
        </nav>
            
        </div>
    );
};

export default Header;