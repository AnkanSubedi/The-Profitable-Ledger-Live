import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import { Navigation, Footer, Alert } from "./components/index.js";
import { Landing, Services, About, Team, RCM } from "./routes/index.js";

function App() {
  const [isAlertVisible, setIsAlertVisible] = useState(true);
  const location = useLocation(); // Get the current route location

  const dismissAlert = () => {
    setIsAlertVisible(false); // Hide Alert when closed
  };

  return (
    <div>
      {/* Render Alert only on the /services page */}
      {location.pathname === "/services" && isAlertVisible && (
        <Alert onClose={dismissAlert} />
      )}
      <Navigation style={{ marginTop: isAlertVisible ? "50px" : "0" }} /> {/* Pass margin-top to Navbar */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/rcm" element={<RCM />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router basename="">
      <App />
    </Router>
  );
}
