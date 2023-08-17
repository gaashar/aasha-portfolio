import "./HamburgerMenu.scss";

export const HamBurgerMenu = () => {
  const handleMenuOpen = () => {
    const element = document.getElementById("sideMenu");
    element.classList.add("open");
  };
  return (
    <div class="hamburger-lines" onClick={() => handleMenuOpen()}>
      <span class="line line1"></span>
      <span class="line line2"></span>
      <span class="line line3"></span>
    </div>
  );
};
