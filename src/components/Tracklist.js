import React from "react";
import { useState, useEffect } from "react";
import { ReactComponent as Cancel } from "../assets/cancel.svg";
import TracklistSavedModal from "./TracklistSavedModal";
import "./tracklist.css";

const Tracklist = ({ playlistTracks, selectedSlot, name, showName }) => {
  const [tracks, setTracks] = useState(playlistTracks);
  const [showTracklistConfirmationModal, setShowTracklistConfirmationModal] =
    useState(false);
  useEffect(() => {
    const container = document.getElementsByClassName(
      "submit-show-container"
    )[0];
    if (container) {
      container.classList.add("background-overflow");
    }
  }, []);
  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    const formData = new FormData();
    formData.append("file", file);

    fetch(`${process.env.REACT_APP_API_URL}/upload_track`, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setTracks((tracks) => [
          ...tracks,
          { title: data.filename, artist: "" },
        ]);
      })
      .catch((error) => console.error(error));
  };

  const handleDragStart = (event, index) => {
    event.dataTransfer.setData("index", index);
  };
  const handleDrop = (event, dropIndex) => {
    const dragIndex = event.dataTransfer.getData("index");
    if (dragIndex === dropIndex) return;

    const newTracks = [...tracks];
    const dragTrack = newTracks[dragIndex];
    newTracks.splice(dragIndex, 1);
    newTracks.splice(dropIndex, 0, dragTrack);
    setTracks(newTracks);
  };
  const handleDragOver = (event) => {
    event.preventDefault();
  };
  const handleRemoveTrack = (index) => {
    const newTracks = [...tracks];
    newTracks.splice(index, 1);
    setTracks(newTracks);
  };
  const savePlaylist = () => {
    const playlist = {
      start_datetime: selectedSlot,
      author: name,
      name: showName,
      ordered_tracks: tracks,
    };
    console.log(playlist);
    fetch(`${process.env.REACT_APP_API_URL}/save_playlist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(playlist),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setShowTracklistConfirmationModal(true);
      })
      .catch((error) => {
        console.error("There was a problem saving the playlist:", error);
        alert("There was a problem saving the playlist.");
      });
  };
  return (
    <div className="tracklist-wrapper">
      <h1>Et voila! Here's your wonderful tracklist:</h1>
      <h3>
        Some tracks might be missing, you can upload your own .mp3 file (wait a
        few seconds to see tracks dropping in the tracklist ) if you think the
        track is that gem which makes the difference.
      </h3>
      <h3>
        You can rearrange your tracks' order to compile the perfect tracklist.
        Tracks will be read in order of appearance. <br />
        Be aware that tracklists of less than one hour will be played in a loop
        while tracklists of more than one hour will be stopped at the end of the
        dedicated time slot
      </h3>
      <h3>
        Hitting <i>Save tracklist</i> button will automatically load your
        selection into Raxdio and go live at the selected slot!
      </h3>
      <div>
        <div className="tracklist">
          <ol>
            {tracks.map((track, index) => (
              <li
                key={index}
                draggable
                onDragStart={(e) => handleDragStart(e, index)}
                onDragOver={(e) => handleDragOver(e, index)}
                onDrop={(e) => handleDrop(e, index)}
              >
                <div className="track">
                  <p style={{ margin: 0 }}>
                    {track.title} by {track.artist}
                  </p>
                  <Cancel
                    id="remove-track"
                    onClick={() => handleRemoveTrack(index)}
                  />
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="buttons-row-tracklist">
          <input
            type="file"
            className="file-input-label"
            onChange={handleFileUpload}
          />
          <button onClick={savePlaylist}>Save tracklist</button>
        </div>
      </div>
      {showTracklistConfirmationModal && (
        <TracklistSavedModal
          onClose={() => setShowTracklistConfirmationModal(false)}
        />
      )}
    </div>
  );
};
export default Tracklist;
