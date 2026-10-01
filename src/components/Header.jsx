import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const isActive = (path) => location.pathname === path ? "active" : "";

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo">
          <img src={`${import.meta.env.BASE_URL}assets/logos/logo.jpg`} alt="Sharp Computers Logo" />
        </Link>
        <nav className="navbar">
          <ul className={`nav-links ${menuActive ? 'active' : ''}`}>
            <li><Link to="/" className={isActive('/')}>Home</Link></li>
            <li><Link to="/products" className={isActive('/products')}>Products</Link></li>
            <li><Link to="/services" className={isActive('/services')}>Services</Link></li>
            <li><Link to="/about" className={isActive('/about')}>About</Link></li>
            <li><Link to="/contact" className="btn-primary">Contact Us</Link></li>
          </ul>
          <div className={`hamburger ${menuActive ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
