import React from "react";

class RadioPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isPlaying: false };
  }

  handleClick = () => {
    if (this.props.audio.paused || this.props.audio.ended) {
      this.props.audio.play();
      this.setState({ isPlaying: true });
    } else {
      this.props.audio.pause();
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
