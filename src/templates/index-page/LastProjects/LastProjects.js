import React from 'react';
import Container from 'components/commons/Container';
import Heading from 'components/commons/Heading';
import Card from 'components/commons/Card';
import S from './LastProjects.styles';

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
  {
    id: 4,
    title: 'SpaceX',
  },
  {
    id: 5,
    title: 'Nivea',
  },
];

const LastProjects = () => {
  return (
    <section>
      <Container axis="both">
        <Heading>Ostatnie projekty.</Heading>
        <Container axis="x">
          <S.Cards>
            {cards.map(({ id, title }) => (
              <Card key={id} title={title} />
            ))}
          </S.Cards>
        </Container>
      </Container>
    </section>
  );
};

export default LastProjects;
