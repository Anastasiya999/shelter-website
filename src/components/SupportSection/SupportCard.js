import React from "react";
import styles from "./styles.module.scss";

const SupportCard = ({ img_type, img_bg, title, kind, reversed }) => {
  return (
    <div
      className={styles.support_card}
      style={{
        backgroundImage: `url(${img_bg})`,
        backgroundPosition: kind,
        flexDirection: reversed ? "row-reverse" : "row",
      }}
    >
      <p>{title}</p>
      <img src={img_type} />
    </div>
  );
};

export default SupportCard;
