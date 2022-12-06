import React, { useState } from "react";

const backgroundAmount = 4;

function Herobanner() {
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
