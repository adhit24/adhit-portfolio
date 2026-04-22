"use client";

import { motion } from "framer-motion";

const tools = [
  // Row 1 - Design & Web
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "WordPress",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
    invert: true,
  },
  {
    name: "Tailwind",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  // Row 2 - Design Tools
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "Canva",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
  },
  {
    name: "Photoshop",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
  },
  {
    name: "Illustrator",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
  },
  {
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  // Row 3 - Data & CRM
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    invert: true,
  },
  // Row 4 - Business
  {
    name: "Google",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
  },
  {
    name: "VS Code",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    name: "Notion",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg",
    invert: true,
  },
  {
    name: "PHP",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    invert: true,
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-6"
      style={{ backgroundColor: "#050505" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Card container */}
        <div
          className="rounded-3xl px-10 py-14"
          style={{ backgroundColor: "#111111" }}
        >
          {/* Title */}
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-white text-center mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Tools and Technologies
          </motion.h2>

          {/* Gradient accent line */}
          <motion.div
            className="mx-auto mb-12 h-1 w-16 rounded-full bg-gradient-to-r from-[#D97757] to-transparent"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ transformOrigin: "left" }}
          ></motion.div>

          {/* Icon Grid */}
          <div className="grid grid-cols-5 gap-x-8 gap-y-10 place-items-center">
            {tools.map((tool, idx) => (
              <motion.div
                key={tool.name}
                className="flex flex-col items-center gap-2 group cursor-default"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                <div className="w-16 h-16 flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    className={`w-14 h-14 object-contain ${
                      tool.invert ? "brightness-0 invert" : ""
                    }`}
                    loading="lazy"
                  />
                </div>
                <span className="text-xs text-[#A3A3A3] group-hover:text-white transition-colors text-center leading-tight">
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
