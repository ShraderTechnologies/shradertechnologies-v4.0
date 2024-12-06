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
import { AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isActive) setIsActive(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <>
      <div className={styles.headerNav}>
        <div
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={styles.button}
        >
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ""
            }`}
          ></div>
        </div>
      </div>

      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
}
