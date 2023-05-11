import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Tracklist from "./Tracklist";
import { ReactComponent as IG } from "../assets/ig.svg";
import { ReactComponent as BC } from "../assets/bc.svg";
import { ReactComponent as SC } from "../assets/sc.svg";

import "./submit-show.css";
const SubmitShow = () => {
  const { selectedSlot } = useParams();
  const [confirmedSlot, setConfirmedSlot] = useState(false);
  const [confirmedName, setConfirmedName] = useState(false);
  const [confirmedShowName, setConfirmedShowName] = useState(false);
  const [confirmedDescription, setConfirmedDescription] = useState(false);
  const [confirmedSocials, setConfirmedSocials] = useState(false);
  const [confirmedPlaylist, setConfirmedPlaylist] = useState(false);
  const [name, setName] = React.useState("");

  const [showName, setShowName] = React.useState("");
  const [playlistUrl, setPlaylistUrl] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [soundcloudUrl, setSoundcloudUrl] = React.useState("");
  const [igUrl, setIgUrl] = React.useState("");
  const [bcUrl, setBcUrl] = React.useState("");

  const [tracks, setTracks] = useState(null);
  const navigate = useNavigate();
  const formatDate = (date) => {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const dayOfWeek = daysOfWeek[date.getDay()];
    const dayOfMonth = date.getDate();
    const month = months[date.getMonth()];
    const hour = date.getHours();

    return `${dayOfWeek} ${dayOfMonth}, ${month} at ${hour}:00`;
  };
  useEffect(() => {
    if (showName && name) {
      const interval = setInterval(() => {
        fetch(
          `${process.env.API_URL}/playlist_tracks?show_time=${selectedSlot}&show_name=${showName}&show_author=${name}`
        )
          .then((response) => response.json())
          .then((data) => {
            if (data !== null) {
              console.log("Tracks loaded");
              setTracks(data);
              clearInterval(interval);
            }
          });
      }, 5000); // make request every 20 seconds

      return () => clearInterval(interval);
    }
  }, [showName]);

  const handleSubmit = (event) => {
    if (playlistUrl) {
      setConfirmedPlaylist(true);
      event.preventDefault();
      console.log("Submitting show details:", {
        name,
        showName,
        playlistUrl,
        selectedSlot,
      });
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          start_datetime: selectedSlot,
          author: name,
          name: showName,
          playlist_url: playlistUrl,
          description: description,
          ig_url: igUrl,
          bc_url: bcUrl,
          sc_url: soundcloudUrl,
        }),
      };
      console.log(requestOptions);

      fetch(`${process.env.API_URL}/show`, requestOptions)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Slot validation result:", data);
          // do something with the validation result
        })
        .catch((error) => {
          console.error("Error fetching slot validation:", error);
          // handle the error
        });
    } else {
      const inputElement = document.getElementById("playlist-url");
      inputElement.classList.add("shaky");

      // Remove the class after a short delay to end the animation
      setTimeout(() => {
        inputElement.classList.remove("shaky");
      }, 500);
    }
  };

  const handleBack = () => {
    navigate(`/schedule`);
  };
  const handleConfirmSlot = () => {
    setConfirmedSlot(true);
  };
  const handleConfirmName = () => {
    if (name) {
      setConfirmedName(true);
    } else {
      const inputElement = document.getElementById("name");
      inputElement.classList.add("shaky");

      // Remove the class after a short delay to end the animation
      setTimeout(() => {
        inputElement.classList.remove("shaky");
      }, 500);
    }
  };
  const handleBackConfirmShowName = () => {
    setConfirmedName(false);
  };
  const handleConfirmShowName = () => {
    if (showName) {
      setConfirmedShowName(true);
    } else {
      const inputElement = document.getElementById("show-name");
      inputElement.classList.add("shaky");

      // Remove the class after a short delay to end the animation
      setTimeout(() => {
        inputElement.classList.remove("shaky");
      }, 500);
    }
  };
  const handleBackConfirmDescription = () => {
    setConfirmedShowName(false);
  };
  const handleConfirmDescription = () => {
    setConfirmedDescription(true);
  };
  const handleConfirmSocials = () => {
    setConfirmedSocials(true);
  };
  const handleBackConfirmSocials = () => {
    setConfirmedDescription(false);
  };

  const handleBackConfirmPlaylist = () => {
    setConfirmedSocials(false);
  };

  return (
    <div className="submit-show-wrapper">
      <Header />
      <div className="submit-show-container">
        <div className="submit-show-content-container">
          {!confirmedPlaylist ? (
            <div className="submit-show-text">
              <p>Great news, you want to host a show on Raxdio</p>
              <p className="subtitle">
                There are a few things to set up, but I promise it won't take
                long!
              </p>
            </div>
          ) : tracks === null ? (
            <div className="submit-show-text">
              <p>Thanks for submitting your show and your tracklist!</p>
              <p className="subtitle">
                We're querying our database to fetch the tracklist, hang on
                tight, it shouldn't take more than 5 minutes. Please don't close
                the window.
              </p>
            </div>
          ) : null}
          <div className="submit-show-inputs">
            {!confirmedSlot ? (
              <div>
                <p>
                  You want to submit a show on{" "}
                  {formatDate(new Date(selectedSlot))}, right?
                </p>
                <div className="submit-show-buttons">
                  <button onClick={handleBack}>No take me back</button>
                  <button onClick={handleConfirmSlot}>Yes</button>
                </div>
              </div>
            ) : !confirmedName ? (
              <div>
                <p>What's your curator name?</p>
                <div className="submit-show-buttons">
                  <input
                    type="text"
                    id="name"
                    placeholder="Teki Latex"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                  />
                  <button onClick={handleConfirmName}>Confirm</button>
                </div>
              </div>
            ) : !confirmedShowName ? (
              <div>
                <p>Nice to hear from you {name}</p>
                <p> How would you like to name your show?</p>
                <div className="submit-show-buttons show-name-buttons">
                  <input
                    type="text"
                    id="show-name"
                    placeholder="My Hidden Spoken Word Gems"
                    value={showName}
                    onChange={(event) => setShowName(event.target.value)}
                    required
                  />
                  <div className="buttons-row">
                    <button onClick={handleBackConfirmShowName}>Back</button>
                    <button onClick={handleConfirmShowName}>Confirm</button>
                  </div>
                </div>
              </div>
            ) : !confirmedDescription ? (
              <div>
                <p>
                  What a show name: {showName} by {name}!
                </p>
                <p>
                  Do you want to share more info about the show with Raxdio
                  users?{" "}
                </p>
                <div className="submit-show-buttons show-name-buttons">
                  <textarea
                    type="text"
                    id="show-description"
                    placeholder="My Hidden Spoken Word Gems"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    required
                  />
                  <div className="buttons-row">
                    <button onClick={handleBackConfirmDescription}>Back</button>
                    <button onClick={handleConfirmDescription}>Confirm</button>
                  </div>
                </div>
              </div>
            ) : !confirmedSocials ? (
              <div>
                <p>Any social networks you want to share?</p>
                <div className="submit-show-buttons show-name-buttons">
                  <div className="social-input-wrapper">
                    <IG />
                    <input
                      type="url"
                      className="social-input"
                      placeholder="https://instagram.com"
                      value={igUrl}
                      onChange={(event) => setIgUrl(event.target.value)}
                      required
                    />
                  </div>

                  <div className="social-input-wrapper">
                    <BC />
                    <input
                      type="url"
                      className="social-input"
                      placeholder="https://bandcamp.com"
                      value={bcUrl}
                      onChange={(event) => setBcUrl(event.target.value)}
                      required
                    />
                  </div>
                  <div className="social-input-wrapper">
                    <SC />

                    <input
                      type="url"
                      className="social-input"
                      placeholder="https://soundcloud.com"
                      value={soundcloudUrl}
                      onChange={(event) => setSoundcloudUrl(event.target.value)}
                      required
                    />
                  </div>
                  <div className="buttons-row">
                    <button onClick={handleBackConfirmSocials}>Back</button>
                    <button onClick={handleConfirmSocials}>Confirm</button>
                  </div>
                </div>
              </div>
            ) : !confirmedPlaylist ? (
              <div>
                <p>
                  Now, the most interesting part, can you share the Spotify
                  Playlist URL which we'll use to create your show's tracklist,
                  it should be public!
                </p>
                <div className="submit-show-buttons show-name-buttons">
                  <input
                    type="url"
                    id="playlist-url"
                    className="social-input"
                    placeholder="https://open.spotify.com/playlist/37i9dQZF1DX7EMLexEFdeT"
                    value={playlistUrl}
                    onChange={(event) => setPlaylistUrl(event.target.value)}
                    required
                  />
                  {playlistUrl.includes("spotify") && (
                    <iframe
                      title="spotify"
                      src={`https://open.spotify.com/embed/playlist/${
                        playlistUrl.split("playlist/")[1]
                      }`}
                      height="100"
                      frameborder="0"
                      allowtransparency="true"
                      allow="encrypted-media"
                    ></iframe>
                  )}
                  <div className="buttons-row">
                    <button onClick={handleBackConfirmPlaylist}>Back</button>
                    <button onClick={handleSubmit}>Confirm</button>
                  </div>
                </div>
              </div>
            ) : tracks === null ? (
              <div className="loader-container">
                <div className="loader"></div>
              </div>
            ) : (
              <Tracklist
                playlistTracks={tracks}
                selectedSlot={selectedSlot}
                name={name}
                showName={showName}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitShow;
