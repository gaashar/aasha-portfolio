import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

export const Button = ({ path, text }) => {
  return (
    <Link to={path} target="_blank" download>
      <button class="accent-button">{text}</button>
    </Link>
  );
};
