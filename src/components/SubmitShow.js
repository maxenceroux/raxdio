import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SubmitShow = () => {
  const { selectedSlot } = useParams();
  const [name, setName] = React.useState("");
  const [showName, setShowName] = React.useState("");
  const [playlistUrl, setPlaylistUrl] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [soundcloudUrl, setSoundcloudUrl] = React.useState("");
  const [igUrl, setIgUrl] = React.useState("");
  const [bcUrl, setBcUrl] = React.useState("");

  const [tracks, setTracks] = useState(null);

  useEffect(() => {
    if (showName && name) {
      const interval = setInterval(() => {
        fetch(
          `http://localhost:8002/playlist_tracks?show_time=${selectedSlot}&show_name=${showName}&show_author=${name}`
        )
          .then((response) => response.json())
          .then((data) => {
            if (data !== null) {
              setTracks(data);
              clearInterval(interval);
            }
          });
      }, 5000); // make request every 20 seconds

      return () => clearInterval(interval);
    }
  }, [showName]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    const formData = new FormData();
    formData.append("file", file);

    fetch(`http://localhost:8002/upload_track`, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setTracks((tracks) => [...tracks, { title: data.filename }]);
      })
      .catch((error) => console.error(error));
  };

  const handleSubmit = (event) => {
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
    fetch("http://localhost:8002/show", requestOptions)
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
    fetch("http://localhost:8002/save_playlist", {
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
        alert("Playlist saved successfully!");
        window.location.href = "/schedule";
      })
      .catch((error) => {
        console.error("There was a problem saving the playlist:", error);
        alert("There was a problem saving the playlist.");
      });
  };

  return (
    <div className="submit-show">
      <h1>Submit Show</h1>
      <p>You want to submit a show on {selectedSlot}.</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
        <br />
        <label htmlFor="showName">Name of Show:</label>
        <input
          type="text"
          id="showName"
          value={showName}
          onChange={(event) => setShowName(event.target.value)}
          required
        />
        <br />
        <label htmlFor="playlistUrl">Playlist URL:</label>
        <input
          type="url"
          id="playlistUrl"
          value={playlistUrl}
          onChange={(event) => setPlaylistUrl(event.target.value)}
          required
        />
        <label htmlFor="description">Playlist description:</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          required
        />
        <label htmlFor="soundcloudUrl">Soundcloud URL:</label>
        <input
          type="url"
          id="scUrl"
          value={soundcloudUrl}
          onChange={(event) => setSoundcloudUrl(event.target.value)}
        />
        <label htmlFor="bandcampUrl">Bandcamp URL:</label>
        <input
          type="url"
          id="bandcampUrl"
          value={bcUrl}
          onChange={(event) => setBcUrl(event.target.value)}
        />
        <label htmlFor="igUrl">Instagram URL:</label>
        <input
          type="url"
          id="igUrl"
          value={igUrl}
          onChange={(event) => setIgUrl(event.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      {playlistUrl.includes("spotify") && (
        <iframe
          title="spotify"
          src={`https://open.spotify.com/embed/playlist/${
            playlistUrl.split("playlist/")[1]
          }`}
          width="300"
          height="380"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      )}

      {tracks === null ? (
        <p>Waiting for tracks...</p>
      ) : (
        <div>
          <input type="file" onChange={handleFileUpload} />

          <ol>
            {tracks.map((track, index) => (
              <li
                key={index}
                draggable
                onDragStart={(e) => handleDragStart(e, index)}
                onDragOver={(e) => handleDragOver(e, index)}
                onDrop={(e) => handleDrop(e, index)}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <p>{index + 1}</p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <p style={{ margin: 0 }}>{track.title}</p>
                    <p style={{ margin: 0 }}>{track.artist}</p>
                  </div>
                  <button
                    style={{
                      backgroundColor: "red",
                      color: "white",
                      border: "none",
                      padding: "5px",
                      borderRadius: "5px",
                    }}
                    onClick={() => handleRemoveTrack(index)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ol>
          <button onClick={savePlaylist}>Save Playlist</button>
        </div>
      )}
    </div>
  );
};

export default SubmitShow;
