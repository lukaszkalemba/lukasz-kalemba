import React from 'react';
import { render } from 'utils/test-utils';
import Paragraph from './Paragraph';

describe('<Paragraph />', () => {
  it('renders correctly with given content', () => {
    const fakeContent = 'Paragraph test';
    const { getByText } = render(<Paragraph>{fakeContent}</Paragraph>);

    const paragraph = getByText(fakeContent);

    expect(paragraph).toBeInTheDocument();
  });
});
