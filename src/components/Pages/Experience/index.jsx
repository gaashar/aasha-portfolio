import React from "react";
import { HistoryCard } from "./historyCard";
import { timelineData } from "./timelineData";
import "./index.scss";

export const Experience = () => (
  <div class="main-body timeline-container">
    {timelineData.map((card, index) => (
      <HistoryCard data={card} key={index} />
    ))}
  </div>
);
