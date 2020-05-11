import React from 'react';
import Layout from 'components/layout/Layout';

/* eslint-disable react/prop-types */
export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};
