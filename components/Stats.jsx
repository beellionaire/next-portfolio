"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  { num: 2, text: "Years of Experience" },
  { num: 7, text: "Project Completed" },
  { num: 10, text: "Technologies Mastered" },
  { num: 100, text: "Code Commits" },
];

const Stats = () => {
  return (
    <section className="pt-12 pb-16 xl:pt-24 xl:pb-20">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[90vw] mx-auto xl:max-w-none justify-center">
          {stats.map((item, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-1 min-w-[220px] flex gap-4 items-center justify-center 
                           bg-white/[0.03] backdrop-blur-xl border border-white/10 
                           p-6 rounded-2xl shadow-2xl hover:bg-white/[0.05] 
                           hover:border-accent/30 transition-all duration-500 group"
              >
                <CountUp end={item.num} duration={4} delay={1} className="text-4xl xl:text-5xl font-extrabold text-accent group-hover:scale-110 transition-transform duration-500" />
                <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/60 text-sm xl:text-base font-medium`}>{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
