import React from 'react';
import SEO from 'components/particles/SEO';
import Hero from 'components/organisms/Hero';
import FeaturedProjects from 'components/organisms/FeaturedProjects';
import Services from 'components/organisms/Services';
import Blog from 'components/organisms/Blog';

const IndexPage = () => (
  <>
    <SEO title="home" />
    <Hero />
    <FeaturedProjects />
    <Services />
    <Blog />
  </>
);

export default IndexPage;
