import React from "react";
import styles from "./styles.module.scss";
import hero from "../../assets/hero_img.jpg";

const HeroSection = () => {
  return (
    <div className={["container", styles.hero_container].join(" ")}>
      <div className={["flex", styles.social_media].join(" ")}>
        <span>Instagram</span>
        <span>Twitter</span>
        <span>Facebook</span>
      </div>
      <div className={["flex", styles.hero].join(" ")}>
        <div className={["flex", styles.hero_description].join(" ")}>
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
          <button>Make a friend</button>
        </div>
        <div className={["flex", styles.hero_img].join(" ")}>
          <img src={hero}></img>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
