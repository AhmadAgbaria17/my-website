import React from 'react';
import { NavLink ,Link } from 'react-router-dom';
import './header.css'

const Header = () => {
  return (
    <div>
      <header>
        <Link to="/" className="logo">
          Ahmad's WebSite
        </Link>

        <ul className="flex">
          <li className="main-list">  
          <NavLink className="main-link" to="/services">Services</NavLink>
          </li>

          <li className="main-list">  
          <NavLink className="main-link" to="/projects">Projects</NavLink>
          </li>

          <li className="main-list">  
          <NavLink className="main-link" to="/contacts">Contacts</NavLink>
          </li>

        </ul>

      </header>
    </div>
  );
}

export default Header;
