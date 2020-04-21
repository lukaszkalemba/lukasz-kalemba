import React from 'react';
import Container from 'components/commons/Container';
import Link from 'components/commons/Link';
import S from './Services.styles';

const Services = () => {
  return (
    <S.Section>
      <S.Header>
        <Container axis="both">
          <S.Title>
            Stwórz z nami od zera niepowtarzalny projekt, lub przenieś już
            istniejący na kolejny poziom.
          </S.Title>
          <Link to="wycena">Bezpłatna wycena</Link>
        </Container>
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
