import { useState, useRef } from "react";

export default function VideoPlayer() {
  const playerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  function handleClick() {
    console.log("clicked!");
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);
    nextIsPlaying ? playerRef.current.play() : playerRef.current.pause();
  }

  return (
    <>
      <button onClick={handleClick}>{isPlaying ? "Pause" : "Play"}</button>
      <video
        width="250"
        ref={playerRef}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      >
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </>
  );
}
