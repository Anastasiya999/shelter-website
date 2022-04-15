import React from "react";
import styles from "./styles.module.scss";
import hero from "../../assets/hero_img.jpg";
import ActionButton from "./ActionButton";

const HeroSection = () => {
  return (
    <div className={styles.hero_container}>
      <div className={styles.social_media}>
        <span>Instagram</span>
        <span>Twitter</span>
        <span>Facebook</span>
      </div>
      <div className={styles.hero}>
        <div className={styles.hero_description}>
          <p className="ff-cursive fs-900 letter-spacing-1 uppercase">
            find new <br /> friend
          </p>
          <p
            className={[
              "fw-regular ff-serif fs-600",
              styles.hero_description_main,
            ].join(" ")}
          >
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <ActionButton>Make a friend</ActionButton>
        </div>
        <div className={styles.hero_img}>
          <img src={hero}></img>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
