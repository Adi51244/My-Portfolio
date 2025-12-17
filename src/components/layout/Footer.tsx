import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { personalInfo, navLinks } from '../../data/content';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-zinc-800/50 bg-gradient-to-b from-zinc-950/50 to-[#0a0a0f]">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <a href="#hero" className="inline-block text-sm font-bold text-zinc-100 font-mono mb-3">
              <span className="text-violet-500">&gt;</span>
              {personalInfo.name}
              <span className="text-violet-500">_</span>
            </a>
            <p className="text-zinc-500 text-[10px] font-mono leading-relaxed max-w-xs mx-auto md:mx-0">
              AI/ML Engineer & Full-Stack Developer building intelligent systems with measurable impact.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-4 font-mono">
              <span className="text-violet-500">#</span> Quick Links
            </h3>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[10px] text-zinc-500 hover:text-violet-400 transition-colors font-mono"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Connect Section */}
          <div className="text-center md:text-right">
            <h3 className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-4 font-mono">
              <span className="text-violet-500">#</span> Connect
            </h3>
            <div className="flex items-center justify-center md:justify-end gap-2">
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

        {/* Divider */}
        <div className="border-t border-zinc-800/50 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="text-zinc-600 text-[8px] sm:text-[10px] font-mono text-center sm:text-left flex items-center gap-1">
              <span className="text-violet-500">&gt;</span> © {currentYear} {personalInfo.name}. Made with 
              <Heart className="w-3 h-3 text-red-500 inline mx-1 fill-red-500" />
              & React
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-[10px] text-zinc-500 hover:text-violet-400 transition-colors font-mono group"
            >
              Back to top
              <span className="p-1.5 bg-zinc-900/50 border border-zinc-800/50 group-hover:border-violet-500/30 rounded-md transition-all">
                <ArrowUp className="w-3 h-3" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
