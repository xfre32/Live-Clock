import React, { useState } from "react";

function App() {
  let time = new Date().toLocaleTimeString();
  let [currentTime, refresher] = useState(time);
  function getTime() {
    refresher((currentTime = new Date().toLocaleTimeString()));
    //console.log(currentTime);
  }
  setInterval(getTime, 1000);

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
