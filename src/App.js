import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles.css";
import "./styles-mobile.css";
import HomePage from "./components/HomePage";
import Schedule from "./components/Schedule";
import SubmitShow from "./components/SubmitShow";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/schedule" element={<Schedule />} />
        <Route
          exact
          path="/submit-show/:selectedSlot"
          element={<SubmitShow />}
        />
      </Routes>
    </Router>
  );
}

export default App;
