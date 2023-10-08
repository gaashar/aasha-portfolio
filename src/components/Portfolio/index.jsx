import { About } from "../Pages/About";
import { Experience } from "../Pages/Experience";
import { Header } from "../Header";
import { Projects } from "../Pages/Projects";
import { Routes, Route } from "react-router-dom";
import { SideMenu } from "../SideMenu";
import { Skills } from "../Pages/Skills";
import "./index.scss";

export const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <SideMenu />
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <div className="footer"></div>
      </main>
    </div>
  );
};
