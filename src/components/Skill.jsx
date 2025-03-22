import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import expressjs_icon from "../assets/expressjs_icon.png"
import Tailwind_icon from "../assets/Tailwind_CSS_Logo.png"

// Express.js Icon
const ExpressIcon = () => (
    <img src={expressjs_icon} alt="Express.js" className="w-10 h-10" />
);
// Tailwind css Icon
const TailwindIcon = () => (
    <img src={Tailwind_icon} alt="Express.js" className="w-10 h-10" />
);

const skills = [
    { name: 'HTML', icon: <FaHtml5 className="text-orange-500 text-4xl" />, level: 95 },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-500 text-4xl" />, level: 90 },
    { name: 'Tailwind CSS', icon: <TailwindIcon className="text-blue-500 text-4xl" />, level: 90 },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-500 text-4xl" />, level: 85 },
    { name: 'React', icon: <FaReact className="text-blue-400 text-4xl" />, level: 80 },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-600 text-4xl" />, level: 75 },
    { name: 'Express.js', icon: <ExpressIcon className="text-red-500 text-4xl" />, level: 70 },
    { name: 'Git', icon: <FaGitAlt className="text-red-500 text-4xl" />, level: 90 },
];

const Skill = () => {
    return (
        <section className="px-10 flex justify-center items-center mt-40 mb-52">
            <div className="mx-auto lg:flex justify-between items-center gap-10">
                <div className='lg:w-1/3'>
                    <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-6xl font-bold text-gray-800"
                    >
                        Skills
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="mt-4 text-lg text-gray-600  max-w-2xl mx-auto pr-10"
                    >
                        Here are some of the skills I've acquired over the years. <span className='font-semibold text-red-700'>I'm always learning and improving!</span>
                    </motion.p>
                </div>
                {/* skills container */}
                <div className="my-12 grid grid-cols-2 lg:grid-cols-4 gap-8 grow text-center">
                    {skills.map((skill, index) => (
                        <div key={index} className='transition-transform duration-200 hover:scale-110'>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="bg-gray-100 p-3 md:p-6 rounded-lg shadow-xl shadow-red-300"
                            >
                                <motion.div
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ repeat: Infinity, duration: 1 }}
                                    viewport={{ once: true }}
                                    className='flex items-center justify-center'
                                >
                                    {skill.icon}
                                </motion.div>
                                <h3 className="mt-4 text-lg font-bold text-gray-800">{skill.name}</h3>
                                <div className="mt-4">
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1, delay: index * 0.2 }}
                                            viewport={{ once: true }}
                                            className="h-2.5 rounded-full bg-red-700"
                                        />
                                    </div>
                                    <p className="mt-2 text-sm text-gray-600">{skill.level}%</p>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skill;