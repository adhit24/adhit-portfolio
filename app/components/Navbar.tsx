"use client";

import { useState, useEffect } from "react";
import { Menu, X, Instagram, Linkedin, Github } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["home", "projects", "about", "skills"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "py-4 bg-[#050505]/70 backdrop-blur-lg border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]" 
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="text-lg font-bold text-white">
            adhit<span className="text-[#D97757]">intech</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.name.toLowerCase();
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm transition-colors ${
                    isActive ? "text-[#D97757]" : "text-[#A3A3A3] hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Social icons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://www.instagram.com/adhitnugrha/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-[#1A1A1A] flex items-center justify-center hover:bg-[#D97757] hover:text-[#0D0D0D] transition-colors text-white"
            >
              <Instagram size={14} />
            </a>
            <a
              href="https://www.linkedin.com/in/adhit-ops-specialist"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-[#1A1A1A] flex items-center justify-center hover:bg-[#D97757] hover:text-[#0D0D0D] transition-colors text-white"
            >
              <Linkedin size={14} />
            </a>
            <a
              href="https://github.com/adhit24"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-[#1A1A1A] flex items-center justify-center hover:bg-[#D97757] hover:text-[#0D0D0D] transition-colors text-white"
            >
              <Github size={14} />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0D0D0D] pt-24 px-6 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-2xl font-medium text-white py-3 border-b border-white/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
