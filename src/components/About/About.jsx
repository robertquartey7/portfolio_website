import React, { useRef } from "react";
import "./About.css";

import LightModeIcon from "@mui/icons-material/LightMode";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

function About() {
  const linkStyle = {
    textDecoration: "none",
  };

  return (
    <div className="about min__height" id="about">
      <h1 className="about__title">About Me</h1>

      <div className="about__content container-fluid">
        <div className="about__left d-flex flex-column justify-content-center">
          <div className="about__left__top">
            <div className="about__card">
              <LightModeIcon />
              <h3>Experience</h3>
              <p>3+ Months</p>
            </div>
            <div className="about__card">
              <CheckCircleIcon />
              <h3>Completed</h3>
              <p> 7+ Projects</p>
            </div>
            <div className="about__card">
              <BusinessCenterIcon />
              <h3>Skills</h3>
              <p>4+ Frameworks</p>
            </div>
          </div>
          <p className="">
            Hi my name is Robert Quartey and I'm currently a senior at john jay
            criminal justice and also a fellow at the knowledge house, where I’m
            studying technologies like{" "}
            <a href="/" className="text-primary" style={linkStyle}>
              React.js
            </a>{" "}
            <a href="/" style={linkStyle} className="text-primary">
              Node.js
            </a>{" "}
            and{" "}
            <a href="/" style={linkStyle} className="text-primary">
              MongoDB.js
            </a>
            .
          </p>
          <a
            href="./Robert_quartey.docx.pdf"
            className="resume"
            target={"_blank"}
          >
            Download Resume
          </a>
        </div>
        <div className="about__right">
          <div className="about__img">
            <img src={"/images/logocopy.png"} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
