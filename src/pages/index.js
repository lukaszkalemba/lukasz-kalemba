import React from 'react';
import Layout from 'assets/global/Layout/Layout';
import SEO from 'assets/global/SEO/SEO';
import Overlay from 'templates/Overlay/Overlay';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Overlay />
  </Layout>
);

export default IndexPage;
