import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import { skillCategories } from '../../data/content';
import { staggerContainer, staggerItem, viewportSettings } from '../../lib/animations';

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-dot-pattern relative">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-transparent to-[#0a0a0f] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeading
          title="Skills"
          label="TECHNICAL EXPERTISE"
          subtitle="Technologies and tools I use to build production systems"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={staggerContainer}
        >
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <motion.div key={category.title} variants={staggerItem}>
                <Card className="h-full group p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 bg-violet-500/10 border border-violet-500/20 rounded-lg group-hover:bg-violet-500/20 group-hover:border-violet-500/40 transition-all duration-300">
                      <IconComponent className="w-4 h-4 text-violet-400" />
                    </div>
                    <h3 className="text-[10px] sm:text-xs font-semibold text-zinc-300 uppercase tracking-wider font-mono">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center gap-2 px-3 py-2 bg-zinc-800/50 border border-zinc-700/50 rounded-lg hover:bg-violet-500/10 hover:border-violet-500/30 transition-all duration-300 group/skill"
                      >
                        {skill.icon.startsWith('http') ? (
                          <img 
                            src={skill.icon} 
                            alt={skill.name} 
                            className="w-5 h-5 object-contain" 
                          />
                        ) : (
                          <i className={`${skill.icon} text-lg`} />
                        )}
                        <span className="text-[10px] text-zinc-400 group-hover/skill:text-violet-300 font-medium transition-colors whitespace-nowrap">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
