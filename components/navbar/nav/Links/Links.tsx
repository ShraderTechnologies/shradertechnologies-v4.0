import styles from "./styles.module.css";
import Link from "next/link";
import { motion } from "motion/react";
import { slide, scale } from "../../animation";

interface Data {
  title: string;
  href: string;
  index: number;
}

interface Props {
  data: Data;
  isActive: boolean;
  setSelectedIndicator: (href: string) => void;
}

const Links: React.FC<Props> = ({ data, isActive, setSelectedIndicator }) => {
  const { title, href, index } = data;

  return (
    <motion.div
      className={styles.link}
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className={styles.indicator}
      ></motion.div>
      <Link href={href}>{title}</Link>
    </motion.div>
  );
};

export default Links;
