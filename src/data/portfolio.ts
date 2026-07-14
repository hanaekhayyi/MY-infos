// ---------------------------------------------------------------------------
// Central data file for the portfolio.
// Edit the values here to update the content displayed across the site —
// no need to touch any component.
// ---------------------------------------------------------------------------

export const profile = {
  name: 'Hanae Khayyi',
  firstName: 'Hanae',
  lastName: 'Khayyi',
  title: 'Ingénieure Data & Intelligence Artificielle',
  shortTitle: 'Data & AI Engineer',
  tagline:
    "Ingénieure d'État en Ingénierie des Données & Intelligence Artificielle, orientée Data Science, Machine Learning et NLP. Je transforme des données complexes en solutions prédictives et décisionnelles, de la préparation des données au déploiement de pipelines IA, RAG et agents métier.",
  availability: 'Disponible pour un CDI à partir d\'août 2026',
  location: 'Casablanca',
  openTo: 'Rabat',
  email: 'hanaekhayyi7@gmail.com',
  phone: '+212 6 56 98 58 45',
  phoneHref: 'tel:+212656985845',
  linkedin: 'https://www.linkedin.com/in/hanae-khayyi/',
  github: 'https://github.com/hanaekhayyi',
  // Add your CV file to /public/cv/hanae-khayyi-cv.pdf to enable the download button.
  cvPath: `${import.meta.env.BASE_URL}cv/hanae-khayyi-cv.pdf`,
  about: [
    "Étudiante en 5ᵉ année à l'École Nationale des Sciences Appliquées d'Al Hoceïma, je me spécialise en ingénierie des données et intelligence artificielle. Mon parcours couvre l'ensemble du cycle de vie de la donnée : collecte, ingestion, modélisation avancée et visualisation décisionnelle.",
    "Ce qui me définit : une curiosité forte pour la science des données — comprendre non seulement comment construire des modèles, mais pourquoi ils fonctionnent, et comment les rendre utiles à l'échelle réelle. J'ai travaillé sur des architectures RAG, des systèmes de recommandation, des pipelines Big Data temps réel et des outils de veille augmentés par LLMs.",
  ],
  seekingTypes: ['CDI', 'Stage de fin d\'études', 'Collaboration recherche'],
};

export const kpis = [
  { value: '10+', label: 'Projets IA / Data' },
  { value: '4', label: 'Expériences pro & recherche' },
  { value: '6', label: 'Certifications' },
  { value: '5 ans', label: 'Formation ingénieure' },
];

export type Language = {
  name: string;
  level: string;
  badge: string;
  badgeVariant: 'native' | 'advanced' | 'intermediate';
};

export const languages: Language[] = [
  { name: 'Arabe', level: 'Langue maternelle', badge: 'Natif', badgeVariant: 'native' },
  { name: 'Français', level: 'Courant · scolarité en option française', badge: 'C1', badgeVariant: 'advanced' },
  { name: 'Anglais', level: 'Technique et professionnel', badge: 'B2', badgeVariant: 'intermediate' },
];

export type SkillCategory = {
  id: string;
  label: string;
  icon: string; // lucide-react icon name
  wide?: boolean;
  primary: string[];
  secondary?: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    label: 'Langages',
    icon: 'Code2',
    primary: ['Python', 'SQL'],
    secondary: ['R', 'Java', 'JavaScript', 'Scala'],
  },
  {
    id: 'data-engineering',
    label: 'Data Engineering',
    icon: 'Database',
    wide: true,
    primary: ['Apache Spark', 'Apache Kafka', 'Apache Flink', 'Airflow'],
    secondary: ['Hadoop', 'dbt', 'Pipelines ETL'],
  },
  {
    id: 'machine-learning',
    label: 'Machine Learning',
    icon: 'Network',
    primary: ['Scikit-learn', 'XGBoost'],
    secondary: ['PyTorch', 'TensorFlow', 'Keras'],
  },
  {
    id: 'nlp-llm',
    label: 'NLP & LLMs',
    icon: 'MessagesSquare',
    primary: ['Transformers', 'LangChain', 'HuggingFace'],
    secondary: [],
  },
  {
    id: 'rag-agents',
    label: 'RAG & Systèmes multi-agents',
    icon: 'GitBranch',
    primary: ['LangGraph', 'RAG', 'FAISS'],
    secondary: ['Mistral AI'],
  },
  {
    id: 'cloud-devops',
    label: 'Cloud & DevOps',
    icon: 'Cloud',
    primary: ['Azure', 'AWS', 'Docker'],
    secondary: ['Git', 'GitHub Actions'],
  },
  {
    id: 'databases',
    label: 'Bases de données',
    icon: 'HardDrive',
    primary: ['PostgreSQL', 'MongoDB', 'MySQL'],
    secondary: ['Redis', 'Cassandra'],
  },
  {
    id: 'bi',
    label: 'Business Intelligence',
    icon: 'BarChart3',
    primary: ['Power BI'],
    secondary: ['Matplotlib', 'Plotly', 'Streamlit', 'Grafana'],
  },
  {
    id: 'web-api',
    label: 'Développement Web & API',
    icon: 'Globe',
    primary: ['Flask', 'FastAPI'],
    secondary: ['React', 'Gradio'],
  },
];

export type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  duration: string;
  type: 'PFE' | 'Stage' | 'Recherche' | 'Dev Web';
  featured?: boolean;
  context: string;
  bullets: string[];
  tech: string[];
};

export const experiences: Experience[] = [
  {
    id: 'maroclear',
    company: 'Maroclear',
    role: 'Stagiaire PFE — IA & Systèmes Multi-Agents',
    period: 'Février – Août 2026',
    location: 'Casablanca',
    duration: '6 mois',
    type: 'PFE',
    featured: true,
    context:
      "Projet de fin d'études : concevoir un assistant intelligent capable de traiter automatiquement les demandes métier via une architecture multi-agents.",
    bullets: [
      "Conception d'une architecture multi-agents (classification, information, réglementaire, auto-remplissage) orchestrée avec LangGraph et LangChain",
      'Mise en place d\'un système RAG exploitant la base documentaire métier pour des réponses contextuelles précises',
      'Qualification automatique des demandes (incident P1–P4, réclamation), réduisant la charge de traitement manuel',
      'Déploiement en production via une API REST (FastAPI) conteneurisée avec Docker',
    ],
    tech: ['Python', 'LangChain', 'LangGraph', 'RAG', 'FastAPI', 'Docker'],
  },
  {
    id: 'capgemini',
    company: 'Capgemini Engineering',
    role: 'Stagiaire Ingénierie des Données',
    period: 'Juillet – Septembre 2025',
    location: 'Casablanca',
    duration: '2 mois',
    type: 'Stage',
    context:
      'Amélioration du pilotage interne des réservations grâce à un pipeline de données et des tableaux de bord dédiés.',
    bullets: [
      'Conception d\'un pipeline ETL complet : collecte, préparation et analyse des données de réservation interne',
      'Création de tableaux de bord Power BI interactifs pour le suivi des indicateurs métier en temps réel',
      'Automatisation de processus via Power Apps et Power Automate, avec un gain de productivité mesurable',
    ],
    tech: ['Power Apps', 'Power Automate', 'Power BI', 'SharePoint', 'ETL'],
  },
  {
    id: 'recherche',
    company: 'Université Abdelmalek Essaadi',
    role: 'Stagiaire Recherche — Deep Learning & NLP',
    period: 'Juillet – Septembre 2024',
    location: 'Al Hoceïma',
    duration: '2 mois',
    type: 'Recherche',
    context:
      'Travail de recherche appliquée sur la génération automatique de documentation de code à partir de modèles de langage.',
    bullets: [
      'Préparation de corpus textuels et entraînement de modèles de deep learning séquentiels',
      'Génération automatique de documentation de code via LLMs et techniques de NLP',
      'Évaluation comparative d\'architectures (métriques BLEU, ROUGE et critères métier)',
    ],
    tech: ['Python', 'PyTorch', 'LLMs', 'NLP', 'Transformers'],
  },
  {
    id: 'radem',
    company: 'RADEM',
    role: 'Stagiaire Développement Web Full-Stack',
    period: 'Juin – Juillet 2024',
    location: 'Meknès',
    duration: '1 mois',
    type: 'Dev Web',
    context:
      'Conception d\'une plateforme de gestion des demandes administratives, de la maquette au déploiement.',
    bullets: [
      'Développement d\'une plateforme web de gestion des demandes administratives, de la conception au déploiement',
      'Fonctionnalités : saisie, suivi en temps réel, validation et archivage des demandes',
      'Architecture MVC avec Flask, base de données MySQL et interface responsive',
    ],
    tech: ['Python', 'Flask', 'MySQL', 'JavaScript', 'HTML/CSS'],
  },
];

export type ProjectCategory = 'Machine Learning' | 'NLP' | 'RAG/LLM' | 'Big Data' | 'Cloud' | 'Business Intelligence';

export type Project = {
  id: string;
  name: string;
  categories: ProjectCategory[];
  featured?: boolean;
  problem: string;
  solution: string;
  tech: string[];
  githubUrl?: string;
  demoUrl?: string;
};

export const projects: Project[] = [
  {
    id: 'tarification-telecom',
    name: 'Système de tarification télécom prédictif',
    categories: ['Big Data', 'Machine Learning'],
    problem:
      "Optimiser la tarification télécom à partir de flux de données massifs et évolutifs en temps réel.",
    solution:
      'Pipeline de traitement temps réel et modélisation prédictive : analyse exploratoire, sélection de variables, puis entraînement de modèles de régression et de classification pour l\'optimisation tarifaire.',
    tech: ['Apache Spark', 'Flink', 'Kafka', 'Scikit-learn', 'Docker', 'MongoDB', 'Power BI'],
  },
  {
    id: 'recommandeur-emotions',
    name: 'Recommandeur basé sur les émotions',
    categories: ['NLP'],
    problem:
      'Personnaliser des recommandations à partir du contenu émotionnel exprimé dans un texte plutôt que de simples métadonnées.',
    solution:
      "Système de recommandation reposant sur la détection d'émotions dans le texte, avec classification multi-classes via des modèles Transformers pré-entraînés.",
    tech: ['Python', 'NLP', 'Transformers', 'Scikit-learn', 'HuggingFace'],
  },
  {
    id: 'document-analysis-chatbot',
    name: 'Document Analysis Chatbot — Architecture RAG',
    categories: ['RAG/LLM'],
    featured: true,
    problem:
      "Permettre l'extraction fiable de connaissances à partir de documents non structurés, sans hallucination du modèle.",
    solution:
      'Chatbot combinant indexation vectorielle, recherche sémantique et génération augmentée par LLM (RAG) pour répondre avec des réponses ancrées dans les documents sources.',
    tech: ['LangChain', 'Mistral AI', 'HuggingFace', 'FAISS', 'Gradio'],
  },
  {
    id: 'veille-mediatique',
    name: 'Assistant IA de veille médiatique',
    categories: ['Cloud', 'Business Intelligence'],
    problem:
      "Centraliser et analyser automatiquement un volume important d'informations médiatiques dispersées.",
    solution:
      "Pipeline data complet — ingestion, traitement temps réel, agrégation et analyse automatique de l'information par LLMs — déployé sur Azure.",
    tech: ['Azure', 'LLMs', 'Flask', 'Power BI', 'Azure Blob'],
  },
];

export const projectFilters: ProjectCategory[] = [
  'Machine Learning',
  'NLP',
  'RAG/LLM',
  'Big Data',
  'Cloud',
  'Business Intelligence',
];

export type EducationItem = {
  id: string;
  period: string;
  degree: string;
  school: string;
  mention?: string;
};

export const education: EducationItem[] = [
  {
    id: 'ensah',
    period: '2021 – 2026',
    degree: "Diplôme d'Ingénieure d'État · Ingénierie des Données & Intelligence Artificielle",
    school: "École Nationale des Sciences Appliquées d'Al Hoceïma (ENSAH), Maroc",
  },
  {
    id: 'bac',
    period: '2021',
    degree: 'Baccalauréat Sciences Physiques · Option française',
    school: 'Lycée Qualifiant Omar Ibn Al-Khattab, Meknès',
    mention: 'Mention Très Bien',
  },
];

export type Certification = {
  id: string;
  name: string;
  issuer: string;
  url: string;
};

export const certifications: Certification[] = [
  {
    id: 'aws-ml',
    name: 'AWS Educate Machine Learning Foundations',
    issuer: 'Amazon Web Services',
    url: 'https://www.credly.com/badges/e959ffb3-38a7-4bcf-b5ac-c1fc7c33b340/public_url',
  },
  {
    id: 'genai-career',
    name: "Préparer votre carrière dans l'IA Générative",
    issuer: 'Microsoft & LinkedIn Learning',
    url: 'https://www.linkedin.com/learning/certificates/2c8c8d1547fff7cca768ab643cc724b47b780391d7c5170491277da0855bbf76',
  },
  {
    id: 'python-intermediate',
    name: 'Python Intermediate',
    issuer: '365 Data Science',
    url: 'https://learn.365datascience.com/certificates/CC-638371D409/',
  },
  {
    id: 'power-bi',
    name: 'Power BI',
    issuer: '365 Data Science',
    url: 'https://learn.365datascience.com/certificates/CC-86A3C2CDCA/',
  },
  {
    id: 'intro-data-science',
    name: 'Introduction to Data and Data Science',
    issuer: '365 Data Science',
    url: 'https://learn.365datascience.com/certificates/CC-A4F5E1B891/',
  },
  {
    id: 'intro-data-engineering',
    name: 'Introduction to Data Engineering',
    issuer: '365 Data Science',
    url: 'https://learn.365datascience.com/certificates/CC-501B844DF4/',
  },
];

export const navLinks = [
  { href: '#hero', label: 'Accueil' },
  { href: '#about', label: 'À propos' },
  { href: '#skills', label: 'Compétences' },
  { href: '#experience', label: 'Expériences' },
  { href: '#projects', label: 'Projets' },
  { href: '#education', label: 'Formation' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
];
