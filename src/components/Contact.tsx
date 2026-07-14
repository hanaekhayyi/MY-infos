import { useState, type FormEvent, type ReactNode } from 'react';
import { Check, Copy, Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';
import { profile } from '../data/portfolio';
import { PrimaryButton, RevealOnScroll, SectionHeading } from './ui';

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — silently ignore, the email is still visible.
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(form.subject || `Contact depuis le portfolio — ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-24">
      <RevealOnScroll>
        <SectionHeading eyebrow="Contact" title="Travaillons ensemble" icon={<Mail size={12} />} />
      </RevealOnScroll>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[2fr_3fr]">
        <RevealOnScroll delay={0.05}>
          <div className="space-y-6">
            <p className="text-sm leading-relaxed text-secondary">
              Je réponds sous 24h. Basée à {profile.location.split(',')[0]}, mobile au Maroc et à
              l'international. {profile.availability}.
            </p>

            <div className="space-y-3">
              <div className="flex items-center justify-between gap-3 rounded-xl border border-token bg-surface p-4">
                <span className="flex items-center gap-2.5 text-sm text-secondary">
                  <Mail size={15} className="text-cyan-accent" />
                  {profile.email}
                </span>
                <button
                  onClick={handleCopy}
                  aria-label="Copier l'adresse e-mail"
                  className="flex items-center gap-1.5 rounded-lg border border-token px-2.5 py-1.5 text-xs text-tertiary transition-colors hover:border-cyan-accent hover:text-cyan-accent"
                >
                  {copied ? <Check size={13} /> : <Copy size={13} />}
                  {copied ? 'Copié' : 'Copier'}
                </button>
              </div>

              <a
                href={profile.phoneHref}
                className="flex items-center gap-2.5 rounded-xl border border-token bg-surface p-4 text-sm text-secondary transition-colors hover:border-cyan-accent/40"
              >
                <Phone size={15} className="text-cyan-accent" />
                {profile.phone}
              </a>

              <div className="flex items-center gap-2.5 rounded-xl border border-token bg-surface p-4 text-sm text-secondary">
                <MapPin size={15} className="text-cyan-accent" />
                {profile.location}
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-token py-2.5 text-xs font-medium text-secondary transition-colors hover:border-cyan-accent hover:text-cyan-accent"
              >
                <Linkedin size={14} /> LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-token py-2.5 text-xs font-medium text-secondary transition-colors hover:border-cyan-accent hover:text-cyan-accent"
              >
                <Github size={14} /> GitHub
              </a>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-2xl border border-token bg-surface p-7"
            aria-label="Formulaire de contact"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Nom">
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClasses}
                  placeholder="Votre nom"
                />
              </Field>
              <Field label="E-mail">
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClasses}
                  placeholder="vous@exemple.com"
                />
              </Field>
            </div>
            <Field label="Objet">
              <input
                type="text"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className={inputClasses}
                placeholder="Opportunité CDI, collaboration…"
              />
            </Field>
            <Field label="Message">
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`${inputClasses} resize-none`}
                placeholder="Votre message"
              />
            </Field>
            <p className="text-xs text-tertiary">
              L'envoi ouvre votre client de messagerie par défaut avec le message pré-rempli, à destination de{' '}
              {profile.email}.
            </p>
            <PrimaryButton as="button" icon={<Send size={14} />}>
              Envoyer le message
            </PrimaryButton>
          </form>
        </RevealOnScroll>
      </div>
    </section>
  );
}

const inputClasses =
  'w-full rounded-lg border border-token bg-surface-2 px-3.5 py-2.5 text-sm text-primary placeholder:text-tertiary/60 focus:border-cyan-accent focus:outline-none';

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-tertiary">{label}</span>
      {children}
    </label>
  );
}
