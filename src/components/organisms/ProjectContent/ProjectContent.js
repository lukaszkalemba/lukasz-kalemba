import React from 'react';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import Container from 'components/particles/Container';
import S from './ProjectContent.styles';

const ProjectContent = ({ mainViewImage, secondViewImage, thirdViewImage }) => {
  const areAllImages = secondViewImage || thirdViewImage;

  return (
    <Container axis="both">
      <S.MainImage fluid={mainViewImage} />

      {areAllImages && (
        <S.DoubleImageSection>
          <S.SecondImage fluid={secondViewImage} />
          <Image fluid={thirdViewImage} />
        </S.DoubleImageSection>
      )}
    </Container>
  );
};

ProjectContent.defaultProps = {
  secondViewImage: null,
  thirdViewImage: null,
};

ProjectContent.propTypes = {
  mainViewImage: PropTypes.shape({}).isRequired,
  secondViewImage: PropTypes.shape({}),
  thirdViewImage: PropTypes.shape({}),
};

export default ProjectContent;
