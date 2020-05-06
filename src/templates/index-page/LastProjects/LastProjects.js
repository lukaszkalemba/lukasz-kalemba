import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Container from 'components/commons/Container';
import Heading from 'components/commons/Heading';
import Card from 'components/commons/Card';
import Link from 'components/commons/Link';
import S from './LastProjects.styles';

const PROJECTS_QUERY = graphql`
  {
    projects: allDatoCmsProject {
      edges {
        node {
          id
          title
          image {
            path
          }
        }
      }
    }
  }
`;

const LastProjects = () => {
  const { projects } = useStaticQuery(PROJECTS_QUERY);

  return (
    <S.Section>
      <Container axis="both">
        <Heading section="last-projects">Ostatnie projekty.</Heading>

        <Container axis="x">
          <S.Cards>
            {projects.edges.map(({ node }, index) => (
              <Card key={node.id} index={index} title={node.title} />
            ))}
          </S.Cards>
          <Link to="/projekty">Sprawdź inne</Link>
        </Container>
      </Container>
    </S.Section>
  );
};

export default LastProjects;
