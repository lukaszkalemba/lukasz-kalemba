import React from 'react';
import PropTypes from 'prop-types';
import Image from 'gatsby-image';
import Container from 'components/common/Container';
import Heading from 'components/common/Heading';

const ProjectHero = ({ title, description, image }) => {
  return (
    <Container axis="both">
      <Heading>{title}</Heading>
      <p>{description}</p>
      <Image fluid={image} />
    </Container>
  );
};

ProjectHero.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.shape({
    fluid: PropTypes.object,
  }).isRequired,
};

export default ProjectHero;
