import React from 'react';
import { motion } from 'framer-motion';
import { FaAt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="py-20 ">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold text-center text-gray-800"
                >
                    Contact Me
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-4 text-lg text-gray-600 text-center max-w-2xl mx-auto"
                >
                    Have a question or want to work together? Feel free to reach out!
                </motion.p>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-8 p-8 rounded-lg shadow-xl shadow-red-400 max-w-2xl mx-auto "
                >
                    <form>
                        <div className="mb-6">
                            <label htmlFor="name" className="block font-medium mb-2 text-red-700">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Your Name"
                                className="w-full px-4 py-2  border-b border-red-300 focus:outline-none focus:ring-2 focus:ring-red-700"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block font-medium mb-2 text-red-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="your.email@example.com"
                                className="w-full px-4 py-2 border-b border-red-300 focus:outline-none focus:ring-2 focus:ring-red-700"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block font-medium mb-2 text-red-700">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="3"
                                placeholder="Your message..."
                                className="w-full px-4 py-2 border-b border-red-300 focus:outline-none focus:ring-2 focus:ring-red-700"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full px-6 py-3 bg-[#b61924] text-white rounded-lg hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-black"
                        >
                            Send Message
                        </button>
                    </form>
                </motion.div>

                {/* Additional Contact Info */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-12 text-center"
                >
                    <h3 className="text-xl font-bold text-gray-800">Or reach out directly:</h3>
                    <div className="mt-4 flex justify-center space-x-6">
                        <a
                            href="https://mail.google.com/mail/?view=cm&to=rafiulsam69@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-red-700 hover:text-red-800"
                            aria-label="Send an email"
                        >
                            <FaAt className="w-8 h-8" />
                        </a>
                        <a
                            href="https://linkedin.com/in/rafiul-sameer-0683b82a3"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-red-700 hover:text-red-800"
                        >
                            <FaLinkedin className="w-8 h-8" />
                        </a>
                        <a
                            href="https://github.com/Rafiulsam"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-red-700 hover:text-red-800"
                        >
                            <FaGithub className="w-8 h-8" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;