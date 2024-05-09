import Days from "./Days";
import Hours from "./Hours";
import Minutes from "./Minutes";
import Seconds from "./Seconds";

const CountDown = ({ currYear }) => {
  return (
    <div className="countdown">
      <Days />
      <Hours />
      <Minutes />
      <Seconds />
    </div>
  );
};

export default CountDown;
