# Hanae Khayyi — Portfolio

Portfolio professionnel de **Hanae Khayyi**, Ingénieure Data Engineering & Intelligence
Artificielle, disponible pour un CDI à partir d'août 2026.

Site statique construit avec React, Vite, TypeScript et Tailwind CSS — prêt à déployer sur
GitHub Pages, sans backend ni base de données.

## ✨ Fonctionnalités

- Navigation sticky avec indication de la section active et menu mobile
- Mode clair / sombre avec mémorisation du choix (localStorage)
- Animations d'apparition légères (Framer Motion), respectant `prefers-reduced-motion`
- Sections : Accueil, À propos, Compétences, Expériences, Projets, Formation,
  Certifications, Contact
- Filtres de projets par catégorie (ML, NLP, RAG/LLM, Big Data, Cloud, BI)
- Formulaire de contact visuel (ouverture du client mail via `mailto:`)
- Bouton de copie de l'adresse e-mail avec confirmation visuelle
- Bouton de téléchargement du CV
- Bouton "retour en haut" de page
- SEO complet : meta description, Open Graph, Twitter Card, `robots.txt`, `sitemap.xml`,
  données structurées Schema.org (`Person`)
- Accessibilité : HTML sémantique, focus visible, `aria-label`, lien d'évitement au clavier
- 100 % responsive (mobile, tablette, desktop)

## 🧱 Stack technique

| Outil          | Rôle                                  |
| -------------- | -------------------------------------- |
| React 18       | Librairie UI                           |
| Vite           | Bundler / serveur de développement     |
| TypeScript     | Typage statique                        |
| Tailwind CSS   | Système de design utilitaire           |
| Framer Motion  | Animations légères                     |
| Lucide React   | Icônes                                 |

## 📁 Structure du projet

```text
hanae-portfolio/
├── public/
│   ├── cv/                 # Placer le CV ici (hanae-khayyi-cv.pdf)
│   ├── favicon.svg
│   ├── site.webmanifest
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Education.tsx
│   │   ├── Certifications.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── BackToTop.tsx
│   │   └── ui.tsx           # Composants réutilisables (Badge, Card, boutons...)
│   ├── data/
│   │   └── portfolio.ts     # ⭐ Toutes les données du portfolio (à éditer)
│   ├── hooks/
│   │   ├── useTheme.ts
│   │   ├── useActiveSection.ts
│   │   └── useReducedMotion.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .github/workflows/deploy.yml   # Déploiement automatique GitHub Pages
├── index.html
├── vite.config.ts
├── tailwind.config.js
└── package.json
