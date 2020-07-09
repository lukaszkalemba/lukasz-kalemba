import React from 'react';
import MainPageTemplate from 'templates/MainPageTemplate';

/* eslint-disable react/prop-types */
export const wrapPageElement = ({ element, props }) => {
  return <MainPageTemplate {...props}>{element}</MainPageTemplate>;
};
