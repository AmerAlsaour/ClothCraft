import React, { useEffect } from 'react';
import '../Component/Style.css'
import Buttonlight from './Buttonlight';
import Buttondark from './Buttondark';
// import Abouthero from './Abouthero';
// import pic from './About1.png'
// import pic2 from './About2.png'
import { SiTicktick } from "react-icons/si";
import { duration } from 'moment';

function About() {
  useEffect(()=>{
    AOS.init({ duration:1000});
  },[]);
  return (
    <div className="container mx-auto px-4 bg-white py-16 text-center margintop10" >
      <h2 className="text-4xl font-bold mb-4 text-orange-500" data-aos="fade-up" >About us</h2>
      <div className="">
        <div className="flex justify-around items-center flexclomn"data-aos="fade-up" >
          <div className='mw50'>
            <img
              className=" object-cover w-3/5 rounded-s-full"
              src="./About1.jpeg"
              alt="About Hero Image"
            />
          </div>
          <div className='  flex flex-col  items-start'>
            <p className="text-3xl font-bold mb-2 text-black">Share the fun of making clothes with us</p>
            <p className="text-black mb-4 items-start font-bold text-2xl">For modern clothing industry</p>

            <div className='flex flex-row mb-3'>
              <div className='blueden text-xl flex mr-4'><SiTicktick /></div>
              <p className='text-xl'>High quality.</p>
            </div>
            {/* ================================== */}

            <div className='flex flex-row mb-3'>
              <div className='blueden text-xl flex mr-4'><SiTicktick /></div>
              <p className='text-xl'>Contact easily</p>
            </div>
            {/* ====================================== */}

            <div className='flex flex-row mb-3'>
              <div className='blueden text-xl flex mr-4'><SiTicktick /></div>
              <p className='text-xl'>Book your design</p>
            </div>
            {/* ======================================= */}

            <span className=''><Buttonlight/></span>
          </div>
        </div>
        <div className='w-full bg-white flex flex-row mt-24'data-aos="fade-up">

          <div className='w-[50%] flex  items-center justify-center bg-white'>
            <div className='bg-white w-96 '>
              <div className='flex flex-col items-start '>
                <p className='text-black font-bold text-3xl mb-4'>Find the latest models</p>
                <p className='text-black font-bold text-2xl mb-5'>More easily</p>
              </div>
              {/* ====== */}
              <div className='flex flex-row mb-3'>
                <div className='blueden text-xl flex mr-5'><SiTicktick /></div>
                <p className='text-xl'>Speed of work</p>
              </div>
              {/* =================== */}
              <div className='flex flex-row mb-3'>
              <div className='blueden text-xl flex mr-5'><SiTicktick /></div>
              <p className='text-xl'>Accuracy in work</p>
            </div>
            {/* ====================== */}
            <div className='flex flex-row mb-5'>
              <div className='blueden text-xl flex mr-5'><SiTicktick /></div>
              <p className='text-xl'>Contact easily</p>
            </div>
            {/* ===== */}
            <div className='flex flex-col items-start' >
            <span className=''><Buttonlight/></span>
            </div>
            </div>
          </div>
          {/* ============================================= */}
          <div className='w-[50%] flex items-center justify-center'><img
            className="w-96 mb-6  rounded-e-full"
            src="./About3.jpeg"
            alt="About Hero Image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;