import React from 'react';
import Buttonlight from './Buttonlight';
import './../Component/Style.css';
import { useNavigate } from 'react-router-dom';

function NavebarHome() {
  const navigate = useNavigate(); 
  const handleClickSign = () => {
    navigate('/', { replace: true }); // navigate to /another-page
  };
  return (
    <nav className="bg-white shadow-md sticky top-0 min-w-full z-10">
      <div className="container mx-auto px-4 flex items-center justify-between">
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
          <button className=" bgblueden  text-xl  borderbluedent border-2 rounded-xl px-8  text-white py-1 focus:outline-none focus:shadow-outline" onClick={handleClickSign}>
            Logout 
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavebarHome;