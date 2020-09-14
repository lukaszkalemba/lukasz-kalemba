import React from 'react';
import { render } from 'utils/test-utils';
import ProjectContent from './ProjectContent';

describe('<ProjectContent />', () => {
  it('renders correctly with fake images and matches snapshot', () => {
    const fakeProps = {
      firstViewImage: { aspectRatio: 0, sizes: '', src: '', srcSet: '' },
      secondViewImage: { aspectRatio: 0, sizes: '', src: '', srcSet: '' },
      thirdViewImage: { aspectRatio: 0, sizes: '', src: '', srcSet: '' },
    };

    const { container } = render(<ProjectContent {...fakeProps} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
