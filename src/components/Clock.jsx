import React, { useState, useEffect } from 'react';

function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isRunning, setIsRunning] = useState(true);
  const [is12Hour, setIs12Hour] = useState(true);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const toggleTimeFormat = () => {
    setIs12Hour((prev) => !prev);
  };

  const toggleClock = () => {
    setIsRunning((prev) => !prev);
  };

  const formatTime = (date) => {
    return is12Hour
      ? date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })
      : date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
  };

  return (
    <div className="clock">
      <h2>{formatTime(currentTime)}</h2>
      <div>
        <button onClick={toggleClock}>{isRunning ? 'Stop' : 'Start'} Clock</button>
        <button onClick={toggleTimeFormat}>
          Switch to {is12Hour ? '24-hour' : '12-hour'} Format
        </button>
      </div>
    </div>
  );
}

export default Clock;
