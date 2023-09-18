import { Link } from "react-router-dom";
import "./index.scss";

export const About = () => {
  return (
    <div className="main-body">
      <div className="about-section">
        <h3>
          <span className="accent">Welcome</span> to my Portfolio.
        </h3>
        <h4>
          Hello! I am <span className="accent">AASHA</span>
        </h4>
        <p>
          I build websites that look great and work smoothly. I transform
          designs into websites that are easy to use.
        </p>
        <div className="my-work">
          <Link to="/projects">
            <button className="accent-button">See My Work</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
