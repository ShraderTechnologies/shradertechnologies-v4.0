import { IconType } from "react-icons";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

type SocialIcon = {
  icon: IconType;
  href: string;
  label: string;
  hoverColor: string;
};

export const socialIcons: SocialIcon[] = [
  {
    icon: FaFacebookSquare,
    href: "https://facebook.com",
    label: "Facebook",
    hoverColor: "#1877F2",
  },
  {
    icon: IoLogoYoutube,
    href: "https://youtube.com",
    label: "YouTube",
    hoverColor: "#FF0000",
  },
  {
    icon: FaInstagramSquare,
    href: "https://instagram.com",
    label: "Instagram",
    hoverColor: "#E4405F",
  },
];
