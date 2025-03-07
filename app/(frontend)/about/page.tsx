import Aboutheader from "@/components/about/Aboutheader";
import AboutMid from "@/components/about/AboutMid";
import MainTop from "@/components/header/headerContent/MainTop";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Shrader Technologies",
  description:
    "Learn about Shrader Technologies - your partner in digital innovation.",
};

export default function page() {
  return (
    <div className="w-full bg-[#EDEEEF] dark:bg-matteblack relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-[130%] sm:w-[125%] md:w-[120%] h-full 
              bg-cover bg-left-top bg-no-repeat dark:invert 
              transform -translate-x-[15%] sm:-translate-x-[12%] md:-translate-x-[10%]"
          style={{
            backgroundImage: "url('/images/aboutbg.png')",
            opacity: 0.2,
          }}
        />
      </div>
      {/* Glassmorphism orbs */}
      <div className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-blue-400 opacity-20 blur-3xl dark:opacity-10"></div>
      <div className="absolute bottom-20 left-[5%] w-72 h-72 rounded-full bg-purple-400 opacity-20 blur-3xl dark:opacity-10"></div>
      <div className="absolute top-1/3 left-[20%] w-48 h-48 rounded-full bg-pink-400 opacity-20 blur-3xl dark:opacity-10"></div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-4 relative z-10">
        <MainTop />
        {/* Title and Line Section */}
        <div className="flex items-center justify-between mb-4 mt-32">
          <h1 className="text-7xl font-bold text-gray-800 dark:text-gray-200">
            About Company
          </h1>
          <div className="flex-grow ml-8">
            <div className="h-[2px] bg-gray-300 w-[300px]"></div>
          </div>
        </div>

        {/* Current Page Path */}
        <div className="text-sm text-gray-600 mb-14">Home / About</div>
        <Aboutheader />
        <AboutMid />
      </div>
    </div>
  );
}
