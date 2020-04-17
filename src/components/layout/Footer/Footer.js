import React from 'react';
import { Link } from 'gatsby';
import links from 'utils/links';

const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <a href="tel:+48797709856">+48 797 709 856</a>
          <a href="mailto:biuro@codemon.pl">biuro@codemon.pl</a>
          <p>REGON: 000000000</p>
          <p>KRS: 0000000000</p>
        </div>
        <div>logo</div>
        <div>
          <a href="https://facebook.com" target="__blank">
            facebook
          </a>
          <a href="https://facebook.com" target="__blank">
            facebook
          </a>
          <a href="https://facebook.com" target="__blank">
            facebook
          </a>
          <a href="https://facebook.com" target="__blank">
            facebook
          </a>
        </div>
      </div>
      <div>
        <p>codemon&copy;2020. Wszelkie prawa zastrzeżone.</p>
        <div>
          {links.map(({ id, path, name }) => (
            <Link key={id} to={path}>
              {name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
