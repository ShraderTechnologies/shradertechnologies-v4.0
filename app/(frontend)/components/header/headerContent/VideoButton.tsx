"use client";
// Videos and Pulse Animation
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

export default function VideoButton() {
  const [showVideo, setShowVideo] = useState(false);

  const pulseAnimation = {
    scale: [1, 1.1, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <div>
      <motion.div
        className="relative w-16 h-16 mx-auto mt-5 cursor-pointer"
        animate={pulseAnimation}
        whileHover={{ scale: 1.2 }}
        onClick={() => setShowVideo(true)}
      >
        <div className="absolute inset-0 bg-blue-600 dark:bg-yellow rounded-full opacity-20 animate-pulse"></div>
        <div className="relative flex items-center justify-center w-full h-full bg-blue-600 dark:bg-yellow rounded-full">
          <FaPlay className="w-6 h-6 text-white ml-1" />
        </div>
      </motion.div>

      {/* Video Popup */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 w-screen h-screen overflow-hidden z-[9999] flex items-center justify-center"
            onClick={() => setShowVideo(false)}
          >
            {/* Gradient Background Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/95 to-black/90 backdrop-blur-sm" />

            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="relative w-[90vw] h-[90vh] max-w-7xl mx-auto"
              onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                e.stopPropagation()
              }
            >
              {/* Close Button */}
              <button
                className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white transition-colors z-10"
                onClick={() => setShowVideo(false)}
                aria-label="Close video"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <iframe
                className="w-full h-full rounded-lg shadow-2xl"
                src="https://www.youtube.com/embed/Cqc6xJXBKjs?autoplay=1&controls=0&modestbranding=1&rel=0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onEnded={() => setShowVideo(false)}
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
