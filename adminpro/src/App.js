import React from 'react';
import {BrowserRouter as Router, Routes, Route, Outlet} from 'react-router-dom';
import Footer from './APLayout/Footer';
import APnavBar from "./APLayout/APnavBar";
import Home from "./APPages/Home";
import About from "./APPages/About";
import Start from "./APPages/Start";

const Layout = () => (
  <>
    <APnavBar/>
    <Outlet/>
    <Footer/>
  </>
)

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Start/>} />
            <Route element={<Layout/>}>
              <Route path="/home" element={<Home/>} />
              <Route path="/aboutUS" element={<About/>} />
            </Route>          
        </Routes>
    </Router>
    );
  }

export default App;
