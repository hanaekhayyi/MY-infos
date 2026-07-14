import {
  Layers,
  Code2,
  Database,
  Network,
  MessagesSquare,
  GitBranch,
  Cloud,
  HardDrive,
  BarChart3,
  Globe,
  type LucideIcon,
} from 'lucide-react';
import { skillCategories } from '../data/portfolio';
import { RevealOnScroll, SectionHeading, TechPill } from './ui';

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Database,
  Network,
  MessagesSquare,
  GitBranch,
  Cloud,
  HardDrive,
  BarChart3,
  Globe,
};

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-24">
      <RevealOnScroll>
        <SectionHeading eyebrow="Stack technique" title="Mes expertises" icon={<Layers size={12} />} />
      </RevealOnScroll>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skillCategories.map((cat, i) => {
          const Icon = iconMap[cat.icon] ?? Code2;
          return (
            <RevealOnScroll
              key={cat.id}
              delay={(i % 4) * 0.05}
              className={cat.wide ? 'sm:col-span-2' : ''}
            >
              <div className="h-full rounded-2xl border border-token bg-surface p-6 transition-colors duration-200 hover:border-cyan-accent/40">
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-accent/20 bg-cyan-accent/10 text-cyan-accent">
                  <Icon size={17} strokeWidth={1.8} />
                </div>
                <h3 className="mb-3 text-sm font-bold text-primary">{cat.label}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {cat.primary.map((skill) => (
                    <TechPill key={skill} label={skill} />
                  ))}
                  {cat.secondary?.map((skill) => (
                    <span
                      key={skill}
                      className="rounded border border-token/60 px-2 py-1 font-mono text-[0.68rem] text-tertiary/70"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          );
        })}
      </div>
    </section>
  );
}
