import { motion } from "framer-motion";
import { IconType } from "react-icons";
import Icon from "./ReactIconReuse";

type Props = {
  stylesButton: string;
  stylesIcon: string;
  icon: IconType;
};

const SkillsIcon = ({ stylesButton, stylesIcon, icon }: Props) => {
  return (
    <motion.div
      whileHover={{ scale: 1.2}}
      whileTap={{ scale: 0.9 }}
      className={`${stylesButton} center h-12 w-12 lg:h-14 lg:w-14 transition-colors duration-300 border-2 rounded-full`}
    >
      <Icon icon={icon} className={`${stylesIcon}`} />
    </motion.div>
  );
};

export default SkillsIcon;