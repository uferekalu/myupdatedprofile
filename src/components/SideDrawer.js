/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Link } from "react-router-dom";
import "./SideDrawer.css";
import kalu from "./images/kalu.jpg";

const SideDrawer = ({ show, click }) => {
  const sideDrawerClass = ["sidedrawer"];
  if (show) {
    sideDrawerClass.push("show");
  }

  return (
    <div className={sideDrawerClass.join(" ")}>
      <div className="sidedrawer__profile">
        <div className="sidedrawer__profile__img">
          <img src={kalu} alt="image" />
        </div>
        <div className="sidedrawer__profile__icon">
          <i className="fas fa-user" />
        </div>
      </div>
      <ul className="sidedrawer__links" onClick={click}>
        <li>
          <Link to="/">
            <i className="fas fa-home" />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <i className="fas fa-info-circle" />
            <span>About Me</span>
          </Link>
        </li>
        <li>
          <Link to="/projects">
            <i className="fas fa-tasks" />
            <span>Projects</span>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <i className="fas fa-home" />
            <span>Contact</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideDrawer;
