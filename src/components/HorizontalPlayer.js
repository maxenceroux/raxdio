import React, { useState, useEffect } from "react";
import RadioPlayer from "./RadioPlayer";
import "./horizontal-player.css";

const HorizontalPlayer = () => {
  const [tracks, setTracks] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://raxdio.com/currently_playing");
      const json = await response.json();
      setTracks(json);
    };

    // Fetch data initially when component mounts
    fetchData();

    // Fetch data every 10 seconds
    const intervalId = setInterval(fetchData, 20000);

    // Clean up the timer when component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="horizontal-player">
      <RadioPlayer />

      {tracks ? (
        <React.Fragment>
          <div className="artist-image-wrapper">
            {tracks[0].artist_image ? (
              <img
                src={tracks[0].artist_image}
                alt="album"
                className="album-image"
              />
            ) : (
              <img
                src={require("../assets/Component 1.png")}
                alt="album"
                className="album-image"
              />
            )}
          </div>
          <div className="track-info-wrapper">
            <p className="artist-name">{tracks[0].artist}</p>
            <p className="artist-track-name">{tracks[0].title}</p>
          </div>
        </React.Fragment>
      ) : null}
    </div>
  );
};

export default HorizontalPlayer;
