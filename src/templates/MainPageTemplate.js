import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import GlobalStyle from 'components/particles/GlobalStyle';
import Nav from 'components/organisms/Nav';
import Footer from 'components/organisms/Footer';
import 'styles/fonts.css';

const MainPageTemplate = ({ pageResources, location, children }) => {
  const [isFooter, setIsFooter] = useState(false);

  useEffect(() => {
    setIsFooter(!pageResources.page.path.includes('404'));
  }, [location.pathname]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Nav path={location.pathname} />
        <main>{children}</main>
        <Footer isFooter={isFooter} />
      </ThemeProvider>
    </>
  );
};

MainPageTemplate.propTypes = {
  pageResources: PropTypes.shape({
    page: PropTypes.shape({
      path: PropTypes.string,
    }),
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
  children: PropTypes.node.isRequired,
};

export default MainPageTemplate;
