"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { name: "home", path: "/" },
  { name: "skills", path: "/services" },
  { name: "journey", path: "/resume" },
  { name: "projects", path: "/projects" },
  { name: "contact", path: "/contact" },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-2 p-1 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-full shadow-2xl">
      {links.map((link, index) => {
        const isActive = link.path === pathname;

        return (
          <Link href={link.path} key={index} className={`relative px-6 py-2 capitalize font-medium transition-all duration-300 rounded-full text-sm tracking-wide ${isActive ? "text-primary font-bold" : "text-white/70 hover:text-white"}`}>
            {/* Background Pill untuk Link Aktif */}
            {isActive && <motion.span layoutId="nav-pill" className="absolute inset-0 bg-accent rounded-full -z-10 shadow-[0_0_15px_rgba(234,170,21,0.5)]" transition={{ type: "spring", stiffness: 380, damping: 30 }} />}

            {/* Efek Glow kecil saat Hover (opsional) */}
            <span className="relative z-10">{link.name}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
