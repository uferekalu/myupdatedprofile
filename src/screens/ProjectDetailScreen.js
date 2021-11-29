import React from "react";
import "./ProjectDetailScreen.css";
import { Link } from "react-router-dom";

const ProjectDetailScreen = () => {
  return (
    <div className="productdetail">
      <div classsName="productdetail__left">
        <div className="left__image">
        <p className="left__name__title">Project 1</p>
          <img
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            alt="project"
          />
        </div>
      </div>
      <div className="productdetail__right">
        <div className="right__info">
          <p className="right__name">Project 1</p>
          <p className="right__desc">DESCRIPTION:</p>
          <p className="info__detail__description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled
          </p>
        </div>
        <div className="productdetail__links">
          <Link to="" className="info__button__preview">
            Preview
          </Link>
          <Link to="" className="info__button__git">
            GitHub
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailScreen;
