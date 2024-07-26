import React from "react";
import Navbar from "./Navebar";
import Herosection from "./Herosection";
import About from "./About";
import Service from "./Service";
import WharPeopleSay from "./WharPeopleSay";
import Market from "./Market";
import Footer from "./Footer";
import Hero from "./Hero";
function HomePage() {
  return (
    <div className="bg-white">
      <Navbar />
      <Herosection/>
     <h1>OUR Product</h1>
      <Market />
      <Market />
      <Market />
      <Footer />
    </div>
  );
}

export default HomePage;
