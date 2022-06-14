import React from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Footer from './APLayout/Footer';
import Navbar from "./APLayout/Navbar";
import Home from "./APPages/Home";
import About from "./APPages/About";

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/Home" element={<Home/>} />
          <Route path="/" element={<Navigate replace to="/Home" />} />
          <Route path="/AboutUS" element={<About/>} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
