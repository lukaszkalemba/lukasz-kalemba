import React from 'react';
import CompanyInformations from './CompanyInformations';

const variants = {
  childrenVariants: {
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
    initial: { opacity: 0, y: 20 },
  },
};

export const companyInformations = () => (
  <CompanyInformations variants={variants} />
);

export default {
  component: CompanyInformations,
  title: 'Molecules|CompanyInformations',
};
