import React from 'react';
import Container from 'components/commons/Container';
import Paragraph from 'components/index-page/HeroParagraph';
import Heading from 'components/commons/Heading';
import Button from 'components/commons/Button';

const Hero = () => {
  return (
    <Container axis="both">
      <div style={{ height: '100vh' }}>
        <Paragraph>Zaistniej w świecie nieograniczonych możliwości</Paragraph>
        <Heading tag="h1">Zaistniej w sieci</Heading>
        <Button priority="primary">Bezpłatna wycena</Button>
        <Button priority="secondary">Zrealizowane projekty</Button>
      </div>
    </Container>
  );
};

export default Hero;
