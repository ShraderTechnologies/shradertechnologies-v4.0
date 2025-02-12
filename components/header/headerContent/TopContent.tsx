/**
 * TopContent Component
 * -------------------
 * A notification-style component that appears at the top of the page with a call-to-action.
 *
 * Features:
 * - Glassmorphism design with backdrop blur
 * - Responsive layout and spacing
 * - Dark mode support
 * - Custom font sizing using CSS variables
 * - Call-to-action link to contact page
 *
 * Styling:
 * - Uses Tailwind for responsive design
 * - Implements glassmorphism effect with:
 *   - Semi-transparent background
 *   - Backdrop blur
 *   - Subtle border
 * - Responsive text sizing with --font-size-xs variable
 * - Dark mode colors for text and background
 *
 * Assested by Github Copilot AI /Jury
 */

import Link from "next/link";

const TopContent = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-4 mt-10">
      <div className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-md border border-white/20 dark:border-gray-800/20 rounded-lg p-3 max-w-4xl mx-auto">
        <p
          className="text-gray-600 dark:text-gray-400 "
          style={{ fontSize: "var(--font-size-xs)" }}
        >
          <span className="font-bold">Hey!</span> Want to know more on how we
          can skyrocket your brand.{" "}
          <Link
            className=" text-blue-600 dark:text-yellow hover:none font-bold"
            href="/contact"
          >
            Contact Us
          </Link>
        </p>
      </div>
    </div>
  );
};

export default TopContent;
