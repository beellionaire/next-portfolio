"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  { num: "01", title: "Web Development", description: "Membangun aplikasi web modern yang responsif, cepat, dan aman menggunakan teknologi terbaru seperti Laravel dan Next.js.", href: "#" },
  { num: "02", title: "UI/UX Design", description: "Merancang antarmuka pengguna yang intuitif dan estetis, fokus pada pengalaman pengguna yang luar biasa dan fungsional.", href: "#" },
  { num: "03", title: "Graphic Design", description: "Menciptakan identitas visual dan ilustrasi flat design berkualitas tinggi untuk kebutuhan branding dan konten stok digital.", href: "#" },
  { num: "04", title: "Video Editing", description: "Mengolah footage menjadi video sinematik yang menarik untuk keperluan komersial, media sosial, maupun latar belakang kreatif.", href: "#" },
];

const Services = () => {
  return (
    // Menggunakan min-h-fit agar tinggi fleksibel sesuai konten, menghapus overflow-x jika tidak perlu di level section
    <section className="relative w-full min-h-screen flex items-center py-32 lg:py-32 bg-[#0d0d0d] overflow-hidden">
      
      <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-accent/10 rounded-full blur-[120px] -z-10 animate-pulse pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-10 max-w-[1200px] mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
           
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative group flex flex-col justify-between gap-8 p-8 xl:p-12 rounded-[32px] bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-accent/40 transition-all duration-500"
            >
           
              <div className="w-full flex justify-between items-center">
                <div className="text-6xl font-extrabold text-transparent text-outline opacity-30 group-hover:opacity-100 group-hover:text-accent group-hover:text-outline-none italic transition-all duration-500">{service.num}</div>
                <Link href={service.href} className="w-12 h-12 rounded-full bg-white/10 group-hover:bg-accent flex justify-center items-center group-hover:-rotate-45 transition-all duration-500">
                  <BsArrowDownRight className="text-white group-hover:text-primary text-xl" />
                </Link>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                <p className="text-white/70 text-base leading-relaxed">{service.description}</p>
              </div>

              {/* Animated Underline */}
              <div className="relative w-full h-[1px] bg-white/10 overflow-hidden">
                <div className="absolute inset-0 bg-accent -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
              </div>

              {/* Subtle Gradient Glow on Hover */}
              <div className="absolute -z-10 inset-0 rounded-[32px] bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
