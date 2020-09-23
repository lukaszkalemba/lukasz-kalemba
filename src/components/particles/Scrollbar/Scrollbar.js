import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Scroll from 'smooth-scrollbar';
import stopScrollbarPlugin from 'utils/stopScrollbarPlugin';
import useWindowSize from 'hooks/useWindowSize';
import S from './Scrollbar.styles';

const Scrollbar = ({ children }) => {
  const size = useWindowSize();

  let scrollbar = useRef(null);

  useEffect(() => {
    if (size.width >= 1150) {
      Scroll.use(stopScrollbarPlugin);

      const scroll = Scroll.init(scrollbar, {
        damping: 0.05,
      });

      window.smoothScroll = scroll;
    }
  }, []);

  return (
    <S.Scrollbar
      ref={el => {
        scrollbar = el;
      }}
    >
      {children}
    </S.Scrollbar>
  );
};

Scrollbar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Scrollbar;
