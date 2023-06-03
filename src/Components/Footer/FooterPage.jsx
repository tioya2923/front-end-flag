import React from 'react'
import { NavLink } from "react-router-dom";
import { ReactComponent as Brand } from '../assets/icons/logo.svg';
import '../Styles/footer.css';

const FooterPage = () => {
  return (
    <div className='footer'>
      <div className='container-footer'>
        <div className='logo-footer'>
          <Brand />
        </div>
        <div className='nav-links-footer'>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/blog">Blog</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/privacy">Privacy Policy</NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default FooterPage
