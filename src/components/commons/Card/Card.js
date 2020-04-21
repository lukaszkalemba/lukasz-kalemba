import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title }) => {
  return (
    <article>
      <h3>{title}</h3>
    </article>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Card;
