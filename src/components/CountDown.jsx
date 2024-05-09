const CountDown = () => {
  return (
    <div className="countdown">
      <div className="time">
        {/* days */}
        <h2>00</h2>
        <small>days</small>
      </div>
      <div className="time">
        {/* hours */}
        <h2>00</h2>
        <small>hours</small>
      </div>
      <div className="time">
        {/* minutes */}
        <h2>00</h2>
        <small>minutes</small>
      </div>
      <div className="time">
        {/* seconds */}
        <h2>00</h2>
        <small>seconds</small>
      </div>
    </div>
  );
};

export default CountDown;
