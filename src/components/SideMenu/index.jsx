import { LeftPanel } from "./LeftPanel";
import { Contact } from "../Contact";
import "./index.scss";

export const SideMenu = () => {
  const handleMenuClose = () => {
    const element = document.getElementById("sideMenu");
    element.classList.remove("open");
  };
  return (
    <aside className="sidebar-container" id="sideMenu">
      <button className="closeButton" onClick={() => handleMenuClose()}>
        <i className="gg-close" />
      </button>
      <div className="left-menu">
        <div className="photo-container">
          <section></section>
        </div>
        <LeftPanel closeMenu={handleMenuClose} />
        <Contact />
      </div>
    </aside>
  );
};
