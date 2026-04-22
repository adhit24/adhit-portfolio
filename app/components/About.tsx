"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const timeline = [
  {
    period: "2019 – Present",
    role: "Founder & Business Owner",
    company: "Rasa Kopi",
    desc: "I built a coffee brand from zero, mostly powered by caffeine, chaos, and “nanti juga jadi” mindset. I handle operations, CRM, digital presence, and customer experience—aka being the guy who fixes everything from broken systems to broken vibes. If something runs smoothly, I pretend it was planned. If it breaks, I call it “customer insight research.”",
    color: "#D97757",
  },
  {
    period: "2015 – 2018",
    role: "Project Analyst",
    company: "PT Sucofindo",
    desc: "Managed data systems, IT administration, and provided support for company operational infrastructure.",
    color: "#60A5FA",
  },
  {
    period: "2008 – 2015",
    role: "IT Support & Operations",
    company: "PT Pertamina",
    desc: "Spent 7 years managing IT support, operational systems, and enterprise-scale technology infrastructure.",
    color: "#34D399",
  },
];

const highlights = [
  { emoji: "🎓", label: "Education", value: "UNPAD | F.Kom | Broadcasting 2005" },
  { emoji: "💡", label: "Passion",   value: "Digital System, UI/UX Design, Otomotif, Customer experience" },
  { emoji: "📍", label: "Location",  value: "Bandung, Indonesia" },
];

function FadeIn({
  children,
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right";
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 30 : 0,
      x: direction === "left" ? -30 : direction === "right" ? 30 : 0,
    },
    visible: { opacity: 1, y: 0, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Subtle glow */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(217,119,87,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section title */}
        <FadeIn>
          <h2 className="text-4xl font-bold text-white text-center mb-3">About</h2>
          <div className="mx-auto mb-14 h-1 w-16 rounded-full bg-gradient-to-r from-[#D97757] to-transparent" />
        </FadeIn>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* LEFT: Bio + highlights */}
          <FadeIn direction="left" delay={0.1}>
            <div className="space-y-6">
              <p className="text-[#C0C0C0] text-base leading-relaxed">
                Hi, I'm the kind of person who turns ideas into mildly chaotic reality. I build things, break things, fix them (sometimes in that order), and call it “strategy.” I run on curiosity, coffee, and questionable optimism.
              </p>
              <p className="text-[#C0C0C0] text-base leading-relaxed">
                I like systems that work, jokes that almost work, and plans that survive Monday mornings. If life is a project, I'm the guy still editing version 0.9 but shipping anyway. Send help. but make it aesthetic. pls,lol
              </p>

              {/* Highlights */}
              <div className="space-y-4 pt-2">
                {highlights.map((h, i) => (
                  <motion.div
                    key={h.label}
                    className="flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.03] hover:border-[#D97757]/30 hover:bg-white/[0.06] transition-all"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  >
                    <span className="text-2xl">{h.emoji}</span>
                    <div>
                      <p className="text-xs text-[#D97757] font-semibold uppercase tracking-wider mb-0.5">
                        {h.label}
                      </p>
                      <p className="text-sm text-[#E0E0E0]">{h.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* RIGHT: Timeline */}
          <FadeIn direction="right" delay={0.2}>
            <div className="relative pl-6">
              {/* Vertical line */}
              <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-[#D97757] via-[#60A5FA] to-[#34D399] opacity-40" />

              <div className="space-y-8">
                {timeline.map((item, i) => (
                  <motion.div
                    key={item.company}
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ delay: 0.1 + i * 0.15, duration: 0.6 }}
                  >
                    {/* Dot */}
                    <div
                      className="absolute -left-[25px] top-1.5 w-3 h-3 rounded-full border-2 border-[#0A0A0A]"
                      style={{ backgroundColor: item.color }}
                    />

                    <p className="text-xs font-medium mb-1" style={{ color: item.color }}>
                      {item.period}
                    </p>
                    <h3 className="text-base font-bold text-white">{item.role}</h3>
                    <p className="text-sm text-[#D97757] font-medium mb-2">{item.company}</p>
                    <p className="text-sm text-[#A3A3A3] leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
