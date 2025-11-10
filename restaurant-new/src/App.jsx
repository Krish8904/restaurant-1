import React from "react";
import { Routes, Route } from "react-router-dom";
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from "./components";
import Booking from "./components/Booking";
import ScrollToTop from "./components/ScrollToTop";
import LoginRegister from "./components/LoginRegister";
import Profile from "./components/Profile";
import './App.css';

const App = () => (
  <>
    <Navbar />
    <Routes>
      {/* Homepage */}
      <Route
        path="/"
        element={
          <>
            <Header />
            <AboutUs />
            <SpecialMenu />
            <Chef />
            <Intro />
            <Laurels />
            <Gallery />
            <FindUs />
            <Booking />
            <Footer />
            <ScrollToTop />
          </>
        }
      />

      {/* Login/Register Page */}
      <Route path="/login" element={<LoginRegister />} />

      {/* Profile Page */}
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </>
);

export default App;
