import { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { FaDownload, FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png"

const Navbar = ({ theme, toggleTheme }) => {
    const location = useLocation();

    // State for dropdown menu
    const [isOpen, setIsOpen] = useState(false);
    // State for theme dropdown menu
    const [dropdownOpen, setDropdownOpen] = useState(false);

    // Define navbar background based on the route
    const navbarBg = location.pathname === "/"
        ? "bg-black bg-opacity-30 dark:bg-gray-500 dark:bg-opacity-30"
        : "bg-[#b61924]";

    const navLinks = [
        { path: "/", label: "Home" },
        { path: "/about", label: "About" },
        { path: "/skills", label: "Skills" },
        { path: "/projects", label: "Projects" },
        { path: "/contact", label: "Contact" },
    ];

    return (
        <nav className={`${navbarBg} shadow-lg shadow-red-400 dark:shadow-gray-400 fixed w-full top-0 z-50 `}>
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-xl font-bold text-white transition-transform duration-200 hover:scale-105">
                    <img className="w-10 h-10" src={logo} alt="" />

                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-6">
                    {navLinks.map(({ path, label }, index) => (
                        <NavLink
                            key={index}
                            to={path}
                            className={({ isActive }) =>
                                `text-xl relative transition-transform duration-200 hover:-translate-y-1 hover:text-slate-200
                                after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white 
                                after:transition-all after:duration-300 hover:after:w-full 
                                ${isActive ? "text-white after:w-full font-bold" : "text-white"}`
                            }
                        >
                            {label}
                        </NavLink>
                    ))}
                </div>
                <div className="hidden md:flex items-center space-x-2">
                    {/* Resume Button */}
                    <div className="flex items-center transition-transform duration-200 hover:-translate-y-1 hover:scale-105 hover:bg-black hover:bg-opacity-50 border p-2 text-white font-semibold rounded-md">
                        <a href="/Sameer's_Resume.pdf" target="_blank" rel="noopener noreferrer">
                            Resume
                        </a>
                        <FaDownload className="ml-2 h-5" />
                    </div>

                    {/* Theme Dropdown */}
                    <div className="relative transition-transform duration-200 hover:-translate-y-1 hover:scale-105 hover:bg-black hover:bg-opacity-50 border border-white rounded-md">
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="p-2 rounded-lg"
                        >
                            {theme === "dark" ? (
                                <FaSun size={24} className="text-yellow-400" />
                            ) : (
                                <FaMoon size={24} className="text-gray-300" />
                            )}
                        </button>

                        {/* Theme Dropdown Menu */}
                        <AnimatePresence>
                            {dropdownOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="absolute right-0 mt-2 w-36 bg-white dark:bg-black shadow-sm shadow-white rounded-md overflow-hidden"
                                >
                                    <button
                                        onClick={() => {
                                            if (theme !== "light") toggleTheme();
                                            setDropdownOpen(false);
                                        }}
                                        className="flex items-center w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                                    >
                                        <FaSun className="mr-2" /> Light Mode
                                    </button>
                                    <button
                                        onClick={() => {
                                            if (theme !== "dark") toggleTheme();
                                            setDropdownOpen(false);
                                        }}
                                        className="flex items-center w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                                    >
                                        <FaMoon className="mr-2" /> Dark Mode
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
                {/* Hamburger Menu */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden flex flex-col items-center absolute top-17 right-0 bg-black/50 dark:bg-gray-500/30 backdrop-blur-lg shadow-lg rounded-md py-4"
                    >
                        {navLinks.map(({ path, label }, index) => (
                            <NavLink
                                key={index}
                                to={path}
                                onClick={() => setIsOpen(false)} // Close menu when a link is clicked
                                className="block px-6 py-1.5 text-white hover:bg-black hover:bg-opacity-30 transition duration-300"
                            >
                                {label}
                            </NavLink>
                        ))}

                        {/* Mobile Resume Button */}
                        <div className="flex px-3 py-2 space-x-2">

                            <a href="/Sameer's_Resume.pdf" target="_blank" rel="noopener noreferrer" className="flex text-center border px-2 text-white rounded-md hover:bg-black hover:bg-opacity-50 transition">
                                <span className="flex items-center justify-center">
                                    Resume  <FaDownload className="inline ml-2 h-3" />
                                </span>
                            </a>
                            {/* Theme Toggle */}
                            <button onClick={() => {
                                toggleTheme();
                                setIsOpen(false)
                            }} className="p-2 rounded-lg relative border border-white dark:border-gray-300">
                                {theme === "dark" ? (
                                    <FaSun className="text-yellow-400" />
                                ) : (
                                    <FaMoon className="text-gray-300" />
                                )}
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;