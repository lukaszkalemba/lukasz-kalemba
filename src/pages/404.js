import React from 'react';
import Layout from 'components/layout/Layout';
import SEO from 'components/common/SEO';
import NotFound from 'containers/404-page/NotFound';

const NotFoundPage = () => (
  <Layout isFooter={false}>
    <SEO title="404" />
    <NotFound />
  </Layout>
);

export default NotFoundPage;
