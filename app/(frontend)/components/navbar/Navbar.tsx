"use client";

/**
 * Navigation Component
 *
 * A responsive navigation bar with hamburger menu animation.
 *
 * Features:
 * - Fixed positioning at top of viewport
 * - Animated hamburger button toggle
 * - Auto-close menu on route change
 * - Z-index handling for overlay
 *
 *
 * {useState} - Tracks menu open/closed state
 * {usePathname} - Monitors route changes to auto-close menu
 * {useEffect} - Handles menu state on route changes
 *
 * Assessed by Github Copilot AI / Jury
 */
import styles from "./style.module.css";
import { useEffect, useState } from "react";
import Nav from "./nav/Nav";
import { motion, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isActive) setIsActive(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);
  const buttonVariants = {
    initial: {
      scale: 0,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <>
      <motion.div
        className={styles.headerNav}
        initial="initial"
        animate="animate"
      >
        <motion.div
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={() => setIsActive(!isActive)}
          className={styles.button}
        >
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ""
            }`}
          ></div>
        </motion.div>
      </motion.div>

      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
}
