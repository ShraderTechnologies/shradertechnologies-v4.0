import React from "react";
import Form from "./Form";
import { Metadata } from "next";
import MainTop from "@/components/header/headerContent/MainTop";

export const metadata: Metadata = {
  title: "Contact Us | Shrader Technologies",
  description:
    "Affordable App Development with Offshore Teams, AI-Powered Solutions, and Expert Social Media Marketing Services for Scalable Business Growth.",
};

export default function page() {
  return (
    <>
      <div className="w-full bg-[#EDEEEF] dark:bg-matteblack relative overflow-hidden">
        <div className="absolute  inset-0 z-0 mt-20">
          <div
            className="w-full h-full bg-cover bg-left-top bg-no-repeat dark:invert "
            style={{
              backgroundImage: "url('/images/contactbg.png')", // Replace with your image path
              opacity: 0.2, // Adjust opacity as needed
            }}
          />
        </div>

        {/* Glassmorphism orbs */}
        <div className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-blue-400 opacity-20 blur-3xl dark:opacity-10"></div>
        <div className="absolute bottom-20 left-[5%] w-72 h-72 rounded-full bg-purple-400 opacity-20 blur-3xl dark:opacity-10"></div>
        <div className="absolute top-1/3 left-[20%] w-48 h-48 rounded-full bg-pink-400 opacity-20 blur-3xl dark:opacity-10"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-4 relative  z-10">
          <MainTop />
          <h1 className="mt-8 text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-8 text-center transition-colors duration-300">
            Contact Us
          </h1>
          <Form />
        </div>
      </div>
    </>
  );
}
