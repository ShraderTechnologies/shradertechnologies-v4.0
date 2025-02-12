import Image from "next/image";
import Link from "next/link";

type FooterLink = {
  label: string;
  href: string;
};

const companyLinks: FooterLink[] = [
  { label: "About", href: "/about" },
  { label: "Solutions", href: "/solutions" },
];

const supportLinks: FooterLink[] = [
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
];

const FooterLinkList = ({
  title,
  links,
}: {
  title: string;
  links: FooterLink[];
}) => (
  <div>
    <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider transition-colors duration-300">
      {title}
    </h3>
    <ul className="mt-4 space-y-4">
      {links.map(({ label, href }) => (
        <li key={href}>
          <Link
            href={href}
            className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row lg:justify-between gap-8">
          {/* Logo and Description */}
          <div className="w-full lg:w-1/2 space-y-4 flex flex-col justify-center items-center md:items-start">
            <div className="flex items-center">
              <Image
                src="/images/logofooter.png"
                width={200}
                height={200}
                alt="Shrader Technologies Light"
                className="block dark:hidden transition-opacity duration-300"
                priority
              />
              <Image
                src="/images/logo.png" // Add your dark mode logo
                width={200}
                height={200}
                alt="Shrader Technologies Dark"
                className="hidden dark:block transition-opacity duration-300"
                priority
              />
            </div>
            <p className="w-96 text-center md:w-full md:text-left lg:w-96 text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300">
              Your trusted partner in digital innovation. We create solutions
              that drive business growth and user satisfaction.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="lg:w-1/2" aria-label="Footer navigation">
            <div className="grid grid-cols-2 gap-8">
              <FooterLinkList title="Company" links={companyLinks} />
              <FooterLinkList title="Support" links={supportLinks} />
            </div>
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
            © {currentYear} Shrader Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
