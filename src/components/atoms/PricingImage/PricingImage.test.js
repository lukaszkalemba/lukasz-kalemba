import React from 'react';
import { render } from 'utils/test-utils';
import * as Gatsby from 'gatsby';
import PricingImage from './PricingImage';

beforeEach(() => {
  const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');

  useStaticQuery.mockImplementation(() => ({
    officeImage: {
      childImageSharp: {
        fluid: {
          aspectRatio: 0,
          src: '',
          srcSet: '',
          sizes: '',
        },
      },
    },
  }));
});

describe('<PricingImage />', () => {
  it('matches snapshot', () => {
    const { container } = render(<PricingImage />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
