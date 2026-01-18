import { Zap, Bot, Brain } from "lucide-react";

export function PersonalProjects() {
  return (
    <section className="border-t border-white/10 pt-8 mt-8">
      <div className="flex items-center gap-2 mb-6 text-white/80">
        <Zap className="w-5 h-5 text-fintech-warning" />
        <h2 className="text-2xl font-bold tracking-tight">Personal R&D</h2>
      </div>

      <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 p-8 rounded-xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
          <Brain className="w-32 h-32" />
        </div>
        
        <div className="relative z-10 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
             <div className="flex items-center gap-2 mb-2">
                <Bot className="w-5 h-5 text-fintech-accent" />
                <h3 className="text-xl font-bold text-white">HawkEye: AI-Integrated Fraud Detection</h3>
             </div>
             
             <p className="text-white/70 leading-relaxed text-sm">
               An event-driven anomaly detection firewall designed to identify transactional fraud patterns in real-time. 
               The system ingests high-velocity financial streams, runs them through a Python-based inference engine, 
               and uses an LLM agent to explain <em>why</em> a transaction was flagged.
             </p>

             <div className="flex flex-wrap gap-2 pt-2">
                {["Apache Kafka", "Python", "LLM/OpenAI", "React", "WebSocket", "Redis"].map(tag => (
                  <span key={tag} className="px-2 py-1 bg-fintech-accent/10 text-fintech-accent border border-fintech-accent/20 rounded text-xs font-mono">
                    {tag}
                  </span>
                ))}
             </div>
          </div>

          <div className="flex flex-col justify-center space-y-4 border-l border-white/10 pl-6 md:pl-8">
             <div className="space-y-1">
                <div className="text-xs uppercase font-mono text-white/40">Throughput</div>
                <div className="text-lg font-mono text-white">10k+ events/sec</div>
             </div>
             <div className="space-y-1">
                <div className="text-xs uppercase font-mono text-white/40">Latency</div>
                <div className="text-lg font-mono text-fintech-accent">~45ms</div>
             </div>
             <div className="space-y-1">
                <div className="text-xs uppercase font-mono text-white/40">Model</div>
                <div className="text-lg font-mono text-white">Hybrid (Rule + LLM)</div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
