import React from 'react';
import { render } from 'utils/test-utils';
import Paragraph from './Paragraph';

describe('<Paragraph />', () => {
  it('renders correctly', () => {
    const fakeContent = 'Paragraph test';
    const { getByTestId } = render(<Paragraph>{fakeContent}</Paragraph>);

    expect(getByTestId('paragraph')).toHaveTextContent(fakeContent);
  });
});
