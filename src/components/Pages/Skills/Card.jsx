import React, { useState } from "react";
import "./index.scss";

export const Card = ({ info }) => {
  const [selected, setSelected] = useState(0);

  const toggleAccordion = (currentIndex) => {
    setSelected(currentIndex);
  };

  return (
    <div className="skill-card experience-card">
      <div className="skills-header">
        <i class="fa-sharp fa-solid fa-microchip fa-bounce no-repeat fa-xl" />
        <h3 className="title">{info.title}</h3>
      </div>

      <ul className="experience-list">
        {info.groupItems.map(({ key, value, description }) => (
          <li>
            <div className="title" onClick={() => toggleAccordion(key)}>
              {value}
              {key !== selected && (
                <div className="plus">
                  <i className="gg-math-plus" />
                </div>
              )}
            </div>
            <div
              className={key === selected ? "description show" : "description"}
            >
              <p>{description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
