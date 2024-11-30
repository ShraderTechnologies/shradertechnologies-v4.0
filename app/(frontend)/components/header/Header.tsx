import { socialIcons } from "../../data/homepageData";
import ThemeToggle from "../themetoggle/ThemeToggle";
/**
 * Header component that displays social media icons and navigation
 * Includes accessibility features for social links
 * Debug help by Github Copilot
 */

export default function Header() {
  // Helper function to get icon hover color
  const getIconColor = (label: string) => {
    const colors = {
      Facebook: "#1877F2",
      YouTube: "#FF0000",
      Instagram: "#E4405F",
    };
    return colors[label] || "#E4405F";
  };

  // Common icon classes
  const iconBaseClasses =
    "w-5 h-5 sm:w-6 sm:h-6 text-gray-600 dark:text-gray-400 transition-colors duration-300";

  return (
    <header className="w-full bg-white dark:bg-matteblack">
      <div className="h-16">
        <div className="container mx-auto h-full border-b border-gray-200/20 dark:border-gray-700/30 shadow-[0_1px_0_0_rgba(0,0,0,0.05)] dark:shadow-[0_1px_0_0_rgba(255,255,255,0.05)]">
          <div className="flex items-center justify-between h-full">
            <div className="flex items-center space-x-4">
              {socialIcons.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300"
                >
                  <Icon
                    className={`${iconBaseClasses} hover:text-[${getIconColor(
                      label
                    )}] dark:hover:text-[${getIconColor(label)}]`}
                  />
                </a>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
