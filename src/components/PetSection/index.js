import React from "react";
import CustomSlider from "../CustomSlider";
import styles from "./styles.module.scss";

const PetSection = () => {
  return (
    <div className={[styles.pet_section, "bg-darklight"].join(" ")}>
      <CustomSlider />
    </div>
  );
};

export default PetSection;
