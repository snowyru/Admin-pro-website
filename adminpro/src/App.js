import React from 'react';
import {BrowserRouter as Router, Routes, Route, Outlet} from 'react-router-dom';
import Footer from './APLayout/Footer';
import APnavBar from "./APLayout/APnavBar";
import Home from "./APPages/Home";
import About from "./APPages/About";
import Start from "./APPages/Start";
import { AnimatePresence } from 'framer-motion';

const Layout = () => (
  <>
    <APnavBar/>
    <Outlet/>
    <Footer/>
  </>
)

function App(isStarted) {

  return (
    <Router>
      <AnimatePresence initial={false} exitBeforeEnter>
        <Routes>
          {isStarted &&(<Route path="/" element={<Start/>}/>)}          
            <Route element={<Layout/>}>
              <Route path="/home" element={<Home/>} />
              <Route path="/aboutUS" element={<About/>} />
            </Route>          
        </Routes>
      </AnimatePresence>
    </Router>
    );
  }

export default App;
