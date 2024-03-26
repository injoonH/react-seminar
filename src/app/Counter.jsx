import { useState } from "react";

// Increment the count when the button is clicked
export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <button
        onClick={() => {
          setCount((curr) => curr + 1);
        }}
      >
        Clcked {count} times
      </button>
    </>
  );
};
