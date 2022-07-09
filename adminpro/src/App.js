import React from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Footer from './APLayout/Footer';
import APnavBar from "./APLayout/APnavBar";
import Home from "./APPages/Home";
import About from "./APPages/About";
import Start from "./APPages/Start";

function App() {
  return (
    <Router>
      <APnavBar />
        <Routes>
          <Route path="/" element={<Start/>} />
          <Route path="/Home" element={<Home/>} />
          {/* <Route path="/" element={<Navigate replace to="/Home" />} /> */}
          <Route path="/AboutUS" element={<About/>} />
        </Routes>
      <Footer />
  </Router>
  );
}

export default App;
