import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Container from 'components/particles/Container';
import Heading from 'components/atoms/Heading';
import Cards from 'components/molecules/CardsWrapper';
import S from './AllProjects.styles';

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

const AllProjects = () => {
  const { projects } = useStaticQuery(PROJECTS_QUERY);

  const areCardsEven = projects.edges.length % 2 === 0;

  return (
    <S.Container axis="both" doubling="x" areCardsEven={areCardsEven}>
      <Heading isH1>Projekty.</Heading>

      <Container axis="x">
        <Cards items={projects} pageSlug="projekty" />
      </Container>
    </S.Container>
  );
};

export default AllProjects;
