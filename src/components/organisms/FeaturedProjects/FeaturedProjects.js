import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Container from 'components/particles/Container';
import Cards from 'components/molecules/CardsWrapper';
import Heading from 'components/atoms/Heading';
import Link from 'components/atoms/Link';
import S from './FeaturedProjects.styles';

const FEATURED_PROJECTS_QUERY = graphql`
  {
    projects: allDatoCmsProject(filter: { featured: { eq: true } }) {
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

const FeaturedProjects = () => {
  const { projects } = useStaticQuery(FEATURED_PROJECTS_QUERY);

  return (
    <S.Section>
      <Container axis="both">
        <Heading>Ostatnie projekty.</Heading>
        <Container axis="x">
          <Cards items={projects} pageSlug="projekty" />
          <Link to="/projekty" animate>
            Sprawdź inne
          </Link>
        </Container>
      </Container>
    </S.Section>
  );
};

export default FeaturedProjects;
