import dynamic from "next/dynamic";
import { Suspense } from "react";
import TopContent from "./headerContent/TopContent";
import VideoButton from "./headerContent/VideoButton";
import ContentRight from "./headerContent/ContentRight";
import MainTop from "./headerContent/MainTop";

// Lazy load components
const LeftContent = dynamic(() => import("./headerContent/LeftContent"), {
  loading: () => (
    <div className="animate-pulse h-48 bg-gray-200 dark:bg-gray-700"></div>
  ),
});

interface HeaderProps {
  className?: string;
}

export default function Header({ className = "" }: HeaderProps) {
  return (
    <header
      className={`w-full dark:bg-matteblack overflow-hidden relative ${className}`}
      role="banner"
    >
      {/* Background Image with loading optimization */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-10 min-h-[378px] h-full sm:h-auto"
        style={{
          backgroundImage: "url('/images/background-white.png')",
        }}
        role="presentation"
        aria-hidden="true"
      />

      <div className="container mx-auto h-full">
        <Suspense fallback={<div className="animate-pulse h-12"></div>}>
          <div className="flex items-center justify-between h-full mt-4 pl-1">
            <MainTop />
          </div>
        </Suspense>

        <Suspense fallback={<div className="animate-pulse h-24"></div>}>
          <TopContent />
        </Suspense>

        <Suspense fallback={<div className="animate-pulse h-12"></div>}>
          <VideoButton />
        </Suspense>

        <div
          className="grid grid-cols-1 max-[855px]:grid-cols-1 min-[855px]:grid-cols-2 gap-4 custom-header"
          role="main"
        >
          <Suspense fallback={<div className="animate-pulse h-48"></div>}>
            <section className="w-full min-h-[200px]">
              <LeftContent />
            </section>
          </Suspense>

          <Suspense fallback={<div className="animate-pulse h-48"></div>}>
            <section className="w-full min-h-[200px]">
              <ContentRight />
            </section>
          </Suspense>
        </div>
      </div>
    </header>
  );
}
