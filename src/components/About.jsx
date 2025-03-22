import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const { left, top } = e.target.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    setCursorPosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <section className="container mx-auto px-6 lg:flex lg:justify-between gap-5 lg:items-center lg:mt-40 lg:mb-20">
      {/* About */}
      <div className="mx-auto py-52 pr-10 text-center lg:text-left ">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-6xl font-bold text-gray-800 "
        >
          About Me
        </motion.h2>
        {/* Image container for mobile*/}
        <div className="mt-10 mx-auto w-3/5 md:hidden">
          <div className="relative">
            {/* image */}
            <motion.img
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              src="my-picture.jpeg"
              alt="My picture"
              className="rounded-lg w-full"
            />
          </div>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 md:text-justify lg:text-2xl text-gray-600 max-w-4xl mx-auto"
        >
          Hey, I'm <span className='text-red-700 font-semibold'>Rafiul Islam Sameer</span>, a front-end developer with a passion for crafting beautiful and functional web experiences. I enjoy turning ideas into reality and making websites that are smooth and user-friendly.
          <br />
          <br />
          When I'm not busy coding, you'll find me <span className='text-red-700 font-semibold'>exploring my love for art</span> or <span className='text-red-700 font-semibold'>traveling to exciting places.</span>
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 flex justify-center lg:justify-start space-x-4"
        >
          <Link
            to="/projects"
            className="px-3 md:px-6 py-3 font-semibold bg-red-700 text-white rounded-lg hover:bg-red-800"
          >
            View My Work
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 bg-gray-800 font-semibold text-white rounded-lg hover:bg-gray-900"
          >
            Contact Me
          </Link>
        </motion.div>
      </div >
      {/* Image container for desktop */}
      <div
        className="hidden md:block w-2/5 "
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative">
          {/* image */}
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            src="my-picture.jpeg"
            alt="coding"
            className="rounded-lg w-full"
          />

          {/* Invert Mask */}
          {isHovering && (
            <div
              className="absolute pointer-events-none"
              style={{
                left: `${cursorPosition.x - 75}px`,
                top: `${cursorPosition.y - 75}px`,
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                background: 'white',
                mixBlendMode: 'hue',
              }}
            />
          )}
        </div>
      </div>
    </section >
  );
};

export default About;