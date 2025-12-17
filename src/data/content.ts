import {
  Brain,
  Server,
  Layout,
  Wrench,
  type LucideIcon,
} from 'lucide-react';

// Personal Information
export const personalInfo = {
  name: 'Aditya Kumar',
  role: 'AI/ML Engineer & Full-Stack Developer',
  tagline: 'Software developer with experience in AI/ML, LLMs and computer vision, building practical full-stack applications and actively learning emerging technologies like agentic AI, RAG, and Web3.',
  email: 'adityakr00002@gmail.com',
  github: 'https://github.com/Adi51244',
  linkedin: 'https://www.linkedin.com/in/aditya-kumar-770118325/',
  resumeUrl: '/Resume_AI_ML.pdf',
};

// About Section
export const aboutContent = {
  description: `I am a software developer with experience in AI/ML and computer vision, focused on building practical, end-to-end applications. I enjoy solving real-world problems by combining machine learning, backend systems, and modern web technologies to deliver usable and scalable software.

My work includes developing computer vision pipelines using YOLO for applications such as retail automation, object detection, and real-time recognition, along with building backend services using FastAPI and Node.js for model inference and API-driven architectures. On the frontend, I work with React to create clean, responsive interfaces for dashboards and intelligent applications.

I have working knowledge of large language models (LLMs) and prompt engineering, and I am actively learning and implementing retrieval-augmented generation (RAG) and agentic AI pipelines. I have started building AI agents and experimenting with orchestration patterns to better understand how intelligent systems reason, interact, and scale in real-world scenarios.

I enjoy exploring new technologies, learning through hands-on projects, and continuously improving my engineering skills. My goal is to grow as an AI-focused software engineer by building intelligent, reliable systems that create real impact.`,
};

// Skills Data
export interface SkillItem {
  name: string;
  icon: string; // Devicon class or image URL
}

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'AI / Machine Learning',
    icon: Brain,
    skills: [
      { name: 'Python', icon: 'devicon-python-plain colored' },
      { name: 'TensorFlow', icon: 'devicon-tensorflow-original colored' },
      { name: 'PyTorch', icon: 'devicon-pytorch-original colored' },
      { name: 'OpenCV', icon: 'devicon-opencv-plain colored' },
      { name: 'Computer Vision', icon: 'devicon-opencv-plain colored' },
      { name: 'YOLOv8', icon: 'https://raw.githubusercontent.com/ultralytics/assets/main/logo/Ultralytics_Logotype_Reverse.svg' },
      { name: 'LLM', icon: 'https://cdn-icons-png.flaticon.com/512/4616/4616734.png' },
      { name: 'Generative AI', icon: 'https://cdn-icons-png.flaticon.com/512/8637/8637099.png' },
      { name: 'Google Colab', icon: 'devicon-google-plain colored' },
      { name: 'Kaggle', icon: 'devicon-kaggle-original colored' },
      { name: 'Roboflow', icon: 'devicon-opencv-plain colored' },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: [
      { name: 'FastAPI', icon: 'devicon-fastapi-plain colored' },
      { name: 'Flask', icon: 'devicon-flask-original' },
      { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
      { name: 'Express', icon: 'devicon-express-original' },
      { name: 'Firebase', icon: 'devicon-firebase-plain colored' },
      { name: 'Supabase', icon: 'devicon-supabase-plain colored' },
      { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
      { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
    ],
  },
  {
    title: 'Frontend',
    icon: Layout,
    skills: [
      { name: 'React', icon: 'devicon-react-original colored' },
      { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
      { name: 'Tailwind', icon: 'devicon-tailwindcss-original colored' },
      { name: 'Material UI', icon: 'devicon-materialui-plain colored' },
      { name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored' },
      { name: 'HTML5', icon: 'devicon-html5-plain colored' },
      { name: 'CSS3', icon: 'devicon-css3-plain colored' },
    ],
  },
  {
    title: 'Tools & Deployment',
    icon: Wrench,
    skills: [
      { name: 'Git', icon: 'devicon-git-plain colored' },
      { name: 'GitHub', icon: 'devicon-github-original' },
      { name: 'GitHub Copilot', icon: 'https://github.githubassets.com/images/icons/copilot/cp-head-square.png' },
      { name: 'Cursor', icon: 'https://www.cursor.com/brand/icon.svg' },
      { name: 'VS Code', icon: 'devicon-vscode-plain colored' },
      { name: 'Eclipse', icon: 'devicon-eclipse-plain colored' },
      { name: 'Docker', icon: 'devicon-docker-plain colored' },
      { name: 'Vercel', icon: 'devicon-vercel-original' },
      { name: 'Render', icon: 'https://avatars.githubusercontent.com/u/36424661?s=200&v=4' },
      { name: 'Railway', icon: 'devicon-railway-original' },
    ],
  },
];

// Projects Data
export interface Project {
  title: string;
  subtitle?: string;
  problem: string;
  solution: string;
  techStack: string[];
  metrics: string[];
  github: string;
  demo?: string;
  featured: boolean;
  category: 'ai-ml' | 'web' | 'game' | 'backend';
}

export const projects: Project[] = [
  // ==================== AI/ML & Computer Vision Projects ====================
  {
    title: 'VyapaarAI',
    subtitle: 'AI Self-Checkout System',
    problem: 'Traditional retail checkout is slow, labor-intensive, and creates bottlenecks during peak hours.',
    solution: 'Built an AI-powered self-service checkout system using computer vision for instant product recognition without barcodes.',
    techStack: ['YOLOv8', 'FastAPI', 'React', 'MongoDB', 'Material UI'],
    metrics: [
      'mAP 98.8%',
      'Precision 97.1%',
      'Recall 98.3%',
      '75% faster checkout',
    ],
    github: 'https://github.com/Adi51244/self-checkout-system',
    demo: '',
    featured: true,
    category: 'ai-ml',
  },
  {
    title: 'E-commerce Fraud Detection',
    subtitle: 'ML-Based Fraud Classification',
    problem: 'Online transactions are vulnerable to fraud, causing significant financial losses.',
    solution: 'Developed a real-time fraud detection system with multi-factor risk analysis and automated decision making.',
    techStack: ['PyTorch', 'FastAPI', 'React', 'PostgreSQL', 'Redis'],
    metrics: [
      'Accuracy 99.5%',
      'Precision 98.7%',
      'Recall 97.9%',
      '<100ms response',
    ],
    github: 'https://github.com/Adi51244/ECOMMERCE_FRAUD_DETECTION',
    demo: 'https://ecommerce-fraud-detection.vercel.app/',
    featured: true,
    category: 'ai-ml',
  },
  {
    title: 'LeafIQ',
    subtitle: 'AI-Powered Plant Disease Detection System',
    problem: 'Early plant disease detection is critical for crop yield but requires expert knowledge that farmers often lack access to.',
    solution: 'Built a multi-AI intelligence system combining YOLOv8 detection with Gemini AI, Google Search, Wikipedia, and PlantNet APIs for comprehensive disease analysis and treatment recommendations.',
    techStack: ['YOLOv8', 'Flask', 'Gemini AI', 'OpenCV', 'Python', 'Bootstrap'],
    metrics: [
      '85-95% detection accuracy',
      '29+ diseases supported',
      '10+ plant species',
      '<3 sec processing',
    ],
    github: 'https://github.com/Adi51244/AI-Powered-Plant-Disease-Detection-System',
    demo: 'https://leafiq.up.railway.app/',
    featured: true,
    category: 'ai-ml',
  },
  {
    title: 'Human Detection & Age/Gender Classification',
    subtitle: 'Real-time Demographic Analysis System',
    problem: 'Automated demographic analysis needed for retail analytics, security systems, and market research.',
    solution: 'Built real-time computer vision system using YOLOv8 for human detection and ResNet-18 for demographic classification with dual interface (Web + Desktop).',
    techStack: ['YOLOv8', 'PyTorch', 'ResNet-18', 'Flask', 'OpenCV', 'Python'],
    metrics: [
      '93% gender accuracy',
      '9 age groups',
      '25-30 FPS real-time',
      'Web + Desktop apps',
    ],
    github: 'https://github.com/Adi51244/Human-Detection-Age-Gender-Classification',
    featured: true,
    category: 'ai-ml',
  },
  {
    title: 'Damaged Box Detection',
    subtitle: 'Quality Control CV System',
    problem: 'Manual inspection of packaging quality is time-consuming and prone to human error in logistics.',
    solution: 'Developed a computer vision system to automatically detect damaged boxes in warehouse/logistics environments.',
    techStack: ['YOLOv8', 'Python', 'OpenCV', 'Deep Learning'],
    metrics: [
      'Automated inspection',
      'Real-time detection',
      'Quality assurance',
    ],
    github: 'https://github.com/Adi51244/Damaged_Box',
    featured: false,
    category: 'ai-ml',
  },

  // ==================== Web Applications ====================
  {
    title: 'CinemaSearch',
    subtitle: 'Movie Search & Favorites App',
    problem: 'Finding and organizing movies across multiple platforms is tedious and fragmented.',
    solution: 'Built a modern movie search app with OMDb API integration, favorites system, and beautiful glassmorphism UI.',
    techStack: ['React', 'Material UI', 'OMDb API', 'LocalStorage'],
    metrics: [
      'Real-time search',
      'Favorites with persistence',
      'Responsive design',
    ],
    github: 'https://github.com/Adi51244/CinemaSearch',
    demo: 'https://cinema-search-one.vercel.app/',
    featured: true,
    category: 'web',
  },
  {
    title: 'Job Application Portal',
    subtitle: 'Full-Stack Recruitment Platform',
    problem: 'Job seekers and recruiters need a centralized platform to manage applications efficiently.',
    solution: 'Created a full-stack job portal with user authentication, application tracking, and admin dashboard.',
    techStack: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    metrics: [
      'User & Admin dashboards',
      'Application tracking',
      'Secure authentication',
    ],
    github: 'https://github.com/Adi51244/Job-Application-Portal',
    featured: false,
    category: 'web',
  },

  // ==================== Fun Games ====================
  {
    title: 'Spaceship Maze Puzzle',
    subtitle: 'Mind-Bending Space Navigation Game',
    problem: 'Puzzle game lovers want challenging brain teasers with engaging visuals and progression systems.',
    solution: 'Created an addictive maze puzzle game with 25 randomly generated levels, scoring system, and cyberpunk aesthetics.',
    techStack: ['JavaScript', 'CSS3', 'HTML5', 'Vercel'],
    metrics: [
      '25 difficulty levels',
      'Random maze generation',
      'Star rating system',
    ],
    github: 'https://github.com/Adi51244/SPACESHIP-MAZE',
    demo: 'https://spaceship-maze.vercel.app/',
    featured: true,
    category: 'game',
  },

  // ==================== Backend/API Projects ====================
  {
    title: 'StudyMate Backend',
    subtitle: 'Educational Platform API',
    problem: 'Students need a centralized platform for study resources and collaboration.',
    solution: 'Developed a scalable backend API for an educational platform with user management and content delivery.',
    techStack: ['Python', 'FastAPI', 'MongoDB', 'JWT Auth'],
    metrics: [
      'RESTful API design',
      'Secure authentication',
      'Scalable architecture',
    ],
    github: 'https://github.com/Adi51244/studymate-backend',
    featured: false,
    category: 'backend',
  },
];

// Project categories for filtering
export const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'ai-ml', label: 'AI/ML & CV' },
  { id: 'web', label: 'Web Apps' },
  { id: 'game', label: 'Games' },
  { id: 'backend', label: 'Backend' },
];

// Experience Data
export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
  type: 'work' | 'achievement';
}

export const experiences: Experience[] = [
  {
    title: 'ML Lead',
    company: 'VyapaarAI (Startup)',
    period: '2024',
    description: [
      'Led development of YOLOv8-based product recognition system achieving 98.8% mAP',
      'Architected FastAPI backend for real-time inference with <100ms latency',
      'Built React dashboard for inventory management and analytics',
    ],
    type: 'work',
  },
  {
    title: 'Campus Placement',
    company: 'Associate Application Support Engineer',
    period: '2024',
    description: [
      'Received pre-placement offer for AASE role',
      'Selected through rigorous technical assessment process',
    ],
    type: 'achievement',
  },
  {
    title: 'Ideathon Participant',
    company: 'Multiple Hackathons',
    period: '2023 - 2024',
    description: [
      'Participated in ideathons focused on AI/ML solutions',
      'Developed working prototypes under time constraints',
      'Collaborated with cross-functional teams',
    ],
    type: 'achievement',
  },
];

// Navigation Links
export const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];
