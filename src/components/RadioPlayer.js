import React, { useContext } from "react";
import { AudioContext } from "./AudioProvider";

function RadioPlayer() {
  const { audio, isPlaying, handlePlayPause } = useContext(AudioContext);

  if (!audio) {
    return null;
  }

  return (
    <img
      src={require("../assets/" +
        (isPlaying ? "pause-button" : "play-button") +
        ".png")}
      alt={isPlaying ? "pause-button" : "play-button"}
      className="play-button"
      onClick={handlePlayPause}
    />
  );
}

export default RadioPlayer;
