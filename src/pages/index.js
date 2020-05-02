import React from 'react';
import Layout from 'components/layout/Layout';
import SEO from 'components/commons/SEO';
import Hero from 'templates/index-page/Hero';
import LastProjects from 'templates/index-page/LastProjects';
import Services from 'templates/index-page/Services';
import Blog from 'templates/index-page/Blog';

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
