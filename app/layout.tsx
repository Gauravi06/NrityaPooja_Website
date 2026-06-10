import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Nrityapooja's Kathak Studio | Pooja Kukreja",
  description: "Classical Kathak dance classes in Amravati by Pooja Kukreja — 13 years of Lucknow Gharana training. Beginner to advanced batches available.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
