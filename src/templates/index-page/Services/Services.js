import React from 'react';
import { useStaticQuery } from 'gatsby';
import Container from 'components/commons/Container';
import Link from 'components/commons/Link';
import Service from 'components/index-page/Service';
import { IMAGES_QUERY } from './Services.queries';
import S from './Services.styles';

const Services = () => {
  const { images } = useStaticQuery(IMAGES_QUERY);

  console.log(images);

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
        <Service>Projektowanie interfejsów</Service>
        <Service>Strony i aplikacje internetowe</Service>
        <Service>Sklepy internetowe</Service>
      </S.Services>
    </S.Section>
  );
};

export default Services;
