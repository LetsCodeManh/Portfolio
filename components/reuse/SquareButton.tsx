import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import styles from "../../styles/styles";

type Props = {
  stylesButton: string;
  stylesIcon: string;
  link: string;
  icon: IconDefinition;
  target: string;
  label: string;
};

const SquareButton = ({
  stylesButton,
  stylesIcon,
  link,
  icon,
  target,
  label,
}: Props) => {
  return (
    <motion.a
      aria-label={label}
      whileHover={{ scale: 1.2, borderRadius: "50%" }}
      whileTap={{ scale: 0.9 }}
      href={link}
      target={target}
      className={`${stylesButton} square`}
    >
      <FontAwesomeIcon icon={icon} className={`${stylesIcon}`} size="xl" />
    </motion.a>
  );
};

export default SquareButton;
