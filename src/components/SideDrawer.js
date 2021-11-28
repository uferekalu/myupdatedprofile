import React from "react";
import { Link } from "react-router-dom";
import "./SideDrawer.css";

const SideDrawer = ({ show, click }) => {
  const sideDrawerClass = ["sidedrawer"];
  if (show) {
    sideDrawerClass.push("show");
  }

  return (
    <div className={sideDrawerClass.join(" ")}>
      <ul className="sidedrawer__links" onClick={click}>
        <li>
          <Link to="/">
            <i className="fas fa-home"></i>
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <i className="fas fa-info-circle"></i>
            <span>About Me</span>
          </Link>
        </li>
        <li>
          <Link to="/projects">
            <i className="fas fa-tasks"></i>
            <span>Projects</span>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <i className="fas fa-home"></i>
            <span>Contact</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideDrawer;
