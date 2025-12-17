import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import TechTag from '../ui/TechTag';
import { projects } from '../../data/content';
import { staggerContainer, staggerItem, viewportSettings } from '../../lib/animations';

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-dot-pattern">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-transparent to-[#0a0a0f] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeading
          title="Projects"
          label="FEATURED WORK"
          subtitle="Production-grade AI systems with measurable business impact"
        />

        {/* Featured Projects */}
        <motion.div
          className="space-y-8 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={staggerContainer}
        >
          {featuredProjects.map((project) => (
            <motion.article
              key={project.title}
              variants={staggerItem}
              className="group relative bg-zinc-900/30 border border-zinc-800/50 rounded-2xl p-6 md:p-8 hover:border-violet-500/30 hover:shadow-[0_0_40px_rgba(139,92,246,0.1)] transition-all duration-300"
            >
              <div className="relative z-10">
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-sm md:text-base font-bold text-zinc-100 mb-2 font-mono uppercase tracking-wide group-hover:text-violet-400 transition-colors">
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <p className="text-zinc-500 text-sm">
                      {project.subtitle}
                    </p>
                  )}
                </div>

                {/* Problem Statement */}
                <div className="mb-6 p-4 bg-zinc-800/30 border-l-2 border-violet-500/50 rounded-r-lg">
                  <p className="text-zinc-400 text-sm">
                    <span className="text-violet-400 font-mono">&gt; </span>
                    Problem: {project.problem}
                  </p>
                </div>

                {/* Solution */}
                <p className="text-zinc-400 mb-6 leading-relaxed">
                  {project.solution}
                </p>

                {/* Metrics */}
                <div className="mb-6">
                  <h4 className="text-[8px] sm:text-[10px] font-semibold uppercase tracking-wider text-zinc-600 mb-3 font-mono">
                    KEY RESULTS
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {project.metrics.map((metric) => (
                      <div
                        key={metric}
                        className="px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-lg hover:bg-green-500/20 hover:border-green-500/40 transition-all duration-200"
                      >
                        <span className="text-green-400 font-mono text-[10px] sm:text-xs font-medium">
                          {metric}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-8">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <TechTag key={tech} name={tech} variant="accent" />
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3">
                  <Button
                    variant="secondary"
                    size="md"
                    href={project.github}
                    icon={Github}
                    external
                    className="font-mono text-xs"
                  >
                    GITHUB
                  </Button>
                  {project.demo && (
                    <Button
                      variant="primary"
                      size="md"
                      href={project.demo}
                      icon={ExternalLink}
                      external
                      className="font-mono text-xs"
                    >
                      DEMO
                    </Button>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <>
            <h3 className="text-sm font-semibold text-zinc-400 mb-6 font-mono">
              <span className="text-violet-500">&gt;</span> Other Projects
            </h3>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              variants={staggerContainer}
            >
              {otherProjects.map((project) => (
                <motion.article
                  key={project.title}
                  variants={staggerItem}
                  className="bg-zinc-900/30 border border-zinc-800/50 rounded-xl p-6 hover:border-violet-500/30 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)] transition-all duration-300 group"
                >
                  <h4 className="text-xs sm:text-sm font-semibold text-zinc-100 mb-1 font-mono group-hover:text-violet-400 transition-colors">
                    {project.title}
                  </h4>
                  {project.subtitle && (
                    <p className="text-sm text-zinc-600 mb-3">
                      {project.subtitle}
                    </p>
                  )}
                  <p className="text-zinc-500 text-sm mb-4">{project.solution}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <TechTag key={tech} name={tech} />
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[10px] sm:text-xs text-violet-400 hover:text-violet-300 transition-colors font-mono"
                  >
                    VIEW ON GITHUB
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.article>
              ))}
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}
