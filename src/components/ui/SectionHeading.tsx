import { motion } from 'framer-motion';
import { fadeInUp, viewportSettings } from '../../lib/animations';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  label?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({
  title,
  subtitle,
  label,
  align = 'left',
}: SectionHeadingProps) {
  const alignmentClasses = align === 'center' ? 'text-center' : 'text-left';

  return (
    <motion.div
      className={`mb-12 ${alignmentClasses}`}
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      variants={fadeInUp}
    >
      {/* Section label */}
      {label && (
        <div className={`mb-4 ${align === 'center' ? 'flex justify-center' : ''}`}>
          <span className="text-[8px] sm:text-[10px] font-mono text-zinc-600 tracking-widest">
            [ {label} ]
          </span>
        </div>
      )}
      
      {/* Terminal-style heading */}
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-zinc-100 mb-3 font-mono">
        <span className="text-violet-500">&gt; </span>
        {title}
        <span className="text-violet-500">_</span>
      </h2>
      
      {subtitle && (
        <p className="text-zinc-500 text-lg max-w-2xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
