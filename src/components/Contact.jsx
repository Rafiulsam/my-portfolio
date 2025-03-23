import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaAt, FaLinkedin, FaGithub } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { toast, Zoom } from 'react-toastify';

const Contact = () => {
    const form = useRef();
    const handleOnSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current, {
                publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            })
            .then(
                () => {
                    toast.success('Message sent successfully!', {
                        position: "top-center",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Zoom,
                    });
                    form.current.reset();
                },
                (error) => {
                    console.error(error.text);
                    toast.error("Massage not send", {
                        position: "top-center",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Zoom,
                    });
                },
            );
    }
    console.log("Service ID:", import.meta.env.VITE_EMAILJS_SERVICE_ID);

    return (
        <section id="contact" className="py-40">
            <div className="container mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-center text-gray-800"
                >
                    Contact Me
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mt-4 text-lg text-gray-600 text-center max-w-2xl mx-auto px-8"
                >
                    Have a question or want to work together? <span className='font-semibold text-red-700'>Feel free to reach out!</span>
                </motion.p>

                {/* Contact Form */}
                <div className='flex flex-col-reverse md:flex-row  max-w-7xl mx-auto justify-evenly items-center mt-16'>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-lg shadow-xl shadow-red-400 lg:w-2/5"
                    >
                        <form onSubmit={handleOnSubmit} ref={form}>
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
                                    placeholder="Your.email@example.com"
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
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <img className='h-40 md:h-64' src={'/mailbox.png'} alt="" />
                    </motion.div>
                </div>

                {/* Additional Contact Info */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <h3 className="text-xl font-bold text-gray-800">Or reach out directly:</h3>
                    <div className="mt-4 flex justify-center space-x-6">
                        <a
                            href="mailto:mailto:your.email@example.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-transform duration-200 hover:scale-110 text-red-700 hover:text-red-800"
                            aria-label="Send an email"
                        >
                            <FaAt className="w-8 h-8" />
                        </a>
                        <a
                            href="https://linkedin.com/in/rafiul-sameer-0683b82a3"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-transform duration-200 hover:scale-110 text-red-700 hover:text-red-800"
                        >
                            <FaLinkedin className="w-8 h-8" />
                        </a>
                        <a
                            href="https://github.com/Rafiulsam"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-transform duration-200 hover:scale-110 text-red-700 hover:text-red-800"
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