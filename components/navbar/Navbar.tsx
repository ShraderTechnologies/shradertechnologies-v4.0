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
import ThemeToggle from "../themetoggle/ThemeToggle";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isActive) setIsActive(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.2,
        type: "spring",
        stiffness: 300,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <>
      <div className={styles.headerNav}>
        {/* Theme toggle button */}
        <div className="flex items-center mb-3">
          <ThemeToggle />
        </div>
        <motion.div
          onClick={() => setIsActive(!isActive)}
          className={styles.button}
          whileHover="hover"
          whileTap="tap"
          variants={buttonVariants}
        >
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ""
            }`}
          />
        </motion.div>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
};

export default Navbar;
