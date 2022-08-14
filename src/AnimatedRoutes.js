import React from 'react';
import { AnimatePresence } from 'framer-motion';
import Footer from './APLayout/Footer';
import APnavBar from "./APLayout/APnavBar";
import Home from "./APPages/Home";
import About from "./APPages/About";
import Start from "./APPages/Start";
import Contact from "./APPages/Contact";
import { Outlet, Route, Routes, useLocation } from 'react-router-dom';

    const AnimatedRoutes = () => {
    const location = useLocation();
    const Layout = () => (
        <>
          <APnavBar/>
          <Outlet/>
          <Footer/>
        </>
      )
  
    return (
        <AnimatePresence initial={true} exitBeforeEnter>
            <Routes location={location} key={location.pathname}>   
            <Route path="/" element={<Start/>}/>
            
                <Route element={<Layout/>}>
                    <Route path="/Home" element={<Home/>} />
                    <Route path="/AboutUS" element={<About/>} />
                    <Route path="/ContactUs" element={<Contact/>} />
                </Route>          
            </Routes>
        </AnimatePresence>
    );
  };

  export default AnimatedRoutes;