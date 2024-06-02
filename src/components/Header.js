import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/css.css';

const Header = () => {
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
            <li><Link to="/CatalogPage">Catalog</Link></li>
            <li><Link to="/about">About Filmx</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/ourteam">Our Team</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
