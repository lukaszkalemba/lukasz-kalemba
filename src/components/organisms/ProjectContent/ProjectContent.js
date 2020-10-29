import React from 'react';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import Container from 'components/particles/Container';
import S from './ProjectContent.styles';

const ProjectContent = ({ mainViewImage, secondViewImage, thirdViewImage }) => {
  return (
    <Container axis="both">
      <S.MainImage fluid={mainViewImage} />
      <S.DoubleImageSection>
        <Image fluid={secondViewImage} />
        <Image fluid={thirdViewImage} />
      </S.DoubleImageSection>
    </Container>
  );
};

ProjectContent.propTypes = {
  mainViewImage: PropTypes.shape({}).isRequired,
  secondViewImage: PropTypes.shape({}).isRequired,
  thirdViewImage: PropTypes.shape({}).isRequired,
};

export default ProjectContent;
