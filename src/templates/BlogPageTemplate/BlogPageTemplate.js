import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import SEO from 'components/common/SEO';
import BlogPostHero from 'containers/blog-post-page/BlogPostHero';
import BlogPostContent from 'containers/blog-post-page/BlogPostContent';

export const BLOG_POST_QUERY = graphql`
  query($slug: String!) {
    blogPost: datoCmsBlogPost(slug: { eq: $slug }) {
      title
      description
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
  const { title, description, content, image } = data.blogPost;

  return (
    <>
      <SEO title={title} />
      <BlogPostHero title={title} description={description} image={image} />
      <BlogPostContent content={content} />
    </>
  );
};

BlogPageTemplate.propTypes = {
  data: PropTypes.shape({
    blogPost: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      content: PropTypes.string,
      image: PropTypes.shape({
        fluid: PropTypes.object,
      }),
    }),
  }).isRequired,
};

export default BlogPageTemplate;
