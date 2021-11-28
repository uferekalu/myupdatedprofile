import React from "react";
import { Link } from "react-router-dom";
import "./Project.css";

const Project = () => {
  return (
    <div className="project">
      <img
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        alt="project"
      />
      <div className="project__info">
        <p className="info__name">Project 1</p>
        <p className="info__description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled
        </p>
        <Link to={`/project/${123}`} className="info__button">
          See Details...
        </Link>
      </div>
    </div>
  );
};

export default Project;
