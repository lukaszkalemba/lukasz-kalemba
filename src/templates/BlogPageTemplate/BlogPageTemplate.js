import React from 'react';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout/Layout';
import SEO from 'components/commons/SEO';
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

const BlogPageTemplate = ({ data }) => {
  const { title, content, image } = data.blogPost;

  return (
    <Layout>
      <SEO title={title} />
      <Container axis="both">
        <h1>Blog template</h1>
        <h1>{title}</h1>
        <p>{content}</p>
        <Image fluid={image.fluid} />
      </Container>
    </Layout>
  );
};

BlogPageTemplate.propTypes = {
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

export default BlogPageTemplate;
