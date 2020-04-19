import React from 'react';
import Container from 'components/commons/Container';
import Heading from 'components/commons/Heading';

const Hero = () => {
  return (
    <Container axis="both">
      <div style={{ height: '100vh' }}>
        <Heading tag="h1">Zaistniej w sieci</Heading>
      </div>
    </Container>
  );
};

export default Hero;
