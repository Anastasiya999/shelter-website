import React from "react";
import CustomSlider from "../CustomSlider";
import styles from "./styles.module.scss";
import { dogs } from "../../data";
import SectionTitle from "../SectionTitle";

const PetSection = () => {
  return (
    <div className={[styles.pet_section, "bg-darklight"].join(" ")}>
      <SectionTitle>Our friends</SectionTitle>
      <CustomSlider data={dogs} />
      <div className={styles.link}>
        <a>
          See more<i class="bx bx-right-arrow-alt bx-fade-right"></i>
        </a>
      </div>
    </div>
  );
};

export default PetSection;
