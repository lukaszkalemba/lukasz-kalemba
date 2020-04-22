import React from 'react';
import Layout from 'components/layout/Layout';
import SEO from 'components/commons/SEO';
import NotFound from 'templates/404-page/NotFound';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404" />
    <NotFound />
  </Layout>
);

export default NotFoundPage;
