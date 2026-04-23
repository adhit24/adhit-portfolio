"use client";

import { ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";

const roles = [
  "Business Owner",
  "UI/UX Designer",
  "Customer Relationship Management",
];

const stats = [
  { label: "Years Experience", value: 15, suffix: "+" },
  { label: "Projects Built", value: 8, suffix: "+" },
  { label: "Brands Managed", value: 3, suffix: "" },
];

// Animated counter
function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const controls = animate(0, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = Math.round(v) + suffix;
      },
    });
    return () => controls.stop();
  }, [inView, value, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

// Floating particle
function Particle({ style }: { style: React.CSSProperties }) {
  return (
    <motion.div
      className="absolute rounded-full bg-[#D97757] opacity-20 blur-sm"
      style={style}
      animate={{
        y: [0, -30, 0],
        opacity: [0.1, 0.25, 0.1],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: Math.random() * 4 + 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: Math.random() * 3,
      }}
    />
  );
}

const particles = [
  { width: 12, height: 12, top: "15%", left: "8%"  },
  { width: 8,  height: 8,  top: "70%", left: "12%" },
  { width: 18, height: 18, top: "30%", left: "92%" },
  { width: 10, height: 10, top: "80%", left: "85%" },
  { width: 6,  height: 6,  top: "50%", left: "5%"  },
  { width: 14, height: 14, top: "20%", left: "75%" },
  { width: 8,  height: 8,  top: "90%", left: "55%" },
  { width: 10, height: 10, top: "60%", left: "48%" },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const typeSpeed = isDeleting ? 40 : 90;
    const pauseAtFull = 1500;
    const pauseAtEmpty = 300;

    if (!isDeleting && text === current) {
      const t = setTimeout(() => setIsDeleting(true), pauseAtFull);
      return () => clearTimeout(t);
    }
    if (isDeleting && text === "") {
      const t = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((i) => (i + 1) % roles.length);
      }, pauseAtEmpty);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setText((prev) =>
        isDeleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
      );
    }, typeSpeed);
    return () => clearTimeout(t);
  }, [text, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex lg:items-center px-6 pt-32 pb-16 lg:pt-0 lg:pb-0 relative overflow-hidden bg-[#0D0D0D]"
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Radial glow — orange ambient behind avatar */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(217,119,87,0.18) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      {/* Subtle glow behind text */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(217,119,87,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Floating particles */}
      {particles.map((p, i) => (
        <Particle
          key={i}
          style={{ width: p.width, height: p.height, top: p.top, left: p.left }}
        />
      ))}

      {/* Content — two-column layout */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">

        {/* LEFT: Text */}
        <motion.div
          className="flex-1 text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-2 sm:mb-4 mt-4 lg:mt-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Hi! I&apos;m Adhit,
          </motion.h1>

          <motion.h2
            className="text-xl sm:text-2xl lg:text-4xl font-semibold mb-4 sm:mb-6 min-h-[3rem] flex items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-[#D97757]">{text}</span>
            <span className="inline-block w-0.5 h-6 sm:h-8 bg-[#D97757] ml-2 animate-pulse" />
          </motion.h2>

          <motion.p
            className="text-[#E8E8E8] text-base sm:text-lg leading-relaxed mb-4 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Adhitya Nugraha is a business operator and digital builder with{" "}
            <span className="text-white">15+ years</span> of experience across
            IT, operations, and data systems. Currently running{" "}
            <span className="text-white">Rasa Kopi</span> as{" "}
            <span className="text-white">Business Owner</span>, combining
            business strategy, CRM, and web development to build scalable ideas.
          </motion.p>

          <motion.p
            className="italic text-sm sm:text-base text-[#FFB89B] mb-8 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            &ldquo;I build scalable brands, digital systems, and meaningful experiences.&rdquo;
          </motion.p>

          {/* Stats */}
          <motion.div
            className="flex gap-6 sm:gap-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="text-2xl sm:text-4xl font-bold text-[#D97757]">
                  <Counter value={s.value} suffix={s.suffix} />
                </span>
                <span className="text-[10px] sm:text-xs text-[#A3A3A3] mt-1">{s.label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="flex items-center gap-4 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-white border border-white/30 rounded-full hover:border-[#D97757] hover:bg-[#D97757]/20 transition-all"
            >
              Show more
              <ChevronDown size={18} />
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT: Avatar */}
        <motion.div
          className="flex-shrink-0 flex items-center justify-center lg:justify-end"
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        >
          <motion.img
            src="/avatar.png"
            alt="Adhit Avatar"
            className="w-64 sm:w-80 lg:w-96 xl:w-[420px] object-contain drop-shadow-2xl select-none pointer-events-none"
            draggable={false}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

      </div>
    </section>
  );
}
