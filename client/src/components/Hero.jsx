import React from 'react';
import { Link } from 'react-scroll';
import './Hero.css';
import { FaLaptopCode } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1>
          Hello, I'm Hatice Yesilova <FaLaptopCode style={{ color: '#fff', marginLeft: '10px' }} />
        </h1>
<h2>
  I'm a <span className="typing">Full-Stack Developer</span>
</h2>
<p>Building beautiful, responsive web apps with React, Node.js, MongoDB, and Express.</p>

        <div className="hero-buttons">
          <Link to="projects" smooth={true} duration={500} className="btn hero-btn">
            View Projects
          </Link>
          <Link to="contact" smooth={true} duration={500} className="btn hero-btn-outline">
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
