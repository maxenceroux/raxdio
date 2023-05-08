import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import ScrollBannerHorizontal from "./scroll-banner-horizontal";

import "../styles.css";
import "../styles-mobile.css";
import RadioPlayer from "./RadioPlayer";
import AboutUs from "./AboutUs";
import Chat from "./Chat";
import { ReactComponent as CalendarLogo } from "../assets/calendar.svg";
import { ReactComponent as MessageLogo } from "../assets/messages.svg";
function HomePage() {
  const audioRef = useRef(new Audio("https://raxdio.com/radio"));

  const [tracks, setTracks] = useState(null);
  const [showArtist, setShowArtist] = useState(true);
  const [showChat, setShowChat] = useState(false);
  const [chosenTrackIndex, setChosenTrackIndex] = useState(0);
  const [playingInfo, setPlayingInfo] = useState("now playing");

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
  const handleCancelClick = () => {
    setShowChat(false);
  };
  const handlePreviousTrack = () => {
    if (tracks && chosenTrackIndex < tracks.length - 1) {
      setChosenTrackIndex(chosenTrackIndex + 1);
    }
    if (chosenTrackIndex + 1 === 1) {
      setPlayingInfo("previous track");
    }
    if (chosenTrackIndex + 1 === 2) {
      setPlayingInfo("previous*2 track");
    }
  };
  const handleNextTrack = () => {
    if (tracks && chosenTrackIndex > 0) {
      setChosenTrackIndex(chosenTrackIndex - 1);
    }
    if (chosenTrackIndex - 1 === 0) {
      setPlayingInfo("now playing");
    }
    if (chosenTrackIndex - 1 === 1) {
      setPlayingInfo("previous track");
    }
  };
  const handleAboutUs = () => {
    setShowArtist(!showArtist);
    setChosenTrackIndex(0);
    setPlayingInfo("now playing");
  };

  return (
    <div className="App">
      <ScrollBannerHorizontal />
      <div className="content">
        <div className="radio">
          <p className="vertical-text">RAX</p>
          <p className="horizontal-text" onClick={handleAboutUs}>
            DI
          </p>
          <p className="vertical-text">O</p>
        </div>

        <div className="now-playing">
          <div className="now-playing-content">
            <div className="player">
              <RadioPlayer audio={audioRef.current} />

              <div className="now-playing-text">{playingInfo}</div>
            </div>
            {tracks ? (
              <div
                className={
                  chosenTrackIndex === 2
                    ? "artist no-preceding-track"
                    : "artist"
                }
              >
                {chosenTrackIndex < 2 && showArtist && (
                  <div
                    onClick={handlePreviousTrack}
                    className="previous-track track-selection"
                  >
                    &lt;
                  </div>
                )}
                <div
                  className={`about-us-wrapper ${
                    !showArtist ? "show-flex" : "hidden"
                  }`}
                >
                  <AboutUs />
                </div>
                <div className="artist-track">
                  {tracks[chosenTrackIndex].artist_image ? (
                    <img
                      src={tracks[chosenTrackIndex].artist_image}
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

                  <p className="artist-name">
                    {tracks[chosenTrackIndex].artist}
                  </p>
                  <p className="artist-track-name">
                    {tracks[chosenTrackIndex].title}
                  </p>
                </div>
                {tracks[chosenTrackIndex].description ? (
                  <div
                    className={`artist-info ${showArtist ? "" : "hidden"} ${
                      chosenTrackIndex === 0 ? "no-next-track" : ""
                    }`}
                    id="scrollbar1"
                    dangerouslySetInnerHTML={{
                      __html: tracks[chosenTrackIndex].description.replace(
                        /(<a[^>]+)>(.+?)<\/a>/gi,
                        '$1 target="_blank">$2</a>'
                      ),
                    }}
                  ></div>
                ) : (
                  <div
                    className={`artist-info ${showArtist ? "" : "hidden"} ${
                      chosenTrackIndex === 0 ? "no-next-track" : ""
                    }`}
                    id="scrollbar1"
                  >
                    Nothing on this artist or album. We may have gone down a
                    rabbit hole of obscure music. Spice up the artist's{" "}
                    <a
                      href={
                        "https://www.last.fm/music/" +
                        tracks[chosenTrackIndex].artist +
                        "/+wiki"
                      }
                      target="_blank"
                    >
                      Last FM profile.
                    </a>
                  </div>
                )}
                {chosenTrackIndex > 0 && (
                  <div
                    onClick={handleNextTrack}
                    className="next-track track-selection"
                  >
                    &gt;
                  </div>
                )}
              </div>
            ) : (
              <p>Nothing playling</p>
            )}
          </div>
        </div>
        <div>
          <MessageLogo
            id="chat-logo"
            onClick={() => {
              setShowChat(!showChat);
            }}
          />
        </div>
        <div>
          <Link to="/schedule">
            <CalendarLogo id="calendar-logo" />
          </Link>
        </div>
        <div className={`chat ${showChat ? "" : "hidden"}`}>
          <Chat isVisible={showChat} handleCancelClick={handleCancelClick} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
