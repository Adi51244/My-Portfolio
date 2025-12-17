import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { forwardRef } from 'react';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'ref'> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  href?: string;
  external?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      icon: Icon,
      iconPosition = 'left',
      href,
      external = false,
      className = '',
      ...props
    },
    ref
  ) => {
    const baseStyles = `
      inline-flex items-center justify-center gap-2 font-medium
      rounded-lg transition-colors duration-200
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900
      disabled:opacity-50 disabled:pointer-events-none
    `;

    const variants = {
      primary: `
        bg-violet-600 text-white
        hover:bg-violet-500
        active:bg-violet-700
      `,
      secondary: `
        bg-zinc-800 text-zinc-100 border border-zinc-700
        hover:bg-zinc-700 hover:border-zinc-600
        active:bg-zinc-800
      `,
      ghost: `
        text-zinc-400
        hover:text-zinc-100 hover:bg-zinc-800/50
        active:bg-zinc-800
      `,
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-[8px] sm:text-[10px]',
      md: 'px-3 sm:px-4 py-2 text-[8px] sm:text-[10px]',
      lg: 'px-4 sm:px-6 py-2.5 sm:py-3 text-[10px] sm:text-xs w-full sm:w-auto',
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    const content = (
      <>
        {Icon && iconPosition === 'left' && <Icon className="w-4 h-4" />}
        {children}
        {Icon && iconPosition === 'right' && <Icon className="w-4 h-4" />}
      </>
    );

    if (href) {
      return (
        <motion.a
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          className={combinedClassName}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {content}
        </motion.a>
      );
    }

    return (
      <motion.button
        ref={ref}
        className={combinedClassName}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {content}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
