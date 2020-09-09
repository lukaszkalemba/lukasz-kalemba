import React from 'react';
import { render } from 'utils/test-utils';
import Service from './Service';

const fakeProps = {
  img: {
    fluid: {
      aspectRatio: 0,
      sizes: '',
      src: '',
      srcSet: '',
    },
  },
  variants: {},
};

describe('<Service />', () => {
  it('has proper title', () => {
    const fakeContent = 'Service test content';

    const { getByText } = render(
      <Service {...fakeProps}>{fakeContent}</Service>
    );

    const serviceTitle = getByText(fakeContent);

    expect(serviceTitle).toHaveTextContent(fakeContent);
  });
});
