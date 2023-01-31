import React from "react";
import ProjectCard from "./ProjectCard";
import { Project } from "./ProjectJson";
import "./Project.css";

function Projects() {
  return (
    <div id="project" className="project container text-white">
      <h1 className="text-center mb-4">Some Things I've Built </h1>
      <div className="project__box  ">
        {Project.map((element) => {
          return (
            <ProjectCard
              key={element.imageLink}
              projectTitle={element.projectTitle}
              projectDescription={element.projectDescription}
              gitHubLink={element.gitHubLink}
              imageLink={element.imageLink}
              techStack={element.techStack}
              demo={element.demo}
              live={element.live}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
