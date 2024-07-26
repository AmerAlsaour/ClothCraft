import React from 'react';
import Buttonlight from './Buttonlight';
import './../Component/Style.css'

function Navbar() {
  
  return (
    <nav className="bg-white shadow-md fixed top-0 w-dvw z-10">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/homepage" className="text-xl font-bold blueden">
          <img
            className=" w-2/4 object-cover "
            src="./Amer-Logo1.png"
            alt="Logo Image"
          />
          </a>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="/Home" className="bluedenhover">
            Home
          </a>
          <a href="/about" className="bluedenhover">
            About
          </a>
          <a href="/services" className="bluedenhover">
            Services
          </a>
          <a href="/market" className="bluedenhover">
            Market
          </a>
        </div>
        <div className=" md:flex  items-center">
        <Buttonlight/>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;