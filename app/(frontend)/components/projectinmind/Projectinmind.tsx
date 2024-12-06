"use client";
import { motion } from "motion/react";
import Link from "next/link";

export default function Projectinmind() {
  return (
    <div className="bg-[#EDEEEF] dark:bg-matteblack min-h-[40vh] sm:min-h-[50vh] flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex-1 space-y-6 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            {/* Text Content */}
            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white"
              >
                Have a Project in Mind?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300"
              >
                Let&apos;s bring your ideas to life! Share your vision, and
                we&apos;ll help you turn it into reality with creativity,
                expertise, and precision.
              </motion.p>
            </div>

            {/* Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{
                scale: 1.05,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 10,
                },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:translate-y-[-2px] whitespace-nowrap">
                <Link href="/contact">Make Appointment</Link>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
