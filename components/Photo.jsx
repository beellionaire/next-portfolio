"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 0.4, ease: "easeIn" },
        }}
        className="relative flex items-center justify-center"
      >
        {/* FOTO PROFIL */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.5, duration: 0.5, ease: "easeInOut" },
          }}
          className="w-[290px] h-[290px] xl:w-[485px] xl:h-[485px] absolute overflow-hidden rounded-full border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)]"
        >
          <Image src="/assets/foto-profil.png" priority quality={100} fill alt="Beellionaire" className="object-cover rounded-full" />
        </motion.div>

        {/* NEON CIRCLE SVG */}
        <motion.svg className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px] drop-shadow-[0_0_15px_rgba(234,170,21,0.8)]" fill="transparent" viewBox="0 0 506 506" xmlns="http://www.w3.org/2000/svg">
          {/* Garis Dasar Halus (Background Ring) */}
          <circle cx="253" cy="253" r="250" stroke="rgba(234, 170, 21, 0.1)" strokeWidth="2" />

          {/* Garis Putus-Putus Neon yang Bergerak */}
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#eaaa15" // Warna Accent
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>

        {/* Outer Neon Glow Ring (Glass Effect) */}
        <div className="absolute inset-0 rounded-full border-2 border-accent/20 blur-[2px] -z-10 scale-[1.02] shadow-[0_0_40px_rgba(234,170,21,0.2)]" />
      </motion.div>
    </div>
  );
};

export default Photo;
