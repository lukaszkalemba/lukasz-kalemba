import React from 'react';
import useWindowSize from 'hooks/useWindowSize';
import animations from './TriangleDecorator.animations';
import S from './TriangleDecorator.styles';

const TriangleDecorator = () => {
  const size = useWindowSize();

  const isMobile = size.width < 1150;

  const triangleAnimations = animations.getTriangle(isMobile);

  return <S.TriangleDecorator {...triangleAnimations} />;
};

export default TriangleDecorator;
