import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { personalInfo } from '../../data/content';
import { fadeInUp, staggerContainer, viewportSettings } from '../../lib/animations';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await emailjs.sendForm(
        'service_portfolio', // Replace with your EmailJS service ID
        'template_contact',  // Replace with your EmailJS template ID
        formRef.current!,
        'WvwXtTliP35LaETb5'
      );
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const contactLinks = [
    {
      name: 'EMAIL',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      icon: Mail,
    },
    {
      name: 'LINKEDIN',
      value: 'linkedin.com/in/aditya-kumar',
      href: personalInfo.linkedin,
      icon: Linkedin,
    },
    {
      name: 'GITHUB',
      value: 'github.com/Adi51244',
      href: personalInfo.github,
      icon: Github,
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="Contact"
          label="GET IN TOUCH"
          subtitle="Open to discussing AI/ML projects, full-stack development opportunities, or potential collaborations."
          align="center"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={staggerContainer}
        >
          {/* Contact Info */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <div className="bg-zinc-900/30 border border-zinc-800/50 rounded-xl p-6 hover:border-violet-500/20 transition-all duration-300">
              <h3 className="text-[10px] sm:text-xs font-semibold text-zinc-400 mb-6 font-mono">
                <span className="text-violet-500">&gt;</span> CONTACT INFO
              </h3>

              <div className="space-y-3">
                {contactLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target={link.name !== 'EMAIL' ? '_blank' : undefined}
                      rel={link.name !== 'EMAIL' ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 p-3 rounded-lg bg-zinc-800/30 border border-zinc-700/30 hover:border-violet-500/30 hover:bg-violet-500/5 transition-all duration-300 group"
                    >
                      <div className="p-2 bg-zinc-800/50 rounded-lg group-hover:bg-violet-500/20 transition-colors">
                        <IconComponent className="w-4 h-4 text-zinc-500 group-hover:text-violet-400 transition-colors" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs text-zinc-600 font-mono mb-0.5">
                          {link.name}
                        </div>
                        <div className="text-zinc-400 group-hover:text-violet-400 transition-colors text-sm truncate">
                          {link.value}
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-zinc-700 group-hover:text-violet-500 transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick CTA */}
            <div className="text-center">
              <p className="text-zinc-500 mb-4 text-sm">
                Currently open to AI/ML Engineering and Full-Stack roles.
              </p>
              <Button
                variant="primary"
                size="lg"
                href={`mailto:${personalInfo.email}`}
                icon={Send}
                className="font-mono glow-purple"
              >
                SEND EMAIL
              </Button>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={fadeInUp}>
            <form
              ref={formRef}
              className="bg-zinc-900/30 border border-zinc-800/50 rounded-xl p-6 space-y-5 hover:border-violet-500/20 transition-all duration-300"
              onSubmit={handleSubmit}
            >
              <h3 className="text-[10px] sm:text-xs font-semibold text-zinc-400 mb-2 font-mono">
                <span className="text-violet-500">&gt;</span> SEND MESSAGE
              </h3>

              <div>
                <label
                  htmlFor="name"
                  className="block text-[8px] sm:text-[10px] font-medium text-zinc-500 mb-2 font-mono"
                >
                  NAME
                </label>
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-zinc-800/30 border border-zinc-700/50 rounded-lg text-zinc-100 placeholder-zinc-600 focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 focus:bg-zinc-800/50 transition-all font-mono text-[10px] sm:text-xs"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-[8px] sm:text-[10px] font-medium text-zinc-500 mb-2 font-mono"
                >
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  name="reply_to"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-zinc-800/30 border border-zinc-700/50 rounded-lg text-zinc-100 placeholder-zinc-600 focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 focus:bg-zinc-800/50 transition-all font-mono text-[10px] sm:text-xs"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-[8px] sm:text-[10px] font-medium text-zinc-500 mb-2 font-mono"
                >
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-zinc-800/30 border border-zinc-700/50 rounded-lg text-zinc-100 placeholder-zinc-600 focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 focus:bg-zinc-800/50 transition-all resize-none font-mono text-[10px] sm:text-xs"
                  placeholder="Your message..."
                />
              </div>

              {/* Status Messages */}
              {status === 'success' && (
                <div className="flex items-center gap-2 text-green-400 text-xs font-mono bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                  <CheckCircle className="w-4 h-4" />
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-400 text-xs font-mono bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                  <AlertCircle className="w-4 h-4" />
                  Failed to send message. Please try again or email directly.
                </div>
              )}

              <Button 
                variant="primary" 
                className="w-full font-mono" 
                type="submit"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'SENDING...' : 'SEND MESSAGE'}
              </Button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
