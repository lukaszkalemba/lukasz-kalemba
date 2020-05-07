import React from 'react';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout/Layout';
import SEO from 'components/commons/SEO';
import Container from 'components/commons/Container';

export const PROJECT_QUERY = graphql`
  query($slug: String!) {
    project: datoCmsProject(slug: { eq: $slug }) {
      title
      content
      image {
        fluid {
          ...GatsbyDatoCmsFluid_noBase64
        }
      }
    }
  }
`;

const ProjectPageTemplate = ({ data }) => {
  const { title, content, image } = data.project;

  return (
    <Layout>
      <SEO title={title} />
      <Container axis="both">
        <h1>{title}</h1>
        <p>{content}</p>
        <Image fluid={image.fluid} />
      </Container>
    </Layout>
  );
};

ProjectPageTemplate.propTypes = {
  data: PropTypes.shape({
    project: PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string,
      image: PropTypes.shape({
        fluid: PropTypes.object,
      }),
    }),
  }).isRequired,
};

export default ProjectPageTemplate;
