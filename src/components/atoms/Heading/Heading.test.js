import React from 'react';
import { render } from 'utils/test-utils';
import theme from 'utils/theme';
import 'jest-styled-components';
import '__mocks__/intersectionObserver';
import Heading from './Heading';

describe('<Heading />', () => {
  it('renders correctly as h1 element', () => {
    const fakeContent = 'heading content';
    const { getByTestId } = render(<Heading tag="h1">{fakeContent}</Heading>);

    const heading = getByTestId('heading');

    expect(heading.tagName).toBe('H1');
    expect(heading).toHaveTextContent(fakeContent);
    expect(heading).toHaveStyleRule('font-size', theme.font.size.m);
  });

  it('renders correctly as h2 element', () => {
    const { getByTestId } = render(<Heading>heading content</Heading>);

    const heading = getByTestId('heading');

    expect(heading.tagName).toBe('H2');
    expect(heading).toHaveStyleRule('font-size', theme.font.size.s);
  });
});
