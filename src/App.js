import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css";
import "./styles-mobile.css";
import HomePage from "./components/HomePage";
import Schedule from "./components/Schedule";
import SubmitShow from "./components/SubmitShow";
import AudioProvider from "./components/AudioProvider";
import Top from "./components/Top";
function App() {
  return (
    <Router>
      <AudioProvider>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/schedule" element={<Schedule />} />
          <Route exact path="/top-albums-2023" element={<Top />} />
          <Route
            exact
            path="/submit-show/:selectedSlot"
            element={<SubmitShow />}
          />
        </Routes>
      </AudioProvider>
    </Router>
  );
}

export default App;
