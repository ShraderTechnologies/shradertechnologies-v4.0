"use client";
/**
 * LeftContent Component
 * --------------------
 * A responsive image component with animation effects and adaptive sizing.
 *
 * Features:
 * - Responsive image sizing with custom breakpoints:
 *   - Mobile (<390px): max-w-[200px]
 *   - Small screens: max-w-xs
 *   - Medium screens (<855px): max-w-[300px]
 *   - Large screens (<1280px): max-w-xl
 *   - Extra large screens: max-w-2xl
 *
 * Animation Details:
 * - Fade in from left with slide effect
 * - Uses Framer Motion for smooth transitions
 * - Initial state: hidden and offset left
 * - Animate state: visible and in position
 *
 * Image Handling:
 * - Uses Next.js Image component for optimization
 * - Maintains aspect ratio with aspect-square
 * - Priority loading for above-the-fold content
 * - Responsive sizes prop for optimal image delivery
 *
 * Assested by Github Copilot AI / Jury
 */

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
        <div className="relative w-full max-[390px]:max-w-[200px] max-w-xs  max-[855px]:max-w-[300px] lg:max-w-xl xl:max-w-2xl aspect-square">
          <Image
            src="/images/stock/handwithphone.png"
            alt="Image Shrader Technologies"
            quality={100}
            fill
            priority
            className="object-contain"
            sizes="(max-width: 390px) 200px, (max-width: 640px) 100vw, (max-width: 855px) 300px, (max-width: 1024px) 33vw, 25vw"
          />
        </div>
      </motion.div>
    </>
  );
}
