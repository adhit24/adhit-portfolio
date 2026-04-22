"use client";

import { Instagram, Linkedin, Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Let&apos;s <span className="text-[#D97757]">Connect!</span>
        </h2>
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/adhit-ops-specialist"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-white hover:bg-[#D97757] hover:text-[#0D0D0D] hover:scale-110 transition-all"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="https://www.instagram.com/rasa.koppii"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-white hover:bg-[#D97757] hover:text-[#0D0D0D] hover:scale-110 transition-all"
          >
            <Instagram size={16} />
          </a>
          <a
            href="mailto:adhit24@gmail.com"
            className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-white hover:bg-[#D97757] hover:text-[#0D0D0D] hover:scale-110 transition-all"
          >
            <Mail size={16} />
          </a>
          <a
            href="https://github.com/adhit24"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-white hover:bg-[#D97757] hover:text-[#0D0D0D] hover:scale-110 transition-all"
          >
            <Github size={16} />
          </a>
        </div>
        <p className="text-xs text-[#A3A3A3]/60 mt-12">
          &copy; {new Date().getFullYear()} Adhitya Nugraha. Cirebon, Indonesia.
        </p>
      </div>
    </footer>
  );
}
