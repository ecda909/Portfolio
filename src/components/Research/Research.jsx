import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowUpRight, Sparkles, Compass } from 'lucide-react';
import PortfolioContext from '../../context/context';
import { Container, Kicker, Tag } from '../ui';

const formatDate = (d) =>
  new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

const Research = () => {
  const { research } = useContext(PortfolioContext);
  if (!research) return null;

  const { title, description, activeStudies = [], futureInterests = [], articles = [] } = research;

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.45, ease: 'easeOut' } },
  };

  return (
    <section className="research" id="research">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
        >
          <motion.div className="section-head" variants={item}>
            <Kicker num="05">Research &amp; Interests</Kicker>
            <h2>{title}</h2>
            <p>{description}</p>
          </motion.div>

          {/* Currently exploring */}
          <motion.div className="research__subhead" variants={item}>
            <Sparkles size={16} strokeWidth={1.7} />
            Currently exploring
          </motion.div>
          <div className="research-grid">
            {activeStudies.map((s) => (
              <motion.div key={s.id} className={`research-card accent-${s.accent || 'orange'}`} variants={item}>
                <span className="research-card__bar" aria-hidden />
                <h3 className="research-card__title">{s.title}</h3>
                <p className="research-card__desc">{s.description}</p>
                <div className="tag-row">
                  {s.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* On the horizon (future interests) */}
          {futureInterests.length > 0 && (
            <>
              <motion.div className="research__subhead research__subhead--future" variants={item}>
                <Compass size={16} strokeWidth={1.7} />
                On the horizon — future learning interests
              </motion.div>
              <div className="research-grid">
                {futureInterests.map((s) => (
                  <motion.div key={s.id} className="research-card research-card--future" variants={item}>
                    <h3 className="research-card__title">{s.title}</h3>
                    <p className="research-card__desc">{s.description}</p>
                    <div className="tag-row">
                      {s.tags.map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          )}

          {/* Writing */}
          {articles.length > 0 && (
            <>
              <motion.div className="research__subhead" variants={item}>
                Writing
              </motion.div>
              <div className="research-articles">
                {articles.map((a) => (
                  <motion.a
                    key={a.id}
                    href={a.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="article-card"
                    variants={item}
                  >
                    <div className="article-card__body">
                      {a.featured && <span className="article-card__flag">Featured</span>}
                      <h3 className="article-card__title">{a.title}</h3>
                      <p className="article-card__desc">{a.description}</p>
                      <div className="tag-row">
                        {a.tags.map((t) => (
                          <Tag key={t}>{t}</Tag>
                        ))}
                      </div>
                      <div className="article-card__meta">
                        <span>
                          <Calendar size={13} strokeWidth={1.6} /> {formatDate(a.publishDate)}
                        </span>
                        <span>
                          <Clock size={13} strokeWidth={1.6} /> {a.readTime}
                        </span>
                      </div>
                    </div>
                    <span className="article-card__go">
                      Read <ArrowUpRight strokeWidth={1.8} />
                    </span>
                  </motion.a>
                ))}
              </div>
            </>
          )}
        </motion.div>
      </Container>
    </section>
  );
};

export default Research;
