import React, { useState, useEffect } from "react";
import ProgressPerc from "./Progress";

const ProgressBar = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue(oldValue => {
        const newValue = oldValue + 10;
        if (newValue === 100) {
          clearInterval(interval);
        }
        return newValue;
      });
    }, 1000);
  }, []);
  return <ProgressPerc color={"#7979F7"} width={"30rem"} value={40} max={100} />;
};

export default ProgressBar;
