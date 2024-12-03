"use client";

/**
 * ThemeToggle Component
 * --------------------
 * A toggle switch component that controls the application's theme (light/dark mode).
 *
 * Features:
 * - Persistent theme storage using localStorage
 * - Smooth transition animations
 * - Responsive toggle switch design
 * - Sun and Moon icons for visual indication
 *
 * Implementation:
 * - Uses React useState for theme state management
 * - Uses useEffect for:
 *   - Initial theme detection from localStorage
 *   - Applying theme changes to document root
 * - Updates localStorage on theme changes
 *
 * Assested by Github Copilot AI / Jury
 */

import { useEffect, useState } from "react";
import { BsSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";

export default function ThemeToggle() {
  // Manages the dark mode state (true for dark mode, false for light mode)
  const [darkMode, setDarkMode] = useState(false);

  // Loads the saved theme from localStorage when the component mounts
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkMode(true);
    }
  }, []);

  // Applies the dark or light theme based on the darkMode state
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark"); // Adds "dark" class for dark mode styles
      localStorage.setItem("theme", "dark"); // Saves the theme preference to localStorage
    } else {
      document.documentElement.classList.remove("dark"); // Removes "dark" class for light mode styles
      localStorage.setItem("theme", "light"); // Saves the theme preference to localStorage
    }
  }, [darkMode]);
  return (
    // Toggle button container with dark mode and light mode styles
    <div
      className="relative w-16 h-8 flex items-center dark:bg-gray-800 bg-teal-500 cursor-pointer rounded-full p-1"
      onClick={() => setDarkMode(!darkMode)}
    >
      <FaMoon className="text-white" size={18} />

      {/* Moving toggle indicator (circle) with transition effects */}
      <div
        className="absolute bg-white dark:bg-charcoal w-6 h-6 rounded-full shadow-md transform transition-transform duration-300"
        style={darkMode ? { left: "2pxs" } : { right: "2px" }}
      ></div>
      <BsSunFill className="ml-auto text-yellow-500" size={18} />
    </div>
  );
}
