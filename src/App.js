import React from "react";
import "./styles.css";
import LiveTime from "./components/LiveTime";

const App = () => {
  return (
    <>
      <div className="liveTimeWrap">
        <h1>Live Time Stamp with seconds</h1>
        <div className="liveTimeBox">
          <LiveTime />
        </div>
      </div>
    </>
  );
};

export default App;
