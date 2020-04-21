import React from 'react';
import Link from 'components/commons/Link';

const Services = () => {
  return (
    <section>
      <div>
        <h3>
          Stwórz z nami niepowtarzalny projekt, lub przenieś już istniejący na
          kolejny poziom.
        </h3>
        <Link to="wycena">Bezpłatna wycena</Link>
      </div>
      <div>
        <article>
          <h3>Projektowanie interfejsów</h3>
        </article>
        <article>
          <h3>Strony i aplikacje internetowe</h3>
        </article>
        <article>
          <h3>Sklepy internetowe</h3>
        </article>
      </div>
    </section>
  );
};

export default Services;
