import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import SEO from 'components/common/SEO';
import ProjectHero from 'containers/project-page/ProjectHero';
import ProjectContent from 'containers/project-page/ProjectContent';

export const PROJECT_QUERY = graphql`
  query($slug: String!) {
    project: datoCmsProject(slug: { eq: $slug }) {
      title
      description
      image {
        fluid {
          ...GatsbyDatoCmsFluid_noBase64
        }
      }
    }
  }
`;

const ProjectPageTemplate = ({ data }) => {
  const { title, description, image } = data.project;

  return (
    <>
      <SEO title={title} />
      <ProjectHero
        title={title}
        description={description}
        image={image.fluid}
      />
      <ProjectContent />
    </>
  );
};

ProjectPageTemplate.propTypes = {
  data: PropTypes.shape({
    project: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.shape({
        fluid: PropTypes.object,
      }),
    }),
  }).isRequired,
};

export default ProjectPageTemplate;
