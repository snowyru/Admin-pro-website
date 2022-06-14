import React from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Footer from './APLayout/Footer';
import Navbar from "./APLayout/Navbar";
import Home from "./APPages/Home";

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/Home" element={<Home/>} />
          <Route path="/" element={<Navigate replace to="/Home" />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
