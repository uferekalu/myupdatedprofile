import React from "react";
import { Link } from "react-router-dom";
import "./Project.css";

const Project = ({ name, projectId, img, description }) => {
  return (
    <div className="project">
      <img src={img} alt={name} />
      <div className="project__info">
        <p className="info__name">
          {name}
        </p>
        <p className="info__description">
          {description.substring(0, 100)}...
        </p>
        <Link to={`/project/${projectId}`} className="info__button">
          See Details...
        </Link>
      </div>
    </div>
  );
};

export default Project;
