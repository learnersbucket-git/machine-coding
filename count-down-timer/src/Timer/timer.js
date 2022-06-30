import React, { useEffect, useState } from "react";
import { TimeText, TimeTextWrapper, Wrapper } from "./style";

//values in millisecond
const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

const Timer = ({ duration, callback }) => {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    // base condition
    const timerId = setTimeout(() => {
      setTime(time - 1000);
    }, 1000);

    // final condition
    if (time <= 0) {
      clearTimeout(timerId);
      callback && callback();
    }

    //Clean up
    return () => {
      clearTimeout(timerId);
    };
  }, [time, callback]);

  const getTimeFormatted = (time) => {
    const days = Math.floor(time / DAY);
    const hours = Math.floor((time % DAY) / HOUR);
    const minutes = Math.floor((time % HOUR) / MINUTE);
    const seconds = Math.floor((time % MINUTE) / SECOND);
    const formatted = { days, hours, minutes, seconds };

    return Object.keys(formatted).map((e) => {
      return (
        <TimeTextWrapper key={e}>
          <TimeText fontSize={"1.5em"}>{formatted[e]}</TimeText>
          <TimeText>{e}</TimeText>
        </TimeTextWrapper>
      );
    });
  };

  return <Wrapper>{getTimeFormatted(time)}</Wrapper>;
};

Timer.defaultProps = {
  duration: 60 * 1000,
};

export default Timer;
