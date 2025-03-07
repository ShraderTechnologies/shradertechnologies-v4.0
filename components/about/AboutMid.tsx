"use client";
import { motion } from "framer-motion";

const AboutMid = () => {
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
    <div className="w-full mt-10">
      <motion.div
        className="relative container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-32 text-center bg-gradient-to-r from-green-500 to-teal-600 backdrop-blur-sm border border-white/20 rounded-xl shadow-2xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <span className="absolute font-bold md:text-5xl lg:text-7xl text-white/20 bottom-4 right-4 pointer-events-none">
          OUR VISION
        </span>
        {/* Vision Statement */}
        <div className="space-y-6 mx-auto">
          <motion.h3
            className="text-xl md:text-4xl font-semibold mb-10 text-white mx-auto max-w-7xl"
            variants={itemVariants}
          >
            Delivering cost-effective apps, AI solutions, and social media
            strategies to drive growth and success in the digital age
          </motion.h3>

          <motion.p
            className="text-base md:text-lg text-white leading-relaxed max-w-4xl mx-auto"
            variants={itemVariants}
          >
            To be a global leader in innovative and accessible digital
            solutions, transforming businesses through cutting-edge technology,
            offshore expertise, and AI-driven growth strategies. We envision a
            future where brands of all sizes leverage smart, scalable, and
            cost-effective solutions to thrive in the digital economy.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMid;
