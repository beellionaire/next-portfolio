"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description: "Membangun aplikasi web modern yang responsif, cepat, dan aman menggunakan teknologi terbaru seperti Laravel dan Next.js.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description: "Merancang antarmuka pengguna yang intuitif dan estetis, fokus pada pengalaman pengguna yang luar biasa dan fungsional.",
    href: "",
  },
  {
    num: "03",
    title: "Graphic Design",
    description: "Menciptakan identitas visual dan ilustrasi flat design berkualitas tinggi untuk kebutuhan branding dan konten stok digital.",
    href: "",
  },
  {
    num: "04",
    title: "Video Editing",
    description: "Mengolah footage menjadi video sinematik yang menarik untuk keperluan komersial, media sosial, maupun latar belakang kreatif.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 xl:py-0 pt-[140px] xl:pt-0 relative overflow-hidden bg-[#0d0d0d]">
      {/* --- AKSEN ORANGE BACKGROUND (ORBS) --- */}
      {/* Orb Atas Kanan (Orange) */}
      <div className="absolute top-[-5%] -right-[5%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] -z-10 animate-pulse" />

      {/* Orb Tengah Kiri (Orange) */}
      <div className="absolute top-[30%] -left-[10%] w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] -z-10" />

      {/* Orb Bawah Kanan (Orange Soft) */}
      <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] -z-10" />

      {/* Tambahan Orb Biru Tipis untuk kontras (Opsional) */}
      <div className="absolute bottom-[5%] -left-[5%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[130px] -z-10" />
      {/* --------------------------------------- */}

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { delay: 0.2, duration: 0.8, ease: "easeOut" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8 max-w-[1100px] mx-auto"
        >
          {services.map((service, index) => {
            return (
              <motion.div key={index} whileHover={{ y: -5 }} className="relative group flex flex-col justify-between gap-4 p-8 rounded-[32px] bg-white/[0.02] backdrop-blur-2xl border border-white/5 shadow-2xl hover:bg-white/[0.05] hover:border-accent/20 transition-all duration-500">
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-black text-transparent text-outline opacity-20 group-hover:opacity-100 group-hover:text-accent group-hover:text-outline-none transition-all duration-500 italic">{service.num}</div>
                  <Link href={service.href} className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-accent transition-all duration-500 flex justify-center items-center group-hover:-rotate-45">
                    <BsArrowDownRight className="text-white group-hover:text-primary text-xl" />
                  </Link>
                </div>

                <div className="space-y-3">
                  <h2 className="text-2xl xl:text-3xl font-bold text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                  <p className="text-white/50 text-sm xl:text-base leading-relaxed text-justify lg:text-left min-h-[60px]">{service.description}</p>
                </div>

                <div className="relative w-full h-[1px] bg-white/5 overflow-hidden">
                  <div className="absolute inset-0 bg-accent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700" />
                </div>

                <div className="absolute -z-10 inset-0 rounded-[32px] bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
