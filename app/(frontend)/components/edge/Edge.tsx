"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { Textedge } from "./Textedge";
import { edgeData } from "../../data/homepageData";

export default function Edge() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -50,
      y: 20,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
      },
    },
  };
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
        <div className="flex flex-col md:flex-row  gap-6 items-center">
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
          {/* <div className="w-full md:w-2/3 ">
            <div className="text-gray-600 dark:text-gray-400 flex flex-col gap-6">
              {edgeData.map((item) => (
                <div
                  key={item.id}
                  className="w-full flex items-center space-x-4 -ml-20 z-10"
                >
                  <div className="flex flex-col items-center space-y-2 bg-yellow p-3 rounded-lg border-8 border-[##EDEEEF] dark:border-matteblack ">
                    <h3 className="uppercase text-2xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-100">
                      {item.title}
                    </h3>
                    <span className=" text-gray-600 text-4xl sm:text-2xl lg:text-4xl font-semibold  dark:text-white bg-yellow-50 rounded">
                      {item.id}
                    </span>
                  </div>
                  <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl  text-gray-700  dark:text-gray-300 tracking-wider">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div> */}
          <motion.div
            className="w-full md:w-2/3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="text-gray-600 dark:text-gray-400 flex flex-col gap-5">
              {edgeData.map((item) => (
                <motion.div
                  key={item.id}
                  className="w-full flex items-center space-x-4 -ml-20 sm:ml-0 md:-ml-20 z-10 "
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <motion.div
                    className="flex flex-col items-center space-y-2 bg-yellow p-3 rounded-lg border-8 border-[#EDEEEF] dark:border-matteblack"
                    variants={itemVariants}
                  >
                    <motion.h3
                      variants={itemVariants}
                      className="uppercase text-2xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-100"
                    >
                      {item.title}
                    </motion.h3>
                    <motion.span
                      variants={itemVariants}
                      className="text-gray-600 text-4xl sm:text-2xl lg:text-4xl font-semibold dark:text-white bg-yellow-50 rounded"
                    >
                      {item.id}
                    </motion.span>
                  </motion.div>
                  <motion.p
                    variants={itemVariants}
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-700 dark:text-gray-300 tracking-wider"
                  >
                    {item.description}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
