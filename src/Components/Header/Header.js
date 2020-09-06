import React from 'react';

import "./Header.scss";
import logo from "../../assets/logo.png";
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <header className="head">
             <div className="head__logo-container"><img className="head__logo" src={logo} alt="Logo"/></div>
             <div className="head__text-container">
             <NavLink  className="head__text-link" to="/" activeClassName="head__text-link--active">
             <p>Home</p>
             </NavLink>
             <NavLink className="head__text-link"  to="/story" activeClassName="head__text-link--active">
             <p>Our Story</p>
             </NavLink>
         
             </div>
             
          </header>
        </div>
    );
};

export default Header;