import { HamBurgerMenu } from "./HamburgerMenu";
import "./index.scss";
import { Button } from "../Button";

export const Header = () => {
  return (
    <div className="header">
      <HamBurgerMenu />
      <Button path={"/assets/Aasha_Resume.pdf"} text={"Resume"} />
    </div>
  );
};
