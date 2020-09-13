import React from 'react';
import { render } from 'utils/test-utils';
import Service from './Service';

describe('<Service />', () => {
  it('renders correctly with proper title', () => {
    const fakeProps = {
      img: {
        fluid: {
          aspectRatio: 0,
          sizes: '',
          src: '',
          srcSet: '',
        },
      },
      animation: {},
    };

    const fakeContent = 'Service test content';

    const { getByText } = render(
      <Service {...fakeProps}>{fakeContent}</Service>
    );

    const serviceTitle = getByText(fakeContent);

    expect(serviceTitle).toBeInTheDocument();
  });
});
