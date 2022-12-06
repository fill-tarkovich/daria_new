import React, { useState } from "react";
import "./Case.scss";
import image from "../../img/Rectangle.png";

const Case = ({ title, category, date, description, color }) => {
  const [isActive, setActive] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const clickHandler = () => {
    setActive(!isActive);
  };
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const bgColor = {
    backgroundColor: ` ${color}`,
  };
  return (
    <section className="case">
      <div
        className="case__header"
        onClick={clickHandler}
        style={isHovering || isActive ? bgColor : null}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h2>{title}</h2>
        <p>{category}</p>
        <p>{date}</p>
      </div>
      <div className="case__active" aria-expanded={isActive}>
        <p>{description}</p>
        <img src={image} alt="" />
      </div>
    </section>
  );
};

export default Case;
