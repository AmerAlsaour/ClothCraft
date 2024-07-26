import React from 'react';
import { motion } from 'framer-motion';

function WharPeopleSay() {
    return (
        <div className="flex bg-white w-full h-[579px] overflow-hidden mb-10">
            <motion.div
                className='bg-white w-[43%] h-full'
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
            >
            <img src='/Say.jpeg' alt='tuth' className="w-full h-full object-cover rounded-s-full" />
            </motion.div>
            <motion.div
                className='bg-white w-[57%] flex flex-col justify-center'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div>
                    <h1 className='mb-11 pt-2 font-bold text-3xl text-center'>What do people say about us?</h1>
                </div>
                <motion.div
                    className='flex flex-row bg-white w-[390px] h-[95px] ml-7 mb-11'
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                >
                    <div className='w-[30%]'>
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
                        <div className="chat-bubble bg-slate-200 rounded-xl p-2">
                            <p className='text-black'>destroy the Sith, not join them</p>
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
                        <div className="chat-bubble bg-slate-200 text-black rounded-xl p-2">You underestimate my power!</div>
                    </motion.div>
                    <div className='w-[30%]'>
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
                <div className='w-[30%]'>
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
                        <div className="chat-bubble bg-slate-200 text-black rounded-xl p-2">
                            <p className='text-black'>It's over Anakin,</p>
                            <p className='text-black'>I have the high ground.</p>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default WharPeopleSay;
