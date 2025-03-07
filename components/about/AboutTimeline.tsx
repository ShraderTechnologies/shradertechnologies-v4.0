"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const timelineData = [
  { year: "2015", event: "Company Founded" },
  { year: "2016", event: "First Major Client" },
  { year: "2018", event: "Expansion to International Markets" },
  { year: "2020", event: "Launch of AI Solutions" },
  { year: "2022", event: "Reached 1 Million Users" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const AboutTimeline = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="w-full mt-10">
      <motion.div
        className="container mx-auto px-4 md:px-6 lg:px-8 py-16 text-center"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        ref={ref}
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-12 text-gray-700 dark:text-gray-200">
          Our Journey
        </h2>
        <div className="relative space-y-12">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-300 dark:border-gray-600"></div>
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row items-center md:items-start relative"
              variants={itemVariants}
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gray-700 dark:bg-gray-200 rounded-full border-4 border-white dark:border-gray-800"></div>
              <div className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-200 md:w-1/4 md:pl-10">
                {item.year}
              </div>
              <div className="text-lg md:text-xl text-gray-600 dark:text-gray-300 md:w-3/4 md:pl-10">
                {item.event}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AboutTimeline;
