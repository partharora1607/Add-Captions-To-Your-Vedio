import React, { useRef, useState, useEffect } from "react";

const VideoPlayer = ({ videoUrl, captions }) => {
  const videoRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleTimeUpdate = () => setCurrentTime(videoElement.currentTime);
    videoElement.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      videoElement.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  const getCaptionForCurrentTime = () => {
    return captions.find((caption) => currentTime >= caption.start && currentTime <= caption.end)?.text || "";
  };

  return (
    <div className="relative">
      {/* Video Player */}
      <video ref={videoRef} src={videoUrl} controls autoPlay="true" className="w-full rounded-2xl mt-10" />
      {/* Caption Overlay */}
      <div className="absolute bottom-20 left-0 w-full mx-auto bg-black bg-opacity-50 text-white">
        <p className="text-center text-xl p-4">{getCaptionForCurrentTime()}</p>
      </div>
    </div>
  );
};

export default VideoPlayer;
