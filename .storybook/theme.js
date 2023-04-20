// .storybook/YourTheme.js

import { create } from '@storybook/theming/create';
import logo from './logo.svg';
export default create({
  base: 'dark',
  // Typography
  brandTitle: 'UCSD Design Co',
  brandUrl: 'https://ucsddesign.co',
  brandImage: logo,
  brandTarget: '_self',

  colorSecondary: '#536DFE',

  // Toolbar default and active colors
  barSelectedColor: '#536DFE',
});
