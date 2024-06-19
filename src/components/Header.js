import header_img from "../img/ok.png";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.div
      className="flex flex-col md:flex-row items-center md:items-start md:ml-40 md:mt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="flex flex-col items-center md:items-start px-4 py-8 md:w-1/3"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold font-sans text-center md:text-left text-blue-200">
          Add captions to your videos for free.
        </h1>
        <p className="text-lg md:text-2xl lg:text-4xl font-normal mt-6 md:mt-10 text-purple-500 font-serif text-center md:text-left">
          Quickly generate captions for any video with Us. Try it Now!
        </p>
      </motion.div>
      <motion.div
        className="flex justify-center mt-8 md:mt-0 md:ml-36 w-full md:w-auto"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img src={header_img} alt="profile-img" className="ml-10 w-[80%] md:h-[70%]" />
      </motion.div>
    </motion.div>
  );
};

export default Header;
