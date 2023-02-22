import { motion } from "framer-motion";
import { IconType } from "react-icons";
import Icon from "./ReactIconReuse";

type Props = {
  stylesButton: string;
  stylesIcon: string;
  link: string;
  icon: IconType;
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
      whileHover={{ scale: 1.2, borderRadius: "99rem" }}
      whileTap={{ scale: 0.9 }}
      href={link}
      target={target}
      className={`${stylesButton} square`}
    >
      <Icon icon={icon} className={`${stylesIcon}`} />
    </motion.a>
  );
};

export default SquareButton;
