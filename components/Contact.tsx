"use client";
import React from "react";

import { motion } from "framer-motion";
import { contactSectionSocials } from "./constants/contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col gap-4 lg:flex-row lg:space-between px-[5%] sm:px-[10%] md:px-[15%] lg:px-[20%] my-12"
    >
      <div className="flex flex-col gap-6 flex-1">
        <h2 className="header font-semibold text-dark dark:text-dark">
          | Contact
        </h2>
        <h3 className="text">
          Let&apos;s collaborate and create something amazing together!
        </h3>
        <div className="flex flex-col">
          <a href="tel:0176-21437917">+49 176 21437917 </a>
          <a href="mailto:manhng.dev@gmail.com">manhng.dev@gmail.com</a>
        </div>
        <div className="flex gap-4">
          {contactSectionSocials.map((social, index) => (
            <motion.a
              whileHover={{ scale: 1.2, borderRadius: "50%" }}
              whileTap={{ scale: 0.9 }}
              href={social.link}
              key={index}
              className="flex justify-center items-center h-14 w-14 rounded-2xl bg-secondary dark:bg-primary transition-colors duration-200"
            >
              <FontAwesomeIcon
                icon={social.icon}
                className="text-primary dark:text-secondary"
                size="2xl"
              />
            </motion.a>
          ))}
        </div>
      </div>

      <form className="bg-secondary p-8 rounded-2xl flex flex-1 flex-col gap-3 w-full">
        <div className="relative mb-6 text-dark">
          <input
            type="text"
            id="name"
            placeholder=" "
            className="text block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-dark appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
          />
          <label
            htmlFor="name"
            className="text peer-focus:font-medium absolute duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Name
          </label>
        </div>

        <div className="relative mb-6 w-full">
          <input
            type="text"
            id="email"
            placeholder=" "
            className="text block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-dark appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
          />
          <label
            htmlFor="email"
            className="text peer-focus:font-medium absolute duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email
          </label>
        </div>

        <div className="relative mb-6 w-full">
          <textarea
            id="message"
            rows={3}
            placeholder=" "
            className="text block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-dark appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
          />
          <label
            htmlFor="message"
            className="text peer-focus:font-medium absolute  duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            What can I do for you?
          </label>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          type="submit"
          className="bg-primary p-4 rounded-xl text"
        >
          Let&apos;s work together
        </motion.button>
      </form>
    </section>
  );
};

export default Contact;
