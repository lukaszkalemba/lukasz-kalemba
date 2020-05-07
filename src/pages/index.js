import React from 'react';
import Layout from 'components/layout/Layout';
import SEO from 'components/common/SEO';
import Hero from 'containers/index-page/Hero';
import LastProjects from 'containers/index-page/LastProjects';
import Services from 'containers/index-page/Services';
import Blog from 'containers/index-page/Blog';

const IndexPage = () => (
  <Layout>
    <SEO title="home" />
    <Hero />
    <LastProjects />
    <Services />
    <Blog />
  </Layout>
);

export default IndexPage;
