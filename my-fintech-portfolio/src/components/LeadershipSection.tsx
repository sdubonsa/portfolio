import { Users, BookOpen, GitBranch, Mic } from "lucide-react";

const leadershipItems = [
  {
    icon: Users,
    title: "Mentorship & Onboarding",
    description: "Successfully mentored 3 junior engineers, facilitating their transition from generalist roles to specialized SRC (Supervision, Risk, Compliance) domain architects."
  },
  {
    icon: GitBranch,
    title: "System Design Review",
    description: "Core contributor to the 'Architecture Review Board', establishing patterns for event-driven compliance logging across LPL's internal service mesh."
  },
  {
    icon: BookOpen,
    title: "Documentation Culture",
    description: "Authorized the 'Compliance-as-Code' internal playbook, standardizing Terraform modules for regulatory audit trails."
  }
];

export function LeadershipSection() {
  return (
    <section className="border-t border-white/10 pt-8 mt-8">
      <div className="flex items-center gap-2 mb-6 text-white/80">
        <Mic className="w-5 h-5 text-fintech-warning" />
        <h2 className="text-2xl font-bold tracking-tight">Technical Leadership</h2>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        {leadershipItems.map((item, idx) => (
          <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-lg hover:border-fintech-accent/30 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-fintech-accent/10 border border-fintech-accent/20 flex items-center justify-center mb-4 text-fintech-accent">
              <item.icon className="w-5 h-5" />
            </div>
            <h3 className="text-white/90 font-mono text-sm uppercase tracking-wider mb-2">
              {item.title}
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
