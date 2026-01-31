"use client";

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+62 895 2817 0966",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "nabielabiyuu@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    description: "Surakarta, Indonesia",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.6, ease: "easeOut" },
      }}
    
      className="min-h-screen flex items-center py-12 xl:py-24 pt-[140px] xl:pt-0 relative overflow-x-hidden bg-[#1a1a1a]"
    >
      {/* Ambient Background Glow */}
      <div className="absolute top-[10%] left-[-5%] w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-[10%] right-[-5%] w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col xl:flex-row gap-[60px] items-center">
          {/* FORM: GLASS PANEL */}
          <div className="xl:w-[60%] order-2 xl:order-none w-full">
            <div className="p-8 lg:p-12 bg-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-[40px] shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-3xl -mr-16 -mt-16 group-hover:bg-accent/10 transition-colors duration-700" />

              <form className="flex flex-col gap-8 relative z-10">
                <div className="space-y-2 text-center lg:text-left">
                  <h3 className="text-5xl font-extrabold text-white leading-tight">
                    Let's <span className="text-accent">Connect.</span>
                  </h3>
                  <p className="text-white/50 text-lg max-w-[500px] mx-auto lg:mx-0">Have a vision for a project? Send a message and let's transform your ideas into a digital masterpiece.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input type="text" placeholder="Full Name" className="bg-white/5 border-white/10 rounded-2xl h-[56px] focus:border-accent/50 focus:ring-accent/20 transition-all" />
                  <Input type="text" placeholder="Institution / Company" className="bg-white/5 border-white/10 rounded-2xl h-[56px] focus:border-accent/50 focus:ring-accent/20 transition-all" />
                  <Input type="email" placeholder="Email Address" className="bg-white/5 border-white/10 rounded-2xl h-[56px] focus:border-accent/50 focus:ring-accent/20 transition-all" />
                  <Input type="tel" placeholder="Phone Number" className="bg-white/5 border-white/10 rounded-2xl h-[56px] focus:border-accent/50 focus:ring-accent/20 transition-all" />
                </div>

                <Select>
                  <SelectTrigger className="w-full bg-white/5 border-white/10 rounded-2xl h-[56px] text-white/40 focus:ring-accent/20 transition-all">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1a1a1a] border-white/10 backdrop-blur-3xl rounded-xl">
                    <SelectGroup>
                      <SelectLabel className="text-white/30 uppercase tracking-widest text-[10px] py-3">Inquiry Type</SelectLabel>
                      <SelectItem value="web">Web Development</SelectItem>
                      <SelectItem value="design">UI/UX Design</SelectItem>
                      <SelectItem value="graphic">Graphic Design</SelectItem>
                      <SelectItem value="video">Video Editing</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>

                <Textarea className="bg-white/5 border-white/10 rounded-2xl min-h-[160px] focus:border-accent/50 focus:ring-accent/20 transition-all p-6" placeholder="Tell me about your project..." />

                <Button size="lg" className="w-full lg:w-max px-12 py-7 rounded-full bg-accent text-primary font-bold text-lg hover:shadow-[0_0_30px_rgba(234,170,21,0.4)] transition-all duration-500 active:scale-95 mx-auto lg:mx-0">
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* INFO: FLOATING LIST */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none w-full">
            {/* PERBAIKAN: Menambahkan margin bottom pada mobile agar tidak menempel dengan form di bawahnya */}
            <ul className="flex flex-col gap-12 w-full max-w-[400px] mx-auto xl:mx-0 mb-12 xl:mb-0">
              {info.map((item, index) => (
                <motion.li key={index} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1, duration: 0.5 }} viewport={{ once: true }} className="flex items-center gap-8 group">
                  <div className="w-[64px] h-[64px] xl:w-[84px] xl:h-[84px] bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[20px] flex items-center justify-center text-accent text-3xl shadow-xl group-hover:bg-accent group-hover:text-primary group-hover:scale-110 transition-all duration-500">{item.icon}</div>
                  <div className="flex-1">
                    <p className="text-white/40 text-xs uppercase tracking-[0.3em] font-bold mb-1">{item.title}</p>
                    <h3 className="text-xl xl:text-2xl font-semibold text-white group-hover:text-accent transition-colors duration-300">{item.description}</h3>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
