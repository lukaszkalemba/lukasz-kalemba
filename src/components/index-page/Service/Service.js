import React from 'react';
import PropTypes from 'prop-types';

const Service = ({ children }) => {
  return (
    <article>
      <h3>{children}</h3>
    </article>
  );
};

Service.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Service;
