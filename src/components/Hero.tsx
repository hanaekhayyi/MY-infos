import type { CSSProperties } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, MapPin } from 'lucide-react';
import { profile } from '../data/portfolio';
import { PrimaryButton, GhostButton } from './ui';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative mx-auto grid min-h-screen max-w-6xl grid-cols-1 items-center gap-16 px-5 pb-16 pt-32 md:grid-cols-2 md:pt-24"
    >
      <div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-mint-accent/25 bg-mint-accent/10 px-3.5 py-1.5 font-mono text-[0.7rem] uppercase tracking-wider text-mint-accent"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint-accent opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-mint-accent" />
          </span>
          {profile.availability}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mb-3 text-5xl font-bold leading-[0.95] tracking-tight text-primary sm:text-6xl lg:text-7xl"
        >
          <span className="block">{profile.firstName}</span>
          <span className="block bg-gradient-to-r from-cyan-accent to-violet-accent bg-clip-text text-transparent">
            {profile.lastName}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 font-serif text-lg italic text-tertiary"
        >
          {profile.title}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28 }}
          className="mb-8 rounded-r-xl border border-cyan-accent/15 border-l-4 border-l-cyan-accent bg-gradient-to-br from-cyan-accent/5 to-violet-accent/5 px-6 py-5"
        >
          <p className="text-[0.95rem] leading-relaxed text-secondary">{profile.tagline}</p>
          <div className="mt-3 flex items-center gap-1.5 text-sm text-tertiary">
            <MapPin size={13} aria-hidden="true" />
            {profile.location} · {profile.openTo}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.36 }}
          className="flex flex-wrap gap-3"
        >
          <PrimaryButton href="#contact" icon={<ArrowRight size={15} />}>
            Me contacter
          </PrimaryButton>
          <GhostButton href="#projects">Voir mes projets</GhostButton>
          <GhostButton href={profile.cvPath} icon={<Download size={15} />}>
            Télécharger le CV
          </GhostButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.44 }}
          className="mt-6 flex items-center gap-4"
        >
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Profil LinkedIn de Hanae Khayyi"
            className="text-tertiary transition-colors hover:text-cyan-accent"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Profil GitHub de Hanae Khayyi"
            className="text-tertiary transition-colors hover:text-cyan-accent"
          >
            <Github size={18} />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative"
        aria-hidden="true"
      >
        <NetworkIllustration />
      </motion.div>
    </section>
  );
}

/**
 * Signature visual: an abstract graph representing a multi-agent /
 * knowledge-retrieval system — the throughline of Hanae's flagship work.
 */
function NetworkIllustration() {
  const nodes = [
    { x: 220, y: 60, r: 7, color: 'var(--n-cyan)' },
    { x: 90, y: 140, r: 5, color: 'var(--n-violet)' },
    { x: 340, y: 130, r: 5, color: 'var(--n-mint)' },
    { x: 150, y: 250, r: 6, color: 'var(--n-cyan)' },
    { x: 290, y: 260, r: 4, color: 'var(--n-violet)' },
    { x: 220, y: 340, r: 7, color: 'var(--n-mint)' },
    { x: 60, y: 320, r: 4, color: 'var(--n-cyan)' },
    { x: 380, y: 320, r: 4, color: 'var(--n-violet)' },
  ];
  const edges = [
    [0, 1],
    [0, 2],
    [1, 3],
    [2, 4],
    [3, 5],
    [4, 5],
    [3, 6],
    [4, 7],
    [1, 4],
    [2, 3],
  ];

  return (
    <svg
      viewBox="0 0 440 400"
      className="mx-auto w-full max-w-md"
      style={
        {
          '--n-cyan': '#63b3ed',
          '--n-violet': '#9f7aea',
          '--n-mint': '#68d391',
        } as CSSProperties
      }
    >
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="var(--n-cyan)"
          strokeOpacity="0.25"
          strokeWidth="1"
        />
      ))}
      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={n.r}
          fill={n.color}
          fillOpacity="0.9"
        >
          <animate
            attributeName="opacity"
            values="0.5;1;0.5"
            dur={`${3 + (i % 3)}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}
    </svg>
  );
}
