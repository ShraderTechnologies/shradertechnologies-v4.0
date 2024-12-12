import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row lg:justify-between gap-8">
          {/* Logo and Description - Bottom on mobile */}
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
            <p className=" w-96 text-center md:w-full md:text-left lg:w-96 text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300">
              Your trusted partner in digital innovation. We create solutions
              that drive business growth and user satisfaction.
            </p>
          </div>

          {/* Center Links */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider transition-colors duration-300">
                  Company
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link
                      href="/about"
                      className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/solutions"
                      className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
                    >
                      Solutions
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider transition-colors duration-300">
                  Support
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link
                      href="/contact"
                      className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/faq"
                      className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
                    >
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
