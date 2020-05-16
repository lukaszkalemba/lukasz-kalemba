import React from 'react';
import PropTypes from 'prop-types';
import Image from 'gatsby-image';
import Container from 'components/common/Container';

const ProjectContent = ({
  firstViewImage,
  secondViewImage,
  thirdViewImage,
}) => {
  return (
    <Container axis="both">
      <Image fluid={firstViewImage} />
      <Image fluid={secondViewImage} />
      <Image fluid={thirdViewImage} />
    </Container>
  );
};

ProjectContent.propTypes = {
  firstViewImage: PropTypes.shape({
    fluid: PropTypes.object,
  }).isRequired,
  secondViewImage: PropTypes.shape({
    fluid: PropTypes.object,
  }).isRequired,
  thirdViewImage: PropTypes.shape({
    fluid: PropTypes.object,
  }).isRequired,
};

export default ProjectContent;
