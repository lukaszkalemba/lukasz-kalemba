import React from 'react';
import { render } from 'utils/test-utils';
import '__mocks__/intersectionObserver';
import Service from './Service';

describe('<Service />', () => {
  it('has proper title', () => {
    const serviceProps = {
      image: {
        fluid: {
          aspectRatio: 0,
          sizes: '',
          src: '',
          srcSet: '',
        },
      },
      animation: {},
      children: 'Web applications',
    };

    const { getByText } = render(<Service {...serviceProps} />);

    const serviceTitle = getByText(serviceProps.children);

    expect(serviceTitle).toBeInTheDocument();
  });
});
