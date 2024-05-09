import { useRef, useState } from "react";
import Days from "./Days";
import Hours from "./Hours";
import Minutes from "./Minutes";
import Seconds from "./Seconds";

const CountDown = ({ currYear }) => {
  const intervalRef = useRef(null);

  const [timeObj, setTimeObj] = useState({
    d: 0,
    h: 0,
    m: 0,
    s: 0,
  });

  //   d, h, m, s

  const handleStart = () => {};

  return (
    <>
      <div className="countdown">
        <Days />
        <Hours />
        <Minutes />
        <Seconds />
      </div>
      <button onClick={handleStart} className="start-btn">
        Start
      </button>
    </>
  );
};

export default CountDown;
