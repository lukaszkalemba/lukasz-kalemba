import React from 'react';
import { render } from 'utils/test-utils';
import ServicesWrapper from './ServicesWrapper';

describe('<ServicesWrapper />', () => {
  it('renders correctly', () => {
    const fakeImages = {
      design: {
        childImageSharp: {},
      },
      webapp: {
        childImageSharp: {},
      },
      ecommerce: {
        childImageSharp: {},
      },
    };

    const { container } = render(<ServicesWrapper images={fakeImages} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
