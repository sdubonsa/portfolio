import { Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20 py-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-white font-bold text-lg">Santiago Dubon Sanchez</h3>
          <p className="text-white/40 text-sm font-mono mt-1">Fintech Systems Engineer</p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/santiagodubons" 
            target="_blank"
            rel="noopener noreferrer" 
            className="text-white/60 hover:text-fintech-accent transition-colors p-2 hover:bg-white/5 rounded-full"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href="https://linkedin.com/in/santiagodubons"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-fintech-accent transition-colors p-2 hover:bg-white/5 rounded-full"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
        
        <div className="text-white/20 text-xs font-mono">
          © {new Date().getFullYear()} ALL RIGHTS RESERVED
        </div>
      </div>
    </footer>
  );
}
