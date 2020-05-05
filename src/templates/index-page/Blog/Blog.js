import React from 'react';
import Container from 'components/commons/Container';
import Heading from 'components/commons/Heading';
import Card from 'components/commons/Card';
import Link from 'components/commons/Link';
import S from './Blog.styles';

const cards = [
  {
    id: 0,
    title: 'Google',
  },
  {
    id: 1,
    title: 'Facebook',
  },
  {
    id: 2,
    title: 'Amazon',
  },
  {
    id: 3,
    title: 'Apple',
  },
];

const Blog = () => {
  return (
    <S.Section>
      <Container axis="both">
        <Heading>Najnowsze informacje.</Heading>
        <Container axis="x">
          <S.Cards>
            {cards.map(({ id, title }, index) => (
              <Card key={id} index={index} title={title} />
            ))}
          </S.Cards>
          <Link to="/blog">Sprawdź inne</Link>
        </Container>
      </Container>
    </S.Section>
  );
};

export default Blog;
