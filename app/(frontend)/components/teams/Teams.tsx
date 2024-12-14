"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { TeamsItems } from "../../data/homepageData";

export default function Teams() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [screenSize, setScreenSize] = useState({
    isWideScreen: false,
    isMediumScreen: false,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        isWideScreen: window.innerWidth >= 1024,
        isMediumScreen: window.innerWidth >= 768 && window.innerWidth < 1024,
      });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Modified getVisibleCards
  const getVisibleCards = () => {
    if (screenSize.isWideScreen) return 3;
    if (screenSize.isMediumScreen) return 2;
    return 1;
  };

  const getSlidePercentage = () => {
    const visibleCards = getVisibleCards();
    return currentIndex * (100 / visibleCards);
  };

  const isLastSlide = () => {
    const visibleCards = getVisibleCards();
    return currentIndex >= TeamsItems.length - visibleCards;
  };

  const slideLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const slideRight = () => {
    if (!isLastSlide()) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto relative">
        <button
          onClick={slideLeft}
          disabled={currentIndex === 0}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full shadow-lg transition-all
          ${
            currentIndex === 0
              ? "bg-gray-300 cursor-not-allowed opacity-50"
              : "bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800"
          }`}
        >
          <IoChevronBackOutline className="w-6 h-6 text-gray-800 dark:text-gray-200" />
        </button>

        <button
          onClick={slideRight}
          disabled={isLastSlide()}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full shadow-lg transition-all
          ${
            isLastSlide()
              ? "bg-gray-300 cursor-not-allowed opacity-50"
              : "bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800"
          }`}
        >
          <IoChevronForwardOutline className="w-6 h-6 text-gray-800 dark:text-gray-200" />
        </button>

        <div className="overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `-${getSlidePercentage()}%` }}
            transition={{ duration: 0.5 }}
          >
            {TeamsItems.map((card, index) => (
              <motion.div
                key={index}
                className="min-w-full md:min-w-[50%] lg:min-w-[33.333%] p-4"
              >
                <div className="relative h-[400px] group">
                  <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                    {/* Front Card */}
                    <div className="absolute inset-0 w-full h-full [backface-visibility:hidden]">
                      <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                        <div className="relative w-full h-full">
                          <Image
                            src={card.imgSrc}
                            alt={card.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                          <h3 className="absolute bottom-4 left-4 uppercase tracking-widest text-2xl font-bold text-yellow dark:text-white z-10">
                            {card.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* Overlay Details - Slides up on hover */}
                    <div className="absolute inset-0 bg-white/95 dark:bg-gray-800/95 p-6 transform translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                        {card.position}
                      </h4>
                      <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
