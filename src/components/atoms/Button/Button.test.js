import React from 'react';
import { render } from 'utils/test-utils';
import theme from 'theme';
import 'jest-styled-components';
import Button from './Button';

const renderButton = props => {
  const utils = render(<Button {...props}>button</Button>);

  const button = utils.getByText(/^button/i);
  return { ...utils, button };
};

describe('<Button />', () => {
  it('renders properly primary button as link', () => {
    const buttonProps = {
      path: '/',
      type: 'link',
      priority: 'primary',
    };

    const { getByRole, queryByRole } = renderButton(buttonProps);

    const link = getByRole('link');
    const button = queryByRole('button');

    expect(link).toHaveStyleRule('color', theme.color.dark);
    expect(link).toHaveStyleRule('background-color', theme.color.white);
    expect(link).toHaveAttribute('href', buttonProps.path);
    expect(button).not.toBeInTheDocument();
  });

  it('renders properly secondary button as submit button', () => {
    const buttonProps = {
      type: 'submit',
      priority: 'secondary',
    };

    const { getByRole, queryByRole } = renderButton(buttonProps);

    const button = getByRole('button');
    const link = queryByRole('link');

    expect(button).toHaveStyleRule('color', theme.color.white);
    expect(button).toHaveStyleRule('background-color', theme.color.transparent);
    expect(button).toHaveAttribute('type', buttonProps.type);
    expect(link).not.toBeInTheDocument();
  });
});
