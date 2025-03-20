import React from 'react';
import { FaAt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  // Define a base style and conditionally change the background based on the route
  const textColor = location.pathname === "/" 
      ? "text-white"
      : "text-red-700"; 

  return (
    <footer className={`${textColor} py-6`}>
      <div className="px-10 mx-auto flex flex-col md:flex-row gap-4 justify-between items-center">
        <div className="flex space-x-6">
          <a
            href="mailto:rafiulsam69@gmail"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Send an email"
          >
            <FaAt className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/rafiul-sameer-0683b82a3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/Rafiulsam"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-6 h-6" />
          </a>
        </div>
        <div className='text-center md:text-end'>
          <p>&copy; {new Date().getFullYear()} Sameer. All rights reserved.</p>
          <p>
            Designed by Novera <span>•</span> Developed by Sameer
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;