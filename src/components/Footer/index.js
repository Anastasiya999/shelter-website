import React from "react";
import FooterInfo from "./FooterInfo";
import styles from "./styles.module.scss";
import footer_img from "../../assets/footer_img.jpg";
import { footer_info } from "../../data";

const Footer = () => {
  return (
    <div className="container">
      <div className={styles.footer}>
        <div className={styles.info}>
          {footer_info.map((item) => (
            <FooterInfo key={item.id} title={item.title} info={item.info} />
          ))}
        </div>
        <img src={footer_img} />
      </div>
    </div>
  );
};

export default Footer;
