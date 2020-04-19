import React from 'react';
import Layout from 'components/layout/Layout';
import SEO from 'components/commons/SEO';
import Hero from 'templates/index-page/Hero';

const IndexPage = () => (
  <Layout>
    <SEO title="home" />
    <Hero />
  </Layout>
);

export default IndexPage;
