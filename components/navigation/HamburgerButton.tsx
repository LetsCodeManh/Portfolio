import { motion } from "framer-motion";

type State = {
  isActive: boolean;
  setIsActive: (isAcive: boolean) => void;
};

const HamburgerButton = ({ isActive, setIsActive }: State) => {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      className={`navigation__hamburger fixed sm:top-12 sm:right-12 top-6 right-6 z-50 h-16 w-16 rounded-full border-2 border-dark shadow-2xl transition-colors duration-300 ${
        isActive ? "is-active" : ""
      } ${
        isActive
          ? "hover:bg-primary hover:dark:bg-secondary bg-secondary dark:bg-primary"
          : "hover:bg-secondary hover:dark:bg-primary bg-primary dark:bg-secondary"
      }`}
      onClick={() => setIsActive(!isActive)}
      aria-label="Hamburger Menu"
    >
      <svg
        fill="none"
        className={`hamburger duration-300 transition-all mx-auto ${
          isActive
            ? "stroke-dark dark:stroke-dark"
            : "stroke-dark dark:stroke-dark"
        }`}
        viewBox="-10 -10 120 120"
        width="50"
      >
        <path
          className="line duration-500 transition-all"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70"
        ></path>
      </svg>
    </motion.button>
  );
};

export default HamburgerButton;
