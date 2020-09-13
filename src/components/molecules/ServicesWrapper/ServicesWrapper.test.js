import React from 'react';
import { render } from 'utils/test-utils';
import ServicesWrapper from './ServicesWrapper';

describe('<ServicesWrapper />', () => {
  it('renders correctly and matches snapshot', () => {
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

    const { container, getByText } = render(
      <ServicesWrapper images={fakeImages} />
    );

    const designService = getByText(/projektowanie/i);
    const websitesService = getByText(/strony/i);
    const ecommerceService = getByText(/sklepy/i);

    expect(designService).toBeInTheDocument();
    expect(websitesService).toBeInTheDocument();
    expect(ecommerceService).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
