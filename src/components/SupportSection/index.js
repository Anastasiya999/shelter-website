import React from "react";
import SectionTitle from "../SectionTitle";
import styles from "./styles.module.scss";
import SupportCard from "./SupportCard";

import { support_cards } from "../../data";

const SupportSection = () => {
  return (
    <div className={[styles.support_section, "bg-darklight"].join(" ")}>
      <SectionTitle isBackgroundReversed>Support us</SectionTitle>
      <div>
        <SupportCard {...support_cards[0]} />
      </div>
    </div>
  );
};

export default SupportSection;
