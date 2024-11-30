import styles from "./Header.module.css";
import { socialIcons } from "../../data/homepageData";
import ThemeToggle from "../themetoggle/ThemeToggle";

/**
 * The `getIconClass` function takes a social media platform name as a parameter and returns a string of combined CSS class names. It uses an object to map the platform names ('Facebook', 'YouTube', 'Instagram') to their corresponding CSS module classes defined in `Header.module.css`. The function then combines the base `socialIcon` class with the platform-specific class to apply both the base styles and the hover effect for the specific platform. This allows dynamic class assignment based on the social media platform.
 */
export default function Header() {
  const getIconClass = (label: string): string => {
    const classes = {
      Facebook: styles.facebook,
      YouTube: styles.youtube,
      Instagram: styles.instagram,
    }[label];
    return `${styles.socialIcon} ${classes}`;
  };

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
                >
                  {/* The getIconClass function is used here to dynamically assign CSS classes to each social media icon based on its label */}
                  <Icon className={getIconClass(label)} />
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
