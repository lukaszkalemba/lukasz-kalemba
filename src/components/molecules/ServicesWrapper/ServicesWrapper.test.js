import React from 'react';
import { render } from 'utils/test-utils';
import ServicesWrapper from './ServicesWrapper';

const renderServicesWrapper = props => {
  const utils = render(
    <ServicesWrapper
      images={{
        design: {
          childImageSharp: {},
        },
        webapp: {
          childImageSharp: {},
        },
        ecommerce: {
          childImageSharp: {},
        },
      }}
      {...props}
    />
  );

  return { ...utils };
};

describe('<SocialMediaIcons />', () => {
  it('renders with all required headings', () => {
    const { getByText } = renderServicesWrapper();

    expect(getByText(/projektowanie/i)).toBeInTheDocument();
    expect(getByText(/strony/i)).toBeInTheDocument();
    expect(getByText(/sklepy/i)).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const { container } = renderServicesWrapper();

    expect(container.firstChild).toMatchSnapshot();
  });
});
