"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname(); // This gives you the current path

  // Remove the leading '/' if it exists
  const attemptedPath = pathname ? pathname.slice(1) : "";
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-neutral-100 dark:bg-gray-900">
      <motion.div
        className="text-center space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="/images/not-found.png"
          alt="404 Illustration"
          width={400}
          height={400}
          className="mx-auto"
          priority
        />

        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
            Page Not Found
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 transition-colors duration-300">
            Oops! The page{" "}
            <strong className="uppercase">{attemptedPath || "home"}</strong> you
            are looking for does not exist. How you got here is a mystery.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 transition-colors duration-300">
            But you can click the button below to go back to the homepage.
          </p>
        </div>

        <Link
          href="/"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
        >
          Go Back Home
        </Link>
      </motion.div>
    </div>
  );
}
