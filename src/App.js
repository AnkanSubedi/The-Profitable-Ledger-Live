import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navigation, Footer, Alert } from "./components/index.js";
import { Landing, Services, About, Team, RCM } from "./routes/index.js";

function App() {
  const [isAlertVisible, setIsAlertVisible] = useState(true);

  const dismissAlert = () => {
    setIsAlertVisible(false); // Hide Alert when closed
  };

  return (
    <Router basename="/The-Profitable-Ledger-Live">
      {isAlertVisible && <Alert onClose={dismissAlert} />}
      <Navigation style={{ marginTop: isAlertVisible ? "50px" : "0" }} /> {/* Pass margin-top to Navbar */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/rcm" element={<RCM />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
