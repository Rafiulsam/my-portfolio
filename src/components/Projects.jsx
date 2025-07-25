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
    image: "/Rest-countries.jpg",
    title: 'Around the World',
    description: 'Around the World is a React web app that explores global country. It displays details like flags, population, area, region, and more.',
    links: {
      live: 'https://around-the-w0rld.netlify.app/',
      github: 'https://github.com/Rafiulsam/around-the-world',
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
   {
    image: "/portfolio.jpg",
    title: 'Personal Portfolio',
    description: 'This is a personal art portfolio website that showcases artwork, creative projects, and artistic background in a clean, responsive layout.',
    links: {
      live: 'https://noveranikkon.netlify.app/',
      github: 'https://github.com/Rafiulsam/novera_portfolio',
    }
  },
];

const Projects = () => {
  return (
    <section className="pt-32 mb-20">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-6xl font-bold text-center text-gray-800 dark:text-white"
        >
          Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-lg text-gray-600 dark:text-slate-300 text-center max-w-2xl mx-auto px-10"
        >
          Here are some projects I've developed <span className='font-semibold text-red-700'>during my learning journey.</span>
        </motion.p>
        {/* Projects Container */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {projects.map((project, index) => (
            <div key={index} className='transition-transform duration-200 md:hover:scale-105'>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-100 dark:bg-[#1a1d23] p-6 rounded-lg shadow-lg shadow-red-300 dark:shadow-gray-400 md:h-full flex flex-col justify-between"
              >
                {/* Image Container */}
                <div className="relative w-full mb-2">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />

                  <a href={project.links.live} target='_blank' className="hidden absolute inset-0 bg-black bg-opacity-50 md:flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 rounded-lg">
                    <FaArrowUpRightFromSquare className="text-red-400 text-3xl drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]" />
                  </a>
                </div>

                {/* Project Info */}
                <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white">{project.title}</h3>
                <p className="text-sm mt-2 text-gray-600 dark:text-slate-300">{project.description}</p>

                {/* Links */}
                <div className='flex flex-col space-y-3 mt-4 md:space-y-0 md:space-x-4 md:flex-row'>
                  <a
                    href={project.links.github} target='_blank'
                    className="w-full md:w-auto text-xs flex justify-center items-center gap-2 px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 font-semibold"
                  >
                    Client Side <GoRepo />
                  </a>
                  {project.links.server && (
                    <a
                      href={project.links.server} target='_blank'
                      className="w-full md:w-auto text-xs flex justify-center items-center gap-2 px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 font-semibold"
                    >
                      Server Side <GoRepo />
                    </a>
                  )}
                </div>

                {/* Mobile Live Link */}
                <a href={project.links.live} target='_blank' className="md:hidden flex justify-center items-center gap-2 mt-4 w-full border border-red-700 text-red-500 text-lg rounded-lg py-2">
                  View Live <FaArrowUpRightFromSquare/>
                </a>

              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;