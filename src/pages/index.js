import React from 'react';
import Layout from 'components/layout/Layout';
import SEO from 'components/commons/SEO';
import Hero from 'templates/index-page/Hero';
import LastProjects from 'templates/index-page/LastProjects';
import Services from 'templates/index-page/Services';

const IndexPage = () => (
  <Layout>
    <SEO title="home" />
    <Hero />
    <LastProjects />
    <Services />
  </Layout>
);

export default IndexPage;
