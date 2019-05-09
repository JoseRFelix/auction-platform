import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const CountDown = ({ initialTimerTime }) => {
  const [timerTime, setTimerTime] = useState(initialTimerTime);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = timerTime - 1000;

      if (newTime >= 0) setTimerTime(newTime);
      else clearInterval(timer);
    }, 1000);

    return () => clearInterval(timer);
  }, [timerTime]);

  const seconds = ("0" + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);
  const minutes = ("0" + Math.floor((timerTime / 60000) % 60)).slice(-2);
  const hours = ("0" + Math.floor((timerTime / 3600000) % 60)).slice(-2);

  return (
    <div>
      {hours} : {minutes} : {seconds}
    </div>
  );
};

CountDown.propTypes = {
  initialTimerTime: PropTypes.number.isRequired
};

export default CountDown;
