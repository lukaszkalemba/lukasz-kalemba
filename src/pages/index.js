import React from 'react';
import SEO from 'components/common/SEO';
import Hero from 'containers/index-page/Hero';
import LastProjects from 'containers/index-page/LastProjects';
import Services from 'containers/index-page/Services';
import Blog from 'containers/index-page/Blog';

const IndexPage = () => (
  <>
    <SEO title="home" />
    <Hero />
    <LastProjects />
    <Services />
    <Blog />
  </>
);

export default IndexPage;
