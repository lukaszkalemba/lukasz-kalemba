import React from 'react';
import Link from 'components/commons/Link';
import S from './Services.styles';

const Services = () => {
  return (
    <S.Section>
      <S.Header>
        <h3>
          Stwórz z nami niepowtarzalny projekt, lub przenieś już istniejący na
          kolejny poziom.
        </h3>
        <Link to="wycena">Bezpłatna wycena</Link>
      </S.Header>

      <S.Services>
        <article>
          <h3>Projektowanie interfejsów</h3>
        </article>
        <article>
          <h3>Strony i aplikacje internetowe</h3>
        </article>
        <article>
          <h3>Sklepy internetowe</h3>
        </article>
      </S.Services>
    </S.Section>
  );
};

export default Services;
