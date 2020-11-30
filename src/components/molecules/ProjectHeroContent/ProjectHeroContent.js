import React from 'react';
import PropTypes from 'prop-types';
import Heading from 'components/atoms/Heading';
import S from './ProjectHeroContent.styles';

const ProjectHeroContent = ({ title, description, animation }) => {
  return (
    <>
      <Heading isH1>{title}</Heading>
      <S.Description {...animation}>{description}</S.Description>
    </>
  );
};

ProjectHeroContent.defaultProps = {
  animation: {},
};

ProjectHeroContent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  animation: PropTypes.shape({
    variants: PropTypes.shape({
      animate: PropTypes.shape({}),
      initial: PropTypes.shape({}),
    }),
  }),
};

export default ProjectHeroContent;
