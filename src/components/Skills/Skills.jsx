import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./Skills.css";

function Skills() {
  const frontend = ["HTML", "Bootstrap", "Reactjs", "CSS3"];
  const backend = ["Nodejs", "Express", "Flask"];
  return (
    <div className="skills" id="skills">
      <h1 className="skills__title">Skills</h1>
      <p className="text-primary">My Technical level</p>
      <div className="technical__skills container gap-2">
        <div className="skills__card">
          <h3>Frontend</h3>
          <div className="inner__card">
            {frontend.map((element) => {
              return (
                <div key={element}>
                  <CheckCircleIcon fontSize="small" />
                  <h5>{element}</h5>
                </div>
              );
            })}
          </div>
        </div>
        <div className="skills__card">
          <h3>Backend</h3>
          <div className="inner__card">
            {backend.map((element) => {
              return (
                <div key={element}>
                  <CheckCircleIcon fontSize="small" />
                  <h5>{element}</h5>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
