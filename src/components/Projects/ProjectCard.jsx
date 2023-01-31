import React from "react";
import { GitHub } from "@mui/icons-material";
import LaunchIcon from "@mui/icons-material/Launch";
import { Link } from "react-router-dom";
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
              <Link to={gitHubLink}>
                <GitHub />
              </Link>
            )}
            {live && (
              <Link to={"/"}>
                <LaunchIcon />
              </Link>
            )}
            {demo && (
              <Link to={"/"}>
                <span className="">Demo</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
