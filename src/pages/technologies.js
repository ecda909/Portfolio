import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import {
  Cloud,
  Boxes,
  GitBranch,
  Code2,
  Layers,
  Database,
  Activity,
  ShieldCheck,
  BrainCircuit,
  Wrench,
  ArrowLeft,
} from 'lucide-react';

import { headData } from '../mock/data';
import Sidebar from '../components/Sidebar/Sidebar';
import Footer from '../components/Footer/Footer';
import { Container } from '../components/ui';
import BrandIcon from '../components/ui/BrandIcon';
import '../style/main.scss';

const categories = [
  {
    title: 'Cloud & Platforms',
    icon: Cloud,
    items: ['AWS', 'Google Cloud', 'AWS EKS', 'GCP GKE', 'OpenShift', 'Supabase'],
  },
  {
    title: 'Containers & Orchestration',
    icon: Boxes,
    items: ['Kubernetes', 'Docker', 'Helm', 'Rancher', 'Crossplane', 'Konvoy', 'k3s'],
  },
  {
    title: 'GitOps & CI/CD',
    icon: GitBranch,
    items: ['ArgoCD', 'Tekton', 'GitLab CI', 'Jenkins', 'Terraform', 'Ansible', 'External Secrets'],
  },
  {
    title: 'Languages',
    icon: Code2,
    items: ['Go', 'Python', 'TypeScript', 'JavaScript', 'Bash', 'SQL'],
  },
  {
    title: 'Frameworks & APIs',
    icon: Layers,
    items: ['React', 'Next.js', 'Node.js', 'Fastify', 'FastAPI', 'Gin', 'Prisma'],
  },
  {
    title: 'Data & Storage',
    icon: Database,
    items: ['PostgreSQL', 'pgvector', 'Redis', 'Kafka', 'Apache Airflow', 'RabbitMQ', 'S3'],
  },
  {
    title: 'Observability & SRE',
    icon: Activity,
    items: ['Grafana', 'Prometheus', 'ELK Stack', 'SLI/SLO/SLA', 'Litmus Chaos', 'Locust'],
  },
  {
    title: 'Security & Compliance',
    icon: ShieldCheck,
    items: ['Kyverno', 'HashiCorp Vault', 'Consul', 'RBAC', 'NIST RMF', 'Anchore', 'Trivy'],
  },
  {
    title: 'AI / ML Platforms',
    icon: BrainCircuit,
    items: ['Anthropic Claude', 'Model Context Protocol', 'LiteLLM', 'MLflow', 'KServe', 'Claude Agent SDK'],
  },
  {
    title: 'Tooling',
    icon: Wrench,
    items: ['Git', 'Linux', 'NGINX', 'Traefik', 'Stripe', 'Databricks', 'Sourcegraph'],
  },
];

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.45, ease: 'easeOut' } },
};

const TechnologiesPage = () => {
  const { lang } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Technologies — Eder Mazariegos</title>
        <html lang={lang || 'en'} />
        <meta name="description" content="The full technology stack Eder Mazariegos works with across SRE, platform engineering, and AI." />
      </Helmet>

      <Sidebar isStandalonePage />

      <div className="main-content">
        <section className="technologies-page">
          <Container>
            <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.06 } } }}>
              <motion.div variants={item}>
                <Link to="/" className="text-link technologies-page__back">
                  <ArrowLeft strokeWidth={1.8} /> Back to home
                </Link>
              </motion.div>

              <motion.header className="technologies-page__hero" variants={item}>
                <span className="kicker"><span className="kicker__num">/</span>Technologies</span>
                <h1>The full stack.</h1>
                <p className="lead">
                  A comprehensive view of the tools, frameworks, and platforms I use to build scalable, reliable,
                  and secure systems.
                </p>
              </motion.header>

              <div className="tech-cat-grid">
                {categories.map((cat) => {
                  const IconComponent = cat.icon;
                  return (
                    <motion.div key={cat.title} className="tech-cat" variants={item}>
                      <div className="tech-cat__head">
                        <span className="tech-cat__icon">
                          <IconComponent strokeWidth={1.6} />
                        </span>
                        <h2 className="tech-cat__title">{cat.title}</h2>
                      </div>
                      <div className="tech-chip-row">
                        {cat.items.map((t) => (
                          <span key={t} className="tech-chip">
                            <BrandIcon name={t} size={16} mono={false} />
                            {t}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </Container>

          <Footer />
        </section>
      </div>
    </>
  );
};

export default TechnologiesPage;
