import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section id="about" className="py-52 flex justify-center items-center">
      <div className="container mx-auto px-6 ">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-gray-800"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto text-center"
        >
          Hi, I'm Rafiul Islam Sameer, a passionate front-end developer with a love for creating beautiful and functional web experiences. I specialize in building responsive, user-friendly websites using modern technologies like React, Tailwind CSS, and JavaScript. When I'm not coding, you can find me exploring new design trends or contributing to open-source projects.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex justify-center space-x-4"
        >
          <Link
            to="/projects"
            className="px-6 py-3 bg-red-700 text-white rounded-lg hover:bg-red-800"
          >
            View My Work
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default About;