import React from 'react';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout/Layout';
import Container from 'components/commons/Container';

export const BLOG_POST_QUERY = graphql`
  query($slug: String!) {
    blogPost: datoCmsBlogPost(slug: { eq: $slug }) {
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

const BlogTemplate = ({ data }) => {
  const { title, content, image } = data.blogPost;

  return (
    <Layout>
      <Container axis="both">
        <h1>Blog template</h1>
        <h1>{title}</h1>
        <p>{content}</p>
        <Image fluid={image.fluid} />
      </Container>
    </Layout>
  );
};

BlogTemplate.propTypes = {
  data: PropTypes.shape({
    blogPost: PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string,
      image: PropTypes.shape({
        fluid: PropTypes.object,
      }),
    }),
  }).isRequired,
};

export default BlogTemplate;
