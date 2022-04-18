import React from "react";

const Arrow = ({ className, style, onClick, type }) => {
  console.log(style);
  const direction =
    type == "prev" ? (
      <i className="bx bx-left-arrow-alt"></i>
    ) : (
      <i className="bx bx-right-arrow-alt"></i>
    );

  return (
    <span className={className} onClick={onClick}>
      {direction}
    </span>
  );
};

export default Arrow;
