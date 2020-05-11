import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Container from 'components/common/Container';
import Heading from 'components/common/Heading';
import Card from 'components/common/Card';
import Link from 'components/common/Link';
import S from './LastProjects.styles';

const PROJECTS_QUERY = graphql`
  {
    projects: allDatoCmsProject {
      edges {
        node {
          id
          title
          slug
          image {
            fluid {
              ...GatsbyDatoCmsFluid_noBase64
            }
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
        <Heading>Ostatnie projekty.</Heading>

        <Container axis="x">
          <S.Cards>
            {projects.edges.map(({ node }, index) => (
              <Card
                key={node.id}
                index={index}
                title={node.title}
                slug={node.slug}
                image={node.image}
                preSlug="projekty"
              />
            ))}
          </S.Cards>
          <Link to="/projekty">Sprawdź inne</Link>
        </Container>
      </Container>
    </S.Section>
  );
};

export default LastProjects;
