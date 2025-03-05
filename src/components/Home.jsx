import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ParticlesBackground from './ParticlesBackground';

const Home = () => {
    return (
        <section id="home" className="container mx-auto min-h-screen px-12 flex flex-col md:flex-row items-center justify-center md:justify-between relative">
             {/* Background Particles */}
             <ParticlesBackground />
            {/* Left Content */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1}}
                className="text-center md:text-left"
            >
                <h1 className="text-3xl md:text-6xl font-bold text-white">
                    Hi, I'm <span className='text-gray-800'>Sam</span>eer
                </h1>
                <p className="mt-4 text-white">
                    A passionate front-end developer building user-friendly web experiences.
                </p>
                <Link
                    to="/projects"
                    className="mt-8 ml-[4px] inline-block px-6 py-3 font-semibold bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-lg"
                >
                    View My Work
                </Link>
            </motion.div>

            {/* Right Image */}
            {/* <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="mt-10 md:mt-0"
            >
                <img src="/banner_pic.png" alt="Banner" className="w-64 md:w-full" />
            </motion.div> */}
        </section>
    );
};

export default Home;