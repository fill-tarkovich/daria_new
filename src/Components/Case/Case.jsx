import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Case.scss";

const Case = ({
  title,
  category1,
  category2,
  date,
  description,
  color,
  image,
  img_main,
  text1,
  tags,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  text2,
  text3,
  img7,
  img8,
  img9,
  text4,
  text5,
  img10,
  text6,
}) => {
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

  let width = window.innerWidth;

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
        {width > 499 ? (
          <>
            <p className="category">{`${category1} / ${category2}`}</p>
            <p className="date">{date}</p>
          </>
        ) : null}
      </div>
      <div className="case__active" aria-expanded={isActive}>
        {width < 499 ? (
          <div>
            <p className="category">{`${category1} / ${category2}`}</p>
            <p className="date">{date}</p>
          </div>
        ) : null}
        <div className="case_info">
          <p>{description}</p>
          <Link
            className="underline"
            to={`${title}`}
            state={{
              color: color,
              title: title,
              category1: category1,
              category2: category2,
              description: description,
              img_main: img_main,
              text1: text1,
              tags: tags,
              img1: img1,
              img2: img2,
              img3: img3,
              img4: img4,
              img5: img5,
              img6: img6,
              text2: text2,
              text3: text3,
              img7: img7,
              img8: img8,
              img9: img9,
              text4: text4,
              text5: text5,
              img10: img10,
              text6: text6,
            }}
          >
            read more
          </Link>
        </div>
        <img src={image} alt="case_image" width={932}></img>
      </div>
    </section>
  );
};

export default Case;
