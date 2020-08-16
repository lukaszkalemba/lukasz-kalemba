import React from 'react';
import SEO from 'components/particles/SEO';
import HomePageHero from 'components/organisms/HomePageHero';
import FeaturedProjects from 'components/organisms/FeaturedProjects';
import Services from 'components/organisms/Services';
import FeaturedBlogPosts from 'components/organisms/FeaturedBlogPosts';

const IndexPage = () => (
  <>
    <SEO title="home" />
    <HomePageHero />
    <FeaturedProjects />
    <Services />
    <FeaturedBlogPosts />
  </>
);

export default IndexPage;
