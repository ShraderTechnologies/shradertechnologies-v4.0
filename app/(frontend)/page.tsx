import { Metadata } from "next";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";

export const metadata: Metadata = {
  title: "Shrader Technologies",
  description:
    "Affordable App Development with Offshore Teams, AI-Powered Solutions, and Expert Social Media Marketing Services for Scalable Business Growth.",
};

export default function Home() {
  return (
    // Uses dvh for dynamic viewport height
    <main className="min-h-[100dvh] flex flex-col items-center justify-start px-4 sm:px-6 lg:px-8 dark:bg-matteblack">
      <div className="w-full mx-auto py-2">
        <section className="h-[calc(100dvh-4rem)] sm:h-[calc(100dvh-6rem)] lg:h-[calc(100dvh-8rem)]">
          <Navbar />
          <Header />
        </section>
      </div>
    </main>
  );
}
