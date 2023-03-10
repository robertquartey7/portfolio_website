import React from "react";
import { GitHub } from "@mui/icons-material";
import LaunchIcon from "@mui/icons-material/Launch";

import "./Project.css";

function ProjectCard({
  projectTitle,
  projectDescription,
  gitHubLink,
  imageLink,
  techStack,
  live,
  demo,
}) {
  return (
    <>
      <div className="project__card container">
        <div className="project__img">
          <img src={imageLink} alt="" className="img-fluid" />
          <div className="project__imgcolor"></div>
        </div>
        <div className="card__info text-muted">
          <h6 className="text-primary">Featured Project</h6>
          <h3>{projectTitle}</h3>
          <div className="project__desc">{projectDescription}</div>
          <div className="tech__stack d-flex gap-2">
            {techStack.map((element) => {
              return (
                <span key={element} className="text-muted">
                  {element}
                </span>
              );
            })}
          </div>
          <div className="d-flex gap-2">
            {gitHubLink && (
              <a href={gitHubLink} target="_blank">
                <GitHub />
              </a>
            )}
            {live && (
              <a href={live} target="_blank">
                <LaunchIcon />
              </a>
            )}
            {demo && (
              <a href={demo} target="_blank">
                <span className="">Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
