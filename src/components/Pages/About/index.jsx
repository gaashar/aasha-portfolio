import { Link } from "react-router-dom";
import "./index.scss";

export const About = () => {
  return (
    <div class="main-body">
      <div class="about-section">
        <h3>
          <span class="accent">Welcome</span> to my Portfolio.
        </h3>
        <h4>
          Hello! I am <span class="accent">AASHA</span>
        </h4>
        <p>
          I build websites that look great and work smoothly. I transform
          designs into websites that are easy to use.
        </p>
        <p> Let's create something amazing together ! </p>
        <div class="my-work">
          <Link to="/projects">
            <button class="accent-button">See My Work</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
