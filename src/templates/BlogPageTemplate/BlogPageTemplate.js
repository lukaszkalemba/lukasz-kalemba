import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import SEO from 'components/common/SEO';
import BlogPost from 'containers/blog-post-page/BlogPost';

export const BLOG_POST_QUERY = graphql`
  query($slug: String!) {
    blogPost: datoCmsBlogPost(slug: { eq: $slug }) {
      title
      content
      publicationDate
      image {
        fluid {
          ...GatsbyDatoCmsFluid_noBase64
        }
      }
    }
  }
`;

const BlogPageTemplate = ({ data }) => {
  const { title, content, image, publicationDate } = data.blogPost;

  return (
    <>
      <SEO title={title} />
      <BlogPost
        title={title}
        content={content}
        image={image}
        publicationDate={publicationDate}
      />
    </>
  );
};

BlogPageTemplate.propTypes = {
  data: PropTypes.shape({
    blogPost: PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string,
      publicationDate: PropTypes.string,
      image: PropTypes.shape({
        fluid: PropTypes.object,
      }),
    }),
  }).isRequired,
};

export default BlogPageTemplate;
