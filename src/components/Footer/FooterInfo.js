import React from "react";

const FooterInfo = ({ title, info }) => {
  return (
    <div>
      <h1>{title}</h1>
      {Array.isArray(info) ? (
        info.map((item, id) => <p key={id}>{item}</p>)
      ) : (
        <p>{info}</p>
      )}
    </div>
  );
};

export default FooterInfo;
