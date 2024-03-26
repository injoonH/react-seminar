import { useRef, useState } from "react";

// Create a stopwatch using setInterval and clearInterval.
export const Stopwatch = () => {
  const intervalId = useRef(null);

  const [startTime, setStartTime] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);

  const seconds = currentTime && startTime ? (currentTime - startTime) / 1000 : 0;

  const handleStart = () => {
    const now = Date.now();
    setStartTime(now);
    setCurrentTime(now);

    intervalId.current = setInterval(() => {
      setCurrentTime(Date.now());
    }, 10);
  };

  const handleStop = () => clearInterval(intervalId.current);

  return (
    <>
      <span>{seconds.toFixed(3)} seconds</span>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
      </div>
    </>
  );
};
