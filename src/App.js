/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// react-router components
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Team from "APPages/Team";
import Client from "APPages/Client";
import Contact from "APPages/Contact";
import Home from "./APPages/Home";
import Footer from "./APLayout/Footer";
import Navbar from "./APLayout/Navbar";

export default function App() {

  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/Home" element={<Home/>} />
          <Route path="/OurTeam" element={<Team/>} />
          <Route path="/OurClients" element={<Client/>} />
          <Route path="/ContactUs" element={<Contact/>} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}
