import React from 'react';
import { render } from 'utils/test-utils';
import TriangleDecorator from './TriangleDecorator';

describe('<TriangleDecorator />', () => {
  it('matches snapshot', () => {
    const { container } = render(<TriangleDecorator />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
