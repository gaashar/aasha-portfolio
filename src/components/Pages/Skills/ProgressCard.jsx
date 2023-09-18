import React from "react";

export const ProgressCard = ({ skills }) => {
  const getPercentageBarStyles = (percent) => {
    return {
      width: percent,
    };
  };

  return (
    <div className="skill-card">
      <div className="skills-header">
        <i class="fa-solid fa-code fa-bounce no-repeat fa-lg fa-spin-hover" />
        <h3 className="title">{skills.title}</h3>
      </div>
      {skills.groupItems.map((skill) => {
        return (
          <div className="skills-container">
            <span className="title">{skill.value}</span>
            <div className="skills-bar">
              <span
                className="percentage-indicator"
                style={getPercentageBarStyles(skill.percentage)}
              >
                <span className="percentage-tooltip">{skill.percentage}</span>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
