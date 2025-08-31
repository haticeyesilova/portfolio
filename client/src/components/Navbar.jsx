import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="hero" smooth={true} duration={500} className="nav-btn">
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} className="nav-btn">
            About
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} className="nav-btn">
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} className="nav-btn">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

