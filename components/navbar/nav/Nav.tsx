/**
 * Navigation Menu Component
 *
 * A sliding navigation menu with animated transitions and route handling.
 *
 * Features:
 * - Animated slide-in/out menu panel
 * - Dynamic route highlighting
 * - Responsive design
 * - Custom curve animation
 * - Footer integration
 *
 * Components:
 * - Links: Navigation link items
 * - Footer: Menu footer content
 * - Curve: Animated curve effect
 *
 *
 * {motion} - Framer Motion animations
 * {next/navigation} - Next.js routing
 * {NavItem[]} - Navigation items array
 *
 * Assessed by Github Copilot AI / Jury
 */

import React, { useState } from "react";
import styles from "./style.module.css";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import { menuSlide } from "../animation";
import Links from "./Links/Links";
import Footer from "./Footer/Footer";
import Curve from "./Curve/Curve";
import Image from "next/image";

// Types for navigation items
interface NavItem {
  title: string;
  href: string;
}

const navItems: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Solutions",
    href: "/solutions",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Careers",
    href: "/career",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const Nav = () => {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState<string>(pathname);

  return (
    <motion.div
      role="navigation"
      aria-label="Main Navigation"
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.menu}
    >
      <div className={styles.menus}>
        <div
          onMouseLeave={() => setSelectedIndicator(pathname)}
          className={styles.nav}
        >
          <div className={styles.header}>
            <Image
              src="/images/logo.png"
              width={300}
              height={100}
              quality={100} // Maximum quality
              priority // Load image immediately
              alt="Shrader Technologies Logo"
              className="w-[200px] sm:w-[250px] md:w-[300px] h-auto object-contain"
              sizes="(max-width: 640px) 200px, (max-width: 768px) 250px, 300px"
            />
          </div>
          <nav>
            {navItems.map((item, index) => (
              <Links
                key={item.href} // Using href as key instead of index
                data={{ ...item, index }}
                isActive={selectedIndicator === item.href}
                setSelectedIndicator={setSelectedIndicator}
              />
            ))}
          </nav>
        </div>
        <Footer />
      </div>
      <Curve />
    </motion.div>
  );
};

export default Nav;
