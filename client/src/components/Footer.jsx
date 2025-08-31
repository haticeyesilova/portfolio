import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Hatice Yeşilova. All Rights Reserved.</p>
      <div className="social-icons">
        <a href="https://github.com/hatice" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://linkedin.com/in/hatice" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="https://twitter.com/hatice" target="_blank" rel="noreferrer"><FaTwitter /></a>
      </div>
    </footer>
  );
};

export default Footer;
