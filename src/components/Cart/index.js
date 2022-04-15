import React from "react";
import styles from "./styles.module.scss";
import dog_img from "../../assets/corgi.jpg";

const Cart = () => {
  return (
    <div className={styles.cart_wrapper}>
      <div className={styles.cart}>
        <img src={dog_img} />
        <p className={styles.name}>Marvin</p>
        <button className={styles.save_btn}>
          <i class="bx bx-bookmark"></i>
        </button>
        <div className={styles.info}>
          <p>Corgi</p>
          <span>
            <i class="bx bx-female-sign"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
