interface TechTagProps {
  name: string;
  variant?: 'default' | 'accent';
}

export default function TechTag({ name, variant = 'default' }: TechTagProps) {
  const variants = {
    default: 'bg-zinc-800/50 text-zinc-400 border-zinc-700/50 hover:bg-zinc-700/50 hover:text-zinc-300 hover:border-zinc-600',
    accent: 'bg-violet-500/10 text-violet-400 border-violet-500/20 hover:bg-violet-500/20 hover:text-violet-300 hover:border-violet-500/40',
  };

  return (
    <span
      className={`
        inline-flex items-center px-3 py-1 text-[8px] sm:text-[10px] font-mono
        rounded-lg border transition-all duration-200 cursor-default
        ${variants[variant]}
      `}
    >
      {name}
    </span>
  );
}
