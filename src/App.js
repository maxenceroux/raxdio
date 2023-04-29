import React, { useState, useEffect } from "react";
import ScrollBannerHorizontal from "./components/scroll-banner-horizontal";

import "./styles.css";
import "./styles-mobile.css";
import RadioPlayer from "./components/RadioPlayer";
function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://raxdio.com/currently_playing");
      const json = await response.json();
      setData(json);
    };

    // Fetch data initially when component mounts
    fetchData();
    // Fetch data every 10 seconds
    const intervalId = setInterval(fetchData, 20000);

    // Clean up the timer when component unmounts
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="App">
      <ScrollBannerHorizontal />
      <div className="content">
        <div className="radio">
          <p className="vertical-text">RAX</p>
          <p className="horizontal-text">DI</p>
          <p className="vertical-text">O</p>
        </div>
        <div className="now-playing">
          <div className="now-playing-content">
            <div className="player">
              <RadioPlayer />

              <div className="now-playing-text">now playing</div>
            </div>
            {data ? (
              <div className="artist">
                <div className="artist-track">
                  {data.image_url ? (
                    <img
                      src={data.image_url}
                      alt="album"
                      className="album-image"
                    />
                  ) : (
                    <p></p>
                  )}

                  <p className="artist-name">{data.artist_name}</p>
                  <p className="artist-track-name">{data.track_name}</p>
                </div>
                <div
                  className="artist-info"
                  id="scrollbar1"
                  dangerouslySetInnerHTML={{ __html: data.content }}
                ></div>
              </div>
            ) : (
              <p>Nothing playling</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
