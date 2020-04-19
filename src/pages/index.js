import React from 'react';
import Layout from 'components/layout/Layout';
import SEO from 'components/commons/SEO';
import Container from 'components/commons/Container';
import Hero from 'templates/index-page/Hero';

const IndexPage = () => (
  <Layout>
    <SEO title="home" />
    <Container axis="both">
      <Hero />
    </Container>
  </Layout>
);

export default IndexPage;
