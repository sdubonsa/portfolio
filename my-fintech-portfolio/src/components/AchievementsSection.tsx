"use client";

import { useState } from "react";
import { caseStudies } from "@/data/case-studies";
import { Terminal, ChevronDown, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function AchievementsSection() {
  const [openId, setOpenId] = useState<string | null>(caseStudies[0]?.id || null);

  return (
    <section className="border-t border-white/10 pt-8 mt-8">
      <div className="flex items-center gap-2 mb-8 text-white/80">
        <Terminal className="w-5 h-5 text-fintech-warning" />
        <h2 className="text-2xl font-bold tracking-tight">Professional Achievements</h2>
      </div>

      <div className="space-y-4">
        {caseStudies.map((study, index) => {
          const isOpen = openId === study.id;
          
          return (
            <motion.div
              key={study.id}
              initial={false}
              className={`
                group rounded-xl border transition-all duration-300
                ${isOpen 
                  ? "bg-white/5 border-fintech-accent/50 shadow-lg shadow-black/20" 
                  : "bg-transparent border-white/10 hover:border-white/20 hover:bg-white/[0.02]"
                }
              `}
            >
              <button
                onClick={() => setOpenId(isOpen ? null : study.id)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <div className="flex items-center gap-4">
                  <span className={`
                    font-mono text-xs tracking-wider border rounded px-2 py-1
                    ${isOpen 
                      ? "text-fintech-accent border-fintech-accent/50 bg-fintech-accent/10" 
                      : "text-white/40 border-white/10 group-hover:border-white/20"
                    }
                  `}>
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className={`font-mono text-lg transition-colors ${isOpen ? "text-white" : "text-white/80"}`}>
                      {study.title}
                    </h3>
                  </div>
                </div>
                
                <div className={`
                  p-2 rounded-full transition-all duration-300
                  ${isOpen ? "bg-fintech-accent text-black rotate-180" : "bg-white/5 text-white/40 group-hover:bg-white/10 group-hover:text-white"}
                `}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 pt-0 ml-[3.25rem]">
                      <div className="border-l-2 border-white/10 pl-6 space-y-4">
                        <p className="text-white/70 leading-relaxed text-lg">
                          {study.summary}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 pt-2">
                          {study.techStack.map(stack => (
                            <span 
                              key={stack} 
                              className="px-3 py-1 bg-black/40 border border-white/10 rounded-md text-xs font-mono text-fintech-accent/90"
                            >
                              {stack}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
