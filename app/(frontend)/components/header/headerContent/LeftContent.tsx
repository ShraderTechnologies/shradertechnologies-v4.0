"use client";
import Image from "next/image";
import { motion, Variants } from "motion/react";

export default function LeftContent() {
  const fadeIn: Variants = {
    initial: {
      opacity: 0,
      x: -100,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <motion.div
        className="w-full h-full flex items-center justify-center p-4 relative -z-2"
        variants={fadeIn}
        initial="initial"
        animate="animate"
      >
        <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl aspect-square">
          <Image
            src="/images/stock/handwithphone.png"
            alt="Image Shrader Technologies"
            fill
            priority
            className="object-contain"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        </div>
      </motion.div>
    </>
  );
}
