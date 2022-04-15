import React from "react";
import styles from "./styles.module.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Cart from "../Cart";

const CustomSlider = () => {
  const renderSlides = () => [1, 2, 3, 4, 5, 6, 7, 8].map((num) => <Cart />);
  return (
    <Slider dots={false} slidesToShow={1} slidesToScroll={1}>
      {renderSlides()}
    </Slider>
  );
};

export default CustomSlider;
