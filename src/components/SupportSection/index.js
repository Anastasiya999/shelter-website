import React from "react";
import SectionTitle from "../SectionTitle";
import styles from "./styles.module.scss";
import SupportCard from "./SupportCard";

import { support_cards } from "../../data";

const SupportSection = () => {
  return (
    <div className={styles.support_section}>
      <SectionTitle isBackgroundReversed>Support us</SectionTitle>
      <div className={styles.cards}>
        {support_cards.map((item) => (
          <SupportCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default SupportSection;
