import React, { useState } from "react";
import x from "../img/Add_captions_to_video.jpg";
import add_vedio_img from "../img/add-subtitles-to-video-2.jpg";

const CaptionForm = ({ onAddCaption, onRemoveCaptions }) => {
  const [text, setText] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text && start && end) {
      onAddCaption({ text, start: parseFloat(start), end: parseFloat(end) });
      setText("");
      setStart("");
      setEnd("");
    }
  };

  const handleRemoveCaptions = () => {
    // Implement logic to remove all captions
    onRemoveCaptions(); // Call the parent function to handle removal
  };

  return (
    <div className="flex">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg mt-10">
        <div className="mb-4">
          <label htmlFor="caption-text" className="block text-sm font-medium text-gray-700">
            Caption Text:
          </label>
          <input
            id="caption-text"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="start-time" className="block text-sm font-medium text-gray-700">
            Start Time (seconds):
          </label>
          <input
            id="start-time"
            type="number"
            value={start}
            onChange={(e) => setStart(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="end-time" className="block text-sm font-medium text-gray-700">
            End Time (seconds):
          </label>
          <input
            id="end-time"
            type="number"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className="inline-block px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Add Caption
          </button>
          <button
            type="button"
            onClick={handleRemoveCaptions}
            className="inline-block px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Remove All Captions
          </button>
        </div>
        <div className="mt-2">
          <img src={x} alt="vedio-caption" />
        </div>
      </form>
      {/* align this image to center and increase the height little bit */}
      <div>
        <img src={add_vedio_img} alt="vedio-caption" className="h-[28rem] mt-36 rounded-4xl" />
      </div>
    </div>
  );
};

export default CaptionForm;
