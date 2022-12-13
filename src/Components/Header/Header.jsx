import React, { useState } from "react";
import "./Header.scss";
import "./Herobanner.scss";

const backgroundAmount = 4;

const Header = () => {
  const [backgroundCount, setBackground] = useState(0);
  const clickHandler = () => {
    backgroundCount === backgroundAmount
      ? setBackground(backgroundCount * 0)
      : setBackground(backgroundCount + 1);
  };
  const backgroundClass = `herobanner background_${backgroundCount}`;

  return (
    <header className={backgroundCount === 4 ? "white" : null}>
      <div className="header__top">
        <h1>daria designs</h1>
        <nav>
          <ul>
            <a href="#projects">projects</a>
            <a href="#about">about & contact</a>
          </ul>
        </nav>
      </div>
      <div onClick={clickHandler} className={backgroundClass}></div>
    </header>
  );
};

export default Header;
