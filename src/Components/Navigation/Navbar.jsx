import React, { useState } from "react";
import Hamburger from 'hamburger-react';
import { ReactComponent as Brand } from '../assets/icons/logo.svg';
import { NavLink } from "react-router-dom";
import {NavBtn, NavBtnLink} from './NavbarElements';
import "../Styles/navbar.css";




const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);


    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    return (

        <nav className="navbar">
            <div className="container-navbar">
                <div className="logo">
                <Brand />
                </div>
                <div className="menu-icon" onClick={handleShowNavbar}>
                    <Hamburger />
                </div>
                <div className={`nav-links ${showNavbar && 'active'}`}>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/blog">Blog</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        {/* <li><NavLink to="/subscribe">Subscribe</NavLink> </li> */}
                        
                        <NavBtn>
                            <NavBtnLink to="/subscribe">Subscribe</NavBtnLink>
                        </NavBtn>
                        
                    </ul>
                </div>
            </div>
        </nav>


    );

}

export default Navbar;