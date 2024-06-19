import { useState } from "react";
import { URL } from "../utils/constants";
import img from "../img/img-1.jpeg";
import { motion } from "framer-motion";

const UrlList = () => {
  const [copiedText, setCopiedText] = useState(null);

  // Function to handle copying text to clipboard
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => {
      setCopiedText(null);
    }, 1500);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen mt-10 ml-10 z-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-purple-500">Test The App using Sample Video URLs</h1>
      <div className="flex">
        <div className="rounded-lg shadow-md overflow-hidden w-3/4">
          {copiedText && (
            <p className="mt-4 text-purple-500 font-mono font-semibold text-xl text-center">Text Copied!</p>
          )}
          <ul className="divide-y divide-gray-300">
            {URL.map((video_url, index) => (
              <motion.li
                key={index}
                className={`p-4 ${index % 2 === 0 ? "bg-white" : "bg-gray-100"}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between">
                  <a href={video_url?.sources[0]} className="block text-blue-600 hover:text-blue-800">
                    {video_url?.sources[0]}
                  </a>
                  <button
                    className="ml-2 px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
                    onClick={() => copyToClipboard(video_url?.sources[0])}
                  >
                    Copy
                  </button>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
        <motion.div
          className="ml-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src={img} className="h-[90%]" alt="video-captions" />
        </motion.div>
      </div>
    </div>
  );
};

export default UrlList;
