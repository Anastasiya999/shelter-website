import React from "react";
import { useState } from "react";
import NavLogo from "./NavLogo";
import NavMenu from "./NavMenu";
import NavButtons from "./NavButtons";
import styles from "./styles.module.scss";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpended] = useState(false);

  const toggleNavMenu = () => {
    setIsNavExpended((prev) => !prev);
  };

  return (
    <nav className={["flex", "fs-600", "ff-serif", styles.nav].join(" ")}>
      <NavLogo />
      <NavMenu isNavExpanded={isNavExpanded} />
      <NavButtons onToggleMenu={toggleNavMenu} />
    </nav>
  );
};

export default Navbar;
