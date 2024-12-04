"use client";

import PortfolioCard from "./PortfolioCard";
import "./portfolio.css";
export default function Portfolio() {
  return (
    <div className="w-full min-h-screen bg-[#EDEEEF] dark:bg-matteblack">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-12 mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 dark:text-gray-100 max-w-3xl">
              We&apos;ve Worked With Them, <span>We Trust Each Other</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl font-light text-gray-600 dark:text-gray-400 max-w-xl">
              Every partnership tells a story of trust, collaboration, and
              shared success. Together, we don&apos;t just meet goals; we exceed
              expectations and create lasting impact.
            </p>
          </div>
          <PortfolioCard />
        </div>
      </div>
    </div>
  );
}
