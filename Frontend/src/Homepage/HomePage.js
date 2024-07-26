import React from "react";
import Navbar from "../Landpage/Navebar";
import Herosection from "../Landpage/Herosection";
import About from "./About";
import Service from "./Service";
import WharPeopleSay from "./WharPeopleSay";
import Market from "./Market";
import Footer from "../Landpage/Footer";
import HerosectionHome from "./HerosectionHome";
import NavebarHome from "./NavebarHome";
import Market2 from "./Market2";
import Market3 from "./market3";

function HomePage() {
  return (
    <div className="bg-white">
      <NavebarHome />
      <HerosectionHome/>
      <Market />
      <Market2 />
      <Market3 />
      <Footer />
    </div>
  );
}

export default HomePage;
