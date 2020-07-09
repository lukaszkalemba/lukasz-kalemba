import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import theme from 'utils/theme';
import GlobalStyle from 'components/particles/GlobalStyle';
import Scrollbar from 'components/particles/Scrollbar';
import Nav from 'components/organisms/Nav';
import Footer from 'components/organisms/Footer';

const MainPageTemplate = ({ location, children }) => {
  let isFooter = true;
  let isHomePage = false;

  switch (location.pathname) {
    case '/':
      isHomePage = true;
      break;

    case '/404':
      isFooter = false;
      break;

    default:
      break;
  }

  useEffect(() => {
    window.smoothScroll.scrollTop = 0;
    window.smoothScroll.setMomentum(0, 0);
  }, [location.pathname]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Scrollbar>
          <Nav path={location.pathname} isHomePage={isHomePage} />
          <main>{children}</main>
          {isFooter && <Footer />}
        </Scrollbar>
      </ThemeProvider>
    </>
  );
};

MainPageTemplate.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
  children: PropTypes.node.isRequired,
};

export default MainPageTemplate;
