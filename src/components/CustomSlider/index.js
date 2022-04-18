import React from "react";
import styles from "./styles.module.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Cart from "../Cart";

import Arrow from "./Arrow";

const CustomSlider = ({ data }) => {
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <Arrow type="next" />,
    prevArrow: <Arrow type="prev" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  const renderSlides = () =>
    data.map((item) => <Cart key={item.id} item={item} />);
  return (
    <div className={styles.slides_wrapper}>
      <Slider {...settings}>{renderSlides()}</Slider>
    </div>
  );
};

export default CustomSlider;
