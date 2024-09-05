"use client";

import { FaFigma, FaJs, FaNodeJs, FaPython, FaReact } from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiAdobeaftereffects,
} from "react-icons/si";

import { BiLogoTypescript } from "react-icons/bi";
import { RiJavascriptFill } from "react-icons/ri";

// About
const about = {
  title: "About Me",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta amet ea ratione officiis! Eligendi, perferendis!",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Beel",
    },
    {
      fieldName: "Phone",
      fieldValue: "+628 1111 1111 111",
    },
    {
      fieldName: "City",
      fieldValue: "Solo, Indonesia",
    },
    {
      fieldName: "Email",
      fieldValue: "beel.business@gmail.com",
    },
  ],
};

// Experience
const experience = {
  icon: "/public/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta amet ea ratione officiis! Eligendi, perferendis!",
  items: [
    {
      company: "Beellionaire Studio",
      position: "Owner",
      duration: "2032 - Present",
    },
    {
      company: "Apple Inc",
      position: "Software Engineer",
      duration: "2029 - 2032",
    },
    {
      company: "Pahamify",
      position: "Software Engineer",
      duration: "2028 - 2029",
    },
    {
      company: "Tokopedia Indonesia",
      position: "Software Engineer Intern",
      duration: "2027 - 2028",
    },
    {
      company: "Telkom Indonesia",
      position: "Frontend Developer Intern",
      duration: "2026 - 2027",
    },
    {
      company: "Kemenkominfo RI",
      position: "Graphic Designer Intern",
      duration: "2024 - 2025",
    },
  ],
};

// Education
const education = {
  icon: "/public/assets/resume/cap.svg",
  title: "My Education",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta amet ea ratione officiis! Eligendi, perferendis!",
  items: [
    {
      institution: "Telkom University",
      degree: "Magister of Computer Science",
      duration: "2026 - 2028",
    },
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
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta amet ea ratione officiis! Eligendi, perferendis!",
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

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 lg:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col lg:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto lg:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* Content */}
          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center lg:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[480px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.company}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            {/* <span className="w-[6px] h-[6px] rounded-full bg-accent"></span> */}
                            <p className="text-white/70">{item.position}</p>
                          </div>
                          <span className="text-accent">{item.duration}</span>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center lg:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[480px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.institution}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            {/* <span className="w-[6px] h-[6px] rounded-full bg-accent"></span> */}
                            <p className="text-white/70">{item.degree}</p>
                          </div>
                          <span className="text-accent">{item.duration}</span>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center lg:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayduration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent className="capitalize">
                              {skill.name}
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* About */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[602px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <spa className="text-white/60">{item.fieldName}</spa>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
