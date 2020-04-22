import React from 'react';
import Heading from 'components/commons/Heading';
import Button from 'components/commons/Button';

const NotFound = () => {
  return (
    <div>
      <Heading>Coś poszło nie tak...</Heading>
      <Button priority="secondary">Zrealizowane projekty</Button>;
    </div>
  );
};

export default NotFound;
