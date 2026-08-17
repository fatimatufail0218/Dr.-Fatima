import Link from "next/link";

const links = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Achievements", href: "/achievements" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#04293f] text-white/60 py-5">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-center">
       <p className="text-xs">© {new Date().getFullYear()} Dr. Fatima Batool. All rights reserved.</p>
      </div>
    </footer>
  );
}