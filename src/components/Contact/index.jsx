import { Link } from "react-router-dom";
import "./index.scss";

export const Contact = () => {
  return (
    <>
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
      </div>
      <div className="mail-group">
        <div className="mail-icon">
          <i className="fa-solid fa-envelope"></i>
          <p className="hide-text">Email</p>
        </div>
        <div>gaashar@gmail.com</div>
      </div>
    </>
  );
};
