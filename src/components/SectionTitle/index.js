import React from "react";
import styles from "./styles.module.scss";

const SectionTitle = ({ isBackgroundReversed, children }) => {
  return (
    <div
      className={[
        isBackgroundReversed ? styles.bg_reversed : null,
        styles.title,
      ].join(" ")}
    >
      <p>{children}</p>
    </div>
  );
};

export default SectionTitle;
