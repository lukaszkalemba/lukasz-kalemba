import React from 'react';
import Container from 'components/commons/Container';
import Heading from 'components/commons/Heading';
import Card from 'components/commons/Card';
import Link from 'components/commons/Link';
import S from './Blog.styles';

const cards = [
  {
    id: 8,
    title: 'Znaczenie brandingu',
  },
  {
    id: 9,
    title: 'Znaczenie brandingu',
  },
  {
    id: 10,
    title: 'Znaczenie brandingu',
  },
  {
    id: 11,
    title: 'Znaczenie brandingu',
  },
];

const Blog = () => {
  return (
    <S.Section>
      <Container axis="both">
        <Heading section="blog">Najnowsze informacje.</Heading>
        <Container axis="x">
          <S.Cards>
            {cards.map(({ id, title }) => (
              <Card key={id} index={id} title={title} small />
            ))}
          </S.Cards>
          <Link to="/blog">Sprawdź inne</Link>
        </Container>
      </Container>
    </S.Section>
  );
};

export default Blog;
