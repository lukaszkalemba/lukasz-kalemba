import React from 'react';
import { render } from 'utils/test-utils';
import CompanyInformations from './CompanyInformations';

describe('<CompanyInformations />', () => {
  it('matches snapshot', () => {
    const { container } = render(<CompanyInformations />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
