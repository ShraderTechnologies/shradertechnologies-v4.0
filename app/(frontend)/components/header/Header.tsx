import styles from "./Header.module.css";
import { socialIcons } from "../../data/homepageData";
import ThemeToggle from "../themetoggle/ThemeToggle";
import LeftContent from "./headerContent/LeftContent";
import TopContent from "./headerContent/TopContent";
import ContentRight from "./headerContent/ContentRight";
import VideoButton from "./headerContent/VideoButton";

/**
 * Header Component
 * --------------
 * Main header component that contains social media icons, theme toggle, and content sections.
 *
 * Features:
 * - Social media icons with hover effects and dynamic class assignments
 * - Dark mode support with theme toggle
 * - Responsive grid layout for content sections
 * - Background image with proper positioning
 * - Custom breakpoints for layout changes
 *
 * Layout Structure:
 * - Top section: Social icons and theme toggle
 * - Middle section: TopContent component
 * - Bottom section: Two-column grid with LeftContent and ContentRight
 *   - Responsive: Single column below 855px
 *   - Two columns above 855px
 *
 * Styling:
 * - Uses Tailwind for responsive design
 * - CSS modules for icon-specific styles
 * - Dark mode support with dark: variants
 * - Custom header height and spacing
 *
 * Assested by Github Copilot AI / Jury
 */

export default function Header() {
  // Dynamically generates the CSS class for a given social media icon based on its label
  const getIconClass = (label: string): string => {
    const classes = {
      Facebook: styles.facebook,
      YouTube: styles.youtube,
      Instagram: styles.instagram,
    }[label];
    return `${styles.socialIcon} ${classes}`;
  };

  return (
    <header className="w-full dark:bg-matteblack ">
      {/* Background Image Container */}
      <div
        className="absolute inset-0 bg-[url('/images/background-white.png')] bg-cover bg-center bg-no-repeat -z-10"
        style={{
          backgroundImage: "url('/images/background-white.png'')",
        }}
      ></div>

      {/* Header content */}
      <div className="h-16">
        <div className="container mx-auto h-full ">
          {/* Top section of the header with social icons and a theme toggle */}
          <div className="flex items-center justify-between h-full">
            {/* Social media icons */}
            <div className="flex items-center space-x-4 z-0">
              {socialIcons.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* Applies dynamic CSS classes to the social media icon */}
                  <Icon className={getIconClass(label)} />
                </a>
              ))}
            </div>
            {/* Theme toggle button */}
            <div className="flex items-center space-x-4 ">
              <ThemeToggle />
            </div>
          </div>
          {/* Top content section */}
          <TopContent />
          {/* Video button with popup */}
          <VideoButton />
          {/* Grid layout for additional header content */}
          <div className="grid grid-cols-1 max-[855px]:grid-cols-1 min-[855px]:grid-cols-2 gap-4 custom-header ">
            <div className="w-full min-h-[200px] ">
              <LeftContent />
            </div>
            <div className="w-full min-h-[200px] ">
              <ContentRight />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
