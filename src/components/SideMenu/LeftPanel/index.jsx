import { Link } from "react-router-dom";
import "./index.scss";

export const LeftPanel = () => {
  return (
    <nav class="nav-container">
      <ul>
        <Link to="/">
          <li>HOME</li>
        </Link>
        <Link to="/skills">
          <li>SKILLS</li>
        </Link>
        <Link to="/projects">
          <li>PROJECTS</li>
        </Link>
      </ul>
    </nav>
  );
};
