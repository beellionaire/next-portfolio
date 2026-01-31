"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";

// Components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-[#1a1a1a] py-12 lg:py-0">
      {/* Background Layer - Dikecilkan agar tidak bocor ke section lain */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-5%] left-[-5%] w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[5%] w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">
          
          {/* LEFT: TEXT CONTENT (Dibuat lebih compact) */}
          <div className="text-center lg:text-left order-2 lg:order-none flex flex-col items-center lg:items-start max-w-[600px]">
            <motion.div 
              initial={{ opacity: 0, y: 15 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.4 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="bg-accent h-2 w-2 rounded-full shadow-[0_0_8px_#eaaa15]"></span>
                </span>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/60">Portfolio 2026</span>
              </div>

              <h1 className="h1 mb-4 leading-tight">
                Hello, I&apos;m <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-[#ffdb7d] to-accent drop-shadow-md">
                  Beellionaire
                </span>
              </h1>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 15 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.4, delay: 0.1 }}
              className="w-full"
            >
              {/* Box Deskripsi dikurangi padding & ukurannya agar proporsional */}
              <div className="relative bg-[#232323]/30 backdrop-blur-xl border border-white/5 p-6 rounded-2xl shadow-xl mb-8">
                <p className="text-sm lg:text-base text-white/60 leading-relaxed text-justify lg:text-left">
                  A Web Developer based in Solo, specializing in <span className="text-accent">modern web applications</span>. 
                  I focus on high-performance digital experiences with a clean aesthetic and robust architecture.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 15 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center gap-6"
            >
              <Button 
                variant="outline" 
                size="lg" 
                className="group uppercase flex items-center gap-3 bg-accent text-primary font-bold border-none hover:shadow-[0_0_20px_rgba(234,170,21,0.4)] transition-all duration-300 rounded-full px-8"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl group-hover:animate-bounce" />
              </Button>

              <Social 
                containerStyles="flex gap-4" 
                iconStyles="w-10 h-10 border border-white/10 bg-white/5 rounded-full flex justify-center items-center text-accent hover:bg-accent hover:text-primary transition-all duration-500" 
              />
            </motion.div>
          </div>

          {/* RIGHT: PHOTO SECTION (Diberi ruang lebih) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-none relative lg:mr-8"
          >
             {/* Subtle Glow behind photo */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-accent/10 blur-[100px] -z-10 rounded-full" />
             
             {/* Container Photo dibatasi ukurannya agar tidak 'overpower' teks */}
             <div className="w-[300px] h-[300px] xl:w-[450px] xl:h-[450px]">
               <Photo />
             </div>
          </motion.div>
        </div>
      </div>

      {/* Stats - Diberi padding atas agar tidak terlalu mepet ke konten */}
      <div className="mt-12 lg:mt-20">
        <Stats />
      </div>
    </section>
  );
};

export default Home;