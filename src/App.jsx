import "./App.css";

function App() {
  return (
    <div className="App">
      <div id="year" className="year"></div>

      <h1>New Year Countdown</h1>

      {/* Countdown container */}
      <div id="countdown" className="countdown">
        <div className="time">
          {/* days */}
          <h2 id="days">00</h2>
          <small>days</small>
        </div>
        <div className="time">
          {/* hours */}
          <h2 id="hours">00</h2>
          <small>hours</small>
        </div>
        <div className="time">
          {/* minutes */}
          <h2 id="minutes">00</h2>
          <small>minutes</small>
        </div>
        <div className="time">
          {/* seconds */}
          <h2 id="seconds">00</h2>
          <small>seconds</small>
        </div>
      </div>
      <p className="new-year">2025</p>
    </div>
  );
}

export default App;
