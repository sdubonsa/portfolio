"use client";

import { motion } from "framer-motion";
import { Database, Server, Workflow, FileText } from "lucide-react";

const nodes = [
  { id: "api", label: "Ingestion API", icon: Workflow },
  { id: "kafka", label: "Kafka Buffer", icon: Server },
  { id: "worker", label: ".NET Processor", icon: ActivityIcon },
  { id: "db", label: "Compliance DB", icon: Database },
];

function ActivityIcon(props: any) {
  // Custom simple icon wrapper or just use Lucide's
  return <Server {...props} />;
}

export function SystemArchitecture() {
  return (
    <div className="w-full h-64 border border-white/10 rounded-lg bg-white/5 relative flex items-center justify-around overflow-hidden px-8">
       <div className="absolute top-4 left-4 text-xs font-mono text-white/40 uppercase">
          Architecture: Event-Driven Pipeline
       </div>

       {/* Connection Lines */}
       <div className="absolute inset-0 flex items-center justify-around px-20">
          <div className="w-full h-[2px] bg-white/10 relative">
             <motion.div 
               className="absolute top-1/2 left-0 w-8 h-[2px] bg-fintech-accent -mt-[1px]"
               animate={{ left: ["0%", "100%"], opacity: [0, 1, 0] }}
               transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
             />
             <motion.div 
               className="absolute top-1/2 left-0 w-8 h-[2px] bg-fintech-accent -mt-[1px]"
               animate={{ left: ["0%", "100%"], opacity: [0, 1, 0] }}
               transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
             />
          </div>
       </div>

       {/* Nodes */}
       {nodes.map((node, i) => (
         <div key={node.id} className="relative z-10 flex flex-col items-center gap-3">
            <div className={`w-12 h-12 rounded-full border border-white/10 bg-black/50 flex items-center justify-center
              ${i === 1 ? 'border-fintech-warning/50 text-fintech-warning' : 'text-fintech-accent border-fintech-accent/50'}
            `}>
              <node.icon className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono text-white/60">{node.label}</span>
         </div>
       ))}
    </div>
  );
}
