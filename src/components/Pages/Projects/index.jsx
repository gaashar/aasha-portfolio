import "./index.scss";
import { Tile } from "./Tile";
// import { useState } from "react";
import { projectList } from "./projectInfo";

export const Projects = () => {
  // const [active, setActive] = useState(null);

  // const handleToggle = (index) => {
  //   if (active === index) {
  //     setActive(null);
  //   } else {
  //     setActive(index);
  //   }
  // };

  return (
    <div className="main-body">
      <div className="heading">
        <h3>PROJECTS</h3>
        <span>
          List of React based projects I worked on, as part of my previous
          employer and also a Sample UI project I built for getting familiar
          with frontend tach stacks.
        </span>
      </div>
      <div className="project-list">
        {projectList.map((project) => (
          <Tile project={project} />
        ))}
      </div>

      {/* <div className="card">
        <div className="card-body">
          {projectList.map((project) => {
            return (
              <Accordion
                key={project.id}
                active={active}
                handleToggle={handleToggle}
                project={project}
              />
            );
          })}
        </div>
      </div> */}
    </div>
  );
};
