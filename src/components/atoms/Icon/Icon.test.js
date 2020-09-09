import React from 'react';
import { render } from 'utils/test-utils';
import Icon from './Icon';

describe('<Icon />', () => {
  it('renders correctly and matches snapshot', () => {
    const fakeSvgPath =
      'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjUiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCA2NSAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0wIDFINjFMNDIuNSAxNC41IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz4NCjwvc3ZnPg0K';

    const { container } = render(<Icon src={fakeSvgPath} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
