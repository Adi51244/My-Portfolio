import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowDown, FileDown, Mail } from 'lucide-react';
import Button from '../ui/Button';
import { personalInfo } from '../../data/content';
import { staggerContainer, staggerItem } from '../../lib/animations';
import profileImg from '../../assets/Profile.jpg';

const roles = [
  'AI/ML Developer',
  'Full Stack Developer',
  'Computer Vision Specialist',
  'Software Engineer',
];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative bg-grid-pattern"
    >
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet-950/20 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent pointer-events-none" />

      <motion.div
        className="max-w-6xl mx-auto w-full relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-16"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Left Side - Content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Status badge */}
          <motion.div variants={staggerItem} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-[8px] sm:text-[10px] text-green-400 font-mono">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              OPEN TO OPPORTUNITIES
            </span>
          </motion.div>

          {/* Greeting */}
          <motion.p
            variants={staggerItem}
            className="text-base sm:text-lg md:text-xl text-zinc-400 mb-3 font-mono"
          >
            <span className="text-violet-500">&gt;</span> Hi, I am
          </motion.p>

          {/* Name with terminal style */}
          <motion.h1
            variants={staggerItem}
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-100 mb-4 tracking-tight font-mono whitespace-nowrap"
          >
            {personalInfo.name}
            <span className="text-violet-500 cursor-blink">_</span>
          </motion.h1>

          {/* Role with typing animation */}
          <motion.h2
            variants={staggerItem}
            className="text-sm sm:text-base md:text-lg lg:text-xl font-medium mb-6 font-mono min-h-[2rem] flex items-center justify-center lg:justify-start flex-wrap"
          >
            <span className="text-zinc-400 whitespace-nowrap">I am a&nbsp;</span>
            <span className="text-violet-400">{displayText}</span>
            <span className="text-violet-500 cursor-blink">|</span>
          </motion.h2>

          {/* Tagline */}
          <motion.p
            variants={staggerItem}
            className="text-base sm:text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto lg:mx-0 mb-8 sm:mb-12 leading-relaxed px-2 sm:px-0"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={staggerItem}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-10 sm:mb-12 w-full sm:w-auto px-4 sm:px-0"
          >
            <Button
              variant="primary"
              size="lg"
              href="#projects"
              icon={ArrowDown}
              iconPosition="right"
              className="glow-purple font-mono"
            >
              &gt; VIEW PROJECTS
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href={personalInfo.resumeUrl}
              icon={FileDown}
              iconPosition="left"
              external
              className="font-mono"
            >
              DOWNLOAD RESUME
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={staggerItem}
            className="flex items-center justify-center lg:justify-start gap-3"
          >
            <motion.a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-zinc-500 hover:text-violet-400 bg-zinc-900/50 hover:bg-violet-500/10 border border-zinc-800 hover:border-violet-500/50 rounded-lg transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-zinc-500 hover:text-violet-400 bg-zinc-900/50 hover:bg-violet-500/10 border border-zinc-800 hover:border-violet-500/50 rounded-lg transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              href={`mailto:${personalInfo.email}`}
              className="p-3 text-zinc-500 hover:text-violet-400 bg-zinc-900/50 hover:bg-violet-500/10 border border-zinc-800 hover:border-violet-500/50 rounded-lg transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>

        {/* Right Side - Profile Picture */}
        <motion.div variants={staggerItem} className="flex-shrink-0">
          <div className="relative">
            {/* Background gradient card with animated elements */}
            <div className="absolute -inset-3 sm:-inset-4 md:-inset-5 bg-gradient-to-br from-violet-900/40 via-purple-800/30 to-indigo-900/40 rounded-2xl overflow-hidden">
              {/* Animated gradient orbs moving across */}
              <motion.div
                className="absolute w-20 h-20 md:w-28 md:h-28 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full blur-xl opacity-60"
                animate={{
                  x: ['-100%', '300%'],
                  y: ['0%', '100%', '50%'],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <motion.div
                className="absolute w-16 h-16 md:w-24 md:h-24 bg-gradient-to-r from-fuchsia-500 to-pink-500 rounded-full blur-xl opacity-50"
                animate={{
                  x: ['300%', '-100%'],
                  y: ['100%', '0%', '80%'],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 2,
                }}
              />
              <motion.div
                className="absolute w-12 h-12 md:w-20 md:h-20 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full blur-lg opacity-50"
                animate={{
                  x: ['50%', '200%', '-50%', '50%'],
                  y: ['120%', '20%', '80%', '120%'],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute w-10 h-10 md:w-16 md:h-16 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full blur-lg opacity-40"
                animate={{
                  x: ['200%', '0%', '150%', '200%'],
                  y: ['-20%', '100%', '50%', '-20%'],
                }}
                transition={{
                  duration: 9,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </div>

            {/* Glowing border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 rounded-xl blur-sm opacity-60" />
            
            {/* Profile Image */}
            <img
              src={profileImg}
              alt={personalInfo.name}
              className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-xl object-cover object-top border-2 border-violet-400/60 shadow-2xl shadow-violet-500/40"
            />
            
            {/* Corner decorations */}
            <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-violet-400" />
            <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-violet-400" />
            <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-violet-400" />
            <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-violet-400" />
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div
          className="text-zinc-600 flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs font-mono text-zinc-600">SCROLL</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
