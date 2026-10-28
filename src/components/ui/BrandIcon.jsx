import React from 'react';
import {
  siKubernetes,
  siGooglecloud,
  siTerraform,
  siGo,
  siPython,
  siTypescript,
  siJavascript,
  siDocker,
  siReact,
  siLinux,
  siArgo,
  siHelm,
  siRancher,
  siRedhatopenshift,
  siSupabase,
  siGitlab,
  siJenkins,
  siAnsible,
  siTekton,
  siGnubash,
  siNextdotjs,
  siNodedotjs,
  siFastify,
  siFastapi,
  siGin,
  siPrisma,
  siPostgresql,
  siRedis,
  siApachekafka,
  siApacheairflow,
  siRabbitmq,
  siGrafana,
  siPrometheus,
  siElasticstack,
  siLocust,
  siVault,
  siConsul,
  siTrivy,
  siAnthropic,
  siClaude,
  siGooglegemini,
  siModelcontextprotocol,
  siMlflow,
  siGit,
  siNginx,
  siTraefikproxy,
  siStripe,
  siDatabricks,
  siGithubactions,
  siCelery,
  siSentry,
  siResend,
  siPostman,
  siHomebrew,
} from 'simple-icons';

// Normalized tech name -> simple-icons object (rendered monochrome).
const ICON_MAP = {
  kubernetes: siKubernetes,
  'aws eks': siKubernetes,
  'gcp gke': siGooglecloud,
  'google cloud': siGooglecloud,
  'gcp artifact registry': siGooglecloud,
  'workload identity federation': siGooglecloud,
  terraform: siTerraform,
  go: siGo,
  python: siPython,
  typescript: siTypescript,
  javascript: siJavascript,
  docker: siDocker,
  buildkit: siDocker,
  react: siReact,
  linux: siLinux,
  argocd: siArgo,
  'argocd image updater': siArgo,
  'github actions': siGithubactions,
  helm: siHelm,
  rancher: siRancher,
  openshift: siRedhatopenshift,
  supabase: siSupabase,
  'gitlab ci': siGitlab,
  jenkins: siJenkins,
  ansible: siAnsible,
  tekton: siTekton,
  bash: siGnubash,
  'next.js': siNextdotjs,
  'node.js': siNodedotjs,
  fastify: siFastify,
  fastapi: siFastapi,
  celery: siCelery,
  gin: siGin,
  prisma: siPrisma,
  postgresql: siPostgresql,
  redis: siRedis,
  kafka: siApachekafka,
  'apache airflow': siApacheairflow,
  rabbitmq: siRabbitmq,
  grafana: siGrafana,
  prometheus: siPrometheus,
  sentry: siSentry,
  'elk stack': siElasticstack,
  locust: siLocust,
  'hashicorp vault': siVault,
  consul: siConsul,
  trivy: siTrivy,
  'anthropic claude': siAnthropic,
  'claude agent sdk': siClaude,
  'claude managed agents': siClaude,
  'google gemini': siGooglegemini,
  gemini: siGooglegemini,
  'model context protocol': siModelcontextprotocol,
  'model context protocol (mcp)': siModelcontextprotocol,
  mcp: siModelcontextprotocol,
  mlflow: siMlflow,
  git: siGit,
  nginx: siNginx,
  traefik: siTraefikproxy,
  stripe: siStripe,
  resend: siResend,
  postman: siPostman,
  homebrew: siHomebrew,
  databricks: siDatabricks,
};

const monogram = (name) => {
  const clean = name.replace(/[^A-Za-z0-9]/g, '');
  if (clean.length <= 4) return clean.toUpperCase();
  const words = name.trim().split(/\s+/);
  if (words.length > 1) return words.slice(0, 2).map((w) => w[0]).join('').toUpperCase();
  return clean.slice(0, 2).toUpperCase();
};

const BrandIcon = ({ name, size = 24, mono = true, className = '' }) => {
  const icon = ICON_MAP[name.toLowerCase()];

  if (icon) {
    return (
      <svg
        role="img"
        aria-label={name}
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={`brand-icon ${className}`.trim()}
        fill="currentColor"
      >
        <path d={icon.path} />
      </svg>
    );
  }

  // No brand glyph: readable monogram badge in large contexts,
  // a small squared placeholder in tight ones (keeps rows uniform).
  if (mono) {
    return (
      <span
        className={`brand-icon brand-icon--mono ${className}`.trim()}
        style={{ width: size, height: size, fontSize: Math.max(9, Math.round(size * 0.34)) }}
        aria-label={name}
      >
        {monogram(name)}
      </span>
    );
  }

  return (
    <span
      className={`brand-icon brand-icon--square ${className}`.trim()}
      style={{ width: size, height: size }}
      aria-hidden
    />
  );
};

export default BrandIcon;
