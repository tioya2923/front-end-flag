import React from "react";


import {
    Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink
} from "./NavbarElements"


const Navbar = () => {

    return (

        <div>
            <Nav className="nav">
                <Bars className="bars" />
                <NavMenu className="navmenu">
                    <NavLink to='/Logo'>Logo</NavLink>
                    <NavLink to='/Home'>Home</NavLink>
                    <NavLink to='/Blog'>Blog</NavLink>
                    <NavLink to='/About'>About Us</NavLink>
                    <NavLink to='/Contacts'>Contacts Us</NavLink>
                </NavMenu>
                <NavBtn >
                    <NavBtnLink to='Subscribe'>Subscribe</NavBtnLink>
                </NavBtn>
            </Nav>
        </div>
    );

}

export default Navbar;