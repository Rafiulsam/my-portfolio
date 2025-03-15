import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Skill from './Skill';

const About = () => {
  return (
    <div className='container mx-auto px-6'>
      {/* About */}
      <section id="about" className="py-52 lg:pt-80 flex justify-center items-center">
        <div className="mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl lg:text-4xl font-bold text-center text-gray-800"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 lg:text-2xl text-gray-600 max-w-4xl mx-auto text-center"
          >
            Hi, I'm Rafiul Islam Sameer, a passionate front-end developer with a love for creating beautiful and functional web experiences. I specialize in building responsive, user-friendly websites using modern technologies like React, Tailwind CSS, and JavaScript. When I'm not coding, you can find me exploring new design trends or contributing to open-source projects.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 flex justify-center space-x-4"
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
        </div>

        {/* <div className="hidden md:block w-1/2">
        <motion.img
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          src=""
          alt="coding"
          className="rounded-lg shadow-xl"
        />
        </div> */}
      </section>

      {/* Skills */}
          <Skill />
    </div>
  );
};

export default About;