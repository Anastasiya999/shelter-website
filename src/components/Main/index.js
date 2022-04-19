import React from "react";
import PetSection from "../PetSection";
import SupportSection from "../SupportSection";

import styles from "./styles.module.scss";

const Main = () => {
  return (
    <div className={styles.main}>
      <PetSection />
      <SupportSection />
    </div>
  );
};

export default Main;
