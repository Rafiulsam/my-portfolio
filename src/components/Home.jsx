import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ParticlesBackground from './ParticlesBackground';

const Home = ({ theme }) => {

    const banner_img = theme === "dark" ? "/banner_pic_red.png" : "/banner_pic.png";
    return (
        <section id="home" className="container mx-auto mt-20 md:mt-0 min-h-screen px-10 flex flex-col md:flex-row items-center justify-center md:justify-between relative">
            {/* Background Particles */}
            <ParticlesBackground theme={theme} />
            {/* Left Content */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center md:text-left"
            >
                <h1 className='text-2xl lg:text-4xl text-white'>Hello There!, I'm-</h1>
                <h1 className="text-8xl lg:text-[12rem] font-bold text-white">
                    <i><span className='text-black  dark:text-red-700'>Sam</span>eer</i>
                </h1>
                <p className="mt-4 lg:text-xl px-8 md:p-0 text-white">
                    A passionate front-end developer building user-friendly web experiences.
                </p>
                <Link
                    to="/projects"
                    className="mt-8 md:ml-[4px] inline-block px-6 py-3 font-semibold bg-black bg-opacity-50 dark:bg-white dark:opacity-50 dark:text-black hover:bg-opacity-70 hover:dark:opacity-70 text-white rounded-lg"
                >
                    View My Work
                </Link>
            </motion.div>

            {/* Right Image */}
            <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                whileHover={{ scale: 1.1 }}
                className="p-5 md:w-[28rem]"
            >
                <img src={banner_img} alt="Banner" className="w-64 md:w-full  p-3" />
            </motion.div>
        </section>
    );
};

export default Home;