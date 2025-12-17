import { motion } from 'framer-motion';
import { Briefcase, Award, Calendar } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { experiences } from '../../data/content';
import { staggerContainer, staggerItem, viewportSettings } from '../../lib/animations';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-dot-pattern relative">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-transparent to-[#0a0a0f] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <SectionHeading
          title="Experience"
          label="BACKGROUND"
          subtitle="Building real-world AI solutions and making impact"
        />

        <motion.div
          className="space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={staggerContainer}
        >
          {experiences.map((experience, index) => (
            <motion.div
              key={`${experience.title}-${index}`}
              variants={staggerItem}
              className="group relative bg-zinc-900/30 border border-zinc-800/50 rounded-xl p-6 hover:border-violet-500/30 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)] transition-all duration-300"
            >
              {/* Timeline indicator */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-zinc-800 group-hover:bg-violet-500/30 transition-colors -translate-x-1/2 hidden lg:block" />
              <div className="absolute left-6 top-6 w-3 h-3 rounded-full bg-violet-500 border-4 border-[#0a0a0f] -translate-x-1/2 hidden lg:block" />

              <div className="lg:pl-8">
                {/* Header */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  {/* Icon */}
                  <div
                    className={`p-2 rounded-lg ${
                      experience.type === 'work'
                        ? 'bg-violet-500/10 border border-violet-500/20'
                        : 'bg-amber-500/10 border border-amber-500/20'
                    }`}
                  >
                    {experience.type === 'work' ? (
                      <Briefcase className="w-4 h-4 text-violet-400" />
                    ) : (
                      <Award className="w-4 h-4 text-amber-400" />
                    )}
                  </div>

                  {/* Period */}
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-zinc-800/50 border border-zinc-700/50 rounded-full text-[8px] text-zinc-500 font-mono">
                    <Calendar className="w-3 h-3" />
                    {experience.period}
                  </span>
                </div>

                {/* Title & Company */}
                <h3 className="text-xs sm:text-sm font-bold text-zinc-100 mb-1 font-mono uppercase tracking-wide group-hover:text-violet-400 transition-colors">
                  {experience.title}
                </h3>
                <p className="text-violet-400/80 text-[10px] sm:text-xs mb-4 font-mono">
                  {experience.company}
                </p>

                {/* Description */}
                <ul className="space-y-2">
                  {experience.description.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-zinc-400"
                    >
                      <span className="text-violet-500 mt-1">&gt;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
