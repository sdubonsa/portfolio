"use client";

import { useEffect, useState } from "react";
import { Link2 } from "lucide-react";

const navItems = [
  { label: "Skills", id: "skills" },
  { label: "Achievements", id: "achievements" },
  { label: "Projects", id: "projects" },
  { label: "Leadership", id: "leadership" },
];

export function NavBar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="border-b border-white/10 mb-8 pb-4 sticky top-0 bg-[#0a0a0a]/80 backdrop-blur-md z-50 pt-4 -mx-4 px-4 md:-mx-8 md:px-8">
      <ul className="flex justify-end gap-6 overflow-x-auto no-scrollbar">
        {navItems.map((item) => (
          <li key={item.id} className="shrink-0">
            <a
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              className={`
                font-mono text-sm tracking-widest uppercase transition-colors flex items-center gap-2
                ${activeSection === item.id 
                  ? "text-fintech-accent font-bold" 
                  : "text-white/60 hover:text-white"
                }
              `}
            >
              <span className={`h-1.5 w-1.5 rounded-full transition-colors ${activeSection === item.id ? "bg-fintech-accent" : "bg-transparent"}`} />
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
