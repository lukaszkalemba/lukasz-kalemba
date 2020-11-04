import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import SEO from 'components/particles/SEO';
import ProjectHero from 'components/organisms/ProjectHero';
import ProjectContent from 'components/organisms/ProjectContent';

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
      mainViewImage {
        fluid {
          ...GatsbyDatoCmsFluid_noBase64
        }
      }

      secondViewImage {
        fluid {
          ...GatsbyDatoCmsFluid_noBase64
        }
      }
      thirdViewImage {
        fluid {
          ...GatsbyDatoCmsFluid_noBase64
        }
      }
    }
  }
`;

const ProjectPageTemplate = ({ data }) => {
  const {
    title,
    description,
    image,
    mainViewImage,
    secondViewImage,
    thirdViewImage,
  } = data.project;

  return (
    <>
      <SEO title={title} />
      <ProjectHero
        title={title}
        description={description}
        image={image.fluid}
      />
      <ProjectContent
        mainViewImage={mainViewImage.fluid}
        secondViewImage={secondViewImage && secondViewImage.fluid}
        thirdViewImage={thirdViewImage && thirdViewImage.fluid}
      />
    </>
  );
};

ProjectPageTemplate.defaultProps = {
  data: {
    project: {
      secondViewImage: {
        fluid: null,
      },
      thirdViewImage: {
        fluid: null,
      },
    },
  },
};

ProjectPageTemplate.propTypes = {
  data: PropTypes.shape({
    project: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.shape({
        fluid: PropTypes.shape({}),
      }).isRequired,
      mainViewImage: PropTypes.shape({
        fluid: PropTypes.shape({}),
      }).isRequired,
      secondViewImage: PropTypes.shape({
        fluid: PropTypes.shape({}),
      }),
      thirdViewImage: PropTypes.shape({
        fluid: PropTypes.shape({}),
      }),
    }),
  }),
};

export default ProjectPageTemplate;
