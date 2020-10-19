import React from 'react';
import { render } from 'utils/test-utils';
import ProjectContent from './ProjectContent';

describe('<ProjectContent />', () => {
  it('renders properly with images and matches snapshot', () => {
    const props = {
      contentTitle: 'Lorem ipsum dolor sit amet.',
      contentDescription:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, quibusdam praesentium iste officia rem quo illo eos inventore aspernatur.',
      mainViewImage: { aspectRatio: 0, sizes: '', src: '', srcSet: '' },
      secondViewImage: { aspectRatio: 0, sizes: '', src: '', srcSet: '' },
      thirdViewImage: { aspectRatio: 0, sizes: '', src: '', srcSet: '' },
    };

    const { getByText } = render(<ProjectContent {...props} />);

    expect(getByText(props.contentTitle).tagName).toBe('H2');
    expect(getByText(props.contentDescription)).toBeInTheDocument();
  });
});
