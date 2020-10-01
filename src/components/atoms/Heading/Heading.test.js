import React from 'react';
import { render } from 'utils/test-utils';
import theme from 'theme';
import 'jest-styled-components';
import '__mocks__/intersectionObserver';
import Heading from './Heading';

describe('<Heading />', () => {
  it('renders correctly as h1 home page element', () => {
    const fakeContent = 'heading content';
    const { getByRole } = render(
      <Heading tag="h1" homePage>
        {fakeContent}
      </Heading>
    );

    const heading = getByRole('heading');

    expect(heading.tagName).toBe('H1');
    expect(heading).toHaveTextContent(fakeContent);
    expect(heading).toHaveStyleRule('font-size', theme.font.size.m);
  });

  it('renders correctly as h2 element', () => {
    const { getByRole } = render(<Heading>heading content</Heading>);

    const heading = getByRole('heading');

    expect(heading.tagName).toBe('H2');
    expect(heading).toHaveStyleRule('font-size', theme.font.size.s);
  });
});
