"use client";
/**
 * ContentRight Component
 * ---------------------
 * A dynamic text animation component that displays rotating words with motion effects.
 *
 * Features:
 * - Cycles through words ["BEST", "TOP-NOTCH", "EXCELLENT"] every 2 seconds
 * - Uses Framer Motion for smooth animations and transitions
 * - Implements staggered animation for text elements
 * - Supports dark mode with theme-specific colors
 *
 * Animation Details:
 * - containerVariant: Controls staggered animation of child elements
 * - wordVariant: Defines entry/exit animations for each word
 *   - Entry: Fade in and slide up
 *   - Exit: Fade out and slide up
 *
 * Assested by Github Copilot AI / Jury
 */

import { AnimatePresence, motion } from "motion/react";

import { useState, useEffect } from "react";
export default function ContentRight() {
  // Words to cycle through in the animated heading
  const words = ["BEST", "FINEST", "UNRIVALED"]; // Array of words to cycle through
  const [currentWordIndex, setCurrentWordIndex] = useState(0); // Tracks the index of the current word

  useEffect(() => {
    // Sets up an interval to cycle through words every 2 seconds
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval); // Cleans up the interval when the component unmounts
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Motion variants for the container, staggering child animations
  const containerVariant = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2, // Delays the animation of child elements
      },
    },
  };

  // Motion variants for each animated word in the heading
  const wordVariant = {
    initial: { opacity: 0, y: 20 }, // Starts with opacity 0 and offset vertically
    animate: {
      opacity: 1,
      y: 0, // Animates into view
      transition: {
        duration: 0.6, // Duration of animation
        ease: "easeOut", // Smooth easing effect
      },
    },
    exit: {
      opacity: 0,
      y: -20, // Exits by moving up and fading out
      transition: {
        duration: 0.3, // Exit animation duration
        ease: "easeIn", // Fast easing effect
      },
    },
  };

  // Motion variant for the subtitle animation
  const subtitleVariant = {
    initial: { opacity: 0, x: -50 }, // Starts invisible and offset horizontally
    animate: {
      opacity: 1,
      x: 0, // Animates into view
      transition: { duration: 0.6, delay: 0.3, ease: "easeOut" }, // Includes a delay for staggered effect
    },
  };

  // Motion variant for the text paragraph animation
  const textVariant = {
    initial: { opacity: 0, y: 50 }, // Starts invisible and offset vertically
    animate: {
      opacity: 1,
      y: 0, // Animates into view
      transition: { duration: 0.6, delay: 0.6, ease: "easeOut" }, // Includes a delay for staggered effect
    },
  };

  return (
    // Outer container with responsive padding and alignment
    <div className="w-full h-full flex items-center justify-center p-4">
      {/* Card-like container with a glassmorphism effect */}
      <div className="w-full bg-white/30 dark:bg-gray-800/30 backdrop-blur-md border border-white/20 dark:border-gray-800/20 rounded-lg p-6 sm:p-8 md:p-10 max-w-4xl mx-auto space-y-4 sm:space-y-6 md:space-y-8">
        {/* Play Button with Pulse Animation */}

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
              className="inline-block max-[1088px]:block max-[854px]:inline-block  text-blue-600 dark:text-yellow"
            >
              {words[currentWordIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.h2>
        <motion.h3
          className="font-semibold text-gray-800 dark:text-gray-200 text-lg sm:text-xl md:text-1 lg:text-2xl xl:text-3xl"
          variants={subtitleVariant}
          initial="initial"
          animate="animate"
        >
          Offshore Ai Social Media Agency
        </motion.h3>
        <motion.p
          className="text-gray-600 dark:text-gray-400 text-sm sm:text-base md:text-base lg:text-base leading-relaxed"
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
