import React from 'react';
import Layout from 'components/layout/Layout';
import SEO from 'components/common/SEO';
import PricingForm from 'containers/pricing-page/PricingForm';

const PricingPage = () => (
  <Layout>
    <SEO title="wycena" />
    <PricingForm />
  </Layout>
);

export default PricingPage;
