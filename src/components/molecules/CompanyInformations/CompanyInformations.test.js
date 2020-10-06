import React from 'react';
import { render } from 'utils/test-utils';
import '__mocks__/intersectionObserver';
import CompanyInformations from './CompanyInformations';

describe('<CompanyInformations />', () => {
  it('matches snapshot', () => {
    const { container } = render(<CompanyInformations />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
