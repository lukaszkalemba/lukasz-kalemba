import React from 'react';
import { render } from 'utils/test-utils';
import ProjectContent from './ProjectContent';

describe('<ProjectContent />', () => {
  it('renders properly with images and matches snapshot', () => {
    const imagesProps = {
      firstViewImage: { aspectRatio: 0, sizes: '', src: '', srcSet: '' },
      secondViewImage: { aspectRatio: 0, sizes: '', src: '', srcSet: '' },
      thirdViewImage: { aspectRatio: 0, sizes: '', src: '', srcSet: '' },
    };

    const { container } = render(<ProjectContent {...imagesProps} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
