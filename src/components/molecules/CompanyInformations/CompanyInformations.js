import React from 'react';
import PropTypes from 'prop-types';
import S from './CompanyInformations.styles';

const CompanyInformations = ({ animation }) => (
  <S.Wrapper {...animation}>
    <S.Link href="tel:+48797709856">+48 797 709 856</S.Link>
    <S.Link href="mailto:kontakt@lukaszkalemba.pl">
      kontakt@lukaszkalemba.pl
    </S.Link>
    <S.Paragraph>REGON: 000000000</S.Paragraph>
    <S.Paragraph>KRS: 0000000000</S.Paragraph>
  </S.Wrapper>
);

CompanyInformations.defaultProps = {
  animation: {},
};

CompanyInformations.propTypes = {
  animation: PropTypes.shape({
    variants: PropTypes.shape({
      initial: PropTypes.shape({}),
      animate: PropTypes.shape({}),
    }),
  }),
};

export default CompanyInformations;
