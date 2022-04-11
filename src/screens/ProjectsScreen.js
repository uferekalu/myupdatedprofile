import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./ProjectsScreen.css";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BiError } from "react-icons/bi";
//components
import Project from "../components/Project";
//Actions
import { getProjects as listProjects } from "../redux/actions/projectAction";

const ProjectsScreen = () => {
  const [filteredProjects, setFilteredProjects] = useState(null);
  const dispatch = useDispatch();
  const [searchItem, setSearchItem] = useState('')
  const [scroll, setScroll] = useState(false)
  const [error, setError] = useState('')

  const getProjects = useSelector(state => state.getProjects);
  console.log("this is filteredProjects", filteredProjects)

  const { projects, loading } = getProjects;

  useEffect(() => {
    setFilteredProjects(projects)
  }, [projects])

  useEffect(
    () => {
      dispatch(listProjects());
    },
    [dispatch]
  );

  window.onscroll = (e) => {
    console.log(document.documentElement.scrollTop)
    if (document.documentElement.scrollTop > 100) {
        setScroll(true)
    } else {
        setScroll(false)
    }
}

const handleSearchForProject = (event) => {
  var projectsArray = projects?.filter((project) => project.name.toLowerCase().includes(event.target.value.toLowerCase()))
  setSearchItem(event.target.value)
  setError(() => {
      if (projectsArray?.length > 0) {
          return null
      } else {
          return "No projects found!"
      }
  })
  setFilteredProjects(projectsArray)
}

const handleFilterByDescription = (event) => {
  var projectsArray = projects?.filter((project) => project.description.toLowerCase().includes(event.target.value.toLowerCase()))
  document.querySelector("[name='filter_input']").value = ""
  setError(null)
  setFilteredProjects(projectsArray)
}

const handleReset = () => {
  setSearchItem("")
  setError(null)
  setFilteredProjects(projects)
}

const handleScroll = () => {
  document.getElementsByTagName('html')[0].scrollIntoView({ behavior: "smooth" })
}

  return (
    <div className="projectscreen">
      {scroll && <BsFillArrowUpCircleFill onClick={handleScroll} className={`scroll`} />}
      <h2 className="projectscreen__title">Projects</h2>
      <div className="filter">
          <div
              className={`filter-input`}
          >
              <AiOutlineSearch className="search" />
              <input
                  onChange={handleSearchForProject}
                  value={searchItem}
                  name="filter_input"
                  type="text"
                  placeholder="Search for a product..."
              />
              {searchItem && 
                  <AiOutlineCloseCircle
                      onClick={handleReset}
                      className={`close-input`}
                  />
              }
          </div>
          <div className="filter-select">
              <select
                  name="filter_select"
                  onChange={handleFilterByDescription}
              >
                  <option value="">Filter by Description</option>
                  <option value="A Mini Shopping app that displays products with add">Shopping app that displays products</option>
                  <option value="A Test platform for assessing the skill level of interviewees ">Test platform for assessing the skill level</option>
                  <option value="This App displays information regarding various interesting places around the world">Application that displays informations about places</option>
                  <option value="This is an application which gives information regarding the location, flag, population">Application that displays informations about countries</option>
                  <option value="This is an application which aids renters to make payments of an apartment in installments">Application that helps renters make installmental payments</option>
              </select>
          </div>
      </div>
      {error &&
          <div className={`error`}>
              <p>
                  <BiError /> {error} <BiError />
              </p>
          </div>
      }
      {loading &&
          <div className={`loading spinner}`}>
              <p><i className="fas fa-spinner fa-spin fa-2x"></i></p>
          </div>
      }
      <div className="projects__list">
        {filteredProjects?.map((filteredProject, index) => (
          <Project key={index} name={filteredProject.name} img={filteredProject.img} projectId={filteredProject._id} description={filteredProject.description} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsScreen;
