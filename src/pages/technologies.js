import React from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaCloud, FaDocker, FaCode, FaDatabase, FaTools, FaChartLine, FaShieldAlt, FaBrain } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

import Sidebar from '../components/Sidebar/Sidebar';
import Footer from '../components/Footer/Footer';

import { headData } from '../mock/data';
import Python from '../assets/python.svg';
import Docker from '../assets/docker.svg';
import Javascript from '../assets/javascript.svg';
import PhpIcon from '../assets/php.svg';
import Kubernetes from '../assets/kubernetes.svg';
import Reaction from '../assets/reaction.svg';
import Css3 from '../assets/css3.svg';
import Mysql from '../assets/mysql.svg';
import Postgres from '../assets/postgres.svg';
import Nginx from '../assets/nginx.svg';
import Jenkins from '../assets/jenkins.svg';
import Linux from '../assets/linux.svg';
import Next from '../assets/next.svg';
import Html from '../assets/html5.svg';
import Bootstrap from '../assets/bootstrap.svg';

import Redhat from '../assets/redhat.svg';
import Aws from '../assets/aws.svg';
import Gcloud from '../assets/gcloud.svg';
import Angular from '../assets/angular.svg';
import Git from '../assets/git.svg';
import Go from '../assets/go.svg';
import TypeScript from '../assets/typescript.svg';
import Terraform from '../assets/terraform.svg';
import GenericTech from '../assets/generic-tech.svg';
import '../style/main.scss';

const TechnologiesPage = () => {
  const { title, lang, description } = headData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  // Technology categories with comprehensive lists
  const technologyCategories = [
    {
      title: "Cloud Platforms",
      icon: FaCloud,
      color: "#FF6B6B",
      technologies: [
        { name: 'AWS', icon: Aws, description: 'Amazon Web Services - Cloud computing platform' },
        { name: 'Google Cloud', icon: Gcloud, description: 'Google Cloud Platform - Cloud services and infrastructure' },
      ]
    },
    {
      title: "Container & Orchestration",
      icon: FaDocker,
      color: "#4ECDC4",
      technologies: [
        { name: 'Docker', icon: Docker, description: 'Containerization platform' },
        { name: 'Kubernetes', icon: Kubernetes, description: 'Container orchestration system' },
        { name: 'Helm', icon: GenericTech, description: 'Kubernetes package manager' },
        { name: 'Rancher', icon: GenericTech, description: 'Kubernetes management platform' },
        { name: 'Crossplane', icon: GenericTech, description: 'Cloud native control plane framework' },
        { name: 'Konvoy', icon: GenericTech, description: 'Enterprise Kubernetes distribution' },
      ]
    },
    {
      title: "GitOps & CI/CD",
      icon: FaTools,
      color: "#45B7D1",
      technologies: [
        { name: 'ArgoCD', icon: Git, description: 'GitOps continuous delivery tool' },
        { name: 'Tekton', icon: GenericTech, description: 'Cloud native CI/CD framework' },
        { name: 'GitLab CI', icon: Git, description: 'GitLab continuous integration' },
        { name: 'Jenkins', icon: Jenkins, description: 'Automation server for CI/CD' },
        { name: 'Terraform', icon: Terraform, description: 'Infrastructure as code tool' },
        { name: 'Ansible', icon: Redhat, description: 'Automation platform' },
      ]
    },
    {
      title: "Programming Languages",
      icon: FaCode,
      color: "#96CEB4",
      technologies: [
        { name: 'Go', icon: Go, description: 'Systems programming language' },
        { name: 'Python', icon: Python, description: 'High-level programming language' },
        { name: 'JavaScript', icon: Javascript, description: 'Dynamic programming language' },
        { name: 'TypeScript', icon: TypeScript, description: 'Typed superset of JavaScript' },
        { name: 'Bash', icon: Linux, description: 'Unix shell and command language' },
        { name: 'PHP', icon: PhpIcon, description: 'Server-side scripting language' },
      ]
    },
    {
      title: "Frameworks & APIs",
      icon: FaCode,
      color: "#FFEAA7",
      technologies: [
        { name: 'React', icon: Reaction, description: 'JavaScript library for building UIs' },
        { name: 'Angular', icon: Angular, description: 'TypeScript-based web framework' },
        { name: 'Next.js', icon: Next, description: 'React framework for production' },
        { name: 'Node.js', icon: Javascript, description: 'JavaScript runtime environment' },
        { name: 'Express', icon: Javascript, description: 'Web framework for Node.js' },
        { name: 'Flask', icon: Python, description: 'Lightweight Python web framework' },
        { name: 'FastAPI', icon: Python, description: 'Modern Python web framework' },
        { name: 'Gin', icon: Go, description: 'HTTP web framework for Go' },
        { name: 'Fastify', icon: Javascript, description: 'Fast web framework for Node.js' },
      ]
    },
    {
      title: "Databases & Storage",
      icon: FaDatabase,
      color: "#DDA0DD",
      technologies: [
        { name: 'PostgreSQL', icon: Postgres, description: 'Advanced open source database' },
        { name: 'Redis', icon: GenericTech, description: 'In-memory data structure store' },
        { name: 'Elasticsearch', icon: GenericTech, description: 'Search and analytics engine' },
        { name: 'MongoDB', icon: GenericTech, description: 'NoSQL document database' },
        { name: 'Kafka', icon: GenericTech, description: 'Distributed streaming platform' },
        { name: 'RabbitMQ', icon: GenericTech, description: 'Message broker software' },
        { name: 'MySQL', icon: Mysql, description: 'Relational database management system' },
        { name: 'Prisma', icon: GenericTech, description: 'Database toolkit and ORM' },
      ]
    },
    {
      title: "Monitoring & Observability",
      icon: FaChartLine,
      color: "#FF7675",
      technologies: [
        { name: 'Grafana', icon: GenericTech, description: 'Analytics and monitoring platform' },
        { name: 'Prometheus', icon: GenericTech, description: 'Monitoring and alerting toolkit' },
        { name: 'ELK Stack', icon: GenericTech, description: 'Elasticsearch, Logstash, and Kibana' },
        { name: 'Jaeger', icon: GenericTech, description: 'Distributed tracing system' },
      ]
    },
    {
      title: "Security & Compliance",
      icon: FaShieldAlt,
      color: "#A29BFE",
      technologies: [
        { name: 'Kyverno', icon: GenericTech, description: 'Kubernetes policy management' },
        { name: 'HashiCorp Vault', icon: GenericTech, description: 'Secrets management' },
        { name: 'HashiCorp Consul', icon: GenericTech, description: 'Service mesh and discovery' },
        { name: 'RBAC', icon: GenericTech, description: 'Role-based access control' },
        { name: 'Network Policies', icon: GenericTech, description: 'Kubernetes network security' },
        { name: 'JWT', icon: GenericTech, description: 'JSON Web Tokens' },
        { name: 'OAuth', icon: GenericTech, description: 'Authorization framework' },
      ]
    },
    {
      title: "AI/ML Technologies",
      icon: FaBrain,
      color: "#4c44cb",
      technologies: [
        { name: 'LLM Integration', icon: GenericTech, description: 'Large Language Model integration' },
        { name: 'Model Context Protocol', icon: GenericTech, description: 'AI model communication protocol' },
        { name: 'MLflow', icon: GenericTech, description: 'Machine learning lifecycle management' },
        { name: 'KServe', icon: GenericTech, description: 'Kubernetes model serving' },
        { name: 'TensorFlow', icon: GenericTech, description: 'Machine learning framework' },
        { name: 'PyTorch', icon: GenericTech, description: 'Deep learning framework' },
        { name: 'Anthropic Claude', icon: GenericTech, description: 'AI assistant and language model' },
        { name: 'Random Forest', icon: GenericTech, description: 'Ensemble learning method' },
        { name: 'LSTM', icon: GenericTech, description: 'Long Short-Term Memory networks' },
        { name: 'XGBoost', icon: GenericTech, description: 'Gradient boosting framework' },
      ]
    },
    {
      title: "Web Technologies",
      icon: FaCode,
      color: "#FDCB6E",
      technologies: [
        { name: 'HTML5', icon: Html, description: 'Latest HTML standard' },
        { name: 'CSS3', icon: Css3, description: 'Latest CSS standard' },
        { name: 'Tailwind CSS', icon: Css3, description: 'Utility-first CSS framework' },
        { name: 'Bootstrap', icon: Bootstrap, description: 'CSS framework for responsive design' },
        { name: 'Framer Motion', icon: GenericTech, description: 'React animation library' },
        { name: 'Zustand', icon: GenericTech, description: 'State management for React' },
        { name: 'Zod', icon: GenericTech, description: 'TypeScript schema validation' },
        { name: 'TanStack Query', icon: GenericTech, description: 'Data fetching library' },
        { name: 'NextAuth.js', icon: Next, description: 'Authentication for Next.js' },
      ]
    },
    {
      title: "Infrastructure Tools",
      icon: FaTools,
      color: "#E17055",
      technologies: [
        { name: 'Traefik', icon: GenericTech, description: 'Cloud native edge router' },
        { name: 'NGINX', icon: Nginx, description: 'Web server and reverse proxy' },
        { name: 'TCP/IP', icon: GenericTech, description: 'Internet protocol suite' },
        { name: 'DNS Management', icon: GenericTech, description: 'Domain name system administration' },
        { name: 'Load Balancing', icon: GenericTech, description: 'Traffic distribution techniques' },
        { name: 'Docker Compose', icon: Docker, description: 'Multi-container Docker applications' },
        { name: 'Alpine Linux', icon: Linux, description: 'Security-oriented Linux distribution' },
      ]
    },
    {
      title: "Development Tools",
      icon: FaTools,
      color: "#6C5CE7",
      technologies: [
        { name: 'Git', icon: Git, description: 'Distributed version control system' },
        { name: 'Linux', icon: Linux, description: 'Open source operating system' },
        { name: 'Swagger/OpenAPI', icon: GenericTech, description: 'API documentation and design' },
        { name: 'Pino', icon: GenericTech, description: 'Fast JSON logger for Node.js' },
        { name: 'Jest', icon: GenericTech, description: 'JavaScript testing framework' },
        { name: 'GitHub', icon: Git, description: 'Git repository hosting service' },
        { name: 'GitLab', icon: Git, description: 'DevOps platform' },
        { name: 'Red Hat', icon: Redhat, description: 'Enterprise Linux distribution' },
      ]
    }
  ];

  const TechnologyCard = ({ tech }) => (
    <Col lg={4} md={6} sm={6} xs={12} className="mb-4">
      <motion.div
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="technology-card h-100">
          <Card.Body className="card-body">
            <div className="tech-icon">
              {tech.icon && <tech.icon />}
            </div>
            <div className="tech-info">
              <h5 className="tech-name">{tech.name}</h5>
              <p className="tech-description">{tech.description}</p>
            </div>
          </Card.Body>
        </Card>
      </motion.div>
    </Col>
  );

  const CategorySection = ({ category }) => (
    <motion.div variants={itemVariants} className="category-section">
      <Row className="mb-4">
        <Col xs={12}>
          <div className="category-header">
            <category.icon className="category-icon" />
            <h2 className="category-title">{category.title}</h2>
            <span className="tech-count">({category.technologies.length} technologies)</span>
          </div>
        </Col>
      </Row>
      <Row>
        {category.technologies.map((tech) => (
          <TechnologyCard
            key={tech.name}
            tech={tech}
          />
        ))}
      </Row>
    </motion.div>
  );

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Technologies - Eder Mazariegos'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Comprehensive list of technologies and tools used by Eder Mazariegos'} />
      </Helmet>

      <Sidebar isStandalonePage={true} />

      <section className="technologies-page">
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Header */}
            <Row className="justify-content-center mb-5">
              <Col lg={10} md={12} sm={12}>
                <motion.div variants={itemVariants} className="text-center">
                  <h1 className="page-title">My Technology Stack</h1>
                  <p className="page-subtitle">
                    A comprehensive overview of the technologies, frameworks, and tools I use to build
                    scalable, reliable, and innovative solutions across the full technology stack.
                  </p>
                </motion.div>
              </Col>
            </Row>

            {/* Technology Categories */}
            <Row className="justify-content-center">
              <Col lg={10} md={12} sm={12}>
                {technologyCategories.map((category) => (
                  <CategorySection
                    key={category.title}
                    category={category}
                  />
                ))}
              </Col>
            </Row>
          </motion.div>
        </Container>
      </section>

      <Footer isStandalonePage={true} />
    </>
  );
};

export default TechnologiesPage;
