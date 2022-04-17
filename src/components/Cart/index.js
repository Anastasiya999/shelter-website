import React from "react";
import styles from "./styles.module.scss";
import dog_img from "../../assets/corgi.jpg";

const Cart = ({ item }) => {
  const gender =
    item.gender == "female" ? (
      <i class="bx bx-female-sign"></i>
    ) : (
      <i class="bx bx-male-sign"></i>
    );
  return (
    <div className={styles.cart_wrapper}>
      <div className={styles.cart}>
        <img src={item.src} />
        <p className={styles.name}>{item.name}</p>
        <button className={styles.save_btn}>
          <i class="bx bx-bookmark"></i>
        </button>
        <div className={styles.info}>
          <p>{item.type}</p>
          <span>{gender}</span>
        </div>
        <button className={styles.cart_btn}>Learn more</button>
      </div>
    </div>
  );
};

export default Cart;
