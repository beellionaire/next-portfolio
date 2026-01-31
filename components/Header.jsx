"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

// Component
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Menangani efek scroll untuk merubah opacity header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? "py-4 bg-[#1a1a1a]/70 backdrop-blur-lg border-b border-white/5 shadow-2xl" : "py-8 bg-transparent"}`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo dengan efek Glow */}
        <Link href="/">
          <motion.h1 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="text-4xl font-bold tracking-tighter">
            Beel<span className="text-accent drop-shadow-[0_0_10px_#eaaa15]">.</span>
          </motion.h1>
        </Link>

        {/* Desktop Navbar & Hire Me Button */}
        <div className="hidden lg:flex items-center gap-10">
          <Nav />
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <Link href="/contact">
              <Button className="rounded-full px-8 bg-accent text-primary font-bold hover:shadow-[0_0_20px_rgba(234,170,21,0.5)] transition-all duration-300">Hire Me</Button>
            </Link>
          </motion.div>
        </div>

        {/* Mobile Navbar */}
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
