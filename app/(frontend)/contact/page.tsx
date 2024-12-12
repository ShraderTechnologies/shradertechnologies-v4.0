import React from "react";
import Form from "./Form";
import { Metadata } from "next";
import MainTop from "../components/header/headerContent/MainTop";

export const metadata: Metadata = {
  title: "Contact Us | Shrader Technologies",
  description:
    "Affordable App Development with Offshore Teams, AI-Powered Solutions, and Expert Social Media Marketing Services for Scalable Business Growth.",
};

export default function page() {
  return (
    <>
      <div className="w-full bg-[#EDEEEF] dark:bg-matteblack relative overflow-hidden">
        <div className="absolute  inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-left-top bg-no-repeat dark:invert "
            style={{
              backgroundImage: "url('/images/contactbg.png')", // Replace with your image path
              opacity: 0.2, // Adjust opacity as needed
            }}
          />
        </div>
        <MainTop />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 z-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8 text-center transition-colors duration-300">
            Contact Us
          </h1>
          <Form />
        </div>
      </div>
    </>
  );
}
