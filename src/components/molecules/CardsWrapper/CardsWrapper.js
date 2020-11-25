import React from 'react';
import PropTypes from 'prop-types';
import useWindowSize from 'hooks/useWindowSize';
import Card from 'components/atoms/Card';
import S from './CardsWrapper.styles';

const CardsWrapper = ({ items, pageSlug, smallCards }) => {
  const size = useWindowSize();

  return (
    <S.Cards>
      {items.edges.map(({ node }, index) => {
        const isOffset = index % 2 !== 0 && size.width > 768 && true;

        return (
          <Card
            key={node.id}
            title={node.title}
            slug={node.slug}
            preSlug={pageSlug}
            image={node.image}
            isOffset={isOffset}
            small={smallCards}
          />
        );
      })}
    </S.Cards>
  );
};

CardsWrapper.defaultProps = {
  smallCards: false,
};

CardsWrapper.propTypes = {
  items: PropTypes.shape({
    edges: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
  pageSlug: PropTypes.oneOf(['projekty', 'blog']).isRequired,
  smallCards: PropTypes.bool,
};

export default CardsWrapper;
