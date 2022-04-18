import React from "react";

import styles from "./styles.module.scss";

const NavButton = ({ onToggleMenu }) => {
  return (
    <div className={["flex", styles.nav_buttons].join(" ")}>
      <span>
        <i className="bx bx-bookmark"></i>
      </span>
      <span>
        <i className="bx bx-moon"></i>
      </span>
      <span className={styles.menu_btn} onClick={onToggleMenu}>
        <i className="bx bx-menu-alt-right"></i>
      </span>
    </div>
  );
};

export default NavButton;
