import { Link } from "react-router-dom";
import "./index.scss";

export const Contact = () => {
  return (
    <div className="contact">
      <Link
        to="https://www.linkedin.com/in/aasha-govindaraj-831a00146/"
        target="_blank"
      >
        <div className="contact-group">
          <i className="fa-brands fa-linkedin-in"></i>
          <p className="hide-text">LinkedIn</p>
        </div>
      </Link>
      <Link to="https://github.com/gaashar" target="_blank">
        <div className="contact-group">
          <i className="fa-brands fa-github"></i>
          <p className="hide-text">GitHub</p>
        </div>
      </Link>
      <Link>
        <div className="contact-group">
          <i className="fa-solid fa-envelope"></i>
          <p className="hide-text">Email</p>
        </div>
      </Link>
    </div>
  );
};
