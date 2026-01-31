"use client";

import { FaFigma, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiAdobeillustrator, SiAdobephotoshop, SiAdobepremierepro, SiAdobeaftereffects } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { RiJavascriptFill } from "react-icons/ri";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

// Import Select Component (Pastikan Anda sudah menginstal komponen ini)
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const about = {
  title: "About Me",

  description: "I am a passionate Web Developer based in Solo, Indonesia. I specialize in building modern, responsive, and user-friendly web applications. With a strong foundation in both front-end and back-end development, I enjoy turning ideas into functional digital experiences that are not only visually appealing but also scalable and efficient.",

  info: [
    {
      fieldName: "Name",

      fieldValue: "Nabeel Aby",
    },

    {
      fieldName: "Phone",

      fieldValue: "+62 895 2817 0966",
    },

    {
      fieldName: "City",

      fieldValue: "Surakarta, Indonesia",
    },

    {
      fieldName: "Email",

      fieldValue: "nabielabiyuu@gmail.com",
    },
  ],
};

// Experience

const experience = {
  icon: "/public/assets/resume/badge.svg",

  title: "My Experience",

  description: "Over the years, I have gained valuable experience in web development and digital design. I have worked on projects ranging from personal portfolios to business platforms, where I was responsible for creating user-friendly interfaces, developing responsive websites, and ensuring seamless functionality.",

  items: [
    {
      company: "Beellionaire Studio",

      position: "Owner",

      duration: "2022 - Present",
    },
  ],
};

// Education

const education = {
  icon: "/public/assets/resume/cap.svg",

  title: "My Education",

  description: "My academic journey has given me a strong foundation in computer science and web technologies. Through coursework and real projects, I have developed skills in software development, database management, and modern web frameworks that support my career as a Web Developer.",

  items: [
    {
      institution: "University of Muhammadiyah",

      degree: "Bachelor of Computer Science",

      duration: "2022 - 2026",
    },
  ],
};

// Skills

const skills = {
  title: "My Skills",

  description: "I have developed a diverse set of skills in both web development and creative design. My expertise ranges from building responsive web applications using modern frameworks, to creating engaging visuals with industry-standard design tools. This combination allows me to deliver complete digital solutions that are both functional and visually appealing.",

  skillList: [
    {
      icon: <FaFigma />,

      name: "figma",
    },

    {
      icon: <RiJavascriptFill />,

      name: "javascript",
    },

    {
      icon: <BiLogoTypescript />,

      name: "typescript",
    },

    {
      icon: <FaReact />,

      name: "react JS",
    },

    {
      icon: <FaNodeJs />,

      name: "node JS",
    },

    {
      icon: <FaPython />,

      name: "python",
    },

    {
      icon: <SiNextdotjs />,

      name: "next JS",
    },

    {
      icon: <SiTailwindcss />,

      name: "tailwind CSS",
    },

    {
      icon: <SiAdobeillustrator />,

      name: "Adobe Illustrator",
    },

    {
      icon: <SiAdobephotoshop />,

      name: "Adobe Photoshop",
    },

    {
      icon: <SiAdobepremierepro />,

      name: "Adobe Premiere Pro",
    },

    {
      icon: <SiAdobeaftereffects />,

      name: "Adobe After Effects",
    },
  ],
};

const Resume = () => {
  // State untuk mengontrol tab yang aktif baik dari dropdown maupun list
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="min-h-screen flex items-center justify-center py-20 lg:py-24 relative overflow-x-hidden bg-[#0d0d0d]">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[130px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-[40px] xl:pt-0">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="flex flex-col lg:flex-row gap-16 xl:gap-24">
          {/* NAVIGATION LIST (Desktop) & DROPDOWN (Mobile) */}
          <div className="flex flex-col w-full max-w-[350px] mx-auto lg:mx-0 gap-6">
            {/* DROPDOWN GLASSMORPHISM - Hanya muncul di Mobile (lg:hidden) */}
            <div className="lg:hidden w-full px-2">
              <h2 className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em] px-4 mb-3">Select Category</h2>
              <Select value={activeTab} onValueChange={setActiveTab}>
                <SelectTrigger className="w-full bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-2xl h-[56px] text-white focus:ring-accent/20 focus:border-accent/50 transition-all shadow-xl">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>

                {/* Content Dropdown dengan Efek Kaca Tebal */}
                <SelectContent className="bg-[#1a1a1a]/80 backdrop-blur-3xl border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
                  <SelectGroup>
                    <SelectItem value="experience" className="text-white/80 focus:bg-accent focus:text-primary transition-colors cursor-pointer py-3">
                      Experience
                    </SelectItem>
                    <SelectItem value="education" className="text-white/80 focus:bg-accent focus:text-primary transition-colors cursor-pointer py-3">
                      Education
                    </SelectItem>
                    <SelectItem value="skills" className="text-white/80 focus:bg-accent focus:text-primary transition-colors cursor-pointer py-3">
                      Skills
                    </SelectItem>
                    <SelectItem value="about" className="text-white/80 focus:bg-accent focus:text-primary transition-colors cursor-pointer py-3">
                      About Me
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            {/* TABS LIST - Hanya muncul di Desktop (hidden lg:flex) */}
            <TabsList className="hidden lg:flex flex-col w-full gap-6 bg-transparent">
              <div className="flex flex-col gap-3 w-full p-4 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[32px] shadow-2xl">
                <h2 className="text-white/40 text-xs font-bold uppercase tracking-[0.3em] px-4 mb-2">Navigation</h2>
                {["experience", "education", "skills", "about"].map((tab) => (
                  <TabsTrigger key={tab} value={tab} className="w-full justify-start px-6 py-4 rounded-2xl capitalize text-lg transition-all duration-500 data-[state=active]:bg-accent data-[state=active]:text-primary data-[state=active]:shadow-[0_0_20px_rgba(234,170,21,0.3)]">
                    {tab}
                  </TabsTrigger>
                ))}
              </div>
            </TabsList>
          </div>

          {/* RIGHT: CONTENT AREA */}
          <div className="w-full min-h-[600px]">
            <AnimatePresence mode="wait">
              {/* EXPERIENCE & EDUCATION */}
              {[experience, education].map((category) => (
                <TabsContent key={category.title} value={category === experience ? "experience" : "education"} className="w-full m-0">
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex flex-col gap-10 min-h-[600px] pt-[40px] lg:pt-0">
                    <div className="space-y-4">
                      <h3 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-white drop-shadow-md">
                        {category.title.split(" ")[0]} <span className="text-accent">{category.title.split(" ")[1]}</span>
                      </h3>
                      <p className="max-w-[650px] text-white/50 text-sm lg:text-lg leading-relaxed border-l-2 border-accent/30 pl-6 text-justify">{category.description}</p>
                    </div>

                    <ScrollArea className="h-[400px] pr-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-10">
                        {category.items.map((item, index) => (
                          <div key={index} className="relative group bg-white/[0.03] backdrop-blur-md border border-white/10 p-8 rounded-[24px] transition-all duration-500 hover:border-accent/50 shadow-xl">
                            <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold mb-4">{item.duration}</span>
                            <h4 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">{item.company || item.institution}</h4>
                            <div className="flex items-center gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_#eaaa15]" />
                              <p className="text-white/60 font-medium">{item.position || item.degree}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </motion.div>
                </TabsContent>
              ))}

              {/* SKILLS */}
              <TabsContent value="skills" className="w-full m-0">
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex flex-col gap-10 min-h-[600px] pt-[40px] lg:pt-0">
                  <div className="space-y-4">
                    <h3 className="text-4xl lg:text-5xl font-extrabold text-white">
                      My <span className="text-accent">Skills</span>
                    </h3>
                    <p className="max-w-[650px] text-white/50 text-sm lg:text-lg leading-relaxed border-l-2 border-accent/30 pl-6 text-justify">{skills.description}</p>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 overflow-y-auto max-h-[400px] pr-4 custom-scrollbar">
                    {skills.skillList.map((skill, index) => (
                      <TooltipProvider key={index} delayDuration={0}>
                        <Tooltip>
                          <TooltipTrigger className="group w-full aspect-square bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[24px] flex flex-col justify-center items-center gap-4 transition-all duration-500 hover:bg-accent/10 hover:border-accent/50 shadow-lg">
                            <div className="text-5xl text-white group-hover:text-accent group-hover:scale-110 transition-all duration-500">{skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent className="bg-[#232329] text-white font-bold border-white/10">{skill.name.toUpperCase()}</TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>

              {/* ABOUT */}
              <TabsContent value="about" className="w-full m-0">
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex flex-col gap-10 min-h-[600px] pt-[40px] lg:pt-0">
                  <div className="space-y-4">
                    <h3 className="text-4xl lg:text-5xl font-extrabold text-white text-center lg:text-left">
                      About <span className="text-accent">Me</span>
                    </h3>
                  </div>
                  <div className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-6 lg:p-10 rounded-[32px] shadow-2xl relative overflow-hidden flex-1">
                    <p className="text-white/70 text-sm lg:text-lg leading-relaxed mb-12 text-justify">{about.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
                      {about.info.map((item, index) => (
                        <div key={index} className="flex flex-col gap-2 group border-b border-white/5 pb-4">
                          <span className="text-accent text-[10px] uppercase tracking-[0.4em] font-black opacity-50">{item.fieldName}</span>
                          <span className="text-md lg:text-xl font-bold text-white/90">{item.fieldValue}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            </AnimatePresence>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
