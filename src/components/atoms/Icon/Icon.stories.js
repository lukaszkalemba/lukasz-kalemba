import React from 'react';
import { select, withKnobs } from '@storybook/addon-knobs';
import instagram from 'assets/svgs/icon_instagram.svg';
import facebook from 'assets/svgs/icon_facebook.svg';
import linkedin from 'assets/svgs/icon_linkedin.svg';
import dribbble from 'assets/svgs/icon_dribbble.svg';
import codemonLogo from 'assets/svgs/logo_codemon.svg';
import Icon from './Icon';

export const icon = () => (
  <div style={{ maxWidth: '200px' }}>
    <Icon
      src={select(
        'Icon Logo',
        { instagram, facebook, linkedin, dribbble, codemonLogo },
        instagram
      )}
    />
  </div>
);

export default {
  component: Icon,
  decorators: [withKnobs],
  title: 'Atoms|Icon',
};
