import React from 'react';
import { render } from 'utils/test-utils';
import user from '@testing-library/user-event';
import theme from 'utils/theme';
import 'jest-styled-components';
import Button from './Button';

describe('<Button />', () => {
  it('renders correctly primary button', () => {
    const fakeContent = 'button content';
    const fakeProps = {
      path: '/test-path',
      priority: 'primary',
      onClick: jest.fn(),
    };

    const { getByRole } = render(<Button {...fakeProps}>{fakeContent}</Button>);

    const button = getByRole('button');
    const buttonLink = getByRole('link');

    expect(button).toHaveTextContent(fakeContent);

    user.click(button);

    expect(fakeProps.onClick).toHaveBeenCalledTimes(1);
    expect(button).toHaveStyleRule('color', theme.color.dark);
    expect(button).toHaveStyleRule('background-color', theme.color.white);
    expect(buttonLink).toHaveAttribute('href', fakeProps.path);
  });

  it('renders correctly secondary submit button', () => {
    const fakeProps = {
      type: 'submit',
      priority: 'secondary',
    };

    const { getByRole, queryByRole } = render(
      <Button {...fakeProps}>button content</Button>
    );

    const button = getByRole('button');
    const buttonLink = queryByRole('link');

    expect(button).toHaveStyleRule('color', theme.color.white);
    expect(button).toHaveStyleRule('background-color', theme.color.transparent);
    expect(buttonLink).not.toBeInTheDocument();
  });
});
