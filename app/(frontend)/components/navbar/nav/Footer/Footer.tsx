import styles from "./styles.module.css";

import {
  FaFacebookSquare,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    {
      icon: FaFacebookSquare,
      href: "https://facebook.com",
      label: "Facebook",
    },
    {
      icon: FaYoutube,
      href: "https://youtube.com",
      label: "YouTube",
    },
    {
      icon: FaInstagram,
      href: "https://instagram.com",
      label: "Instagram",
    },
    {
      icon: FaTiktok,
      href: "https://tiktok.com",
      label: "TikTok",
    },
  ];

  const getHoverColor = (label: string) => {
    switch (label) {
      case "Facebook":
        return "hover:text-[#1877F2] dark:hover:text-[#1877F2]";
      case "YouTube":
        return "hover:text-[#FF0000] dark:hover:text-[#FF0000]";
      case "Instagram":
        return "hover:text-[#E4405F] dark:hover:text-[#E4405F]";
      case "TikTok":
        return "hover:text-[#000000] dark:hover:text-[#ffffff]";
      default:
        return "";
    }
  };

  return (
    <div className={`${styles.footer} flex items-center gap-4`}>
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <button
          key={label}
          onClick={() => window.open(href, "_blank")}
          aria-label={label}
          className={`text-gray-600 dark:text-gray-400 transition-colors duration-300 ease-in-out ${getHoverColor(
            label
          )}`}
        >
          <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      ))}
    </div>
  );
}
