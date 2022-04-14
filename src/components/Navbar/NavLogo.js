import React from "react";
import styles from "./styles.module.scss";

const NavLogo = () => {
  return (
    <a className={["fw-bold", "fs-500", styles.logo].join(" ")}>
      <i class="bx bx-bone"></i>FeedMe
    </a>
  );
};

export default NavLogo;
