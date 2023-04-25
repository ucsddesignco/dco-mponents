// .storybook/YourTheme.js

import { create } from '@storybook/theming/create';
import logo from './logo.svg';
export default create({
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  base: 'light',
  // Typography
  brandTitle: 'UCSD Design Co',
  brandUrl: 'https://ucsddesign.co',
  brandImage: logo,
  brandTarget: '_self',

  colorSecondary: '#00796B',

  // Toolbar default and active colors
  barSelectedColor: '#00796B',
});
