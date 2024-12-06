"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { Textedge } from "./Textedge";

export default function Edge() {
  const imageVariants = {
    hidden: {
      opacity: 0,
      x: -100,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
  return (
    <div className="bg-[#EDEEEF] dark:bg-matteblack">
      <div className="container  mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-28">
        <Textedge />
        <div className="flex flex-col md:flex-row gap-6">
          {/* First Item */}
          <motion.div
            className="w-full md:w-1/3 shadow-lg transition-shadow duration-300 hover:shadow-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageVariants}
            whileHover={{
              scale: 1.05,
              transition: {
                duration: 0.3,
                ease: "easeInOut",
              },
            }}
          >
            <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px]">
              <Image
                src="/images/stand-out.jpg"
                alt="Shrader Technologies Stands Out"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="rounded-lg object-cover w-full h-full transition-transform duration-300"
                priority
              />
            </div>
          </motion.div>

          {/* Second Item */}
          <div className="w-full md:w-2/3 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Second Item
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Content for second item goes here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
