import React from "react";
import "./Case.scss";
import image from "../../img/Rectangle.png";

const Case = ({ title, category, date, description }) => {
  return (
    <section className="case">
      <div className="case__header">
        <h2>{title}</h2>
        <p>{category}</p>
        <p>{date}</p>
      </div>
      <div className="case__expanded">
        <p>{description}</p>
        <img src={image} alt="" />
      </div>
    </section>
  );
};

export default Case;
