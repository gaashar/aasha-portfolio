import React from "react";

export const Card = ({ info }) => {
  return (
    <div className="skill-card">
      <h3>{info.title}</h3>
      <ul>
        {info.groupItems.map(({ key, value }) => (
          <li key={key}>{value}</li>
        ))}
      </ul>
    </div>
  );
};
