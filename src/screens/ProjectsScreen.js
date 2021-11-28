import React from 'react'
import './ProjectsScreen.css';

//components
import Project from "../components/Project";

const ProjectsScreen = () => {
    return (
        <div className="projectscreen">
            <h2 className="projectscreen__title">Projects</h2>
            <div className="projects__list">
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
            </div>
        </div>
    )
}

export default ProjectsScreen
