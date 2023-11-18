import React, { useState } from 'react'
import "./App.css"

function SetTimer() {

  const [timer, setTimer] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const startTimer = () => {
    if (!intervalId) {
      const id = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
      setIntervalId(id);
    }
  };

  const stopTimer = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  const resetTimer = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    setTimer(0);
  };

  return (
    <>
      <div id='timer'>
        <h1> Setting Timer Interval </h1>
        <h4>Timer: {timer}</h4>
        <div id='b1'>
          <button id='b11' onClick={startTimer} disabled={!!intervalId}> Start </button>
          <button onClick={stopTimer}>Stop</button>
          <button onClick={resetTimer}>Reset</button>
        </div>
      </div>
    </>
  )
}
export default SetTimer;