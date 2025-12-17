import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import type { ReactNode, MouseEvent } from 'react';

interface CardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: ReactNode;
  hover?: boolean;
  className?: string;
  glowColor?: 'purple' | 'green';
}

export default function Card({
  children,
  hover = true,
  className = '',
  glowColor = 'purple',
  ...props
}: CardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const glowStyles = {
    purple: 'hover:border-violet-500/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.15),inset_0_0_30px_rgba(139,92,246,0.05)]',
    green: 'hover:border-green-500/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.15),inset_0_0_30px_rgba(34,197,94,0.05)]',
  };

  return (
    <motion.div
      ref={cardRef}
      className={`
        relative overflow-hidden
        bg-zinc-900/30 border border-zinc-800/50 rounded-xl p-6
        backdrop-blur-sm
        ${hover ? `${glowStyles[glowColor]} hover:bg-zinc-900/50` : ''}
        transition-all duration-300
        ${className}
      `}
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ duration: 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      {...props}
    >
      {/* Mouse following radial gradient with animated orbs */}
      {hover && isHovered && (
        <div 
          className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none"
          style={{
            background: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.15), transparent 50%)`,
          }}
        >
          {/* Central glow at mouse position */}
          <div
            className="absolute w-40 h-40 rounded-full blur-2xl transition-all duration-75"
            style={{
              left: mousePosition.x - 80,
              top: mousePosition.y - 80,
              background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(168, 85, 247, 0.2) 40%, transparent 70%)',
            }}
          />
          
          {/* Orbiting particles around mouse */}
          <motion.div
            className="absolute w-8 h-8 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full blur-lg opacity-60"
            animate={{
              x: [0, 30, 0, -30, 0],
              y: [-30, 0, 30, 0, -30],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            style={{ left: mousePosition.x - 16, top: mousePosition.y - 16 }}
          />
          <motion.div
            className="absolute w-6 h-6 bg-gradient-to-r from-fuchsia-500 to-pink-500 rounded-full blur-lg opacity-50"
            animate={{
              x: [0, -25, 0, 25, 0],
              y: [25, 0, -25, 0, 25],
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
            style={{ left: mousePosition.x - 12, top: mousePosition.y - 12 }}
          />
          <motion.div
            className="absolute w-5 h-5 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full blur-md opacity-50"
            animate={{
              x: [20, -20, 20],
              y: [20, -20, 20],
            }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
            style={{ left: mousePosition.x - 10, top: mousePosition.y - 10 }}
          />
          <motion.div
            className="absolute w-4 h-4 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full blur-md opacity-40"
            animate={{
              x: [-15, 15, -15],
              y: [15, -15, 15],
            }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            style={{ left: mousePosition.x - 8, top: mousePosition.y - 8 }}
          />
          <motion.div
            className="absolute w-3 h-3 bg-gradient-to-r from-purple-400 to-fuchsia-400 rounded-full blur-sm opacity-60"
            animate={{
              x: [0, 40, 0, -40, 0],
              y: [40, 0, -40, 0, 40],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            style={{ left: mousePosition.x - 6, top: mousePosition.y - 6 }}
          />
          <motion.div
            className="absolute w-4 h-4 bg-gradient-to-r from-violet-400 to-indigo-400 rounded-full blur-sm opacity-50"
            animate={{
              x: [35, -35, 35],
              y: [-35, 35, -35],
            }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
            style={{ left: mousePosition.x - 8, top: mousePosition.y - 8 }}
          />
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
