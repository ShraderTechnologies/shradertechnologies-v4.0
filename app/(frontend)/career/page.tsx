"use client";

import MainTop from "@/components/header/headerContent/MainTop";
import React, { useEffect, useState } from "react";

function CareerPage() {
  const [mounted, setMounted] = useState(false);

  // Job listings data
  const jobs = [
    {
      id: 1,
      title: "Operations Manager",
      location: "Davao City",
      salary: "17,000php + up to 50,000php commission",
      qualifications: [
        "Must be a resident of Davao City",
        "Must have access to workstation",
        "Proven experience in operations management or a similar role",
        "Basic bookkeeping skills with attention to detail",
        "Excellent communication and leadership abilities",
        "Fluent English",
        "A proactive, problem-solving mindset with a drive to achieve targets",
      ],
      benefits: [
        "A competitive base salary with performance-driven bonuses",
        "A supportive work environment where your contributions are valued",
        "Opportunities for growth within a fast-paced, innovative company",
      ],
      description:
        "We are a new motorcycle taxi and delivery service in Davao City. We're seeking a dynamic and detail-oriented Operations Manager to join our team. This dual-role position combines sales and operations, with a focus on managing day-to-day activities and assisting with bookkeeping tasks.",
    },
    // Add more jobs here as needed
  ];

  // State to track selected job
  const [selectedJob, setSelectedJob] = useState(jobs[0]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-black relative overflow-hidden">
      {/* Animated background elements */}
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-4 relative z-10">
        <MainTop />

        {/* Main content with glassmorphism effect */}
        <div
          className={`w-full mx-auto my-10 p-1 rounded-2xl bg-gradient-to-br from-white/50 to-white/30 dark:from-gray-800/50 dark:to-gray-900/30 backdrop-blur-md shadow-[0_8px_32px_0_rgba(31,38,135,0.2)] border border-white/20 dark:border-gray-700/20 transition-all duration-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="rounded-xl overflow-hidden">
            {/* Header section */}
            <div className="text-center p-8 bg-gradient-to-b from-blue-600/10 to-transparent backdrop-blur-sm">
              <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-3">
                Join Our Team
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
            </div>

            <div className="p-6 md:p-8">
              {/* Two column layout for job listings */}
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Left column - Job titles */}
                <div className="lg:w-1/3 p-4">
                  <div className="p-4 rounded-xl bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm border border-white/30 dark:border-gray-700/30 h-full">
                    <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-400 mb-6 text-center">
                      Available Positions
                    </h2>
                    <div className="space-y-3">
                      {jobs.map((job) => (
                        <div
                          key={job.id}
                          onClick={() => setSelectedJob(job)}
                          className={`p-4 rounded-lg cursor-pointer transition-all duration-300 hover:-translate-y-1 border 
                            ${
                              selectedJob.id === job.id
                                ? "bg-blue-100 dark:bg-blue-900/40 border-blue-300 dark:border-blue-700/50 shadow-md"
                                : "bg-white/60 dark:bg-gray-800/60 hover:bg-blue-50 dark:hover:bg-blue-900/20 border-white/30 dark:border-gray-700/30"
                            }`}
                        >
                          <h3 className="text-lg font-medium text-blue-700 dark:text-blue-400">
                            {job.title}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                            {job.location}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right column - Job details */}
                <div className="lg:w-2/3">
                  <div className="space-y-6">
                    {/* Introduction */}
                    <div className="p-6 rounded-xl bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-white/30 dark:border-gray-700/30">
                      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                        {selectedJob.description}
                      </p>
                    </div>

                    {/* Position Details */}
                    <div className="p-6 rounded-xl bg-blue-50/60 dark:bg-blue-900/20 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-blue-100/50 dark:border-blue-800/30">
                      <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-400 mb-4">
                        Position Details
                      </h2>
                      <p className="text-lg text-gray-700 dark:text-gray-300">
                        This is a full-time position with a monthly{" "}
                        <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-400 dark:to-blue-300">
                          {selectedJob.salary.split("+")[0]}
                        </span>{" "}
                        base salary{" "}
                        {selectedJob.salary.includes("+") ? "+ up to " : ""}
                        {selectedJob.salary.includes("+") && (
                          <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500 dark:from-blue-400 dark:to-purple-300">
                            {selectedJob.salary.split("+ ")[1]}
                          </span>
                        )}
                      </p>
                    </div>

                    {/* Qualifications */}
                    <div className="p-6 rounded-xl bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-white/30 dark:border-gray-700/30">
                      <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-400 mb-4">
                        Qualifications
                      </h2>
                      <ul className="space-y-3">
                        {selectedJob.qualifications.map((item, index) => (
                          <li key={index} className="flex items-start group">
                            <span className="text-blue-500 dark:text-blue-400 mr-2 text-lg transition-transform duration-300 group-hover:scale-125">
                              •
                            </span>
                            <span className="text-gray-700 dark:text-gray-300 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* What We Offer */}
                    <div className="p-6 rounded-xl bg-purple-50/60 dark:bg-purple-900/20 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-purple-100/50 dark:border-purple-800/30">
                      <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-400 mb-4">
                        What We Offer
                      </h2>
                      <ul className="space-y-3">
                        {selectedJob.benefits.map((item, index) => (
                          <li key={index} className="flex items-start group">
                            <span className="text-blue-500 dark:text-blue-400 mr-2 text-lg transition-transform duration-300 group-hover:scale-125">
                              •
                            </span>
                            <span className="text-gray-700 dark:text-gray-300 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors duration-300">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Apply Section */}
                    <div className="text-center p-6 rounded-xl bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm border border-white/30 dark:border-gray-700/30">
                      <p className="text-lg mb-6 text-black dark:text-white">
                        To apply, please send your resume to{" "}
                        <a
                          href="mailto:knowslightning@gmail.com"
                          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors duration-300 border-b border-blue-300 hover:border-blue-600"
                        >
                          knowslightning@gmail.com
                        </a>
                      </p>

                      <button
                        className="bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-500 dark:to-blue-400 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-blue-500/30 dark:hover:shadow-blue-400/30 transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 backdrop-blur-sm border border-white/20"
                        onClick={() =>
                          (window.location.href =
                            "mailto:knowslightning@gmail.com")
                        }
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CareerPage;
