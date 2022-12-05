import React, { useState } from "react";
import "./Herobanner.scss";

function Herobanner() {
  const backgroundAmount = 4;
  const [backgroundCount, setBackground] = useState(0);
  const clickHandler = () => {
    backgroundCount === backgroundAmount
      ? setBackground(backgroundCount * 0)
      : setBackground(backgroundCount + 1);
  };
  const backgroundClass = `herobanner background_${backgroundCount}`;
  return <div onClick={clickHandler} className={backgroundClass}></div>;
}

export default Herobanner;
