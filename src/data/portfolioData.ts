import { Project, Milestone, SkillCategory } from '../types';

const baseUrl = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

export const PERSONAL_INFO = {
  name: 'Alex Chen',
  role: 'Full-Stack Developer & UI/UX Designer',
  tagline: 'I Build Digital Experiences.',
  status: 'Open to Internships & Opportunities',
  statusBadge: 'AVAILABLE FOR HIRE',
  university: 'Tech University',
  educationLevel: 'CS Junior',
  graduationYear: 'Class of 2026',
  location: 'San Francisco Bay Area',
  seeking: "Summer '25",
  seekingRole: 'Actively Seeking',
  shippedCount: '3+ Shipped',
  shippedDesc: 'Full Applications',
  bio: "I'm a tech enthusiast and aspiring Full-Stack Developer & UI/UX Designer passionate about solving real-world problems through technology, thoughtful design, and continuous learning.",
  email: 'alex.chen.dev@university.edu',
  linkedin: 'linkedin.com/in/alexchen-dev',
  github: 'https://github.com',
  timezone: 'Based in San Francisco (Pacific Time)',
  timezoneTag: 'UTC-7 / ACTIVE',
  avatarImage: `${baseUrl}assets/aistudio/Image_3_3cc8495b.jpeg`,
  hotlinkAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9iIRpdIo0tkSaDiCxeB-mzBzlDDJsKWSR5Yq0yqGzb7wxWjZwMNc6ZYpQAmQKgvEZZPpRoIG3ydNN8o2xqchWEQ7eO9h-sptUizBRf0yZ8YGOr3tgmV0KI72W9ufDJYR_M7femDJEnX55LgiiPfrM536Y8unBDNWJLG0YFs3ke8iqxyjgg_pC8WUkTBNIXUbSYdXpYBrTcxftcKj1PPJIDLiWcYpi0hjDT3WiHFuOfletnMQYzIsYCg',
  logoUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1XgGFfN1zSgJd8wEKdyTZ8EnMW0OaLt1PHu2swzdnfjD_nbdeMBFwE2Wb15e8scjPQIeImhz9y2kQaRAC22yO7vXmVkgyfWJuyfbYnBv6cg0J6ZGFmBw6iok1y1QRJ3O3n_tk-cO9z1G3vhedeyJNKeDe8Lf48i0lmJ14rLhmkE4HRGMBvmKhL_fSfncmXXMpylj2z1hm3fAMBwDxgirL1afr-pUY-JCrs6K6YTzpms01NpdNmVrNU_peQ',
};

export const CODE_SNIPPET = `const student = {
  name: 'Alex Chen',
  role: 'Builder & Designer',
  passions: ['Web Dev', 'Clean UI', 'Distributed Systems'],
  status: 'Ready to build impactful software'
};`;

export const TECH_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend',
    code: '01',
    icon: 'desktop_windows',
    color: 'text-secondary',
    description: 'Crafting fluid client-side interfaces with modern reactive patterns and semantic markups.',
    skills: ['React', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5 / CSS3', 'TypeScript'],
  },
  {
    title: 'Backend & Logic',
    code: '02',
    icon: 'dns',
    color: 'text-primary',
    description: 'Engineering resilient application logic, relational data persistence, and performant REST APIs.',
    skills: ['Python', 'Node.js', 'Express', 'RESTful APIs', 'PostgreSQL'],
  },
  {
    title: 'Tools & Workflow',
    code: '03',
    icon: 'construction',
    color: 'text-tertiary',
    description: 'Leveraging industry standard versioning, prototyping, and modern continuous deployment systems.',
    skills: ['Git & GitHub', 'Figma', 'VS Code', 'Postman', 'Vercel'],
  },
];

export const ABOUT_HIGHLIGHTS = [
  {
    kicker: 'Current Focus',
    title: 'Currently Learning',
    description: 'Deepening architectural mastery in Full-Stack React pipelines, Next.js server components, relational schema indexing, and distributed systems fundamentals.',
    icon: 'psychology',
    colorClass: 'bg-primary-container/20 text-primary border-primary/20',
  },
  {
    kicker: 'Craft Passion',
    title: 'What I Enjoy Building',
    description: 'Interactive, data-rich web applications, real-time productivity tooling, responsive component kits, and dashboards that communicate complex metrics effortlessly.',
    icon: 'palette',
    colorClass: 'bg-secondary-container/20 text-secondary border-secondary/20',
  },
  {
    kicker: 'Vision',
    title: 'My Career Goal',
    description: 'Securing a Summer 2025 Software Engineering or Product Design internship to collaborate with high-performing teams, build production-grade features, and accelerate engineering growth.',
    icon: 'flag',
    colorClass: 'bg-tertiary-container/20 text-tertiary border-tertiary/20',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'aurastudy',
    title: 'AuraStudy — Student Productivity App',
    subtitle: 'An intuitive workspace designed for university students to synchronize study timers, organize weekly task kanbans, and eliminate academic burnout.',
    categoryBadge: 'STUDENT PRODUCTIVITY',
    description: 'An intuitive workspace designed for university students to synchronize study timers, organize weekly task kanbans, and eliminate academic burnout.',
    tags: ['UI Design', 'JavaScript', 'Productivity', 'Tailwind CSS'],
    image: `${baseUrl}assets/aistudio/Image_6_d020b2ab.jpeg`,
    hotlinkImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXjFcSrqzr-ordMNQCKExadL4NWeS3dqvSI_WBQAoSElYDQRdSuyjoL-FXcl24GQZ44fNzheDVYqGDoCbl03vMfC-z3gHjy8tcflVDd0658T3LjiOT3kwOxJU1vdzgAjootuH0p_NMJT5XP6d31HX1mLbRFxAfrrkcV3uLQbKIHfHMpokAY73xC52_7CC0N0FNsXotOG5cIocRpgryo0gypV43fn8F151LoAV03K4XVebt_aFjY9hqHQ',
    githubUrl: 'https://github.com',
    demoUrl: '#',
    overview: 'AuraStudy streamlines collegiate workflows by unifying class schedules, assignments kanban, and focused Pomodoro study sessions into a synchronized, distraction-free cockpit.',
    highlights: [
      'Interactive circular study session timer with custom interval controls',
      'Drag-and-drop weekly calendar timeline with schedule conflict detection',
      'Kanban board for assignments categorized by To Do, In Progress, and Completed',
      'Daily goal progression and streak gamification mechanics',
    ],
    metrics: ['+38% Daily Study Adherence', '<100ms Task Sync Latency', '4.9/5 Student Usability Score'],
  },
  {
    id: 'flux-finance',
    title: 'Flux Finance — Personal Budget Dashboard',
    subtitle: 'A clean financial tracking dashboard featuring interactive monthly savings analytics, category expense breakdown charts, and budget goal pacing.',
    categoryBadge: 'FINTECH ANALYTICS',
    description: 'A clean financial tracking dashboard featuring interactive monthly savings analytics, category expense breakdown charts, and budget goal pacing.',
    tags: ['React', 'Data Viz', 'Responsive', 'Chart.js'],
    image: `${baseUrl}assets/aistudio/Image_5_d0df9751.jpeg`,
    hotlinkImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxuk6XR6Zi88elY7c-ke2bzTj6PG3H2LydBPGMu4So3eTl0PspYvCIKzZgqfShB_lb2B9X7GIqq0aTgxqDtmrJInF6c5tOgODTHoNPXonRRlsB7ddDOLbCsPvjKwFWx5wMd_tqDSU--mav9HRaUg9z2BhrdX8pHe275T828lEVqxoY_TxNZXeXkaNBsXugr2nPWX3fkTr7qNh9ZYGVEEF5dKtlTgdDsKA4rPhGjVrVF9L5VeVScVUdUg',
    githubUrl: 'https://github.com',
    demoUrl: '#',
    overview: 'Flux Finance gives users clarity into cashflow dynamics through interactive monthly savings trajectories, donut category breakdowns, and goal target tracking.',
    highlights: [
      'Real-time SVG savings curve with interactive month-by-month trajectory points',
      'Segmented expense donut chart highlighting Groceries, Housing, Transport & Entertainment',
      'Dynamic budget goal pacing bars (Vacation Fund, New Car) with auto-saving calculations',
      'Recent transactions ledger with itemized merchant metadata',
    ],
    metrics: ['$24,680+ Tracked Balance', '39.4% Average User Savings Rate', 'Zero-Latency Filter Transitions'],
  },
  {
    id: 'uniswap-marketplace',
    title: 'UniSwap — Campus Marketplace',
    subtitle: 'A localized campus platform for university students to securely buy, trade, and discover textbooks, hardware, and dorm essentials.',
    categoryBadge: 'CAMPUS COMMERCE',
    description: 'A localized campus platform for university students to securely buy, trade, and discover textbooks, hardware, and dorm essentials.',
    tags: ['Web Dev', 'UX Research', 'Prototyping', 'REST API'],
    image: `${baseUrl}assets/aistudio/Image_4_9dc7dec6.jpeg`,
    hotlinkImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgt4MZttKoZUyckjRK-IUX7Iq6kB5VbKJa4f_8lUI6mluqd7KeS45V50kZxxRLG73I2STM7Hg6vn6qaffUhatXzr74g-9VZkkhlKQbYp44UPtqiQDCfKfocfqjmsTcoWNX1It_ApbeDPJCbQWraER7_gDxoZWq1BJqYkoc20FwlqCbr7CxLUYT5QHgcAmbgmXnDdgkX5NdTsqwmxIzZguNTxcQxGV8QPiHoYvH-mYQvxHCLwGC20vnxg',
    githubUrl: 'https://github.com',
    demoUrl: '#',
    overview: 'UniSwap tackles campus commerce friction with verified student listings, smart localized geo-hub filtering, textbook course lookup, and fair market price indexing.',
    highlights: [
      'Multi-hub filtering for campus locations (Main Library, Union, North Dorms)',
      'Condition-based search (Mint, Great, Used, New) with price range selectors',
      'Item card grid displaying seller identity, price, and condition stamps',
      'Optimized image thumbnail loading with instant filter responsiveness',
    ],
    metrics: ['500+ Campus Verified Users', 'Average 24h Item Resale Turnaround', '100% Student-to-Student Security'],
  },
];

export const SKILL_PILLARS = [
  {
    title: 'Development',
    icon: 'terminal',
    color: 'text-secondary',
    skills: [
      { text: 'Modern JavaScript (ES6+) & React.js', highlight: true },
      { text: 'Python & Algorithmic Logic', highlight: false },
      { text: 'RESTful API Architecture', highlight: false },
      { text: 'Responsive Web Layouts (CSS3/Tailwind)', highlight: false },
      { text: 'Relational Database Concepts (SQL)', highlight: false },
    ],
  },
  {
    title: 'Design & Product',
    icon: 'draw',
    color: 'text-primary',
    skills: [
      { text: 'Figma Prototyping & Wireframing', highlight: true },
      { text: 'Design System Tokens & Components', highlight: false },
      { text: 'Information Architecture (IA)', highlight: false },
      { text: 'Accessibility (WCAG AA/AAA Guidelines)', highlight: false },
      { text: 'User Journey Mapping & Usability', highlight: false },
    ],
  },
  {
    title: 'Professional',
    icon: 'groups',
    color: 'text-tertiary',
    skills: [
      { text: 'Git Version Control & PR Workflow', highlight: true },
      { text: 'Rigorous Problem Decomposition', highlight: false },
      { text: 'Technical Writing & Documentation', highlight: false },
      { text: 'Cross-Functional Team Collaboration', highlight: false },
      { text: 'Curiosity & Fast Self-Directed Learning', highlight: false },
    ],
  },
];

export const JOURNEY_MILESTONES: Milestone[] = [
  {
    year: '2022',
    tag: 'First Steps',
    title: 'Discovered Programming',
    description: 'Wrote my first lines of Python and HTML; built basic automation scripts and discovered a genuine, enduring passion for software creation.',
  },
  {
    year: '2023',
    tag: 'University Core',
    title: 'Foundations & Academic Deep Dive',
    description: 'Completed rigorous university coursework in Data Structures, Algorithms, Discrete Mathematics, and Object-Oriented Software Design with honors.',
  },
  {
    year: '2024',
    tag: 'Product Incubation',
    title: 'First Full-Stack Projects',
    description: 'Architected and shipped AuraStudy and Flux Finance. Immersed in modern React ecosystems, state machines, Tailwind design tokens, and user research.',
  },
  {
    year: 'PRESENT / 2025',
    tag: 'Current Milestone',
    title: "Seeking Summer '25 Internship",
    description: 'Expanding knowledge in scalable cloud deployment, microservice architectures, and eagerly connecting with engineering leaders to make immediate impact this summer.',
    isCurrent: true,
  },
];
