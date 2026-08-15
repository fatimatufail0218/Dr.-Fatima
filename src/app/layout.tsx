import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Dr. Fatima Batool — Dentist & Smile Specialist",
  description:
    "Personal portfolio of Dr. Fatima Batool, a dentist specializing in cosmetic dentistry, implants, and full-mouth rehabilitation.",
  openGraph: {
    title: "Dr. Fatima Batool — Dentist & Smile Specialist",
    description:
      "Explore the professional journey, case studies, and achievements of Dr. Fatima Batool.",
    type: "website",
    images: ["/images/dentist.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}