import type { ReactNode } from 'react';
import { Briefcase, Globe2, MapPin, Sparkles, User } from 'lucide-react';
import { languages, profile } from '../data/portfolio';
import { RevealOnScroll, SectionHeading } from './ui';

const badgeVariantClasses: Record<string, string> = {
  native: 'bg-mint-accent/10 text-mint-accent border-mint-accent/20',
  advanced: 'bg-amber-accent/10 text-amber-accent border-amber-accent/20',
  intermediate: 'bg-cyan-accent/10 text-cyan-accent border-cyan-accent/20',
};

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24">
      <RevealOnScroll>
        <SectionHeading eyebrow="À propos" title="Mon profil" icon={<User size={12} />} />
      </RevealOnScroll>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[3fr_2fr]">
        <RevealOnScroll delay={0.05}>
          <div className="space-y-5 text-[0.95rem] leading-relaxed text-secondary">
            {profile.about.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
            <FactCard icon={<Sparkles size={14} />} label="Double expertise" value="Data Engineering & IA" />
            <FactCard icon={<MapPin size={14} />} label="Localisation" value={profile.location} />
            <FactCard icon={<Briefcase size={14} />} label="Recherche" value={profile.seekingTypes.join(' · ')} />
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div className="rounded-2xl border border-token bg-surface p-6">
            <div className="mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-tertiary">
              <Globe2 size={13} />
              Langues
            </div>
            <ul className="divide-y divide-token">
              {languages.map((lang) => (
                <li key={lang.name} className="flex items-center justify-between gap-3 py-3 first:pt-0 last:pb-0">
                  <div>
                    <div className="text-sm font-semibold text-primary">{lang.name}</div>
                    <div className="text-xs text-tertiary">{lang.level}</div>
                  </div>
                  <span
                    className={`rounded border px-2 py-0.5 font-mono text-[0.65rem] font-bold uppercase ${badgeVariantClasses[lang.badgeVariant]}`}
                  >
                    {lang.badge}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function FactCard({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-xl border border-token bg-surface p-4">
      <div className="mb-2 flex items-center gap-1.5 text-cyan-accent">{icon}</div>
      <div className="text-xs text-tertiary">{label}</div>
      <div className="mt-0.5 text-sm font-semibold text-primary">{value}</div>
    </div>
  );
}
