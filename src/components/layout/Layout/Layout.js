import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import theme from 'utils/theme';
import GlobalStyle from 'components/layout/GlobalStyle';
import Nav from 'components/layout/Nav';
import Footer from 'components/layout/Footer';
import S from './Layout.styles';

const Layout = ({ isFooter, children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <S.Wrapper>
          <Nav />
          <main>{children}</main>
          {isFooter && <Footer />}
        </S.Wrapper>
      </ThemeProvider>
    </>
  );
};

Layout.defaultProps = {
  isFooter: true,
};

Layout.propTypes = {
  isFooter: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Layout;
