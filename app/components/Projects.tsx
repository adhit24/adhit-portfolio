"use client";

import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

type Category = "Projects" | "Open Source" | "Company Work";

type Project = {
  id: number;
  title: string;
  subtitle: string;
  category: Category;
  gradient: string;
  emoji?: string;
  description: string;
  skills: string[];
  image?: string;
  link?: string;
  comingSoon?: boolean;
  underDeployment?: boolean;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Rasa Kopi",
    subtitle: "Coffee Brand & Operations",
    category: "Projects",
    gradient: "from-[#D97757] to-[#7C2D12]",
    emoji: "",
    description: "Building a coffee business from scratch — community, experience, and operational excellence.",
    skills: ["Branding", "Operations", "Marketing", "Community Building", "Growth Strategy"],
    image: "/projects/rasakopi.jpg",
    link: "https://www.instagram.com/rasa.koppii",
  },
  {
    id: 2,
    title: "Raskop Website",
    subtitle: "Brand site + Reservations",
    category: "Projects",
    gradient: "from-[#EA580C] to-[#7C2D12]",
    emoji: "",
    description: "Designing and developing a website for branding, reservations, and digital presence.",
    skills: ["Next.js", "TypeScript", "Tailwind", "API Integration", "UI/UX"],
    image: "/projects/raskop-web.png",
    link: "https://raskop.net",
  },
  {
    id: 9,
    title: "Website RedBox",
    subtitle: "Full-stack Web Application",
    category: "Projects",
    gradient: "from-[#DC2626] to-[#7F1D1D]",
    emoji: "",
    description: "Full-stack web application built with modern AI-assisted development tools and robust backend stack.",
    skills: [
      "Python",
      "SQL",
      "PHP",
      "JavaScript",
      "API Integration",
    ],
    image: "/projects/redbox.png",
    underDeployment: true,
  },
  {
    id: 4,
    title: "Coffee Shop Expansion",
    subtitle: "Multi-branch Strategy",
    category: "Projects",
    gradient: "from-[#EC4899] to-[#831843]",
    emoji: "",
    description: "Planning new branches with scalable systems and strong location strategy.",
    skills: ["Strategy", "Growth", "Location Analysis", "Financial Planning", "Team Management"],
    image: "/projects/coffee-shop-expansion.jpg",
    comingSoon: true,
  },
  {
    id: 5,
    title: "Medvi-Style Concept",
    subtitle: "Digital Business Structure",
    category: "Projects",
    gradient: "from-[#14B8A6] to-[#064E3B]",
    emoji: "",
    description: "Developing a modern, digital-driven business structure with long-term scalability.",
    skills: ["Systems", "Database Design", "Security", "Cloud Infrastructure", "API Integration"],
    image: "/projects/medvi-style.jpg",
    comingSoon: true,
  },
  {
    id: 6,
    title: "Cahayasoft Blog",
    subtitle: "Tech Writing",
    category: "Open Source",
    gradient: "from-[#1A1A1A] to-[#0D0D0D]",
    emoji: "✍️",
    description: "Writing about technology, business operations, and digital systems.",
    skills: ["WordPress", "Writing", "Content Strategy", "SEO Optimization", "Analytics"],
  },
  {
    id: 7,
    title: "PT Sucofindo",
    subtitle: "Admin & Tender Docs",
    category: "Company Work",
    gradient: "from-[#1E40AF] to-[#0D0D0D]",
    description: "Managed tender documentation for national projects, technical and admin workflows.",
    skills: ["Admin", "Compliance", "Documentation", "Project Management", "Risk Management"],
    image: "/projects/sucofindo.png",
    link: "https://www.sucofindo.co.id/",
  },
  {
    id: 8,
    title: "PT Pertamina",
    subtitle: "IT Support & Infra",
    category: "Company Work",
    gradient: "from-[#B91C1C] to-[#450A0A]",
    description: "Maintained critical IT systems with zero downtime, optimized data & reporting.",
    skills: ["IT Support", "Oracle", "SQL", "Infrastructure", "Performance Optimization"],
    image: "/projects/pertamina.png",
    link: "https://www.pertamina.com/en",
  },
];

// Skill to Technology Color & Icon mapping
const getSkillStyle = (skill: string) => {
  const styleMap: Record<string, { bg: string; text: string; icon: string }> = {
    "React": { bg: "from-blue-500/20 to-blue-600/20", text: "text-blue-300", icon: "⚛️" },
    "Next.js": { bg: "from-gray-800/40 to-black/40", text: "text-white", icon: "▲" },
    "TypeScript": { bg: "from-blue-700/20 to-blue-800/20", text: "text-blue-300", icon: "TS" },
    "JavaScript": { bg: "from-yellow-600/20 to-yellow-700/20", text: "text-yellow-300", icon: "JS" },
    "Python": { bg: "from-blue-600/20 to-green-600/20", text: "text-blue-300", icon: "🐍" },
    "SQL": { bg: "from-orange-600/20 to-orange-700/20", text: "text-orange-300", icon: "🗄️" },
    "PHP": { bg: "from-orange-600/20 to-orange-700/20", text: "text-orange-300", icon: "🐘" },
    "HTML/CSS": { bg: "from-red-600/20 to-orange-600/20", text: "text-orange-300", icon: "🎨" },
    "Tailwind": { bg: "from-cyan-500/20 to-cyan-600/20", text: "text-cyan-300", icon: "🌊" },
    "Node.js": { bg: "from-green-600/20 to-green-700/20", text: "text-green-300", icon: "⬢" },
    "UI/UX": { bg: "from-pink-600/20 to-pink-700/20", text: "text-pink-300", icon: "🎨" },
    "CRM": { bg: "from-indigo-600/20 to-indigo-700/20", text: "text-indigo-300", icon: "👥" },
    "Database Design": { bg: "from-orange-600/20 to-orange-700/20", text: "text-orange-300", icon: "🗄️" },
    "API Integration": { bg: "from-cyan-600/20 to-cyan-700/20", text: "text-cyan-300", icon: "🔗" },
    "Security": { bg: "from-red-600/20 to-red-700/20", text: "text-red-300", icon: "🔒" },
    "Cloud Infrastructure": { bg: "from-orange-500/20 to-orange-600/20", text: "text-orange-300", icon: "☁️" },
    "Branding": { bg: "from-orange-600/20 to-amber-600/20", text: "text-orange-300", icon: "🎨" },
    "Marketing": { bg: "from-red-600/20 to-pink-600/20", text: "text-red-300", icon: "📈" },
    "Operations": { bg: "from-slate-600/20 to-slate-700/20", text: "text-slate-300", icon: "⚙️" },
    "Growth Strategy": { bg: "from-emerald-600/20 to-emerald-700/20", text: "text-emerald-300", icon: "📊" },
    "Strategy": { bg: "from-blue-600/20 to-blue-700/20", text: "text-blue-300", icon: "🎯" },
    "Ops": { bg: "from-slate-600/20 to-slate-700/20", text: "text-slate-300", icon: "⚙️" },
    "Growth": { bg: "from-emerald-600/20 to-emerald-700/20", text: "text-emerald-300", icon: "📈" },
    "Financial Planning": { bg: "from-green-600/20 to-green-700/20", text: "text-green-300", icon: "💰" },
    "Team Management": { bg: "from-indigo-600/20 to-indigo-700/20", text: "text-indigo-300", icon: "👨‍💼" },
    "Systems": { bg: "from-slate-600/20 to-slate-700/20", text: "text-slate-300", icon: "🔧" },
    "Project Management": { bg: "from-amber-600/20 to-amber-700/20", text: "text-amber-300", icon: "📋" },
    "Community Building": { bg: "from-pink-600/20 to-pink-700/20", text: "text-pink-300", icon: "👥" },
    "Location Analysis": { bg: "from-orange-600/20 to-orange-700/20", text: "text-orange-300", icon: "📍" },
    "Supply Chain": { bg: "from-slate-600/20 to-slate-700/20", text: "text-slate-300", icon: "🔗" },
    "Business Model": { bg: "from-indigo-600/20 to-indigo-700/20", text: "text-indigo-300", icon: "💼" },
    "Digital Architecture": { bg: "from-slate-600/20 to-slate-700/20", text: "text-slate-300", icon: "🏗️" },
    "System Integration": { bg: "from-cyan-600/20 to-cyan-700/20", text: "text-cyan-300", icon: "🔗" },
    "WordPress": { bg: "from-blue-600/20 to-blue-700/20", text: "text-blue-300", icon: "📝" },
    "Writing": { bg: "from-gray-600/20 to-gray-700/20", text: "text-gray-300", icon: "✍️" },
    "SEO Optimization": { bg: "from-green-600/20 to-green-700/20", text: "text-green-300", icon: "🔍" },
    "Content Strategy": { bg: "from-orange-600/20 to-orange-700/20", text: "text-orange-300", icon: "📚" },
    "Technical Documentation": { bg: "from-blue-600/20 to-blue-700/20", text: "text-blue-300", icon: "📖" },
    "Publishing": { bg: "from-gray-600/20 to-gray-700/20", text: "text-gray-300", icon: "📰" },
    "Analytics": { bg: "from-emerald-600/20 to-emerald-700/20", text: "text-emerald-300", icon: "📊" },
    "Admin": { bg: "from-slate-600/20 to-slate-700/20", text: "text-slate-300", icon: "⚙️" },
    "Compliance": { bg: "from-red-600/20 to-red-700/20", text: "text-red-300", icon: "✅" },
    "Documentation": { bg: "from-blue-600/20 to-blue-700/20", text: "text-blue-300", icon: "📄" },
    "Stakeholder Management": { bg: "from-indigo-600/20 to-indigo-700/20", text: "text-indigo-300", icon: "🤝" },
    "Process Optimization": { bg: "from-yellow-600/20 to-yellow-700/20", text: "text-yellow-300", icon: "⚡" },
    "Risk Management": { bg: "from-red-600/20 to-red-700/20", text: "text-red-300", icon: "⚠️" },
    "IT Support": { bg: "from-slate-600/20 to-slate-700/20", text: "text-slate-300", icon: "🛠️" },
    "Oracle": { bg: "from-red-600/20 to-red-700/20", text: "text-red-300", icon: "🗄️" },
    "Infrastructure": { bg: "from-slate-600/20 to-slate-700/20", text: "text-slate-300", icon: "🏢" },
    "System Administration": { bg: "from-slate-600/20 to-slate-700/20", text: "text-slate-300", icon: "⚙️" },
    "Performance Optimization": { bg: "from-yellow-600/20 to-yellow-700/20", text: "text-yellow-300", icon: "⚡" },
    "Data Management": { bg: "from-orange-600/20 to-orange-700/20", text: "text-orange-300", icon: "📊" },
    "Reservations System": { bg: "from-pink-600/20 to-pink-700/20", text: "text-pink-300", icon: "📅" },
    "Product Development": { bg: "from-emerald-600/20 to-emerald-700/20", text: "text-emerald-300", icon: "🚀" },
    "CX": { bg: "from-pink-600/20 to-pink-700/20", text: "text-pink-300", icon: "😊" },
  };
  return styleMap[skill] || { bg: "from-gray-600/20 to-gray-700/20", text: "text-gray-300", icon: "💻" };
};

const categories: Category[] = ["Projects", "Open Source", "Company Work"];

const descriptions: Record<Category, string> = {
  Projects:
    "Whether it's for learning new technologies or strengthening my large range of skills, I am highly passionate about expressing my creativity by developing modern, responsive full-stack applications.",
  "Open Source":
    "I've managed, contributed to, and maintained the following open source projects while effectively utilizing documentation, version control, and high-level organization and communication.",
  "Company Work":
    "I have designed and developed interactive, responsive websites under considerably pressing deadlines in order to successfully meet my clients' needs and artistic visions.",
};

export default function Projects() {
  const [active, setActive] = useState<Category>("Projects");
  const [openId, setOpenId] = useState<number | null>(null);
  const filtered = projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl font-bold text-white mb-3">Projects</h2>
          <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-[#D97757] to-transparent" />
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-[#1A1A1A] p-1 rounded-full border border-white/10">
            {categories.map((cat) => {
              const isActive = cat === active;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setActive(cat);
                    setOpenId(null);
                  }}
                  className={`px-5 py-2 text-sm font-medium rounded-full transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-[#D97757] to-[#EA580C] text-white"
                      : "text-[#A3A3A3] hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        <p className="text-[#A3A3A3] text-center text-sm max-w-2xl mx-auto mb-12 leading-relaxed">
          {descriptions[active]}
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filtered.map((p, i) => (
            (() => {
              const isOpen = openId === p.id;
              return (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative aspect-[16/10] rounded-2xl overflow-hidden bg-gradient-to-br ${p.gradient} border border-white/5 hover:border-[#D97757]/40 transition-all duration-500 cursor-pointer`}
              onClick={(e) => {
                const target = e.target as HTMLElement;
                if (target.closest("a")) return;
                setOpenId((curr) => (curr === p.id ? null : p.id));
              }}
            >
              {/* Image background if provided */}
              {p.image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={p.image}
                  alt={p.title}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:blur-sm"
                />
              )}

              {/* Status ribbon */}
              {p.underDeployment && (
                <div className="absolute top-4 right-4 z-20 bg-[#D97757] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">
                  Under Deployment
                </div>
              )}
              {p.comingSoon && !p.underDeployment && (
                <div className="absolute top-4 right-4 z-20 bg-[#D97757] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">
                  Coming Soon
                </div>
              )}

              {/* Hover overlay - gradient with curtain animation */}
              <div
                className={`curtain-overlay absolute inset-0 bg-gradient-to-br ${p.gradient} backdrop-blur-sm flex flex-col items-center justify-center gap-4 transition-all duration-500 p-4 ${
                  isOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-110 pointer-events-none"
                } group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto`}
              >
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white drop-shadow-2xl text-center">
                  {p.title}
                </h3>
                {p.underDeployment ? (
                  <p className="text-base text-[#D97757] font-semibold tracking-wide">
                    🚀 Under Deployment
                  </p>
                ) : p.comingSoon ? (
                  <p className="text-base text-[#D97757] font-semibold tracking-wide">
                    🚀 Coming Soon
                  </p>
                ) : (
                  <div className="flex items-center gap-4">
                    <a
                      href={p.link || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => !p.link && e.preventDefault()}
                      className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-[#D97757] hover:scale-110 transition-all"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={p.link || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => !p.link && e.preventDefault()}
                      className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-[#D97757] hover:scale-110 transition-all"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                )}
                {p.link && !p.comingSoon && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#D97757] hover:text-white underline transition-colors"
                  >
                    {p.link.replace(/^https?:\/\//, "")}
                  </a>
                )}
                <div className="flex items-center gap-2 flex-wrap justify-center max-w-[90%]">
                  {p.skills.map((s) => {
                    const style = getSkillStyle(s);
                    return (
                      <div
                        key={s}
                        className={`bg-gradient-to-br ${style.bg} ${style.text} px-2 py-1 rounded-md backdrop-blur flex items-center gap-1 hover:px-3 transition-all border border-white/20 cursor-help group relative text-xs font-semibold overflow-hidden`}
                        title={s}
                      >
                        <span className="text-sm flex-shrink-0">{style.icon}</span>
                        <span className="w-0 group-hover:w-auto overflow-hidden transition-all whitespace-nowrap text-xs">{s}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
              );
            })()
          ))}
        </div>
      </div>
    </section>
  );
}
