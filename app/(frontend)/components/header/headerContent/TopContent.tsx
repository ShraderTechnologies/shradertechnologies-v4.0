import Link from "next/link";

export default function TopContent() {
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
}
