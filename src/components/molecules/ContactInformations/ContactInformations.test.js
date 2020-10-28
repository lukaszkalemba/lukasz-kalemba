import React from 'react';
import { render } from 'utils/test-utils';
import '__mocks__/intersectionObserver';
import ContactInformations from './ContactInformations';

describe('<ContactInformations />', () => {
  it('matches snapshot', () => {
    const { container } = render(<ContactInformations />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
