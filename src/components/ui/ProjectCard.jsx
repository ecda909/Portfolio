import React from 'react';
import { ExternalLink, Github, FileDown, ArrowUpRight } from 'lucide-react';
import { Tag } from './index';
import { MiniBarChart } from './Charts';

const LINK_ICON = { live: ExternalLink, repo: Github, resume: FileDown };

const statusClass = (type) => `status status--${type || 'development'}`;

const ProjectCard = ({ project, variant = 'compact' }) => {
  const {
    title,
    tagline,
    status,
    statusType,
    accent,
    summary,
    highlights = [],
    tech = [],
    metrics = [],
    chart,
    clients = [],
    links = [],
  } = project;

  const full = variant === 'full';
  const shownTech = full ? tech : tech.slice(0, 5);

  return (
    <article className={`project-card project-card--${variant} accent-${accent || 'orange'}`}>
      <span className="project-card__bar" aria-hidden />

      <header className="project-card__head">
        <div className="project-card__title-row">
          <h3 className="project-card__title">{title}</h3>
          <span className={statusClass(statusType)}>{status}</span>
        </div>
        <p className="project-card__tagline">{tagline}</p>
      </header>

      <p className="project-card__summary">{summary}</p>

      {full && highlights.length > 0 && (
        <ul className="project-card__highlights">
          {highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      )}

      {metrics.length > 0 && (
        <div className="project-card__metrics">
          {metrics.map((m) => (
            <div className="project-metric" key={m.label}>
              <span className="project-metric__value">{m.value}</span>
              <span className="project-metric__label">{m.label}</span>
            </div>
          ))}
        </div>
      )}

      {full && chart && (
        <div className="project-card__chart">
          <MiniBarChart data={chart.data} accent={accent} />
        </div>
      )}

      {shownTech.length > 0 && (
        <div className="tag-row project-card__tech">
          {shownTech.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
          {!full && tech.length > shownTech.length && (
            <span className="tag project-card__more">+{tech.length - shownTech.length}</span>
          )}
        </div>
      )}

      {clients.length > 0 && (
        <div className="project-card__clients">
          <span className="project-card__clients-label">Live platforms hosted</span>
          <div className="project-card__clients-list">
            {clients.map((c) => (
              <a key={c.url} href={c.url} target="_blank" rel="noopener noreferrer" className="client-chip">
                {c.name}
                <ArrowUpRight strokeWidth={1.7} />
              </a>
            ))}
          </div>
        </div>
      )}

      {links.length > 0 && (
        <footer className="project-card__links">
          {links.map((l) => {
            const IconComponent = LINK_ICON[l.type] || ArrowUpRight;
            const external = l.type === 'live' || l.type === 'repo';
            return (
              <a
                key={l.url + l.label}
                href={l.url}
                className="text-link"
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <IconComponent strokeWidth={1.7} />
                {l.label}
              </a>
            );
          })}
        </footer>
      )}
    </article>
  );
};

export default ProjectCard;
