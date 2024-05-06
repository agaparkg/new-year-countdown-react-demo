import "./App.css";

function App() {
  return (
    <>
      <div id="year" className="year"></div>

      <h1>New Year Countdown</h1>

      <div id="countdown" className="countdown">
        <div className="time">
          <h2 id="days">00</h2>
          <small>days</small>
        </div>
        <div className="time">
          <h2 id="hours">00</h2>
          <small>hours</small>
        </div>
        <div className="time">
          <h2 id="minutes">00</h2>
          <small>minutes</small>
        </div>
        <div className="time">
          <h2 id="seconds">00</h2>
          <small>seconds</small>
        </div>
      </div>
    </>
  );
}

export default App;
