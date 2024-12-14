"use client";
import { socialIcons } from "@/app/(frontend)/data/homepageData";
import styles from "@/app/(frontend)/components/header/Header.module.css";
import Navbar from "../../navbar/Navbar";
import { motion } from "motion/react";

export default function MainTop() {
  // Dynamically generates the CSS class for a given social media icon based on its label
  const getIconClass = (label: string): string => {
    const classes = {
      Facebook: styles.facebook,
      YouTube: styles.youtube,
      Instagram: styles.instagram,
    }[label];
    return `${styles.socialIcon} ${classes}`;
  };
  return (
    <div className="w-full  flex justify-between">
      <div className="flex items-center justify-center sm:justify-start gap-4 p-4 sm:p-6">
        {socialIcons.map(({ icon: Icon, href, label }) => (
          <motion.a
            key={label}
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="transition-transform duration-200 ease-in-out"
          >
            <Icon
              className={`${getIconClass(
                label
              )} text-2xl sm:text-3xl hover:opacity-80`}
            />
          </motion.a>
        ))}
      </div>
      <Navbar />
    </div>
  );
}
