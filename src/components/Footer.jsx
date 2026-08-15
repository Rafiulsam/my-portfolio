import { FaAt, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  // Define a base style and conditionally change the background based on the route
  const textColor = location.pathname === "/" ? "text-white" : "text-red-700";

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
            href="https://linkedin.com/in/rafiul-sameer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="https://wa.me/8801861585375?text=Hi%20Sameer,%20I%20Visited%20your%20portfolio%20and%20would like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoWhatsapp className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/Rafiulsam"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-6 h-6" />
          </a>
        </div>
        <div className="text-center md:text-end font-semibold">
          <small>
            <p>
              &copy; {new Date().getFullYear()} Sameer. All rights reserved.
            </p>
            <p>
              <i> Designed by Novera</i> <span>|</span>{" "}
              <i>Developed by Sameer</i>
            </p>
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
