import React from 'react';
import { render } from 'utils/test-utils';
import '__mocks__/intersectionObserver';
import Copyright from './Copyright';

describe('<Copyright />', () => {
  it('matches snapshot', () => {
    const { container } = render(<Copyright />);

    expect(container).toMatchSnapshot();
  });
});
