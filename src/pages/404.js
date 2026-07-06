import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { ArrowLeft } from 'lucide-react';

import { headData } from '../mock/data';
import { Container } from '../components/ui';
import '../style/main.scss';

const NotFoundPage = () => {
  const { lang } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Page not found — Eder Mazariegos</title>
        <html lang={lang || 'en'} />
        <meta name="description" content="Page not found" />
      </Helmet>
      <section className="notfound">
        <Container>
          <span className="kicker"><span className="kicker__num">404</span>Not found</span>
          <h1>This path doesn’t exist.</h1>
          <p className="lead">The page you’re looking for may have moved or never existed.</p>
          <Link to="/" className="btn btn--solid">
            <ArrowLeft strokeWidth={1.8} /> Go back home
          </Link>
        </Container>
      </section>
    </>
  );
};

export default NotFoundPage;
