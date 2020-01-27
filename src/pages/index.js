import React from 'react';
import Layout from 'components/layout/Layout';
import SEO from 'components/commons/SEO';
import Overlay from 'templates/Overlay';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Overlay />
  </Layout>
);

export default IndexPage;
