import React, { useEffect } from 'react';
import { hotjar } from 'react-hotjar';
import SEO from 'components/particles/SEO';
import HomePageHero from 'components/organisms/HomePageHero';
import FeaturedProjects from 'components/organisms/FeaturedProjects';
import OfferedServices from 'components/organisms/OfferedServices';
import FeaturedBlogPosts from 'components/organisms/FeaturedBlogPosts';

const IndexPage = () => {
  useEffect(() => {
    hotjar.initialize(process.env.HOTJAR_USER_ID, 6);
  }, []);

  return (
    <>
      <SEO title="home" />
      <HomePageHero />
      <FeaturedProjects />
      <OfferedServices />
      <FeaturedBlogPosts />
    </>
  );
};

export default IndexPage;
