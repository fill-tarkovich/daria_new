import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./CaseSingle.scss";

const CaseSingle = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const bgColor = {
    backgroundColor: ` ${location.state.color}`,
  };

  return (
    <div style={bgColor}>
      <header className="header__top case_single">
        <h1>daria designs</h1>
        <nav>
          <ul>
            <a href="#projects">projects</a>
            <a href="#about">about & contact</a>
          </ul>
        </nav>
      </header>
      <div className="caseSingle">
        <div className="caseSingle_header">
          <h2>{location.state.title}</h2>
          <p>{location.state.category2}</p>
          <p>{location.state.category1}</p>
        </div>
        <p className="description">{location.state.description}</p>
        <ul className="tags">
          <li className="tags_left">{location.state.tags[0]}</li>
          <div>
            <li>{location.state.tags[1]}</li>
            <li>{location.state.tags[2]}</li>
            <li>{location.state.tags[3]}</li>
          </div>
        </ul>
        <img
          className="img_main"
          src={location.state.img_main}
          alt={location.state.title}
        />
        <p className="description">{location.state.text1}</p>
        <div className="images_block_top">
          <div className="img_big">
            <img src={location?.state?.img1} alt={location.state.title} />
            <img src={location?.state?.img2} alt={location.state.title} />
          </div>
          <div className="images_column">
            <img src={location?.state?.img3} alt={location.state.title} />
            <img src={location?.state?.img4} alt={location.state.title} />
          </div>
          <div className="images_small">
            <img src={location?.state?.img5} alt={location.state.title} />
            <img src={location?.state?.img6} alt={location.state.title} />
          </div>
        </div>
        <div className="text_block">
          <p>{location?.state?.text2}</p>
          <p>{location?.state?.text3}</p>
        </div>
        <div className="images_block_middle">
          <div>
            <img src={location?.state?.img7} alt={location.state.title} />
            <img src={location?.state?.img8} alt={location.state.title} />
          </div>
          <img src={location?.state?.img9} alt={location.state.title} />
        </div>
        <div className="text_block">
          <p>{location?.state?.text4}</p>
          <p>{location?.state?.text5}</p>
        </div>
        {location?.state?.img10 && (
          <img
            src={location?.state?.img10}
            alt={location?.state?.title}
            className="image_bottom"
          />
        )}
        <p className="text_block_bottom">{location.state.text6}</p>
      </div>
      <button className="back_button" onClick={() => navigate("/daria_new")}>
        back to main
      </button>
    </div>
  );
};

export default CaseSingle;
