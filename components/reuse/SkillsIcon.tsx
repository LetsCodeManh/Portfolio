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
    <motion.button
      whileHover={{ scale: 1.2, borderRadius: "99rem"}}
      whileTap={{ scale: 0.9 }}
      className={`${stylesButton} square`}
    >
      <Icon icon={icon} className={`${stylesIcon}`} />
    </motion.button>
  );
};

export default SkillsIcon;
