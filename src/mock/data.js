// HEAD DATA
export const headData = {
  title: 'Eder Mazariegos | Site Reliability Engineer',
  lang: 'en',
  description: 'Portfolio of Eder Mazariegos - Site Reliability Engineer specializing in cloud infrastructure, DevOps, and scalable systems.',
};

// HERO DATA
export const heroData = {
  img: 'em_jr.png',
  title: 'Hi, my name is',
  name: 'Eder Mazariegos',
  subtitle: 'Site Reliability Engineer',
  cta: 'Download Resume',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I am a motivated, experienced, detail-oriented Site Reliability Engineer (SRE) highly regarded for delivering professional, elegant solutions to cloud-based application design.',
  paragraphTwo: 'With expertise in cloud infrastructure, DevOps practices, and scalable system architecture, I help organizations build reliable, efficient, and maintainable systems.',
  paragraphThree: 'I am passionate about automation, monitoring, and creating robust infrastructure that enables teams to deploy with confidence.',
  resume: '/resume.pdf',
};

// EXPERIENCE DATA
export const experienceData = {
  img: 'profile.jpg',
  paragraphOne: 'Throughout my career, I have worked on diverse projects ranging from enterprise-level knowledge management systems to innovative music platforms.',
  paragraphTwo: 'My experience spans across cloud platforms (AWS, GCP), containerization (Docker, Kubernetes), and modern development practices.',
  paragraphThree: 'I believe in continuous learning and staying current with emerging technologies to deliver the best solutions.',
  resume: '/resume.pdf',
};

// PORTFOLIO DATA
export const portfolioData = {
  img: 'profile.jpg',
  paragraphOne: 'As Founder & CTO of Blank Cut Inc., I lead the development of innovative platforms that solve real-world problems through advanced technology.',
  paragraphTwo: 'Our projects span AI-powered infrastructure management, cloud-native deployment platforms, and health technology solutions.',
  paragraphThree: 'Each project demonstrates cutting-edge approaches to modern software engineering, AI integration, and scalable system design.',
  resume: '/resume.pdf',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: 'kubeagent',
    img: 'kube_agent_logo.png',
    title: 'KubeAgent - Kubernetes-Native AI Agent Platform',
    info: 'Sophisticated Kubernetes-native platform that deploys ephemeral Claude 4-powered AI agents on EKS clusters for intelligent infrastructure management.',
    info2: 'Enables users to interact with AI agents that have secure access to their external infrastructure, providing intelligent assistance for Kubernetes operations, GitOps workflows, and cloud management.',
    url: 'https://blankcut.com',
    repo: '',
    technologies: ['Go', 'Next.js', 'TypeScript', 'Kubernetes', 'Claude 4', 'PostgreSQL', 'Redis', 'AWS EKS', 'Docker', 'Stripe'],
    category: 'Blank Cut Inc.',
    status: 'In Development',
    role: 'Founder & CTO',
    details: {
      overview: 'KubeAgent is a sophisticated Kubernetes-native platform that deploys ephemeral Claude 4-powered AI agents on EKS clusters for intelligent infrastructure management.',
      architecture: [
        'Control Plane (Go Microservice) - RESTful API with Gin framework, JWT authentication, PostgreSQL storage',
        'Frontend (Next.js Application) - Modern React with TypeScript, Tailwind CSS, real-time WebSocket communication',
        'Ephemeral Agent Runtime (Python) - Claude 4 integration, FastAPI with WebSocket support, pre-installed CLI tools'
      ],
      features: [
        'Multi-Tenant Security with namespace-based isolation',
        'Real-Time Communication via WebSocket chat interface',
        'Usage-Based Billing with three-tier pricing structure',
        'GitOps Integration with GitHub repository access'
      ],
      businessImpact: 'Streamlines Kubernetes operations for DevOps teams, Platform engineers, and Kubernetes administrators. Reduces operational complexity through intelligent automation and provides scalable multi-cluster management capabilities.'
    }
  },
  {
    id: 'dropasite',
    img: 'drop_a_site_logo.png',
    title: 'DropASite - Cloud-Native Static Website Deployment Platform',
    info: 'Scalable, cloud-native platform that enables rapid deployment of static websites and applications with automated AWS infrastructure provisioning.',
    info2: 'Simplifies the traditionally complex process of website deployment into a streamlined, one-click solution with custom domain support and multi-tenant architecture.',
    url: 'https://dropasite.com',
    repo: '',
    technologies: ['Next.js 15', 'React 19', 'TypeScript', 'Fastify.js', 'Prisma', 'PostgreSQL', 'AWS S3', 'CloudFront', 'Terraform', 'Kubernetes'],
    category: 'Blank Cut Inc.',
    status: 'Production Ready',
    role: 'Founder & CTO',
    details: {
      overview: 'DropASite is a scalable, cloud-native platform that enables rapid deployment of static websites and applications with automated AWS infrastructure provisioning.',
      coreFunctionality: [
        'Instant Website Deployment - Upload static files and get live websites within seconds',
        'Automated Infrastructure Provisioning - Creates and manages AWS S3 buckets, CloudFront distributions, DNS',
        'Custom Domain Support - Integrates with domain registration and DNS management',
        'Multi-tenant Architecture - Supports user authentication, billing plans, resource isolation'
      ],
      techStack: {
        frontend: 'Next.js 15 with React 19 and TypeScript, Tailwind CSS, Framer Motion, Stripe Integration',
        backend: 'Fastify.js REST API with TypeScript, Prisma ORM with PostgreSQL, Background Worker Services',
        cloud: 'AWS S3, CloudFront, Lambda@Edge, Route 53, Terraform for Infrastructure as Code',
        devops: 'Docker containerization, Google Cloud Platform, Kubernetes (AWS EKS)'
      },
      businessImpact: 'Reduced website deployment from hours to seconds, cost-effective scaling with AWS serverless technologies.'
    }
  },
  {
    id: 'mental-health-monitoring',
    img: 'BlankCut_small_logo.png',
    title: 'Mental Health Monitoring Platform – AI/ML Health Data Integration',
    info: 'HIPAA-compliant platform leveraging wearable data and AI for mental health diagnostics, designed to predict and detect mood episodes and mental health patterns.',
    info2: 'Uses passive data from consumer wearables and clinical inputs with machine learning models for predictive analytics and real-time anomaly detection.',
    url: 'https://blankcut.com',
    repo: '',
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'Apache Kafka', 'MLflow', 'KServe', 'AWS', 'Random Forest', 'LSTM', 'XGBoost'],
    category: 'Blank Cut Inc.',
    status: 'In Development (MVP Phase)',
    role: 'Founder & CTO',
    details: {
      overview: 'A HIPAA-compliant platform leveraging wearable data and AI for mental health diagnostics, designed to predict and detect mood episodes and mental health patterns using passive data from consumer wearables and clinical inputs.',
      capabilities: [
        'Predictive Analytics - Uses ML models to predict mood episodes and mental health patterns before they occur',
        'Passive Data Collection - Integrates with consumer wearables (Fitbit, Apple Watch, etc.)',
        'Clinical Integration - Incorporates validated clinical assessment tools (PHQ-8, ASRM)',
        'Real-time Processing - Processes biometric data streams for immediate anomaly detection'
      ],
      aiMlPipeline: [
        'Anomaly Detection Models - Random Forest, LSTM Autoencoders, XGBoost for pattern recognition',
        'Digital Phenotyping - Personalized baseline establishment for individual patients',
        'Explainable AI - Transparent model decisions to support clinical decision-making',
        'Federated Learning - Privacy-preserving distributed learning across patient populations'
      ],
      businessImpact: 'Early intervention reduces hospitalization risk, personalized care through individual data patterns, improved quality of life through preventive monitoring and timely mental health support.'
    }
  },
  {
    id: 'research-initiatives',
    img: 'BlankCut_small_logo.png',
    title: 'Technology Research & Development Initiatives',
    info: 'Ongoing research and development in advanced AI systems, enterprise solutions, and high-performance computing applications.',
    info2: 'For detailed information about enterprise projects and additional technical work, please reference the downloadable resume.',
    url: 'https://blankcut.com',
    repo: '',
    technologies: ['AI/ML', 'Multi-Agent Systems', 'HPC', 'LLM Integration', 'Distributed Computing', 'Health Data Analytics'],
    category: 'Blank Cut Inc.',
    status: 'Ongoing Research',
    role: 'Founder & CTO',
    details: {
      overview: 'Technology Research & Development Initiatives covering multiple areas of advanced computing and AI applications.',
      initiatives: [
        'Hierarchical Multi-Agent Systems for Task Orchestration - Advanced AI agent coordination and task distribution within distributed computing environments',
        'Generative AI Solutions for Enterprise - Custom LLM implementations and enterprise AI automation solutions',
        'High-Performance Computing (HPC) Systems - Optimizing computational workloads for AI/ML and scientific computing applications',
        'Neurodivergent Monitoring Capabilities - Expanding health technology applications to support neurodivergent populations through AI-powered monitoring and support systems'
      ],
      note: 'For Enterprise projects, please reference the Resume that can be downloaded from the About section.'
    }
  }
];

// RESEARCH DATA
export const researchData = {
  title: 'Research & Current Studies',
  description: 'Exploring cutting-edge technologies and methodologies in site reliability engineering and cloud computing.',
  currentStudies: [
    {
      id: 'study-1',
      title: 'AI-Driven Infrastructure Monitoring',
      description: 'Exploring machine learning applications for predictive infrastructure monitoring and alerting.',
      status: 'Active',
      startDate: '2024-01-15',
      technologies: ['TensorFlow', 'Prometheus', 'Python', 'Time Series Analysis'],
      progress: 20
    },
    {
      id: 'study-2',
      title: 'Building Quantum Applications (Ocean SDK and Leap API)',
      description: 'Developing quantum computing applications using D-Wave Ocean SDK and Leap API for optimization problems.',
      status: 'Planning',
      startDate: '2024-02-01',
      technologies: ['D-Wave Ocean SDK', 'Leap API', 'Python', 'Quantum Annealing'],
      progress: 10
    },
    {
      id: 'study-3',
      title: 'Building and Managing Slurm Clusters for HPC',
      description: 'Implementing and optimizing Slurm workload managers for high-performance computing environments.',
      status: 'Active',
      startDate: '2024-03-01',
      technologies: ['Slurm', 'HPC', 'Linux', 'Job Scheduling', 'Resource Management'],
      progress: 40
    }
  ],
  articles: [
    {
      id: 'article-1',
      title: 'Hierarchical Multi-Agent Systems: Concepts and Operational Considerations',
      description: 'Advanced research into hierarchical multi-agent systems for task orchestration and coordination in distributed computing environments.',
      publishDate: '2024-01-15',
      readTime: '15 min read',
      tags: ['Multi-Agent Systems', 'AI Research', 'Distributed Computing', 'Task Orchestration'],
      url: 'https://overcoffee.medium.com/hierarchical-multi-agent-systems-concepts-and-operational-considerations-e06fff0bea8c',
      featured: true
    }
  ]
};

// CONTACT DATA
export const contactData = {
  cta: 'Let\'s work together to build reliable, scalable systems.',
  btn: 'Get In Touch',
  email: 'edermazariegos.careers@gmail.com',
  img: 'contact_background.png'
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: 'network-twitter',
      name: 'twitter',
      url: 'https://twitter.com/eder_mazariegos',
    },
    {
      id: 'network-linkedin',
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/eder-mazariegos-6a97b757',
    },
    {
      id: 'network-github',
      name: 'github',
      url: 'https://github.com/ecda909',
    },
  ],
};

