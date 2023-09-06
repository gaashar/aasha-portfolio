import React from "react";

export const HistoryCard = ({ data }) => (
  <div class="history-card">
    <div class="history-card-content">
      <div class="title-container">
        <h4>{data.title}</h4>
        <time>{data.date}</time>
      </div>
      <div class="company-container">
        <h5>{data.company}</h5>
        <span>{data.logo}</span>
      </div>
      <div class="project-container">
        {data.project && <h5>{data.project}</h5>}
        <span>{data.description}</span>
      </div>
      <span className="circle" />
    </div>
  </div>
);
