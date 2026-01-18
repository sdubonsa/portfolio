import { LeadershipSection } from "@/components/LeadershipSection";
import { SkillsSection } from "@/components/SkillsSection";
import { AchievementsSection } from "@/components/AchievementsSection";
import { PersonalProjects } from "@/components/PersonalProjects";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { IntroSection } from "@/components/IntroSection";
import { Shield, Building2 } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <NavBar />
      <IntroSection />

      <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8 relative">
        {/* Bio / Status Section */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/10 pb-6 gap-4">
          <div>
            <div className="flex items-center gap-2 mt-3 text-white/60 font-mono text-sm">
              <Building2 className="w-4 h-4" />
              <span>Software Engineer II @ LPL Financial</span>
            </div>
            <p className="text-white/60 mt-4 max-w-xl text-lg leading-relaxed">
              Specializing in <span className="text-fintech-accent">Supervision, Risk, & Compliance</span> technology.
              Building reliable, auditable event-driven systems for the financial sector.
            </p>
          </div>
          <div className="text-right font-mono text-xs text-white/40 hidden md:block space-y-1">
            <div className="font-bold text-fintech-accent">STATUS: ACTIVE</div>
            <div>ROLE: SOFTWARE_ENGINEER_II</div>
            <div>DOMAINS: .NET / PYTHON / KAFKA</div>
            <div>LOCATION: CHARLOTTE, NC</div>
          </div>
        </header>

        <section id="skills" className="scroll-mt-24">
          <SkillsSection />
        </section>

        <section id="achievements" className="scroll-mt-24">
          <AchievementsSection />
        </section>

        <section id="projects" className="scroll-mt-24">
          <PersonalProjects />
        </section>

        <section id="leadership" className="scroll-mt-24">
          <LeadershipSection />
        </section>

        <Footer />
      </div>
    </main>
  );
}
