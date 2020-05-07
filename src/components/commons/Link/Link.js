import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/commons/Icon';
import arrow from 'assets/svgs/icon_arrow.svg';
import S from './Link.styles';

const Link = ({ to, children }) => {
  return (
    <S.Wrapper>
      <S.Link to={to}>
        {children}
        <S.Arrow>
          <Icon src={arrow} />
        </S.Arrow>
      </S.Link>
    </S.Wrapper>
  );
};

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Link;
