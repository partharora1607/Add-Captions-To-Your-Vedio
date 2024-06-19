import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 rounded-lg shadow-lg pb-52">
      <motion.h1
        className="text-8xl font-bold mb-4 text-purple-500"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        Subscribe
      </motion.h1>
      <motion.p
        className="mb-6 text-gray-700 text-xl text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Get all the latest updates and news.
      </motion.p>
      <motion.div
        className="flex flex-col sm:flex-row items-center w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <motion.input
          type="email"
          placeholder="Email address"
          className="mb-2 sm:mb-0 sm:mr-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 sm:flex-1"
          whileFocus={{ scale: 1.05, boxShadow: "0 0 8px rgba(0, 0, 255, 0.5)" }}
          transition={{ duration: 0.3 }}
        />
        <motion.button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none w-full sm:w-auto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Submit
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Footer;
