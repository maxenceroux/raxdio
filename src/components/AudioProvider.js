import React, { useState, useEffect, createContext } from "react";

export const AudioContext = createContext();

const AudioProvider = ({ children }) => {
  const [audio, setAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audioElement = new Audio("https://raxdio.com/radio");
    setAudio(audioElement);

    return () => {
      audioElement.pause();
      setAudio(null);
    };
  }, []);

  useEffect(() => {
    if (audio) {
      if (isPlaying) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  }, [audio, isPlaying]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <AudioContext.Provider value={{ audio, isPlaying, handlePlayPause }}>
      {children}
      {audio && (
        <audio
          src="https://raxdio.com/radio"
          preload="none"
          autoPlay={false}
          muted={false}
          ref={(ref) => {
            if (ref) {
              audio.src = ref.src;
              audio.load();
            }
          }}
        />
      )}
    </AudioContext.Provider>
  );
};

export default AudioProvider;
