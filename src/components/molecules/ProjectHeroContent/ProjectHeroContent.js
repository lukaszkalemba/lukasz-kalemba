import React from 'react';
import PropTypes from 'prop-types';
import Heading from 'components/atoms/Heading';
import S from './ProjectHeroContent.styles';

const ProjectHeroContent = ({ title, description, animations }) => {
  return (
    <>
      <Heading>{title}</Heading>
      <S.Description
        variants={animations.descriptionVariants}
        animate="animate"
        initial="initial"
      >
        {description}
      </S.Description>
    </>
  );
};

ProjectHeroContent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  animations: PropTypes.shape({
    descriptionVariants: PropTypes.shape({}),
  }).isRequired,
};

export default ProjectHeroContent;
