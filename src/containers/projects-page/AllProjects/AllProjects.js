import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Container from 'components/common/Container';
import Heading from 'components/common/Heading';
import Card from 'components/common/Card';
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

  return (
    <>
      <Container axis="both">
        <Container axis="x">
          <Heading>Oni nam zaufali.</Heading>

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
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default AllProjects;
