import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

export const Tile = ({ project }) => {
  return (
    <div className="tile">
      <div className="tech-container">
        {project.logos.map((logo) => {
          return (
            <div className="logo-container">
              <img src={logo} alt="logo"></img>
            </div>
          );
        })}
      </div>
      <h4 className="title">{project.title}</h4>
      <div className="description">{project.description}</div>
      {project.name !== "Insights" && (
        <div className="link">
          <div className="link-group">
            <i class="fa-solid fa-link"></i>
            <Link to={project.link}>View Project</Link>
          </div>
        </div>
      )}
      {project.name === "Insights" && (
        <div className="tags">
          <div className="tag-group">
            <h5>Domain</h5>
            <span>Healthcare</span>
          </div>
          <div className="tag-group">
            <h5>Used for</h5>
            <div className="used-for-group">
              <span>Data Analytics</span>
              <span>Performance validation</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
