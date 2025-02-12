"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { TeamsItems } from "@/app/(frontend)/data/homepageData";

interface ScreenSize {
  isWideScreen: boolean;
  isMediumScreen: boolean;
}

interface TeamMember {
  imgSrc: string;
  title: string;
  position: string | JSX.Element;
  description: string;
}

interface TeamCardProps {
  card: TeamMember;
}

const TeamCard = ({ card }: TeamCardProps) => (
  <div className="relative h-[400px] group">
    <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      {/* Front Card */}
      <div className="absolute inset-0 w-full h-full [backface-visibility:hidden]">
        <div className="relative w-full h-full">
          <Image
            src={card.imgSrc}
            alt={card.title}
            fill
            className="object-cover"
            onError={(e) => {
              e.currentTarget.src = "/fallback-image.jpg"; // Add a fallback image
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <h3 className="absolute bottom-4 left-4 uppercase tracking-widest text-2xl font-bold text-yellow dark:text-white z-10">
            {card.title}
          </h3>
        </div>
      </div>

      {/* Overlay Details */}
      <div
        className="absolute inset-0 bg-white/95 dark:bg-gray-800/95 p-6 transform translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0"
        role="tooltip"
      >
        <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100">
          {card.position}
        </h4>
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          {card.description}
        </p>
      </div>
    </div>
  </div>
);

const NavigationButton = ({
  onClick,
  disabled,
  direction,
}: {
  onClick: () => void;
  disabled: boolean;
  direction: "left" | "right";
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    aria-label={`Slide ${direction}`}
    className={`absolute ${direction}-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full shadow-lg transition-all
    ${
      disabled
        ? "bg-gray-300 cursor-not-allowed opacity-50"
        : "bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800"
    }`}
  >
    {direction === "left" ? (
      <IoChevronBackOutline className="w-6 h-6 text-gray-800 dark:text-gray-200" />
    ) : (
      <IoChevronForwardOutline className="w-6 h-6 text-gray-800 dark:text-gray-200" />
    )}
  </button>
);

const Teams = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [screenSize, setScreenSize] = useState<ScreenSize>({
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
    const debouncedResize = debounce(handleResize, 250);
    window.addEventListener("resize", debouncedResize);
    return () => window.removeEventListener("resize", debouncedResize);
  }, []);

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

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto relative">
        <NavigationButton
          onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
          disabled={currentIndex === 0}
          direction="left"
        />
        <NavigationButton
          onClick={() =>
            setCurrentIndex((prev) => (isLastSlide() ? prev : prev + 1))
          }
          disabled={isLastSlide()}
          direction="right"
        />

        <div className="overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `-${getSlidePercentage()}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {TeamsItems.map((card, index) => (
              <motion.div
                key={index}
                className="min-w-full md:min-w-[50%] lg:min-w-[33.333%] p-4"
              >
                <TeamCard card={card} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Teams;

// Utility function for debouncing
const debounce = <T extends (...args: unknown[]) => unknown>(
  fn: T,
  ms = 300
) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: unknown, ...args: Parameters<T>) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};
