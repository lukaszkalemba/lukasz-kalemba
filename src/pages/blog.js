import React from 'react';
import SEO from 'components/particles/SEO';
import AllBlogPosts from 'components/organisms/AllBlogPosts';

const BlogPage = () => {
  return (
    <>
      <SEO title="blog" />
      <AllBlogPosts />
    </>
  );
};

export default BlogPage;
