export const ROLES = [
  "Ingénieur DevOps / Cloud",
  "DevOps Engineer",
  "CI/CD Specialist",
  "React Developer",
  "Cloud Practitioner",
  "Technical Author · 23 Books",
];

export const STATS = [
  { value: 23, label: "Livres publiés", suffix: "" },
  { value: 6, label: "Projets réalisés", suffix: "+" },
  { value: 2, label: "Apps en production", suffix: "" },
  { value: 2026, label: "Alternance dès Sept.", suffix: "" },
];

export const SKILLS = [
  // Cloud & Infra
  { name: "AWS EC2", category: "Cloud", level: 72, color: "#FF9900" },
  { name: "Linux", category: "DevOps", level: 80, color: "#FCC624" },
  { name: "Nginx", category: "DevOps", level: 74, color: "#009639" },
  { name: "GitHub Actions", category: "DevOps", level: 84, color: "#2088FF" },
  { name: "Git", category: "DevOps", level: 85, color: "#F05032" },
  // Frontend / Languages
  { name: "React", category: "Frontend", level: 78, color: "#61DAFB" },
  { name: "TypeScript", category: "Languages", level: 80, color: "#3178C6" },
  { name: "JavaScript", category: "Languages", level: 82, color: "#F7DF1E" },
  { name: "Vite", category: "Frontend", level: 72, color: "#646CFF" },
  // Data
  { name: "Supabase", category: "Backend", level: 74, color: "#3ECF8E" },
  { name: "PostgreSQL", category: "Backend", level: 68, color: "#336791" },
  // En apprentissage
  { name: "Docker", category: "DevOps", level: 42, color: "#2496ED" },
  { name: "Terraform", category: "Cloud", level: 36, color: "#7B42BC" },
  { name: "Kubernetes", category: "DevOps", level: 30, color: "#326CE5" },
];

export const PROJECTS = [
  {
    id: "1",
    name: "Dilane Shop",
    tagline: "Plateforme e-commerce full-stack",
    description:
      "Solution e-commerce complète avec catalogue produits, panier, paiement sécurisé et tableau de bord admin pour la gestion des stocks, commandes et clients. Déployé sur AWS EC2.",
    tags: ["E-Commerce", "Full-Stack", "Admin Dashboard", "AWS"],
    images: ["/projects/shop-1.jpg","/projects/shop-2.jpg","/projects/shop-3.jpg","/projects/shop-4.jpg","/projects/shop-5.jpg","/projects/shop-6.jpg","/projects/shop-7.jpg","/projects/shop-8.jpg","/projects/shop-9.jpg","/projects/shop-10.jpg"],
    video: null,
    liveUrl: "https://dilane-shop.store",
    githubUrl: "https://github.com/wankamdypuedilane/e-commerce",
    featured: true,
    accent: "#8b5cf6",
  },
  {
    id: "2",
    name: "EduMaths",
    tagline: "Industrialisation DevOps d'une app web",
    description:
      "Application éducative mise en production sur AWS EC2 avec pipeline CI/CD GitHub Actions en 2 workflows, domaine personnalisé, HTTPS/TLS actif et 100 % des merges via Pull Request approuvée.",
    tags: ["DevOps", "AWS EC2", "CI/CD", "GitHub Actions", "React"],
    images: [],
    video: "https://youtu.be/fTV0HRezu5k",
    liveUrl: "https://edumaths-app.fr",
    githubUrl: "https://github.com/wankamdypuedilane/EduMaths-Project-Overview",
    featured: true,
    accent: "#22d3ee",
  },
  {
    id: "3",
    name: "Dilane Immobilier",
    tagline: "Site d'agence immobilière",
    description:
      "Site de listings immobiliers avec filtres de recherche avancés, fiches détaillées et système de contact pour acheteurs et locataires. Responsive et optimisé SEO.",
    tags: ["Immobilier", "Next.js", "UI/UX"],
    images: ["/projects/immobilier-1.jpg","/projects/immobilier-2.jpg","/projects/immobilier-3.jpg","/projects/immobilier-4.jpg"],
    video: null,
    liveUrl: null,
    githubUrl: "https://github.com/wankamdypuedilane/Agence-Immobiliere",
    featured: false,
    accent: "#10b981",
  },
  {
    id: "4",
    name: "Emma Food",
    tagline: "Site restaurant cuisine camerounaise",
    description:
      "Site web pour une marque de cuisine camerounaise : menu complet, galerie photos et système de réservation en ligne. Identité visuelle chaleureuse et UI moderne.",
    tags: ["Restaurant", "Landing Page", "UI/UX"],
    images: ["/projects/emmafood-1.jpg","/projects/emmafood-2.jpg","/projects/emmafood-3.jpg","/projects/emmafood-4.jpg"],
    video: null,
    liveUrl: null,
    githubUrl: "https://github.com/wankamdypuedilane/Resto-Camerounais",
    featured: false,
    accent: "#f59e0b",
  },
  {
    id: "5",
    name: "Todo List App",
    tagline: "Gestion de tâches avec React",
    description:
      "Application de gestion de tâches construite avec React — ajout, complétion, filtrage et suppression de tâches avec gestion d'état locale et interactions fluides.",
    tags: ["React", "State Management"],
    images: [],
    video: "https://youtu.be/58LYVyd34ns",
    liveUrl: null,
    githubUrl: "https://github.com/wankamdypuedilane/Listes-de-taches",
    featured: false,
    accent: "#ec4899",
  },
  {
    id: "6",
    name: "Snake Game",
    tagline: "Jeu classique from scratch",
    description:
      "Jeu Snake classique développé from scratch avec l'API Canvas — contrôles clavier, score, vitesse progressive et détection de game over avec redémarrage.",
    tags: ["Jeu", "Canvas", "JavaScript"],
    images: [],
    video: "https://youtu.be/lFABK0sRxw0",
    liveUrl: null,
    githubUrl: "https://github.com/wankamdypuedilane/Projet-Snake",
    featured: false,
    accent: "#22c55e",
  },
];

export type BookCategory = "DevOps" | "Cloud" | "Backend" | "Languages";

export const BOOKS = [
  { id: "1",  title: "Docker",          subtitle: "Master containerization",             category: "DevOps"    as BookCategory, amazonUrl: "https://www.amazon.com/dp/B0GXGPBGJF", color: "#2496ED", cover: "/covers/docker.png" },
  { id: "2",  title: "Kubernetes",      subtitle: "Container orchestration",             category: "DevOps"    as BookCategory, amazonUrl: "https://www.amazon.com/dp/B0GX33NGCZ", color: "#326CE5", cover: "/covers/kubernetes.png" },
  { id: "3",  title: "Ansible",         subtitle: "Infrastructure automation",           category: "DevOps"    as BookCategory, amazonUrl: "https://www.amazon.com/dp/B0H1GW7M28", color: "#EE0000", cover: "/covers/ansible.png" },
  { id: "4",  title: "Jenkins",         subtitle: "Continuous integration",              category: "DevOps"    as BookCategory, amazonUrl: "https://www.amazon.com/dp/B0GXWH6DYN", color: "#D33833", cover: "/covers/jenkins.png" },
  { id: "5",  title: "GitLab CI/CD",    subtitle: "Advanced DevOps pipelines",           category: "DevOps"    as BookCategory, amazonUrl: "https://www.amazon.com/dp/B0GXGZDJQ2", color: "#FC6D26", cover: "/covers/gitlab.png" },
  { id: "6",  title: "GitHub Actions",  subtitle: "Automation with GitHub",              category: "DevOps"    as BookCategory, amazonUrl: "https://www.amazon.com/dp/B0GX38STXM", color: "#2088FF", cover: "/covers/github-actions.png" },
  { id: "7",  title: "Linux",           subtitle: "System administration",               category: "DevOps"    as BookCategory, amazonUrl: "https://www.amazon.com/dp/B0GX2VYYL1", color: "#FCC624", cover: "/covers/linux.png" },
  { id: "8",  title: "Nginx",           subtitle: "Web server & reverse proxy",          category: "DevOps"    as BookCategory, amazonUrl: "https://www.amazon.com/dp/B0GX3B77MQ", color: "#009639", cover: "/covers/nginx.png" },
  { id: "9",  title: "Git",             subtitle: "Version control",                     category: "DevOps"    as BookCategory, amazonUrl: "https://www.amazon.com/dp/B0GXQN56V3", color: "#F05032", cover: "/covers/git.png" },
  { id: "10", title: "AWS",             subtitle: "Amazon Web Services",                 category: "Cloud"     as BookCategory, amazonUrl: "https://www.amazon.com/dp/B0H1GT96LJ", color: "#FF9900", cover: "/covers/aws.png" },
  { id: "11", title: "Azure",           subtitle: "Microsoft Cloud Platform",            category: "Cloud"     as BookCategory, amazonUrl: "https://www.amazon.com/dp/B0GY5FTFCF", color: "#0078D4", cover: "/covers/azure.png" },
  { id: "12", title: "Terraform",       subtitle: "Infrastructure as Code",              category: "Cloud"     as BookCategory, amazonUrl: "https://www.amazon.com/dp/B0GXXCKT82", color: "#7B42BC", cover: "/covers/terraform.png" },
  { id: "13", title: "Node.js",         subtitle: "Server-side JavaScript",              category: "Backend"   as BookCategory, amazonUrl: "https://www.amazon.com/dp/B0GZ7WBVNR", color: "#339933", cover: "/covers/nodejs.png" },
  { id: "14", title: "PHP",             subtitle: "Backend web development",             category: "Backend"   as BookCategory, amazonUrl: "https://www.amazon.com/dp/B0GX369QN8", color: "#777BB4", cover: "/covers/php.png" },
  { id: "15", title: "Symfony",         subtitle: "Professional PHP framework",          category: "Backend"   as BookCategory, amazonUrl: "https://www.amazon.com/dp/B0H17J5W3X", color: "#1A1A1A", cover: "/covers/symfony.png" },
  { id: "16", title: "Java",            subtitle: "Object-oriented programming",         category: "Backend"   as BookCategory, amazonUrl: "https://www.amazon.com/dp/B0GLZKW3WH", color: "#ED8B00", cover: "/covers/java.png" },
  { id: "17", title: "TypeScript",      subtitle: "Typed JavaScript",                    category: "Languages" as BookCategory, amazonUrl: "https://www.amazon.com/dp/B0GZMZFLKZ", color: "#3178C6", cover: "/covers/typescript.png" },
  { id: "18", title: "JavaScript",      subtitle: "The language of the web",             category: "Languages" as BookCategory, amazonUrl: "https://www.amazon.com/dp/B0GX33VWVF", color: "#F7DF1E", cover: "/covers/javascript.png" },
  { id: "19", title: "Python",          subtitle: "Versatile programming",               category: "Languages" as BookCategory, amazonUrl: "https://www.amazon.com/dp/B0GX2Y4N14", color: "#3776AB", cover: "/covers/python.png" },
  { id: "20", title: "C#",              subtitle: ".NET & Microsoft development",        category: "Languages" as BookCategory, amazonUrl: "https://www.amazon.com/dp/B0GZJY8YG4", color: "#512BD4", cover: "/covers/csharp.png" },
  { id: "21", title: "Angular",         subtitle: "Google frontend framework",           category: "Languages" as BookCategory, amazonUrl: "https://www.amazon.com/dp/B0GX3CR1SM", color: "#DD0031", cover: "/covers/angular.png" },
  { id: "22", title: "Flutter",         subtitle: "Cross-platform mobile apps",          category: "Languages" as BookCategory, amazonUrl: "https://www.amazon.com/dp/B0GX2ZPRYC", color: "#02569B", cover: "/covers/flutter.png" },
  { id: "23", title: "HTML & CSS",      subtitle: "Web fundamentals",                    category: "Languages" as BookCategory, amazonUrl: "https://www.amazon.com/dp/B0GX2YSLR1", color: "#E34F26", cover: "/covers/html.png" },
];

export const TIMELINE = [
  {
    year: "2020",
    title: "Baccalauréat Scientifique",
    subtitle: "Série C — Mention Bien",
    description: "Diplômé avec mention, solide base en mathématiques et physique.",
    type: "education",
  },
  {
    year: "2021 – 2024",
    title: "Licence en Mécatronique",
    subtitle: "École Polytechnique de Yaoundé — Mention Bien",
    description: "Parcours pluridisciplinaire couvrant l'électronique, la mécanique, l'automatisme et l'informatique industrielle. Diplômé avec mention Bien.",
    type: "education",
  },
  {
    year: "2023",
    title: "Pivot vers le Développement Web",
    subtitle: "Auto-formation — JavaScript, TypeScript, React",
    description: "Décision de basculer vers le génie logiciel. Apprentissage intensif de JavaScript, TypeScript, React et des fondamentaux du web.",
    type: "milestone",
  },
  {
    year: "2025",
    title: "Découverte du DevOps & Cloud",
    subtitle: "AWS EC2, GitHub Actions, CI/CD",
    description: "Première mise en production réelle : domaine personnalisé, HTTPS/TLS, pipeline CI/CD GitHub Actions, déploiement AWS EC2. Début de l'apprentissage Docker & Terraform.",
    type: "milestone",
  },
  {
    year: "2025",
    title: "Auteur Technique — 23 Livres",
    subtitle: "Publié sur Amazon",
    description: "Publication de 23 livres techniques couvrant l'écosystème DevOps, Cloud et Backend. Partage de connaissances sur AWS, Docker, Nginx, GitHub Actions et plus.",
    type: "achievement",
  },
  {
    year: "2025 – 2027",
    title: "Cycle Ingénieur — ENIB",
    subtitle: "École Nationale d'Ingénieurs de Brest — Spécialisation Informatique / Web",
    description: "4ème année du cycle ingénieur. Spécialisation en informatique et web, avec un focus sur la fiabilité, l'automatisation et la qualité de livraison logicielle.",
    type: "education",
  },
  {
    year: "2026 – 2027",
    title: "Recherche alternance & stage ingénieur DevOps / Cloud",
    subtitle: "Alternance 12 mois · Sept. 2026 — Stage ingénieur 6 mois · Fév. 2027",
    description: "Disponible en alternance (12 mois) à partir de septembre 2026, puis en stage ingénieur (6 mois) à partir de février 2027. Ouvert à toute la France.",
    type: "current",
  },
];
