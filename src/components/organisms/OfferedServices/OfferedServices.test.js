import React from 'react';
import { render } from 'utils/test-utils';
import * as Gatsby from 'gatsby';
import '__mocks__/intersectionObserver';
import OfferedServices from './OfferedServices';

beforeEach(() => {
  const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');

  useStaticQuery.mockImplementation(() => ({
    design: {
      childImageSharp: {
        fluid: {
          aspectRatio: 0,
          src: '',
          srcSet: '',
          sizes: '',
        },
      },
    },
    webapp: {
      childImageSharp: {
        fluid: {
          aspectRatio: 0,
          src: '',
          srcSet: '',
          sizes: '',
        },
      },
    },
    ecommerce: {
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

describe('<OfferedServices />', () => {
  it('has heading, subheadings and link components inside', () => {
    const { getByRole, getByText } = render(<OfferedServices />);

    const heading = getByRole('heading', { level: 2 });
    const link = getByRole('link');

    const designService = getByText(/projektowanie/i);
    const websitesService = getByText(/strony/i);
    const ecommerceService = getByText(/sklepy/i);

    expect(heading).toBeInTheDocument();
    expect(link).toBeInTheDocument();

    expect(designService).toBeInTheDocument();
    expect(websitesService).toBeInTheDocument();
    expect(ecommerceService).toBeInTheDocument();
  });
});
