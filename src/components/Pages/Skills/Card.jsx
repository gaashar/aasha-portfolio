import React, { useState } from "react";
import "./index.scss";

export const Card = ({ info }) => {
  const [selected, setSelected] = useState(0);

  const toggleAccordion = (currentIndex) => {
    if (currentIndex === selected) return setSelected(null);

    setSelected(currentIndex);
  };

  return (
    <div className="skill-card experience-card">
      <div className="skills-header">
        <i class="fa-sharp fa-solid fa-microchip fa-bounce no-repeat fa-xl" />
        <h3 className="title">{info.title}</h3>
      </div>

      <ul className="experience-list">
        {info.groupItems.map(({ key, value }) => (
          <li>
            <div className="title" onClick={() => toggleAccordion(key)}>
              {value}
              {key === selected ? (
                <i class="gg-math-minus"></i>
              ) : (
                <i className="gg-math-plus" />
              )}
            </div>
            <div
              className={key === selected ? "description show" : "description"}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                perspiciatis explicabo delectus. Consequatur natus alias ut
                exercitationem incidunt soluta recusandae quisquam odit et
                molestiae, fugiat tempora quasi consequuntur culpa sunt.
              </p>
            </div>
            {/* <div>
              <div className="experience-section">
                Single Page Applications (SPA)
                <i className="gg-math-plus" />
              </div>
              <div className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                perspiciatis explicabo delectus. Consequatur natus alias ut
                exercitationem incidunt soluta recusandae quisquam odit et
                molestiae, fugiat tempora quasi consequuntur culpa sunt.
              </div>
            </div> */}
          </li>
        ))}
      </ul>
    </div>
  );
};
