import React from 'react';
import SEO from 'components/common/SEO';
import AllBlogPosts from 'containers/blog-page/AllBlogPosts';

const BlogPage = () => {
  return (
    <>
      <SEO title="blog" />
      <AllBlogPosts />
    </>
  );
};

export default BlogPage;
