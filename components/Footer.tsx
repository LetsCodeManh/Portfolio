import { FaHeart } from "react-icons/fa";
import Icon from "./reuse/ReactIconReuse";

const Footer = () => {
  return (
    <footer className=" md:px-[15%] lg:px-[20%] bg-primary dark:bg-secondary">
      <div className="flex flex-col px-[5%] sm:px-[10%] md:px-0 xl:flex-row lg:justify-between items-center gap-4 border-t-2 py-4 md:py-6 lg:py-8 border-dark dark:border-dark">
        <p>
          Build and Design with{" "}
          <Icon icon={FaHeart} className="text-[#ff5252] inline-block" /> by Manh
        </p>
        <p>&copy; 2023 Manh Nguyen, All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
