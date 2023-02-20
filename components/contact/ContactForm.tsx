"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { fadeIn } from "../utils/motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/mnqyjweb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Failed to send form");
      }
      setFormData({ name: "", email: "", message: "" });
      alert("I will get in touch with you soon!");
    } catch (error) {
      console.error(error);
      alert("Failed to send form. Please try again later.");
    }
  };

  return (
    <motion.form
      initial="hidden"
      whileInView="show"
      variants={fadeIn("up", "tween", 0, 1)}
      className="bg-secondary dark:bg-primary p-8 rounded-2xl flex flex-1 flex-col gap-10 justify-center w-full text"
      onSubmit={handleSubmit}
    >
      <div className={`formGroup`}>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder=" "
          className={`formInput peer`}
          required
        />
        <label htmlFor="name" className={`formLabel`}>
          Name
        </label>
      </div>

      <div className={`formGroup`}>
        <input
          type="email"
          id="email"
          name="email"
          autoComplete="off"
          placeholder=" "
          value={formData.email}
          onChange={handleChange}
          className={`formInput peer`}
          required
        />
        <label htmlFor="email" className={`formLabel`}>
          Email
        </label>
      </div>

      <div className={`formGroup`}>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder=" "
          value={formData.message}
          onChange={handleChange}
          className={`formInput peer`}
          required
        />
        <label htmlFor="message" className={`formLabel`}>
          What can I do for you?
        </label>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        type="submit"
        aria-label="Send messages to Manh"
        className="bg-primary dark:bg-secondary p-4 rounded-xl text font-semibold"
      >
        Let&apos;s work together
      </motion.button>
    </motion.form>
  );
};

export default ContactForm;
