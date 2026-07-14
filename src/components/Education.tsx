import { Award, GraduationCap } from 'lucide-react';
import { education } from '../data/portfolio';
import { RevealOnScroll, SectionHeading } from './ui';

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-5 py-24">
      <RevealOnScroll>
        <SectionHeading eyebrow="Formation" title="Parcours académique" icon={<GraduationCap size={12} />} />
      </RevealOnScroll>

      <div className="space-y-4">
        {education.map((item, i) => (
          <RevealOnScroll key={item.id} delay={i * 0.06}>
            <div className="grid grid-cols-1 gap-2 rounded-2xl border border-token bg-surface p-6 transition-colors hover:border-cyan-accent/40 sm:grid-cols-[140px_1fr] sm:items-start sm:gap-6">
              <div className="font-mono text-xs font-medium text-cyan-accent">{item.period}</div>
              <div>
                <h3 className="text-base font-bold text-primary">{item.degree}</h3>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-secondary">
                  <GraduationCap size={13} className="text-tertiary" />
                  {item.school}
                </p>
                {item.mention && (
                  <span className="mt-2 inline-flex items-center gap-1.5 rounded border border-mint-accent/20 bg-mint-accent/10 px-2.5 py-1 text-xs font-semibold text-mint-accent">
                    <Award size={12} />
                    {item.mention}
                  </span>
                )}
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
