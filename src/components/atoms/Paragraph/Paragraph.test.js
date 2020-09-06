import React from 'react';
import { render } from 'utils/test-utils';
import Paragraph from './Paragraph';

describe('<Paragraph />', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<Paragraph>Paragraph test</Paragraph>);

    expect(getByTestId('paragraph').textContent).toBe('Paragraph test');
  });
});
