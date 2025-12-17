import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../../data/content';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-t border-zinc-800/50 bg-zinc-950/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-4 sm:gap-6 md:flex-row md:justify-between">
          {/* Copyright */}
          <div className="text-zinc-600 text-[8px] sm:text-[10px] font-mono text-center md:text-left">
            <span className="text-violet-500">&gt;</span> © {currentYear} {personalInfo.name}. Built with precision.
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-zinc-600 hover:text-violet-400 bg-zinc-900/50 hover:bg-violet-500/10 border border-zinc-800/50 hover:border-violet-500/30 rounded-lg transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-zinc-600 hover:text-violet-400 bg-zinc-900/50 hover:bg-violet-500/10 border border-zinc-800/50 hover:border-violet-500/30 rounded-lg transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 text-zinc-600 hover:text-violet-400 bg-zinc-900/50 hover:bg-violet-500/10 border border-zinc-800/50 hover:border-violet-500/30 rounded-lg transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
