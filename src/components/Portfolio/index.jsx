import { Header } from "../Header";
import { About } from "../Pages/About";
import { SideMenu } from "../SideMenu";
import "./index.scss";

import { Routes, Route } from "react-router-dom";
import { Skills } from "../Pages/Skills";
import { Projects } from "../Pages/Projects";
import { Contact } from "../Pages/Contact";

export const Portfolio = () => {
  return (
    <div class="portfolio-container">
      <SideMenu />
      <main class="mainbody-container">
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
};
