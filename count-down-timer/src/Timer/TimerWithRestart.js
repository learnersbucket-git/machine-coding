import { useState } from "react";
import Timer from "./timer";

const TimerWithRestart = ({ duration, beforeRestart, onExpire }) => {
  const [isExpired, setExpired] = useState(false);

  const restartTimer = () => {
    beforeRestart && beforeRestart();
    setExpired(false);
  };

  return !isExpired ? (
    <Timer
      duration={duration}
      callback={() => {
        onExpire && onExpire();
        setExpired(true);
      }}
    />
  ) : (
    <button onClick={restartTimer}>Restart</button>
  );
};

export default TimerWithRestart;
