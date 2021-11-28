import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ click }) => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <h2>My Profile</h2>
        </Link>
      </div>
      <ul className="navbar__links">
        <li>
          <Link to="/" className="home__link">
            <i className="fas fa-home"></i>
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/about" className="about__link">
            <i className="fas fa-info-circle"></i>
            <span>About Me</span>
          </Link>
        </li>
        <li>
          <Link to="/projects" className="project__link">
            <i className="fas fa-tasks"></i>
            <span>Projects</span>
          </Link>
        </li>
        <li>
          <Link to="/contact" className="contact__link">
            <i className="fas fa-home"></i>
            <span>Contact</span>
          </Link>
        </li>
      </ul>
      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
