"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Textedge } from "./Textedge";
import { edgeData } from "@/app/(frontend)/data/homepageData";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Increased stagger for smoother effect
      delayChildren: 0.2, // Slight delay before children start animating
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50, y: 20 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120, // Smoother spring effect
      damping: 15, // Less bouncy
      mass: 0.5, // Lighter feel
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: -100, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      mass: 0.5,
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 10,
    },
  },
};

// Define the interface for the item prop
interface EdgeItemProps {
  title: string;
  id: string | number;
  description: string;
}

// Reusable Components
const EdgeItem = ({ item }: { item: EdgeItemProps }) => (
  <motion.div
    className="w-full flex items-center space-x-4 ml-0 sm:-ml-20 md:-ml-20 z-10"
    variants={itemVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% of the element is in view
  >
    <motion.div
      className="flex flex-col items-center space-y-2 bg-yellow p-3 rounded-lg border-8 border-[#EDEEEF] dark:border-matteblack"
      variants={itemVariants}
    >
      <motion.h3 className="uppercase text-2xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-100">
        {item.title}
      </motion.h3>
      <motion.span className="text-gray-600 text-4xl sm:text-2xl lg:text-4xl font-semibold dark:text-white bg-yellow-50 rounded">
        {item.id}
      </motion.span>
    </motion.div>
    <motion.p
      variants={itemVariants}
      whileHover={{
        scale: 1.02,
        color: "#3B82F6", // blue-600
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 10,
        },
      }}
      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-wider cursor-pointer"
    >
      <span className="text-gray-700 dark:text-gray-300">
        {item.description}
      </span>
    </motion.p>
  </motion.div>
);

const EdgeImage = () => (
  <motion.div
    className="w-full md:w-1/3 shadow-lg transition-shadow duration-300 hover:shadow-2xl"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={imageVariants}
    whileHover="hover"
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
);

const EdgeList = () => (
  <motion.div
    className="w-full md:w-2/3"
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    <div className="text-gray-600 dark:text-gray-400 flex flex-col gap-5">
      {edgeData.map((item) => (
        <EdgeItem key={item.id} item={item} />
      ))}
    </div>
  </motion.div>
);

// Main Component

import React from "react";

const Edge = () => {
  return (
    <div className="bg-[#EDEEEF] dark:bg-matteblack">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-28">
        <Textedge />
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <EdgeImage />
          <EdgeList />
        </div>
      </div>
    </div>
  );
};

export default Edge;
