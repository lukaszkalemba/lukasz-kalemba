import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Container from 'components/particles/Container';
import Heading from 'components/atoms/Heading';
import Cards from 'components/molecules/CardsWrapper';

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

  console.log(projects);

  return (
    <>
      <Container axis="both" doubling="x">
        <Heading>Oni nam zaufali.</Heading>

        <Container axis="x">
          <Cards items={projects} pageSlug="projekty" />
        </Container>
      </Container>
    </>
  );
};

export default AllProjects;
