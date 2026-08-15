import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { FaAt, FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { toast, Zoom } from "react-toastify";

const Contact = () => {
  const [focusField, setFocusField] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const handleOnSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      )
      .then(
        () => {
          toast.success("Message sent successfully!", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
            transition: Zoom,
          });
          form.current.reset();
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.error(error.text);
          toast.error("Message not sent", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
            transition: Zoom,
          });
        },
      );
  };

  return (
    <section id="contact" className="pb-40 pt-32">
      <div>
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-6xl font-bold text-center text-gray-800 dark:text-white"
        >
          Contact Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-lg text-gray-600 dark:text-slate-300 text-center max-w-2xl mx-auto px-8"
        >
          Have a question or want to work together?{" "}
          <span className="font-semibold text-red-700">
            Feel free to reach out!
          </span>
        </motion.p>

        {/* Contact Form */}
        <div className="max-w-[20rem] md:max-w-6xl lg:max-w-7xl mx-auto flex gap-20 lg:gap-40 flex-col-reverse md:flex-row justify-center items-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="p-8 rounded-lg shadow-lg bg-gray-100 dark:bg-[#1a1d23] shadow-red-400 dark:shadow-gray-400 w-full md:w-2/5"
          >
            <form onSubmit={handleOnSubmit} ref={form}>
              {/* Name Field */}
              <div className="mb-6 relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  placeholder={focusField === "name" ? "Type your name" : ""}
                  onFocus={() => setFocusField("name")}
                  onChange={(e) => setName(e.target.value)}
                  onBlur={() => setFocusField(null)}
                  className="w-full px-4 pt-6 pb-2 bg-gray-100 dark:bg-[#1a1d23] text-gray-800 dark:text-white border-b border-red-300 dark:border-slate-100 focus:outline-none"
                  required
                />
                <label
                  htmlFor="name"
                  className={`absolute left-4 transition-all duration-200 text-red-700 font-medium pointer-events-none ${
                    focusField === "name" || name.length > 0
                      ? "top-2 text-sm"
                      : "top-4 text-base"
                  }`}
                >
                  Name
                </label>
              </div>

              {/* Email Field */}
              <div className="mb-6 relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  placeholder={focusField === "email" ? "Type your email" : ""}
                  onFocus={() => setFocusField("email")}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => setFocusField(null)}
                  className="w-full px-4 pt-6 pb-2 bg-gray-100 dark:bg-[#1a1d23] text-gray-800 dark:text-white border-b border-red-300 dark:border-slate-100 focus:outline-none"
                  required
                />
                <label
                  htmlFor="email"
                  className={`absolute left-4 transition-all duration-200 text-red-700 font-medium pointer-events-none ${
                    focusField === "email" || email.length > 0
                      ? "top-2 text-sm"
                      : "top-4 text-base"
                  }`}
                >
                  Email
                </label>
              </div>

              {/* Message Field */}
              <div className="mb-6 relative">
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  value={message}
                  placeholder={
                    focusField === "message" ? "Type your message..." : ""
                  }
                  onFocus={() => setFocusField("message")}
                  onChange={(e) => setMessage(e.target.value)}
                  onBlur={() => setFocusField(null)}
                  className="w-full px-4 pt-6 pb-2 bg-gray-100 dark:bg-[#1a1d23] text-gray-800 dark:text-white border-b border-red-300 dark:border-slate-100 focus:outline-none"
                  required
                />
                <label
                  htmlFor="message"
                  className={`absolute left-4 transition-all duration-200 text-red-700 font-medium pointer-events-none ${
                    focusField === "message" || message.length > 0
                      ? "top-2 text-sm"
                      : "top-4 text-base"
                  }`}
                >
                  Message
                </label>
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
          <div className="w-full md:w-96 flex flex-col gap-6">
            {/* email */}
            <div className="transition-transform duration-200 hover:-translate-y-2 hover:scale-105">
              <motion.a
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                href="mailto:rafiulsam69@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 dark:bg-[#1a1d23] rounded-[8px] shadow-lg shadow-red-400 dark:shadow-gray-400 p-4 flex items-center space-x-4"
              >
                <div className="w-10 h-10 rounded-full bg-red-300 flex items-center justify-center text-red-700 text-2xl">
                  <FaAt className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="text-lg font-semibold text-gray-800 dark:text-white">
                    Email
                  </p>
                  <p className="text-sm text-gray-600 dark:text-slate-300">
                    rafiulsam69@gmail.com
                  </p>
                </div>
              </motion.a>
            </div>
            {/* whatsapp */}
            <div className="transition-transform duration-200 hover:-translate-y-2 hover:scale-105">
              <motion.a
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                href="https://wa.me/8801861585375?text=Hi%20Sameer,%20I%20Visited%20your%20portfolio%20and%20would like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 dark:bg-[#1a1d23] rounded-[8px] shadow-lg shadow-red-400 dark:shadow-gray-400 p-4 flex items-center space-x-4"
              >
                <div className="w-10 h-10 rounded-full bg-red-300 flex items-center justify-center text-red-700 text-2xl">
                  <IoLogoWhatsapp className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="text-lg font-semibold text-gray-800 dark:text-white">
                    WhatsApp
                  </p>
                  <p className="text-sm text-gray-600 dark:text-slate-300">
                    +880 1861-585375
                  </p>
                </div>
              </motion.a>
            </div>
            {/* LinkedIn */}
            <div className="transition-transform duration-200 hover:-translate-y-2 hover:scale-105">
              <motion.a
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
                href="https://linkedin.com/in/rafiul-sameer"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 dark:bg-[#1a1d23] rounded-[8px] shadow-lg shadow-red-400 dark:shadow-gray-400 p-4 flex items-center space-x-4"
              >
                <div className="w-10 h-10 rounded-full bg-red-300 flex items-center justify-center text-red-700 text-2xl">
                  <FaLinkedin className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="text-lg font-semibold text-gray-800 dark:text-white">
                    LinkedIn
                  </p>
                  <p className="text-xs md:text-sm text-gray-600 dark:text-slate-300">
                    https://linkedin.com/in/rafiul-sameer
                  </p>
                </div>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
