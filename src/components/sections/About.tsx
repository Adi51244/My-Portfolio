import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { aboutContent } from '../../data/content';
import { fadeInUp, viewportSettings } from '../../lib/animations';

export default function About() {
  const stats = [
    { value: '10+', label: 'PROJECTS BUILT' },
    { value: '5+', label: 'AI/ML MODELS' },
    { value: '1+', label: 'YEARS EXPERIENCE' },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="About"
          label="WHO I AM"
          subtitle="Engineering mindset, production focus"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={fadeInUp}
          className="bg-zinc-900/30 border border-zinc-800/50 rounded-2xl p-5 sm:p-8 md:p-10 hover:border-violet-500/20 transition-all duration-300"
        >
          <p className="text-base sm:text-lg md:text-xl text-zinc-400 leading-relaxed mb-8 sm:mb-10 text-justify whitespace-pre-line">
            {aboutContent.description}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 pt-10 border-t border-zinc-800/50">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                className="text-center group p-4 sm:p-2 bg-zinc-800/20 sm:bg-transparent rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-2xl sm:text-xl md:text-2xl font-bold text-violet-400 font-mono mb-2 group-hover:text-violet-300 transition-colors">
                  {stat.value}
                </div>
                <div className="text-[8px] sm:text-[10px] text-zinc-600 font-mono tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
