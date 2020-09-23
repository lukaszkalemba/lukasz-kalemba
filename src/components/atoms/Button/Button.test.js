import React from 'react';
import { render } from 'utils/test-utils';
import theme from 'utils/theme';
import 'jest-styled-components';
import Button from './Button';

describe('<Button />', () => {
  it('renders correctly primary link button', () => {
    const fakeContent = 'button content';
    const fakeProps = {
      path: '/test-path',
      type: 'link',
      priority: 'primary',
    };

    const { getByRole } = render(<Button {...fakeProps}>{fakeContent}</Button>);

    const link = getByRole('link');

    expect(link).toHaveTextContent(fakeContent);

    expect(link).toHaveStyleRule('color', theme.color.dark);
    expect(link).toHaveStyleRule('background-color', theme.color.white);
    expect(link).toHaveAttribute('href', fakeProps.path);
  });

  it('renders correctly secondary submit button', () => {
    const fakeProps = {
      type: 'submit',
      priority: 'secondary',
    };

    const { getByRole, queryByRole } = render(
      <Button {...fakeProps}>submit button</Button>
    );

    const button = getByRole('button');
    const link = queryByRole('link');

    expect(button).toHaveStyleRule('color', theme.color.white);
    expect(button).toHaveStyleRule('background-color', theme.color.transparent);
    expect(link).not.toBeInTheDocument();
  });
});
