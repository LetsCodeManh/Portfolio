import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { socials } from "../constants/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SquareButton from "../reuse/SquareButton";
import styles from "@/styles/styles";

type Props = {
  isActive: boolean;
};

const NavigationButton = ({ isActive }: Props) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <motion.div
      animate={isActive ? { opacity: 1 } : { opacity: 0 }}
      className={`absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4 justify-center items-center`}
    >
      {socials.map((social, index) => (
        <SquareButton
          key={index}
          target="_blank"
          stylesButton="bg-primary dark:bg-secondary"
          stylesIcon="text-secondary dark:text-primary"
          link={social.link}
          icon={social.icon}
          label={social.label}
        />
      ))}

      {currentTheme === "dark" ? (
        <motion.button
          aria-label="Toggle theme"
          whileHover={{ scale: 1.2, borderRadius: "50%" }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setTheme("light")}
          className={`${styles.square} bg-primary dark:bg-secondary`}
        >
          <FontAwesomeIcon
            icon={faSun}
            size="2xl"
            className="text-secondary dark:text-primary transition-colors duration-200"
          />
        </motion.button>
      ) : (
        <motion.button
          aria-label="Toggle theme"
          whileHover={{ scale: 1.2, borderRadius: "50%" }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setTheme("dark")}
          className={`${styles.square} bg-primary dark:bg-secondary`}
        >
          <FontAwesomeIcon
            icon={faMoon}
            size="2xl"
            className="text-secondary dark:text-primary transition-colors duration-200"
          />
        </motion.button>
      )}
    </motion.div>
  );
};

export default NavigationButton;
