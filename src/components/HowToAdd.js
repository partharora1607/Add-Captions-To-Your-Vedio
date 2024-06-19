import { motion } from "framer-motion";

const HowToAdd = () => {
  return (
    <div className="py-10 mt-32">
      <motion.h1
        className="text-3xl font-extrabold mb-6 text-center text-blue-200"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        How to add captions to videos
      </motion.h1>
      <div className="flex justify-center gap-8">
        {/* Step 1 */}
        <motion.div
          className="max-w-xs rounded-lg shadow-md bg-white p-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1 className="text-lg font-bold mb-2 text-emerald-600">1. Enter URL.</h1>
          <p className="text-sm text-purple-500">
            Enter a video URL and upload to the online caption generator to add captions.
          </p>
        </motion.div>

        {/* Step 2 */}
        <motion.div
          className="max-w-xs rounded-lg shadow-md bg-white p-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <h1 className="text-lg font-bold mb-2 text-emerald-600">2. Generate captions.</h1>
          <p className="text-sm text-purple-500">Edit your video with captions if needed.</p>
        </motion.div>

        {/* Step 3 */}
        <motion.div
          className="max-w-xs rounded-lg shadow-md bg-white p-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <h1 className="text-lg font-bold mb-2 text-emerald-600">3. Continue editing.</h1>
          <p className="text-sm text-purple-500">
            Download your new video with captions as an MP4 file or keep editing in.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default HowToAdd;
