"use client";
import styles from "@/styles/styles";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const ContactForm = () => {
  return (
    <motion.form
      initial="hidden"
      whileInView="show"
      variants={fadeIn("up", "tween", 0, 1)}
      className="bg-secondary dark:bg-primary p-8 rounded-2xl flex flex-1 flex-col gap-10 justify-center w-full text"
    >
      <div className={styles.formGroup}>
        <input
          type="text"
          id="name"
          placeholder=" "
          className={styles.formInput}
        />
        <label htmlFor="name" className={styles.formLabel}>
          Name
        </label>
      </div>

      <div className={styles.formGroup}>
        <input
          type="text"
          id="email"
          placeholder=" "
          className={styles.formInput}
        />
        <label htmlFor="email" className={styles.formLabel}>
          Email
        </label>
      </div>

      <div className={styles.formGroup}>
        <textarea
          id="message"
          rows={3}
          placeholder=" "
          className={styles.formInput}
        />
        <label htmlFor="message" className={styles.formLabel}>
          What can I do for you?
        </label>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        type="submit"
        className="bg-primary dark:bg-secondary p-4 rounded-xl text font-semibold"
      >
        Let&apos;s work together!
      </motion.button>
    </motion.form>
  );
};

export default ContactForm;
