import React from 'react';

// ---------- Layout ----------
export const Container = ({ children, wide = false, className = '' }) => (
  <div className={`container${wide ? ' container--wide' : ''} ${className}`.trim()}>
    {children}
  </div>
);

export const Section = ({ id, className = '', children }) => (
  <section id={id} className={className}>
    {children}
  </section>
);

// CSS-grid based column layout. `cols` sets desktop column count.
export const Grid = ({ cols = 2, gap, className = '', style = {}, children }) => (
  <div
    className={`grid ${className}`.trim()}
    style={{ '--cols': cols, ...(gap ? { '--gap': gap } : {}), ...style }}
  >
    {children}
  </div>
);

// ---------- Content blocks ----------
export const Kicker = ({ num, children }) => (
  <span className="kicker">
    {num && <span className="kicker__num">{num}</span>}
    {children}
  </span>
);

export const SectionHead = ({ num, kicker, title, children, align = 'left' }) => (
  <div className={`section-head${align === 'center' ? ' section-head--center' : ''}`}>
    {kicker && <Kicker num={num}>{kicker}</Kicker>}
    <h2>{title}</h2>
    {children && <p>{children}</p>}
  </div>
);

export const Card = ({ as: Tag = 'div', className = '', interactive = false, children, ...rest }) => (
  <Tag className={`card${interactive ? ' card--interactive' : ''} ${className}`.trim()} {...rest}>
    {children}
  </Tag>
);

const ACCENTS = new Set(['orange', 'purple', 'green']);
export const Tag = ({ children, accent, className = '' }) => (
  <span className={`tag${accent && ACCENTS.has(accent) ? ` tag--${accent}` : ''} ${className}`.trim()}>
    {children}
  </span>
);

export const Stat = ({ value, label, accent = false }) => (
  <div className={`stat${accent ? ' stat--accent' : ''}`}>
    <div className="stat__value">{value}</div>
    <div className="stat__label">{label}</div>
  </div>
);

// ---------- Actions ----------
export const Button = ({
  as: Tag = 'button',
  variant = 'solid', // solid | outline | accent
  className = '',
  children,
  ...rest
}) => (
  <Tag className={`btn btn--${variant} ${className}`.trim()} {...rest}>
    {children}
  </Tag>
);
