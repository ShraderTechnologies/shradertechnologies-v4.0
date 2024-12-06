import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./(frontend)/components/navbar/Navbar";

const poppins = localFont({
  src: [
    { path: "./fonts/Poppins-ExtraBold.ttf", weight: "900", style: "normal" },
    { path: "./fonts/Poppins-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/Poppins-Bold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/Poppins-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/Poppins-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/Poppins-Light.ttf", weight: "300", style: "normal" },
  ],
  variable: "--poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
