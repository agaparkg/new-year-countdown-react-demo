import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="year">2025</div>

      <h1>New Year Countdown</h1>

      {/* Countdown container */}
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
    </div>
  );
}

export default App;
