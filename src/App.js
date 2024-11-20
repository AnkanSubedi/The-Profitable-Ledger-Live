import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import {Navigation, Footer} from "./components/index.js";
import {Landing, Services, About, Team} from "./routes/index.js"
// import {Landing, Team, Services, Resources, Contact } from "./routes/index.js"

function App() {
  return (
    <Router basename='/The-Profitable-Ledger-Live'>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/team" element={<Team/>} /> 
        {/* <Route path="/contact" element={<Contact/>} />*/}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
