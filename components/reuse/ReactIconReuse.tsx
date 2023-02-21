import { IconType } from "react-icons";

type IconProps = {
  icon: IconType;
  size?: string;
  className?: string;
};

const Icon = ({
  icon: IconComponent,
  size = "1.5rem",
  className,
}: IconProps) => {
  return <IconComponent size={size} className={className} />;
};

export default Icon;
