// ============================================================
// Portfolio content — Eder Mazariegos
// Aligned with resume: Lead SRE @ Booz Allen Hamilton +
// Founder @ Blank Cut Inc. as the primary focus.
// ============================================================

// ---------------- HEAD ----------------
export const headData = {
  title: 'Eder Mazariegos | Site Reliability Engineer',
  lang: 'en',
  description:
    'Eder Mazariegos — Site Reliability Engineer. Lead SRE at Booz Allen Hamilton and Founder of Blank Cut Inc., building large-scale cloud-native platforms, GitOps automation, and agentic AI systems.',
};

// ---------------- HERO ----------------
export const heroData = {
  greeting: 'Eder Mazariegos',
  name: 'Site Reliability\nEngineer',
  roles: ['Lead SRE @ Booz Allen Hamilton', 'Founder @ Blank Cut Inc.'],
  description:
    'I design, build, and operate large-scale cloud-native platforms — from enterprise Kubernetes and GitOps automation to agentic AI systems — with a track record of 99.999% uptime and secure, compliant delivery.',
  cta: 'Download Résumé',
  resume: '/resume.pdf',
};

// ---------------- ABOUT ----------------
export const aboutData = {
  paragraphs: [
    'I’m a Site Reliability Engineer based in Boston. As Lead SRE at Booz Allen Hamilton, I lead platform-engineering initiatives for the Chief Digital and Artificial Intelligence Office (CDAO) and the Intelligence Community — modernizing API gateways and automating Kubernetes across secured AWS environments to keep critical systems reliable at scale.',
    'That reliability-first mindset carries into everything I build. I also founded Blank Cut Inc., a platform-engineering company behind a multi-tenant application-hosting platform and AI-driven developer tooling — where I put GitOps automation, agentic AI, and full-stack delivery into practice.',
    'Whatever I’m working on, the focus is the same: reliable, secure, well-automated systems that let teams deploy with confidence. I hold a TS/SCI clearance.',
  ],
  resume: '/resume.pdf',
};

// Core technologies surfaced on the About section
export const coreTech = [
  'Kubernetes',
  'AWS',
  'GCP',
  'Terraform',
  'ArgoCD',
  'Crossplane',
  'Go',
  'Python',
  'TypeScript',
  'Claude / LLMs',
];

// ---------------- EXPERIENCE ----------------
export const experienceData = {
  title: 'Experience',
  intro:
    'Nine-plus years across enterprise SRE, platform engineering, and founding my own company. Booz Allen Hamilton and Blank Cut are where I spend my time today.',

  timeline: [
    {
      id: 'bah-lead-sre',
      company: 'Booz Allen Hamilton',
      role: 'Lead Site Reliability Engineer',
      location: 'Boston, MA',
      period: '2024 — Present',
      current: true,
      summary:
        'Lead enterprise platform-engineering for the CDAO and Intelligence Community, directing API-gateway modernization across secured AWS EKS environments.',
      bullets: [
        'Built automation frameworks with Terraform, Helm, ArgoCD, Tekton, and custom Python/Bash tooling across multiple EKS clusters.',
        'Architected Crossplane across AWS EKS and GCP GKE with custom compositions for automated resource provisioning.',
        'Defined the SLI/SLO/SLA framework and stood up monitoring, Kyverno governance, Litmus chaos and Locust load testing.',
        'Stood up a unified, OpenAI-compatible LLM gateway (LiteLLM) fronting Bedrock, OpenAI, Anthropic Claude, and internal models, with Databricks integration.',
      ],
    },
    {
      id: 'blankcut-founder',
      company: 'Blank Cut Inc.',
      role: 'Founder',
      location: 'Boston, MA',
      period: '2024 — Present',
      current: true,
      summary:
        'Founded and lead a platform-engineering company building a multi-tenant application-hosting platform and AI-driven developer tooling.',
      bullets: [
        'Architected a multi-tenant PaaS that takes a client’s Git repo from onboarding to a live production URL on AWS EKS with ArgoCD GitOps.',
        'Shipped Claude-powered agents for the deploy gate: an autonomous deploy reviewer and an agentic fix-loop, with human-in-the-loop merge control.',
        'Open-sourced a Kubernetes-native MCP server (Go) integrating Claude with ArgoCD, GitLab, and Vault.',
        'Runs the full production stack: CI/CD image builds, SSM + KMS secrets, Stripe usage billing, and a first-party observability pipeline.',
      ],
    },
    {
      id: 'redhat-sre',
      company: 'Red Hat',
      role: 'Site Reliability Engineer',
      location: 'Raleigh, NC',
      period: '2022 — 2024',
      current: false,
      summary:
        'Developed SRE practices and tooling while architecting large-scale infrastructure for global enterprise clients.',
      bullets: [
        'Helped design and build a globally distributed replacement system for UPS on OpenShift, Ansible Automation Platform, ArgoCD, and Python microservices — 99.999% uptime with a team of 20 senior SREs.',
        'Delivered GitOps implementations with Ansible, ArgoCD, GitLab CI, and Kubernetes operators.',
        'Built highly available public and private cloud environments with auto-scaling, load balancing, and monitoring to SLI/SLO standards.',
      ],
    },
    {
      id: 'bah-devops',
      company: 'Booz Allen Hamilton',
      role: 'DevOps Engineer (Senior Consultant)',
      location: 'Washington, DC',
      period: '2019 — 2022',
      current: false,
      summary:
        'Delivered cloud-modernization and secure containerization for defense and intelligence clients within strict compliance frameworks.',
      bullets: [
        'Built containerized applications with Docker, Kubernetes (k3s/k8s), Rancher, Konvoy, Helm, and Swarm.',
        'Led a Kubernetes migration for a unified enterprise data environment, including a medallion-architecture ETL pipeline (Bronze/Silver/Gold) on an S3 data lake via Apache Airflow.',
        'Supported Shared Security Services (SSS), an Air Force cloud environment, and terabyte-scale enterprise knowledge-management search.',
      ],
    },
  ],

  // Stat strip (headline numbers)
  stats: [
    { value: '9+', label: 'Years in the field' },
    { value: '99.999%', label: 'Uptime delivered' },
    { value: '20', label: 'Member SRE Team (Lead)' },
    { value: '3', label: 'Cloud & K8s certifications' },
  ],

  // Capabilities bar chart (proficiency by domain)
  capabilities: [
    { name: 'Kubernetes / EKS', value: 95 },
    { name: 'GitOps & CI/CD', value: 95 },
    { name: 'IaC — Terraform / Crossplane', value: 90 },
    { name: 'Cloud — AWS / GCP', value: 90 },
    { name: 'Observability & SRE', value: 88 },
    { name: 'AI Agents & LLM Platforms', value: 85 },
  ],

  credentials: {
    certifications: [
      'AWS Certified Developer — Associate',
      'AWS Certified Solutions Architect — Associate',
      'Certified Kubernetes Administrator (CKA)',
    ],
    clearance: 'TS/SCI',
    education: 'B.S. Information Technology, Minor in Computer Science — University of Central Florida',
  },
};

// ---------------- PORTFOLIO (home intro) ----------------
export const portfolioData = {
  intro:
    'A selection of work grouped by where it was built — the products I ship at Blank Cut, and platform engineering delivered with Booz Allen Hamilton and Red Hat.',
};

// ---------------- PROJECTS (grouped by company) ----------------
export const projectGroups = [
  {
    id: 'blank-cut',
    company: 'Blank Cut Inc.',
    role: 'Founder',
    blurb:
      'The platform-engineering company I founded — a multi-tenant hosting platform (running production apps for clients like Vine Management and Wave Maker Wellness) plus a portfolio of AI-native products.',
    projects: [
      {
        id: 'blank-cut-platform',
        title: 'Blank Cut Platform',
        tagline: 'Multi-tenant managed hosting PaaS with agentic deploys',
        status: 'In Production',
        statusType: 'production',
        accent: 'orange',
        summary:
          'The flagship platform: it takes a client’s Git repo from onboarding to a live production URL, automating build, database and secrets provisioning, and Kubernetes deployment. Claude-powered agents guard the deploy gate.',
        highlights: [
          'AWS EKS + ArgoCD GitOps pipeline, Helm, External Secrets Operator, and a Fastify orchestration service dispatching ephemeral Kubernetes worker jobs.',
          'Autonomous deploy reviewer inspects GitOps merge requests and approves or flags risk; an agentic fix-loop diagnoses failing builds and proposes fixes as PRs — human-in-the-loop throughout.',
          'Secrets via SSM + KMS, Stripe-based usage billing on a compute-quota model, and a first-party metrics/logging pipeline.',
        ],
        tech: ['AWS EKS', 'ArgoCD', 'Helm', 'Fastify', 'Go', 'Anthropic Claude', 'Stripe', 'KMS'],
        metrics: [
          { value: 'Repo → URL', label: 'Onboarding' },
          { value: 'GitOps', label: 'Delivery' },
          { value: 'HITL', label: 'Agent control' },
        ],
        clients: [
          { name: 'Vine Management', url: 'https://www.vinemgt.com/en' },
          { name: 'Notice Hub — Vine Mgmt', url: 'https://notices.vinemgt.com/login' },
          { name: 'Wave Maker Wellness', url: 'https://wavemakerwellness.com/' },
        ],
        links: [{ label: 'Blank Cut', url: 'https://blankcut.com', type: 'live' }],
      },
      {
        id: 'venture-track',
        title: 'Venture Track',
        tagline: 'Evidence-based VC intelligence platform',
        status: 'Live',
        statusType: 'live',
        accent: 'purple',
        summary:
          'A SaaS platform that transforms how venture firms evaluate startups and manage portfolios. Every analysis claim is traceable to its source via provenance IDs — eliminating hallucination risk.',
        highlights: [
          'Verified intelligence from 9+ data sources (via Echo) combined with GPT-5, Claude, and Perplexity, each tuned to a reasoning tier.',
          'Portfolio + cap-table tracking, real-time signal monitoring with Composite Priority Alerting and Risk Radar, and embeddable white-label onboarding.',
          'Multi-tenant with 5 RBAC roles; deployed on Blank Cut’s fully managed AWS EKS cluster with an ArgoCD GitOps pipeline.',
        ],
        tech: ['Next.js 15', 'React 19', 'Fastify', 'PostgreSQL', 'Prisma', 'Redis', 'GPT-5', 'Claude'],
        metrics: [
          { value: '42+', label: 'API endpoints' },
          { value: '9+', label: 'Data sources' },
          { value: '5', label: 'RBAC roles' },
        ],
        chart: {
          unit: '',
          data: [
            { name: 'Endpoints', value: 42 },
            { name: 'Data models', value: 14 },
            { name: 'Sources', value: 9 },
          ],
        },
        links: [{ label: 'venture-track.blankcut.com', url: 'https://venture-track.blankcut.com/', type: 'live' }],
      },
      {
        id: 'echo',
        title: 'Echo',
        tagline: 'VC-intelligence signal API',
        status: 'Live · API',
        statusType: 'live',
        accent: 'green',
        summary:
          'The Python signal-processing engine behind Venture Track — exposed as an API rather than a standalone app. It ingests research, news, filings, patents, and code activity, then normalizes, deduplicates, scores, and serves the signals that matter to investors to Venture Track.',
        highlights: [
          'A live corpus of 30,000+ signals that grows every day — roughly 7,000 new signals ingested each week across news, SEC filings, research, and analyst ratings.',
          'FastAPI + Celery (three specialized worker pools) over PostgreSQL/pgvector, Redis, and S3, with 13 live data connectors.',
          'LLM enrichment (GPT-4o-mini) and text-embedding-3-small power semantic search, composite salience scoring, and two-tier (exact + semantic) deduplication.',
          'Multi-language, region-aware ingestion feeding Venture Track over Redis Pub/Sub.',
        ],
        tech: ['Python', 'FastAPI', 'Celery', 'pgvector', 'Redis', 'AWS S3', 'OpenAI', 'Kubernetes'],
        metrics: [
          { value: '30K+', label: 'Signals & growing' },
          { value: '13', label: 'Data connectors' },
          { value: '~7K/wk', label: 'Newly ingested' },
        ],
        chart: {
          unit: 'Signals by source',
          data: [
            { name: 'News', value: 24057 },
            { name: 'SEC', value: 4485 },
            { name: 'Research', value: 2072 },
          ],
        },
        links: [{ label: 'How it powers Venture Track', url: 'https://blankcut.com/innovation/venture-track', type: 'live' }],
      },
      {
        id: 'medcat',
        title: 'MedCAT',
        tagline: 'RAG-grounded medication & clinical AI',
        status: 'In Development',
        statusType: 'development',
        accent: 'purple',
        summary:
          'A Medication & Clinical AI Tool that helps patients understand their medicines and helps clinicians reason about medication changes — with every AI claim grounded in verified sources and cited.',
        highlights: [
          'Grounding contract: clinical claims are written only from retrieved, cited facts; uncovered safety-critical claims are omitted, not guessed.',
          'Retrieval over openFDA, RxNorm, RxClass, DailyMed, LactMed, and PubMed with a pgvector corpus; Claude + OpenAI vision for pill/label scanning.',
          'Serves patients, physicians, and students with interaction detection, a physician simulation engine, PII anonymization, and consent + RLS.',
        ],
        tech: ['Next.js 15', 'Node 20', 'Prisma', 'Supabase', 'pgvector', 'Claude', 'OpenAI', 'EKS'],
        metrics: [
          { value: '3', label: 'User roles' },
          { value: 'RAG', label: 'Grounded answers' },
          { value: '~70k', label: 'ICD-10 codes' },
        ],
        links: [{ label: 'Read more', url: 'https://blankcut.com/innovation/medcat', type: 'live' }],
      },
      {
        id: 'k8s-claude-mcp',
        title: 'Kubernetes Claude MCP Server',
        tagline: 'Open-source AI GitOps analysis',
        status: 'Open Source',
        statusType: 'oss',
        accent: 'green',
        summary:
          'An open-source Model Context Protocol server, written in Go, that integrates Claude with Kubernetes, ArgoCD, GitLab, and Vault for AI-powered analysis and troubleshooting of GitOps workflows.',
        highlights: [
          'REST API for resource analysis, troubleshooting, and commit-level correlation across systems.',
          'Distributed as a versioned Docker image with a Helm chart for in-cluster deployment, under an MIT license.',
        ],
        tech: ['Go', 'MCP', 'Kubernetes', 'ArgoCD', 'GitLab', 'Vault', 'Helm', 'Docker'],
        metrics: [
          { value: 'Go', label: 'Language' },
          { value: 'MIT', label: 'License' },
          { value: 'Helm', label: 'Distribution' },
        ],
        links: [{ label: 'Blank Cut', url: 'https://blankcut.com', type: 'live' }],
      },
    ],
  },
  {
    id: 'booz-allen',
    company: 'Booz Allen Hamilton',
    role: 'Lead Site Reliability Engineer',
    blurb:
      'Enterprise platform engineering for the CDAO and Intelligence Community across secured AWS environments.',
    projects: [
      {
        id: 'bah-platform-engineering',
        title: 'Enterprise Platform Engineering — CDAO / IC',
        tagline: 'API-gateway modernization & LLM gateway at scale',
        status: '2024 — Present',
        statusType: 'development',
        accent: 'orange',
        summary:
          'Led API-gateway modernization and platform automation across multiple secured AWS EKS environments, migrating users, APIs, and RBAC from a legacy gateway to a modern API-management platform.',
        highlights: [
          'Terraform, Helm, ArgoCD, and Tekton automation; Crossplane compositions across EKS and GKE; Kyverno deployment governance.',
          'SLI/SLO/SLA framework, custom monitoring dashboards, Litmus chaos testing, and Locust load testing.',
          'Unified OpenAI-compatible LLM gateway (LiteLLM) fronting Bedrock, OpenAI, Claude, and internal models, plus container-image vulnerability remediation with Anchore and Trivy.',
        ],
        tech: ['AWS EKS', 'GCP GKE', 'Terraform', 'ArgoCD', 'Tekton', 'Crossplane', 'Kyverno', 'LiteLLM'],
        metrics: [
          { value: 'Multi-env', label: 'Secured clusters' },
          { value: 'GitOps', label: 'Delivery' },
          { value: 'NIST RMF', label: 'Compliance' },
        ],
        links: [{ label: 'Details in résumé', url: '/resume.pdf', type: 'resume' }],
      },
      {
        id: 'epsilon',
        title: 'Epsilon',
        tagline: 'AI-powered multi-cloud IaC assistant',
        status: 'Internal',
        statusType: 'development',
        accent: 'purple',
        summary:
          'A full-stack, AI-powered infrastructure-as-code assistant that automates multi-cloud provisioning and failover across AWS and GCP through natural language.',
        highlights: [
          'Uses Claude to analyze and manipulate Terraform and Crossplane manifests, opening PRs behind a human-in-the-loop approval gate.',
          'Cross-cloud workload migration, private-repo GitOps integration, and real-time monitoring on Node.js/Fastify, PostgreSQL, and React.',
        ],
        tech: ['Node.js', 'Fastify', 'PostgreSQL', 'React', 'Claude', 'Terraform', 'Crossplane'],
        metrics: [
          { value: '2', label: 'Clouds (AWS/GCP)' },
          { value: 'NL → IaC', label: 'Interface' },
          { value: 'HITL', label: 'Approval gate' },
        ],
        links: [{ label: 'Details in résumé', url: '/resume.pdf', type: 'resume' }],
      },
    ],
  },
  {
    id: 'red-hat',
    company: 'Red Hat',
    role: 'Site Reliability Engineer',
    blurb: 'Large-scale infrastructure and GitOps for global enterprise clients.',
    projects: [
      {
        id: 'ups-orchestration',
        title: 'UPS Global Backend Orchestration',
        tagline: '99.999% uptime across global data centers',
        status: '2022 — 2024',
        statusType: 'past',
        accent: 'green',
        summary:
          'Collaborated on the architecture and implementation of a replacement system for UPS’s global backend orchestration platform, requiring five-nines uptime across worldwide data centers.',
        highlights: [
          'Multi-cluster EKS with ArgoCD-based GitOps, Ansible Automation Platform for orchestration, and Python event-driven microservices.',
          '24/7 global availability with comprehensive disaster recovery, delivered with a team of 20 senior SREs.',
        ],
        tech: ['OpenShift', 'EKS', 'ArgoCD', 'Ansible', 'Python', 'GitLab CI'],
        metrics: [
          { value: '99.999%', label: 'Uptime' },
          { value: '20', label: 'SRE team' },
          { value: 'Global', label: 'Data centers' },
        ],
        links: [{ label: 'Details in résumé', url: '/resume.pdf', type: 'resume' }],
      },
      {
        id: 'delta-containerization',
        title: 'Delta Airlines Containerization',
        tagline: '300+ legacy microservices modernized',
        status: '2022 — 2024',
        statusType: 'past',
        accent: 'orange',
        summary:
          'Developed automation tooling to containerize hundreds of legacy microservices with standardized Tekton-based CI/CD pipelines in strictly controlled enterprise environments.',
        highlights: [
          'Containerized 300+ microservices with minimal downtime while implementing least-privilege security models.',
          'Standardized deployment across diverse application portfolios in high-security settings.',
        ],
        tech: ['Tekton', 'Kubernetes', 'Docker', 'CI/CD', 'RBAC'],
        metrics: [
          { value: '300+', label: 'Microservices' },
          { value: 'Least-priv', label: 'Security model' },
          { value: 'Tekton', label: 'CI/CD' },
        ],
        links: [{ label: 'Details in résumé', url: '/resume.pdf', type: 'resume' }],
      },
    ],
  },
];

// Flat list (used by the home preview)
export const projectsData = projectGroups.flatMap((g) =>
  g.projects.map((p) => ({ ...p, company: g.company })),
);

// ---------------- RESEARCH & INTERESTS ----------------
export const researchData = {
  title: 'Research & Interests',
  description:
    'Where I spend my curiosity outside of shipping — active explorations in reliability and AI systems, plus a couple of things on the horizon.',

  activeStudies: [
    {
      id: 'multi-agent',
      title: 'Hierarchical Multi-Agent Systems',
      description:
        'Coordinating LLM-powered agents for complex task orchestration in distributed computing environments — the research behind the agents running on the Blank Cut platform.',
      tags: ['Multi-Agent Systems', 'LLM Orchestration', 'Distributed Computing'],
      accent: 'purple',
    },
    {
      id: 'ai-infra-monitoring',
      title: 'AI-Driven Infrastructure Monitoring',
      description:
        'Applying machine learning to predictive infrastructure monitoring and alerting — anomaly detection over time-series telemetry to catch problems before they page.',
      tags: ['ML', 'Prometheus', 'Time-Series', 'Observability'],
      accent: 'orange',
    },
    {
      id: 'slurm-hpc',
      title: 'Slurm Clusters for HPC',
      description:
        'Building and tuning Slurm workload managers for high-performance computing — job scheduling, resource management, and throughput optimization.',
      tags: ['Slurm', 'HPC', 'Linux', 'Scheduling'],
      accent: 'green',
    },
  ],

  futureInterests: [
    {
      id: 'quantum',
      title: 'Building Quantum Applications',
      description:
        'A future learning interest — not current work. I intend to explore quantum optimization with the D-Wave Ocean SDK and Leap API down the line.',
      tags: ['D-Wave Ocean SDK', 'Leap API', 'Quantum Annealing'],
      accent: 'purple',
    },
  ],

  articles: [
    {
      id: 'article-1',
      title: 'Hierarchical Multi-Agent Systems: Concepts and Operational Considerations',
      description:
        'A deep dive into hierarchical multi-agent systems for task orchestration and coordination in distributed computing environments.',
      publishDate: '2025-06-16',
      readTime: '30 min read',
      tags: ['Multi-Agent Systems', 'AI Research', 'Distributed Computing'],
      url: 'https://overcoffee.medium.com/hierarchical-multi-agent-systems-concepts-and-operational-considerations-e06fff0bea8c',
      featured: true,
    },
  ],
};

// ---------------- CONTACT ----------------
export const contactData = {
  cta: 'Have a platform to build, an incident to tame, or an idea worth shipping? Let’s talk.',
  btn: 'Send Message',
  email: 'edermazariegos.careers@gmail.com',
  phone: '+1 (352) 286-9493',
  location: 'Boston, MA',
};

// ---------------- FOOTER / SOCIAL ----------------
export const footerData = {
  networks: [
    { id: 'network-github', name: 'github', url: 'https://github.com/ecda909' },
    { id: 'network-linkedin', name: 'linkedin', url: 'https://www.linkedin.com/in/eder-mazariegos-6a97b757' },
    { id: 'network-medium', name: 'medium', url: 'https://medium.com/@overcoffee' },
    { id: 'network-twitter', name: 'twitter', url: 'https://twitter.com/eder_mazariegos' },
  ],
};
