import React from 'react';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import Container from 'components/particles/Container';
import S from './ProjectContent.styles';

const ProjectContent = ({
  contentTitle,
  contentDescription,
  mainViewImage,
  secondViewImage,
  thirdViewImage,
}) => {
  return (
    <Container axis="both">
      <S.MainImage fluid={mainViewImage} />
      <S.DoubleImageSection>
        <div>
          <S.ContentWrapper>
            <S.Title>{contentTitle}</S.Title>
            <S.Paragraph>{contentDescription}</S.Paragraph>
          </S.ContentWrapper>
          <Image fluid={secondViewImage} />
        </div>
        <S.ThirdImage fluid={thirdViewImage} />
      </S.DoubleImageSection>
    </Container>
  );
};

ProjectContent.propTypes = {
  contentTitle: PropTypes.string.isRequired,
  contentDescription: PropTypes.string.isRequired,
  mainViewImage: PropTypes.shape({}).isRequired,
  secondViewImage: PropTypes.shape({}).isRequired,
  thirdViewImage: PropTypes.shape({}).isRequired,
};

export default ProjectContent;
