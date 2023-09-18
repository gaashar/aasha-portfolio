import { NavLink } from "react-router-dom";
import "./index.scss";

export const LeftPanel = ({ closeMenu }) => {
  return (
    <nav className="nav-container">
      <ul>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : undefined)}
          onClick={() => closeMenu()}
        >
          <li>HOME</li>
        </NavLink>
        <NavLink
          to="/skills"
          className={({ isActive }) => (isActive ? "active" : undefined)}
          onClick={() => closeMenu()}
        >
          <li>SKILLS</li>
        </NavLink>
        <NavLink
          to="/experience"
          className={({ isActive }) => (isActive ? "active" : undefined)}
          onClick={() => closeMenu()}
        >
          <li>WORK HISTORY</li>
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? "active" : undefined)}
          onClick={() => closeMenu()}
        >
          <li>PROJECTS</li>
        </NavLink>
      </ul>
    </nav>
  );
};
