import "./SideMenu.scss";
import { LeftPanel } from "./LeftPanel";

export const SideMenu = () => {
  const handleMenuClose = () => {
    const element = document.getElementById("sideMenu");
    element.classList.remove("open");
  };
  return (
    <aside class="sidebar-container" id="sideMenu">
      <button class="closeButton" onClick={() => handleMenuClose()}>
        <i class="gg-close" />
      </button>
      <div class="left-menu">
        <div class="photo-container">
          <section></section>
        </div>
        <LeftPanel />
      </div>
    </aside>
  );
};
