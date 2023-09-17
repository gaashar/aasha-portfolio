import React from "react";
import { HistoryCard } from "./historyCard";
import { timelineData } from "./timelineData";
import "./index.scss";

export const Experience = () => (
  <div class="main-body">
    <div class="heading">
      <h3>WORK HISTORY</h3>
      <p>Companies and projects I worked on in the chronological order, </p>
    </div>
    <div class="timeline-container">
      {timelineData.map((card, index) => (
        <HistoryCard data={card} key={index} />
      ))}
    </div>
  </div>
);
