
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/css.css';

const Header = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <header className="navbar navbar-fixed-top">
      <div className="container">
        <button type="button" className="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="brand" href='*'><b>FILMX</b></a>
        <nav className="nav-collapse collapse">
          <ul className="nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li 
              className="dropdown" 
              onMouseEnter={handleMouseEnter} 
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/services">Services</Link>
              {dropdownVisible && (
                <ul className="dropdown-menu">
                  <li><Link to="/services/web-development">Web Development</Link></li>
                  <li><Link to="/services/app-development">App Development</Link></li>
                  <li><Link to="/services/seo-optimization">SEO Optimization</Link></li>
                </ul>
              )}
            </li>
            <li><Link to="/CatalogPage">Catalog</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
