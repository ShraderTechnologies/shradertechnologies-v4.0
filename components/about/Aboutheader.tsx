"use client";
import { motion } from "framer-motion";

const Aboutheader = () => {
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

  return (
    <section className="w-full">
      <motion.div
        className="relative container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-32 text-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <span className="absolute font-bold md:text-5xl lg:text-7xl text-gray-400/10 bottom-4 left-4 pointer-events-none">
          OUR MISSION
        </span>
        {/* Mission Statement */}
        <div className="space-y-6 mx-auto">
          <motion.h3
            className="text-xl md:text-4xl font-semibold mb-10 text-gray-700 dark:text-gray-200 mx-auto max-w-7xl"
            variants={itemVariants}
          >
            Affordable Innovation: Apps, AI, and Social Media Strategies to
            Build Your Success
          </motion.h3>

          <motion.p
            className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto"
            variants={itemVariants}
          >
            Empowering brands to thrive through affordable, cutting-edge
            solutions in app and web development, powered by offshore expertise,
            generative AI, and social media growth strategies. We are dedicated
            to building your dreams with efficiency, flexibility, and a deep
            understanding of the latest technologies and trends.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default Aboutheader;
