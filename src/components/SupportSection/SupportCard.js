import React from "react";
import styles from "./styles.module.scss";

const SupportCard = ({ img_type, img_bg, title, kind }) => {
  const style = { backgroundImage: "url(/assets/make-donation.png)" };
  return (
    <div className={styles.support_card} style={style}>
      <p>{title}</p>
      <img src={img_type} />
      <img src={img_type} />
    </div>
  );
};

export default SupportCard;
