import React from 'react';
import { Link } from 'react-router-dom';
import './css.css';
import jQuery from 'jquery'; // Импортируем jQuery

const Header = () => {
  
  jQuery(document).ready(function($){
    $(".dropdown").hover(
        function() { $('.dropdown-menu', this).fadeIn("fast"); },
        function() { $('.dropdown-menu', this).fadeOut("fast"); }
    );
  });

  return (
    <header className="navbar navbar-fixed-top">
        <div className="container">
          <button type="button" className="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="brand" href="#"><b>FILMX</b></a>
          <nav className="nav-collapse collapse">
            <ul className="nav">
              <li><a href="#top">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#pricing">Our Pricing</a></li>
              <li><a href="#team">Our Team</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
      </div>
    </header>
  );
};

export default Header;
