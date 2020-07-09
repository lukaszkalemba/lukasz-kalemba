import React, { useRef, useEffect } from 'react';
import Scroll from 'smooth-scrollbar';
import PropTypes from 'prop-types';
import S from './Scrollbar.styles';

const Scrollbar = ({ children }) => {
  let scrollbar = useRef(null);

  useEffect(() => {
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
