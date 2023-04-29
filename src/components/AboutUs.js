import React from "react";
import { ReactComponent as DiscordLogo } from "../assets/discord.svg";
import { ReactComponent as GithubLogo } from "../assets/github.svg";
const AboutUs = () => {
  function handleRedirectDiscord() {
    window.location.href = "https://discord.gg/5pn7WGssB9";
  }
  function handleRedirectGithub() {
    window.location.href = "https://github.com/maxenceroux/raxdio";
  }
  return (
    <div className="about-us">
      <div className="about-us-text">
        Raxdio is committed to keeping counterculture alive by empowering
        artists unfazed by expectations, unafraid to deviate, and driven by pure
        inspiration. <br />
        We're big believers in the open-source movement. That's why we've chosen
        to host our web radio on open-source software and platforms. We're
        committed to supporting community-driven development, promoting
        transparency, and collaborating with others to build a more open and
        inclusive society. <br />
        Stay tuned or contact us on Discord if you want to know more!
        <br />
      </div>
      <div className="credits">Amazing Kaeru Kaeru font by Isabel Motz</div>
      <div className="icons">
        <DiscordLogo onClick={handleRedirectDiscord} className="logo" />
        <GithubLogo onClick={handleRedirectGithub} className="logo" />
      </div>
    </div>
  );
};

export default AboutUs;
