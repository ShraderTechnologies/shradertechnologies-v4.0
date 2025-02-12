import { motion } from "motion/react";

export const Textedge = () => {
  const letters = "Why Shrader Technologies Stands Out".split("");

  return (
    <motion.div
      className="text-center pb-20 text-matteblack dark:text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          className={`
            uppercase
              inline-block
              text-2xl sm:text-3xl lg:text-5xl 
              font-extrabold 
              tracking-wide
              hover:text-transparent
              hover:bg-clip-text
              hover:bg-gradient-to-r 
              from-blue-600 
              to-purple-600
              cursor-default
             
            `}
          variants={{
            hidden: {
              opacity: 0,
              y: 20,
            },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                delay: index * 0.03,
              },
            },
          }}
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.2 },
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};
