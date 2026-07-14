import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

// ---------------------------------------------------------------------------
// Small, reusable presentational primitives shared across sections.
// ---------------------------------------------------------------------------

export function SectionHeading({
  eyebrow,
  title,
  icon,
}: {
  eyebrow: string;
  title: string;
  icon?: ReactNode;
}) {
  return (
    <div className="mb-12">
      <div className="mb-3 inline-flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-cyan-accent">
        {icon}
        <span>{eyebrow}</span>
        <span className="block h-px w-8 bg-cyan-accent/50" aria-hidden="true" />
      </div>
      <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl">
        {title}
      </h2>
    </div>
  );
}

export function TechPill({ label }: { label: string }) {
  return (
    <span className="rounded border border-token bg-surface-2 px-2 py-1 font-mono text-[0.68rem] text-tertiary">
      {label}
    </span>
  );
}

export function Badge({
  children,
  variant = 'default',
}: {
  children: ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'accent';
}) {
  const styles: Record<string, string> = {
    default: 'bg-cyan-accent/10 text-cyan-accent border-cyan-accent/20',
    success: 'bg-mint-accent/10 text-mint-accent border-mint-accent/20',
    warning: 'bg-amber-accent/10 text-amber-accent border-amber-accent/20',
    accent: 'bg-violet-accent/10 text-violet-accent border-violet-accent/20',
  };
  return (
    <span
      className={`inline-flex items-center gap-1 rounded border px-2.5 py-1 font-mono text-[0.65rem] font-medium uppercase tracking-wider ${styles[variant]}`}
    >
      {children}
    </span>
  );
}

export function Card({
  children,
  className = '',
  as: Component = 'div',
  ...rest
}: {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'a';
  [key: string]: unknown;
}) {
  return (
    <Component
      className={`rounded-2xl border border-token bg-surface transition-colors duration-200 hover:border-cyan-accent/40 ${className}`}
      {...rest}
    >
      {children}
    </Component>
  );
}

export function RevealOnScroll({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

export function PrimaryButton({
  children,
  href,
  onClick,
  icon,
  as = 'a',
  ...rest
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  icon?: ReactNode;
  as?: 'a' | 'button';
  [key: string]: unknown;
}) {
  const classes =
    'inline-flex items-center gap-2 rounded-lg bg-cyan-accent px-6 py-3 text-sm font-bold text-ink-950 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-glow';
  if (as === 'button') {
    return (
      <button onClick={onClick} className={classes} {...rest}>
        {children}
        {icon}
      </button>
    );
  }
  return (
    <a href={href} onClick={onClick} className={classes} {...rest}>
      {children}
      {icon}
    </a>
  );
}

export function GhostButton({
  children,
  href,
  onClick,
  icon,
  as = 'a',
  ...rest
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  icon?: ReactNode;
  as?: 'a' | 'button';
  [key: string]: unknown;
}) {
  const classes =
    'inline-flex items-center gap-2 rounded-lg border border-token bg-transparent px-6 py-3 text-sm font-medium text-secondary transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-accent hover:text-cyan-accent';
  if (as === 'button') {
    return (
      <button onClick={onClick} className={classes} {...rest}>
        {children}
        {icon}
      </button>
    );
  }
  return (
    <a href={href} onClick={onClick} className={classes} {...rest}>
      {children}
      {icon}
    </a>
  );
}
