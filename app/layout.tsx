import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "InClass - School Planner",
  description: "All your school life in one place",
  other: {
    "og:image": "/banner.png",
    "apple-itunes-app": "app-id=6462791378",
  },
  keywords: [
    "school",
    "planner",
    "inclass",
    "inclassapp",
    "inclass app",
    "school planner",
    "school app",
    "school planner app",
    "school planner",
    "ios app",
    "timetable",
    "study",
    "schedule",
    "tasks",
    "exams",
    "reminder",
    "homework",
    "college",
    "education",
    "academic",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-auto sm:scroll-smooth">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
