"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderButton from "@/components/WorkSliderButton";

const projects = [
  {
    num: "01",

    category: "Fullstack",

    title: "Donasi Website",

    description: "Platform donasi digital yang mengintegrasikan Trix Editor untuk manajemen konten berita dan laporan donasi secara real-time.",

    stack: [{ name: "Laravel" }, { name: "Tailwind" }, { name: "MySQL" }],

    image: "/assets/work/thumb1.png",

    live: "",

    github: "",
  },

  {
    num: "02",

    category: "Frontend",

    title: "Portfolio Next.js",

    description: "Website portfolio premium dengan implementasi Framer Motion untuk transisi halaman yang smooth dan desain Glassmorphism.",

    stack: [{ name: "Next.js" }, { name: "Framer Motion" }, { name: "Tailwind" }],

    image: "/assets/work/thumb2.png",

    live: "",

    github: "",
  },

  {
    num: "03",

    category: "Academic",

    title: "Leave Request System",

    description: "Sistem pengajuan cuti berbasis web dengan integrasi Telegram Bot API untuk notifikasi instan kepada civitas akademika.",

    stack: [{ name: "PHP" }, { name: "Telegram API" }, { name: "Bootstrap" }],

    image: "/assets/work/thumb3.png",

    live: "",

    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen flex flex-col justify-center py-24 xl:py-0 relative overflow-hidden bg-[#0d0d0d]">
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] -z-10" />

      <div className="container mx-auto relative z-10 px-4 xl:px-0 pt-[40px] xl:pt-0">
        <div className="flex flex-col xl:flex-row xl:gap-[60px]">
          {/* LEFT: TEXT CONTENT */}
          <div className="w-full xl:w-[45%] flex flex-col order-2 xl:order-none mt-8 xl:mt-0">
            <div className="flex flex-col gap-[20px] xl:gap-[30px] p-6 xl:p-10 bg-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-[30px] xl:rounded-[40px] shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />

              <AnimatePresence mode="wait">
                <motion.div key={project.num} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.3 }}>
                  <div className="text-6xl xl:text-8xl leading-none font-extrabold text-transparent text-outline mb-2 xl:mb-4">{project.num}</div>

                  <div className="inline-block px-3 py-1 mb-4 rounded-full bg-accent/10 border border-accent/20">
                    <span className="text-[10px] xl:text-xs font-bold tracking-widest uppercase text-accent">{project.category}</span>
                  </div>

                  <h2 className="text-2xl xl:text-4xl font-bold text-white mb-4 leading-tight">{project.title}</h2>

                  <p className="text-white/50 text-sm xl:text-lg leading-relaxed mb-6 xl:mb-8 text-justify">{project.description}</p>

                  <div className="flex flex-wrap gap-2 xl:gap-3 mb-6 xl:mb-8">
                    {project.stack.map((item, index) => (
                      <span key={index} className="px-3 py-1 text-[10px] xl:text-sm bg-white/5 border border-white/10 rounded-full text-accent font-medium shadow-inner">
                        {item.name}
                      </span>
                    ))}
                  </div>

                  <div className="w-full h-[1px] bg-white/10 mb-6 xl:mb-8" />

                  <div className="flex items-center gap-4 xl:gap-6">
                    <Link href={project.live}>
                      <TooltipProvider delayDuration={0}>
                        <Tooltip>
                          <TooltipTrigger className="w-[50px] h-[50px] xl:w-[60px] xl:h-[60px] rounded-2xl bg-white/5 border border-white/10 flex justify-center items-center group transition-all duration-300 hover:bg-accent hover:border-accent">
                            <BsArrowUpRight className="text-white text-2xl xl:text-3xl group-hover:text-primary transition-all duration-300" />
                          </TooltipTrigger>
                          <TooltipContent className="bg-white/10 backdrop-blur-xl border-white/20 text-accent font-bold">LIVE PREVIEW</TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>

                    <Link href={project.github}>
                      <TooltipProvider delayDuration={0}>
                        <Tooltip>
                          <TooltipTrigger className="w-[50px] h-[50px] xl:w-[60px] xl:h-[60px] rounded-2xl bg-white/5 border border-white/10 flex justify-center items-center group transition-all duration-300 hover:bg-white/10 hover:border-white/20">
                            <BsGithub className="text-white text-2xl xl:text-3xl group-hover:text-accent transition-all duration-300" />
                          </TooltipTrigger>
                          <TooltipContent className="bg-white/10 backdrop-blur-xl border-white/20 text-white font-bold">VIEW SOURCE</TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT: SLIDER - PERBAIKAN TINGGI DI MOBILE */}
          <div className="w-full xl:w-[55%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              // Tambahkan h-[300px] untuk mobile agar kontainer gambar memiliki tinggi
              className="h-[300px] xl:h-[520px] mb-8 xl:mb-12 rounded-[30px] xl:rounded-[40px] shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/5 overflow-hidden"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full h-full group">
                  <div className="h-full relative overflow-hidden bg-white/5">
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/40 z-10 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-all duration-500 flex items-center justify-center">
                      <span className="px-6 py-2 xl:px-8 xl:py-3 bg-accent text-primary text-xs xl:text-base font-bold rounded-full translate-y-10 group-hover:translate-y-0 transition-transform duration-500">Explore Project</span>
                    </div>
                    {/* Image - Tambahkan fill dan object-cover untuk responsivitas */}
                    <Image src={project.image} alt={project.title} className="object-cover transition-transform duration-1000 group-hover:scale-110" fill sizes="(max-width: 768px) 100vw, 55vw" priority />
                  </div>
                </SwiperSlide>
              ))}
              {/* Slider Buttons - Di mobile ditaruh di bawah agar tidak menutupi gambar */}
              <div className="absolute right-4 bottom-4 xl:right-6 xl:bottom-6 z-30 flex gap-2">
                <WorkSliderButton containerStyles="flex gap-2 xl:gap-3" btnStyles="bg-accent/10 backdrop-blur-xl border border-accent/20 hover:bg-accent text-accent hover:text-primary text-[18px] xl:text-[22px] w-[40px] h-[40px] xl:w-[50px] xl:h-[50px] flex justify-center items-center transition-all duration-500 rounded-lg xl:rounded-xl" />
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
