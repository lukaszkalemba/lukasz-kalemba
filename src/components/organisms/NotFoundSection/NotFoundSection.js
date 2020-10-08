import React, { useEffect } from 'react';
import NotFoundSectionContent from 'components/molecules/NotFoundSectionContent';
import TriangleDecorator from 'components/atoms/TriangleDecorator';
import Container from 'components/particles/Container';
import { setHeightOnMobile } from 'helpers/setHeightOnMobile';
import S from './NotFoundSection.styles';

const NotFoundSection = () => {
  useEffect(() => {
    setHeightOnMobile();
  }, []);

  return (
    <S.Wrapper>
      <Container axis="both">
        <NotFoundSectionContent />
      </Container>
      <TriangleDecorator />
    </S.Wrapper>
  );
};

export default NotFoundSection;
