import React from 'react';
import { render } from 'utils/test-utils';
import '__mocks__/intersectionObserver';
import ProjectHero from './ProjectHero';

describe('<ProjectHero />', () => {
  it('renders correctly and matches snapshot', () => {
    const { container } = render(<ProjectHero />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
