import { useEffect, useRef, useState } from "react";

// Play and pause a video
export const Video = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    if (isPlaying) videoRef.current.play();
    else videoRef.current.pause();
  }, [isPlaying]);

  return (
    <>
      <button
        onClick={() => {
          setIsPlaying((curr) => !curr);
        }}
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
      <video
        ref={videoRef}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        loop
        playsInline
        style={{ maxWidth: "50%" }}
      />
    </>
  );
};
