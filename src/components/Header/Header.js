import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const routeStyle = {
        fontWeight: "bold",
        color: "black"
    }
    return (
        <div className="header-container">
            <header>
            <NavLink className="link-style" to="/home"
            // activeClassName="active"
            activeStyle={routeStyle}
            >Home</NavLink>

            <NavLink className="link-style" to="/service" 
            activeStyle={routeStyle}
            > Services</NavLink>

            <NavLink className="link-style" to="/about" 
            activeStyle={routeStyle}
            >About Us</NavLink>

            <NavLink className="link-style" to="/features" 
            activeStyle={routeStyle}
            >Features</NavLink>

            <h1 className="m-3">Mono Bhuiyan Arabic Learning Institute</h1>

            </header>
        </div>
    );
};

export default Header;