import React from 'react';
import Hero from './Hero';
import './../Component/Style.css';
function HerosectionHome() {
  return (
    <div className='flex flex-row bg-white mt-9'>

      <div className='w-[50%] bg-white flex items-center justify-center'>
        {/* ===== */}
       <div className='flex flex-col'>
        <div className='bg-white mb-14'>
            <p className='text-4xl font-bold mb-2'>Welcome to</p>
            <p className='text-4xl font-bold  blueden'>Cloth Craft</p>
        </div>
        {/* ===== */}
        <div className='bg-white mb-14'>
            <p className='text-2xl'>The bridge between us </p>
            <p className='text-2xl'>and the best Clothes industry </p>
        </div>
        {/* ===== */}
        </div>
      </div>
      {/* ==========50%========== */}
      <div className='w-[50%] ml-10'>
        <Hero />
      </div>
    </div>
  );
}
export default HerosectionHome;