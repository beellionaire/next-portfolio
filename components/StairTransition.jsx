"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const StairTransition = () => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        <motion.div
          // Layer ini menutupi layar (opacity 1) lalu memudar (opacity 0)
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: {
              duration: 0.4,
              ease: "easeInOut",
            },
          }}
          // Pastikan pointer-events-none agar user bisa klik konten setelah transisi selesai
          className="h-screen w-screen fixed bg-primary top-0 left-0 right-0 pointer-events-none z-40"
        />
      </div>
    </AnimatePresence>
  );
};

export default StairTransition;
