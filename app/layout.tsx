import { Poppins } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

const poppins = Poppins({
  variable: "--poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shrader Technologies",
  description:
    "Affordable App Development with Offshore Teams, AI-Powered Solutions, and Expert Social Media Marketing Services for Scalable Business Growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-[#EDEEEF] dark:bg-matteblack`}>
        {children}
      </body>
    </html>
  );
}
