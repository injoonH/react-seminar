import { useRef } from "react";

// Focus input on button click
export const Focus = () => {
  const inputRef = useRef(null);

  return (
    <>
      <input ref={inputRef} type="text" />
      <button
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        Focus the input
      </button>
    </>
  );
};
