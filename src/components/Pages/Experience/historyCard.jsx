import React from "react";

export const HistoryCard = ({ data }) => (
  <div className="history-card">
    <div className="history-card-content">
      <div className="title-container">
        <h4>{data.title}</h4>
        <time>{data.date}</time>
      </div>
      <div className="company-container">
        <h5>{data.company}</h5>
        <span>{data.logo}</span>
      </div>
      <div className="project-container">
        {data.project && <h5>{data.project}</h5>}
        <span>{data.description}</span>
      </div>
      <span className="circle" />
    </div>
  </div>
);
