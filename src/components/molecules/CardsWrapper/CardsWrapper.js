import React from 'react';
import PropTypes from 'prop-types';
import Card from 'components/atoms/Card';
import S from './CardsWrapper.styles';

const CardsWrapper = ({ items, pageSlug, smallCards }) => {
  return (
    <S.Cards>
      {items.edges.map(({ node }, index) => (
        <Card
          key={node.id}
          index={index}
          title={node.title}
          slug={node.slug}
          image={node.image}
          preSlug={pageSlug}
          small={smallCards}
        />
      ))}
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
