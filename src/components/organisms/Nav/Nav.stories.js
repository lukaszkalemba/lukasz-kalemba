import React from 'react';
import Nav from './Nav';

export const homePageNav = () => <Nav path="/" isHomePage />;

export const regularNav = () => <Nav path="/projects" />;

export default {
  component: Nav,
  title: 'Organisms|Nav',
};
