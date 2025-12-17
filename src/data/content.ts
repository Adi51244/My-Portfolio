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
}

export const projects: Project[] = [
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
  },
  {
    title: 'Plant Disease Detection',
    subtitle: 'AI-Powered Agricultural Tool',
    problem: 'Early plant disease detection is critical for crop yield but requires expert knowledge.',
    solution: 'Created a deep learning system that identifies plant diseases from leaf images with high accuracy.',
    techStack: ['TensorFlow', 'Python', 'Flask', 'OpenCV'],
    metrics: [
      'Multi-class classification',
      'Real-time inference',
      'Mobile-friendly UI',
    ],
    github: 'https://github.com/Adi51244/AI-Powered-Plant-Disease-Detection-System',
    featured: true,
  },
  {
    title: 'Human Detection & Classification',
    subtitle: 'Age & Gender Recognition',
    problem: 'Automated demographic analysis needed for retail analytics and security systems.',
    solution: 'Built a computer vision pipeline for real-time human detection with age and gender classification.',
    techStack: ['OpenCV', 'Deep Learning', 'Python', 'HTML/CSS'],
    metrics: [
      'Real-time processing',
      'Multi-person detection',
      'Age + Gender output',
    ],
    github: 'https://github.com/Adi51244/Human-Detection-Age-Gender-Classification',
    featured: false,
  },
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
  },
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
