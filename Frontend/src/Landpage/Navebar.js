import React from 'react';
import Buttonlight from './Buttonlight';
import './../Component/Style.css'

function Navbar() {
  
  return (
    <nav className="bg-white shadow-md sticky top-0 min-w-full z-10">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="text-xl font-bold blueden ml-8">
          <img
            className=" w-2/4 object-cover "
            src="./Amer-Logo1.png"
            alt="Logo Image"
          />
          </a>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="/about" className="bluedenhover">
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
        <div className=" md:flex  items-center mr-8 ">
        <Buttonlight/>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;