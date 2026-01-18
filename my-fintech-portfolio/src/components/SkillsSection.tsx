import { Code2, Database, Globe, Lock, Cpu, BarChart } from "lucide-react";

const skills = [
  {
    category: "Backend Engineering",
    icon: Code2,
    items: [".NET Core (C#)", "Python", "WebAPI", "Microservices", "Event-Driven Arch"]
  },
  {
    category: "Data & Messaging",
    icon: Database,
    items: ["Apache Kafka", "SQL Server", "MongoDB", "ETL Pipelines", "Redis"]
  },
  {
    category: "Cloud & DevOps",
    icon: Globe,
    items: ["AWS (Lambda, S3, EC2)", "Terraform (IaC)", "Docker", "CI/CD (GitHub Actions)"]
  },
  {
    category: "Observability",
    icon: BarChart,
    items: ["Dynatrace", "Splunk", "OpenTelemetry", "Distributed Tracing", "SLA/SLO Def"]
  },
  {
    category: "Frontend & AI",
    icon: Cpu,
    items: ["React/Next.js", "TypeScript", "LLM Integration", "RAG Patterns", "Tailwind"]
  }
];

export function SkillsSection() {
  return (
    <section className="mt-8">
      <div className="flex items-center gap-2 mb-6 text-white/80">
        <Cpu className="w-5 h-5 text-fintech-warning" />
        <h2 className="text-2xl font-bold tracking-tight">Technical Skills</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skillGroup) => (
          <div key={skillGroup.category} className="bg-white/5 border border-white/10 p-5 rounded-lg hover:bg-white/10 transition-colors">
            <div className="flex items-center gap-2 mb-4 text-fintech-accent">
              <skillGroup.icon className="w-5 h-5" />
              <h3 className="font-mono text-sm uppercase tracking-wider font-semibold">{skillGroup.category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((item) => (
                <span key={item} className="text-xs text-white/70 bg-black/20 px-2 py-1 rounded border border-white/5">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
