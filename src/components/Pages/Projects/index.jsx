import "./index.scss";
import { Accordion } from "./Accordion";
import { useState } from "react";

const projectList = [
  {
    id: 1,
    title: "Insights Dashboard Platform",
    content: (
      <>
        <h3>ABOUT</h3>
        <p>
          lorem ipsum Irure voluptate ipsum in excepteur et. Commodo sunt id
          fugiat fugiat minim voluptate excepteur amet nostrud dolor dolor
          deserunt ea. Nostrud qui laboris nulla deserunt magna sint officia.
          Sit consequat quis deserunt fugiat aliqua est ea proident eiusmod ad
          duis labore ad occaecat.
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: "Musicaly - [Self built project]",
    content:
      "lorem ipsum Irure voluptate ipsum in excepteur et. Commodo sunt id fugiat fugiat minim voluptate excepteur amet nostrud dolor dolor deserunt ea. Nostrud qui laboris nulla deserunt magna sint officia. Sit consequat quis deserunt fugiat aliqua est ea proident eiusmod ad duis labore ad occaecat.",
  },
];

export const Projects = () => {
  const [active, setActive] = useState(null);

  const handleToggle = (index) => {
    if (active === index) {
      setActive(null);
    } else {
      setActive(index);
    }
  };

  return (
    <div class="main-body">
      <div class="card">
        <div class="card-body">
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
      </div>
    </div>
  );
};
