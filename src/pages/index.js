import React from 'react';
import Layout from 'components/layout/Layout';
import SEO from 'components/commons/SEO';
import Hero from 'templates/index-page/Hero';
import LastProjects from 'templates/index-page/LastProjects';

const IndexPage = () => (
  <Layout>
    <SEO title="home" />
    <Hero />
    <LastProjects />
  </Layout>
);

export default IndexPage;
