import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row lg:justify-between gap-8">
          {/* Logo and Description - Bottom on mobile */}
          <div className="lg:w-1/3 space-y-4">
            <div className="flex items-center">
              <Image
                src="/images/logofooter.png"
                width={200}
                height={200}
                alt="Shrader Techonologies"
              ></Image>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Your trusted partner in digital innovation. We create solutions
              that drive business growth and user satisfaction.
            </p>
          </div>

          {/* Center Links */}
          <div className="lg:w-1/3">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
                  Company
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link
                      href="/about"
                      className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/solutions"
                      className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    >
                      Solutions
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
                  Support
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link
                      href="/contact"
                      className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/faq"
                      className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    >
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Button Section */}
          <div className="lg:w-1/3 flex justify-end">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
