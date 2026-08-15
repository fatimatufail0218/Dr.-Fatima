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
    <footer className="bg-[#0a2b2c] text-white/60 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-serif text-lg text-white">Dr. Sarah Bennett</p>

        <div className="flex flex-wrap gap-6 text-sm">
          {links.map((l) => (
            <Link key={l.label} href={l.href} className="hover:text-white transition-colors">
              {l.label}
            </Link>
          ))}
        </div>

        <p className="text-xs">© {new Date().getFullYear()} Dr. Sarah Bennett. All rights reserved.</p>
      </div>
    </footer>
  );
}