"use client";

import { motion } from "framer-motion";

export default function Marquee() {
  const items = [
    "AVAILABLE FOR FREELANCE",
    "WEB DEVELOPMENT",
    "UI/UX DESIGN",
    "CRM SPECIALIST",
    "BUSINESS OPS",
  ];

  // Duplicate items multiple times to ensure smooth infinite scrolling
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <section className="py-5 bg-[#D97757] overflow-hidden whitespace-nowrap border-y border-[#D97757]/20 relative flex items-center">
      {/* Edge Gradients for smooth fading */}
      <div className="absolute left-0 top-0 w-16 md:w-32 h-full bg-gradient-to-r from-[#0D0D0D] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 w-16 md:w-32 h-full bg-gradient-to-l from-[#0D0D0D] to-transparent z-10 pointer-events-none" />
      
      <motion.div
        className="flex gap-8 items-center min-w-max pr-8"
        animate={{ x: "-50%" }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30,
        }}
      >
        {duplicatedItems.map((item, idx) => (
          <div key={idx} className="flex items-center gap-8">
            <span className="text-[#0D0D0D] font-black text-xl md:text-2xl tracking-wider uppercase">
              {item}
            </span>
            <span className="text-[#0D0D0D] text-2xl">✺</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
