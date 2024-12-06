/**
 * Portfolio Card Component
 *
 * A flippable card component displaying project details with front/back views.
 *
 * Structure:
 * - Front Card:
 *   - Title (uppercase, centered)
 *   - Description (light text)
 * - Back Card:
 *   - Project details
 *   - Problem statement
 *   - Solution overview
 *   - Status indicator
 *
 * Animation Logic:
 * - For cards with index % 3 === 0 (1st column): Slides from left (-100px)
 * - For cards with index % 3 === 1 (2nd column): Slides up from bottom (y: 100)
 * - For cards with index % 3 === 2 (3rd column): Slides from right (100px)
 *
 * Transition:
 * - Each card fades in (opacity 0 -> 1)
 * - Staggered animation delay (0.2s * index)
 * - Animation duration of 0.5s per card
 *
 *
 * Assested by Github Copilot AI / Jury
 */

import Image from "next/image";
import { motion } from "motion/react";
import { cards } from "../../data/Cards";

export default function PortfolioCard() {
  const cardVariants = (index: number) => ({
    hidden: {
      opacity: 0,
      x: index % 3 === 0 ? -100 : index % 3 === 1 ? 0 : 100,
      y: index % 3 === 1 ? 100 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.2,
      },
    },
  });
  return (
    <div className="w-full px-4 pt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            variants={cardVariants(index)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative h-[400px] group perspective-[1000px]"
          >
            <div className="relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              {/* Front Card */}
              <div className="absolute inset-0 w-full h-full [backface-visibility:hidden]">
                <div className="flex items-center justify-center w-full flex-col bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 h-full">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={300}
                    height={200}
                    className="rounded-lg object-cover"
                  />
                  <h3 className="mt-4 uppercase text-center tracking-widest text-2xl font-bold text-gray-900 dark:text-gray-100">
                    {card.title}
                  </h3>
                  <p className="text-xs font-light text-matteblack dark:text-white">
                    {card.description}
                  </p>
                </div>
              </div>

              {/* Back Card */}
              <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 h-full">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 text-center">
                    {card.title} Details
                  </h4>
                  <p className="mt-4 text-sm  text-gray-600 dark:text-gray-400">
                    {card.problem}
                  </p>
                  <p className="mt-4 text-sm  text-gray-600 dark:text-gray-400">
                    {card.solution}
                  </p>
                  <p className="bg-yellow py-3 px-2 mt-3 rounded-lg text-sm">
                    {card.status}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
