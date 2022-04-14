import React from "react";

import styles from "./styles.module.scss";

const NavButton = ({ onToggleMenu }) => {
  return (
    <div className={["flex", styles.nav_buttons].join(" ")}>
      <span>
        <i class="bx bx-bookmark"></i>
      </span>
      <span>
        <i class="bx bx-moon"></i>
      </span>
      <span className={styles.menu_btn} onClick={onToggleMenu}>
        <i class="bx bx-menu-alt-right"></i>
      </span>
    </div>
  );
};

export default NavButton;
