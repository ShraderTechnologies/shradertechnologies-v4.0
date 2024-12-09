import { Metadata } from "next";
import Header from "./components/header/Header";
import Portfolio from "./components/portfolio/Portfolio";
import Edge from "./components/edge/Edge";
import Projectinmind from "./components/projectinmind/Projectinmind";

export const metadata: Metadata = {
  title: "Shrader Technologies",
  description:
    "Affordable App Development with Offshore Teams, AI-Powered Solutions, and Expert Social Media Marketing Services for Scalable Business Growth.",
};

export default function Home() {
  return (
    // Uses dvh for dynamic viewport height
    <div className="min-h-screen flex flex-col items-center justify-start dark:bg-matteblack">
      <div className="w-full  ">
        <section className="min-h-screen py-4 sm:py-6 lg:py-8">
          <Header />
        </section>
        <Portfolio />
        <Edge />
        <Projectinmind />
      </div>
    </div>
  );
}
