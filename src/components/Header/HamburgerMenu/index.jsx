import "./HamburgerMenu.scss";

export const HamBurgerMenu = () => {
  const handleMenuOpen = () => {
    const element = document.getElementById("sideMenu");
    element.classList.add("open");
  };
  return (
    <div className="hamburger-lines" onClick={() => handleMenuOpen()}>
      <span className="line line1"></span>
      <span className="line line2"></span>
      <span className="line line3"></span>
    </div>
  );
};
