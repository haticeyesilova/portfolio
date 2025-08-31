import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaJsSquare, FaGitAlt } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2>About Me</h2>
        <p>
          I'm Hatice, a passionate Software Engineer specializing in full-stack development.
          I love building interactive web applications using React, Node.js, Express, and MongoDB.
        </p>

        <div className="skills">
          <div className="skill-card">
            <FaReact size={50} color="#61DBFB"/>
            <p>React</p>
          </div>
          <div className="skill-card">
            <FaNodeJs size={50} color="#68A063"/>
            <p>Node.js</p>
          </div>
          <div className="skill-card">
            <FaDatabase size={50} color="#f0db4f"/>
            <p>MongoDB</p>
          </div>
          <div className="skill-card">
            <FaJsSquare size={50} color="#f7df1e"/>
            <p>JavaScript</p>
          </div>
          <div className="skill-card">
            <p style={{fontSize:'50px', margin:0, color:'#3178C6'}}>TS</p>
            <p>TypeScript</p>
          </div>
          <div className="skill-card">
            <p style={{fontSize:'50px', margin:0, color:'#FF7F50'}}>SQL</p>
            <p>SQL</p>
          </div>
          <div className="skill-card">
            <FaGitAlt size={50} color="#F1502F"/>
            <p>Git</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
