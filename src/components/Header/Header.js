import React from 'react';
import { NavLink } from 'react-router-dom';
import { Bars, Nav, NavMenu } from '../Navbar/NavbarElements';
import './Header.css';


const Header = () => {
    const routeStyle = {
        color: "red"
    }
    return (
        <div  className="header-container">
            <header>
                <section>
                <>
                    <Nav>
                        <Bars/>
                        <NavMenu className="mx-auto">
                            <NavLink activeStyle={routeStyle}  to="/home" >
                                Home
                            </NavLink>
                            <NavLink activeStyle={routeStyle} className="link-style" to="/service" >
                                Service
                            </NavLink>
                            <NavLink activeStyle={routeStyle} className="link-style" to='/about' >
                                About
                            </NavLink>
                            <NavLink activeStyle={routeStyle} className="link-style" to="/features" >
                                Features
                            </NavLink>
                        </NavMenu>
                    </Nav>
                </>
                </section>
                <section>
                    <div className="">
                        <h1>Mono Bhuiyan Arabic Learning Institute</h1>
                        <p>Quran  is Arabic language.</p>
                    </div>
                </section>
            </header>
        </div>
    );
};

export default Header;