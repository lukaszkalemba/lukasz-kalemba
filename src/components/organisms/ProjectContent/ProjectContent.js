import React from 'react';
import PropTypes from 'prop-types';
import Container from 'components/particles/Container';
import S from './ProjectContent.styles';

const ProjectContent = ({
  firstViewImage,
  secondViewImage,
  thirdViewImage,
}) => {
  return (
    <Container axis="both">
      <S.FirstPageWrapper>
        <S.Image fluid={firstViewImage} />
      </S.FirstPageWrapper>

      <S.ImagesGrid>
        <S.Image fluid={secondViewImage} />
        <S.Image fluid={thirdViewImage} />
      </S.ImagesGrid>
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
