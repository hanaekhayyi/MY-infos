import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { experiences } from '../data/portfolio';
import { RevealOnScroll, SectionHeading, TechPill } from './ui';

const typeStyles: Record<string, string> = {
  PFE: 'bg-cyan-accent/10 text-cyan-accent border-cyan-accent/20',
  Stage: 'bg-amber-accent/10 text-amber-accent border-amber-accent/20',
  Recherche: 'bg-violet-accent/10 text-violet-accent border-violet-accent/20',
  'Dev Web': 'bg-mint-accent/10 text-mint-accent border-mint-accent/20',
};

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-24">
      <RevealOnScroll>
        <SectionHeading eyebrow="Expérience" title="Parcours terrain" icon={<Briefcase size={12} />} />
      </RevealOnScroll>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {experiences.map((exp, i) => (
          <RevealOnScroll key={exp.id} delay={(i % 2) * 0.08}>
            <article
              className={`relative h-full overflow-hidden rounded-2xl border bg-surface p-7 ${
                exp.featured ? 'border-cyan-accent/30' : 'border-token'
              }`}
            >
              {exp.featured && (
                <div className="absolute right-5 top-5">
                  <span className="rounded-full border border-cyan-accent/25 bg-cyan-accent/10 px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-wider text-cyan-accent">
                    Projet phare
                  </span>
                </div>
              )}
              <h3 className="text-base font-bold text-primary">{exp.company}</h3>
              <p className="mt-1 text-sm font-medium text-cyan-accent">{exp.role}</p>

              <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-tertiary">
                <span className="flex items-center gap-1">
                  <Calendar size={12} /> {exp.period}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={12} /> {exp.location} · {exp.duration}
                </span>
                <span
                  className={`rounded border px-2 py-0.5 font-mono text-[0.62rem] uppercase ${typeStyles[exp.type]}`}
                >
                  {exp.type}
                </span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-secondary">{exp.context}</p>

              <ul className="mt-4 space-y-2">
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex gap-2 text-[0.85rem] leading-relaxed text-secondary">
                    <span className="mt-1 text-cyan-accent" aria-hidden="true">
                      →
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-1.5 border-t border-token pt-4">
                {exp.tech.map((t) => (
                  <TechPill key={t} label={t} />
                ))}
              </div>
            </article>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
