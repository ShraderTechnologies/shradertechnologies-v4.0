import { socialIcons } from "../../data/homepageData";
import ThemeToggle from "../themetoggle/ThemeToggle";
/**
 * Header component that displays social media icons and navigation
 * Includes accessibility features for social links
 * Debug help by Github Copilot
 */
export default function Header() {
  return (
    <header className="w-full bg-background">
      <div className="h-16 ">
        <div className="container mx-auto h-full  border-b border-gray-200/20 shadow-[0_1px_0_0_rgba(0,0,0,0.05)]">
          <div className="flex items-center justify-between h-full">
            {/* Left side - Social media icons */}
            <div className="flex items-center space-x-4">
              {socialIcons.map(({ icon: Icon, href, label, hoverColor }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon
                    className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-600 transition-colors duration-300 ease-in-out cursor-pointer hover:text-[${hoverColor}]`}
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
