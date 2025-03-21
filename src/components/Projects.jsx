import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { GoRepo } from 'react-icons/go';

const projects = [
  {
    image: "/Flavors-of-india.jpg",
    title: 'Flavors of India',
    description: 'Flavors of India is a React-based web app showcasing India’s diverse cuisine.',
    links: {
      live: 'https://flavors-of-india-d6dbf.web.app/',
      github: 'https://github.com/Rafiulsam/flavors-of-india-client',
      server: 'https://github.com/Rafiulsam/Flavors_of_india_server',
    },
  },
  {
    image: "/E-baj.jpg",
    title: 'E-commerce Site',
    description: 'A simple e-commerce site build with React lets users browse products, add them to a cart, and check out.',
    links: {
      live: 'https://e-baj-app.netlify.app/',
      github: 'https://github.com/Rafiulsam/e-baj-simple',
    }
  },
  {
    image: "/BookNest.jpg",
    title: 'Book Nest',
    description: 'BookNest is a user-friendly online bookstore built with React, allowing users to easily browse and purchase books.',
    links: {
      live: 'https://booknest768.netlify.app/',
      github: 'https://github.com/Rafiulsam/BookNest-react-route',
    }
  },
];

const Projects = () => {
  return (
    <section className="pt-32 mb-20 bg-white lg:h-screen">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-gray-800"
        >
          Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-lg text-gray-600 text-center max-w-2xl mx-auto px-10"
        >
          Here are some projects I've developed <span className='font-semibold text-red-700'>during my learning journey.</span>
        </motion.p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Projects Container */}
          {projects.map((project, index) => (
            <div key={index} className='transition-transform duration-200 hover:scale-105'>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-100 p-6 rounded-lg shadow-xl shadow-red-400 h-96 flex flex-col justify-between"
              >
                {/* Image Container */}
                <div className="relative w-full h-40">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-lg"
                  />

                  <a href={project.links.live} target='_blank' className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 rounded-lg">
                    <FaArrowUpRightFromSquare className="text-red-400 text-3xl drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]" />
                  </a>
                </div>

                {/* Project Info */}
                <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                <p className="mt-2 text-gray-600">{project.description}</p>
                <div className='space-x-4'>
                  <a
                    href={project.links.github} target='_blank'
                    className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 font-semibold"
                  >
                    Client Side <GoRepo />
                  </a>
                  {project.links.server && (
                    <a
                      href={project.links.server} target='_blank'
                      className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 font-semibold"
                    >
                      Server Side <GoRepo />
                    </a>
                  )}
                </div>

              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;