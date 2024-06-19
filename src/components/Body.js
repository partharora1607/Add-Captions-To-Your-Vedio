import Header from "./Header";
import HowToAdd from "./HowToAdd";
import React, { useState } from "react";
import VideoPlayer from "./VedioPlayer"; // Corrected import statement from VedioPlayer to VideoPlayer
import CaptionForm from "./CaptionForm";
import UrlList from "./UrlList";
import Footer from "./Footer";
import { motion } from "framer-motion";

const Body = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [captions, setCaptions] = useState([]);

  const handleAddCaption = (caption) => {
    setCaptions([...captions, caption]);
  };

  const handleRemoveCaptions = () => {
    setCaptions([]); // Clears all captions
  };

  return (
    <div className="p-4">
      <Header />
      <HowToAdd />
      <div className="mt-4">
        <div className="text-center">
          <label className="block mb-2 text-2xl text-purple-500 font-bold">Enter Video URL:</label>
          <motion.input
            type="text"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            placeholder="Enter video URL"
            className="w-1/2 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
            whileFocus={{ scale: 1.05, boxShadow: "0 0 8px rgba(0, 0, 255, 0.5)" }}
            transition={{ duration: 0.8 }}
          />
        </div>
        {videoUrl && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <VideoPlayer videoUrl={videoUrl} captions={captions} />
          </motion.div>
        )}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <CaptionForm onAddCaption={handleAddCaption} onRemoveCaptions={handleRemoveCaptions} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <UrlList />
        </motion.div>
        <Footer />
      </div>
    </div>
  );
};

export default Body;
