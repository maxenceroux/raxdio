import React from "react";
import HorizontalPlayer from "./HorizontalPlayer";
import { Link } from "react-router-dom";
import "./header.css";
const Header = () => {
  return (
    <div className="header">
      <Link className="raxdio" to="/">
        <p className="raxdio">RAXDIO</p>
      </Link>
      <div className="player">
        <HorizontalPlayer />
      </div>
    </div>
  );
};

export default Header;
