"use client";
import { AnimatePresence, motion } from "motion/react";

import { useState, useEffect } from "react";
export default function ContentRight() {
  const words = ["BEST", "TOP-NOTCH", "EXCELLENT"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const containerVariant = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const wordVariant = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  const subtitleVariant = {
    initial: { opacity: 0, x: -50 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: 0.3, ease: "easeOut" },
    },
  };

  const textVariant = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="w-full bg-white/30 dark:bg-gray-800/30 backdrop-blur-md border border-white/20 dark:border-gray-800/20 rounded-lg p-6 sm:p-8 md:p-10 max-w-4xl mx-auto space-y-4 sm:space-y-6 md:space-y-8">
        <motion.h2
          className="uppercase font-bold text-gray-900 dark:text-gray-100 text-2xl sm:text-1xl md:text-2xl lg:text-3xl xl:text-4xl"
          variants={containerVariant}
          initial="initial"
          animate="animate"
        >
          <motion.span variants={wordVariant} className="inline-block mr-2">
            LEVERAGE
          </motion.span>
          <motion.span variants={wordVariant} className="inline-block mr-2">
            THE
          </motion.span>
          <AnimatePresence mode="wait">
            <motion.span
              key={words[currentWordIndex]}
              variants={wordVariant}
              initial="initial"
              animate="animate"
              exit="exit"
              className="inline-block  text-blue-600 dark:text-yellow"
            >
              {words[currentWordIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.h2>
        <motion.h3
          className="font-semibold text-gray-800 dark:text-gray-200 text-lg sm:text-xl md:text-1xl lg:text-2xl xl:text-3xl"
          variants={subtitleVariant}
          initial="initial"
          animate="animate"
        >
          Offshore Ai Social Media Agency
        </motion.h3>
        <motion.p
          className="text-gray-600 dark:text-gray-400 text-sm sm:text-base md:text-lg lg:text-lg leading-relaxed"
          variants={textVariant}
          initial="initial"
          animate="animate"
        >
          Let us skyrocket your social media. Let us build your apps. Let us
          plan and build your solutions with greater efficiency, affordability
          and flexibility than you will find anywhere else.
        </motion.p>
      </div>
    </div>
  );
}
