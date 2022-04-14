import React from "react";
import styles from "./styles.module.scss";

const NavMenu = ({ isNavExpanded }) => {
  return (
    <div className={isNavExpanded ? styles.nav_menu_expanded : styles.nav_menu}>
      <ul className="flex">
        <li>
          <a href="#pet_section">Choose new friend</a>
        </li>
        <li>
          <a href="#support_section">Support</a>
        </li>
      </ul>
    </div>
  );
};

export default NavMenu;
