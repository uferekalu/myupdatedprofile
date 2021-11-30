import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom"
import "./ProjectDetailScreen.css";
import { Link } from "react-router-dom";

//Actions
import { getProjectDetails } from "../redux/actions/projectAction";

const ProjectDetailScreen = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const navigate = useNavigate();

  const projectDetails = useSelector(state => state.getProjectDetails);

  const { loading, error, project } = projectDetails;

  useEffect(() => {
    if(project && id !== project._id) {
      dispatch(getProjectDetails(id));
    }
  }, [dispatch, project, id]);

  return (
    <div className="productdetail">{loading ? (<h2><i className="fas fa-spinner fa-spin fa-3x"></i></h2>) : error ? (<h2>{error}</h2>) : (
      <>
      <div classsName="productdetail__left">
        <div className="left__image">
        <p className="left__name__title">{project.name}</p>
          <img
            src={project.img}
            alt={project.name}
          />
        </div>
      </div>
      <div className="productdetail__right">
        <div className="right__info">
          <p className="right__name">{project.name}</p>
          <p className="right__desc">DESCRIPTION:</p>
          <p className="info__detail__description">
            {project.description}
          </p>
        </div>
        <div className="productdetail__links">
          <a href={project.weburl} target="_blank" rel="noreferrer" className="info__button__preview">
            Preview
          </a>
          <a href={project.repourl} target="_blank" rel="noreferrer" className="info__button__git">
            GitHub
          </a>
        </div>
      </div>
      </>
    )}
    </div>
  );
};

export default ProjectDetailScreen;
