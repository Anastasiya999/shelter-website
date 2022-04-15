import React from "react";
import styles from "./styles.module.scss";

const ActionButton = (props) => {
  return <button className={styles.action_btn}>{props.children}</button>;
};

export default ActionButton;
