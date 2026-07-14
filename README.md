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
```

## 🚀 Installation

```bash
npm install
npm run dev
```

Le site est alors accessible sur `http://localhost:5173`.

## 🛠️ Commandes disponibles

```bash
npm install      # installe les dépendances
npm run dev       # démarre le serveur de développement
npm run build      # build de production dans /dist
npm run preview    # prévisualise le build de production localement
npm run lint       # vérifie le code avec ESLint
```

## ✏️ Personnalisation

### Modifier le contenu

Toutes les informations affichées (profil, compétences, expériences, projets, formation,
certifications, liens sociaux) sont centralisées dans **`src/data/portfolio.ts`**. Il suffit
de modifier ce fichier — aucun composant n'a besoin d'être touché pour une mise à jour de
contenu.

### Ajouter le CV

1. Placez votre fichier PDF dans `public/cv/`.
2. Nommez-le `hanae-khayyi-cv.pdf` (ou mettez à jour `profile.cvPath` dans
   `src/data/portfolio.ts` si vous choisissez un autre nom).
3. Supprimez le fichier `public/cv/PLACE_CV_HERE.txt`.

### Ajouter des images

- Image de partage social (Open Graph / Twitter) : ajoutez un fichier `og-image.png`
  (1200×630px recommandé) dans `public/`, déjà référencé dans `index.html`.
- Icônes ou illustrations supplémentaires : placez-les dans `src/assets/` et importez-les
  dans le composant concerné.

### Ajouter des liens de projets (GitHub / démo)

Dans `src/data/portfolio.ts`, chaque projet possède des champs optionnels `githubUrl` et
`demoUrl`. Ajoutez l'URL réelle pour activer le bouton correspondant ; s'il n'y a pas de
lien, laissez le champ absent — le bouton s'affichera automatiquement désactivé (aucune URL
inventée n'est utilisée).

### Formulaire de contact

Le formulaire est statique et ouvre le client de messagerie via `mailto:` avec le message
pré-rempli (voir `src/components/Contact.tsx`). Pour un envoi réel sans ouverture du client
mail, vous pouvez intégrer un service comme [Formspree](https://formspree.io/) :

1. Créez un formulaire sur Formspree et récupérez votre endpoint (`https://formspree.io/f/xxxxxxx`).
2. Dans `Contact.tsx`, remplacez la logique de `handleSubmit` par un `fetch` POST vers cet
   endpoint. Ne committez jamais de clé API dans le code source public — utilisez les
   variables d'environnement Vite (`import.meta.env`) si nécessaire.

## 🌐 Déploiement sur GitHub Pages

Le projet est préconfiguré avec un workflow GitHub Actions
(`.github/workflows/deploy.yml`) qui build et publie automatiquement le site à chaque push
sur `main`.

### Étapes

1. Poussez ce projet sur un dépôt GitHub.
2. Dans **Settings → Pages**, sélectionnez la source **GitHub Actions**.
3. Configurez le champ `base` dans `vite.config.ts` selon le type de dépôt :

   - **Dépôt de projet** (ex. `github.com/hanaekhayyi/portfolio`) :
     ```ts
     const REPO_NAME = 'portfolio'; // nom exact de votre dépôt
     const IS_USER_SITE = false;
     ```
     → le site sera servi sur `https://hanaekhayyi.github.io/portfolio/`

   - **Dépôt utilisateur** (nommé exactement `hanaekhayyi.github.io`) :
     ```ts
     const IS_USER_SITE = true;
     ```
     → le site sera servi sur `https://hanaekhayyi.github.io/`

4. Poussez sur `main` : le workflow build et déploie automatiquement.
5. Mettez à jour les URLs canoniques dans `index.html`, `public/robots.txt` et
   `public/sitemap.xml` avec l'URL finale de votre site.

## 📍 Emplacement des liens sociaux et des données

- **Liens sociaux** (LinkedIn, GitHub, e-mail, téléphone) : `src/data/portfolio.ts`, objet
  `profile`.
- **Toutes les autres données** (compétences, expériences, projets, formation,
  certifications, langues) : également dans `src/data/portfolio.ts`.

## ⚠️ À personnaliser avant publication

- [ ] Ajouter le CV réel dans `public/cv/hanae-khayyi-cv.pdf`
- [ ] Ajouter une image `public/og-image.png` pour le partage social
- [ ] Renseigner `REPO_NAME` / `IS_USER_SITE` dans `vite.config.ts`
- [ ] Mettre à jour les URLs canoniques (`index.html`, `robots.txt`, `sitemap.xml`) avec
      l'URL réelle du site déployé
- [ ] Ajouter les liens GitHub/démo réels des projets dans `src/data/portfolio.ts`
      (`githubUrl`, `demoUrl`) s'ils existent

## ✅ Vérifications effectuées

- Tous les imports correspondent à des fichiers existants du projet
- Toutes les dépendances utilisées dans le code figurent dans `package.json`
- Le projet est structuré pour compiler avec `npm run build` (`tsc -b && vite build`)
- La configuration `base` de Vite est compatible GitHub Pages (dépôt de projet ou dépôt
  utilisateur)
