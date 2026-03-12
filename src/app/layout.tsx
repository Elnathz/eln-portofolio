import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Eln's Portofolio",
  description:
    "Personal portfolio showcasing creative development and design work. Building beautiful digital experiences.",
  keywords: ["portfolio", "developer", "designer", "web development", "UI/UX"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Eln's Portofolio",
    description:
      "Personal portfolio showcasing creative development and design work.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} ${jakarta.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
