import { useEffect } from 'react';
import React from 'react';
import { motion } from 'framer-motion';

function WharPeopleSay() {
    useEffect(()=>{
        AOS.init({ duration:1000});
      },[]);
    return (
        <div className="flex bg-white w-full h-[579px] overflow-hidden mb-10">
            <motion.div
                className='bg-white w-[43%] h-full'
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
            >
            <img src='/Say.jpeg' alt='tuth' className="w-full h-full object-cover rounded-s-full" data-aos="fade-left" />
            </motion.div>
            <motion.div
                className='bg-white w-[57%] flex flex-col justify-center'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div>
                    <h1 className='mb-11 pt-2 font-bold text-3xl text-center text-orange-500' data-aos="fade-left">Testimonials</h1>
                </div>
                <motion.div
                    className='flex flex-row bg-white w-[390px] h-[95px] ml-7 mb-11'
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                >
                    <div className='w-[30%]' data-aos="fade-left">
                        <motion.img
                            src='AmerAlsaour.jpg'
                            className='border-gray-950 border-2 border-solid rounded-full'
                            whileHover={{ scale: 1.1 }}
                        />
                    </div>
                    <motion.div
                        className="chat chat-start"
                        whileHover={{ scale: 1.05 }}
                    >
                    <div className="chat-bubble bg-slate-200 rounded-xl p-2" data-aos="fade-left">
                        <p className='text-black'>Greate work and excellent service</p>
                        <p className='text-black'>I,am so happy</p>
                    </div>
                    </motion.div>
                </motion.div>
                <motion.div
                    className='flex flex-row bg-white w-[390px] h-[95px] ml-auto mr-7 mb-11'
                    initial={{ x: '-100%' }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                >
                    <motion.div
                        className="chat chat-end"
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="chat-bubble bg-slate-200 text-black rounded-xl p-2" data-aos="fade-left">You understand my design!</div>
                    </motion.div>
                    <div className='w-[30%]' data-aos="fade-left">
                        <motion.img
                            src='ELLipse 33 (2).png'
                            className='border-gray-950 border-2 border-solid rounded-full'
                            whileHover={{ scale: 1.1 }}
                        />
                    </div>
                </motion.div>
                <motion.div
                    className='flex flex-row bg-white w-[390px] h-[95px] ml-7 mb-11 pl-2'
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                >
                <div className='w-[30%]' data-aos="fade-left">
                        <motion.img
                            src='ELLipse 34 (3).png'
                            className='border-gray-950 border-2 border-solid rounded-full'
                            whileHover={{ scale: 1.1 }}
                        />
                    </div>
                    <motion.div
                        className="chat chat-start"
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="chat-bubble bg-slate-200 text-black rounded-xl p-2" data-aos="fade-left">
                            <p className='text-black'>It's amazing,</p>
                            <p className='text-black'>I own the brush for design .</p>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default WharPeopleSay;
