import React from 'react';
import { render } from 'utils/test-utils';
import Paragraph from './Paragraph';

describe('<Paragraph />', () => {
  it('renders properly with given content', () => {
    const paragraphContent = 'Lorem ipsum dolor sit amet.';

    const { getByText } = render(<Paragraph>{paragraphContent}</Paragraph>);

    const paragraph = getByText(paragraphContent);

    expect(paragraph).toBeInTheDocument();
  });
});
