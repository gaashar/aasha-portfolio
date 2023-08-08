import { HamBurgerMenu } from "./HamburgerMenu";
import "./index.scss";

export const Header = () => {
  return (
    <div class="header">
      <HamBurgerMenu />
      <button>Resume</button>
    </div>
  );
};
