import React from "react";

class RadioPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.audio = new Audio("https://icecast.radiofrance.fr/fip-hifi.aac"); // replace with your radio stream URL
    this.state = { isPlaying: false };
  }

  handleClick = () => {
    if (this.audio.paused || this.audio.ended) {
      this.audio.play();
      this.setState({ isPlaying: true });
    } else {
      this.audio.pause();
      this.setState({ isPlaying: false });
    }
  };
  render() {
    return (
      <img
        src={require("../assets/" +
          (this.state.isPlaying ? "pause-button" : "play-button") +
          ".png")}
        alt={this.state.isPlaying ? "pause-button" : "play-button"}
        className="play-button"
        onClick={this.handleClick}
      />
    );
  }
}

export default RadioPlayer;
