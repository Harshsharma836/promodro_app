// Timer.js
import React, { useState, useEffect } from "react";

function Timer({ name }) {
  const [time, setTime] = useState(25 * 60);
  const [isBreak, setIsBreak] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    } else if (time === 0) {
      if (isBreak) {
        setIsBreak(false);
        setTime(25 * 60);
        alert("Get back to work!");
      } else {
        setIsBreak(true);
        setTime(5 * 60);
        alert("Take a 5 minutes break!");
      }
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive, time, isBreak]);

  const startTimer = () => {
    setIsActive(true);
  };

  const pauseTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setIsActive(false);
    setIsBreak(false);
    setTime(25 * 60);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60).toString().padStart(2, "0");
    const seconds = (time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="p-4">
      <div className="flex items-center justify-center flex-col">
        <h2 className="text-xl mb-2">{isBreak ? "Break Time" : "Work Time"}</h2>
        <h3 className="text-4xl font-bold mb-4">Hello, {name}</h3>
        <h3 className="text-4xl font-bold mb-4">{formatTime(time)}</h3>
        <div className="flex gap-4">
          <button onClick={startTimer} className="bg-blue-500 text-white px-4 py-2 rounded">
            Start
          </button>
          <button onClick={pauseTimer} className="bg-yellow-500 text-white px-4 py-2 rounded">
            Pause
          </button>
          <button onClick={resetTimer} className="bg-red-500 text-white px-4 py-2 rounded">
            Reset
          </button>
        </div>
      </div>
      <button onClick={logout} className="bg-gray-500 text-white px-4 py-2 rounded mt-4">
        Logout
      </button>
    </div>
  );
}

export default Timer;
