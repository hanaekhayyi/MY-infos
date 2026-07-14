import { ExternalLink, ShieldCheck } from 'lucide-react';
import { certifications } from '../data/portfolio';
import { RevealOnScroll, SectionHeading } from './ui';

export function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-6xl px-5 py-24">
      <RevealOnScroll>
        <SectionHeading eyebrow="Certifications" title="Reconnaissances" icon={<ShieldCheck size={12} />} />
      </RevealOnScroll>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => (
          <RevealOnScroll key={cert.id} delay={(i % 3) * 0.05}>
            <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 rounded-xl border border-token bg-surface p-4 transition-colors hover:border-cyan-accent/40 hover:bg-surface-2"
            >
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-cyan-accent/20 bg-cyan-accent/10 text-cyan-accent">
                <ShieldCheck size={16} />
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold leading-snug text-primary">{cert.name}</div>
                <div className="mt-0.5 text-xs text-tertiary">{cert.issuer}</div>
              </div>
              <ExternalLink
                size={14}
                className="mt-1 flex-shrink-0 text-tertiary opacity-0 transition-opacity group-hover:opacity-100"
              />
            </a>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
