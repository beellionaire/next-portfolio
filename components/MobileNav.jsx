"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { motion } from "framer-motion";

const links = [
  { name: "home", path: "/" },
  { name: "skills", path: "/services" },
  { name: "journey", path: "/resume" },
  { name: "projects", path: "/projects" },
  { name: "contact", path: "/contact" },
];

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <div className="p-2 bg-white/5 backdrop-blur-md rounded-lg border border-white/10 active:scale-90 transition-all">
          <CiMenuFries className="text-[32px] text-accent" />
        </div>
      </SheetTrigger>

      {/* GLASSMORPHISM SHEET */}
      <SheetContent className="flex flex-col bg-[#1a1a1a]/60 backdrop-blur-2xl border-l border-white/10 p-0 overflow-hidden">
        {/* Background Accent Glow (Hiasan Kaca) */}
        <div className="absolute top-[-10%] left-[-20%] w-[300px] h-[300px] bg-accent/10 rounded-full blur-[100px] -z-10" />

        {/* Logo Section */}
        <div className="mt-32 mb-32 text-center relative">
          <Link href="/" className="text-4xl font-bold tracking-tighter group">
            Beel<span className="text-accent drop-shadow-[0_0_8px_#eaaa15] transition-all duration-500 group-hover:drop-shadow-[0_0_15px_#eaaa15]">.</span>
          </Link>
          <div className="w-8 h-[2px] bg-accent mx-auto mt-2 rounded-full opacity-50" />
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            const isActive = link.path === pathname;

            return (
              <motion.div key={index} initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1, duration: 0.4 }}>
                <Link href={link.path} className={`capitalize text-2xl tracking-widest transition-all duration-300 relative px-4 py-2 group ${isActive ? "text-accent font-bold" : "text-white/70"}`}>
                  {link.name}

                  {/* Underline Indicator untuk menu aktif */}
                  {isActive && <motion.div layoutId="activeMobile" className="absolute bottom-0 left-0 w-full h-[2px] bg-accent shadow-[0_0_10px_#eaaa15]" />}

                  {/* Hover effect Glow */}
                  <span className="absolute inset-0 bg-white/5 rounded-xl scale-0 group-hover:scale-100 transition-transform -z-10" />
                </Link>
              </motion.div>
            );
          })}
        </nav>

        {/* Footer Info didalam menu */}
        <div className="absolute bottom-10 left-0 w-full text-center">
          <p className="text-white/20 text-[10px] uppercase tracking-[0.5em]">Beellionaire Studio © 2026</p>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
