import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout/Layout';
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
    <Layout>
      <SEO title={title} />
      <BlogPost
        title={title}
        content={content}
        image={image}
        publicationDate={publicationDate}
      />
    </Layout>
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
