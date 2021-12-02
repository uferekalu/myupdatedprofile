import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./ProjectsScreen.css";

//components
import Project from "../components/Project";

//Actions
import { getProjects as listProjects } from "../redux/actions/projectAction";

const ProjectsScreen = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const getProjects = useSelector(state => state.getProjects);

  const { projects, loading, error } = getProjects;

  useEffect(
    () => {
      dispatch(listProjects());
    },
    [dispatch]
  );

  const filteredProjects =
    search.length === 0
      ? projects
      : projects.filter(project =>
          project.name.toLowerCase().includes(search.toLowerCase())
        );

  return (
    <div className="projectscreen">
      <h2 className="projectscreen__title">Projects</h2>
      <input
        type="text"
        placeholder="Search project..."
        className="search__project"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <div className="projects__list">
        {loading
          ? <h2>
              <i className="fas fa-spinner fa-spin fa-2x" />
            </h2>
          : error
            ? <h2>
                {error}
              </h2>
            : filteredProjects
                .sort(
                  (a, b) =>
                    a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1
                )
                .map(project =>
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
