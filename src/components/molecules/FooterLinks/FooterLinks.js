import React from 'react';
import links from 'utils/links';
import S from './FooterLinks.styles';

const FooterLinks = () => (
  <S.Wrapper>
    {links.map(({ id, path, name }) => (
      <S.Link key={id} to={path}>
        {name}
      </S.Link>
    ))}
  </S.Wrapper>
);

export default FooterLinks;
