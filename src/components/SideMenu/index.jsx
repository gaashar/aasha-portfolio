import "./SideMenu.scss";
import { LeftPanel } from "./LeftPanel";

export const SideMenu = () => {
  return (
    <aside class="sidebar-container">
      <div class="left-menu">
        <div class="photo-container">
          <section></section>
        </div>
        <LeftPanel />
      </div>
    </aside>
  );
};
