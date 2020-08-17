import React from 'react';
import SEO from 'components/particles/SEO';
import HomePageHero from 'components/organisms/HomePageHero';
import FeaturedProjects from 'components/organisms/FeaturedProjects';
import OfferedServices from 'components/organisms/OfferedServices';
import FeaturedBlogPosts from 'components/organisms/FeaturedBlogPosts';

const IndexPage = () => (
  <>
    <SEO title="home" />
    <HomePageHero />
    <FeaturedProjects />
    <OfferedServices />
    <FeaturedBlogPosts />
  </>
);

export default IndexPage;
