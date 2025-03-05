import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Weather App',
    description: 'A weather app using OpenWeather API.',
    link: '#',
  },
  {
    title: 'E-commerce Site',
    description: 'A fully responsive e-commerce website.',
    link: '#',
  },
  {
    title: 'Personal Blog',
    description: 'A blog built with Next.js and Markdown.',
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white lg:h-screen">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">Projects</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-100 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
              <p className="mt-2 text-gray-600">{project.description}</p>
              <a
                href={project.link}
                className="mt-4 inline-block px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;