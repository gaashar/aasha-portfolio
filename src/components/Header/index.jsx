import { HamBurgerMenu } from "./HamburgerMenu";
import "./index.scss";
import { Button } from "../Button";

export const Header = () => {
  return (
    <div className="header">
      <HamBurgerMenu />
      <Button path={"/assets/AashaGovindaraj_Resume.pdf"} text={"Resume"} />
    </div>
  );
};
