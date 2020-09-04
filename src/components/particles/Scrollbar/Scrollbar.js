import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Scroll from 'smooth-scrollbar';
import stopScrollbarPlugin from 'utils/stopScrollbarPlugin';
import S from './Scrollbar.styles';

const Scrollbar = ({ children }) => {
  let scrollbar = useRef(null);

  useEffect(() => {
    Scroll.use(stopScrollbarPlugin);

    const scroll = Scroll.init(scrollbar, {
      damping: 0.05,
    });

    window.smoothScroll = scroll;
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
