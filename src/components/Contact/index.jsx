import { Link } from "react-router-dom";
import "./index.scss";

export const Contact = () => {
  return (
    <div class="contact">
      <Link
        to="https://www.linkedin.com/in/aasha-govindaraj-831a00146/"
        target="_blank"
      >
        <div class="contact-group">
          <i class="fa-brands fa-linkedin-in"></i>
          <p class="hide-text">LinkedIn</p>
        </div>
      </Link>
      <Link to="https://github.com/gaashar" target="_blank">
        <div class="contact-group">
          <i class="fa-brands fa-github"></i>
          <p class="hide-text">GitHub</p>
        </div>
      </Link>
      <Link>
        <div class="contact-group">
          <i class="fa-solid fa-envelope"></i>
          <p class="hide-text">Email</p>
        </div>
      </Link>
    </div>
  );
};
