import Image from "next/image";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

export default function PortfolioCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isWideScreen, setIsWideScreen] = useState(false);
  const cards = [
    {
      title: "Project 1",
      description: "Description for project 1",
      image: "/path-to-image1.jpg",
      details: "More details about Project 1",
    },
    {
      title: "Project 2",
      description: "Description for project 2",
      image: "/path-to-image2.jpg",
      details: "More details about Project 2",
    },
    {
      title: "Project 3",
      description: "Description for project 3",
      image: "/path-to-image3.jpg",
      details: "More details about Project 3",
    },
    {
      title: "Project 4",
      description: "Description for project 4",
      image: "/path-to-image4.jpg",
      details: "More details about Project 4",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getVisibleCards = () => {
    return isWideScreen ? 3 : 1;
  };

  const getSlidePercentage = () => {
    const visibleCards = getVisibleCards();
    return currentIndex * (100 / visibleCards);
  };

  const isLastSlide = () => {
    const visibleCards = getVisibleCards();
    return currentIndex >= cards.length - visibleCards;
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
    <div className="relative w-full px-4 pt-20">
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
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="min-w-full md:min-w-[50%] lg:min-w-[33.333%] p-4"
            >
              <div className="relative h-[400px] group">
                <div className="relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front Card */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden]">
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 h-full">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                        {card.title}
                      </h3>
                      <p className="mt-4 text-gray-600 dark:text-gray-400">
                        {card.description}
                      </p>
                      <Image
                        src={card.image}
                        alt={card.title}
                        width={300}
                        height={200}
                        className="mt-4 rounded-lg object-cover"
                      />
                    </div>
                  </div>

                  {/* Back Card */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 h-full">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                        Details
                      </h4>
                      <p className="mt-4 text-gray-600 dark:text-gray-400">
                        {card.details}
                      </p>
                      <button className="mt-auto px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
