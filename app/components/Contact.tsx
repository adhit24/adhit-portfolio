"use client";

import { useState } from "react";
import { Mail, Phone, Instagram, Linkedin, Send, MessageCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "adhit24@gmail.com",
    href: "mailto:adhit24@gmail.com",
    color: "hover:text-red-400",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+62 813 5766 2424",
    href: "https://wa.me/6281357662424",
    color: "hover:text-green-400",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+62 813 5766 2424",
    href: "tel:+6281357662424",
    color: "hover:text-blue-400",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@adhitnugrha",
    href: "https://instagram.com/adhitnugrha",
    color: "hover:text-pink-400",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Adhit Nugraha",
    href: "https://linkedin.com/in/adhit-ops-specialist",
    color: "hover:text-blue-500",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Contact
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Let&apos;s build something meaningful together. Reach out through any
            of the channels below or send a direct message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Get in Touch
            </h3>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 p-4 bg-[#1A1A1A] rounded-xl border border-white/5 hover:border-[#D97757]/30 hover:translate-x-2 hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0D0D0D] flex items-center justify-center group-hover:bg-[#D97757]/20 transition-colors">
                    <item.icon className={`w-5 h-5 text-[#A3A3A3] ${item.color} transition-colors`} />
                  </div>
                  <div>
                    <p className="text-sm text-[#A3A3A3]">{item.label}</p>
                    <p className="text-white font-medium group-hover:text-[#D97757] transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm text-muted mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-[#1A1A1A] border border-white/10 rounded-xl text-white placeholder-[#A3A3A3] focus:outline-none focus:border-[#D97757] transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-muted mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-[#1A1A1A] border border-white/10 rounded-xl text-white placeholder-[#A3A3A3] focus:outline-none focus:border-[#D97757] transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-muted mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-card border border-white/10 rounded-xl text-white placeholder-muted focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-[#0D0D0D] bg-white rounded-xl hover:bg-[#D97757] hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
