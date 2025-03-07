"use client";
import { socialIcons } from "@/app/(frontend)/data/homepageData";
import styles from "@/components/header/Header.module.css";
import Navbar from "@/components/navbar/Navbar";
import { motion } from "motion/react";
import Image from "next/image";

const MainTop = () => {
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
    <div className="w-full flex-col flex items-center justify-center">
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
      <div className="block dark:hidden">
        <Image
          src="/images/updatedlogo.png"
          width={300}
          height={200}
          alt="Shrader Technologies Logo"
        />
      </div>
      <div className="hidden dark:block">
        <Image
          src="/images/updatedlogodark.png"
          width={300}
          height={200}
          alt="Shrader Technologies Logo"
        />
      </div>
    </div>
  );
};

export default MainTop;
