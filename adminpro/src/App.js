import React from 'react';
import {BrowserRouter as Router, Routes, Route, Outlet} from 'react-router-dom';
import Footer from './APLayout/Footer';
import APnavBar from "./APLayout/APnavBar";
import Home from "./APPages/Home";
import About from "./APPages/About";
import Start from "./APPages/Start";
import Start2Home from './APPages/Start2Home';

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
          <Route path="/2home" element={<Start2Home/>} />
            <Route element={<Layout/>}>
              <Route path="/home" element={<Home/>} />
              <Route path="/aboutUS" element={<About/>} />
            </Route>          
        </Routes>
    </Router>
    );
  }

export default App;
