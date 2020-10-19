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
      contentTitle
      contentDescription
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
    contentTitle,
    contentDescription,
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
        contentTitle={contentTitle}
        contentDescription={contentDescription}
        mainViewImage={mainViewImage.fluid}
        secondViewImage={secondViewImage.fluid}
        thirdViewImage={thirdViewImage.fluid}
      />
    </>
  );
};

ProjectPageTemplate.propTypes = {
  data: PropTypes.shape({
    project: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      contentTitle: PropTypes.string,
      contentDescription: PropTypes.string,
      image: PropTypes.shape({
        fluid: PropTypes.shape({}),
      }),
      mainViewImage: PropTypes.shape({
        fluid: PropTypes.shape({}),
      }),
      secondViewImage: PropTypes.shape({
        fluid: PropTypes.shape({}),
      }),
      thirdViewImage: PropTypes.shape({
        fluid: PropTypes.shape({}),
      }),
    }),
  }).isRequired,
};

export default ProjectPageTemplate;
