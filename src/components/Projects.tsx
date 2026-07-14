import { useMemo, useState, type ReactNode } from 'react';
import { ExternalLink, Github, Rocket, Star } from 'lucide-react';
import { projectFilters, projects, type ProjectCategory } from '../data/portfolio';
import { RevealOnScroll, SectionHeading, TechPill } from './ui';

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'Tous'>('Tous');

  const filtered = useMemo(() => {
    if (activeFilter === 'Tous') return projects;
    return projects.filter((p) => p.categories.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-24">
      <RevealOnScroll>
        <SectionHeading eyebrow="Projets" title="Réalisations académiques" icon={<Rocket size={12} />} />
      </RevealOnScroll>

      <RevealOnScroll delay={0.05}>
        <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filtrer les projets par catégorie">
          <FilterChip label="Tous" active={activeFilter === 'Tous'} onClick={() => setActiveFilter('Tous')} />
          {projectFilters.map((cat) => (
            <FilterChip
              key={cat}
              label={cat}
              active={activeFilter === cat}
              onClick={() => setActiveFilter(cat)}
            />
          ))}
        </div>
      </RevealOnScroll>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {filtered.map((project, i) => (
          <RevealOnScroll key={project.id} delay={(i % 2) * 0.06}>
            <article
              className={`flex h-full flex-col gap-4 rounded-2xl border bg-surface p-7 transition-colors duration-200 hover:border-cyan-accent/40 ${
                project.featured ? 'border-amber-accent/30' : 'border-token'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.categories.map((cat) => (
                    <span
                      key={cat}
                      className="rounded border border-cyan-accent/20 bg-cyan-accent/10 px-2 py-0.5 font-mono text-[0.62rem] uppercase tracking-wide text-cyan-accent"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
                {project.featured && (
                  <span
                    className="flex items-center gap-1 text-amber-accent"
                    title="Projet vedette"
                    aria-label="Projet vedette"
                  >
                    <Star size={15} fill="currentColor" />
                  </span>
                )}
              </div>

              <h3 className="text-base font-bold leading-snug text-primary">{project.name}</h3>

              <div className="space-y-2 text-[0.85rem] leading-relaxed text-secondary">
                <p>
                  <span className="font-semibold text-primary">Problème : </span>
                  {project.problem}
                </p>
                <p>
                  <span className="font-semibold text-primary">Solution : </span>
                  {project.solution}
                </p>
              </div>

              <div className="flex flex-1 flex-wrap items-end gap-1.5">
                {project.tech.map((t) => (
                  <TechPill key={t} label={t} />
                ))}
              </div>

              <div className="flex gap-3 border-t border-token pt-4">
                <ProjectLink href={project.githubUrl} icon={<Github size={14} />} label="Voir le code" />
                <ProjectLink href={project.demoUrl} icon={<ExternalLink size={14} />} label="Voir le projet" />
              </div>
            </article>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-colors ${
        active
          ? 'border-cyan-accent bg-cyan-accent/10 text-cyan-accent'
          : 'border-token text-tertiary hover:border-cyan-accent/50 hover:text-secondary'
      }`}
    >
      {label}
    </button>
  );
}

function ProjectLink({ href, icon, label }: { href?: string; icon: ReactNode; label: string }) {
  if (!href) {
    return (
      <span
        className="inline-flex cursor-not-allowed items-center gap-1.5 rounded-lg border border-token px-3 py-1.5 text-xs text-tertiary/50"
        aria-disabled="true"
        title="Lien non disponible"
      >
        {icon}
        {label}
      </span>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 rounded-lg border border-token px-3 py-1.5 text-xs text-secondary transition-colors hover:border-cyan-accent hover:text-cyan-accent"
    >
      {icon}
      {label}
    </a>
  );
}
