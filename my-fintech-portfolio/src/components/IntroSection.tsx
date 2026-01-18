"use client";

import { motion } from "framer-motion";
import { Shield, Activity, Lock, TrendingUp, Server, ChevronDown } from "lucide-react";

export function IntroSection() {
  return (
    <section className="h-[90vh] flex flex-col items-center justify-center relative overflow-hidden border-b border-white/10">
      
      {/* Background Animated Elements */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {/* Fintech: Security Shield */}
        <motion.div 
          className="absolute top-[15%] left-[10%] text-fintech-accent/5"
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Shield className="w-64 h-64" />
        </motion.div>

        {/* Fintech: Market Activity */}
        <motion.div 
          className="absolute bottom-[20%] right-[10%] text-white/5"
          animate={{ y: [0, 30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <Activity className="w-80 h-80" />
        </motion.div>

        {/* Fintech: Infrastructure */}
        <motion.div 
          className="absolute top-[20%] right-[20%] text-fintech-accent/5"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Server className="w-32 h-32" />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="z-10 text-center space-y-6 max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-fintech-accent/30 bg-fintech-accent/10 text-fintech-accent text-xs font-mono tracking-widest uppercase mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fintech-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-fintech-accent"></span>
            </span>
            System Operational
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4">
            Santiago Dubon Sanchez
          </h1>
          
          <h2 className="text-xl md:text-2xl text-fintech-accent font-mono tracking-wider uppercase">
            Fintech Software Engineer
          </h2>
        </motion.div>

        <motion.p 
          className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Architecting high-frequency trading platforms, regulatory compliance engines, and event-driven risk systems.
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 flex flex-col items-center gap-2 text-white/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-xs font-mono uppercase tracking-widest">Initialising Portfolio Protocol...</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-fintech-accent" />
        </motion.div>
      </motion.div>

    </section>
  );
}
