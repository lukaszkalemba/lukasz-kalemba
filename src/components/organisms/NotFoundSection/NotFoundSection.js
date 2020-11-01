import React, { useEffect } from 'react';
import useWindowSize from 'hooks/useWindowSize';
import NotFoundSectionContent from 'components/molecules/NotFoundSectionContent';
import TriangleDecorator from 'components/atoms/TriangleDecorator';
import Container from 'components/particles/Container';
import { setHeightOnMobile } from 'helpers/setHeightOnMobile';
import S from './NotFoundSection.styles';
import animations from './NotFoundSection.animations';

const NotFoundSection = () => {
  const size = useWindowSize();

  useEffect(() => {
    setHeightOnMobile();
  }, []);

  const isMobile = size.width < 1150;

  const triangleAnimation = animations.getTriangle(isMobile);

  return (
    <S.Wrapper>
      <Container axis="both">
        <NotFoundSectionContent />
      </Container>
      <TriangleDecorator animation={triangleAnimation} />
    </S.Wrapper>
  );
};

export default NotFoundSection;
