import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./ProjectsScreen.css";

//components
import Project from "../components/Project";

//Actions
import { getProjects as listProjects } from "../redux/actions/projectAction";

const ProjectsScreen = () => {
  const dispatch = useDispatch();

  const getProjects = useSelector(state => state.getProjects);

  const { projects, loading, error } = getProjects;

  useEffect(
    () => {
      dispatch(listProjects());
    },
    [dispatch]
  );

  return (
    <div className="projectscreen">
      <h2 className="projectscreen__title">Projects</h2>
      <div className="projects__list">
        {loading
          ? <h2><i className="fas fa-spinner fa-spin fa-3x"></i></h2>
          : error
            ? <h2>
                {error}
              </h2>
            : projects.map(project =>
                <Project
                  key={project._id}
                  projectId={project._id}
                  name={project.name}
                  weburl={project.weburl}
                  repourl={project.repourl}
                  img={project.img}
                  description={project.description}
                />
              )}
      </div>
    </div>
  );
};

export default ProjectsScreen;
